import type { Course } from "./courses";
import { MODULE_1 } from "./stock-marketing-modules/module-1";
import { MODULE_2 } from "./stock-marketing-modules/module-2";
import { MODULE_3 } from "./stock-marketing-modules/module-3";
import { MODULE_4 } from "./stock-marketing-modules/module-4";

/**
 * Complete Stock Market Course — "From Beginner to Confident Investor".
 * Learn how the stock market works, analyze companies, and build wealth through investing.
 */
export const STOCK_MARKETING_COURSE: Course = {
  id: "stock-marketing",
  title: "Complete Stock Market Course: From Beginner to Confident Investor",
  shortDescription:
    "Master stock market investing with fundamental analysis, technical analysis, portfolio construction, and risk management strategies.",
  detailedDescription:
    "This comprehensive stock market course takes you from understanding basic concepts to confidently evaluating and investing in stocks. You'll learn how the market works, master both fundamental and technical analysis, understand different asset classes, build a diversified portfolio, and develop the psychological discipline needed for long-term success. Each lesson includes real-world examples, practical exercises, and actionable frameworks for making informed investment decisions.",
  category: ["Stock Market", "Investing", "Finance", "Fundamental Analysis", "Technical Analysis", "Portfolio Management"],
  duration: "40 hrs",
  difficulty: "Beginner",
  rating: 4.9,
  instructor: "Amol Shukla",
  iconName: "chart",
  modules: [MODULE_1, MODULE_2, MODULE_3, MODULE_4],
};
