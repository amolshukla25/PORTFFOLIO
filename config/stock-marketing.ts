import type { Course } from "./courses";
import { MODULE_1 } from "./stock-marketing-modules/module-1";
import { MODULE_2 } from "./stock-marketing-modules/module-2";
import { MODULE_3 } from "./stock-marketing-modules/module-3";
import { MODULE_4 } from "./stock-marketing-modules/module-4";
import { MODULE_5 } from "./stock-marketing-modules/module-5";
import { MODULE_6 } from "./stock-marketing-modules/module-6";
import { MODULE_7 } from "./stock-marketing-modules/module-7";
import { MODULE_8 } from "./stock-marketing-modules/module-8";
import { MODULE_9 } from "./stock-marketing-modules/module-9";
import { MODULE_10 } from "./stock-marketing-modules/module-10";

/**
 * Complete Stock Market Course — "From Beginner to Confident Investor".
 * Learn how the stock market works, analyze companies, and build wealth through investing.
 * 10 modules covering fundamentals, technical analysis, portfolio management,
 * dividend investing, global markets, valuation, company research, sector analysis,
 * risk management, and crisis survival.
 */
export const STOCK_MARKETING_COURSE: Course = {
  id: "stock-marketing",
  title: "Complete Stock Market Course: From Beginner to Confident Investor",
  shortDescription:
    "Master stock market investing with fundamental analysis, technical analysis, portfolio construction, dividend strategies, global markets, advanced valuation, SEC filings, sector analysis, and risk management.",
  detailedDescription:
    "This comprehensive stock market course takes you from understanding basic concepts to confidently evaluating and investing in stocks. You'll learn how the market works, master both fundamental and technical analysis, understand different asset classes, build a diversified portfolio, generate income through dividends, invest globally including emerging markets, value stocks using professional methods, analyze SEC filings and company reports, understand sector dynamics and competitive moats, and develop the psychological discipline and risk management skills needed for long-term success. Each lesson includes real-world examples, practical exercises, and actionable frameworks for making informed investment decisions.",
  category: ["Stock Market", "Investing", "Finance", "Fundamental Analysis", "Technical Analysis", "Portfolio Management", "Dividend Investing", "Global Markets", "Risk Management", "Valuation"],
  duration: "80 hrs",
  difficulty: "Beginner",
  rating: 4.9,
  instructor: "Amol Shukla",
  iconName: "chart",
  modules: [MODULE_1, MODULE_2, MODULE_3, MODULE_4, MODULE_5, MODULE_6, MODULE_7, MODULE_8, MODULE_9, MODULE_10],
};
