import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import { AnimatedSection } from "@/components/common/animated-section";
import { ClientPageWrapper } from "@/components/common/client-page-wrapper";
import { Icons } from "@/components/common/icons";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import ChipContainer from "@/components/ui/chip-container";
import { ResponsiveTabs } from "@/components/ui/responsive-tabs";
import { experiences } from "@/config/experience";
import { siteConfig } from "@/config/site";
import { truncateMetaTitle } from "@/lib/utils";

interface ExperienceDetailPageProps {
  params: Promise<{
    expId: string;
  }>;
}

// Helper function to extract year from date
const getYearFromDate = (date: Date): string => {
  return new Date(date).getFullYear().toString();
};

// Helper function to get duration text
const getDurationText = (
  startDate: Date,
  endDate: Date | "Present"
): string => {
  const startYear = getYearFromDate(startDate);
  const endYear =
    typeof endDate === "string" ? "Present" : getYearFromDate(endDate);
  return `${startYear} - ${endYear}`;
};

export async function generateMetadata({
  params,
}: ExperienceDetailPageProps): Promise<Metadata> {
  const { expId } = await params;
  const experience = experiences.find((c) => c.id === expId);

  if (!experience) {
    return {
      title: "Experience Not Found",
    };
  }

  const description = experience.description[0];

  return {
    title: `${experience.position} at ${experience.company} | Experience`,
    description: `${description} — Work experience of ${siteConfig.authorName} as ${experience.position} at ${experience.company}.`,
    keywords: [
      ...experience.skills,
      experience.position,
      experience.company,
      siteConfig.authorName,
      "work experience",
      "career",
    ],
    alternates: {
      canonical: `${siteConfig.url}/experience/${expId}`,
    },
    openGraph: {
      title: truncateMetaTitle(`${experience.position} at ${experience.company}`),
      description,
      url: `${siteConfig.url}/experience/${expId}`,
      siteName: siteConfig.name,
      type: "article",
      images: [
        {
          url: siteConfig.ogImage,
          width: 1200,
          height: 630,
          alt: `${experience.position} at ${experience.company}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: truncateMetaTitle(`${experience.position} at ${experience.company}`),
      description,
      images: [siteConfig.ogImage],
      creator: `@${siteConfig.username}`,
    },
    robots: {
      index: true,
      follow: true,
      "max-image-preview": "large" as const,
      "max-snippet": -1,
    },
  };
}

export default async function ExperienceDetailPage({
  params,
}: ExperienceDetailPageProps) {
  const { expId } = await params;
  const experience = experiences.find((c) => c.id === expId);

  if (!experience) {
    notFound();
  }

  const tabItems = [
    {
      value: "summary",
      label: "Summary",
      content: (
        <AnimatedSection delay={0.3}>
          <div>
            <h3 className="font-semibold mb-4 text-sm uppercase tracking-wide text-muted-foreground">
              Role Summary
            </h3>
            <ul className="space-y-3">
              {experience.description.map((desc, idx) => (
                <li
                  key={idx}
                  className="text-base leading-relaxed flex items-start gap-3"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                  {desc}
                </li>
              ))}
            </ul>
          </div>
        </AnimatedSection>
      ),
    },
    {
      value: "achievements",
      label: "Achievements",
      content: (
        <AnimatedSection delay={0.3}>
          <div>
            <h3 className="font-semibold mb-4 text-sm uppercase tracking-wide text-muted-foreground">
              Key Achievements
            </h3>
            <ul className="space-y-3">
              {experience.achievements.map((achievement, idx) => (
                <li
                  key={idx}
                  className="text-base leading-relaxed flex items-start gap-3"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                  {achievement}
                </li>
              ))}
            </ul>
          </div>
        </AnimatedSection>
      ),
    },
    {
      value: "skills",
      label: "Skills",
      content: (
        <AnimatedSection delay={0.3}>
          <div>
            <h3 className="font-semibold mb-4 text-sm uppercase tracking-wide text-muted-foreground">
              Technologies & Skills
            </h3>
            <ChipContainer textArr={experience.skills} />
            <p className="mt-4 text-sm text-muted-foreground">
              These are the primary technologies and skills utilized during my
              time at {experience.company}.
            </p>
          </div>
        </AnimatedSection>
      ),
    },
  ];

  // Related experience: same skills, ranked by overlap
  const relatedExperience = experiences
    .filter((e) => e.id !== experience.id)
    .map((e) => ({
      exp: e,
      overlap: e.skills.filter((s) => experience.skills.includes(s)).length,
    }))
    .filter((r) => r.overlap > 0)
    .sort((a, b) => b.overlap - a.overlap)
    .slice(0, 2)
    .map((r) => r.exp);

  // Experience JSON-LD
  const experienceSchema = {
    "@context": "https://schema.org",
    "@type": "WorkExperience",
    name: experience.position,
    description: experience.description.join(" "),
    url: `${siteConfig.url}/experience/${experience.id}`,
    author: {
      "@type": "Person",
      name: siteConfig.authorName,
      url: siteConfig.url,
    },
    keywords: experience.skills.join(", "),
    startDate: experience.startDate.toISOString(),
    ...(experience.endDate !== "Present" && {
      endDate: experience.endDate.toISOString(),
    }),
    ...(experience.companyUrl && {
      url: experience.companyUrl,
    }),
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: siteConfig.url,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Experience",
        item: `${siteConfig.url}/experience`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: `${experience.position} at ${experience.company}`,
        item: `${siteConfig.url}/experience/${experience.id}`,
      },
    ],
  };

  return (
    <ClientPageWrapper>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(experienceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <div className="container max-w-5xl mx-auto py-8 px-4">
        <AnimatedSection className="mb-6">
          <Button variant="ghost" size="sm" className="mb-4" asChild>
            <Link href="/experience">
              <Icons.chevronLeft className="mr-2 h-4 w-4" />
              Back to Experience
            </Link>
          </Button>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <Card className="overflow-hidden rounded-lg border bg-background p-2 transition-all duration-300">
            <CardHeader className="pb-6">
              <div className="flex flex-col gap-4">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                  <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4">
                    {experience.logo && (
                      <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-lg border-2 border-border overflow-hidden bg-white flex-shrink-0">
                        <Image
                          src={experience.logo}
                          alt={experience.company}
                          width={80}
                          height={80}
                          className="w-full h-full object-contain p-2"
                        />
                      </div>
                    )}
                    <div className="flex-1 text-center sm:text-left">
                      <h1 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2">
                        {experience.position}
                      </h1>
                      <div className="flex items-center justify-center sm:justify-start gap-2 mb-2">
                        <span className="text-md font-medium text-muted-foreground">
                          {experience.company}
                        </span>
                        {experience.companyUrl && (
                          <a
                            href={experience.companyUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-muted-foreground hover:text-foreground transition-colors"
                          >
                            <Icons.externalLink className="w-4 h-4" />
                          </a>
                        )}
                      </div>
                      <p className="text-muted-foreground">
                        {experience.location}
                      </p>
                    </div>
                  </div>
                  <div className="flex justify-center sm:justify-end">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-accent/10 text-accent border border-accent/20">
                      {getDurationText(
                        experience.startDate,
                        experience.endDate
                      )}
                    </span>
                  </div>
                </div>
              </div>
            </CardHeader>

            <CardContent>
              <ResponsiveTabs items={tabItems} defaultValue="summary" />
            </CardContent>
          </Card>
        </AnimatedSection>

        {/* Related experience — internal linking for SEO */}
        {relatedExperience.length > 0 && (
          <AnimatedSection delay={0.35} className="mt-10 border-t border-border pt-8">
            <h2 className="font-heading text-2xl font-bold text-foreground mb-6">
              Related experience
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {relatedExperience.map((re) => (
                <Link
                  key={re.id}
                  href={`/experience/${re.id}`}
                  className="card-hover group flex items-start gap-4 rounded-2xl border border-border bg-background p-5"
                >
                  <div className="flex-1 min-w-0">
                    <h3 className="font-bold text-foreground transition-colors group-hover:text-accent">
                      {re.position}
                    </h3>
                    <p className="mt-0.5 text-sm font-medium text-muted-foreground">
                      {re.company}
                    </p>
                    <p className="mt-1 line-clamp-1 text-sm text-muted-foreground/80">
                      {re.description[0]}
                    </p>
                  </div>
                  <Icons.chevronRight
                    aria-hidden="true"
                    className="mt-1 h-4 w-4 flex-shrink-0 text-muted-foreground transition-all duration-200 group-hover:translate-x-0.5 group-hover:text-accent"
                  />
                </Link>
              ))}
            </div>
          </AnimatedSection>
        )}

        <AnimatedSection delay={0.4} className="flex justify-center mt-8">
          <Button variant="outline" asChild>
            <Link href="/experience">
              <Icons.chevronLeft className="mr-2 h-4 w-4" />
              View All Experience
            </Link>
          </Button>
        </AnimatedSection>
      </div>
    </ClientPageWrapper>
  );
}
