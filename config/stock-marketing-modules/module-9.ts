import type { Module } from "../courses";

export const MODULE_9: Module = {
  id: "module-9-sector-analysis",
  title: "Module 9: Sector & Industry Deep-Dive Analysis",
  description:
    "Master sector analysis, industry lifecycle stages, competitive moats, and sector rotation strategies to identify the best industries and companies for investment.",
  lessons: [
    {
      id: "sector-fundamentals",
      title: "Lesson 1: Sector Analysis — Understanding Industry Dynamics",
      shortDescription:
        "Learn how to analyze sectors and industries, understand competitive forces, and identify which sectors offer the best investment opportunities at different economic stages.",
      duration: "55 mins",
      readingTime: "11 mins read",
      contentMarkdown: `### Why Sector Analysis Matters

The S&P 500 isn't one market — it's 11 different sector markets, each with its own dynamics, cycles, and drivers. Understanding sectors helps you allocate capital more effectively.

> **Mental model:** Think of sectors like different sports teams — each has its own rules, strengths, and weaknesses. You wouldn't judge a basketball team by soccer standards. Similarly, you shouldn't compare a utility company to a tech company.

---

### The 11 GICS Sectors

| Sector | Weight in S&P 500 | Characteristics | Best Economic Phase |
|---|---|---|---|
| **Technology** | ~30% | High growth, volatile | Early-Mid Cycle |
| **Healthcare** | ~13% | Defensive, stable demand | All phases |
| **Financials** | ~13% | Interest rate sensitive | Mid-Late Cycle |
| **Consumer Discretionary** | ~10% | Cyclical, spending-driven | Mid Cycle |
| **Communication Services** | ~9% | Mixed (growth + value) | Mid Cycle |
| **Industrials** | ~8% | Cyclical, economic-sensitive | Mid Cycle |
| **Consumer Staples** | ~6% | Defensive, recession-resistant | Late Cycle/Recession |
| **Energy** | ~4% | Commodity-driven, volatile | Late Cycle |
| **Utilities** | ~2% | Defensive, income-focused | Late Cycle/Recession |
| **Real Estate** | ~2% | Interest rate sensitive | Early-Mid Cycle |
| **Materials** | ~2% | Cyclical, commodity-linked | Early-Mid Cycle |

---

### Porter's Five Forces for Sector Analysis

| Force | Question | High Force = Lower Profits |
|---|---|---|
| **Rivalry** | How intense is competition? | Many competitors, low differentiation |
| **New Entrants** | How easy is it to enter? | Low barriers, low capital requirements |
| **Substitutes** | Can customers switch easily? | Many alternatives available |
| **Buyer Power** | Can customers negotiate prices? | Few buyers, standardized products |
| **Supplier Power** | Can suppliers raise prices? | Few suppliers, unique inputs |

#### Sector Example: Technology

| Force | Level | Why |
|---|---|---|
| Rivalry | Medium | Few dominant players (Apple, Google, Microsoft) |
| New Entrants | Medium | Low capital but high network effects |
| Substitutes | Low | Tech products are becoming essential |
| Buyer Power | Low | Consumers have few alternatives for OS/cloud |
| Supplier Power | Low | Tech companies are often the suppliers |

**Result:** Technology has high profitability due to favorable Five Forces.

#### Sector Example: Airlines

| Force | Level | Why |
|---|---|---|
| Rivalry | Very High | Many competitors, price wars |
| New Entrants | Medium | Capital intensive but possible |
| Substitutes | High | Cars, trains, video conferencing |
| Buyer Power | High | Customers choose on price |
| Supplier Power | High | Boeing/Airbus duopoly, fuel costs |

**Result:** Airlines have low profitability due to unfavorable Five Forces.

---

### Industry Lifecycle Stages

| Stage | Characteristics | Investment Strategy | Examples |
|---|---|---|---|
| **Emerging** | New technology, high growth, unproven model | High risk, venture-like | AI, quantum computing |
| **Growth** | Rapid revenue growth, market share gains | Growth stocks, high P/E | Cloud computing, EVs |
| **Mature** | Slower growth, stable margins, dividends | Value stocks, dividend income | Banking, utilities |
| **Declining** | Shrinking market, commoditization | Avoid or short | Print media, tobacco |

> **Key insight:** Companies in the Growth stage typically outperform, but the best time to buy is the transition from Emerging to Growth — when the business model is proven but the stock hasn't fully priced it in.

---

### Sector Correlation Matrix

Understanding how sectors move relative to each other:

| Sector | Tech | Healthcare | Financials | Energy | Staples | Utilities |
|---|---|---|---|---|---|---|
| **Technology** | 1.0 | 0.5 | 0.6 | 0.2 | 0.3 | 0.2 |
| **Healthcare** | 0.5 | 1.0 | 0.5 | 0.3 | 0.6 | 0.5 |
| **Financials** | 0.6 | 0.5 | 1.0 | 0.5 | 0.4 | 0.3 |
| **Energy** | 0.2 | 0.3 | 0.5 | 1.0 | 0.3 | 0.2 |
| **Staples** | 0.3 | 0.6 | 0.4 | 0.3 | 1.0 | 0.7 |
| **Utilities** | 0.2 | 0.5 | 0.3 | 0.2 | 0.7 | 1.0 |

**Key takeaways:**
- Tech and Energy are nearly uncorrelated (0.2) — great diversification pair
- Staples and Utilities are highly correlated (0.7) — both defensive
- Healthcare provides moderate correlation with most sectors

---

### Sector Performance by Economic Cycle

| Economic Phase | Best Sectors | Worst Sectors |
|---|---|---|
| **Early Recovery** | Consumer Discretionary, Technology, Industrials | Energy, Utilities |
| **Mid-Cycle Expansion** | Technology, Industrials, Materials | Utilities, Consumer Staples |
| **Late Cycle** | Energy, Healthcare, Consumer Staples | Technology, Real Estate |
| **Recession** | Consumer Staples, Healthcare, Utilities | Consumer Discretionary, Financials |

---

### Sector Valuation Benchmarks

| Sector | Typical P/E Range | Typical Dividend Yield | Typical Growth Rate |
|---|---|---|---|
| **Technology** | 20-35x | 0.5-1.5% | 10-20% |
| **Healthcare** | 18-28x | 1.5-2.5% | 5-12% |
| **Financials** | 10-18x | 2-4% | 5-10% |
| **Consumer Discretionary** | 15-25x | 1-2% | 5-15% |
| **Consumer Staples** | 18-25x | 2.5-3.5% | 3-6% |
| **Industrials** | 15-22x | 1.5-2.5% | 4-8% |
| **Energy** | 8-15x | 3-5% | Cyclical |
| **Utilities** | 14-20x | 3-4% | 2-4% |

---

### Common Sector Analysis Mistakes

- **Mistake:** Over-allocating to the best-performing sector — **Fix:** Past performance doesn't guarantee future results; rotate based on economic cycle.
- **Mistake:** Ignoring sector correlations — **Fix:** Diversify across uncorrelated sectors.
- **Mistake:** Comparing valuations across sectors — **Fix:** Compare within sectors, not across.
- **Mistake:** Ignoring the economic cycle — **Fix:** Adjust sector allocation based on where we are in the cycle.
- **Mistake:** Concentrating in one sector — **Fix:** No single sector should exceed 25% of portfolio.

### Professional Tips & Tricks

- Use sector ETFs (XLK, XLF, XLE) for quick sector exposure without picking individual stocks.
- Monitor sector fund flows — money flowing in/out signals institutional sentiment.
- The best sector to buy is often the one everyone hates — contrarian sector rotation works.
- When in doubt, diversify equally across sectors — it's not optimal but avoids big mistakes.

---

### Key Takeaways

- Sectors have different characteristics, cycles, and correlations.
- Porter's Five Forces helps assess sector profitability.
- Industry lifecycle stages determine the right investment strategy.
- Sector allocation should shift with the economic cycle.
- Diversify across uncorrelated sectors for better risk-adjusted returns.
- Compare valuations within sectors, not across them.

**Next up:** Competitive moats — how to identify companies with durable advantages.`,
      codeLanguage: "text",
      codeSnippet: `# Sector Analysis Framework

## 11 GICS Sectors Overview

Sector          | S&P Weight | P/E Range | Yield | Best Phase
----------------|------------|-----------|-------|----------
Technology      | 30%        | 20-35x    | 1%    | Early-Mid
Healthcare      | 13%        | 18-28x    | 2%    | All phases
Financials      | 13%        | 10-18x    | 3%    | Mid-Late
Cons Discr      | 10%        | 15-25x    | 1.5%  | Mid Cycle
Com Services    | 9%         | 15-25x    | 1%    | Mid Cycle
Industrials     | 8%         | 15-22x    | 2%    | Mid Cycle
Cons Staples    | 6%         | 18-25x    | 3%    | Late/Recession
Energy          | 4%         | 8-15x     | 4%    | Late Cycle
Utilities       | 2%         | 14-20x    | 3.5%  | Late/Recession
Real Estate     | 2%         | 25-40x    | 3%    | Early-Mid
Materials       | 2%         | 12-20x    | 2%    | Early-Mid

## Porter's Five Forces Quick Score

Industry        | Rivalry | Entrants | Substitutes | Buyer | Supplier | Overall
----------------|---------|----------|-------------|-------|----------|--------
Technology      | Med     | Med      | Low         | Low   | Low      | HIGH PROFIT
Healthcare      | Med     | High     | Low         | Med   | Med      | MED-HIGH
Airlines        | V.High  | Med      | High        | High  | High     | LOW PROFIT
Banking         | High    | Med      | Med         | High  | Low      | MED-LOW
Pharma          | High    | High     | Low         | Med   | Low      | MED-HIGH

## Economic Cycle Sector Rotation

Phase          | Overweight              | Underweight
---------------|-------------------------|-------------------------
Early Recovery | Cons Discr, Tech, Indust| Energy, Utilities
Mid-Cycle      | Tech, Indust, Materials | Utilities, Staples
Late Cycle     | Energy, Healthcare, Stpl| Tech, Real Estate
Recession      | Staples, Healthcare, Utl| Cons Discr, Financials

## Correlation Matrix (Simplified)

        Tech  Health  Fin   Energy  Staples
Tech    1.0   0.5     0.6   0.2     0.3
Health  0.5   1.0     0.5   0.3     0.6
Fin     0.6   0.5     1.0   0.5     0.4
Energy  0.2   0.3     0.5   1.0     0.3
Staples 0.3   0.6     0.4   0.3     1.0

Best diversification pairs:
- Tech + Energy (0.2 correlation)
- Tech + Utilities (0.2 correlation)
- Energy + Staples (0.3 correlation)`,
      codeOutput: `# Sector Analysis Framework

## 11 GICS Sectors Overview

Sector          | S&P Weight | P/E Range | Yield | Best Phase
----------------|------------|-----------|-------|----------
Technology      | 30%        | 20-35x    | 1%    | Early-Mid
Healthcare      | 13%        | 18-28x    | 2%    | All phases
Financials      | 13%        | 10-18x    | 3%    | Mid-Late
Cons Discr      | 10%        | 15-25x    | 1.5%  | Mid Cycle
Com Services    | 9%         | 15-25x    | 1%    | Mid Cycle
Industrials     | 8%         | 15-22x    | 2%    | Mid Cycle
Cons Staples    | 6%         | 18-25x    | 3%    | Late/Recession
Energy          | 4%         | 8-15x     | 4%    | Late Cycle
Utilities       | 2%         | 14-20x    | 3.5%  | Late/Recession
Real Estate     | 2%         | 25-40x    | 3%    | Early-Mid
Materials       | 2%         | 12-20x    | 2%    | Early-Mid

## Porter's Five Forces Quick Score

Industry        | Rivalry | Entrants | Substitutes | Buyer | Supplier | Overall
----------------|---------|----------|-------------|-------|----------|--------
Technology      | Med     | Med      | Low         | Low   | Low      | HIGH PROFIT
Healthcare      | Med     | High     | Low         | Med   | Med      | MED-HIGH
Airlines        | V.High  | Med      | High        | High  | High     | LOW PROFIT
Banking         | High    | Med      | Med         | High  | Low      | MED-LOW
Pharma          | High    | High     | Low         | Med   | Low      | MED-HIGH

## Economic Cycle Sector Rotation

Phase          | Overweight              | Underweight
---------------|-------------------------|-------------------------
Early Recovery | Cons Discr, Tech, Indust| Energy, Utilities
Mid-Cycle      | Tech, Indust, Materials | Utilities, Staples
Late Cycle     | Energy, Healthcare, Stpl| Tech, Real Estate
Recession      | Staples, Healthcare, Utl| Cons Discr, Financials

## Correlation Matrix (Simplified)

        Tech  Health  Fin   Energy  Staples
Tech    1.0   0.5     0.6   0.2     0.3
Health  0.5   1.0     0.5   0.3     0.6
Fin     0.6   0.5     1.0   0.5     0.4
Energy  0.2   0.3     0.5   1.0     0.3
Staples 0.3   0.6     0.4   0.3     1.0

Best diversification pairs:
- Tech + Energy (0.2 correlation)
- Tech + Utilities (0.2 correlation)
- Energy + Staples (0.3 correlation)`,
      visualizationTips: [
        "Create a sector rotation wheel showing which sectors lead at each economic phase.",
        "Build a heatmap of sector correlations for diversification planning.",
        "Plot the 10-year performance of each sector to see cyclical patterns."
      ],
      tipsAndTricks: [
        "The best sector to buy is often the one everyone hates — contrarian rotation works.",
        "Use sector ETFs (XLK, XLF, XLE) for quick sector exposure.",
        "Monitor sector fund flows — institutional money signals sentiment.",
        "No single sector should exceed 25% of your portfolio."
      ],
      practice: [
        {
          id: "practice-sector-analysis",
          title: "Sector Analysis Exercise",
          difficulty: "Medium",
          task: "Apply Porter's Five Forces to the cloud computing industry (AWS, Azure, Google Cloud). Rate each force as Low/Medium/High and determine the overall profitability potential.",
          hint: "Consider the competitive landscape, switching costs, and barriers to entry.",
          solution: `Porter's Five Forces — Cloud Computing:

Rivalry: MEDIUM
- 3 dominant players (AWS, Azure, GCP) plus Oracle, IBM
- Competition is on features, not just price
- High switching costs reduce price competition

New Entrants: LOW (High Barriers)
- Massive capital requirements ($10B+ for data centers)
- Network effects and scale advantages
- Brand trust and enterprise relationships

Substitutes: LOW
- On-premise computing is declining
- No viable alternative to cloud for most workloads
- Increasingly essential infrastructure

Buyer Power: MEDIUM
- Large enterprises can negotiate
- But switching costs are very high
- Multi-cloud strategies give some leverage

Supplier Power: LOW
- Cloud companies design their own chips
- Multiple chip suppliers (Intel, AMD, NVIDIA)
- Cloud providers have massive purchasing power

OVERALL PROFITABILITY: HIGH
Cloud computing has favorable Five Forces — few competitors, high barriers, low substitutes, and essential nature. This explains the high margins (30%+) for AWS and Azure.`
        },
        {
          id: "practice-sector-rotation",
          title: "Sector Rotation Strategy",
          difficulty: "Easy",
          task: "We're currently in mid-2024 with slowing inflation, stable employment, and the Fed considering rate cuts. Which phase of the economic cycle are we in? Which sectors should you overweight and underweight?",
          hint: "Consider the current macro environment and match it to the economic cycle phases.",
          solution: `Economic Phase Assessment (Mid-2024):

Current Conditions:
- Inflation: Declining from peaks
- Employment: Strong but slowing
- Fed: Considering rate cuts
- GDP: Moderate growth
- Yield curve: Normalizing

Assessment: Late Mid-Cycle transitioning to Late Cycle

Recommended Sector Allocation:

OVERWEIGHT:
1. Healthcare (15%): Defensive + growth, benefits from aging population
2. Technology (25%): AI tailwind continues, but trim from peak allocation
3. Consumer Staples (10%): Increasing defensive allocation
4. Industrials (10%): Infrastructure spending tailwind

NEUTRAL:
5. Financials (12%): Rate cuts mixed impact
6. Communication Services (8%): Stable
7. Real Estate (3%): Rate cuts beneficial

UNDERWEIGHT:
8. Energy (3%): Late cycle headwinds, oil prices uncertain
9. Materials (2%): Economic slowdown risk
10. Consumer Discretionary (8%): Consumer spending slowing
11. Utilities (4%): Rate cuts help, but growth limited

Rationale: Position for slower growth with defensive tilt while maintaining tech exposure for AI growth.`
        }
      ]
    },
    {
      id: "competitive-moats",
      title: "Lesson 2: Competitive Moats — Identifying Durable Advantages",
      shortDescription:
        "Learn how to identify companies with sustainable competitive advantages (moats) that protect profits and drive long-term stock returns.",
      duration: "55 mins",
      readingTime: "11 mins read",
      contentMarkdown: `### What Is a Competitive Moat?

A competitive moat is a durable advantage that protects a company's profits from competitors. Companies with wide moats can maintain high returns on capital for decades.

> **Mental model:** A moat is like a castle's defense — the wider and deeper it is, the harder it is for attackers (competitors) to storm the castle and steal the treasure (profits).

---

### The Five Types of Moats

#### 1. Network Effects

The value of the product increases as more people use it.

| Company | Network Effect | Moat Width |
|---|---|---|
| **Meta (Facebook/Instagram)** | More users → more content → more users | Very Wide |
| **Visa/Mastercard** | More merchants → more users → more merchants | Very Wide |
| **Microsoft (Windows)** | More developers → more apps → more users | Wide |
| **Uber** | More drivers → shorter wait times → more riders | Medium |

> **Key insight:** Network effects are the most powerful moat because they create a self-reinforcing cycle that's nearly impossible to break.

#### 2. Cost Advantages

The ability to produce at lower cost than competitors.

| Type | Example | How It Works |
|---|---|---|
| **Economies of Scale** | Walmart, Amazon | Volume reduces per-unit cost |
| **Process Advantage** | Toyota (lean manufacturing) | Better processes = lower costs |
| **Location Advantage** | Cement companies | Proximity to customers reduces transport cost |
| **Access to Cheap Capital** | Berkshire Hathaway | Float from insurance funds investments |

#### 3. Intangible Assets

Assets that can't be physically touched but provide competitive advantage.

| Asset Type | Example | Protection |
|---|---|---|
| **Brand** | Apple, Coca-Cola, Nike | Customers pay premium for brand |
| **Patents** | Pharmaceutical companies | Legal monopoly for 20 years |
| **Regulatory Licenses** | Banks, utilities | Government restricts competition |
| **Switching Costs** | Salesforce, SAP | Too expensive to switch |

#### 4. Switching Costs

The cost (time, money, or effort) for customers to switch to a competitor.

| Switching Cost | Example | Strength |
|---|---|---|
| **Data Lock-in** | Salesforce, HubSpot | All customer data is in the system |
| **Training** | Microsoft Office | Users know the interface |
| **Integration** | SAP, Oracle | Deeply embedded in operations |
| **Contractual** | Cell phone carriers | Early termination fees |
| **Habitual** | Google Search | Muscle memory, trust |

#### 5. Efficient Scale

A market that's naturally limited in size, supporting only a few profitable competitors.

| Market | Why Efficient Scale Works |
|---|---|
| **Local utilities** | Only one provider can be profitable |
| **Regional railroads** | Duplicate tracks aren't economical |
| **Toll bridges** | Only one bridge needed per crossing |
| **Airport concessions** | Limited space, one winner |

---

### Moat Assessment Framework

| Moat Type | Width | Durability | Examples |
|---|---|---|---|
| Network Effects | Very Wide | Very High | Meta, Visa, Microsoft |
| Cost Advantages | Wide | High | Walmart, Amazon, Costco |
| Intangible Assets | Wide | High (patents) to Very High (brand) | Apple, Pfizer, Coca-Cola |
| Switching Costs | Wide | High | Salesforce, SAP, Oracle |
| Efficient Scale | Medium | Medium | Utilities, railroads |

---

### How to Identify Moats in Practice

#### The Morningstar Moat Framework

| Moat Rating | Return on Capital | Durability | Investment Approach |
|---|---|---|---|
| **Wide Moat** | > 15% ROIC for 10+ years | 20+ years | Buy at fair value, hold long-term |
| **Narrow Moat** | 10-15% ROIC for 5+ years | 10-20 years | Buy at discount, monitor closely |
| **No Moat** | < 10% ROIC or declining | < 10 years | Avoid or trade tactically |

#### The Moat Checklist

| Question | Yes = Moat | No = No Moat |
|---|---|---|
| Can competitors easily replicate the product? | No | Yes |
| Does the company have pricing power? | Yes | No |
| Are returns on capital consistently above cost of capital? | Yes | No |
| Do customers face high switching costs? | Yes | No |
| Does the company benefit from network effects? | Yes | No |
| Does the brand command a premium? | Yes | No |

---

### Moat Erosion — When Moats Disrupt

Moats don't last forever. Technology and competition can erode them:

| Eroded Moat | What Happened | Lesson |
|---|---|---|
| **Kodak** | Digital photography replaced film | Technology disruption |
| **Nokia** | Smartphone revolution | Failed to adapt |
| **BlackBerry** | iPhone killed keyboard phones | Innovation speed |
| **Blockbuster** | Netflix streaming replaced rentals | Business model disruption |
| **Newspapers** | Internet destroyed classified ads | Digital transformation |

> **Key insight:** The best moat is one that adapts to change. Apple evolved from computers to phones to services — constantly renewing its moat.

---

### Common Moat Analysis Mistakes

- **Mistake:** Confusing temporary advantages with moats — **Fix:** A moat must be durable for 10+ years.
- **Mistake:** Ignoring moat erosion — **Fix:** Monitor competitive threats and technology changes.
- **Mistake:** Paying any price for wide-moat companies — **Fix:** Even great companies can be overpriced.
- **Mistake:** Assuming past moats last forever — **Fix:** Reassess moat durability quarterly.
- **Mistake:** Ignoring management quality — **Fix:** Bad management can destroy any moat.

### Professional Tips & Tricks

- Wide-moat companies are the foundation of long-term portfolios — own them forever.
- Look for companies that have maintained high ROIC for 10+ years — it signals a durable moat.
- Pay attention to pricing power — can the company raise prices without losing customers?
- The best time to buy wide-moat companies is during temporary setbacks that don't affect the moat.

---

### Key Takeaways

- Competitive moats protect profits and drive long-term stock returns.
- The five moat types: network effects, cost advantages, intangible assets, switching costs, and efficient scale.
- Wide-moat companies should be the core of your portfolio.
- Moats can erode — monitor for disruption and adapt.
- ROIC above 15% for 10+ years signals a wide moat.
- Even wide-moat companies can be overpriced — valuation still matters.

**Next up:** Sector rotation strategies and building a sector-optimized portfolio.`,
      codeLanguage: "text",
      codeSnippet: `# Competitive Moat Analysis Toolkit

## Five Moat Types

Moat Type         | Width   | Durability | Best Examples
------------------|---------|------------|---------------
Network Effects   | V. Wide | V. High    | Meta, Visa, MSFT
Cost Advantages   | Wide    | High       | Walmart, Amazon
Intangible Assets | Wide    | High       | Apple, Pfizer
Switching Costs   | Wide    | High       | Salesforce, SAP
Efficient Scale   | Medium  | Medium     | Utilities, Railroads

## Moat Assessment Checklist

□ Can competitors easily replicate the product?
□ Does the company have pricing power?
□ Are returns on capital consistently > 15%?
□ Do customers face high switching costs?
□ Does the company benefit from network effects?
□ Does the brand command a premium?
□ Has the moat lasted 10+ years?

Score: ___/7
6-7: Wide Moat ✓✓
4-5: Narrow Moat ✓
0-3: No Moat ✗

## ROIC Analysis

Company    | ROIC 10Y Avg | ROIC Trend | Moat Signal
-----------|--------------|------------|------------
Apple      | 45%          | Stable     | Wide Moat
Microsoft  | 25%          | Growing    | Wide Moat
Amazon     | 12%          | Growing    | Narrow → Wide
Walmart    | 15%          | Stable     | Wide Moat
Coca-Cola  | 20%          | Stable     | Wide Moat

## Moat Erosion Warning Signs

□ New technology disrupting the business model
□ Market share declining for 3+ consecutive years
□ Pricing power weakening (can't raise prices)
□ ROIC declining toward cost of capital
□ New competitors gaining traction
□ Customer switching costs decreasing`,
      codeOutput: `# Competitive Moat Analysis Toolkit

## Five Moat Types

Moat Type         | Width   | Durability | Best Examples
------------------|---------|------------|---------------
Network Effects   | V. Wide | V. High    | Meta, Visa, MSFT
Cost Advantages   | Wide    | High       | Walmart, Amazon
Intangible Assets | Wide    | High       | Apple, Pfizer
Switching Costs   | Wide    | High       | Salesforce, SAP
Efficient Scale   | Medium  | Medium     | Utilities, Railroads

## Moat Assessment Checklist

□ Can competitors easily replicate the product?
□ Does the company have pricing power?
□ Are returns on capital consistently > 15%?
□ Do customers face high switching costs?
□ Does the company benefit from network effects?
□ Does the brand command a premium?
□ Has the moat lasted 10+ years?

Score: ___/7
6-7: Wide Moat ✓✓
4-5: Narrow Moat ✓
0-3: No Moat ✗

## ROIC Analysis

Company    | ROIC 10Y Avg | ROIC Trend | Moat Signal
-----------|--------------|------------|------------
Apple      | 45%          | Stable     | Wide Moat
Microsoft  | 25%          | Growing    | Wide Moat
Amazon     | 12%          | Growing    | Narrow → Wide
Walmart    | 15%          | Stable     | Wide Moat
Coca-Cola  | 20%          | Stable     | Wide Moat

## Moat Erosion Warning Signs

□ New technology disrupting the business model
□ Market share declining for 3+ consecutive years
□ Pricing power weakening (can't raise prices)
□ ROIC declining toward cost of capital
□ New competitors gaining traction
□ Customer switching costs decreasing`,
      visualizationTips: [
        "Create a radar chart comparing moat strength across 5 dimensions for different companies.",
        "Plot ROIC trends over 10 years to identify moat durability.",
        "Build a moat erosion timeline showing how disruption affected past leaders."
      ],
      tipsAndTricks: [
        "Wide-moat companies should be the core of your portfolio — own them forever.",
        "Look for 10+ years of ROIC above 15% — it signals a durable moat.",
        "Pricing power is the ultimate moat test — can they raise prices without losing customers?",
        "Buy wide-moat companies during temporary setbacks that don't affect the moat."
      ],
      practice: [
        {
          id: "practice-moat-analysis",
          title: "Moat Analysis Exercise",
          difficulty: "Medium",
          task: "Analyze the competitive moat of Amazon (AMZN). Identify which of the five moat types apply, rate the moat width, and assess the durability of each moat component.",
          hint: "Consider Amazon's network effects, cost advantages, switching costs, and brand.",
          solution: `Amazon (AMZN) Moat Analysis:

MOAT TYPE 1: Network Effects (Marketplace)
- More sellers → more products → more buyers → more sellers
- Amazon Marketplace has critical mass
- Third-party sellers depend on Amazon for 50%+ of revenue
- Width: VERY WIDE
- Durability: 20+ years

MOAT TYPE 2: Cost Advantages (AWS + Logistics)
- AWS: Scale advantages from massive data center investment
- Logistics: $100B+ invested in delivery network
- Per-unit cost decreases with volume
- Width: WIDE
- Durability: 15-20 years

MOAT TYPE 3: Intangible Assets (Prime Brand)
- 200M+ Prime members globally
- Brand synonymous with convenience
- Prime Video, Music, Reading add stickiness
- Width: WIDE
- Durability: 10-15 years

MOAT TYPE 4: Switching Costs (AWS + Prime)
- AWS: Extremely expensive to migrate infrastructure
- Prime: Members increase spending to justify membership
- Width: WIDE (AWS) to MEDIUM (Prime)
- Durability: 10+ years

OVERALL MOAT RATING: VERY WIDE
ROIC: 15%+ and growing
Moat Erosion Risk: LOW — Amazon continues to invest and expand

Key Risk: Regulatory/antitrust could force structural changes.`
        },
        {
          id: "practice-moat-comparison",
          title: "Compare Moats of Two Companies",
          difficulty: "Easy",
          task: "Compare the competitive moats of Coca-Cola (KO) and PepsiCo (PEP). Which company has a wider moat and why?",
          hint: "Consider brand power, distribution, product portfolio, and pricing power.",
          solution: `Moat Comparison: Coca-Cola vs. PepsiCo

Coca-Cola (KO):
- Brand: #1 most recognized brand globally (very wide)
- Distribution: 200+ countries, 28M+ outlets
- Pricing Power: Can raise prices consistently
- Product Focus: Pure beverage play
- Moat Width: WIDE

PepsiCo (PEP):
- Brand: Strong but #2 to Coke in beverages
- Diversification: Beverages + snacks (Frito-Lay)
- Distribution: Similar global reach
- Pricing Power: Strong in both segments
- Moat Width: WIDE

Comparison:
Coca-Cola: Wider moat in beverages specifically
PepsiCo: Broader moat across beverages AND snacks

Assessment:
Coca-Cola has a wider moat in its core beverage business (brand #1 globally).
PepsiCo has a more diversified moat — if beverages decline, snacks provide protection.

For pure beverage exposure: Coca-Cola
For diversified consumer staples: PepsiCo

Both have wide moats suitable for long-term holding.`
        }
      ]
    },
    {
      id: "sector-portfolio-optimization",
      title: "Lesson 3: Building a Sector-Optimized Portfolio",
      shortDescription:
        "Design a portfolio that strategically allocates across sectors based on economic cycle, valuations, and your personal risk tolerance.",
      duration: "50 mins",
      readingTime: "10 mins read",
      contentMarkdown: `### Sector Allocation Strategy

The goal is to build a portfolio that captures sector-specific returns while managing concentration risk and adapting to economic conditions.

> **Mental model:** Think of sector allocation like asset allocation within stocks — different sectors are like different asset classes, each with unique risk/return characteristics.

---

### The Equal-Weight vs. Market-Weight Decision

| Approach | Allocation | Pros | Cons |
|---|---|---|---|
| **Market-Weight** | Follow S&P 500 weights | Simple, low cost | Overweights expensive sectors |
| **Equal-Weight** | Equal across sectors | Diversified, contrarian | Higher turnover |
| **Strategic Tilt** | Overweight cheap/strong sectors | Potentially higher returns | Requires active management |

#### Historical Performance Comparison

| Strategy | 10-Year Annual Return | Volatility | Sharpe Ratio |
|---|---|---|---|
| S&P 500 (Market-Weight) | 10.5% | 15% | 0.70 |
| Equal-Weight S&P 500 | 11.2% | 16% | 0.70 |
| Sector Rotation | 12.0% | 17% | 0.71 |

> **Key insight:** Equal-weight has slightly outperformed market-weight over long periods because it avoids overconcentration in expensive sectors.

---

### Building Your Sector Portfolio

#### Step 1: Start with a Base Allocation

| Sector | Target Range | Rationale |
|---|---|---|
| **Technology** | 20-30% | Growth engine, innovation |
| **Healthcare** | 10-15% | Defensive, aging demographics |
| **Financials** | 10-15% | Income, economic sensitivity |
| **Consumer Discretionary** | 8-12% | Cyclical growth |
| **Industrials** | 7-10% | Economic sensitivity |
| **Consumer Staples** | 5-8% | Defensive, income |
| **Energy** | 3-7% | Inflation hedge, income |
| **Utilities** | 2-5% | Defensive, income |
| **Real Estate** | 3-5% | Income, inflation |
| **Materials** | 2-4% | Commodity exposure |
| **Communication** | 5-8% | Mixed growth/value |

#### Step 2: Adjust Based on Economic Cycle

| Current Phase | Action | Rationale |
|---|---|---|
| **Early Recovery** | Overweight Tech, Cons Discr, Industrials | Cyclical recovery |
| **Mid-Cycle** | Overweight Tech, Materials, Industrials | Growth expansion |
| **Late Cycle** | Overweight Energy, Healthcare, Staples | Defensive rotation |
| **Recession** | Overweight Staples, Healthcare, Utilities | Flight to safety |

#### Step 3: Adjust Based on Valuation

| Valuation Signal | Action |
|---|---|
| **Sector P/E > 20% above historical average** | Underweight |
| **Sector P/E < 10% below historical average** | Overweight |
| **Sector dividend yield > historical average** | Overweight (income) |

---

### Sector ETF Building Blocks

| Sector | ETF | Expense Ratio | Holdings | Dividend Yield |
|---|---|---|---|---|
| **Technology** | XLK | 0.09% | 65 | 0.7% |
| **Healthcare** | XLV | 0.09% | 63 | 1.5% |
| **Financials** | XLF | 0.09% | 71 | 1.8% |
| **Cons Discretionary** | XLY | 0.09% | 56 | 0.9% |
| **Industrials** | XLI | 0.09% | 78 | 1.3% |
| **Cons Staples** | XLP | 0.09% | 38 | 2.5% |
| **Energy** | XLE | 0.09% | 23 | 3.5% |
| **Utilities** | XLU | 0.09% | 29 | 3.0% |
| **Real Estate** | XLRE | 0.09% | 31 | 3.2% |
| **Materials** | XLB | 0.09% | 28 | 1.8% |
| **Com Services** | XLC | 0.09% | 25 | 0.8% |

---

### Sample Sector Portfolios

#### Conservative Sector Portfolio

| Sector | Allocation | ETF | Yield |
|---|---|---|---|
| Technology | 20% | XLK | 0.14% |
| Healthcare | 15% | XLV | 0.23% |
| Consumer Staples | 15% | XLP | 0.38% |
| Financials | 12% | XLF | 0.22% |
| Utilities | 10% | XLU | 0.30% |
| Industrials | 10% | XLI | 0.13% |
| Real Estate | 8% | XLRE | 0.26% |
| Energy | 5% | XLE | 0.18% |
| Materials | 3% | XLB | 0.05% |
| Cons Discretionary | 2% | XLY | 0.02% |

**Total Yield: ~1.9%** | **Expected Return: 7-9%**

#### Aggressive Growth Sector Portfolio

| Sector | Allocation | ETF | Yield |
|---|---|---|---|
| Technology | 35% | XLK | 0.25% |
| Cons Discretionary | 15% | XLY | 0.14% |
| Healthcare | 12% | XLV | 0.18% |
| Communication | 10% | XLC | 0.08% |
| Industrials | 10% | XLI | 0.13% |
| Financials | 8% | XLF | 0.14% |
| Energy | 5% | XLE | 0.18% |
| Materials | 3% | XLB | 0.05% |
| Consumer Staples | 2% | XLP | 0.05% |

**Total Yield: ~1.2%** | **Expected Return: 9-12%**

---

### Sector Rebalancing Rules

| Rule | Trigger | Action |
|---|---|---|
| **Calendar** | Annually | Review sector weights vs. targets |
| **Drift** | >5% from target | Rebalance back to target |
| **Valuation** | Sector >20% above historical P/E | Trim to target |
| **Cycle Shift** | Economic phase changes | Adjust sector weights |

---

### Common Sector Portfolio Mistakes

- **Mistake:** Chasing last year's best sector — **Fix:** By the time a sector is hot, easy gains are gone.
- **Mistake:** Ignoring sector concentration — **Fix:** No sector >30% of portfolio.
- **Mistake:** Not rebalancing — **Fix:** Sector drift creates unintended risk.
- **Mistake:** Comparing sector valuations across sectors — **Fix:** Compare within sectors only.
- **Mistake:** Ignoring dividends — **Fix:** Energy and utilities provide income while you wait.

### Professional Tips & Tricks

- Use sector ETFs as building blocks — they're cheap and liquid.
- Equal-weight across sectors is a solid default — it's simple and effective.
- When a sector drops 20%+ on non-fundamental news, it's often a buying opportunity.
- Review sector allocation quarterly, but don't overtrade — rebalance annually.

---

### Key Takeaways

- Sector allocation is a powerful tool for enhancing returns and managing risk.
- Equal-weight has historically outperformed market-weight slightly.
- Adjust sector weights based on economic cycle and valuations.
- Use sector ETFs as cheap, liquid building blocks.
- No single sector should exceed 30% of your portfolio.
- Rebalance annually or when drift exceeds 5%.

## 🎓 Module 9 Complete

You now understand sector analysis, competitive moats, and sector portfolio optimization. You can identify the best industries and allocate capital strategically.`,
      codeLanguage: "text",
      codeSnippet: `# Sector Portfolio Builder

## Equal-Weight Sector Allocation

Sector          | Target | Current | Drift  | Action
----------------|--------|---------|--------|-------
Technology      | 9.1%   | ___%    | ___%   | □Buy □Sell □Hold
Healthcare      | 9.1%   | ___%    | ___%   | □Buy □Sell □Hold
Financials      | 9.1%   | ___%    | ___%   | □Buy □Sell □Hold
Cons Discr      | 9.1%   | ___%    | ___%   | □Buy □Sell □Hold
Com Services    | 9.1%   | ___%    | ___%   | □Buy □Sell □Hold
Industrials     | 9.1%   | ___%    | ___%   | □Buy □Sell □Hold
Cons Staples    | 9.1%   | ___%    | ___%   | □Buy □Sell □Hold
Energy          | 9.1%   | ___%    | ___%   | □Buy □Sell □Hold
Utilities       | 9.1%   | ___%    | ___%   | □Buy □Sell □Hold
Real Estate     | 9.1%   | ___%    | ___%   | □Buy □Sell □Hold
Materials       | 9.1%   | ___%    | ___%   | □Buy □Sell □Hold

Rebalance if any sector drifts >5% from target.

## Economic Cycle Allocation

Current Phase: _______________

OVERWEIGHT SECTORS:
1. _____________ → ___% (Target: ___%)
2. _____________ → ___% (Target: ___%)
3. _____________ → ___% (Target: ___%)

UNDERWEIGHT SECTORS:
1. _____________ → ___% (Target: ___%)
2. _____________ → ___% (Target: ___%)
3. _____________ → ___% (Target: ___%)

## Sector ETF Cost Analysis

Total portfolio: $__________
Total annual ETF fees: $__________
Fee as % of portfolio: ____%

Target: Keep total fees under 0.10%

## Annual Sector Review

Date: ___________

□ Reviewed sector weights vs. targets
□ Checked sector valuations vs. history
□ Assessed economic cycle position
□ Rebalanced any sectors >5% off target
□ Updated sector thesis for next 12 months`,
      codeOutput: `# Sector Portfolio Builder

## Equal-Weight Sector Allocation

Sector          | Target | Current | Drift  | Action
----------------|--------|---------|--------|-------
Technology      | 9.1%   | ___%    | ___%   | □Buy □Sell □Hold
Healthcare      | 9.1%   | ___%    | ___%   | □Buy □Sell □Hold
Financials      | 9.1%   | ___%    | ___%   | □Buy □Sell □Hold
Cons Discr      | 9.1%   | ___%    | ___%   | □Buy □Sell □Hold
Com Services    | 9.1%   | ___%    | ___%   | □Buy □Sell □Hold
Industrials     | 9.1%   | ___%    | ___%   | □Buy □Sell □Hold
Cons Staples    | 9.1%   | ___%    | ___%   | □Buy □Sell □Hold
Energy          | 9.1%   | ___%    | ___%   | □Buy □Sell □Hold
Utilities       | 9.1%   | ___%    | ___%   | □Buy □Sell □Hold
Real Estate     | 9.1%   | ___%    | ___%   | □Buy □Sell □Hold
Materials       | 9.1%   | ___%    | ___%   | □Buy □Sell □Hold

Rebalance if any sector drifts >5% from target.

## Economic Cycle Allocation

Current Phase: _______________

OVERWEIGHT SECTORS:
1. _____________ → ___% (Target: ___%)
2. _____________ → ___% (Target: ___%)
3. _____________ → ___% (Target: ___%)

UNDERWEIGHT SECTORS:
1. _____________ → ___% (Target: ___%)
2. _____________ → ___% (Target: ___%)
3. _____________ → ___% (Target: ___%)

## Sector ETF Cost Analysis

Total portfolio: $__________
Total annual ETF fees: $__________
Fee as % of portfolio: ____%

Target: Keep total fees under 0.10%

## Annual Sector Review

Date: ___________

□ Reviewed sector weights vs. targets
□ Checked sector valuations vs. history
□ Assessed economic cycle position
□ Rebalanced any sectors >5% off target
□ Updated sector thesis for next 12 months`,
      visualizationTips: [
        "Create a pie chart of your ideal sector allocation.",
        "Plot sector performance over the economic cycle to see rotation patterns.",
        "Build a dashboard showing current sector valuations vs. historical averages."
      ],
      tipsAndTricks: [
        "Equal-weight across sectors is a solid, simple default strategy.",
        "When a sector drops 20%+ on non-fundamental news, it's often a buying opportunity.",
        "Use sector ETFs as building — they're cheap (0.09% expense ratios) and liquid.",
        "Review sector allocation quarterly, but only rebalance annually to minimize taxes."
      ],
      practice: [
        {
          id: "practice-sector-portfolio",
          title: "Build a Sector Portfolio",
          difficulty: "Hard",
          task: "Design a sector portfolio for a moderate-risk investor with $100,000. Choose specific sector ETFs, calculate the allocation, and explain your sector weightings based on current economic conditions.",
          hint: "Use the sector ETFs listed above. Consider the current economic cycle phase.",
          solution: `Sector Portfolio Design ($100,000):

Assessment: Mid-Late Cycle, transitioning to defensive

Allocation:
├── Technology (XLK): $25,000 (25%) — AI growth continues
├── Healthcare (XLV): $15,000 (15%) — Defensive + aging demographics
├── Financials (XLF): $12,000 (12%) — Rate sensitivity, income
├── Consumer Staples (XLP): $10,000 (10%) — Defensive, recession-ready
├── Industrials (XLI): $10,000 (10%) — Infrastructure spending
├── Energy (XLE): $8,000 (8%) — Inflation hedge, income
├── Utilities (XLU): $7,000 (7%) — Defensive, income
├── Real Estate (XLRE): $5,000 (5%) — Rate cut beneficiary
├── Materials (XLB): $4,000 (4%) — Commodity exposure
├── Cons Discretionary (XLY): $2,000 (2%) — Trimmed for defensiveness
└── Com Services (XLC): $2,000 (2%) — Trimmed

Total: $100,000
Expected Yield: 1.6%
Expected Return: 8-10%
Total Expense Ratio: 0.09%

Rationale:
- Heavy on defensives (Healthcare + Staples + Utilities = 32%) for late-cycle protection
- Maintained Tech (25%) for AI growth but trimmed from peak
- Energy (8%) for inflation hedge and income
- Reduced Cyclical exposure (Cons Discr, Materials) for recession preparedness`
        },
        {
          id: "practice-sector-rebalancing",
          title: "Sector Rebalancing Exercise",
          difficulty: "Easy",
          task: "Your target equal-weight portfolio has 9.1% in each sector. After a strong year, Technology grew to 18% while Energy dropped to 4%. How do you rebalance? What are the tax implications?",
          hint: "Sell overweight sectors and buy underweight sectors. Consider tax-advantaged accounts.",
          solution: `Sector Rebalancing Exercise:

Current State:
- Technology: 18% (target 9.1%) → Overweight by 8.9%
- Energy: 4% (target 9.1%) → Underweight by 5.1%
- Other sectors: Approximately at target

Rebalancing Actions:

1. SELL Technology:
   - Sell 8.9% of portfolio ($8,900 if $100K portfolio)
   - This reduces Technology from 18% to 9.1%

2. BUY Energy:
   - Use $5,100 to buy Energy ETF
   - This increases Energy from 4% to 9.1%

3. Remaining $3,800:
   - Distribute to other underweight sectors
   - Or add to underweight positions

Tax Implications:
- If in 401(k)/IRA: No tax consequences
- If in taxable account: Selling Technology triggers capital gains
  - If held >1 year: 15% long-term rate
  - If held <1 year: 22-37% ordinary income rate

Tax-Efficient Approach:
1. Use new contributions to buy Energy (avoids selling)
2. Rebalance in tax-advantaged accounts first
3. If must sell in taxable, sell the lot with lowest gains

Lesson: Rebalancing in tax-advantaged accounts is always preferred.`
        }
      ]
    }
  ],
};
