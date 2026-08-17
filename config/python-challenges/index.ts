import type { PracticeExercise } from "../courses";
import { MODULE_1_CHALLENGES } from "./module-1-challenges";
import { MODULE_2_CHALLENGES } from "./module-2-challenges";
import { MODULE_3_CHALLENGES } from "./module-3-challenges";
import { MODULE_4_CHALLENGES } from "./module-4-challenges";
import { MODULE_5_CHALLENGES } from "./module-5-challenges";
import { MODULE_6_CHALLENGES } from "./module-6-challenges";

export const ALL_PYTHON_CHALLENGES: Record<string, PracticeExercise[]> = {
  ...MODULE_1_CHALLENGES,
  ...MODULE_2_CHALLENGES,
  ...MODULE_3_CHALLENGES,
  ...MODULE_4_CHALLENGES,
  ...MODULE_5_CHALLENGES,
  ...MODULE_6_CHALLENGES,
};
