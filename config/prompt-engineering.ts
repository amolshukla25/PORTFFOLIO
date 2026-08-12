import type { Course } from "./courses";
import { MODULE_1 } from "./prompt-engineering-modules/module-1";
import { MODULE_2 } from "./prompt-engineering-modules/module-2";
import { MODULE_3 } from "./prompt-engineering-modules/module-3";
import { MODULE_4 } from "./prompt-engineering-modules/module-4";

/**
 * Complete Prompt Engineering Course — "From Basics to Mastery".
 * Learn how to effectively communicate with AI models to get better results.
 */
export const PROMPT_ENGINEERING_COURSE: Course = {
  id: "prompt-engineering",
  title: "Complete Prompt Engineering Course: From Basics to Mastery",
  shortDescription:
    "Master the art of crafting effective prompts for ChatGPT, Claude, and other AI models to 10x your productivity.",
  detailedDescription:
    "This comprehensive prompt engineering course teaches you how to communicate effectively with large language models. You'll learn core techniques like zero-shot, few-shot, and chain-of-thought prompting, master structured outputs, build reusable templates, and develop advanced strategies for getting consistently excellent results from AI. Each lesson includes practical examples, real-world applications, and exercises you can apply immediately.",
  category: ["Prompt Engineering", "AI", "ChatGPT", "LLM", "Productivity"],
  duration: "40 hrs",
  difficulty: "Beginner",
  rating: 4.9,
  instructor: "Amol Shukla",
  iconName: "brain",
  modules: [MODULE_1, MODULE_2, MODULE_3, MODULE_4],
};
