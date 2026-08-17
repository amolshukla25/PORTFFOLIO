import type { Course } from "./courses";
import { LLM_MODULE_1 } from "./ai-tools-modules/module-1-llm-fundamentals";
import { LLM_MODULE_2 } from "./ai-tools-modules/module-2-context-window";
import { LLM_MODULE_3 } from "./ai-tools-modules/module-3-temperature-sampling";
import { LLM_MODULE_4 } from "./ai-tools-modules/module-4-hallucinations";
import { LLM_MODULE_5 } from "./ai-tools-modules/module-5-agentic-loops";
import { LLM_MODULE_6 } from "./ai-tools-modules/module-6-advanced-llm";
import { PE_MODULE_1 } from "./ai-tools-modules/module-7-pe-foundations";
import { PE_MODULE_2 } from "./ai-tools-modules/module-8-pe-advanced";
import { PE_MODULE_3 } from "./ai-tools-modules/module-9-pe-reasoning";
import { PE_MODULE_4 } from "./ai-tools-modules/module-10-pe-playbook";

/**
 * Complete AI Tools Course — two tracks in one hub:
 *   1. LLM Course (Modules 1–6): how LLMs work, context windows, temperature &
 *      sampling, hallucinations, agentic loops, and advanced topics (RAG,
 *      embeddings, evaluation).
 *   2. Prompt Engineering Course (Modules 7–10): prompt anatomy, zero-shot /
 *      few-shot / chain-of-thought, structured outputs, agentic prompting,
 *      self-consistency, tree of thought, prompt chaining, code & content
 *      playbooks, injection safety, and prompt evaluation.
 * Designed and written by Amol Shukla for learners and AI tool builders.
 */
export const AI_TOOLS_COURSE: Course = {
  id: "ai-tools",
  title: "AI Tools: LLM & Prompt Engineering Mastery",
  shortDescription:
    "Two courses in one: master how LLMs work — context windows, temperature, hallucinations, agentic loops — and become a pro at prompt engineering.",
  detailedDescription:
    "AI Tools is Amol Shukla's hands-on learning hub for anyone who builds with or works alongside AI. Track 1 (LLM Course) takes you inside large language models: how they predict text, what the context window really is, how temperature and sampling control creativity, why hallucinations happen and how to stop them, and how agentic loops turn LLMs into autonomous workers — plus RAG, embeddings, and evaluation. Track 2 (Prompt Engineering Course) teaches the anatomy of effective prompts, zero-shot, few-shot, and chain-of-thought techniques, structured outputs, reusable templates, advanced reasoning (self-consistency, tree of thought, prompt chaining), real-world playbooks for code and content, prompt-injection safety, and evaluating prompts like an engineer — packed with worked examples. Every lesson includes notes, runnable code, visualization tips, and practice exercises.",
  category: ["AI Tools", "LLM", "Prompt Engineering", "Agentic AI", "Generative AI"],
  duration: "48 hrs",
  difficulty: "Beginner",
  rating: 4.9,
  instructor: "Amol Shukla",
  iconName: "network",
  modules: [
    LLM_MODULE_1,
    LLM_MODULE_2,
    LLM_MODULE_3,
    LLM_MODULE_4,
    LLM_MODULE_5,
    LLM_MODULE_6,
    PE_MODULE_1,
    PE_MODULE_2,
    PE_MODULE_3,
    PE_MODULE_4,
  ],
};
