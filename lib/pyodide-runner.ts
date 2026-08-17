/**
 * In-Browser Python Execution Engine with Pyodide WebAssembly
 * Captures stdout, handles test case assertions, execution timing, and error traces.
 */

export interface TestResult {
  id: string;
  name?: string;
  passed: boolean;
  input: string;
  expected: string;
  actual: string;
  stdout: string;
  error?: string;
  durationMs: number;
  isHidden?: boolean;
}

export interface ExecutionReport {
  success: boolean;
  totalTests: number;
  passedTests: number;
  results: TestResult[];
  overallStdout: string;
  overallStderr?: string;
  totalDurationMs: number;
  status: "PASSED" | "FAILED" | "RUNTIME_ERROR" | "TIMEOUT";
}

declare global {
  interface Window {
    loadPyodide?: (config: { indexURL?: string }) => Promise<any>;
    pyodideInstance?: any;
    pyodideLoadingPromise?: Promise<any>;
  }
}

const PYODIDE_CDN_URL = "https://cdn.jsdelivr.net/pyodide/v0.26.2/full/";

/**
 * Loads the Pyodide WebAssembly runtime dynamically from CDN
 */
export async function getPyodide(): Promise<any> {
  if (typeof window === "undefined") {
    throw new Error("Pyodide can only run in the browser environment.");
  }

  if (window.pyodideInstance) {
    return window.pyodideInstance;
  }

  if (window.pyodideLoadingPromise) {
    return window.pyodideLoadingPromise;
  }

  window.pyodideLoadingPromise = new Promise(async (resolve, reject) => {
    try {
      if (!window.loadPyodide) {
        const script = document.createElement("script");
        script.src = `${PYODIDE_CDN_URL}pyodide.js`;
        script.async = true;
        const scriptLoadPromise = new Promise((res, rej) => {
          script.onload = res;
          script.onerror = () => rej(new Error("Failed to load Pyodide WebAssembly script from CDN."));
        });
        document.head.appendChild(script);
        await scriptLoadPromise;
      }

      if (!window.loadPyodide) {
        throw new Error("Pyodide bootstrap script loaded but loadPyodide was not found on window.");
      }

      const pyodide = await window.loadPyodide({
        indexURL: PYODIDE_CDN_URL,
      });

      window.pyodideInstance = pyodide;
      resolve(pyodide);
    } catch (err) {
      window.pyodideLoadingPromise = undefined;
      reject(err);
    }
  });

  return window.pyodideLoadingPromise;
}

/**
 * Normalizes Python output string for comparison (strips trailing whitespace, matches quotes).
 */
function normalizeOutput(val: any): string {
  if (val === undefined || val === null) return "None";
  if (typeof val === "boolean") return val ? "True" : "False";
  const str = String(val).trim();
  return str;
}

/**
 * Executes Python user code and verifies against an array of test cases
 */
export async function runPythonTests(
  userCode: string,
  testCases: Array<{
    id: string;
    name?: string;
    inputCode: string;
    expectedOutput: string;
    isHidden?: boolean;
  }>
): Promise<ExecutionReport> {
  const startTime = performance.now();
  const results: TestResult[] = [];

  let pyodide: any;
  try {
    pyodide = await getPyodide();
  } catch (err: any) {
    return {
      success: false,
      totalTests: testCases.length,
      passedTests: 0,
      results: testCases.map((tc) => ({
        id: tc.id,
        name: tc.name,
        passed: false,
        input: tc.inputCode,
        expected: tc.expectedOutput,
        actual: "",
        stdout: "",
        error: `Pyodide load error: ${err.message || String(err)}`,
        durationMs: 0,
        isHidden: tc.isHidden,
      })),
      overallStdout: "",
      overallStderr: err.message,
      totalDurationMs: Math.round(performance.now() - startTime),
      status: "RUNTIME_ERROR",
    };
  }

  // Wrapper Python runner script that isolates stdout and runs test cases safely
  const runnerScript = `
import sys
import io
import json

def __run_test_suite__(user_source, tests_json):
    tests = json.loads(tests_json)
    results = []
    
    # Global execution namespace
    ns = {}
    
    # 1. Compile and execute user definitions
    capture_setup_stdout = io.StringIO()
    capture_setup_stderr = io.StringIO()
    sys.stdout = capture_setup_stdout
    sys.stderr = capture_setup_stderr
    
    setup_error = None
    try:
        exec(user_source, ns)
    except Exception as e:
        import traceback
        setup_error = traceback.format_exc()
    finally:
        sys.stdout = sys.__stdout__
        sys.stderr = sys.__stderr__
        
    initial_stdout = capture_setup_stdout.getvalue()
    initial_stderr = capture_setup_stderr.getvalue()
    
    if setup_error:
        for t in tests:
            results.append({
                "id": t.get("id"),
                "name": t.get("name"),
                "passed": False,
                "input": t.get("inputCode"),
                "expected": str(t.get("expectedOutput")),
                "actual": "",
                "stdout": initial_stdout,
                "error": setup_error,
                "isHidden": t.get("isHidden", False)
            })
        return json.dumps({
            "status": "RUNTIME_ERROR",
            "results": results,
            "overallStdout": initial_stdout,
            "overallStderr": setup_error
        })
        
    # 2. Run each test case in the populated namespace
    for t in tests:
        tc_id = t.get("id")
        tc_name = t.get("name")
        input_code = t.get("inputCode", "").strip()
        expected = str(t.get("expectedOutput", "")).strip()
        is_hidden = t.get("isHidden", False)
        
        test_out = io.StringIO()
        sys.stdout = test_out
        test_err = None
        actual_val = ""
        
        try:
            # If input_code is empty, we check initial stdout against expected output
            if not input_code:
                actual_val = initial_stdout.strip()
            else:
                # First try eval as an expression (e.g. solve(5))
                try:
                    res = eval(input_code, ns)
                    # If function returned None, check if it printed something
                    if res is None:
                        printed = test_out.getvalue().strip()
                        actual_val = printed if printed else "None"
                    else:
                        actual_val = str(res)
                except SyntaxError:
                    # If not an expression, exec as a statement block
                    exec(input_code, ns)
                    actual_val = test_out.getvalue().strip()
        except Exception as e:
            import traceback
            test_err = traceback.format_exc()
        finally:
            sys.stdout = sys.__stdout__
            
        tc_stdout = test_out.getvalue()
        
        # Compare actual vs expected
        passed = False
        if not test_err:
            norm_actual = actual_val.strip()
            norm_expected = expected.strip()
            # Direct match or representation match
            passed = (norm_actual == norm_expected) or (norm_actual.replace("'", '"') == norm_expected.replace("'", '"'))
            
        results.append({
            "id": tc_id,
            "name": tc_name,
            "passed": passed,
            "input": input_code,
            "expected": expected,
            "actual": actual_val if not test_err else "",
            "stdout": tc_stdout,
            "error": test_err,
            "isHidden": is_hidden
        })
        
    all_passed = all(r["passed"] for r in results)
    return json.dumps({
        "status": "PASSED" if all_passed else "FAILED",
        "results": results,
        "overallStdout": initial_stdout,
        "overallStderr": initial_stderr
    })
`;

  try {
    // Run setup runner in Pyodide
    pyodide.runPython(runnerScript);
    
    // Call the test suite with JSON serialized arguments
    const runSuite = pyodide.globals.get("__run_test_suite__");
    const testCasesJson = JSON.stringify(testCases);
    const rawResultJson = runSuite(userCode, testCasesJson);
    const parsed = JSON.parse(rawResultJson);

    const totalDurationMs = Math.round(performance.now() - startTime);
    const totalTests = parsed.results.length;
    const passedTests = parsed.results.filter((r: any) => r.passed).length;

    return {
      success: parsed.status === "PASSED",
      totalTests,
      passedTests,
      results: parsed.results.map((r: any) => ({
        ...r,
        durationMs: Math.round(totalDurationMs / (totalTests || 1)),
      })),
      overallStdout: parsed.overallStdout || "",
      overallStderr: parsed.overallStderr || undefined,
      totalDurationMs,
      status: parsed.status,
    };
  } catch (err: any) {
    const totalDurationMs = Math.round(performance.now() - startTime);
    return {
      success: false,
      totalTests: testCases.length,
      passedTests: 0,
      results: testCases.map((tc) => ({
        id: tc.id,
        name: tc.name,
        passed: false,
        input: tc.inputCode,
        expected: tc.expectedOutput,
        actual: "",
        stdout: "",
        error: err.message || String(err),
        durationMs: 0,
        isHidden: tc.isHidden,
      })),
      overallStdout: "",
      overallStderr: err.message || String(err),
      totalDurationMs,
      status: "RUNTIME_ERROR",
    };
  }
}
