import { Metadata } from "next";

import PageContainer from "@/components/common/page-container";
import GithubRedirectCard from "@/components/contact/github-redirect-card";
import { ContactForm } from "@/components/forms/contact-form";
import { pagesConfig } from "@/config/pages";
import { siteConfig } from "@/config/site";
import { pageBreadcrumb } from "@/lib/seo";

export const metadata: Metadata = {
  title: pagesConfig.contact.metadata.title,
  description: pagesConfig.contact.metadata.description,
  alternates: {
    canonical: `${siteConfig.url}/contact`,
  },
};

export default function ContactPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            pageBreadcrumb(pagesConfig.contact.title, "/contact")
          ),
        }}
      />
      <PageContainer
        title={pagesConfig.contact.title}
        description={pagesConfig.contact.description}
        eyebrow="Connect"
      >
        <div className="flex flex-col lg:flex-row">
          <div className="flex-1">
            <ContactForm />
          </div>
        </div>
      </PageContainer>
    </>
  );
}
