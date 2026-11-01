import Link from "next/link";
import { ArrowLeft, BookOpen, CheckCircle2, ChevronDown, Clock, Database, Download, FlaskConical, GraduationCap, ListChecks, Monitor, Trophy, User } from "lucide-react";
import { MYSQL_COURSE_FACTS, MYSQL_LESSONS, MYSQL_MODULES, MYSQL_SYLLABUS, mysqlResult } from "@/config/mysql/index";
import { HERO_SQL } from "@/config/mysql/extra-snippets";
import { siteConfig } from "@/config/site";
import { MYSQL_COURSE_FAQ, MYSQL_OUTCOMES } from "@/lib/mysql-course/seo";
import { LessonStatus, MobileStartBar, ProgressRing, StartButton } from "./course-progress-islands";
import { ErDiagram } from "./diagrams";
import ResultTable from "./result-table";
import { SqlPre } from "./sql-code";


export default function MysqlCourseLanding() {
  const f = MYSQL_COURSE_FACTS;
  const first = MYSQL_SYLLABUS[0].slug;
  const ids = (slug: string) => MYSQL_LESSONS.find((l) => l.slug === slug)!.questions.map((q) => q.id);
  const allIds = MYSQL_LESSONS.flatMap((l) => l.questions.map((q) => q.id));
  const capstone = MYSQL_LESSONS.find((l) => l.slug === "capstone-retail-report")!;
  const summaryQ = capstone.questions.find((q) => q.id === "C15-13")!;
  const summary = mysqlResult("shop", summaryQ.answerSql);
  const heroResult = mysqlResult("shop", HERO_SQL);

  return (
    <div className="relative pb-24 sm:pb-0">
      <div aria-hidden className="pointer-events-none absolute inset-x-0 top-0 h-[28rem] bg-[radial-gradient(60%_100%_at_50%_0%,hsl(var(--accent)/0.12),transparent_72%)]" />
      <div className="container relative max-w-6xl py-8 sm:py-12">
        <Link href="/courses" className="inline-flex min-h-11 items-center gap-2 text-sm text-muted-foreground hover:text-foreground">
          <ArrowLeft className="h-4 w-4" /> All courses
        </Link>

        {/* Hero */}
        <header className="mt-4 grid items-center gap-8 lg:grid-cols-[1.1fr_1fr]">
          <div className="space-y-5">
            <ul className="flex flex-wrap gap-2 text-xs">
              {[
                [GraduationCap, "Beginner — no SQL needed"],
                [Clock, `about ${f.hours} hours`],
                [BookOpen, `${f.lessons} lessons`],
                [ListChecks, `${f.problems} practice problems`],
                [Monitor, "Runs in your browser"],
              ].map(([Icon, t]) => {
                const I = Icon as typeof Clock;
                return (
                  <li key={t as string} className="inline-flex items-center gap-1.5 rounded-full border border-border bg-card px-3 py-1 text-muted-foreground">
                    <I className="h-3.5 w-3.5 text-accent" aria-hidden /> {t as string}
                  </li>
                );
              })}
            </ul>
            <h1 className="text-balance font-heading text-4xl font-bold leading-[1.08] tracking-tight sm:text-5xl">
              MySQL course: practical SQL from beginner to professional
            </h1>
            <p className="max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground">
              Learn SQL on one small, realistic shop database. Every lesson explains an idea with real MySQL 8 output, walks you through an example, and gives you 15–20 problems you can run and check right here — then you finish with an audited sales report for your portfolio.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <StartButton firstSlug={first} />
              <Link href="/courses/mysql/playground" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-border px-5 text-sm font-semibold hover:bg-muted">
                <FlaskConical className="h-4 w-4" /> Open the playground
              </Link>
            </div>
            <p className="text-sm text-muted-foreground">Free · no sign-up · by <Link href="/" className="font-medium text-foreground hover:text-accent">{siteConfig.authorName}</Link> · MySQL {f.mysqlVersion}</p>
          </div>
          <div className="min-w-0 space-y-2 rounded-3xl border border-border bg-card p-3 shadow-sm">
            <p className="px-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-muted-foreground">What you’ll write by lesson 8</p>
            <SqlPre sql={HERO_SQL} className="text-[12.5px]" />
            {heroResult && <ResultTable tone="expected" caption="MySQL result" columns={heroResult.sets[0].columns} rows={heroResult.sets[0].rows} />}
          </div>
        </header>

        <div className="mt-8">
          <ProgressRing lessons={MYSQL_SYLLABUS.map((l) => l.slug)} problems={f.problems} questionIds={allIds} />
        </div>

        {/* Outcomes + prerequisites */}
        <section className="mt-14 grid gap-6 lg:grid-cols-[1.4fr_1fr]" aria-labelledby="outcomes">
          <div className="rounded-3xl border border-border bg-card p-6">
            <h2 id="outcomes" className="font-heading text-2xl font-semibold tracking-tight">What you’ll be able to do</h2>
            <ul className="mt-4 grid gap-3 sm:grid-cols-2">
              {MYSQL_OUTCOMES.map((o) => (
                <li key={o} className="flex gap-2.5 text-[15px] leading-relaxed"><CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-success" aria-hidden />{o}</li>
              ))}
            </ul>
          </div>
          <div className="space-y-4 rounded-3xl border border-border p-6">
            <h2 className="font-heading text-xl font-semibold">Before you start</h2>
            <dl className="space-y-3 text-[15px]">
              <div><dt className="font-medium">Prerequisites</dt><dd className="text-muted-foreground">None. No SQL, Python or programming needed.</dd></div>
              <div><dt className="font-medium">You need</dt><dd className="text-muted-foreground">A browser to start. A laptop with MySQL 8.4 + Workbench (free) from lesson 2 — installation is covered step by step.</dd></div>
              <div><dt className="font-medium">Who it’s for</dt><dd className="text-muted-foreground">Students, aspiring data analysts and developers, and anyone who works with spreadsheets and wants answers faster.</dd></div>
            </dl>
          </div>
        </section>

        {/* Syllabus */}
        <section className="mt-14" aria-labelledby="syllabus">
          <div className="flex flex-wrap items-end justify-between gap-3">
            <h2 id="syllabus" className="font-heading text-3xl font-semibold tracking-tight">Syllabus</h2>
            <p className="text-sm text-muted-foreground">{f.modules} modules · {f.lessons} lessons · {f.problems} problems · {f.quizQuestions} quiz questions</p>
          </div>
          <div className="mt-4 space-y-3">
            {MYSQL_MODULES.map((m, mi) => {
              const lessons = MYSQL_SYLLABUS.map((l, i) => ({ ...l, n: i + 1 })).filter((l) => l.module === m.number);
              const minutes = lessons.reduce((s, l) => s + l.minutes, 0);
              return (
                <details key={m.number} open={mi === 0} className="group overflow-hidden rounded-2xl border border-border bg-card">
                  <summary className="flex min-h-16 cursor-pointer list-none items-center gap-4 px-4 py-3 hover:bg-muted/50 sm:px-5 [&::-webkit-details-marker]:hidden">
                    <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-accent/10 text-sm font-bold text-accent">{m.number}</span>
                    <span className="min-w-0 flex-1">
                      <span className="block font-semibold">Module {m.number}: {m.title}</span>
                      <span className="block text-sm text-muted-foreground">{m.description}</span>
                    </span>
                    <span className="hidden shrink-0 text-xs text-muted-foreground sm:block">{lessons.length} lessons · {Math.round(minutes / 6) / 10} h</span>
                    <ChevronDown className="h-4 w-4 shrink-0 text-muted-foreground transition-transform group-open:rotate-180" aria-hidden />
                  </summary>
                  <ol className="border-t border-border p-1.5 sm:p-2">
                    {lessons.map((l) => (
                      <li key={l.slug}>
                        <Link href={`/courses/mysql/${l.slug}`} className="flex items-start gap-3 rounded-xl px-3 py-3 hover:bg-muted/60">
                          <LessonStatus slug={l.slug} questionIds={ids(l.slug)} />
                          <span className="min-w-0 flex-1">
                            <span className="block text-[15px] font-medium leading-snug"><span className="mr-1.5 font-mono text-xs text-muted-foreground">{l.n}.</span>{l.title}</span>
                            <span className="mt-1 block text-sm leading-relaxed text-muted-foreground">{l.summary}</span>
                            <span className="mt-1 block text-xs text-muted-foreground">{l.minutes} min · {l.questions} problems · {l.quiz}-question quiz</span>
                          </span>
                        </Link>
                      </li>
                    ))}
                  </ol>
                </details>
              );
            })}
          </div>
        </section>

        {/* Capstone */}
        <section className="mt-14 grid gap-6 rounded-3xl border border-success/30 bg-success/5 p-6 lg:grid-cols-[1fr_1.2fr]" aria-labelledby="build">
          <div className="space-y-3">
            <p className="inline-flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-[0.14em] text-success"><Trophy className="h-3.5 w-3.5" /> What you’ll build</p>
            <h2 id="build" className="font-heading text-2xl font-semibold tracking-tight">An audited Q1 sales report — your portfolio piece</h2>
            <p className="text-[15px] leading-relaxed text-muted-foreground">
              The capstone turns a business brief into KPIs, monthly, category, city and customer breakdowns, a reconciliation that proves every number adds up, data-quality checks and a README — scored with a published rubric and reviewed by your trainer if you are in a batch.
            </p>
            <Link href="/courses/mysql/capstone-retail-report" className="inline-flex min-h-11 items-center gap-1.5 text-sm font-semibold text-success hover:underline">Read the capstone brief →</Link>
          </div>
          {summary && <ResultTable tone="expected" caption="Capstone executive summary (real output)" columns={summary.sets[0].columns} rows={summary.sets[0].rows} />}
        </section>

        {/* Dataset */}
        <section className="mt-14 space-y-4" aria-labelledby="data">
          <h2 id="data" className="flex items-center gap-2 font-heading text-2xl font-semibold tracking-tight"><Database className="h-5 w-5 text-accent" /> The practice database</h2>
          <p className="max-w-3xl text-[15px] leading-relaxed text-muted-foreground">
            Learning Shop is a fictional retail business with four related tables — the same shape as most real e-commerce and billing systems. The small version (6 customers, 8 orders) lets you check every answer by eye; the large version (4,000 orders over 18 months) is for window functions, indexes and EXPLAIN. Click a table to see its rows.
          </p>
          <ErDiagram />
          <div className="flex flex-wrap gap-2">
            {[
              ["/downloads/mysql-retail-lab.sql", "Small shop (.sql)"],
              ["/downloads/mysql-retail-lab-reset.sql", "Reset script (.sql)"],
              ["/downloads/mysql-retail-large.sql", "Large dataset (.sql, 0.4 MB)"],
            ].map(([href, label]) => (
              <a key={href} href={href} download className="inline-flex min-h-11 items-center gap-2 rounded-xl border border-border px-4 text-sm hover:bg-muted"><Download className="h-4 w-4" /> {label}</a>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section className="mt-14" aria-labelledby="faq">
          <h2 id="faq" className="font-heading text-2xl font-semibold tracking-tight">Frequently asked questions</h2>
          <div className="mt-4 divide-y divide-border rounded-2xl border border-border bg-card">
            {MYSQL_COURSE_FAQ.map((q, i) => (
              <details key={q.q} className="group px-5" open={i === 0}>
                <summary className="flex min-h-12 cursor-pointer list-none items-center justify-between gap-3 py-3 [&::-webkit-details-marker]:hidden">
                  <h3 className="text-[15px] font-medium">{q.q}</h3>
                  <ChevronDown className="h-4 w-4 shrink-0 transition-transform group-open:rotate-180" aria-hidden />
                </summary>
                <p className="pb-4 text-[15px] leading-relaxed text-muted-foreground">{q.a}</p>
              </details>
            ))}
          </div>
        </section>

        {/* Instructor */}
        <section className="mt-14 flex flex-col gap-4 rounded-3xl border border-border p-6 sm:flex-row sm:items-center" aria-labelledby="instructor">
          <div className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-primary/10 text-primary"><User className="h-6 w-6" /></div>
          <div className="flex-1">
            <h2 id="instructor" className="font-heading text-xl font-semibold">Your instructor: {siteConfig.authorName}</h2>
            <p className="mt-1 text-[15px] leading-relaxed text-muted-foreground">AI Developer and Trainer. Teaches SQL, Python and applied AI to students and working professionals. See his projects and experience on this site.</p>
          </div>
          <Link href="/experience" className="inline-flex min-h-11 items-center rounded-xl border border-border px-4 text-sm font-medium hover:bg-muted">Experience</Link>
        </section>

        <div className="mt-14 hidden justify-center sm:flex">
          <StartButton firstSlug={first} />
        </div>
      </div>
      <MobileStartBar firstSlug={first} />
    </div>
  );
}
