import { REAL_LIFE_CONFIGS } from "./configs";
import { buildRealLifeLesson } from "./lesson";
import type { MysqlModule } from "../types";

export { REAL_LIFE_CONFIGS };

/** One lesson per database, in course order. */
export const REAL_LIFE_LESSONS = REAL_LIFE_CONFIGS.map(buildRealLifeLesson);

const MODULE_NAMES: Record<string, string> = {
  hospital: "Hospital records",
  bank: "Retail banking",
  ecommerce: "E-commerce marketplace",
  college: "College records",
  rides: "Ride-hailing",
  streaming: "Streaming service",
};

/** Modules 6–11 of the MySQL course. */
export const REAL_LIFE_MODULES: MysqlModule[] = REAL_LIFE_CONFIGS.map((c) => ({
  number: c.number as MysqlModule["number"],
  title: `Real life database: ${MODULE_NAMES[c.dataset] ?? c.shortTitle}`,
  description: `50 practice problems on a 2,000-row ${c.dataset} database, all checked in the browser.`,
}));
