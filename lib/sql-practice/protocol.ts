import type { CheckVerdict } from "./compare";
import type { DatasetId } from "./datasets";
import type { RunOutput } from "./engine";

export type WorkerRequest =
  | { id: number; type: "warm"; dataset: DatasetId }
  | { id: number; type: "reset"; dataset: DatasetId }
  | { id: number; type: "run"; dataset: DatasetId; sql: string }
  | {
      id: number;
      type: "check";
      dataset: DatasetId;
      sql: string;
      answerSql: string;
      expectError?: number;
      orderMatters?: boolean;
      numericTolerance?: number;
    };

export type WorkerResponse =
  | { id: number; type: "ready" }
  | { id: number; type: "run"; output: RunOutput }
  | { id: number; type: "check"; output: RunOutput; verdict: CheckVerdict }
  | { id: number; type: "fatal"; message: string };
