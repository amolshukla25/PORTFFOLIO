import { MetadataRoute } from "next";

import { COURSES } from "@/config/courses";
import { Projects } from "@/config/projects";
import { siteConfig } from "@/config/site";
import { getAllBlogsMeta } from "@/lib/blogs";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.url;

  // Main pages — only the home page and content hubs (blogs/courses) carry a
  // lastModified, since they change as new content ships. Static portfolio
  // pages intentionally omit it so crawlers rely on their own recrawl logic.
  const routes: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/skills`,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/projects`,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/experience`,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contributions`,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blogs`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/courses`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/contact`,
      changeFrequency: "monthly",
      priority: 0.7,
    },
  ];

  // Blog post pages — each gets its own sitemap entry with correct date
  const blogs = getAllBlogsMeta();
  const blogRoutes: MetadataRoute.Sitemap = blogs.map((blog) => ({
    url: `${baseUrl}/blogs/${blog.slug}`,
    lastModified: new Date(blog.date),
    changeFrequency: "yearly" as const,
    priority: 0.7,
  }));

  // Project detail pages — static content, so no lastModified
  const projectRoutes: MetadataRoute.Sitemap = Projects.map((project) => ({
    url: `${baseUrl}/projects/${project.id}`,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  // Course detail pages — static content, so no lastModified
  const courseRoutes: MetadataRoute.Sitemap = COURSES.map((course) => ({
    url: `${baseUrl}/courses/${course.id}`,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  // lesson note pages — static content, so no lastModified
  const lessonRoutes: MetadataRoute.Sitemap = COURSES.flatMap((course) =>
    course.modules.flatMap((module) =>
      module.lessons.map((lesson) => ({
        url: `${baseUrl}/courses/${course.id}/${lesson.id}`,
        changeFrequency: "yearly" as const,
        priority: 0.5,
      }))
    )
  );

  return [...routes, ...blogRoutes, ...projectRoutes, ...courseRoutes, ...lessonRoutes];
}
