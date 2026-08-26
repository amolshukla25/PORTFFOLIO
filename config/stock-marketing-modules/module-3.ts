import type { Module } from "../courses";

export const MODULE_3: Module = {
  id: "module-3-portfolio-management",
  title: "Module 3: Portfolio Management & Investment Strategy for Indian Investors",
  description:
    "Build and manage a diversified portfolio using Indian mutual funds, SIPs, ELSS, PPF, and NPS for long-term wealth creation.",
  lessons: [
    {
      id: "portfolio-theory-indian",
      title: "Lesson 1: Asset Allocation for Indian Investors",
      shortDescription:
        "Understand diversification, asset allocation, and how to build a portfolio using Indian mutual funds, PPF, and NPS.",
      duration: "55 mins",
      readingTime: "11 mins read",
      contentMarkdown: `### Why Portfolio Management Matters

Even the best stock picks can fail if your portfolio isn't properly diversified. For Indian investors, portfolio management means allocating across equity, debt, gold, and international assets.

> **Mental model:** Think of your portfolio as a thali — you need different items (roti, dal, rice, sabzi, dessert) for a complete meal. Just eating rice alone won't give you all the nutrition.

---

### Asset Allocation for Indian Investors

#### The Core Principle

**Don't put all your eggs in one basket** — but also don't spread them so thin that you can't monitor them.

#### Risk Tolerance Assessment (Indian Context)

| Factor | Conservative | Moderate | Aggressive |
|---|---|---|---|
| **Age** | 50+ | 30-50 | Under 30 |
| **Income Stability** | Variable | Stable | Stable + growing |
| **Investment Horizon** | < 5 years | 5-15 years | 15+ years |
| **Emergency Fund** | 6+ months | 3-6 months | 3-6 months |
| **Emotional Response to Loss** | Panic sell | Hold steady | Buy more |

---

### Indian Asset Allocation Models

#### Conservative Portfolio (Low Risk)

| Asset Class | Allocation | Expected Return | Risk Level |
|---|---|---|---|
| Nifty 50 Index Fund | 25% | 12% | Medium |
| Mid/Small Cap Fund | 5% | 15% | High |
| PPF | 25% | 7.1% | Very Low |
| Debt Funds (Short Duration) | 30% | 6-7% | Low |
| Gold ETF/SGB | 10% | 8-10% | Medium |
| **Total** | 100% | **8-9%** | Low-Medium |

#### Balanced Portfolio (Medium Risk)

| Asset Class | Allocation | Expected Return | Risk Level |
|---|---|---|---|
| Nifty 50 Index Fund | 35% | 12% | Medium |
| Nifty Next 50 | 10% | 14% | Medium-High |
| Mid Cap Fund | 10% | 15% | High |
| PPF | 15% | 7.1% | Very Low |
| Debt Funds | 15% | 6-7% | Low |
| Gold ETF/SGB | 10% | 8-10% | Medium |
| **Total** | 100% | **10-11%** | Medium |

#### Aggressive Portfolio (High Risk)

| Asset Class | Allocation | Expected Return | Risk Level |
|---|---|---|---|
| Nifty 50 Index Fund | 30% | 12% | Medium |
| Nifty Next 50 | 10% | 14% | Medium-High |
| Mid Cap Fund | 15% | 15% | High |
| Small Cap Fund | 10% | 18% | Very High |
| International Fund | 15% | 12% | Medium |
| Debt Funds | 10% | 6-7% | Low |
| Gold ETF | 5% | 8-10% | Medium |
| PPF | 5% | 7.1% | Very Low |
| **Total** | 100% | **12-13%** | High |

---

### The Glide Path — Adjusting Over Time

As you age, your portfolio should gradually shift from aggressive to conservative:

| Age Range | Equity | Debt/Gold | Rationale |
|---|---|---|---|
| 20s-30s | 80-90% | 10-20% | Long horizon, can recover from losses |
| 40s | 60-70% | 30-40% | Still growing, but protecting gains |
| 50s | 40-60% | 40-60% | Nearing retirement, reducing risk |
| 60s+ | 20-40% | 60-80% | Preserving capital, generating income |

> **Key insight:** The "Rule of 100" says subtract your age from 100 to get your equity allocation. A 30-year-old = 70% equity; a 60-year-old = 40% equity.

---

### Indian Mutual Fund Categories

| Category | Risk Level | Expected Return | Best For |
|---|---|---|---|
| **Nifty 50 Index Fund** | Medium | 12% | Core holding, diversification |
| **Nifty Next 50 Index** | Medium-High | 14% | Emerging blue chips |
| **Large Cap Fund** | Medium | 11-13% | Stable growth |
| **Mid Cap Fund** | High | 14-16% | Higher growth potential |
| **Small Cap Fund** | Very High | 16-20% | Maximum growth, high risk |
| **ELSS Fund** | Medium-High | 12-15% | Tax saving under 80C |
| **Hybrid Fund** | Medium | 10-12% | Balanced approach |
| **Debt Fund** | Low-Medium | 6-8% | Stability, income |
| **Gold ETF** | Medium | 8-10% | Inflation hedge |

---

### The Power of SIP in India

Systematic Investment Plan (SIP) is the most popular way to invest in Indian mutual funds.

#### SIP Benefits for Indian Investors

| Benefit | How It Helps |
|---|---|
| **Rupee Cost Averaging** | Buy more units when prices are low, fewer when high |
| **Discipline** | Removes emotion from investing |
| **Compound Growth** | Reinvested returns generate their own returns |
| **Affordability** | Start with as low as ₹500/month |
| **Convenience** | Auto-debit from bank account |

#### SIP Returns (Historical Nifty 50)

| SIP Duration | Total Invested | Value at 12% CAGR | Wealth Created |
|---|---|---|---|
| 5 years | ₹3,00,000 | ₹4,12,000 | ₹1,12,000 |
| 10 years | ₹6,00,000 | ₹11,60,000 | ₹5,60,000 |
| 15 years | ₹9,00,000 | ₹25,00,000 | ₹16,00,000 |
| 20 years | ₹12,00,000 | ₹49,50,000 | ₹37,50,000 |
| 25 years | ₹15,00,000 | ₹94,90,000 | ₹79,90,000 |
| 30 years | ₹18,00,000 | ₹1,76,00,000 | ₹1,58,00,000 |

---

### Indian Tax-Saving Investments (Section 80C)

| Investment | Lock-in | Expected Return | Risk Level | Tax Benefit |
|---|---|---|---|---|
| **ELSS Mutual Fund** | 3 years | 12-15% | Medium-High | ₹1.5 lakh deduction |
| **PPF** | 15 years | 7.1% | Very Low | Tax-free (EEE) |
| **NPS** | Till 60 | 10-12% | Medium | ₹1.5L + ₹50K extra |
| **SSY (Sukanya)** | Till 21 years | 8.2% | Very Low | Tax-free (EEE) |
| **5-Year FD** | 5 years | 6-7% | Very Low | ₹1.5 lakh deduction |
| **Life Insurance Premium** | Varies | 4-5% | Very Low | ₹1.5 lakh deduction |

> **Key insight:** ELSS is the best Section 80C investment — it has the shortest lock-in (3 years) and highest expected returns (12-15%).

---

### Common Portfolio Management Mistakes in India

- **Mistake:** Not using SIPs — **Fix:** Set up SIPs on the 1st of every month.
- **Mistake:** Ignoring PPF — **Fix:** PPF at 7.1% tax-free is the best fixed-income investment.
- **Mistake:** Over-investing in FDs — **Fix:** FDs return 6-7% pre-tax; equity returns 12%+ over long term.
- **Mistake:** Not using ELSS for tax saving — **Fix:** ELSS gives tax savings + equity growth.
- **Mistake:** Checking portfolio daily — **Fix:** Check quarterly; daily checking leads to emotional decisions.

### Professional Tips & Tricks

- Start with Nifty 50 index fund as your core holding — add other funds around it.
- Use direct plans to save 0.5-1% in expense ratios every year.
- Rebalance annually — sell what's grown, buy what's lagged.
- Keep 3-6 months of expenses in liquid fund before investing aggressively.

---

### Key Takeaways

- Asset allocation is the most important decision in portfolio construction.
- SIPs provide discipline, rupee cost averaging, and compound growth.
- ELSS is the best Section 80C investment (short lock-in + high returns).
- PPF at 7.1% tax-free is the best fixed-income option for Indian investors.
- Adjust your portfolio from aggressive to conservative as you age.
- Rebalance annually to maintain your target allocation.

**Next up:** Dollar-cost averaging and market timing myths for Indian investors.`,
      codeLanguage: "text",
      codeSnippet: `Indian Portfolio Management — Key Frameworks

ASSET ALLOCATION MODELS (INDIAN CONTEXT)

Conservative (Low Risk):
25% Nifty 50 | 5% Mid/Small | 25% PPF | 30% Debt | 10% Gold
Expected Return: 8-9% | Max Drawdown: -15%

Balanced (Medium Risk):
35% Nifty 50 | 10% Nifty Next 50 | 10% Mid Cap | 15% PPF | 15% Debt | 10% Gold
Expected Return: 10-11% | Max Drawdown: -25%

Aggressive (High Risk):
30% Nifty 50 | 10% Nifty Next 50 | 15% Mid Cap | 10% Small Cap
15% International | 10% Debt | 5% Gold | 5% PPF
Expected Return: 12-13% | Max Drawdown: -35%

THE GLIDE PATH (AGE-BASED ALLOCATION)

Age 20-30: 80-90% Equity | 10-20% Debt/Gold
Age 30-40: 70-80% Equity | 20-30% Debt/Gold
Age 40-50: 60-70% Equity | 30-40% Debt/Gold
Age 50-60: 40-60% Equity | 40-60% Debt/Gold
Age 60+:   20-40% Equity | 60-80% Debt/Gold

SIP RETURNS (HISTORICAL NIFTY 50)

Monthly SIP: ₹5,000 | Return: 12% CAGR

Year 5:  ₹4,12,000  (Invested: ₹3,00,000)
Year 10: ₹11,60,000 (Invested: ₹6,00,000)
Year 15: ₹25,00,000 (Invested: ₹9,00,000)
Year 20: ₹49,50,000 (Invested: ₹12,00,000)
Year 25: ₹94,90,000 (Invested: ₹15,00,000)
Year 30: ₹1,76,00,000 (Invested: ₹18,00,000)

₹5,000/month for 30 years = ₹1.76 Crore!

SECTION 80C TAX-SAVING OPTIONS

Investment      | Lock-in | Return  | Risk    | Tax Benefit
----------------|---------|---------|---------|------------
ELSS            | 3 years | 12-15%  | Med-High| ₹1.5L deduction
PPF             | 15 years| 7.1%    | Very Low| Tax-free (EEE)
NPS             | Till 60 | 10-12%  | Medium  | ₹1.5L + ₹50K extra
5-Year FD       | 5 years | 6-7%    | Very Low| ₹1.5L deduction

Best Pick: ELSS (shortest lock-in + highest returns)`,
      codeOutput: `Indian Portfolio Management — Key Frameworks

ASSET ALLOCATION MODELS (INDIAN CONTEXT)

Conservative (Low Risk):
25% Nifty 50 | 5% Mid/Small | 25% PPF | 30% Debt | 10% Gold
Expected Return: 8-9% | Max Drawdown: -15%

Balanced (Medium Risk):
35% Nifty 50 | 10% Nifty Next 50 | 10% Mid Cap | 15% PPF | 15% Debt | 10% Gold
Expected Return: 10-11% | Max Drawdown: -25%

Aggressive (High Risk):
30% Nifty 50 | 10% Nifty Next 50 | 15% Mid Cap | 10% Small Cap
15% International | 10% Debt | 5% Gold | 5% PPF
Expected Return: 12-13% | Max Drawdown: -35%

THE GLIDE PATH (AGE-BASED ALLOCATION)

Age 20-30: 80-90% Equity | 10-20% Debt/Gold
Age 30-40: 70-80% Equity | 20-30% Debt/Gold
Age 40-50: 60-70% Equity | 30-40% Debt/Gold
Age 50-60: 40-60% Equity | 40-60% Debt/Gold
Age 60+:   20-40% Equity | 60-80% Debt/Gold

SIP RETURNS (HISTORICAL NIFTY 50)

Monthly SIP: ₹5,000 | Return: 12% CAGR

Year 5:  ₹4,12,000  (Invested: ₹3,00,000)
Year 10: ₹11,60,000 (Invested: ₹6,00,000)
Year 15: ₹25,00,000 (Invested: ₹9,00,000)
Year 20: ₹49,50,000 (Invested: ₹12,00,000)
Year 25: ₹94,90,000 (Invested: ₹15,00,000)
Year 30: ₹1,76,00,000 (Invested: ₹18,00,000)

₹5,000/month for 30 years = ₹1.76 Crore!

SECTION 80C TAX-SAVING OPTIONS

Investment      | Lock-in | Return  | Risk    | Tax Benefit
----------------|---------|---------|---------|------------
ELSS            | 3 years | 12-15%  | Med-High| ₹1.5L deduction
PPF             | 15 years| 7.1%    | Very Low| Tax-free (EEE)
NPS             | Till 60 | 10-12%  | Medium  | ₹1.5L + ₹50K extra
5-Year FD       | 5 years | 6-7%    | Very Low| ₹1.5L deduction

Best Pick: ELSS (shortest lock-in + highest returns)`,
      visualizationTips: [
        "Create a pie chart of your ideal portfolio allocation by asset class.",
        "Plot the growth of a ₹5,000 SIP over 20 years on Nifty 50.",
        "Compare returns of PPF vs Nifty 50 SIP over 20 years."
      ],
      tipsAndTricks: [
        "Start with Nifty 50 index fund as your core holding.",
        "Use direct plans to save 0.5-1% in expense ratios every year.",
        "ELSS is the best 80C investment — shortest lock-in + highest returns.",
        "Rebalance annually — sell what's grown, buy what's lagged."
      ],
      practice: [
        {
          id: "practice-allocation-design",
          title: "Design Your Indian Portfolio",
          difficulty: "Medium",
          task: "Based on your age and risk tolerance, design a portfolio allocation using Indian mutual funds and investment options. Include specific fund names and explain your reasoning.",
          hint: "Consider your age, income stability, and when you'll need the money.",
          solution: `Example Portfolio for 32-year-old Indian investor (Moderate Risk):

Allocation:
- Nifty 50 Index Fund (UTI): 35% → ₹1,75,000
- Nifty Next 50 (ICICI Pru): 10% → ₹50,000
- Mid Cap Fund (HDFC): 10% → ₹50,000
- PPF: 15% → ₹75,000
- Debt Fund (Short Duration): 15% → ₹75,000
- Gold ETF (Nippon): 10% → ₹50,000
- ELSS (Quant): 5% → ₹25,000

Total: ₹5,00,000

Rationale:
- 60% equity for growth (long time horizon)
- 25% debt/PPF for stability
- 10% gold for inflation hedge
- ELSS for additional 80C benefit
- Direct plans for lower expense ratios

Expected Return: 10-11% CAGR
Max Drawdown Tolerance: -25%
Rebalance: Annually or when >5% off target`
        },
        {
          id: "practice-sip-planning",
          title: "SIP Planning Exercise",
          difficulty: "Easy",
          task: "You want to accumulate ₹1 crore in 20 years for your child's education. Assuming 12% CAGR from Nifty 50, how much monthly SIP do you need? How much will you actually invest vs. wealth created?",
          hint: "Use the future value of annuity formula or an online SIP calculator.",
          solution: `SIP Planning for ₹1 Crore Goal:

Target: ₹1,00,00,000
Time Horizon: 20 years
Expected Return: 12% CAGR

Monthly SIP Required: ~₹10,500

Total Invested: ₹10,500 × 12 × 20 = ₹25,20,000
Wealth Created: ₹1,00,00,000 - ₹25,20,000 = ₹74,80,000

You invest ₹25.2 lakh, wealth created = ₹74.8 lakh!
Compound growth did the heavy lifting.

Key Insight: Start early! If you start 5 years later (15 years instead of 20):
Monthly SIP needed: ~₹22,500 (more than double!)
Total invested: ₹40,50,000

Starting 5 years early saves you ₹12,00,000 in contributions!

Lesson: The best time to start SIP was yesterday. The second best time is today.`
        }
      ]
    },
    {
      id: "dollar-cost-averaging-indian",
      title: "Lesson 2: SIP & Market Timing Myths for Indian Investors",
      shortDescription:
        "Learn why consistent SIP investing beats trying to time the Indian market, and how to implement a systematic investment plan.",
      duration: "45 mins",
      readingTime: "9 mins read",
      contentMarkdown: `### What is Systematic Investment Plan (SIP)?

SIP is investing a **fixed amount** at **regular intervals** in Indian mutual funds regardless of market conditions. You buy more units when prices are low and fewer when prices are high.

> **Mental model:** SIP is like a subscription to your future self — you pay the same amount each month and let the Indian market do the work.

#### How SIP Works in India

| Month | Investment | Nifty Level | Units Bought |
|---|---|---|---|
| January | ₹5,000 | 22,000 | 2.27 units |
| February | ₹5,000 | 21,000 | 2.38 units |
| March | ₹5,000 | 19,500 | 2.56 units |
| April | ₹5,000 | 20,000 | 2.50 units |
| May | ₹5,000 | 22,500 | 2.22 units |
| June | ₹5,000 | 21,500 | 2.33 units |
| **Total** | **₹30,000** | **Avg: 21,083** | **14.26 units** |

**Key insight:** Your average cost per unit (₹2,103) is **lower** than the average Nifty level (21,083) because you bought more units when prices were low!

---

### Why Market Timing Fails for Indian Investors

#### The Cost of Missing the Best Days on Nifty

| Scenario | 15-Year Return | Annual Return |
|---|---|---|
| Stayed fully invested | +12.5% | +12.5% |
| Missed 10 best days | +6.2% | +6.2% |
| Missed 20 best days | +2.1% | +2.1% |
| Missed 30 best days | -1.5% | -1.5% |

> **Key insight:** The best days on Nifty often happen right after the worst days — selling during a crash means you miss the recovery.

#### The Math of Recovering from Losses

| Loss | Gain Needed to Recover |
|---|---|
| -10% | +11% |
| -20% | +25% |
| -30% | +43% |
| -40% | +67% |
| -50% | +100% |

**This is why protecting your downside matters more than capturing every upside.**

---

### SIP vs. Lump Sum in India

| Method | Pros | Cons | Best For |
|---|---|---|---|
| **SIP** | Reduces timing risk, psychologically easier | May underperform in rising markets | Regular income earners |
| **Lump Sum** | Historically outperforms SIP ~67% of time | Higher timing risk, emotionally difficult | Large cash windfalls |

**The data:** Lump-sum investing beats SIP about 67% of the time. However, SIP is better for most Indian investors because:
1. It removes emotion from investing
2. It's easier to stick with during downturns
3. It aligns with how most people earn (regular paychecks)

---

### Implementing a SIP Strategy in India

#### Step 1: Choose Your Investment

| Investment Type | Best For | Risk Level |
|---|---|---|
| **Nifty 50 Index Fund** | Core India exposure | Medium |
| **Nifty Next 50** | Emerging blue chips | Medium-High |
| **ELSS Fund** | Tax saving + equity | Medium-High |
| **PPF** | Guaranteed tax-free returns | Very Low |

#### Step 2: Set Your Amount and Frequency

| Frequency | Pros | Cons |
|---|---|---|
| **Weekly** | More SIP benefit | More transactions |
| **Monthly** | Simple, aligns with paycheck | Slightly less SIP benefit |
| **Quarterly** | Fewer transactions | Less SIP benefit |

**Recommended:** Monthly, on the same day each month, regardless of market conditions.

#### Step 3: Automate It

Set up auto-debit through your bank or broker. Automation removes the temptation to time the Indian market.

---

### Common SIP Mistakes to Avoid

- **Mistake:** Stopping SIPs during downturns — **Fix:** SIP works best when you buy more during crashes.
- **Mistake:** Checking your portfolio daily — **Fix:** Check quarterly; daily checking leads to emotional decisions.
- **Mistake:** Switching funds frequently — **Fix:** Stick with your plan for at least 5 years.
- **Mistake:** Investing money you'll need soon — **Fix:** Only SIP money you won't need for 5+ years.

### Professional Tips & Tricks

- Automate your SIPs — it removes emotion and ensures consistency.
- Increase SIP amount with every raise — lifestyle inflation kills wealth building.
- Use tax-advantaged accounts (PPF, NPS, ELSS) for SIP when possible.
- Don't try to "optimize" your SIP — the benefit is consistency, not timing.

---

### Key Takeaways

- SIP invests fixed amounts at regular intervals, reducing timing risk.
- Missing the best 10 days on Nifty cuts returns by more than half.
- Lump sum beats SIP 67% of the time, but SIP is easier to stick with.
- Automation is the key to successful SIP — remove emotion from the equation.
- Start early and stay consistent — time in the market beats timing the market.

**Next up:** Tax-efficient investing and retirement account strategies for Indian investors.`,
      codeLanguage: "text",
      codeSnippet: `SIP & Market Timing — Indian Investor Guide

SIP CALCULATION (NIFTY 50 HISTORICAL)

Monthly SIP: ₹5,000 | Period: 12 months

Month  | Nifty Level | Units Bought
-------|-------------|-------------
Jan    | 22,000      | 2.27
Feb    | 21,000      | 2.38
Mar    | 19,500      | 2.56
Apr    | 20,000      | 2.50
May    | 22,500      | 2.22
Jun    | 21,500      | 2.33
Total  | Avg: 21,083 | 14.26

Your Average Cost: ₹30,000 ÷ 14.26 = ₹2,103
Market Average: 21,083
You SAVED: ₹80 per unit (0.4%)

COST OF MISSING BEST DAYS (NIFTY 50)

Strategy              | 15-Year Return
Fully Invested        | +12.5% annually
Miss 10 Best Days     | +6.2% annually
Miss 20 Best Days     | +2.1% annually
Miss 30 Best Days     | -1.5% annually

RECOVERY REQUIRED AFTER LOSSES

Loss  | Gain to Break Even
-10%  | +11%
-20%  | +25%
-30%  | +43%
-40%  | +67%
-50%  | +100%

SIP VS LUMPSUM

Method    | Win Rate | Best For
----------|----------|------------------
SIP       | 33%      | Regular income earners
Lump Sum  | 67%      | Large cash windfalls

Lesson: SIP wins on discipline, Lump Sum wins on returns.
For most Indians, SIP is better because of consistency.`,
      codeOutput: `SIP & Market Timing — Indian Investor Guide

SIP CALCULATION (NIFTY 50 HISTORICAL)

Monthly SIP: ₹5,000 | Period: 12 months

Month  | Nifty Level | Units Bought
-------|-------------|-------------
Jan    | 22,000      | 2.27
Feb    | 21,000      | 2.38
Mar    | 19,500      | 2.56
Apr    | 20,000      | 2.50
May    | 22,500      | 2.22
Jun    | 21,500      | 2.33
Total  | Avg: 21,083 | 14.26

Your Average Cost: ₹30,000 ÷ 14.26 = ₹2,103
Market Average: 21,083
You SAVED: ₹80 per unit (0.4%)

COST OF MISSING BEST DAYS (NIFTY 50)

Strategy              | 15-Year Return
Fully Invested        | +12.5% annually
Miss 10 Best Days     | +6.2% annually
Miss 20 Best Days     | +2.1% annually
Miss 30 Best Days     | -1.5% annually

RECOVERY REQUIRED AFTER LOSSES

Loss  | Gain to Break Even
-10%  | +11%
-20%  | +25%
-30%  | +43%
-40%  | +67%
-50%  | +100%

SIP VS LUMPSUM

Method    | Win Rate | Best For
----------|----------|------------------
SIP       | 33%      | Regular income earners
Lump Sum  | 67%      | Large cash windfalls

Lesson: SIP wins on discipline, Lump Sum wins on returns.
For most Indians, SIP is better because of consistency.`,
      visualizationTips: [
        "Plot the growth of a ₹5,000 SIP on Nifty 50 over 20 years.",
        "Compare the total returns of SIP vs lump sum for different market conditions.",
        "Show the cost of missing the best 10 days on Nifty 50."
      ],
      tipsAndTricks: [
        "Automate your SIPs — it removes emotion and ensures consistency.",
        "Increase SIP amount with every raise — lifestyle inflation kills wealth building.",
        "Don't try to time the Indian market — SIP works because of consistency.",
        "Use direct plans to save 0.5-1% in expense ratios every year."
      ],
      practice: [
        {
          id: "practice-sip-calculation",
          title: "SIP Calculator",
          difficulty: "Easy",
          task: "You invest ₹3,000/month into Nifty 50 index fund for 6 months. Nifty levels are: 21,000, 20,000, 18,500, 19,500, 21,000, 22,000. Calculate: (1) Total units bought, (2) Your average cost per unit, (3) Current portfolio value.",
          hint: "Shares = Investment ÷ Nifty Level for each month. Average cost = Total invested ÷ Total units.",
          solution: `SIP Calculation:

Month 1: ₹3,000 ÷ 21,000 = 0.143 units
Month 2: ₹3,000 ÷ 20,000 = 0.150 units
Month 3: ₹3,000 ÷ 18,500 = 0.162 units
Month 4: ₹3,000 ÷ 19,500 = 0.154 units
Month 5: ₹3,000 ÷ 21,000 = 0.143 units
Month 6: ₹3,000 ÷ 22,000 = 0.136 units

Total Invested: ₹18,000
Total Units: 0.888
Average Cost: ₹18,000 ÷ 0.888 = ₹20,270

Market Average: (21,000+20,000+18,500+19,500+21,000+22,000) ÷ 6 = 20,333

You beat the market by ₹63 per unit!

Portfolio Value at ₹22,000: 0.888 × 22,000 = ₹19,536
Return: ₹19,536 - ₹18,000 = ₹1,536 (8.5% in 6 months)

Key Insight: Even though Nifty went down in months 2-3, your SIP bought more units at lower prices, reducing your average cost.`
        },
        {
          id: "practice-timing-cost",
          title: "Market Timing Cost Calculator",
          difficulty: "Medium",
          task: "If you had ₹2,00,000 to invest in January 2020, but waited until March 2020 (market bottom) to invest, you would have missed the 30% recovery. Calculate the opportunity cost over 3 years assuming 12% annual returns from the bottom.",
          hint: "Compare investing ₹2,00,000 in Jan 2020 vs March 2020 with 3 years of 12% returns.",
          solution: `Market Timing Exercise:

SCENARIO A: Invest ₹2,00,000 in January 2020
- Market dropped 30% by March: Portfolio = ₹1,40,000
- Recovery + growth (12% annually for 3 years from bottom):
  ₹2,00,000 × (1.12)^3 = ₹2,81,000

SCENARIO B: Wait until March 2020 (bottom)
- Invest at bottom: ₹2,00,000
- Growth (12% annually for 3 years):
  ₹2,00,000 × (1.12)^3 = ₹2,81,000

Wait — they seem the same? Let me recalculate properly.

Actually, if you held cash in Jan 2020:
- You missed the drop BUT also missed the recovery
- By March 2020, Nifty was down 30%, so ₹2,00,000 bought 30% more units
- From March 2020 bottom to March 2023: Nifty up ~90%
- ₹2,00,000 at bottom = ₹3,80,000 after 3 years
- vs. ₹2,00,000 in Jan 2020 = ₹2,81,000 after 3 years

Lesson: Market timing CAN work if you're perfect, but most people sell at the bottom and buy at the top. SIP avoids this problem entirely.

The real cost of timing: Emotional stress, missed opportunities, and the difficulty of getting the timing right consistently.`
        }
      ]
    },
    {
      id: "tax-efficient-investing-indian",
      title: "Lesson 3: Tax-Efficient Investing for Indian Investors",
      shortDescription:
        "Maximize your after-tax returns by understanding ELSS, PPF, NPS, LTCG/STCG rules, and tax-efficient placement of Indian investments.",
      duration: "50 mins",
      readingTime: "10 mins read",
      contentMarkdown: `### Why Tax Efficiency Matters in India

A rupee saved in taxes is a rupee earned — tax-free. Smart tax planning can add 1-2% to your annual returns, which compounds to a massive difference over decades.

> **Mental model:** Think of taxes as a leak in your investment bucket — the smaller the leak, the more money you keep.

---

### Indian Capital Gains Tax Rules (Post-2024 Budget)

#### Equity Investments (Direct Stocks & Equity Mutual Funds)

| Holding Period | Tax Type | Tax Rate | Exemption |
|---|---|---|---|
| **Less than 1 year** | STCG | 20% | None |
| **More than 1 year** | LTCG | 12.5% | First ₹1.25 lakh/year exempt |

#### Debt Mutual Funds

| Holding Period | Tax Type | Tax Rate |
|---|---|---|
| **Less than 3 years** | STCG | Slab rate |
| **More than 3 years** | LTCG | 20% with indexation |

#### Other Investments

| Investment | Tax Treatment |
|---|---|
| **PPF** | Tax-free (EEE status) |
| **SGB (held to maturity)** | Tax-free |
| **SGB ( premature redemption)** | 20% with indexation |
| **NPS** | 60% tax-free at withdrawal |
| **FD** | Slab rate (no indexation benefit) |

---

### The Tax-Efficient Investment Priority for Indian Investors

| Priority | Account | Why First |
|---|---|---|
| **1** | PPF (7.1% tax-free) | Guaranteed tax-free returns |
| **2** | ELSS (Section 80C) | Tax saving + equity growth |
| **3** | NPS (Section 80CCD) | Additional ₹50,000 tax saving |
| **4** | SGB (gold exposure) | Tax-free at maturity + 2.5% interest |
| **5** | Equity Index Funds | 12.5% LTCG (above ₹1.25 lakh) |
| **6** | Debt Funds | Slab rate (less efficient) |
| **7** | Fixed Deposits | Slab rate (least efficient) |

> **Key insight:** Max out PPF and ELSS first — they provide tax-free or tax-advantaged returns. Only after exhausting these should you invest in taxable accounts.

---

### Asset Location Strategy for Indian Investors

Where you hold investments matters:

| Asset Type | Best Location | Why |
|---|---|---|
| **Debt Funds** | PPF/NPS/ELSS | Interest taxed as slab rate in taxable |
| **High-Growth Equity** | Taxable (LTCG 12.5%) | Lower tax rate than debt |
| **Gold (SGB)** | Taxable (tax-free at maturity) | SGB is already tax-efficient |
| **International Funds** | Taxable (LTCG 12.5%) | No specific tax-advantaged option |
| **PPF** | PPF account only | Tax-free, can't hold elsewhere |

---

### Capital Gains Tax Calculation Example

#### Scenario: ₹10,00,000 Portfolio with ₹2,00,000 Gains

| Investment | Gain | Tax Rate | Tax Payable |
|---|---|---|---|
| **Stocks held < 1 year** | ₹50,000 STCG | 20% | ₹10,000 |
| **Stocks held > 1 year** | ₹1,00,000 LTCG | 12.5% | ₹12,500 |
| **LTCG exempt** | ₹25,000 | 0% | ₹0 (under ₹1.25L limit) |
| **Remaining LTCG** | ₹75,000 | 12.5% | ₹9,375 |
| **Total Tax** | — | — | **₹19,375** |

**Effective tax rate: 9.7% on ₹2,00,000 gains**

---

### Tax-Loss Harvesting in India

Sell losing investments to offset gains:

| Rule | Explanation |
|---|---|
| **STCG offset** | Short-term losses can offset short-term gains |
| **LTCG offset** | Long-term losses can offset long-term gains |
| **Cross offset** | STCG losses can offset LTCG gains |
| **Carry forward** | Unused losses can be carried forward for 8 years |
| **No wash sale** | India doesn't have wash sale restrictions |

> **Key insight:** Unlike the US, India has no wash sale rule — you can sell a losing stock and immediately buy it back to capture the tax loss.

---

### Common Tax Mistakes for Indian Investors

- **Mistake:** Not maximizing PPF — **Fix:** PPF at 7.1% tax-free is the best investment in India.
- **Mistake:** Ignoring ELSS — **Fix:** ELSS saves tax AND provides equity growth.
- **Mistake:** Holding FDs instead of debt funds — **Fix:** Debt funds have indexation benefit after 3 years.
- **Mistake:** Not tax-loss harvesting before March 31 — **Fix:** Book losses before financial year end.
- **Mistake:** Ignoring NPS — **Fix:** NPS provides additional ₹50,000 tax saving under 80CCD.

### Professional Tips & Tricks

- Max out PPF (₹1.5 lakh/year) before investing in taxable accounts.
- Use ELSS for 80C — it has the shortest lock-in (3 years) and highest returns.
- Book tax losses before March 31 to offset gains.
- SGB is the best gold investment — tax-free at maturity + 2.5% interest.

---

### Key Takeaways

- PPF at 7.1% tax-free is the best fixed-income investment in India.
- ELSS is the best 80C investment (short lock-in + high returns + tax saving).
- LTCG on equity is 12.5% above ₹1.25 lakh — very favorable for long-term investors.
- Tax-loss harvesting before March 31 can save significant taxes.
- Max out PPF → ELSS → NPS → SGB → Equity Index Funds (priority order).
- NPS provides additional ₹50,000 tax saving under Section 80CCD.

## 🎓 Module 3 Complete

You now understand portfolio management for Indian investors, SIP strategies, and tax-efficient investing.`,
      codeLanguage: "text",
      codeSnippet: `Tax-Efficient Investing for Indian Investors

INDIAN CAPITAL GAINS TAX RULES (POST-2024)

Equity (Direct Stocks & Equity MF):
- STCG (< 1 year): 20%
- LTCG (> 1 year): 12.5% (first ₹1.25L/year exempt)

Debt Mutual Funds:
- STCG (< 3 years): Slab rate
- LTCG (> 3 years): 20% with indexation

Other Investments:
- PPF: Tax-free (EEE status)
- SGB (held to maturity): Tax-free
- NPS: 60% tax-free at withdrawal
- FD: Slab rate (no indexation)

TAX-EFFICIENT INVESTMENT PRIORITY

1. PPF (7.1% tax-free): ₹1.5L/year
2. ELSS (Section 80C): ₹1.5L/year tax saving
3. NPS (Section 80CCD): ₹50K extra tax saving
4. SGB: Gold + 2.5% interest + tax-free
5. Equity Index Funds: 12.5% LTCG
6. Debt Funds: Slab rate
7. FDs: Slab rate (least efficient)

CAPITAL GAINS TAX CALCULATION

Scenario: ₹10,00,000 portfolio, ₹2,00,000 gains

Stocks < 1 year: ₹50,000 × 20% = ₹10,000
Stocks > 1 year: ₹75,000 × 12.5% = ₹9,375
(exempt: ₹25,000 under ₹1.25L limit)

Total Tax: ₹19,375
Effective Rate: 9.7%

TAX-LOSS HARVESTING (INDIAN RULES)

Before March 31 each year:
- Sell losing positions to book losses
- Offset against STCG or LTCG gains
- Carry forward unused losses (8 years)
- No wash sale rule — can rebuy immediately!

EXAMPLE: You have ₹30,000 STCG loss
Offset against ₹50,000 LTCG gain
Net LTCG: ₹20,000
Tax saved: ₹30,000 × 12.5% = ₹3,750`,
      codeOutput: `Tax-Efficient Investing for Indian Investors

INDIAN CAPITAL GAINS TAX RULES (POST-2024)

Equity (Direct Stocks & Equity MF):
- STCG (< 1 year): 20%
- LTCG (> 1 year): 12.5% (first ₹1.25L/year exempt)

Debt Mutual Funds:
- STCG (< 3 years): Slab rate
- LTCG (> 3 years): 20% with indexation

Other Investments:
- PPF: Tax-free (EEE status)
- SGB (held to maturity): Tax-free
- NPS: 60% tax-free at withdrawal
- FD: Slab rate (no indexation)

TAX-EFFICIENT INVESTMENT PRIORITY

1. PPF (7.1% tax-free): ₹1.5L/year
2. ELSS (Section 80C): ₹1.5L/year tax saving
3. NPS (Section 80CCD): ₹50K extra tax saving
4. SGB: Gold + 2.5% interest + tax-free
5. Equity Index Funds: 12.5% LTCG
6. Debt Funds: Slab rate
7. FDs: Slab rate (least efficient)

CAPITAL GAINS TAX CALCULATION

Scenario: ₹10,00,000 portfolio, ₹2,00,000 gains

Stocks < 1 year: ₹50,000 × 20% = ₹10,000
Stocks > 1 year: ₹75,000 × 12.5% = ₹9,375
(exempt: ₹25,000 under ₹1.25L limit)

Total Tax: ₹19,375
Effective Rate: 9.7%

TAX-LOSS HARVESTING (INDIAN RULES)

Before March 31 each year:
- Sell losing positions to book losses
- Offset against STCG or LTCG gains
- Carry forward unused losses (8 years)
- No wash sale rule — can rebuy immediately!

EXAMPLE: You have ₹30,000 STCG loss
Offset against ₹50,000 LTCG gain
Net LTCG: ₹20,000
Tax saved: ₹30,000 × 12.5% = ₹3,750`,
      visualizationTips: [
        "Compare the after-tax returns of PPF vs FD vs Equity over 20 years.",
        "Create a tax-saving priority checklist for Indian investors.",
        "Plot the tax savings from ELSS + PPF + NPS combined."
      ],
      tipsAndTricks: [
        "Max out PPF first — 7.1% tax-free is the best guaranteed return in India.",
        "Use ELSS for 80C — shortest lock-in (3 years) + highest returns.",
        "Book tax losses before March 31 — India has no wash sale rule.",
        "SGB is the best gold investment — tax-free at maturity + 2.5% interest."
      ],
      practice: [
        {
          id: "practice-tax-planning",
          title: "Tax Planning Exercise",
          difficulty: "Medium",
          task: "You earn ₹12,00,000 annually and want to minimize taxes. Design a tax-saving plan using PPF, ELSS, NPS, and SGB. How much tax can you save?",
          hint: "Max out 80C (₹1.5L), 80CCD (₹50K), and invest in SGB for gold exposure.",
          solution: `Tax Planning for ₹12,00,000 Annual Income:

Current Tax (without planning):
Income: ₹12,00,000
Standard Deduction: ₹50,000
Taxable: ₹11,50,000

Tax Calculation (Old Regime):
0-2.5L: Nil
2.5-5L: 5% = ₹12,500
5-10L: 20% = ₹1,00,000
10-11.5L: 30% = ₹45,000
Total Tax: ₹1,57,500

Tax-Saving Investments:
1. PPF: ₹1,50,000 (Section 80C)
2. ELSS: ₹0 (already covered by PPF in 80C)
   Wait — 80C limit is ₹1.5L total. PPF covers it.
3. NPS: ₹50,000 (Section 80CCD(1B) — additional)
4. Health Insurance: ₹25,000 (Section 80D)

Total Tax Saving: ₹2,25,000 deduction

New Taxable Income: ₹11,50,000 - ₹2,25,000 = ₹9,25,000

New Tax Calculation:
0-2.5L: Nil
2.5-5L: 5% = ₹12,500
5-9.25L: 20% = ₹85,000
Total Tax: ₹97,500

Tax Saved: ₹1,57,500 - ₹97,500 = ₹60,000

Effective Tax Rate: 5.3% (down from 13.7%)

Additional Benefit: PPF grows at 7.1% tax-free, NPS at 10-12%, ELSS at 12-15%. Your money is working harder while you save taxes!`
        },
        {
          id: "practice-ltcg-calculation",
          title: "LTCG Tax Calculation",
          difficulty: "Easy",
          task: "You sold Indian stocks this year with the following gains: ₹80,000 STCG and ₹1,50,000 LTCG. Calculate your total tax liability. How much is exempt under the ₹1.25 lakh LTCG exemption?",
          hint: "STCG is taxed at 20%. LTCG is taxed at 12.5% above ₹1.25 lakh exemption.",
          solution: `LTCG Tax Calculation:

STCG: ₹80,000 × 20% = ₹16,000

LTCG: ₹1,50,000
Exemption: ₹1,25,000 (first ₹1.25L exempt)
Taxable LTCG: ₹1,50,000 - ₹1,25,000 = ₹25,000
Tax on LTCG: ₹25,000 × 12.5% = ₹3,125

Total Tax: ₹16,000 + ₹3,125 = ₹19,125

Effective Tax Rate: ₹19,125 ÷ ₹2,30,000 = 8.3%

Key Insight: The ₹1.25 lakh LTCG exemption saves you ₹15,625 in taxes!
(₹1,25,000 × 12.5% = ₹15,625)

Strategy: If possible, spread your LTCG across multiple financial years to maximize the ₹1.25L exemption each year.`
        }
      ]
    }
  ],
};
