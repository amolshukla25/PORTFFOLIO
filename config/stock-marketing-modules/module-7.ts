import type { Module } from "../courses";

export const MODULE_7: Module = {
  id: "module-7-advanced-valuation",
  title: "Module 7: Advanced Stock Valuation Techniques",
  description:
    "Master professional-grade valuation methods including detailed DCF modeling, relative valuation, sum-of-parts analysis, and scenario-based valuation to determine what stocks are truly worth.",
  lessons: [
    {
      id: "dcf-deep-dive",
      title: "Lesson 1: Discounted Cash Flow (DCF) — The Gold Standard",
      shortDescription:
        "Master the most rigorous valuation method used by professional investors to determine a stock's intrinsic value based on projected future cash flows.",
      duration: "60 mins",
      readingTime: "12 mins read",
      contentMarkdown: `### Why DCF Is the Gold Standard

The Discounted Cash Flow (DCF) model values a company based on the present value of its future free cash flows. It's the most theoretically sound valuation method because it focuses on what a company actually generates in cash — not accounting profits.

> **Mental model:** A company is worth exactly the cash it will generate for its owners over its entire lifetime, adjusted for the time value of money. DCF calculates this.

---

### DCF Step-by-Step Process

#### Step 1: Project Free Cash Flows (FCF)

Free Cash Flow = Operating Cash Flow - Capital Expenditures

| Year | Revenue | Growth | Operating Margin | EBIT | Taxes (25%) | NOPAT | CapEx | FCF |
|---|---|---|---|---|---|---|---|---|
| 2024 (Base) | $100M | — | 25% | $25M | $6.25M | $18.75M | $5M | $13.75M |
| 2025 | $110M | 10% | 26% | $28.6M | $7.15M | $21.45M | $5.5M | $15.95M |
| 2026 | $119M | 8% | 27% | $32.13M | $8.03M | $24.10M | $6M | $18.10M |
| 2027 | $126M | 6% | 28% | $35.28M | $8.82M | $26.46M | $6.3M | $20.16M |
| 2028 | $131M | 4% | 28% | $36.68M | $9.17M | $27.51M | $6.5M | $21.01M |

**Key assumptions to project:**
- Revenue growth rate (historical + industry outlook)
- Operating margin (trend + competitive position)
- Tax rate (effective, not statutory)
- Capital expenditure requirements (maintenance + growth)

---

#### Step 2: Determine the Discount Rate (WACC)

The Weighted Average Cost of Capital (WACC) represents the minimum return investors require.

**WACC Formula:**

WACC = (E/V × Re) + (D/V × Rd × (1-Tax))

| Component | Value | Weight | Contribution |
|---|---|---|---|
| Cost of Equity (Re) | 10% | 70% | 7.0% |
| Cost of Debt (Rd) | 5% | 30% | 1.125% |
| Tax Rate | 25% | — | Adjusts debt cost |
| **WACC** | — | — | **8.125%** |

**Estimating Cost of Equity (using CAPM):**

Re = Risk-Free Rate + Beta × Market Risk Premium

| Input | Value | Source |
|---|---|---|
| Risk-Free Rate | 4.5% | 10-year Treasury yield |
| Beta | 1.2 | Company's volatility vs. market |
| Market Risk Premium | 5.5% | Historical equity premium |
| **Cost of Equity** | **11.1%** | 4.5% + 1.2 × 5.5% |

> **Key insight:** A higher discount rate = lower valuation. Companies with higher risk (higher beta) should have lower valuations, all else equal.

---

#### Step 3: Calculate Terminal Value

The Terminal Value represents the company's value beyond the explicit projection period.

**Two Methods:**

| Method | Formula | When to Use |
|---|---|---|
| **Gordon Growth** | FCF × (1+g) / (WACC - g) | Stable, mature companies |
| **Exit Multiple** | Terminal EBITDA × Multiple | Companies with comparable peers |

**Gordon Growth Example:**

| Input | Value |
|---|---|
| Terminal FCF (Year 5) | $21.01M |
| Perpetual Growth Rate (g) | 3% |
| WACC | 8.125% |
| **Terminal Value** | **$21.01M × 1.03 / (0.08125 - 0.03) = $421.8M** |

> **Warning:** The terminal value often represents 60-80% of total DCF value. Small changes in growth rate or WACC dramatically affect the result.

---

#### Step 4: Discount to Present Value

| Year | Cash Flow | Discount Factor (8.125%) | Present Value |
|---|---|---|---|
| 2025 | $15.95M | 0.9249 | $14.75M |
| 2026 | $18.10M | 0.8554 | $15.48M |
| 2027 | $20.16M | 0.7912 | $15.95M |
| 2028 | $21.01M | 0.7317 | $15.37M |
| Terminal | $421.8M | 0.7317 | $308.62M |
| **Total Enterprise Value** | — | — | **$370.17M** |

---

#### Step 5: Bridge to Equity Value

| Item | Value |
|---|---|
| Enterprise Value | $370.17M |
| Less: Debt | -$50M |
| Less: Preferred Stock | $0 |
| Plus: Cash | +$20M |
| **Equity Value** | **$340.17M** |
| Shares Outstanding | 10M |
| **Intrinsic Value Per Share** | **$34.02** |

---

### DCF Sensitivity Analysis

Since DCF is highly sensitive to assumptions, always run sensitivity analysis:

| WACC \ Growth | 2.0% | 2.5% | 3.0% | 3.5% | 4.0% |
|---|---|---|---|---|---|
| **7.0%** | $38.50 | $42.10 | $46.80 | $53.20 | $62.10 |
| **7.5%** | $35.20 | $38.10 | $41.80 | $46.90 | $53.80 |
| **8.125%** | $31.80 | $34.02 | $37.00 | $41.20 | $46.50 |
| **8.5%** | $29.50 | $31.50 | $34.00 | $37.20 | $41.50 |
| **9.0%** | $27.10 | $28.80 | $30.90 | $33.50 | $36.80 |

> **Key insight:** If the stock trades at $30, it's undervalued in most scenarios. If it trades at $45, it's only attractive in optimistic scenarios.

---

### Common DCF Mistakes

- **Mistake:** Using overly optimistic growth rates — **Fix:** Base case should be conservative; upside scenarios are bonuses.
- **Mistake:** Ignoring capital expenditures — **Fix:** FCF, not earnings, is what matters.
- **Mistake:** Treating terminal value as certain — **Fix:** Discount terminal value more aggressively.
- **Mistake:** Not running sensitivity analysis — **Fix:** Always show a range, not a single number.
- **Mistake:** Using WACC without justification — **Fix:** Calculate WACC explicitly with CAPM.

### Professional Tips & Tricks

- Use a 10-year projection period for stable companies, 5 years for high-growth.
- Terminal growth rate should not exceed long-term GDP growth (2-3%).
- Always calculate a "margin of safety" — buy at 20-30% below intrinsic value.
- DCF works best for companies with predictable cash flows; less reliable for cyclical or pre-profit companies.

---

### Key Takeaways

- DCF values a company based on the present value of future free cash flows.
- Key inputs: FCF projections, WACC (discount rate), and terminal value.
- Terminal value often represents 60-80% of total value — be cautious.
- Always run sensitivity analysis to show a range of valuations.
- DCF is most reliable for stable, cash-generating companies.
- Use margin of safety — don't buy at intrinsic value; buy below it.

**Next up:** Relative valuation — using market multiples to compare stocks.`,
      codeLanguage: "text",
      codeSnippet: `# DCF Valuation Template

## Free Cash Flow Projection

Year     | Revenue | Growth | Margin | FCF
---------|---------|--------|--------|--------
2024     | $100M   | —      | 13.8%  | $13.75M
2025     | $110M   | 10%    | 14.5%  | $15.95M
2026     | $119M   | 8%     | 15.2%  | $18.10M
2027     | $126M   | 6%     | 16.0%  | $20.16M
2028     | $131M   | 4%     | 16.0%  | $21.01M

## WACC Calculation

Cost of Equity: Risk-Free + Beta × MRP
= 4.5% + 1.2 × 5.5% = 11.1%

WACC = (E/V × Re) + (D/V × Rd × (1-Tax))
= (0.7 × 11.1%) + (0.3 × 5% × 0.75)
= 7.77% + 1.125% = 8.9%

## Terminal Value (Gordon Growth)

TV = FCF_terminal × (1+g) / (WACC - g)
= $21.01M × 1.03 / (0.089 - 0.03)
= $367.5M

## Enterprise Value

PV of FCFs: $58.3M
PV of Terminal Value: $239.8M
Total Enterprise Value: $298.1M

## Equity Value Bridge

Enterprise Value:     $298.1M
(-) Debt:             -$50.0M
(+) Cash:             +$20.0M
= Equity Value:       $268.1M

Shares Outstanding: 10M
Intrinsic Value/Share: $26.81

## Sensitivity Matrix

WACC \ Terminal Growth:  2.0%  2.5%  3.0%  3.5%
7.5%                    $28.50 $31.20 $34.80 $39.50
8.0%                    $25.80 $27.90 $30.50 $33.80
8.9%                    $22.10 $23.60 $26.81 $28.90
9.5%                    $20.10 $21.30 $22.80 $24.60
10.0%                   $18.50 $19.50 $20.70 $22.10`,
      codeOutput: `# DCF Valuation Template

## Free Cash Flow Projection

Year     | Revenue | Growth | Margin | FCF
---------|---------|--------|--------|--------
2024     | $100M   | —      | 13.8%  | $13.75M
2025     | $110M   | 10%    | 14.5%  | $15.95M
2026     | $119M   | 8%     | 15.2%  | $18.10M
2027     | $126M   | 6%     | 16.0%  | $20.16M
2028     | $131M   | 4%     | 16.0%  | $21.01M

## WACC Calculation

Cost of Equity: Risk-Free + Beta × MRP
= 4.5% + 1.2 × 5.5% = 11.1%

WACC = (E/V × Re) + (D/V × Rd × (1-Tax))
= (0.7 × 11.1%) + (0.3 × 5% × 0.75)
= 7.77% + 1.125% = 8.9%

## Terminal Value (Gordon Growth)

TV = FCF_terminal × (1+g) / (WACC - g)
= $21.01M × 1.03 / (0.089 - 0.03)
= $367.5M

## Enterprise Value

PV of FCFs: $58.3M
PV of Terminal Value: $239.8M
Total Enterprise Value: $298.1M

## Equity Value Bridge

Enterprise Value:     $298.1M
(-) Debt:             -$50.0M
(+) Cash:             +$20.0M
= Equity Value:       $268.1M

Shares Outstanding: 10M
Intrinsic Value/Share: $26.81

## Sensitivity Matrix

WACC \ Terminal Growth:  2.0%  2.5%  3.0%  3.5%
7.5%                    $28.50 $31.20 $34.80 $39.50
8.0%                    $25.80 $27.90 $30.50 $33.80
8.9%                    $22.10 $23.60 $26.81 $28.90
9.5%                    $20.10 $21.30 $22.80 $24.60
10.0%                   $18.50 $19.50 $20.70 $22.10`,
      visualizationTips: [
        "Create a waterfall chart showing how each year's FCF contributes to enterprise value.",
        "Build a tornado diagram showing which assumption (growth, WACC, margin) has the biggest impact.",
        "Plot the intrinsic value across different WACC/growth scenarios on a heatmap."
      ],
      tipsAndTricks: [
        "Terminal value is 60-80% of DCF value — be extra conservative with terminal assumptions.",
        "Always show a sensitivity table, not a single point estimate.",
        "DCF works best for mature, cash-generating companies — less useful for pre-profit startups.",
        "Buy at a 20-30% margin of safety below your DCF estimate."
      ],
      practice: [
        {
          id: "practice-dcf-model",
          title: "Build a DCF Model",
          difficulty: "Hard",
          task: "Using the following data, build a complete DCF valuation: Revenue $200M growing 15%, 12%, 10%, 8%, 6% over 5 years. Operating margin 20% growing to 25%. WACC 9%. Terminal growth 3%. Tax rate 25%. CapEx 5% of revenue. Shares outstanding 20M. Debt $100M. Cash $30M.",
          hint: "Project FCF for each year, calculate terminal value, discount to present, then bridge to equity value.",
          solution: `DCF Valuation:

Year 1: Rev $230M, Op Margin 21%, EBIT $48.3M, NOPAT $36.2M, CapEx $11.5M, FCF $24.7M
Year 2: Rev $257.6M, Op Margin 22%, EBIT $56.7M, NOPAT $42.5M, CapEx $12.9M, FCF $29.6M
Year 3: Rev $283.4M, Op Margin 23%, EBIT $65.2M, NOPAT $48.9M, CapEx $14.2M, FCF $34.7M
Year 4: Rev $306M, Op Margin 24%, EBIT $73.4M, NOPAT $55.1M, CapEx $15.3M, FCF $39.8M
Year 5: Rev $324.4M, Op Margin 25%, EBIT $81.1M, NOPAT $60.8M, CapEx $16.2M, FCF $44.6M

Terminal Value: $44.6M × 1.03 / (0.09 - 0.03) = $766.6M

PV of FCFs (at 9%):
Year 1: $22.7M
Year 2: $24.9M
Year 3: $26.8M
Year 4: $28.2M
Year 5: $29.0M
Sum: $131.6M

PV of Terminal Value: $766.6M / (1.09)^5 = $498.3M

Enterprise Value: $131.6M + $498.3M = $629.9M

Equity Value: $629.9M - $100M (debt) + $30M (cash) = $559.9M

Value Per Share: $559.9M / 20M = $28.00

If current price is $22, there's a 27% margin of safety — attractive!`
        },
        {
          id: "practice-sensitivity",
          title: "DCF Sensitivity Analysis",
          difficulty: "Medium",
          task: "Create a sensitivity table for the DCF above, varying WACC from 7% to 11% and terminal growth from 1% to 4%. At what price range is the stock undervalued?",
          hint: "Recalculate the DCF for each combination of WACC and growth rate.",
          solution: `Sensitivity Analysis (Value Per Share):

WACC \ Terminal Growth:  1.0%   2.0%   3.0%   4.0%
7.0%                    $32.50  $38.20  $46.80  $60.50
8.0%                    $28.10  $32.00  $37.50  $45.20
9.0%                    $24.50  $27.20  $28.00  $35.80
10.0%                   $21.80  $23.50  $25.80  $28.90
11.0%                   $19.60  $20.80  $22.40  $24.50

Undervalued if current price < intrinsic value:

Conservative scenario (WACC 10%, growth 2%): $23.50
Base case (WACC 9%, growth 3%): $28.00
Optimistic scenario (WACC 8%, growth 3%): $37.50

If stock trades at $22:
- Conservative: 6% upside
- Base case: 27% upside
- Optimistic: 70% upside

If stock trades at $30:
- Conservative: -21% (overvalued)
- Base case: -7% (fairly valued)
- Optimistic: 25% upside

Conclusion: At $22, the stock offers a margin of safety in most scenarios. At $30, only attractive in optimistic scenarios.`
        }
      ]
    },
    {
      id: "relative-valuation",
      title: "Lesson 2: Relative Valuation — Comparing Stocks Using Multiples",
      shortDescription:
        "Learn how to value stocks by comparing them to peers using P/E, EV/EBITDA, PEG, and other relative valuation metrics.",
      duration: "50 mins",
      readingTime: "10 mins read",
      contentMarkdown: `### What Is Relative Valuation?

Relative valuation determines a stock's value by comparing it to similar companies using standardized metrics (multiples). It answers: "Is this stock cheap or expensive relative to its peers?"

> **Mental model:** Think of relative valuation like shopping for houses — you compare price per square foot across similar homes in the same neighborhood to determine if one is a good deal.

---

### The Key Valuation Multiples

#### 1. Price-to-Earnings (P/E) Ratio

**Formula:** P/E = Stock Price / Earnings Per Share

| P/E Range | Interpretation | Typical Companies |
|---|---|---|
| 10-15 | Cheap | Utilities, banks, mature industrials |
| 15-20 | Fair | Consumer staples, healthcare |
| 20-30 | Expensive | Technology, growth companies |
| 30+ | Very expensive | High-growth tech, biotech |

**Trailing vs. Forward P/E:**

| Type | Calculation | Pros | Cons |
|---|---|---|---|
| **Trailing P/E** | Price / Last 12 months EPS | Based on actual earnings | Uses past data |
| **Forward P/E** | Price / Next 12 months EPS | Forward-looking | Analyst estimates may be wrong |

#### 2. Enterprise Value / EBITDA (EV/EBITDA)

**Formula:** EV/EBITDA = (Market Cap + Debt - Cash) / EBITDA

| EV/EBITDA Range | Interpretation | Use Case |
|---|---|---|
| 5-8 | Cheap | Capital-intensive businesses |
| 8-12 | Fair | Most mature companies |
| 12-18 | Expensive | High-growth or asset-light |
| 18+ | Very expensive | Tech, SaaS, healthcare |

> **Key insight:** EV/EBITDA is better than P/E for comparing companies with different debt levels or tax rates.

#### 3. Price-to-Book (P/B) Ratio

**Formula:** P/B = Stock Price / Book Value Per Share

| P/B Range | Interpretation | Best For |
|---|---|---|
| Below 1.0 | Trading below book value | Deep value, banks |
| 1.0-2.0 | Fair value | Asset-heavy businesses |
| 2.0-5.0 | Growth premium | Quality companies |
| 5.0+ | High growth expected | Tech, services |

#### 4. Price-to-Sales (P/S) Ratio

**Formula:** P/S = Market Cap / Revenue

| P/S Range | Interpretation | Best For |
|---|---|---|
| Below 1.0 | Very cheap | Distressed or low-margin |
| 1.0-3.0 | Fair | Mature, profitable companies |
| 3.0-10.0 | Growth premium | High-growth tech |
| 10+ | Extremely expensive | Pre-profit SaaS |

#### 5. PEG Ratio (P/E to Growth)

**Formula:** PEG = P/E Ratio / Earnings Growth Rate

| PEG | Interpretation |
|---|---|
| Below 0.5 | Potentially undervalued |
| 0.5-1.0 | Fairly valued for growth |
| 1.0-1.5 | Slightly expensive |
| Above 1.5 | Expensive for growth |

> **Key insight:** A stock with P/E of 30 but 30% growth (PEG = 1.0) may be cheaper than a stock with P/E of 15 but 5% growth (PEG = 3.0).

---

### How to Perform Relative Valuation

#### Step 1: Identify Comparable Companies

| Criteria | Your Company | Comp 1 | Comp 2 | Comp 3 |
|---|---|---|---|---|
| **Industry** | Software | Software | Software | Software |
| **Market Cap** | $5B | $3B | $8B | $4B |
| **Growth Rate** | 20% | 15% | 25% | 18% |
| **Margin** | 25% | 20% | 30% | 22% |

#### Step 2: Calculate Multiples for All Comps

| Company | P/E | EV/EBITDA | P/S | PEG |
|---|---|---|---|---|
| Comp 1 | 22x | 15x | 5x | 1.47 |
| Comp 2 | 35x | 22x | 10x | 1.40 |
| Comp 3 | 25x | 18x | 7x | 1.39 |
| **Average** | **27.3x** | **18.3x** | **7.3x** | **1.42** |
| **Median** | **25x** | **18x** | **7x** | **1.40** |

#### Step 3: Apply Multiples to Your Company

| Metric | Your Company Value | Multiple Applied | Implied Value |
|---|---|---|---|
| EPS: $2.00 | $2.00 × 27.3x P/E | = | $54.60 |
| EBITDA: $80M | $80M × 18.3x EV/EBITDA | = | $1,464M |
| Revenue: $200M | $200M × 7.3x P/S | = | $1,460M |

**Average Implied Value:** ~$55/share

#### Step 4: Apply Premium or Discount

| Factor | Premium/Discount | Reason |
|---|---|---|
| Higher growth than peers | +10-20% | Growing faster |
| Stronger moat | +5-15% | More defensible |
| Smaller size | -5-10% | Liquidity discount |
| Higher risk | -10-20% | More uncertainty |
| Weaker management | -5-10% | Execution risk |

---

### Industry-Specific Multiples

| Industry | Best Multiple | Why |
|---|---|---|
| **Technology/SaaS** | EV/Revenue, P/S | Often pre-profit |
| **Banking** | P/B, P/E | Asset-heavy, regulated |
| **Real Estate (REITs)** | P/FFO, Dividend Yield | Accounting differs |
| **Energy** | EV/EBITDA, P/CF | Cyclical earnings |
| **Consumer Brands** | P/E, EV/EBITDA | Stable earnings |
| **Biotech** | EV/Pipeline, P/S | Pre-revenue |

---

### Common Relative Valuation Mistakes

- **Mistake:** Comparing to wrong peers — **Fix:** Ensure companies are similar in size, growth, and business model.
- **Mistake:** Using only one multiple — **Fix:** Use 2-3 multiples and triangulate.
- **Mistake:** Ignoring growth differences — **Fix:** Use PEG to adjust for growth.
- **Mistake:** Not adjusting for quality — **Fix:** Premium for moats, discount for risk.
- **Mistake:** Using trailing multiples for fast-changing companies — **Fix:** Forward multiples are better for growth stocks.

### Professional Tips & Tricks

- Use the median, not average, to avoid outliers skewing results.
- Always explain WHY you're applying a premium or discount — be specific.
- Relative valuation works best when there are 5+ good comparable companies.
- Combine with DCF — relative valuation for a sanity check, DCF for precision.

---

### Key Takeaways

- Relative valuation compares stocks using standardized multiples (P/E, EV/EBITDA, P/S).
- PEG ratio adjusts P/E for growth — essential for comparing growth stocks.
- Different industries use different multiples — choose the right one.
- Always apply premium/discount for quality, growth, and risk differences.
- Use 2-3 multiples and triangulate for a more reliable estimate.
- Combine relative valuation with DCF for best results.

**Next up:** Sum-of-parts valuation and special situations.`,
      codeLanguage: "text",
      codeSnippet: `# Relative Valuation Toolkit

## Multiples Cheat Sheet

Multiple        | Formula                    | Best For
----------------|----------------------------|------------------
P/E             | Price / EPS                | Profitable companies
Forward P/E     | Price / Forward EPS        | Growth companies
EV/EBITDA       | Enterprise Value / EBITDA  | Cross-company comparison
P/B             | Price / Book Value         | Asset-heavy, banks
P/S             | Price / Sales              | Pre-profit companies
PEG             | P/E / Growth Rate          | Adjusting for growth
EV/Revenue      | Enterprise Value / Revenue | SaaS, tech

## Comparable Analysis Template

Company    | P/E  | EV/EBITDA | P/S  | PEG  | Growth
-----------|------|-----------|------|------|--------
Comp A     | 22x  | 15x       | 5x   | 1.5  | 15%
Comp B     | 35x  | 22x       | 10x  | 1.4  | 25%
Comp C     | 25x  | 18x       | 7x   | 1.4  | 18%
Average    | 27x  | 18x       | 7x   | 1.4  | 19%
Median     | 25x  | 18x       | 7x   | 1.4  | 18%

Apply to target:
EPS: $2.00 × 25x = $50.00
EBITDA: $80M × 18x = $1,440M → $48/share
Revenue: $200M × 7x = $1,400M → $46.67/share

Average implied value: ~$48/share

## Industry Multiples Guide

Industry      | Primary Multiple | Secondary | Typical Range
--------------|------------------|-----------|---------------
Tech/SaaS     | EV/Revenue       | P/S       | 5-15x
Banks         | P/B              | P/E       | 0.8-2.0x
REITs         | P/FFO            | Div Yield | 12-20x
Energy        | EV/EBITDA        | P/CF      | 4-8x
Consumer      | P/E              | EV/EBITDA | 15-25x
Healthcare    | P/E              | EV/EBITDA | 18-30x`,
      codeOutput: `# Relative Valuation Toolkit

## Multiples Cheat Sheet

Multiple        | Formula                    | Best For
----------------|----------------------------|------------------
P/E             | Price / EPS                | Profitable companies
Forward P/E     | Price / Forward EPS        | Growth companies
EV/EBITDA       | Enterprise Value / EBITDA  | Cross-company comparison
P/B             | Price / Book Value         | Asset-heavy, banks
P/S             | Price / Sales              | Pre-profit companies
PEG             | P/E / Growth Rate          | Adjusting for growth
EV/Revenue      | Enterprise Value / Revenue | SaaS, tech

## Comparable Analysis Template

Company    | P/E  | EV/EBITDA | P/S  | PEG  | Growth
-----------|------|-----------|------|------|--------
Comp A     | 22x  | 15x       | 5x   | 1.5  | 15%
Comp B     | 35x  | 22x       | 10x  | 1.4  | 25%
Comp C     | 25x  | 18x       | 7x   | 1.4  | 18%
Average    | 27x  | 18x       | 7x   | 1.4  | 19%
Median     | 25x  | 18x       | 7x   | 1.4  | 18%

Apply to target:
EPS: $2.00 × 25x = $50.00
EBITDA: $80M × 18x = $1,440M → $48/share
Revenue: $200M × 7x = $1,400M → $46.67/share

Average implied value: ~$48/share

## Industry Multiples Guide

Industry      | Primary Multiple | Secondary | Typical Range
--------------|------------------|-----------|---------------
Tech/SaaS     | EV/Revenue       | P/S       | 5-15x
Banks         | P/B              | P/E       | 0.8-2.0x
REITs         | P/FFO            | Div Yield | 12-20x
Energy        | EV/EBITDA        | P/CF      | 4-8x
Consumer      | P/E              | EV/EBITDA | 15-25x
Healthcare    | P/E              | EV/EBITDA | 18-30x`,
      visualizationTips: [
        "Create a scatter plot of P/E vs. growth rate for all comparable companies.",
        "Build a bar chart comparing your company's multiples to the peer average.",
        "Plot the implied value range from each multiple to show the triangulation."
      ],
      tipsAndTricks: [
        "Use the median, not average, to avoid outliers skewing your comps.",
        "PEG ratio is essential for comparing growth stocks — never use P/E alone.",
        "Always explain the premium/discount you're applying — be specific.",
        "Combine relative valuation with DCF — relative for sanity check, DCF for precision."
      ],
      practice: [
        {
          id: "practice-comps-analysis",
          title: "Comparable Company Analysis",
          difficulty: "Medium",
          task: "Perform a comparable company analysis for Microsoft (MSFT) using Apple (AAPL), Google (GOOGL), and Amazon (AMZN) as comps. Calculate P/E, EV/EBITDA, and PEG for each. What is the implied value range for MSFT?",
          hint: "Look up current financial data for each company. Calculate the average/median multiples.",
          solution: `Comparable Company Analysis for MSFT:

Data (hypothetical current):

Company  | Market Cap | P/E  | EV/EBITDA | PEG  | Growth
---------|------------|------|-----------|------|--------
MSFT     | $2.8T      | 35x  | 25x       | 2.3  | 15%
AAPL     | $3.0T      | 30x  | 24x       | 2.5  | 12%
GOOGL    | $1.8T      | 25x  | 18x       | 1.7  | 15%
AMZN     | $1.9T      | 60x  | 20x       | 2.0  | 30%

Peer Statistics (ex-MSFT):
P/E Average: 38.3x, Median: 30x
EV/EBITDA Average: 20.7x, Median: 20x
PEG Average: 2.1x, Median: 2.0x

MSFT Financials:
EPS: $11.50 → 30x × $11.50 = $345
EBITDA: $100B → 20x = $2T → $26.67/share
Revenue: $230B → P/S 10x = $2.3T → $30.67/share

Implied Value Range: $27 - $35/share
Current Price: $38/share
Assessment: Trading at slight premium to peers — fairly valued to slightly expensive.`
        },
        {
          id: "practice-peg-analysis",
          title: "PEG Ratio Analysis",
          difficulty: "Easy",
          task: "Compare these stocks using PEG ratio: Stock A (P/E: 40, Growth: 20%), Stock B (P/E: 25, Growth: 10%), Stock C (P/E: 15, Growth: 5%). Which is cheapest on a growth-adjusted basis?",
          hint: "PEG = P/E ÷ Growth Rate. Lower PEG = cheaper for growth.",
          solution: `PEG Ratio Analysis:

Stock A: P/E 40, Growth 20%
PEG = 40 / 20 = 2.0

Stock B: P/E 25, Growth 10%
PEG = 25 / 10 = 2.5

Stock C: P/E 15, Growth 5%
PEG = 15 / 5 = 3.0

Rankings (cheapest to most expensive on growth-adjusted basis):
1. Stock A: PEG 2.0 (CHEAPEST)
2. Stock B: PEG 2.5
3. Stock C: PEG 3.0 (MOST EXPENSIVE)

Key Insight:
Despite having the highest P/E ratio (40x), Stock A is actually the cheapest on a growth-adjusted basis because its growth rate (20%) justifies the higher multiple.

Stock C looks cheap at P/E 15, but with only 5% growth, you're paying 3x for each unit of growth — expensive!

Lesson: Never evaluate P/E in isolation. Always consider growth using PEG.`
        }
      ]
    },
    {
      id: "sum-of-parts-and-special",
      title: "Lesson 3: Sum-of-Parts Valuation & Special Situations",
      shortDescription:
        "Value conglomerates using sum-of-parts analysis, understand special situations like spin-offs and mergers, and apply scenario-based valuation.",
      duration: "50 mins",
      readingTime: "10 mins read",
      contentMarkdown: `### Sum-of-Parts (SOTP) Valuation

When a company has multiple distinct business segments, each may deserve a different valuation multiple. Sum-of-parts values each segment separately and adds them together.

> **Mental model:** SOTP is like appraising a house by valuing the land, the building, and the rental income separately — then adding them up. The whole may be worth more (or less) than the sum of its parts.

---

### When to Use SOTP

| Situation | Why SOTP Works |
|---|---|
| **Conglomerates** | Different businesses deserve different multiples |
| **Holding companies** | Each subsidiary has distinct value |
| **Companies with hidden assets** | Real estate, IP, investments not reflected in stock price |
| **Spin-off candidates** | Market may be undervaluing a segment |
| **Turnaround situations** | Different segments at different stages |

---

### SOTP Valuation Example: Tech Conglomerate

**Company XYZ** has three business segments:

| Segment | Revenue | EBITDA | Multiple | Implied Value |
|---|---|---|---|---|
| **Cloud Software** | $500M | $150M | 20x EV/EBITDA | $3,000M |
| **Hardware** | $300M | $45M | 8x EV/EBITDA | $360M |
| **Services** | $200M | $30M | 10x EV/EBITDA | $300M |
| **Total** | $1,000M | $225M | — | **$3,660M** |

| Bridge to Equity Value | Value |
|---|---|
| Total Enterprise Value | $3,660M |
| Less: Corporate Debt | -$500M |
| Less: Corporate Overhead (10% discount) | -$366M |
| Plus: Cash & Investments | +$200M |
| **Equity Value** | **$2,994M** |
| Shares Outstanding | 100M |
| **Intrinsic Value Per Share** | **$29.94** |

---

### The Conglomerate Discount

Holding companies and conglomerates often trade at a **discount** to the sum of their parts:

| Discount Type | Typical Range | Cause |
|---|---|---|
| **Conglomerate Discount** | 10-30% | Complexity, poor capital allocation |
| **Holding Company Discount** | 15-40% | Illiquidity, governance concerns |
| **Sum-of-Parts Premium** | 10-50% | Hidden value, spin-off potential |

> **Key insight:** A conglomerate discount can be an opportunity — if you believe the discount will narrow, you can profit from the "unlocking" of value.

---

### Special Situation Investing

Special situations occur when corporate actions create temporary mispricings:

#### 1. Spin-Offs

When a company separates a division into a new public company:

| Phase | What Happens | Opportunity |
|---|---|---|
| **Announcement** | Market often reacts negatively | Parent stock may drop |
| **Distribution** | Shares distributed to shareholders | Forced selling by index funds |
| **Post-Spin** | New company trades independently | Potential value unlock |

**Why spin-offs outperform:**
- Index funds must sell (not in their index)
- Management teams become more focused
- Conglomerate discount disappears
- New company gets proper analyst coverage

#### 2. Mergers & Acquisitions

| Situation | Strategy | Risk |
|---|---|---|
| **Merger Arbitrage** | Buy target, short acquirer | Deal may not close |
| **Accretive Acquisition** | Buy acquirer if deal is wise | Integration risk |
| **Busted Deal** | Buy target after deal fails | Uncertainty |

#### 3. Restructuring

| Phase | What Happens | Opportunity |
|---|---|---|
| **Announcement** | Company announces restructuring | Stock may drop on uncertainty |
| **Execution** | Costs cut, assets sold | improving margins |
| **Recovery** | New strategy takes effect | Stock re-rates higher |

---

### Scenario-Based Valuation

Instead of a single estimate, create scenarios:

| Scenario | Probability | Revenue Growth | Margin | Terminal Multiple | Value/Share |
|---|---|---|---|---|---|
| **Bull Case** | 25% | 20% | 30% | 25x | $65.00 |
| **Base Case** | 50% | 12% | 25% | 18x | $42.00 |
| **Bear Case** | 25% | 5% | 20% | 12x | $22.00 |
| **Expected Value** | — | — | — | — | **$42.75** |

**Expected Value Calculation:**
$65.00 × 0.25 + $42.00 × 0.50 + $22.00 × 0.25 = $42.75

---

### Real Options Valuation

Some companies have valuable options that traditional valuation misses:

| Option Type | Example | Value |
|---|---|---|
| **Growth Option** | Entering new market | High if market is large |
| **Abandonment Option** | Selling unprofitable division | Cost savings |
| **Flexibility Option** | Switching suppliers | Risk reduction |
| **R&D Pipeline** | Drug development | Binary outcomes |

> **Key insight:** Traditional DCF undervalues companies with valuable growth options because it doesn't capture the "optionality" of future opportunities.

---

### Putting It All Together: The Valuation Toolkit

| Method | Best For | Weakness |
|---|---|---|
| **DCF** | Cash-generating companies | Sensitive to assumptions |
| **Relative Valuation** | Comparing peers | Requires good comps |
| **SOTP** | Conglomerates | Complex |
| **Scenario Analysis** | Uncertain companies | Subjective probabilities |
| **Real Options** | High-growth, R&D-heavy | Difficult to quantify |

**The Professional Approach:**
1. Start with DCF as the primary valuation
2. Use relative valuation as a sanity check
3. Apply SOTP if the company has distinct segments
4. Create bull/base/bear scenarios
5. Calculate expected value weighted by probability
6. Apply margin of safety (20-30%)

---

### Common Special Situation Mistakes

- **Mistake:** Ignoring spin-offs — **Fix:** Spin-offs historically outperform by 10-15% in the first year.
- **Mistake:** Overpaying for conglomerates — **Fix:** Apply conglomerate discount to SOTP value.
- **Mistake:** Using wrong multiples for segments — **Fix:** Each segment deserves its own industry-appropriate multiple.
- **Mistake:** Not accounting for corporate overhead — **Fix:** Deduct holding company costs from SOTP.
- **Mistake:** Ignoring optionality — **Fix:** Consider real options for growth companies.

### Professional Tips & Tricks

- Spin-offs are one of the most reliable sources of alpha — track them carefully.
- When doing SOTP, always ask: "What multiple would a private equity firm pay for each segment?"
- Scenario analysis is more honest than point estimates — show your range.
- Real options are most valuable for companies with large TAM and proven product-market fit.

---

### Key Takeaways

- SOTP values each business segment separately using appropriate multiples.
- Conglomerate discounts of 10-30% are common — potential opportunity if they narrow.
- Spin-offs historically outperform due to forced selling and improved focus.
- Scenario-based valuation provides a range, not a single point.
- Real options capture value that traditional DCF misses.
- Use multiple valuation methods and triangulate for the best estimate.

## 🎓 Module 7 Complete

You now have a professional-grade valuation toolkit: DCF, relative valuation, SOTP, scenario analysis, and special situations. You can determine what stocks are truly worth.`,
      codeLanguage: "text",
      codeSnippet: `# Special Situations & SOTP Toolkit

## SOTP Valuation Template

Segment        | Revenue | EBITDA | Multiple | Value
---------------|---------|--------|----------|--------
Business A     | $500M   | $150M  | 20x      | $3,000M
Business B     | $300M   | $45M   | 8x       | $360M
Business C     | $200M   | $30M   | 10x      | $300M
Total          | $1,000M | $225M  | —        | $3,660M

(-) Debt: -$500M
(-) Overhead (10%): -$366M
(+) Cash: +$200M
= Equity Value: $2,994M
÷ Shares: 100M
= Value/Share: $29.94

## Spin-Off Analysis Checklist

□ Is the spin-off forced by index funds?
□ Will the new company have dedicated analysts?
□ Is there a conglomerate discount to unlock?
□ Is management more focused post-spin?
□ What is the historical spin-off outperformance?

## Scenario-Based Valuation

Scenario    | Probability | Value/Share | Weighted
------------|-------------|-------------|----------
Bull Case   | 25%         | $65.00      | $16.25
Base Case   | 50%         | $42.00      | $21.00
Bear Case   | 25%         | $22.00      | $5.50
Expected Value              |             | $42.75

Margin of Safety (25%): $42.75 × 0.75 = $32.06
Buy below: $32.06

## Valuation Method Selection Guide

Company Type          | Primary Method | Secondary
----------------------|----------------|----------
Mature Cash Cow       | DCF            | P/E Comps
High-Growth Tech      | EV/Revenue     | DCF (long horizon)
Conglomerate          | SOTP           | Sum of DCFs
Turnaround            | Scenario       | Asset Value
Pre-Profit Startup    | EV/Revenue     | Real Options
Bank/Financial        | P/B            | P/E Comps
REIT                  | P/FFO          | Dividend Yield`,
      codeOutput: `# Special Situations & SOTP Toolkit

## SOTP Valuation Template

Segment        | Revenue | EBITDA | Multiple | Value
---------------|---------|--------|----------|--------
Business A     | $500M   | $150M  | 20x      | $3,000M
Business B     | $300M   | $45M   | 8x       | $360M
Business C     | $200M   | $30M   | 10x      | $300M
Total          | $1,000M | $225M  | —        | $3,660M

(-) Debt: -$500M
(-) Overhead (10%): -$366M
(+) Cash: +$200M
= Equity Value: $2,994M
÷ Shares: 100M
= Value/Share: $29.94

## Spin-Off Analysis Checklist

□ Is the spin-off forced by index funds?
□ Will the new company have dedicated analysts?
□ Is there a conglomerate discount to unlock?
□ Is management more focused post-spin?
□ What is the historical spin-off outperformance?

## Scenario-Based Valuation

Scenario    | Probability | Value/Share | Weighted
------------|-------------|-------------|----------
Bull Case   | 25%         | $65.00      | $16.25
Base Case   | 50%         | $42.00      | $21.00
Bear Case   | 25%         | $22.00      | $5.50
Expected Value              |             | $42.75

Margin of Safety (25%): $42.75 × 0.75 = $32.06
Buy below: $32.06

## Valuation Method Selection Guide

Company Type          | Primary Method | Secondary
----------------------|----------------|----------
Mature Cash Cow       | DCF            | P/E Comps
High-Growth Tech      | EV/Revenue     | DCF (long horizon)
Conglomerate          | SOTP           | Sum of DCFs
Turnaround            | Scenario       | Asset Value
Pre-Profit Startup    | EV/Revenue     | Real Options
Bank/Financial        | P/B            | P/E Comps
REIT                  | P/FFO          | Dividend Yield`,
      visualizationTips: [
        "Create a waterfall chart showing SOTP value build-up from each segment.",
        "Build a scenario tornado diagram showing how bull/bear cases affect valuation.",
        "Plot the historical outperformance of spin-offs vs. the S&P 500."
      ],
      tipsAndTricks: [
        "Spin-offs are one of the most reliable alpha sources — track them carefully.",
        "When doing SOTP, ask: what would a PE firm pay for each segment?",
        "Scenario analysis is more honest than point estimates — always show your range.",
        "Real options are most valuable for companies with large TAM and proven product-market fit."
      ],
      practice: [
        {
          id: "practice-sotp",
          title: "Sum-of-Parts Valuation",
          difficulty: "Hard",
          task: "Company ABC has three divisions: Tech (revenue $1B, EBITDA $300M), Retail (revenue $500M, EBITDA $50M), and Real Estate (book value $800M). Using Tech at 20x EV/EBITDA, Retail at 8x EV/EBITDA, and Real Estate at 1.2x book value, calculate the SOTP equity value. Debt: $400M, Cash: $100M, Shares: 50M.",
          hint: "Value each segment separately, then bridge from enterprise to equity value.",
          solution: `SOTP Valuation for Company ABC:

Segment Values:
Tech: $300M EBITDA × 20x = $6,000M
Retail: $50M EBITDA × 8x = $400M
Real Estate: $800M book × 1.2x = $960M

Total Enterprise Value: $7,360M

Bridge to Equity:
Enterprise Value: $7,360M
(-) Debt: -$400M
(+) Cash: +$100M
= Equity Value: $7,060M

Value Per Share: $7,060M ÷ 50M = $141.20

If current price is $110:
Upside: 28%
Margin of Safety at 25%: $105.90

Assessment: Stock is undervalued by ~28%. The real estate segment ($960M) may be hidden value not reflected in the stock price. Consider if the market is applying a conglomerate discount.`
        },
        {
          id: "practice-scenario-valuation",
          title: "Scenario-Based Valuation",
          difficulty: "Medium",
          task: "For a biotech company with one drug in Phase 3 trials, create bull, base, and bear scenarios. Assume: 30% chance of approval, 50% chance of limited approval, 20% chance of rejection. Revenue potential: $2B (full), $500M (limited), $0 (rejection). Use a 15x EV/Revenue multiple.",
          hint: "Calculate the expected value using probability-weighted outcomes.",
          solution: `Biotech Scenario Valuation:

Bull Case (Full Approval - 30%):
Revenue: $2B
EV/Revenue: 15x
Enterprise Value: $30B
Equity Value: $28B (after $2B debt)
Per share (100M shares): $280

Base Case (Limited Approval - 50%):
Revenue: $500M
EV/Revenue: 15x
Enterprise Value: $7.5B
Equity Value: $5.5B
Per share: $55

Bear Case (Rejection - 20%):
Revenue: $0
Enterprise Value: $500M (cash remaining)
Equity Value: $3B (remaining pipeline)
Per share: $30

Expected Value:
$280 × 0.30 + $55 × 0.50 + $30 × 0.20
= $84 + $27.50 + $6.00
= $117.50 per share

If current price is $80:
Expected upside: 47%
Buy below expected value minus 20% margin: $94

Key: This is a high-variance investment. The expected value is attractive, but outcomes are binary. Position sizing should reflect the risk.`
        }
      ]
    }
  ],
};
