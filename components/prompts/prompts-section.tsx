"use client";

import React, { useState } from "react";
import {
  Brain,
  Workflow,
  Network,
  Code,
  Sparkles,
  Activity,
  Copy,
  Check,
  Eye,
  Search,
  Sparkle,
  Terminal,
  Zap,
} from "lucide-react";
import { AnimatedSection } from "@/components/common/animated-section";
import { SectionHeading } from "@/components/common/section-heading";
import { Icons } from "@/components/common/icons";
import { Button } from "@/components/ui/button";
import { Modal } from "@/components/ui/modal";
import {
  FEATURED_PROMPTS,
  PROMPT_CATEGORIES,
  PromptItem,
} from "@/config/prompts";
import { cn } from "@/lib/utils";

const getPromptIcon = (iconName: string, className: string = "h-5 w-5") => {
  switch (iconName) {
    case "brain":
      return <Brain className={className} />;
    case "workflow":
      return <Workflow className={className} />;
    case "network":
      return <Network className={className} />;
    case "code":
      return <Code className={className} />;
    case "aurora":
      return <Sparkles className={className} />;
    case "activity":
      return <Activity className={className} />;
    default:
      return <Zap className={className} />;
  }
};

export const PromptsSection = () => {
  const [selectedCategory, setSelectedCategory] =
    useState<(typeof PROMPT_CATEGORIES)[number]>("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [activeModalPrompt, setActiveModalPrompt] = useState<PromptItem | null>(
    null
  );

  const handleCopy = (id: string, text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2200);
  };

  const filteredPrompts = FEATURED_PROMPTS.filter((prompt) => {
    const matchesCategory =
      selectedCategory === "All" || prompt.category === selectedCategory;
    const matchesSearch =
      prompt.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      prompt.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
      prompt.variables.some((v) =>
        v.toLowerCase().includes(searchQuery.toLowerCase())
      );
    return matchesCategory && matchesSearch;
  });

  return (
    <AnimatedSection
      direction="up"
      className="section section-band mt-6 px-4 py-10 sm:px-6 sm:py-14 lg:px-10"
      id="prompts"
    >
      <SectionHeading
        icon={Icons.aurora}
        eyebrow="Prompt vault"
        title="Production AI system prompts"
        description="A curated set of production-tested system prompts, agentic ReAct patterns and LLM templates — copy any of them straight into your own stack."
      />

      {/* Controls — search first on mobile, filters beside it from sm up. */}
      <div className="mt-7 flex flex-col gap-3 sm:mt-9 sm:flex-row sm:items-center sm:justify-between">
        <div className="relative order-1 w-full sm:order-2 sm:max-w-xs">
          <Search
            aria-hidden
            className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground"
          />
          <input
            type="search"
            aria-label="Search prompts or variables"
            placeholder="Search prompts or variables"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="h-11 w-full rounded-xl border border-border/80 bg-card pl-9 pr-9 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground/70 focus:border-accent/60 focus:ring-2 focus:ring-accent/15"
          />
          {searchQuery && (
            <button
              type="button"
              onClick={() => setSearchQuery("")}
              aria-label="Clear search"
              className="absolute right-2 top-1/2 grid h-7 w-7 -translate-y-1/2 place-items-center rounded-lg text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
            >
              <Icons.close className="h-3.5 w-3.5" />
            </button>
          )}
        </div>

        <div
          role="group"
          aria-label="Filter prompts by category"
          className="-mx-1 order-2 flex snap-x gap-1.5 overflow-x-auto px-1 pb-1 sm:order-1 sm:flex-wrap sm:overflow-visible sm:pb-0"
        >
          {PROMPT_CATEGORIES.map((category) => (
            <button
              key={category}
              type="button"
              aria-pressed={selectedCategory === category}
              onClick={() => setSelectedCategory(category)}
              className={cn(
                "h-9 shrink-0 snap-start rounded-lg px-3 text-xs font-medium transition-colors",
                selectedCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "border border-border/70 bg-card text-muted-foreground hover:text-foreground"
              )}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {filteredPrompts.length === 0 ? (
        <div className="mt-6 flex flex-col items-center justify-center rounded-2xl border border-dashed border-border/80 bg-card/50 px-4 py-12 text-center">
          <Terminal className="h-7 w-7 text-muted-foreground/60" />
          <p className="mt-3 text-sm font-medium text-muted-foreground">
            No prompts match that search.
          </p>
          <Button
            variant="link"
            size="sm"
            onClick={() => {
              setSearchQuery("");
              setSelectedCategory("All");
            }}
            className="mt-1 h-auto px-0 text-xs text-accent"
          >
            Clear filters
          </Button>
        </div>
      ) : (
        <div className="mt-6 grid grid-cols-1 gap-4 sm:mt-8 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3">
          {filteredPrompts.map((prompt, index) => (
            <AnimatedSection
              key={prompt.id}
              delay={0.06 * (index + 1)}
              direction="up"
              className="h-full min-w-0"
            >
              <div className="surface-card hover-lift group flex h-full flex-col p-5 sm:p-6">
                <div className="flex-1">
                  <div className="flex items-start justify-between gap-2">
                    <span className="tile-tone h-10 w-10 shrink-0">
                      {getPromptIcon(prompt.iconName, "h-5 w-5")}
                    </span>
                    <div className="flex flex-wrap justify-end gap-1.5">
                      <span className="chip-accent">{prompt.category}</span>
                      <span className="chip">{prompt.difficulty}</span>
                    </div>
                  </div>

                  <h3 className="card-title mt-3 transition-colors group-hover:text-accent">
                    {prompt.title}
                  </h3>
                  <p className="card-body mt-2 line-clamp-3">{prompt.summary}</p>

                  <p className="mt-3 flex flex-wrap items-center gap-1.5 text-[11px] text-muted-foreground">
                    <Sparkle className="h-3 w-3 text-accent" aria-hidden />
                    Target
                    <span className="font-medium text-foreground">
                      {prompt.targetModel}
                    </span>
                  </p>

                  <div className="mt-2.5 flex flex-wrap gap-1">
                    {prompt.variables.map((v) => (
                      <span
                        key={v}
                        className="rounded-md border border-border/70 bg-muted/50 px-1.5 py-0.5 font-mono text-[10px] text-muted-foreground"
                      >
                        {v}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-4 flex items-center justify-between gap-2 border-t border-border/70 pt-3.5">
                  <button
                    type="button"
                    onClick={() => setActiveModalPrompt(prompt)}
                    className="inline-flex h-9 items-center gap-1.5 text-xs font-semibold text-accent transition-opacity hover:opacity-80"
                  >
                    <Eye className="h-3.5 w-3.5" />
                    View prompt
                  </button>

                  <Button
                    size="sm"
                    variant={copiedId === prompt.id ? "default" : "outline"}
                    onClick={() => handleCopy(prompt.id, prompt.fullPrompt)}
                    className={cn(
                      "h-9 gap-1.5 rounded-lg px-3 text-xs",
                      copiedId === prompt.id &&
                        "bg-success text-success-foreground hover:bg-success"
                    )}
                  >
                    {copiedId === prompt.id ? (
                      <>
                        <Check className="h-3.5 w-3.5" />
                        Copied
                      </>
                    ) : (
                      <>
                        <Copy className="h-3.5 w-3.5" />
                        Copy
                      </>
                    )}
                  </Button>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      )}

      {/* Full prompt view */}
      {activeModalPrompt && (
        <Modal
          title={activeModalPrompt.title}
          description={`${activeModalPrompt.category} · ${activeModalPrompt.difficulty} · ${activeModalPrompt.targetModel}`}
          isOpen={!!activeModalPrompt}
          onClose={() => setActiveModalPrompt(null)}
        >
          <div className="mt-4 max-h-[70vh] space-y-4 overflow-y-auto pr-1 text-left">
            <div className="rounded-xl border border-border/70 bg-muted/40 p-3.5">
              <h4 className="text-[11px] font-bold uppercase tracking-wider text-accent">
                When to use
              </h4>
              <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                {activeModalPrompt.useCase}
              </p>
            </div>

            <div>
              <h4 className="text-[11px] font-bold uppercase tracking-wider text-foreground">
                Variables
              </h4>
              <div className="mt-1.5 flex flex-wrap gap-1.5">
                {activeModalPrompt.variables.map((variable) => (
                  <span
                    key={variable}
                    className="rounded-lg border border-accent/30 bg-accent/10 px-2 py-0.5 font-mono text-[11px] font-medium text-accent"
                  >
                    {variable}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <div className="mb-1.5 flex items-center justify-between gap-2">
                <h4 className="text-[11px] font-bold uppercase tracking-wider text-foreground">
                  Full system prompt
                </h4>
                <Button
                  size="sm"
                  variant="outline"
                  onClick={() =>
                    handleCopy(
                      activeModalPrompt.id + "-modal",
                      activeModalPrompt.fullPrompt
                    )
                  }
                  className="h-8 gap-1 rounded-lg px-2.5 text-[11px]"
                >
                  {copiedId === activeModalPrompt.id + "-modal" ? (
                    <>
                      <Check className="h-3 w-3 text-success" />
                      Copied
                    </>
                  ) : (
                    <>
                      <Copy className="h-3 w-3" />
                      Copy
                    </>
                  )}
                </Button>
              </div>
              <pre className="max-h-60 overflow-x-auto whitespace-pre-wrap break-words rounded-xl border border-border/80 bg-zinc-950 p-4 font-mono text-[11px] leading-relaxed text-zinc-200">
                {activeModalPrompt.fullPrompt}
              </pre>
            </div>

            <div>
              <h4 className="mb-1.5 text-[11px] font-bold uppercase tracking-wider text-foreground">
                Example output
              </h4>
              <pre className="max-h-40 overflow-x-auto whitespace-pre-wrap break-words rounded-xl border border-border/70 bg-muted/40 p-3.5 font-mono text-[11px] leading-relaxed text-muted-foreground">
                {activeModalPrompt.exampleOutput}
              </pre>
            </div>
          </div>
        </Modal>
      )}
    </AnimatedSection>
  );
};
