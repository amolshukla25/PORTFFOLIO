import type { lesson } from "./courses";

export interface SkillTask {
  level: "Easy" | "Medium" | "Hard" | "Professional";
  task: string;
  check: string;
  hint: string;
  solution: string;
}

export interface SkillLab {
  id: string;
  title: string;
  summary: string;
  explanation: string;
  language: "python" | "sql";
  example: string;
  output: string;
  tasks: SkillTask[];
}

/** Notebook / Workbench assignments, deliberately separate from quizzes and
 * the Python code judge. Rendered as lesson prose on the server for no-JS readers. */
export function skillLesson(lab: SkillLab, setup: string): lesson {
  return {
    id: lab.id,
    title: lab.title,
    shortDescription: lab.summary,
    duration: "90 mins",
    readingTime: "12 mins read",
    codeLanguage: lab.language,
    codeSnippet: lab.example,
    codeOutput: lab.output,
    contentMarkdown: [
      "## What you will learn", lab.summary,
      "## Before you start", setup,
      "## Learn the idea", lab.explanation,
      "## Follow a worked example",
      `\`\`\`${lab.language}\n${lab.example}\n\`\`\``,
      "### Expected result", lab.output,
      "## Skill-development workshop",
      "These are practical assignments, not MCQs or code-judge puzzles. Work in your own notebook or MySQL client. Complete the levels in order; if a task feels difficult, follow the hint and compare with the reference only after making an attempt. Keep your result and a short explanation of what it means.",
      ...lab.tasks.map((t) => [
        `### ${t.level}: ${t.task}`,
        `**Success criteria:** ${t.check}`,
        `<details><summary>Need a starting point? Show the hint</summary>\n\n${t.hint}\n\n</details>`,
        `<details><summary>Reference solution — open after trying</summary>\n\n\`\`\`${lab.language}\n${t.solution}\n\`\`\`\n\n</details>`,
      ].join("\n\n")),
      "## Reflection and submission",
      "Save your queries/notebook and outputs. Write three sentences: what you changed, how you checked it, and one limitation. A correct chart or query without a clear interpretation is not a completed professional assignment.",
    ].join("\n\n"),
  };
}
