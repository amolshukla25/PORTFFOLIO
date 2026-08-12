import type { Module } from "../courses";

export const MODULE_4: Module = {
  id: "module-4-ai-workflows",
  title: "Module 4: Building AI Workflows",
  description:
    "Master prompt chaining, orchestration, and building complex AI-powered workflows for real-world applications.",
  lessons: [
    {
      id: "prompt-chaining",
      title: "Lesson 10: Prompt Chaining & Sequential Processing",
      shortDescription:
        "Connect multiple prompts to build complex workflows where each output feeds into the next.",
      duration: "55 mins",
      readingTime: "11 mins read",
      contentMarkdown: `### The Power of Prompt Chaining

Single prompts have limitations — they can only process so much information and produce so much output. **Prompt chaining** breaks complex tasks into sequential steps, where each step's output becomes the next step's input.

#### Why Chain Prompts?

| Benefit | Description |
|---|---|
| **Complexity Management** | Handle tasks too large for a single prompt |
| **Quality Control** | Review and refine at each stage |
| **Error Isolation** | Fix issues at specific steps without starting over |
| **Specialization** | Each prompt can be optimized for its specific task |
| **Debugging** | Easier to identify where things go wrong |

> **Mental model:** Think of prompt chaining like an assembly line — each station does one thing well, and the product gets refined as it moves down the line.

---

### Basic Chaining Patterns

#### Pattern 1: Linear Chain

The simplest pattern — output of A feeds into B, B into C, etc.

\`\`\`
Step 1: Research → Generate outline
Step 2: Outline → Write first draft
Step 3: Draft → Edit and refine
Step 4: Refined → Add formatting and polish
\`\`\`

**Example: Blog Post Creation**

\`\`\`
Chain Step 1:
"Research the topic: 'AI in Healthcare 2026'
Provide: 5 key trends, supporting data, notable examples"

[Output: Research findings]

Chain Step 2:
"Based on this research: [Step 1 output]
Create a blog post outline with:
- 5 main sections based on the trends
- Key points for each section
- Suggested headlines"

[Output: Structured outline]

Chain Step 3:
"Using this outline: [Step 2 output]
Write a complete 1500-word blog post.
Include: Introduction, detailed sections, conclusion with CTA"

[Output: First draft]

Chain Step 4:
"Edit this draft for:
- Grammar and clarity
- Engagement and flow
- SEO optimization
- Consistency in tone

Draft: [Step 3 output]"

[Output: Final polished post]
\`\`\`

---

#### Pattern 2: Branching Chain

Split into parallel paths, then merge results.

\`\`\`
Step 1: Analyze input → Identify components
Step 2a: Process component A
Step 2b: Process component B  
Step 2c: Process component C
Step 3: Merge all results → Final output
\`\`\`

**Example: Competitive Analysis**

\`\`\`
Step 1: "List the top 5 competitors for [product]"

Step 2a: "Analyze Competitor 1: [name]"
Step 2b: "Analyze Competitor 2: [name]"
Step 2c: "Analyze Competitor 3: [name]"
(Run in parallel)

Step 3: "Based on these competitor analyses:
[Results from 2a, 2b, 2c]
Create a comparative analysis with:
- Feature comparison table
- Strengths/weaknesses matrix
- Market positioning map
- Strategic recommendations"
\`\`\`

---

#### Pattern 3: Iterative Refinement

Repeat a step until quality criteria are met.

\`\`\`
Step 1: Generate initial output
Step 2: Evaluate against criteria
Step 3: If quality < threshold, refine and repeat Step 2
Step 4: Output final result
\`\`\`

**Example: Code Generation**

\`\`\`
Iteration 1:
"Write a Python function that [specification]"

Iteration 2:
"Review this code for:
- Correctness
- Edge cases
- Performance
- Readability

Code: [Iteration 1 output]

Identify issues and provide improved version."

Iteration 3:
"Final review:
- Are all edge cases handled?
- Is error handling robust?
- Is the code production-ready?

Code: [Iteration 2 output]

If issues remain, fix them. Otherwise, confirm it's ready."
\`\`\`

---

### Chain Design Principles

#### 1. Define Clear Interfaces

Each step should have clear inputs and outputs:

\`\`\`
Step 1 Output Format:
{
  "findings": ["list of insights"],
  "confidence": "high/medium/low",
  "sources": ["list of sources"]
}

Step 2 Input Requirements:
- findings: list of strings
- confidence: string
- sources: list of strings (optional)
\`\`\`

#### 2. Minimize Dependencies

When possible, make steps independent so they can run in parallel:

\`\`\`
# Bad: Each step depends on previous
Step 1 → Step 2 → Step 3 → Step 4

# Better: Independent steps can parallelize
Step 1 → Step 2a ↘
Step 1 → Step 2b → Step 3
Step 1 → Step 2c ↗
\`\`\`

#### 3. Include Validation Checkpoints

Add quality gates between steps:

\`\`\`
Step 1: Generate outline
[VALIDATION: Does outline cover all requirements?]

Step 2: Write content
[VALIDATION: Is content accurate and complete?]

Step 3: Edit and polish
[VALIDATION: Does final meet quality standards?]
\`\`\`

#### 4. Handle Errors Gracefully

Plan for failures at each step:

\`\`\`
Step 1: Generate content
If Step 1 fails:
  - Log the error
  - Retry once with simplified requirements
  - If still fails, output partial results with explanation
\`\`\`

---

### Complex Workflow Example: Content Pipeline

\`\`\`
INPUT: Blog topic + target audience

Step 1: Research
- Generate 5 key points
- Find supporting data
- Identify examples
OUTPUT: Research brief

Step 2: Outline
- Create section structure
- Assign key points to sections
- Write section headers
OUTPUT: Detailed outline

Step 3: Draft (parallel per section)
- Section 1 draft
- Section 2 draft
- Section 3 draft
OUTPUT: Raw sections

Step 4: Integrate
- Combine sections
- Add transitions
- Ensure flow
OUTPUT: Complete draft

Step 5: Optimize
- SEO optimization
- Readability check
- Engagement enhancement
OUTPUT: Optimized draft

Step 6: Polish
- Grammar check
- Formatting
- Final review
OUTPUT: Publication-ready post
\`\`\`

---

### Common Chaining Mistakes

- **Mistake:** Chains too long (10+ steps) — **Fix:** Consolidate steps or break into sub-chains.
- **Mistake:** No validation between steps — **Fix:** Add quality checkpoints.
- **Mistake:** Tight coupling between steps — **Fix:** Define clear interfaces.
- **Mistake:** Not handling failures — **Fix:** Plan error recovery for each step.
- **Mistake:** Passing too much context — **Fix:** Summarize between steps when possible.

### Professional Tips & Tricks

- Start with simple 2-3 step chains, then expand as needed.
- Document your chains — they become reusable workflows.
- Use version control for prompt chains — track what works.
- Test chains with edge cases, not just happy paths.

---

### Key Takeaways

- Prompt chaining breaks complex tasks into manageable steps.
- Linear, branching, and iterative are the main chain patterns.
- Define clear interfaces between steps for maintainability.
- Include validation checkpoints to catch issues early.
- Plan for errors at each step of the chain.

**Next up:** Orchestrating multiple AI agents and parallel processing.`,
      codeLanguage: "text",
      codeSnippet: `# Prompt Chaining Patterns

## Linear Chain
Step 1 → Step 2 → Step 3 → Output

Example:
1. Research topic
2. Create outline
3. Write draft
4. Edit and polish

## Branching Chain
Step 1 → Step 2a ↘
Step 1 → Step 2b → Step 3
Step 1 → Step 2c ↗

Example:
1. List competitors
2a. Analyze Competitor A
2b. Analyze Competitor B
2c. Analyze Competitor C
3. Comparative analysis

## Iterative Refinement
Step 1 → Evaluate → [if quality < threshold] → Refine → Evaluate → Output

Example:
1. Generate code
2. Review for issues
3. Fix issues
4. Final review

## Chain Interface Template

Step N Output:
{
  "result": "output data",
  "metadata": {
    "confidence": "high/medium/low",
    "completeness": "percentage"
  }
}

Step N+1 Input:
- Requires: result from Step N
- Optional: metadata for validation

## Validation Checkpoints
Step 1: Generate → [CHECK: Meets requirements?] → Step 2
Step 2: Process → [CHECK: Accurate?] → Step 3
Step 3: Refine → [CHECK: Quality standard?] → Output`,
      codeOutput: `Prompt Chaining Patterns

## Linear Chain
Step 1 → Step 2 → Step 3 → Output

Example:
1. Research topic
2. Create outline
3. Write draft
4. Edit and polish

## Branching Chain
Step 1 → Step 2a ↘
Step 1 → Step 2b → Step 3
Step 1 → Step 2c ↗

Example:
1. List competitors
2a. Analyze Competitor A
2b. Analyze Competitor B
2c. Analyze Competitor C
3. Comparative analysis

## Iterative Refinement
Step 1 → Evaluate → [if quality < threshold] → Refine → Evaluate → Output

Example:
1. Generate code
2. Review for issues
3. Fix issues
4. Final review

## Chain Interface Template

Step N Output:
{
  "result": "output data",
  "metadata": {
    "confidence": "high/medium/low",
    "completeness": "percentage"
  }
}

Step N+1 Input:
- Requires: result from Step N
- Optional: metadata for validation

## Validation Checkpoints
Step 1: Generate → [CHECK: Meets requirements?] → Step 2
Step 2: Process → [CHECK: Accurate?] → Step 3
Step 3: Refine → [CHECK: Quality standard?] → Output`,
      visualizationTips: [
        "Draw flowcharts for each chaining pattern (linear, branching, iterative).",
        "Create a decision tree for choosing the right chain pattern.",
        "Map out a complete workflow with validation checkpoints.",
      ],
      tipsAndTricks: [
        "Start with simple 2-3 step chains, then expand as needed.",
        "Document your chains — they become reusable workflows.",
        "Test chains with edge cases, not just happy paths.",
      ],
      practice: [
        {
          id: "practice-chain-design",
          title: "Chain Design Exercise",
          difficulty: "Medium",
          task: "Design a prompt chain for creating a weekly social media content calendar. Include at least 4 steps with clear inputs/outputs.",
          hint: "Consider research, ideation, creation, and scheduling steps.",
          solution: `Social Media Content Chain:

Step 1: Research & Trends
Input: Industry + target audience
Process: Identify trending topics, hashtags, content formats
Output: Trend brief with 10+ content ideas

Step 2: Content Selection
Input: Trend brief + brand guidelines
Process: Select 7 best ideas, assign to days
Output: Weekly calendar structure

Step 3: Content Creation (parallel)
Input: Calendar structure
Process: Create posts for each day
Output: 7 ready-to-post content pieces

Step 4: Optimization
Input: 7 content pieces
Process: Add hashtags, optimize timing, schedule
Output: Scheduled content calendar

Interfaces:
- Step 1 → 2: { "ideas": [...], "trends": [...] }
- Step 2 → 3: { "days": [...], "themes": [...] }
- Step 3 → 4: { "posts": [...], "metadata": {...} }`,
        },
        {
          id: "practice-error-handling",
          title: "Error Handling in Chains",
          difficulty: "Hard",
          task: "Design a prompt chain for generating product descriptions that includes error handling for when the model produces inaccurate information.",
          hint: "Include validation steps and fallback behavior.",
          solution: `Error-Handled Chain:

Step 1: Generate Description
Input: Product specs
Output: Draft description
Error handling: If generation fails, retry with simplified specs

Step 2: Fact Check
Input: Draft description
Process: Extract claims, verify against specs
Output: Verified description OR list of issues
Error handling: If issues found, route to Step 3

Step 3: Correction
Input: Issues list + original specs
Process: Fix inaccurate claims
Output: Corrected description
Error handling: If cannot correct, flag for manual review

Step 4: Quality Gate
Input: Corrected description
Check: Accurate? Complete? Engaging?
If pass → Step 5
If fail → Back to Step 2

Step 5: Final Polish
Input: Verified description
Process: Grammar, formatting, SEO
Output: Publication-ready description

Error logging at each step for debugging.`,
        },
      ],
    },
    {
      id: "multi-agent-orchestration",
      title: "Lesson 11: Multi-Agent Orchestration",
      shortDescription:
        "Coordinate multiple AI agents to work together on complex tasks, each specializing in different aspects.",
      duration: "55 mins",
      readingTime: "11 mins read",
      contentMarkdown: `### The Multi-Agent Paradigm

Instead of one AI doing everything, **multi-agent systems** assign different roles to different "agents" (prompt instances), each specializing in a specific task. This mirrors how effective teams work — specialists collaborate to achieve more than any individual could.

#### Why Multi-Agent?

| Benefit | Description |
|---|---|
| **Specialization** | Each agent excels at one thing |
| **Parallel Processing** | Multiple agents work simultaneously |
| **Quality** | Specialist agents produce better outputs |
| **Scalability** | Easy to add more agents for new tasks |
| **Maintainability** | Easier to update individual agents |

> **Mental model:** Think of multi-agent systems like a movie production — you have directors, writers, actors, editors, each an expert in their role, working together to create something none could alone.

---

### Agent Role Design

#### Common Agent Roles

| Role | Responsibility | Example Prompts |
|---|---|---|
| **Researcher** | Gather information and data | "Research [topic] and provide key findings" |
| **Planner** | Create strategy and structure | "Based on research, create an action plan" |
| **Writer** | Generate content | "Write [content type] following this plan" |
| **Editor** | Review and improve quality | "Edit this content for accuracy and clarity" |
| **Critic** | Identify weaknesses | "Critique this work and suggest improvements" |
| **Summarizer** | Condense information | "Summarize this into key points" |
| **Validator** | Check facts and quality | "Verify these claims are accurate" |

#### Agent Communication Protocol

\`\`\`
Agent A Output → Shared Memory → Agent B Input

Standardized format:
{
  "agent_id": "researcher",
  "task_id": "research-001",
  "status": "complete",
  "output": { ... },
  "confidence": 0.85,
  "next_agent": "planner"
}
\`\`\`

---

### Multi-Agent Patterns

#### Pattern 1: Pipeline

Agents work in sequence, each adding value:

\`\`\`
Researcher → Planner → Writer → Editor → Publisher
\`\`\`

**Example: Content Creation Pipeline**

\`\`\`
Agent 1 (Researcher):
"Research the latest trends in [industry] for 2026.
Provide: 5 key trends with supporting data.
Output format: Structured brief"

Agent 2 (Planner):
"Based on this research: [Agent 1 output]
Create a content calendar for the next month.
Include: Topics, formats, target audience for each.
Output format: Calendar table"

Agent 3 (Writer):
"Using this calendar: [Agent 2 output]
Write the first post: [specific topic]
Include: Introduction, 3 main points, conclusion.
Output format: Blog post draft"

Agent 4 (Editor):
"Edit this draft: [Agent 3 output]
Check for: Accuracy, clarity, engagement, SEO.
Output format: Revised draft with change notes"

Agent 5 (Publisher):
"Format this final draft: [Agent 4 output]
Prepare for publication: Meta tags, featured image suggestion, social snippets.
Output format: Publication package"
\`\`\`

---

#### Pattern 2: Debate

Multiple agents argue different perspectives, then synthesize:

\`\`\`
Agent A: Argue FOR [position]
Agent B: Argue AGAINST [position]
Synthesizer: Create balanced analysis from both arguments
\`\`\`

**Example: Strategic Decision**

\`\`\`
Agent 1 (Proponent):
"Argue FOR expanding into the European market.
Provide: Benefits, opportunities, success factors.
Be persuasive and data-driven."

Agent 2 (Opponent):
"Argue AGAINST expanding into the European market.
Provide: Risks, challenges, potential failures.
Be realistic and evidence-based."

Agent 3 (Synthesizer):
"Based on these arguments:
FOR: [Agent 1 output]
AGAINST: [Agent 2 output]

Create a balanced strategic analysis:
1. Summarize key points from both sides
2. Identify areas of agreement/disagreement
3. Assess risk-reward balance
4. Provide conditional recommendation
5. List conditions that would change the recommendation"
\`\`\`

---

#### Pattern 3: Voting

Multiple agents independently solve a problem, majority wins:

\`\`\`
Agent 1: Solve [problem] → Answer A
Agent 2: Solve [problem] → Answer B
Agent 3: Solve [problem] → Answer A
Majority Vote: Answer A (2 out of 3)
\`\`\`

**Example: High-Stakes Decision**

\`\`\`
Problem: Should we acquire Company X?

Agent 1 (Financial Analyst):
Analyze from financial perspective.
Recommendation: [Buy/Don't Buy] with reasoning.

Agent 2 (Strategic Analyst):
Analyze from strategic fit perspective.
Recommendation: [Buy/Don't Buy] with reasoning.

Agent 3 (Risk Analyst):
Analyze from risk perspective.
Recommendation: [Buy/Don't Buy] with reasoning.

Meta-Agent (Decision Maker):
Review all three analyses.
If unanimous → Final decision
If split → Identify key disagreements and escalate
\`\`\`

---

#### Pattern 4: Ensemble

Multiple agents work on same task, results are averaged or combined:

\`\`\`
Agent 1: Write headline option 1
Agent 2: Write headline option 2
Agent 3: Write headline option 3
Curator: Select best elements from each, create final version
\`\`\`

---

### Managing Shared State

**Shared Memory Structure:**

\`\`\`
{
  "project_id": "content-creation-001",
  "current_step": "writing",
  "state": {
    "research": { ... },
    "outline": { ... },
    "drafts": [...],
    "edits": [...]
  },
  "agents": {
    "researcher": { "status": "complete", "output": {...} },
    "writer": { "status": "in-progress", "output": null },
    "editor": { "status": "waiting", "output": null }
  }
}
\`\`\`

**State Management Rules:**
1. Each agent reads only what it needs
2. Each agent writes only its designated output
3. State transitions are explicit and logged
4. Conflicts are resolved by priority rules

---

### Common Multi-Agent Mistakes

- **Mistake:** Too many agents — **Fix:** Each agent should have a clear, distinct purpose.
- **Mistake:** Agents that depend on each other running in parallel — **Fix:** Map dependencies first.
- **Mistake:** No central coordination — **Fix:** Use a meta-agent or orchestrator.
- **Mistake:** Inconsistent output formats — **Fix:** Define standard interfaces.
- **Mistake:** Not handling agent failures — **Fix:** Plan for each agent to fail gracefully.

### Professional Tips & Tricks

- Start with 2-3 agents, add more only as needed.
- Use a meta-agent to coordinate and handle errors.
- Log all agent interactions for debugging.
- Test with known inputs first to verify agent behavior.

---

### Key Takeaways

- Multi-agent systems assign specialized roles to different prompt instances.
- Pipeline, debate, voting, and ensemble are common patterns.
- Shared state management is critical for coordination.
- Each agent should have clear inputs, outputs, and responsibilities.
- Start simple, add complexity only as needed.

**Next up:** Real-world applications and case studies.`,
      codeLanguage: "text",
      codeSnippet: `# Multi-Agent Orchestration Patterns

## Agent Role Templates

### Researcher Agent
"You are a research specialist. Your task:
- Gather comprehensive information on [topic]
- Verify facts and cite sources
- Identify key insights and trends
- Output: Structured research brief"

### Writer Agent
"You are a content writer. Your task:
- Create [content type] based on provided brief
- Follow brand guidelines and tone
- Include engaging hooks and clear structure
- Output: Complete draft"

### Editor Agent
"You are an editor. Your task:
- Review content for accuracy, clarity, engagement
- Check grammar, style, and consistency
- Suggest specific improvements
- Output: Revised version with change notes"

## Pipeline Pattern
Researcher → Planner → Writer → Editor → Publisher

## Debate Pattern
Agent A: Argue FOR
Agent B: Argue AGAINST
Synthesizer: Balanced analysis

## Voting Pattern
Agent 1: Solve → Answer A
Agent 2: Solve → Answer B
Agent 3: Solve → Answer A
Majority: Answer A (2/3)

## Shared State Structure
{
  "project_id": "unique-id",
  "current_step": "step-name",
  "state": { ... },
  "agents": {
    "agent-name": {
      "status": "complete|in-progress|waiting",
      "output": { ... }
    }
  }
}`,
      codeOutput: `Multi-Agent Orchestration Patterns

## Agent Role Templates

### Researcher Agent
"You are a research specialist. Your task:
- Gather comprehensive information on [topic]
- Verify facts and cite sources
- Identify key insights and trends
- Output: Structured research brief"

### Writer Agent
"You are a content writer. Your task:
- Create [content type] based on provided brief
- Follow brand guidelines and tone
- Include engaging hooks and clear structure
- Output: Complete draft"

### Editor Agent
"You are an editor. Your task:
- Review content for accuracy, clarity, engagement
- Check grammar, style, and consistency
- Suggest specific improvements
- Output: Revised version with change notes"

## Pipeline Pattern
Researcher → Planner → Writer → Editor → Publisher

## Debate Pattern
Agent A: Argue FOR
Agent B: Argue AGAINST
Synthesizer: Balanced analysis

## Voting Pattern
Agent 1: Solve → Answer A
Agent 2: Solve → Answer B
Agent 3: Solve → Answer A
Majority: Answer A (2/3)

## Shared State Structure
{
  "project_id": "unique-id",
  "current_step": "step-name",
  "state": { ... },
  "agents": {
    "agent-name": {
      "status": "complete|in-progress|waiting",
      "output": { ... }
    }
  }
}`,
      visualizationTips: [
        "Draw architecture diagrams for each multi-agent pattern.",
        "Create a flowchart showing agent communication and state flow.",
        "Map out a complete multi-agent workflow with error handling.",
      ],
      tipsAndTricks: [
        "Start with 2-3 agents, add more only as needed.",
        "Use a meta-agent to coordinate and handle errors.",
        "Log all agent interactions for debugging.",
      ],
      practice: [
        {
          id: "practice-agent-design",
          title: "Multi-Agent System Design",
          difficulty: "Hard",
          task: "Design a multi-agent system for creating a weekly newsletter. Include agent roles, communication patterns, and error handling.",
          hint: "Consider research, writing, editing, and formatting agents.",
          solution: `Newsletter Multi-Agent System:

Agents:
1. Researcher: Gathers industry news and trends
2. Curator: Selects best stories for newsletter
3. Writer: Creates engaging content for each section
4. Editor: Reviews and improves quality
5. Formatter: Prepares final newsletter format

Pipeline:
Researcher → Curator → Writer → Editor → Formatter

Communication:
- Each agent outputs to shared state
- Next agent reads relevant state
- Meta-agent monitors progress and handles errors

Error Handling:
- If researcher finds insufficient data, escalate
- If editor finds major issues, return to writer
- If formatter fails, provide raw content for manual formatting

State:
{
  "newsletter_id": "2026-w32",
  "research": {...},
  "selected_stories": [...],
  "drafts": {...},
  "edited": {...},
  "final": {...}
}`,
        },
        {
          id: "practice-debate-pattern",
          title: "Debate Pattern Exercise",
          difficulty: "Medium",
          task: "Design a debate-pattern multi-agent system for evaluating whether to launch a new product feature.",
          hint: "Include proponent, opponent, and synthesizer agents.",
          solution: `Feature Launch Debate System:

Agent 1 (Proponent):
"Argue FOR launching [feature] in Q3.
Consider: User value, competitive advantage, revenue impact.
Provide data and examples to support your position."

Agent 2 (Opponent):
"Argue AGAINST launching [feature] in Q3.
Consider: Technical risks, resource constraints, market timing.
Provide evidence for potential failures."

Agent 3 (Synthesizer):
"Based on these arguments:
FOR: [Agent 1 output]
AGAINST: [Agent 2 output]

Create a balanced analysis:
1. Key points of agreement
2. Key disagreements
3. Risk-reward assessment
4. Conditional recommendation
5. What would need to be true for each side to be right"

Meta-Agent (Decision Maker):
"If synthesis is clear → Make decision
If synthesis is ambiguous → Identify key unknowns and request more data
Always document reasoning for audit trail"`,
        },
      ],
    },
    {
      id: "real-world-applications",
      title: "Lesson 12: Real-World Applications & Case Studies",
      shortDescription:
        "Apply everything you've learned to real-world scenarios: content creation, customer service, data analysis, and more.",
      duration: "60 mins",
      readingTime: "12 mins read",
      contentMarkdown: `### Putting It All Together

This final lesson shows how to apply prompt engineering techniques to real-world business scenarios. Each case study demonstrates a complete workflow from problem to solution.

---

### Case Study 1: Automated Content Marketing

**Business Problem:** A SaaS company needs to produce 10 blog posts per month but has a small content team.

**Solution Architecture:**

\`\`\`
Pipeline: Research → Outline → Draft → Edit → Optimize → Schedule

Agent 1 (Topic Researcher):
- Input: Industry keywords, competitor blogs
- Output: 10 topic briefs with target keywords

Agent 2 (Outline Creator):
- Input: Topic briefs
- Output: Detailed outlines for each post

Agent 3 (Content Writer):
- Input: Outlines (parallel processing)
- Output: 10 draft posts

Agent 4 (Editor):
- Input: Drafts
- Output: Edited, publication-ready posts

Agent 5 (SEO Optimizer):
- Input: Edited posts
- Output: SEO-optimized versions with meta tags

Agent 6 (Scheduler):
- Input: Final posts
- Output: Scheduled calendar with social snippets
\`\`\`

**Results:**
- Content output: 10 posts/month → 40 posts/month
- Time per post: 4 hours → 30 minutes human review
- Quality: Maintained through multi-stage editing

---

### Case Study 2: Customer Support Automation

**Business Problem:** Support team overwhelmed with repetitive questions.

**Solution Architecture:**

\`\`\`
Multi-Agent Support System:

Agent 1 (Intent Classifier):
- Input: Customer message
- Output: Intent category + urgency level

Agent 2 (Knowledge Retriever):
- Input: Intent + relevant docs
- Output: Relevant information and past solutions

Agent 3 (Response Generator):
- Input: Intent + knowledge
- Output: Personalized response draft

Agent 4 (Quality Checker):
- Input: Response draft
- Output: Verified response OR flag for human review

Agent 5 (Escalation Handler):
- Input: Flagged issues
- Output: Human handoff with context summary
\`\`\`

**Flow:**
1. Customer sends message
2. Intent classifier categorizes (billing, technical, general)
3. Knowledge retriever finds relevant solutions
4. Response generator creates personalized answer
5. Quality checker verifies accuracy
6. If confidence > 90%: Auto-send
7. If confidence < 90%: Escalate to human with draft

**Results:**
- Response time: 4 hours → 2 minutes
- Resolution rate: 60% automated, 40% human-assisted
- Customer satisfaction: Maintained at 4.5/5

---

### Case Study 3: Data Analysis Pipeline

**Business Problem:** Analysts spend 80% of time cleaning and preparing data.

**Solution Architecture:**

\`\`\`
Analysis Pipeline:

Agent 1 (Data Profiler):
- Input: Raw dataset
- Output: Data profile (types, missing values, distributions)

Agent 2 (Data Cleaner):
- Input: Profile + cleaning rules
- Output: Cleaned dataset

Agent 3 (Analyst):
- Input: Clean data + analysis questions
- Output: Statistical analysis and visualizations

Agent 4 (Insight Generator):
- Input: Analysis results
- Output: Business insights and recommendations

Agent 5 (Report Writer):
- Input: Insights
- Output: Executive summary report
\`\`\`

**Results:**
- Analysis time: 2 days → 2 hours
- Analyst focus: 80% prep → 20% prep, 80% insights
- Insight quality: More consistent and comprehensive

---

### Case Study 4: Product Development Assistant

**Business Problem:** Product managers struggle to synthesize user feedback into actionable requirements.

**Solution Architecture:**

\`\`\`
Feedback Processing Pipeline:

Agent 1 (Feedback Collector):
- Input: Multiple feedback sources (surveys, reviews, support tickets)
- Output: Unified feedback database

Agent 2 (Theme Analyzer):
- Input: Feedback database
- Output: Identified themes and patterns

Agent 3 (Priority Assessor):
- Input: Themes + business goals
- Output: Prioritized feature requests

Agent 4 (Requirement Writer):
- Input: Prioritized themes
- Output: User stories with acceptance criteria

Agent 5 (Validation Checker):
- Input: Requirements
- Output: Validated requirements with gaps identified
\`\`\`

---

### Implementation Checklist

**Before Starting:**
- [ ] Define clear success metrics
- [ ] Map existing workflow
- [ ] Identify bottleneck steps
- [ ] Gather sample inputs/outputs

**Design Phase:**
- [ ] Choose appropriate pattern (pipeline, debate, etc.)
- [ ] Design agent roles and interfaces
- [ ] Plan error handling
- [ ] Define validation criteria

**Implementation:**
- [ ] Build one agent at a time
- [ ] Test each agent independently
- [ ] Test the full chain
- [ ] Add error handling

**Optimization:**
- [ ] Measure performance metrics
- [ ] Identify failure points
- [ ] Refine prompts based on results
- [ ] Document the workflow

---

### Measuring Success

| Metric | Before | After | Target |
|---|---|---|---|
| Time to complete | 100% | 30% | <50% |
| Error rate | 5% | 2% | <3% |
| Consistency | Variable | Standardized | High |
| Scalability | Linear | Exponential | 10x |

---

### Common Pitfalls in Real-World Implementation

- **Mistake:** Automating a broken process — **Fix:** Fix the process first, then automate.
- **Mistake:** Ignoring edge cases — **Fix:** Test with real-world edge cases, not just happy paths.
- **Mistake:** No human oversight — **Fix:** Always have human review for critical outputs.
- **Mistake:** Not measuring results — **Fix:** Define metrics before starting.
- **Mistake:** Over-engineering — **Fix:** Start simple, add complexity only as needed.

### Professional Tips & Tricks

- Start with a proof of concept on a small scale.
- Document everything — future you will thank present you.
- Build in logging from day one — it's essential for debugging.
- Get user feedback early and often.

---

### Key Takeaways

- Real-world applications combine multiple prompting techniques.
- Start with clear business problems, not technology.
- Measure results against defined success metrics.
- Human oversight is essential for quality and trust.
- Iterate and improve based on real-world performance.

**Congratulations!** You've completed the Prompt Engineering course. You now have the skills to effectively communicate with AI models and build complex AI-powered workflows.`,
      codeLanguage: "text",
      codeSnippet: `# Real-World Application Templates

## Content Marketing Pipeline

### Topic Research Agent
Input: Industry keywords
Process: Analyze trends, competitors, gaps
Output: 10 topic briefs with:
- Title
- Target keyword
- Key points to cover
- Estimated word count

### Content Writer Agent
Input: Topic brief
Process: Research, outline, draft
Output: Complete blog post with:
- Engaging introduction
- 3-5 main sections
- Actionable conclusion
- Meta description

## Customer Support System

### Intent Classifier
Input: Customer message
Process: Analyze language, context
Output: {
  intent: "billing|technical|general",
  urgency: "low|medium|high",
  sentiment: "positive|neutral|negative"
}

### Response Generator
Input: Intent + knowledge base
Process: Find relevant solution
Output: {
  response: "personalized answer",
  confidence: 0.0-1.0,
  escalate: true/false
}

## Data Analysis Pipeline

### Data Profiler
Input: Raw dataset
Process: Analyze structure
Output: {
  columns: [...],
  types: {...},
  missing: {...},
  statistics: {...}
}

### Insight Generator
Input: Analysis results
Process: Identify patterns
Output: {
  insights: [...],
  confidence: "high|medium|low",
  recommendations: [...]
}`,
      codeOutput: `Real-World Application Templates

## Content Marketing Pipeline

### Topic Research Agent
Input: Industry keywords
Process: Analyze trends, competitors, gaps
Output: 10 topic briefs with:
- Title
- Target keyword
- Key points to cover
- Estimated word count

### Content Writer Agent
Input: Topic brief
Process: Research, outline, draft
Output: Complete blog post with:
- Engaging introduction
- 3-5 main sections
- Actionable conclusion
- Meta description

## Customer Support System

### Intent Classifier
Input: Customer message
Process: Analyze language, context
Output: {
  intent: "billing|technical|general",
  urgency: "low|medium|high",
  sentiment: "positive|neutral|negative"
}

### Response Generator
Input: Intent + knowledge base
Process: Find relevant solution
Output: {
  response: "personalized answer",
  confidence: 0.0-1.0,
  escalate: true/false
}

## Data Analysis Pipeline

### Data Profiler
Input: Raw dataset
Process: Analyze structure
Output: {
  columns: [...],
  types: {...},
  missing: {...},
  statistics: {...}
}

### Insight Generator
Input: Analysis results
Process: Identify patterns
Output: {
  insights: [...],
  confidence: "high|medium|low",
  recommendations: [...]
}`,
      visualizationTips: [
        "Create architecture diagrams for each case study.",
        "Draw flowcharts showing the complete workflow for each application.",
        "Build a decision tree for choosing the right application pattern.",
      ],
      tipsAndTricks: [
        "Start with a proof of concept before full implementation.",
        "Measure results from day one — you can't improve what you don't measure.",
        "Always have human oversight for critical decisions.",
      ],
      practice: [
        {
          id: "practice-application-design",
          title: "Application Design Exercise",
          difficulty: "Hard",
          task: "Design a complete AI workflow for automating the creation of monthly financial reports. Include all agents, their responsibilities, and how they communicate.",
          hint: "Consider data collection, analysis, visualization, and reporting steps.",
          solution: `Financial Report Pipeline:

Agents:
1. Data Collector: Gathers financial data from multiple sources
2. Data Validator: Checks for accuracy and completeness
3. Analyst: Performs calculations and trend analysis
4. Visualizer: Creates charts and graphs
5. Writer: Generates narrative explanations
6. Reviewer: Checks for errors and compliance
7. Formatter: Prepares final report format

Pipeline:
Data Collector → Data Validator → Analyst → Visualizer → Writer → Reviewer → Formatter

Communication:
- Shared state object with report_id
- Each agent reads previous agent's output
- Validation gates between critical steps

Error Handling:
- Data validation failures → Flag for manual review
- Calculation errors → Recalculate with verification
- Compliance issues → Route to legal reviewer

Success Metrics:
- Report generation time: 3 days → 4 hours
- Error rate: 5% → <1%
- Consistency: 70% → 95%`,
        },
        {
          id: "practice-metrics-design",
          title: "Metrics Design Exercise",
          difficulty: "Medium",
          task: "Define success metrics for an AI-powered customer support system. Include before/after targets and how you would measure each.",
          hint: "Consider response time, accuracy, customer satisfaction, and cost.",
          solution: `Customer Support Metrics:

1. Response Time
   - Before: 4 hours average
   - After: 2 minutes for automated, 30 minutes for human
   - Measurement: Timestamp from ticket creation to first response

2. Resolution Rate
   - Before: 60% first-contact resolution
   - After: 80% automated resolution
   - Measurement: Tickets resolved without escalation

3. Accuracy
   - Before: 85% correct responses
   - After: 95% correct responses
   - Measurement: Quality audit of random sample

4. Customer Satisfaction
   - Before: 4.2/5 CSAT score
   - After: 4.5/5 CSAT score
   - Measurement: Post-interaction survey

5. Cost per Ticket
   - Before: $15 average
   - After: $5 average
   - Measurement: Total support cost / tickets handled

6. Agent Productivity
   - Before: 30 tickets/agent/day
   - After: 50 tickets/agent/day
   - Measurement: Tickets handled per agent per day`,
        },
      ],
    },
  ],
};
