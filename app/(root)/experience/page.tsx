import { Metadata } from "next";

import PageContainer from "@/components/common/page-container";
import Timeline from "@/components/experience/timeline";
import { experiences } from "@/config/experience";
import { pagesConfig } from "@/config/pages";
import { siteConfig } from "@/config/site";
import { pageBreadcrumb } from "@/lib/seo";

export const metadata: Metadata = {
  title: `${pagesConfig.experience.metadata.title}`,
  description: `${pagesConfig.experience.metadata.description} Explore my professional journey and career milestones in AI and software development.`,
  keywords: [
    "experience timeline",
    "professional experience",
    "software developer experience",
    "developer portfolio",
    "work experience",
  ],
  alternates: {
    canonical: `${siteConfig.url}/experience`,
  },
};

export default function ExperiencePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            pageBreadcrumb(pagesConfig.experience.title, "/experience")
          ),
        }}
      />
      <PageContainer
        title={pagesConfig.experience.title}
        description={pagesConfig.experience.description}
        eyebrow="Career"
      >
        <Timeline experiences={experiences} />
      </PageContainer>
    </>
  );
}
