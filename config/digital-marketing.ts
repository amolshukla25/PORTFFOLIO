import type { Course } from "./courses";
import { MODULE_1 } from "./digital-marketing-modules/module-1";
import { MODULE_2 } from "./digital-marketing-modules/module-2";

/**
 * Complete Digital Marketing Course — "From Foundations to Mastery".
 * Covers the essential skills needed to succeed in digital marketing in 2026.
 */
export const DIGITAL_MARKETING_COURSE: Course = {
  id: "digital-marketing",
  title: "Complete Digital Marketing Course: From Foundations to Mastery",
  shortDescription:
    "Master SEO, content marketing, social media, and analytics with practical, real-world strategies for 2026.",
  detailedDescription:
    "This comprehensive digital marketing course takes you from absolute beginner to confident practitioner. You'll learn how search engines work, master keyword research, optimize on-page SEO, build effective content strategies, run successful social media campaigns, and measure everything with analytics. Each lesson includes practical exercises, real-world examples, and actionable frameworks you can implement immediately.",
  category: ["Digital Marketing", "SEO", "Social Media", "Content Marketing", "Analytics"],
  duration: "35 hrs",
  difficulty: "Beginner",
  rating: 4.8,
  instructor: "Amol Shukla",
  iconName: "activity",
  modules: [MODULE_1, MODULE_2],
};
