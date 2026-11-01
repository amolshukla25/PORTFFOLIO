import React from "react";
import { ClientPageWrapper } from "./client-page-wrapper";
import PageHeader from "./page-header";

interface PageContainerProps {
  title: string;
  description: string;
  eyebrow?: string;
  children: React.ReactNode;
}

export default function PageContainer({
  title,
  description,
  eyebrow,
  children,
}: PageContainerProps) {
  return (
    <ClientPageWrapper>
      <div>
        <PageHeader title={title} description={description} eyebrow={eyebrow} />
        <div className="min-w-0 max-w-full">
          {children}
        </div>
      </div>
    </ClientPageWrapper>
  );
}
