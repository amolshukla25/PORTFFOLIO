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
import { AnimatedText } from "@/components/common/animated-text";
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

const getDifficultyBadge = (difficulty: PromptItem["difficulty"]) => {
  switch (difficulty) {
    case "Mastery":
      return "border-purple-500/30 bg-purple-500/10 text-purple-400";
    case "Advanced":
      return "border-accent/30 bg-accent/10 text-accent";
    case "Intermediate":
      return "border-emerald-500/30 bg-emerald-500/10 text-emerald-400";
    default:
      return "border-border bg-muted/50 text-muted-foreground";
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
      className="container space-y-10 py-16"
      id="prompts"
    >
      {/* Header */}
      <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
        <span className="eyebrow">
          <Icons.aurora className="h-3.5 w-3.5" /> Prompt Vault
        </span>
        <AnimatedText
          as="h2"
          className="text-gradient font-heading text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl"
        >
          Amol Shukla's Production AI System Prompts
        </AnimatedText>
        <AnimatedText
          as="p"
          delay={0.2}
          className="max-w-[85%] leading-relaxed text-muted-foreground sm:text-lg"
        >
          Amol Shukla's curated collection of production-tested system prompts, agentic ReAct patterns, and LLM optimization templates engineered for real-world applications.
        </AnimatedText>
      </div>

      {/* Controls: Search & Category Filter Tabs */}
      <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
        {/* Category Tabs */}
        <div className="flex w-full flex-wrap items-center justify-center gap-1.5 rounded-2xl border border-border/60 bg-muted/30 p-1.5 backdrop-blur md:w-auto md:justify-start">
          {PROMPT_CATEGORIES.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={cn(
                "rounded-xl px-3.5 py-1.5 text-xs font-semibold transition-all duration-200",
                selectedCategory === category
                  ? "bg-accent text-accent-foreground shadow-md shadow-accent/20"
                  : "text-muted-foreground hover:bg-background/60 hover:text-foreground"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Search Bar */}
        <div className="relative w-full max-w-xs">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <input
            type="text"
            placeholder="Search prompts or variables..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full rounded-xl border border-border/80 bg-background/80 py-2 pl-9 pr-4 text-xs font-medium text-foreground placeholder:text-muted-foreground/60 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery("")}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-muted-foreground hover:text-foreground"
            >
              ✕
            </button>
          )}
        </div>
      </div>

      {/* Prompts Grid */}
      {filteredPrompts.length === 0 ? (
        <div className="flex flex-col items-center justify-center rounded-2xl border border-dashed border-border py-12 text-center">
          <Terminal className="h-8 w-8 text-muted-foreground/50" />
          <p className="mt-3 text-sm font-medium text-muted-foreground">
            No prompts found matching your search query.
          </p>
          <Button
            variant="link"
            size="sm"
            onClick={() => {
              setSearchQuery("");
              setSelectedCategory("All");
            }}
            className="mt-1 text-xs text-accent"
          >
            Clear filters
          </Button>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredPrompts.map((prompt, index) => (
            <AnimatedSection
              key={prompt.id}
              delay={0.08 * (index + 1)}
              direction="up"
              className="h-full w-full min-w-0"
            >
              <div className="card-hover group relative flex h-full flex-col justify-between overflow-hidden rounded-2xl border border-border/80 bg-background/80 p-6 backdrop-blur transition-all duration-300 hover:border-accent/50 hover:shadow-xl hover:shadow-accent/5">
                {/* Top Section */}
                <div className="space-y-4">
                  {/* Header badges */}
                  <div className="flex items-center justify-between gap-2">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-accent/15 via-accent/5 to-transparent text-accent transition-transform duration-300 group-hover:scale-105">
                      {getPromptIcon(prompt.iconName, "h-5 w-5")}
                    </div>
                    <div className="flex items-center gap-1.5">
                      <span className="rounded-full bg-accent/10 px-2.5 py-0.5 text-[11px] font-semibold text-accent">
                        {prompt.category}
                      </span>
                      <span
                        className={cn(
                          "rounded-full border px-2 py-0.5 text-[10px] font-semibold",
                          getDifficultyBadge(prompt.difficulty)
                        )}
                      >
                        {prompt.difficulty}
                      </span>
                    </div>
                  </div>

                  {/* Title & Summary */}
                  <div>
                    <h3 className="font-heading text-lg font-bold text-foreground transition-colors group-hover:text-accent">
                      {prompt.title}
                    </h3>
                    <p className="mt-2 line-clamp-3 text-xs leading-relaxed text-muted-foreground">
                      {prompt.summary}
                    </p>
                  </div>

                  {/* Target Model Badge */}
                  <div className="flex items-center gap-1.5 text-[11px] text-muted-foreground">
                    <Sparkle className="h-3 w-3 text-accent" />
                    <span>Target: </span>
                    <span className="font-semibold text-foreground">
                      {prompt.targetModel}
                    </span>
                  </div>

                  {/* Variable Pills */}
                  <div className="flex flex-wrap gap-1 pt-1">
                    {prompt.variables.map((v) => (
                      <span
                        key={v}
                        className="rounded-md border border-border/60 bg-muted/40 px-2 py-0.5 font-mono text-[10px] text-muted-foreground"
                      >
                        {v}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Bottom Actions */}
                <div className="mt-6 flex items-center justify-between border-t border-border/60 pt-4">
                  <button
                    onClick={() => setActiveModalPrompt(prompt)}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-accent transition-colors hover:text-accent/80"
                  >
                    <Eye className="h-3.5 w-3.5" />
                    View Prompt
                  </button>

                  <Button
                    size="sm"
                    variant={copiedId === prompt.id ? "default" : "outline"}
                    onClick={() => handleCopy(prompt.id, prompt.fullPrompt)}
                    className={cn(
                      "h-8 gap-1.5 rounded-xl px-3 text-xs transition-all",
                      copiedId === prompt.id
                        ? "bg-success text-success-foreground hover:bg-success"
                        : "hover:border-accent hover:text-accent"
                    )}
                  >
                    {copiedId === prompt.id ? (
                      <>
                        <Check className="h-3.5 w-3.5" />
                        Copied!
                      </>
                    ) : (
                      <>
                        <Copy className="h-3.5 w-3.5" />
                        Copy Prompt
                      </>
                    )}
                  </Button>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      )}

      {/* Full Prompt View Modal */}
      {activeModalPrompt && (
        <Modal
          title={activeModalPrompt.title}
          description={`Category: ${activeModalPrompt.category} • Target Model: ${activeModalPrompt.targetModel}`}
          isOpen={!!activeModalPrompt}
          onClose={() => setActiveModalPrompt(null)}
        >
          <div className="mt-4 space-y-5 text-left max-h-[70vh] overflow-y-auto pr-1">
            {/* Use Case */}
            <div className="rounded-xl border border-border/60 bg-muted/30 p-3.5">
              <h4 className="text-xs font-bold uppercase tracking-wider text-accent">
                💡 When to Use
              </h4>
              <p className="mt-1 text-xs text-muted-foreground leading-relaxed">
                {activeModalPrompt.useCase}
              </p>
            </div>

            {/* Configured Variables */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-foreground mb-2">
                ⚙️ Configurable Variables
              </h4>
              <div className="flex flex-wrap gap-1.5">
                {activeModalPrompt.variables.map((variable) => (
                  <span
                    key={variable}
                    className="rounded-lg border border-accent/30 bg-accent/10 px-2.5 py-1 font-mono text-xs font-medium text-accent"
                  >
                    {variable}
                  </span>
                ))}
              </div>
            </div>

            {/* Prompt Code Block */}
            <div>
              <div className="flex items-center justify-between mb-1.5">
                <h4 className="text-xs font-bold uppercase tracking-wider text-foreground">
                  📄 Full System Prompt
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
                  className="h-7 gap-1 px-2.5 text-[11px] rounded-lg"
                >
                  {copiedId === activeModalPrompt.id + "-modal" ? (
                    <>
                      <Check className="h-3 w-3 text-success" />
                      Copied!
                    </>
                  ) : (
                    <>
                      <Copy className="h-3 w-3" />
                      Copy Code
                    </>
                  )}
                </Button>
              </div>
              <pre className="max-h-60 overflow-x-auto rounded-xl border border-border/80 bg-zinc-950 p-4 font-mono text-xs text-zinc-200 leading-relaxed whitespace-pre-wrap">
                {activeModalPrompt.fullPrompt}
              </pre>
            </div>

            {/* Sample Output */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-foreground mb-1.5">
                🎯 Example Execution Output
              </h4>
              <pre className="max-h-40 overflow-x-auto rounded-xl border border-border/60 bg-muted/40 p-3.5 font-mono text-xs text-muted-foreground leading-relaxed whitespace-pre-wrap">
                {activeModalPrompt.exampleOutput}
              </pre>
            </div>
          </div>
        </Modal>
      )}
    </AnimatedSection>
  );
};
