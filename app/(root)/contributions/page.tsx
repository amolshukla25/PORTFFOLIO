import { Metadata } from "next";

import PageContainer from "@/components/common/page-container";
import ContributionCard from "@/components/contributions/contribution-card";
import { contributionsUnsorted } from "@/config/contributions";
import { pagesConfig } from "@/config/pages";
import { siteConfig } from "@/config/site";
import { pageBreadcrumb } from "@/lib/seo";

export const metadata: Metadata = {
  title: pagesConfig.contributions.metadata.title,
  description: pagesConfig.contributions.metadata.description,
  alternates: {
    canonical: `${siteConfig.url}/contributions`,
  },
};

export default function ContributonsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            pageBreadcrumb(
              pagesConfig.contributions.title,
              "/contributions"
            )
          ),
        }}
      />
      <PageContainer
        title={pagesConfig.contributions.title}
        description={pagesConfig.contributions.description}
        eyebrow="Open Source"
      >
        <ContributionCard
          contributions={contributionsUnsorted}
        />
      </PageContainer>
    </>
  );
}
