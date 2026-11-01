"use client";

import { useState } from "react";
import { BookOpen, Database, Download, ListChecks, Play } from "lucide-react";
import type { SkillLab } from "@/config/skill-labs";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const options = [
  { id: "lesson", label: "Lesson", note: "Understand one idea", icon: BookOpen },
  { id: "database", label: "Database", note: "Get your ready-made data", icon: Database },
  { id: "guided", label: "Guided Practice", note: "Follow a worked example", icon: Play },
  { id: "questions", label: "Practice Questions", note: "Try it yourself", icon: ListChecks },
];

function SQL({ children }: { children: string }) {
  return <pre className="my-3 overflow-x-auto rounded-xl bg-code-bg p-4 text-sm leading-relaxed text-code-fg"><code>{children}</code></pre>;
}

export default function MysqlWorkspace({ lab, contentHtml }: { lab: SkillLab; contentHtml: string }) {
  const [tab, setTab] = useState("lesson");
  const noImport = ["what-is-a-database", "install-connect-mysql"].includes(lab.id);

  return (
    <Tabs value={tab} onValueChange={setTab} className="space-y-6">
      <div className="rounded-2xl border border-border bg-card p-4 sm:p-5">
        <p className="text-xs font-semibold uppercase tracking-wider text-accent">Your SQL learning path</p>
        <p className="mt-2 text-sm text-muted-foreground">Learn → prepare your data → follow along → try it yourself. Take one step at a time.</p>
        <TabsList aria-label="MySQL lesson sections" className="mt-4 grid h-auto w-full grid-cols-2 gap-2 bg-transparent p-0 lg:grid-cols-4">
          {options.map(({ id, label, note, icon: Icon }, index) => (
            <TabsTrigger key={id} value={id} className="min-h-24 min-w-0 flex-col items-start whitespace-normal rounded-xl border border-border bg-muted/40 p-3 text-left data-[state=active]:border-primary data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
              <span className="flex items-center gap-2 text-xs"><Icon className="h-4 w-4" />0{index+1}</span>
              <span className="mt-2 text-sm font-semibold">{label}</span>
              <span className="mt-1 text-xs font-normal">{note}</span>
            </TabsTrigger>
          ))}
        </TabsList>
      </div>

      <TabsContent value="lesson" className="space-y-5">
        <div className="blog-content lesson-content" dangerouslySetInnerHTML={{ __html: contentHtml }} />
        <div className="rounded-xl border border-border bg-muted/40 p-4 text-sm">
          <p className="font-semibold">Before moving on</p>
          <p className="mt-1 text-muted-foreground">Explain the main idea in your own words. You do not need to memorise every command. The guided example is there to help.</p>
        </div>
        <button onClick={() => setTab(noImport ? "guided" : "database")} className={buttonVariants()}>{noImport ? "Try your first query" : "Prepare the practice database"}</button>
      </TabsContent>

      <TabsContent value="database" className="space-y-5">
        <div>
          <h2 className="font-heading text-2xl font-semibold">Meet Learning Shop</h2>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">One fictional shop dataset supports the whole course. Import it once, then reuse it. These are local MySQL exercises, not an online SQL executor.</p>
          {noImport && <p className="mt-3 rounded-xl bg-accent/10 p-3 text-sm text-accent">You do not need this database for the first two lessons. Start with Guided Practice; import the shop when you reach lesson three.</p>}
        </div>
        <a href="/downloads/mysql-retail-lab.sql" download className={cn(buttonVariants(), "gap-2")}><Download className="h-4 w-4" />Download practice database (.sql)</a>
        <ol className="list-decimal space-y-2 pl-5 text-sm leading-relaxed text-muted-foreground">
          <li>Connect to your local MySQL 8.0+ server in Workbench.</li>
          <li>Choose File → Open SQL Script and open the downloaded file.</li>
          <li>Execute the whole script using the lightning button. Check the result log for errors.</li>
          <li>Refresh Schemas, then select the database with the command below.</li>
        </ol>
        <SQL>{"USE portfolio_retail_lab;\nSHOW TABLES;"}</SQL>
        <div className="grid gap-3 sm:grid-cols-2">
          {[
            ["customers", "6 rows", "customer_id (key), customer_name, city, email"],
            ["products", "6 rows", "product_id (key), product_name, category, price"],
            ["orders", "8 rows", "order_id (key), customer_id, order_date, status"],
            ["order_items", "14 rows", "order_id + product_id (combined key), quantity, unit_price"],
          ].map(([name, count, fields]) => <div key={name} className="surface-card p-4"><h3 className="font-semibold">{name} <span className="ml-1 text-xs text-muted-foreground">{count}</span></h3><p className="mt-2 break-words text-sm text-muted-foreground">{fields}</p></div>)}
        </div>
        <div className="rounded-xl border border-border p-4 text-sm leading-relaxed">
          <h3 className="font-semibold">How the tables connect</h3>
          <p className="mt-2 text-muted-foreground">A customer can have many orders. An order can have many order_items. Each item points to one product. You will practise these relationships in the joins lesson.</p>
          <p className="mt-2 text-muted-foreground">Notebook costs INR 100; Pen INR 20; Desk lamp INR 800; Mug INR 250; Keyboard INR 1200; Planner INR 300.</p>
          <p className="mt-2 text-muted-foreground">Revenue uses quantity × historical unit_price. Include completed orders only: the seed data totals INR 6150. You learn this calculation later.</p>
        </div>
        <p className="text-sm text-muted-foreground">Use a training server only. The file never drops tables, but reimporting is not a reset of rows you changed. Keep credentials private. Use rollback for the transaction exercises.</p>
        <button onClick={() => setTab("guided")} className={buttonVariants()}>Data ready? Follow the example</button>
      </TabsContent>

      <TabsContent value="guided" className="space-y-5">
        <h2 className="font-heading text-2xl font-semibold">Let’s do one together</h2>
        <ol className="list-decimal space-y-2 pl-5 text-sm leading-relaxed text-muted-foreground">
          <li>{noImport ? "Connect to MySQL and open an empty SQL editor tab." : "Import the shop database if needed, then run USE portfolio_retail_lab;."}</li>
          <li>Type or paste the example below into the editor.</li>
          <li>Run the query. Read the result grid, not just the success message.</li>
          <li>Compare your output with the expected result below. If it differs, check your selected database and spelling first.</li>
        </ol>
        <SQL>{lab.example}</SQL>
        <div className="rounded-xl border border-border bg-accent/5 p-4"><h3 className="text-sm font-semibold">What you should see</h3><p className="mt-2 text-sm leading-relaxed text-muted-foreground">{lab.output}</p></div>
        <p className="text-sm text-muted-foreground">This example is read-only on this page. Run it in Workbench; your work is not sent to this website or automatically graded.</p>
        <button onClick={() => setTab("questions")} className={buttonVariants()}>I understand — give me practice</button>
      </TabsContent>

      <TabsContent value="questions" className="space-y-4">
        <h2 className="font-heading text-2xl font-semibold">Your turn</h2>
        <p className="text-sm leading-relaxed text-muted-foreground">These questions use the same topic and {noImport ? "your connected MySQL editor; no shop import is needed yet" : "the Learning Shop database shown in the Database option"}. Start with Easy. Read the target, try a query, then open a hint if you get stuck. The final task is a small real-world handoff, not a timed test.</p>
        {lab.tasks.map((task, index) => (
          <section key={task.level} className="surface-card p-4 sm:p-5">
            <span className="chip-accent">{index+1} · {task.level}</span>
            <h3 className="mt-3 text-base font-semibold leading-relaxed">{task.task}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground"><strong className="text-foreground">Your target: </strong>{task.check}</p>
            <details className="mt-4 rounded-lg border border-border p-3"><summary className="cursor-pointer text-sm font-medium">I’m stuck — show a hint</summary><p className="mt-3 text-sm leading-relaxed text-muted-foreground">{task.hint}</p></details>
            <details className="mt-2 rounded-lg border border-border p-3"><summary className="cursor-pointer text-sm font-medium">Compare with a reference answer</summary><SQL>{task.solution}</SQL><p className="text-xs text-muted-foreground">More than one SQL query can be correct. Check the result against the target, then explain why your query works.</p></details>
          </section>
        ))}
        <p className="rounded-xl bg-muted p-4 text-sm leading-relaxed">Ready to continue? Save your .sql file and explain one query in your own words. Use “Mark Complete” above only when you feel confident, then move to the next lesson below.</p>
      </TabsContent>
    </Tabs>
  );
}
