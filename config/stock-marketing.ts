import type { Course } from "./courses";
import { MODULE_1 } from "./stock-marketing-modules/module-1";

/**
 * Complete Stock Market Course — "From Beginner to Confident Investor".
 * Learn how the stock market works, analyze companies, and build wealth through investing.
 */
export const STOCK_MARKETING_COURSE: Course = {
  id: "stock-marketing",
  title: "Complete Stock Market Course: From Beginner to Confident Investor",
  shortDescription:
    "Master stock market investing with fundamental analysis, portfolio construction, and risk management strategies.",
  detailedDescription:
    "This comprehensive stock market course takes you from understanding basic concepts to confidently evaluating and investing in stocks. You'll learn how the market works, master fundamental analysis, understand different asset classes, and build a diversified portfolio. Each lesson includes real-world examples, practical exercises, and actionable frameworks for making informed investment decisions.",
  category: ["Stock Market", "Investing", "Finance", "Fundamental Analysis", "Portfolio Management"],
  duration: "30 hrs",
  difficulty: "Beginner",
  rating: 4.9,
  instructor: "Amol Shukla",
  iconName: "chart",
  modules: [MODULE_1],
};
