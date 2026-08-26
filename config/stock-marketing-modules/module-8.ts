import type { Module } from "../courses";

export const MODULE_8: Module = {
  id: "module-8-company-research",
  title: "Module 8: Reading SEC Filings & Company Research",
  description:
    "Master the art of reading 10-K, 10-Q, and 8-K filings. Analyze earnings calls, insider transactions, and management quality to make informed investment decisions.",
  lessons: [
    {
      id: "sec-filings-decoded",
      title: "Lesson 1: Decoding SEC Filings — 10-K, 10-Q, and 8-K",
      shortDescription:
        "Understand the most important SEC filings, what they contain, and how to extract actionable investment insights from them.",
      duration: "55 mins",
      readingTime: "11 mins read",
      contentMarkdown: `### Why SEC Filings Matter

SEC filings are the primary source of verified information about public companies. They're legally required to be accurate, making them the most reliable source for investment research.

> **Mental model:** SEC filings are like a company's annual physical exam — they reveal the good, the bad, and the ugly about the company's financial health.

---

### The Big Three SEC Filings

#### 1. Form 10-K (Annual Report)

The most comprehensive filing — filed once per year.

| Section | What It Contains | Why It Matters |
|---|---|---|
| **Business Overview** | What the company does, products, markets | Understanding the business model |
| **Risk Factors** | Everything that could go wrong | Identifying threats to your investment |
| **Selected Financial Data** | 5-year financial summary | Trend analysis |
| **MD&A** | Management's discussion of analysis | Management's honest assessment |
| **Financial Statements** | Income, balance sheet, cash flow | The actual numbers |
| **Notes to Financials** | Accounting policies, details | Hidden gems and red flags |

> **Key insight:** The "Risk Factors" section is the most underread part of the 10-K. Companies are legally required to list ALL material risks — read them carefully.

#### 2. Form 10-Q (Quarterly Report)

Filed three times per year (Q1, Q2, Q3) — less detailed than 10-K but more timely.

| Section | What It Contains | How It Differs from 10-K |
|---|---|---|
| **Financial Statements** | Quarterly results | Current quarter vs. same quarter last year |
| **MD&A** | Recent performance discussion | More focused on recent quarter |
| **Risk Factors** | Updated risk disclosure | Changes since last filing |
| **Controls & Procedures** | Internal control assessment | CEO/CFO certification |

#### 3. Form 8-K (Current Report)

Filed when significant events occur — the most timely filing.

| Trigger Event | What It Signals | Investment Implication |
|---|---|---|
| **Earnings release** | Quarterly results | Price catalyst |
| **Executive departure** | CEO/CFO leaving | Potential red flag |
| **Acquisition** | Company buying something | Strategic direction change |
| **Bankruptcy filing** | Financial distress | Avoid or deep value |
| **Material agreement** | Major contract | Revenue catalyst |

---

### How to Read a 10-K Efficiently

Don't read the entire 10-K (it's often 100+ pages). Focus on these sections in order:

#### Priority Reading Order

| Priority | Section | What to Look For | Time |
|---|---|---|---|
| **1** | Risk Factors | Top 10 risks, changes from last year | 10 min |
| **2** | MD&A | Revenue drivers, margin trends, outlook | 15 min |
| **3** | Income Statement | Revenue growth, margin expansion, EPS | 5 min |
| **4** | Balance Sheet | Debt levels, cash position, working capital | 5 min |
| **5** | Cash Flow Statement | Free cash flow, capex, share buybacks | 5 min |
| **6** | Notes | Accounting policies, contingencies | 10 min |

---

### Red Flags in SEC Filings

#### Financial Red Flags

| Red Flag | What to Look For | Severity |
|---|---|---|
| **Declining cash flow** | Operating cash flow shrinking while earnings grow | High |
| **Rising debt** | Debt growing faster than revenue | High |
| **Revenue recognition changes** | Company changes how it counts revenue | High |
| **Frequent restatements** | Previous financials corrected | Very High |
| **Related party transactions** | Company doing business with insiders | Medium |
| **Audit qualifications** | Auditor expresses doubt | Very High |

#### Qualitative Red Flags

| Red Flag | What to Look For | Severity |
|---|---|---|
| **Frequent auditor changes** | Switching auditors regularly | High |
| **Complex corporate structure** | Hard to understand ownership | Medium |
| **Insider selling** | Multiple executives selling shares | Medium |
| **Vague risk factors** | Generic, boilerplate language | Low |
| **Excessive executive compensation** | Pay not aligned with performance | Medium |

---

### Where to Find SEC Filings

| Source | URL | Features |
|---|---|---|
| **SEC EDGAR** | sec.gov/edgar | Official, all filings |
| **Company Investor Relations** | Company website | Earnings releases, presentations |
| **Morningstar** | morningstar.com | Analysis + filings |
| **Finviz** | finviz.com | Quick financial data |
| **Macrotrends** | macrotrends.net | Historical financials |

---

### Common SEC Filing Mistakes

- **Mistake:** Not reading risk factors — **Fix:** Always read the top 10 risks; they reveal what keeps management up at night.
- **Mistake:** Ignoring notes to financials — **Fix:** Important details about accounting policies and contingencies are in the notes.
- **Mistake:** Comparing companies with different accounting methods — **Fix:** Check revenue recognition policies before comparing.
- **Mistake:** Reading only the most recent filing — **Fix:** Compare with the previous year's filing to spot changes.

### Professional Tips & Tricks

- Use Ctrl+F to search for keywords like "risk," "debt," "litigation," and "restructuring."
- Compare this year's risk factors to last year's — new risks signal changing business dynamics.
- Read the MD&A first — it's management's narrative of what happened and what's coming.
- Download the Excel version of financials from EDGAR for easy analysis.

---

### Key Takeaways

- SEC filings are the most reliable source of company information.
- Read 10-Ks in priority order: Risks → MD&A → Financials → Notes.
- Red flags include declining cash flow, rising debt, and accounting changes.
- Compare year-over-year filings to spot trends and changes.
- Use Ctrl+F to efficiently search large filings for key topics.

**Next up:** Earnings calls, insider transactions, and management quality analysis.`,
      codeLanguage: "text",
      codeSnippet: `# SEC Filing Quick Reference

## Filing Types

Filing  | Frequency  | Content Level | Timeliness
--------|------------|---------------|------------
10-K    | Annual     | Comprehensive | 60-90 days after FY
10-Q    | Quarterly  | Detailed      | 40-45 days after quarter
8-K     | As needed  | Event-specific| Within 4 business days
DEF 14A | Annual     | Proxy/exec comp| Before shareholder meeting

## 10-K Reading Checklist

Priority 1: Risk Factors
□ What are the top 5 risks?
□ What changed from last year?
□ Any new risks added?

Priority 2: MD&A
□ Revenue growing? By how much?
□ Margins expanding or contracting?
□ Management outlook bullish or cautious?

Priority 3: Financial Statements
□ Revenue trend (3-5 years)
□ Operating cash flow vs. net income
□ Debt-to-equity ratio
□ Free cash flow trend

Priority 4: Notes
□ Revenue recognition policy
□ Pending litigation
□ Related party transactions

## Red Flags Checklist

□ Declining cash flow while earnings grow
□ Debt growing faster than revenue
□ Frequent auditor changes
□ Revenue recognition changes
□ Excessive insider selling
□ Complex corporate structure
□ Audit qualifications
□ Related party transactions

## Where to Find Filings

SEC EDGAR: sec.gov/edgar
Company IR: [company].com/investors
Morningstar: morningstar.com
Finviz: finviz.com`,
      codeOutput: `# SEC Filing Quick Reference

## Filing Types

Filing  | Frequency  | Content Level | Timeliness
--------|------------|---------------|------------
10-K    | Annual     | Comprehensive | 60-90 days after FY
10-Q    | Quarterly  | Detailed      | 40-45 days after quarter
8-K     | As needed  | Event-specific| Within 4 business days
DEF 14A | Annual     | Proxy/exec comp| Before shareholder meeting

## 10-K Reading Checklist

Priority 1: Risk Factors
□ What are the top 5 risks?
□ What changed from last year?
□ Any new risks added?

Priority 2: MD&A
□ Revenue growing? By how much?
□ Margins expanding or contracting?
□ Management outlook bullish or cautious?

Priority 3: Financial Statements
□ Revenue trend (3-5 years)
□ Operating cash flow vs. net income
□ Debt-to-equity ratio
□ Free cash flow trend

Priority 4: Notes
□ Revenue recognition policy
□ Pending litigation
□ Related party transactions

## Red Flags Checklist

□ Declining cash flow while earnings grow
□ Debt growing faster than revenue
□ Frequent auditor changes
□ Revenue recognition changes
□ Excessive insider selling
□ Complex corporate structure
□ Audit qualifications
□ Related party transactions

## Where to Find Filings

SEC EDGAR: sec.gov/edgar
Company IR: [company].com/investors
Morningstar: morningstar.com
Finviz: finviz.com`,
      visualizationTips: [
        "Create a timeline showing when each SEC filing type is due throughout the year.",
        "Build a decision tree for reading 10-K sections in priority order.",
        "Create a comparison table of red flags across multiple companies."
      ],
      tipsAndTricks: [
        "Use Ctrl+F to search for 'risk', 'debt', 'litigation' in large filings.",
        "Compare this year's risk factors to last year's — changes signal evolving threats.",
        "Read MD&A first — it's management's honest narrative of the business.",
        "Download Excel financials from EDGAR for easy analysis and comparison."
      ],
      practice: [
        {
          id: "practice-10k-analysis",
          title: "10-K Analysis Exercise",
          difficulty: "Medium",
          task: "Download the most recent 10-K for Apple (AAPL). Find: (1) Top 3 risk factors, (2) Revenue growth rate, (3) Free cash flow, (4) Debt level. Summarize your findings in 3 sentences.",
          hint: "Use SEC EDGAR to find the filing. Focus on Risk Factors and Financial Statements sections.",
          solution: `Apple (AAPL) 10-K Analysis:

Top 3 Risk Factors:
1. Global supply chain disruptions — Apple depends on concentrated manufacturing in Asia
2. Foreign currency exposure — significant revenue from international markets
3. Competition in technology — intense competition in smartphones, services, and wearables

Financial Highlights:
- Revenue: ~$394B (TTM)
- Revenue Growth: ~2% year-over-year
- Free Cash Flow: ~$110B annually
- Total Debt: ~$110B
- Cash & Investments: ~$160B
- Net Cash Position: ~$50B

3-Sentence Summary:
Apple is a financially fortress-like company with $110B in annual free cash flow and a net cash position of $50B, giving it enormous financial flexibility. Revenue growth has slowed to ~2% as the smartphone market matures, but services revenue continues to grow at double-digit rates. Key risks include supply chain concentration in Asia and increasing regulatory scrutiny, but the company's massive cash generation and brand loyalty provide significant competitive moats.`
        },
        {
          id: "practice-red-flag-detection",
          title: "Red Flag Detection",
          difficulty: "Easy",
          task: "Review the following scenario: A company reports net income of $50M but operating cash flow of $10M. Revenue grew 20% but the company changed its revenue recognition policy this year. The CFO resigned last month. Identify all red flags and explain their significance.",
          hint: "Compare earnings to cash flow, note accounting changes, and consider executive departures.",
          solution: `Red Flag Analysis:

RED FLAG 1: Earnings vs. Cash Flow Divergence
- Net Income: $50M
- Operating Cash Flow: $10M
- Difference: $40M (80% of earnings not backed by cash)
- Significance: Earnings may be inflated by accounting entries. Cash flow is harder to manipulate. This is the most serious red flag.

RED FLAG 2: Revenue Recognition Change
- Company changed how it counts revenue this year
- Significance: 20% "growth" may be partially due to accounting change, not actual business improvement. Need to normalize for comparison.

RED FLAG 3: CFO Resignation
- CFO left the company
- Significance: CFOs often leave before bad news emerges. Could be personal, but combined with other red flags, it's concerning.

COMBINED ASSESSMENT:
These three red flags together suggest potential earnings quality issues. The company may be using aggressive accounting to inflate earnings while cash flow tells a different story. The CFO departure adds to concerns. I would avoid this stock or investigate further before investing.

Action: Read the 10-K risk factors and notes to financials for additional context.`
        }
      ]
    },
    {
      id: "earnings-calls-and-insiders",
      title: "Lesson 2: Earnings Calls, Insider Transactions & Management Quality",
      shortDescription:
        "Analyze earnings call transcripts, track insider buying/selling, and evaluate management quality to gain an edge in your stock research.",
      duration: "55 mins",
      readingTime: "11 mins read",
      contentMarkdown: `### Earnings Calls: Listening to Management

Earnings calls are quarterly conference calls where management discusses results and answers analyst questions. They reveal more than just numbers — they show management's confidence, honesty, and strategic direction.

> **Mental model:** Earnings calls are like job interviews for management — their words, tone, and what they avoid saying reveal as much as the numbers.

---

### How to Analyze an Earnings Call

#### The Structure

| Section | Duration | What Happens |
|---|---|---|
| **Prepared Remarks** | 15-20 min | CEO and CFO read scripted highlights |
| **Q&A Session** | 20-30 min | Analysts ask unscripted questions |
| **Forward Guidance** | Throughout | Management's outlook for next quarter/year |

#### What to Listen For

| Signal | Positive | Negative |
|---|---|---|
| **Tone** | Confident, specific | Vague, defensive |
| **Guidance** | Raising or maintaining | Lowering or withdrawing |
| **Answers to tough questions** | Direct, honest | Evasive, deflecting |
| **Language about competitors** | Respectful, factual | Dismissive or fearful |
| **Cost discipline** | Specific targets | Vague promises |

---

### Red Flags in Earnings Calls

| Red Flag | Example | What It Means |
|---|---|---|
| **Guidance withdrawal** | "We're suspending guidance" | Management uncertain about future |
| **Excessive buzzwords** | "Synergies," "paradigm shift" | Obscuring lack of substance |
| **Defensive tone** | "That's a misleading question" | Hiding something |
| **Blaming external factors** | "The market was against us" | Lack of accountability |
| **Changing the metric** | "We focus on adjusted EBITDA" | Hiding poor GAAP results |

---

### Insider Transactions

When company insiders (executives, directors, large shareholders) buy or sell their own company's stock, it sends a signal.

#### What Insider Activity Means

| Activity | Signal Strength | Interpretation |
|---|---|---|
| **Cluster buying** | Very Strong | Multiple insiders buying — strong conviction |
| **CEO buying** | Strong | CEO putting personal money on the line |
| **Director buying** | Moderate | Board member sees value |
| **Insider selling** | Weak (usually) | May be diversifying, not bearish |
| **Cluster selling** | Moderate | Multiple insiders selling — investigate |

> **Key insight:** Insiders sell for many reasons (diversification, taxes, buying a house), but they buy for only one reason — they think the stock will go up.

---

### Where to Track Insider Transactions

| Source | URL | Features |
|---|---|---|
| **SEC Form 4** | sec.gov | Official insider transactions |
| **OpenInsider** | openinsider.com | Free, searchable database |
| **InsiderMonkey** | insidermonkey.com | Analysis + rankings |
| **Finviz** | finviz.com | Insider buying screener |
| **Company Proxy** | DEF 14A filing | Executive compensation |

#### What to Look For in Form 4

| Field | What It Tells You |
|---|---|
| **Insider name** | CEO buying is more significant than a director |
| **Transaction type** | Purchase vs. sale vs. grant |
| **Shares** | More shares = stronger signal |
| **Price** | What they paid — their conviction level |
| **Total holdings** | Are they selling everything or just a portion? |

---

### Management Quality Assessment

#### The CEO Report Card

| Quality | How to Evaluate | Red Flags |
|---|---|---|
| **Track Record** | Past companies led | Pattern of failures |
| **Alignment** | Stock ownership vs. compensation | Low ownership, high pay |
| **Communication** | Earnings call clarity | Vague, evasive |
| **Capital Allocation** | Buybacks, dividends, M&A history | Value-destroying acquisitions |
| **Succession Planning** | Deep bench of talent | Over-reliance on one person |

#### CEO Compensation Analysis

| Metric | Healthy | Concerning |
|---|---|---|
| **Salary as % of total comp** | <20% | >50% (cash-heavy) |
| **Stock ownership** | >10x salary | <1x salary |
| **Performance-based** | >50% of comp | <25% of comp |
| **Clawback provisions** | Present | Absent |

> **Key insight:** A CEO with $50M in company stock has very different incentives than one with $5M in stock and $20M in cash salary.

---

### Capital Allocation Quality

How management uses the company's cash reveals their priorities and competence:

| Action | Good Sign | Bad Sign |
|---|---|---|
| **Buybacks** | When stock is undervalued | When stock is overvalued |
| **Dividends** | Consistent, growing | Unsustainable payout |
| **M&A** | Strategic, accretive | Empire building |
| **Debt reduction** | When rates are high | Taking on debt at peaks |
| **R&D investment** | Consistent, long-term | Cutting to boost short-term earnings |

---

### Building Your Management Research Checklist

| Research Item | Source | What to Find |
|---|---|---|
| CEO background | Company website, LinkedIn | Track record, education |
| Insider transactions | Form 4, OpenInsider | Buying or selling pattern |
| Executive compensation | DEF 14A proxy | Alignment with shareholders |
| Earnings call tone | Transcript, audio | Confidence, honesty |
| Capital allocation history | 10-K, press releases | M&A track record, buybacks |
| Board composition | DEF 14A | Independence, expertise |

---

### Common Management Research Mistakes

- **Mistake:** Ignoring insider selling — **Fix:** While selling isn't always bearish, cluster selling warrants investigation.
- **Mistake:** Trusting management blindly — **Fix:** Verify claims with financial statements.
- **Mistake:** Ignoring compensation structure — **Fix:** Check if management is aligned with shareholders.
- **Mistake:** Not reading earnings call transcripts — **Fix:** The Q&A reveals more than the prepared remarks.

### Professional Tips & Tricks

- Compare this quarter's earnings call language to previous quarters — look for tone changes.
- Insider buying at all-time highs is a very strong signal — the insider knows the company best.
- Use OpenInsider's screener to find stocks with recent cluster buying.
- A CEO who owns significant stock and takes modest salary is the best alignment signal.

---

### Key Takeaways

- Earnings calls reveal management's confidence, honesty, and strategic direction.
- Insider buying is a strong bullish signal; cluster buying is very strong.
- Management quality is assessed through track record, alignment, and capital allocation.
- CEO compensation should be performance-based and aligned with shareholders.
- Always verify management claims with actual financial statements.

**Next up:** Building a complete company research process that combines all your analytical tools.`,
      codeLanguage: "text",
      codeSnippet: `# Earnings Call & Insider Research Toolkit

## Earnings Call Analysis Template

Company: ________  Date: ________  Quarter: ________

PREPARED REMARKS ANALYSIS:
Revenue: $_______ vs $_______ (YoY change: _____%)
EPS: $_______ vs $_______ (YoY change: _____%)
Guidance: □ Raised  □ Maintained  □ Lowered  □ Withdrawn

Q&A RED FLAGS:
□ Evasive answers to direct questions
□ Blaming external factors excessively
□ Changing metrics from GAAP to "adjusted"
□ Defensive tone when challenged
□ Excessive buzzwords without substance

Management Tone: □ Confident  □ Cautious  □ Defensive  □ Desperate

## Insider Transaction Tracker

Date     | Insider    | Action | Shares | Price  | Signal
---------|------------|--------|--------|--------|--------
Jan 15   | CEO        | Buy    | 10,000 | $50.00 | Strong
Jan 20   | CFO        | Buy    | 5,000  | $51.00 | Moderate
Feb 1    | Director   | Sell   | 2,000  | $52.00 | Weak
Feb 5    | CEO        | Buy    | 15,000 | $49.50 | Very Strong

Cluster Buying Score: 3 buys, 1 sell = BULLISH

## Management Quality Scorecard

Criterion               | Score (1-5) | Notes
------------------------|-------------|------
CEO Track Record        | ___/5       | 
Stock Ownership         | ___/5       | 
Earnings Call Clarity   | ___/5       | 
Capital Allocation      | ___/5       | 
Compensation Alignment  | ___/5       | 
Succession Planning     | ___/5       | 
TOTAL                   | ___/30      |

Score Guide:
25-30: Excellent management
20-24: Good management
15-19: Adequate management
Below 15: Concerns about management`,
      codeOutput: `# Earnings Call & Insider Research Toolkit

## Earnings Call Analysis Template

Company: ________  Date: ________  Quarter: ________

PREPARED REMARKS ANALYSIS:
Revenue: $_______ vs $_______ (YoY change: _____%)
EPS: $_______ vs $_______ (YoY change: _____%)
Guidance: □ Raised  □ Maintained  □ Lowered  □ Withdrawn

Q&A RED FLAGS:
□ Evasive answers to direct questions
□ Blaming external factors excessively
□ Changing metrics from GAAP to "adjusted"
□ Defensive tone when challenged
□ Excessive buzzwords without substance

Management Tone: □ Confident  □ Cautious  □ Defensive  □ Desperate

## Insider Transaction Tracker

Date     | Insider    | Action | Shares | Price  | Signal
---------|------------|--------|--------|--------|--------
Jan 15   | CEO        | Buy    | 10,000 | $50.00 | Strong
Jan 20   | CFO        | Buy    | 5,000  | $51.00 | Moderate
Feb 1    | Director   | Sell   | 2,000  | $52.00 | Weak
Feb 5    | CEO        | Buy    | 15,000 | $49.50 | Very Strong

Cluster Buying Score: 3 buys, 1 sell = BULLISH

## Management Quality Scorecard

Criterion               | Score (1-5) | Notes
------------------------|-------------|------
CEO Track Record        | ___/5       | 
Stock Ownership         | ___/5       | 
Earnings Call Clarity   | ___/5       | 
Capital Allocation      | ___/5       | 
Compensation Alignment  | ___/5       | 
Succession Planning     | ___/5       | 
TOTAL                   | ___/30      |

Score Guide:
25-30: Excellent management
20-24: Good management
15-19: Adequate management
Below 15: Concerns about management`,
      visualizationTips: [
        "Track insider buying/selling over 12 months on a timeline chart.",
        "Compare management compensation to company performance.",
        "Plot earnings call tone scores over multiple quarters."
      ],
      tipsAndTricks: [
        "Insider buying at all-time highs is the strongest bullish signal.",
        "Use OpenInsider to screen for stocks with recent cluster insider buying.",
        "Compare this quarter's earnings call language to previous quarters.",
        "A CEO with 10x salary in stock is much better aligned than one with 1x."
      ],
      practice: [
        {
          id: "practice-insider-analysis",
          title: "Insider Transaction Analysis",
          difficulty: "Medium",
          task: "Research the insider transactions for 3 companies: one with recent cluster buying, one with cluster selling, and one with mixed activity. For each, explain what the insider activity suggests about the company's outlook.",
          hint: "Use OpenInsider.com to find recent insider transactions.",
          solution: `Insider Transaction Analysis:

Company A (Cluster Buying):
- 5 insiders bought in the past 3 months
- Total purchased: $2.5M worth of stock
- CEO alone bought $1M
- Stock near 52-week low
- Analysis: Strong bullish signal. Insiders believe stock is undervalued. They're putting personal money on the line at current prices.

Company B (Cluster Selling):
- 4 insiders sold in the past 3 months
- Total sold: $15M worth of stock
- CEO sold $5M, CFO sold $3M
- Stock near 52-week high
- Analysis: Could be normal diversification (stock up significantly), but volume is concerning. Check if they still hold significant positions. If they sold most holdings, that's a red flag.

Company C (Mixed Activity):
- 2 insiders bought $500K
- 3 insiders sold $2M
- Stock is flat year-to-date
- Analysis: Mixed signals. The buys are modest; the sells are larger. Could indicate some insiders see value while others are taking profits. Not a clear signal either way.

Key Insight: Context matters. Selling at all-time highs is different from selling at 52-week lows. Always check the stock price trend alongside insider activity.`
        },
        {
          id: "practice-earnings-call",
          title: "Earnings Call Tone Analysis",
          difficulty: "Easy",
          task: "Listen to (or read the transcript of) a recent earnings call for any public company. Rate the management's tone on a scale of 1-5 for: confidence, honesty, and forward visibility. Cite specific quotes that support your ratings.",
          hint: "Focus on the Q&A section where answers are less scripted.",
          solution: `Earnings Call Tone Analysis (Example: Microsoft Q4 2024):

Confidence: 5/5
Quote: "We're seeing strong demand across all segments, particularly in AI services where revenue grew triple digits year-over-year."
Assessment: Management is specific about growth drivers and doesn't hedge with vague language.

Honesty: 4/5
Quote: "While we're pleased with Azure growth, we acknowledge that some enterprise customers are taking longer to approve large AI deployments."
Assessment: Management acknowledges challenges directly without being defensive.

Forward Visibility: 4/5
Quote: "We expect AI-related revenue to be a meaningful contributor to growth in fiscal year 2025, though we're being prudent about the pace of enterprise adoption."
Assessment: Provides specific direction without over-promising.

Overall Tone Score: 13/15 (Excellent)
Key Takeaway: Management is confident but grounded. They acknowledge challenges while maintaining optimism. This is the tone of a well-managed company.`
        }
      ]
    },
    {
      id: "complete-research-process",
      title: "Lesson 3: Building Your Complete Company Research Process",
      shortDescription:
        "Create a systematic research process that combines fundamental analysis, SEC filings, insider data, and valuation to make informed stock investment decisions.",
      duration: "50 mins",
      readingTime: "10 mins read",
      contentMarkdown: `### The Systematic Research Process

Professional investors follow a repeatable process for evaluating stocks. Here's a framework you can use:

> **Mental model:** Think of stock research like a funnel — you start with many candidates, filter them through increasingly rigorous criteria, and end with a few high-conviction investments.

---

### The Stock Research Funnel

#### Stage 1: Screening (From 500 to 20)

| Criterion | Screen | Purpose |
|---|---|---|
| **Market Cap** | > $1B | Avoid micro-caps |
| **Revenue Growth** | > 5% annually | Growing businesses |
| **Profit Margin** | > 10% | Profitable companies |
| **Debt/Equity** | < 1.0 | Manageable debt |
| **P/E Ratio** | < 30 | Reasonable valuation |
| **Institutional Ownership** | > 50% | Smart money interest |

**Tools:** Finviz, Yahoo Finance, Morningstar stock screener

#### Stage 2: Qualitative Filter (From 20 to 10)

| Criterion | What to Assess | Pass/Fail |
|---|---|---|
| **Business model** | Is it understandable? | Can you explain it to a 10-year-old? |
| **Competitive moat** | Does it have durable advantages? | Can competitors easily replicate it? |
| **Management quality** | Is management honest and aligned? | CEO owns significant stock? |
| **Industry position** | Is it a leader or laggard? | Top 3 in its market? |
| **Growth runway** | Is there room to grow? | TAM still expanding? |

#### Stage 3: Deep Dive (From 10 to 5)

| Analysis | Source | What to Find |
|---|---|---|
| **Financial deep dive** | 10-K, 10-Q | Revenue trends, margins, cash flow |
| **Valuation** | DCF, comps | Is it fairly priced? |
| **Risk assessment** | Risk factors, industry research | What could go wrong? |
| **Management analysis** | Earnings calls, proxy | Are they competent and aligned? |
| **Insider activity** | Form 4 | Are they buying or selling? |

#### Stage 4: Decision (From 5 to 1-3)

| Decision | Criteria | Action |
|---|---|---|
| **Buy** | Undervalued + high quality + strong growth | Initiate position |
| **Watchlist** | Good quality but not cheap enough | Set price alerts |
| **Pass** | Too risky, overvalued, or poor quality | Move on |

---

### The Company Research Report Template

#### Executive Summary (1 page)

| Section | Content |
|---|---|
| **Thesis** | Why this stock will outperform in 1-3 sentences |
| **Target Price** | Your estimated intrinsic value |
| **Current Price** | Market price and margin of safety |
| **Key Catalysts** | What will drive the stock higher |
| **Key Risks** | What could go wrong |
| **Position Size** | How much to invest (based on conviction) |

#### Business Analysis (2-3 pages)

- Business model and revenue streams
- Competitive advantages (moat)
- Industry position and market share
- Growth drivers and opportunities
- Key customers and suppliers

#### Financial Analysis (2-3 pages)

- Revenue trends (3-5 years)
- Margin analysis (gross, operating, net)
- Cash flow analysis (operating, free cash flow)
- Balance sheet health (debt, liquidity)
- Return on invested capital (ROIC)

#### Valuation Analysis (1-2 pages)

- DCF valuation with sensitivity table
- Relative valuation (P/E, EV/EBITDA comps)
- Sum-of-parts if applicable
- Scenario analysis (bull/base/bear)
- Margin of safety calculation

#### Risk Analysis (1 page)

- Top 5 risks with probability and impact
- Competitive threats
- Regulatory risks
- Management risks
- Financial risks

---

### Position Sizing Based on Conviction

| Conviction Level | Portfolio Allocation | Criteria |
|---|---|---|
| **High Conviction** | 5-10% | Undervalued + strong moat + excellent management |
| **Medium Conviction** | 3-5% | Fairly valued + good quality + reasonable growth |
| **Low Conviction** | 1-3% | Speculative or turnaround situations |
| **Maximum per stock** | 10% | Never risk more than 10% on a single position |

---

### The Research Time Budget

| Activity | Time | Frequency |
|---|---|---|
| **Initial screening** | 2-3 hours | Monthly |
| **Qualitative assessment** | 3-4 hours | Per candidate |
| **Deep dive research** | 8-12 hours | Per investment |
| **Earnings call review** | 1-2 hours | Quarterly |
| **Portfolio review** | 2-3 hours | Quarterly |
| **Total per stock** | 15-20 hours | Per new position |

> **Key insight:** If you can't spend 15-20 hours researching a stock, you shouldn't own individual stocks. Use index funds instead.

---

### Common Research Process Mistakes

- **Mistake:** Skipping the screening stage — **Fix:** Always start with quantitative screens to narrow candidates.
- **Mistake:** Falling in love with a stock — **Fix:** Always consider the bear case; write it down.
- **Mistake:** Ignoring valuation — **Fix:** Even the best company is a bad investment at the wrong price.
- **Mistake:** Not documenting your thesis — **Fix:** Write it down so you can learn from mistakes.
- **Mistake:** Over-diversifying — **Fix:** Own 15-25 stocks maximum; more is diworsification.

### Professional Tips & Tricks

- Create a "watchlist" of 20-30 companies you understand and wait for them to become cheap.
- Set price alerts at your target buy prices — don't chase stocks.
- Review your investment thesis quarterly — if it's broken, sell.
- Keep a research journal to track your thought process and learn from mistakes.

---

### Key Takeaways

- Follow a systematic 4-stage process: Screen → Qualify → Deep Dive → Decide.
- Start with quantitative screens, then layer on qualitative analysis.
- Write a research report for every stock you own — it forces clarity.
- Position size based on conviction: 1-10% per position.
- If you can't spend 15+ hours researching, use index funds instead.
- Document your thesis and review quarterly — learn from every investment.

## 🎓 Module 8 Complete

You now have a complete company research process — from screening to deep dive to decision. You can evaluate stocks like a professional analyst.`,
      codeLanguage: "text",
      codeSnippet: `# Complete Company Research Template

## Executive Summary

Company: _______________
Ticker: _________________
Date: __________________
Current Price: $________
Target Price: $_________
Upside/Downside: _______%

THESIS (1-3 sentences):
_________________________________

KEY CATALYSTS:
1. _______________________________
2. _______________________________
3. _______________________________

KEY RISKS:
1. _______________________________
2. _______________________________
3. _______________________________

RECOMMENDATION: □ Buy  □ Hold  □ Sell  □ Watch

## Screening Results

Criterion           | Screen    | Result   | Pass?
--------------------|-----------|----------|------
Market Cap          | > $1B     | $___B    | □
Revenue Growth      | > 5%      | ____%    | □
Profit Margin       | > 10%     | ____%    | □
Debt/Equity         | < 1.0     | ____     | □
P/E Ratio           | < 30      | ____x    | □
ROE                 | > 15%     | ____%    | □

## Financial Health Scorecard

Metric              | Year 1 | Year 2 | Year 3 | Trend
--------------------|--------|--------|--------|------
Revenue             | $___M  | $___M  | $___M  | ▲▼—
Operating Margin    | ____%  | ____%  | ____%  | ▲▼—
Free Cash Flow      | $___M  | $___M  | $___M  | ▲▼—
Debt/Equity         | ____   | ____   | ____   | ▲▼—
ROIC                | ____%  | ____%  | ____%  | ▲▼—

## Valuation Summary

Method          | Intrinsic Value | Current Price | Margin of Safety
----------------|-----------------|---------------|------------------
DCF             | $_______        | $_______      | _____%
Relative (P/E)  | $_______        | $_______      | _____%
Relative (EV/EBITDA)| $_______    | $_______      | _____%
Average         | $_______        | $_______      | _____%

BUY BELOW: $_______ (25% margin of safety)`,
      codeOutput: `# Complete Company Research Template

## Executive Summary

Company: _______________
Ticker: _________________
Date: __________________
Current Price: $________
Target Price: $_________
Upside/Downside: _______%

THESIS (1-3 sentences):
_________________________________

KEY CATALYSTS:
1. _______________________________
2. _______________________________
3. _______________________________

KEY RISKS:
1. _______________________________
2. _______________________________
3. _______________________________

RECOMMENDATION: □ Buy  □ Hold  □ Sell  □ Watch

## Screening Results

Criterion           | Screen    | Result   | Pass?
--------------------|-----------|----------|------
Market Cap          | > $1B     | $___B    | □
Revenue Growth      | > 5%      | ____%    | □
Profit Margin       | > 10%     | ____%    | □
Debt/Equity         | < 1.0     | ____     | □
P/E Ratio           | < 30      | ____x    | □
ROE                 | > 15%     | ____%    | □

## Financial Health Scorecard

Metric              | Year 1 | Year 2 | Year 3 | Trend
--------------------|--------|--------|--------|------
Revenue             | $___M  | $___M  | $___M  | ▲▼—
Operating Margin    | ____%  | ____%  | ____%  | ▲▼—
Free Cash Flow      | $___M  | $___M  | $___M  | ▲▼—
Debt/Equity         | ____   | ____   | ____   | ▲▼—
ROIC                | ____%  | ____%  | ____%  | ▲▼—

## Valuation Summary

Method          | Intrinsic Value | Current Price | Margin of Safety
----------------|-----------------|---------------|------------------
DCF             | $_______        | $_______      | _____%
Relative (P/E)  | $_______        | $_______      | _____%
Relative (EV/EBITDA)| $_______    | $_______      | _____%
Average         | $_______        | $_______      | _____%

BUY BELOW: $_______ (25% margin of safety)`,
      visualizationTips: [
        "Create a visual funnel showing the screening stages from 500 stocks to 1-3 investments.",
        "Build a dashboard showing your research report at a glance.",
        "Track your investment thesis outcomes over time to improve your process."
      ],
      tipsAndTricks: [
        "Keep a watchlist of 20-30 companies you understand and wait for them to become cheap.",
        "Set price alerts at your target buy prices — don't chase stocks.",
        "Review your investment thesis quarterly — if it's broken, sell.",
        "If you can't spend 15+ hours researching, use index funds instead."
      ],
      practice: [
        {
          id: "practice-research-report",
          title: "Write a Research Report",
          difficulty: "Hard",
          task: "Using the template provided, write a complete research report for a company of your choice. Include executive summary, business analysis, financial analysis, valuation, and risk assessment. Be specific with numbers.",
          hint: "Use SEC filings, earnings calls, and financial data to support your analysis.",
          solution: `Research Report: Costco (COST)

EXECUTIVE SUMMARY
Thesis: Costco's membership model creates a self-reinforcing flywheel of low prices, high volume, and loyal customers. The company is expanding internationally and growing its e-commerce business while maintaining its competitive moat.

Target Price: $850
Current Price: $750
Upside: 13%
Recommendation: BUY on pullback

KEY CATALYSTS:
1. International expansion (new warehouses in China, Europe)
2. E-commerce growth accelerating
3. Membership fee increases (pricing power)

KEY RISKS:
1. Consumer spending slowdown
2. Competition from Walmart, Amazon
3. Margin pressure from inflation

FINANCIAL HIGHLIGHTS:
- Revenue: $250B (TTM)
- Revenue Growth: 8%
- Operating Margin: 3.5%
- Free Cash Flow: $6B
- Membership Renewal Rate: 92%

VALUATION:
- P/E: 45x (expensive)
- EV/EBITDA: 35x (expensive)
- PEG: 2.5 (fair for growth)
- Intrinsic Value (DCF): $780

Assessment: Stock is fairly valued to slightly expensive. Wait for a pullback to $700 for better entry. The membership model is exceptional, but the valuation prices in significant growth.`
        },
        {
          id: "practice-screening",
          title: "Stock Screening Exercise",
          difficulty: "Easy",
          task: "Use a stock screener (Finviz, Yahoo Finance) to find 10 stocks that meet these criteria: Market cap > $10B, Revenue growth > 10%, P/E < 25, Debt/Equity < 0.5. List the stocks and explain why each passes your screen.",
          hint: "Use Finviz.com screener with the specified filters.",
          solution: `Stock Screening Results:

Criteria: Market Cap > $10B, Revenue Growth > 10%, P/E < 25, D/E < 0.5

Results (hypothetical):
1. Apple (AAPL) - $3T, +5%, P/E 30 → FAIL (P/E too high)
2. Microsoft (MSFT) - $2.8T, +15%, P/E 35 → FAIL (P/E too high)
3. JPMorgan (JPM) - $500B, +12%, P/E 12 → PASS ✓
4. UnitedHealth (UNH) - $500B, +14%, P/E 22 → PASS ✓
5. Visa (V) - $550B, +11%, P/E 30 → FAIL (P/E too high)
6. Mastercard (MA) - $450B, +12%, P/E 35 → FAIL (P/E too high)
7. Home Depot (HD) - $350B, +8%, P/E 22 → FAIL (growth too low)
8. Broadcom (AVGO) - $700B, +20%, P/E 35 → FAIL (P/E too high)
9. Oracle (ORCL) - $350B, +10%, P/E 20 → PASS ✓
10. Adobe (ADBE) - $250B, +12%, P/E 45 → FAIL (P/E too high)

Passing stocks: JPM, UNH, ORCL

Analysis: Most large-cap tech stocks fail the P/E screen because the market prices in high growth. Financial and healthcare stocks offer better value with reasonable growth. These 3 candidates warrant further qualitative research.`
        }
      ]
    }
  ],
};
