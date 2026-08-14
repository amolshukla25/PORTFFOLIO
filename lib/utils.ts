import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatDate(input: string | number): string {
  const date = new Date(input);
  return date.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

export function formatDateFromObj(input: Date): string {
  const date = new Date(input);
  return date.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

/**
 * Truncates a string for SEO meta tags (og:title / twitter:title) so social
 * platforms and search engines don't cut it off mid-word. Breaks on a word
 * boundary and appends an ellipsis when the input exceeds maxLength.
 */
export function truncateMetaTitle(title: string, maxLength = 60): string {
  if (title.length <= maxLength) return title;
  let cut = title.slice(0, maxLength - 1).trimEnd();
  const lastSpace = cut.lastIndexOf(" ");
  if (lastSpace > 0) cut = cut.slice(0, lastSpace);
  return `${cut}…`;
}
