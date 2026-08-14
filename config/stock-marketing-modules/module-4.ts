import type { Module } from "../courses";

export const MODULE_4: Module = {
  id: "module-4-advanced-topics",
  title: "Module 4: Advanced Topics & Real-World Applications",
  description:
    "Master behavioral finance, explore alternative investments, and build a complete investment plan you can execute with confidence.",
  lessons: [
    {
      id: "behavioral-finance",
      title: "Lesson 1: Behavioral Finance — The Psychology of Investing",
      shortDescription:
        "Understand the cognitive biases that cause investors to make irrational decisions and learn strategies to overcome them.",
      duration: "50 mins",
      readingTime: "10 mins read",
      contentMarkdown: `### Why Behavioral Finance Matters

The biggest enemy of successful investing isn't the market — it's **your own brain**. Behavioral finance studies how psychological biases lead to irrational financial decisions.

> **Mental model:** Think of your brain as having two systems — System 1 (emotional, fast, automatic) and System 2 (logical, slow, deliberate). Most investing mistakes happen when System 1 takes over.

#### The Data: Emotions Destroy Returns

| Investor Type | Average Annual Return |
|---|---|
| S&P 500 Index (2003-2023) | +9.8% |
| Average Stock Fund Investor | +6.8% |
| Average Bond Fund Investor | +3.5% |

**Why the gap?** Investors buy high (excitement) and sell low (fear) — the exact opposite of what works.

---

### The 12 Cognitive Biases That Hurt Investors

#### Biases That Cause Us to Buy Wrong

| Bias | Definition | Example | Fix |
|---|---|---|---|
| **Overconfidence** | Believing you're better than average | Trading too frequently | Track your results honestly |
| **Confirmation Bias** | Seeking information that agrees with you | Only reading bullish news | Actively seek opposing views |
| **Recency Bias** | Assuming recent trends will continue | Chasing last year's winners | Focus on long-term fundamentals |
| **Herd Mentality** | Following the crowd | Buying when everyone else is | Contrarian thinking |

#### Biases That Cause Us to Sell Wrong

| Bias | Definition | Example | Fix |
|---|---|---|---|
| **Loss Aversion** | Feeling losses 2x more than gains | Selling winners too early, holding losers | Set rules and follow them |
| **Anchoring** | Fixating on a specific price | "I'll sell when it gets back to $100" | Focus on current value, not purchase price |
| **Disposition Effect** | Selling winners, holding losers | Selling a stock up 20% but holding one down 50% | Cut losers, let winners run |
| **Panic Selling** | Selling during market crashes | Selling at the bottom in March 2020 | Have a plan before crashes happen |

#### Biases That Distort Our Thinking

| Bias | Definition | Example | Fix |
|---|---|---|---|
| **Narrative Bias** | Loving stories over data | Buying because of a "compelling story" | Focus on financials, not stories |
| **Sunk Cost Fallacy** | Holding because of past investment | "I can't sell now, I've lost too much" | Evaluate based on future prospects only |
| **Mental Accounting** | Treating money differently based on source | Spending bonus frivolously | Treat all money the same |
| **Endowment Effect** | Overvaluing what you own | Thinking your stock is worth more because you own it | Ask "Would I buy this today at this price?" |

---

### The Emotional Cycle of Investing

Understanding this cycle helps you anticipate and prepare for emotional traps:

| Phase | Market Condition | Emotion | Typical Action | Better Action |
|---|---|---|---|---|
| **1. Optimism** | Early recovery | Hope | Start buying | Begin DCA |
| **2. Excitement** | Rising market | Enthusiasm | Buy more | Stick to allocation |
| **3. Thrill** | Strong gains | Euphoria | Max out investments | Rebalance |
| **4. Anxiety** | Peak market | Worry | Check portfolio daily | Ignore short-term |
| **5. Denial** | Market drops | Disbelief | "It will come back" | Review fundamentals |
| **6. Fear** | Falling market | Panic | Consider selling | Follow your plan |
| **7. Desperation** | Deep decline | Hopelessness | Sell everything | Stay the course |
| **8. Capitulation** | Market bottom | Surrender | Sell at the worst time | Buy more (if able) |
| **9. Depression** | Post-crash | Despair | Stop investing entirely | Restart DCA |
| **10. Disbelief** | Early recovery | Skepticism | "It's a dead cat bounce" | Re-enter market |

> **Key insight:** The best time to buy is when everyone else is selling (capitulation), but it's also when you'll feel the worst.

---

### Building an Anti-Fragile Investment System

The solution to behavioral biases is creating **systems and rules** that remove emotion from investing:

#### Rule 1: Automate Everything

| Automation | Benefit |
|---|---|
| Automatic contributions | Removes decision fatigue |
| Automatic rebalancing | Prevents emotional timing |
| Automatic dividend reinvestment | Captures compound growth |

#### Rule 2: Write an Investment Policy Statement

Before investing, write down:
1. Your goals and time horizon
2. Your target asset allocation
3. Your rebalancing rules
4. Your entry and exit criteria
5. What you will NOT do (e.g., "I will not check my portfolio daily")

#### Rule 3: Use the 24-Hour Rule

Before making any investment decision that isn't automated:
- Wait 24 hours
- Write down why you want to make this change
- Ask: "Would I make this same decision if the market had been flat for a year?"

#### Rule 4: Find an Accountability Partner

Share your investment plan with someone who will hold you accountable. The best investors have someone who will tell them they're being stupid.

---

### Common Behavioral Mistakes to Avoid

- **Mistake:** Checking your portfolio daily — **Fix:** Check quarterly; daily checking leads to emotional decisions.
- **Mistake:** Chasing performance — **Fix:** Stick to your target allocation; don't chase hot sectors.
- **Mistake:** Panicking during downturns — **Fix:** Have a written plan and follow it.
- **Mistake:** Thinking you're different — **Fix:** Everyone thinks they're rational; no one is.

### Professional Tips & Tricks

- Write down your investment rules and read them before making any changes.
- Keep a journal of your emotional state when making investment decisions.
- Use apps that block trading apps during market hours if you're prone to impulsive trades.
- Remember: the market rewards patience and punishes action.

---

### Key Takeaways

- Emotional investing destroys returns — the average investor underperforms the market by 3%.
- The 12 cognitive biases listed above cause most investing mistakes.
- The emotional cycle of investing follows a predictable pattern — know where you are.
- Automation and written rules remove emotion from investing.
- The best investors are boring — they follow systems, not feelings.

**Next up:** Alternative investments — REITs, commodities, and cryptocurrency.`,
      codeLanguage: "text",
      codeSnippet: `# Behavioral Finance Decision Framework

## Before ANY Investment Decision, Ask:

1. What emotion am I feeling right now?
   □ Excitement □ Fear □ Greed □ Boredom □ Neutral

2. Is this decision in my Investment Policy Statement?
   □ Yes → Proceed □ No → Reconsider

3. Would I make this same decision if markets were flat?
   □ Yes → Proceed □ No → Wait 24 hours

4. Am I following my system or my feelings?
   □ System → Proceed □ Feelings → Stop

## The 12 Biases Checklist

Before trading, check for these traps:
□ Am I being overconfident?
□ Am I seeking only confirming information?
□ Am I extrapolating recent trends?
□ Am I following the crowd?
□ Am I letting losses hurt more than gains?
□ Am I anchored to a specific price?
□ Am I selling winners and holding losers?
□ Am I panicking?
□ Am I attracted to a story over data?
□ Am I holding because of sunk costs?
□ Am I treating money differently based on source?
□ Am I overvaluing what I own?

## The Anti-Fragile System

1. AUTOMATE: Contributions, rebalancing, dividends
2. WRITE: Investment Policy Statement
3. WAIT: 24-hour rule for non-automated decisions
4. SHARE: Accountability partner
5. JOURNAL: Emotional state with each decision

## The Emotional Cycle Timeline

Optimism → Excitement → Thrill → Anxiety → Denial
    ↓                                        ↓
Disbelief ← Depression ← Capitulation ← Fear
    ↓                                        ↑
Recovery ──────────────────────────────── Desperation`,
      codeOutput: `# Behavioral Finance Decision Framework

## Before ANY Investment Decision, Ask:

1. What emotion am I feeling right now?
   □ Excitement □ Fear □ Greed □ Boredom □ Neutral

2. Is this decision in my Investment Policy Statement?
   □ Yes → Proceed □ No → Reconsider

3. Would I make this same decision if markets were flat?
   □ Yes → Proceed □ No → Wait 24 hours

4. Am I following my system or my feelings?
   □ System → Proceed □ Feelings → Stop

## The 12 Biases Checklist

Before trading, check for these traps:
□ Am I being overconfident?
□ Am I seeking only confirming information?
□ Am I extrapolating recent trends?
□ Am I following the crowd?
□ Am I letting losses hurt more than gains?
□ Am I anchored to a specific price?
□ Am I selling winners and holding losers?
□ Am I panicking?
□ Am I attracted to a story over data?
□ Am I holding because of sunk costs?
□ Am I treating money differently based on source?
□ Am I overvaluing what I own?

## The Anti-Fragile System

1. AUTOMATE: Contributions, rebalancing, dividends
2. WRITE: Investment Policy Statement
3. WAIT: 24-hour rule for non-automated decisions
4. SHARE: Accountability partner
5. JOURNAL: Emotional state with each decision

## The Emotional Cycle Timeline

Optimism → Excitement → Thrill → Anxiety → Denial
    ↓                                        ↓
Disbelief ← Depression ← Capitulation ← Fear
    ↓                                        ↑
Recovery ──────────────────────────────── Desperation`,
      visualizationTips: [
        "Draw the emotional cycle of investing and mark where you've been emotionally during market moves.",
        "Create a decision tree that routes all investment decisions through your anti-fragile system.",
        "Track your emotional state in a journal alongside your investment decisions for one month.",
      ],
      tipsAndTricks: [
        "The market rewards patience and punishes action — be boring.",
        "Write down your investment rules and read them before making any changes.",
        "Use apps that block trading during market hours if you're prone to impulsive trades.",
      ],
      practice: [
        {
          id: "practice-bias-identification",
          title: "Identify Your Biases",
          difficulty: "Medium",
          task: "Review your last 5 investment decisions. For each, identify which cognitive bias (if any) influenced your decision. What would you do differently?",
          hint: "Use the 12 biases checklist to evaluate each decision honestly.",
          solution: `Example analysis of past decisions:

1. Sold AAPL after 10% gain (last month)
   Bias: Disposition effect (selling winners too early)
   Lesson: Let winners run; set trailing stops instead

2. Bought TSLA because "everyone says it's going to $500"
   Bias: Herd mentality + Narrative bias
   Lesson: Do your own research; focus on fundamentals

3. Held a stock down 40% waiting for it to "come back"
   Bias: Sunk cost fallacy + Anchoring
   Lesson: Evaluate based on future prospects, not past price

4. Checked portfolio 5 times during market drop
   Bias: Loss aversion + Anxiety
   Lesson: Automate and check quarterly

5. Sold everything during COVID crash
   Bias: Panic selling
   Lesson: Have a written plan for market crashes`,
        },
        {
          id: "practice-ips-writing",
          title: "Write Your Investment Policy Statement",
          difficulty: "Hard",
          task: "Write a 1-page Investment Policy Statement that includes: (1) Your goals and time horizon, (2) Target asset allocation, (3) Rebalancing rules, (4) What you will NOT do.",
          hint: "Be specific and realistic. This document is your guide during emotional times.",
          solution: `My Investment Policy Statement

1. GOALS & TIME HORIZON
- Primary: Retirement in 25 years
- Secondary: House down payment in 5 years (separate account)
- Risk tolerance: Moderate (can stomach 30% drawdown)

2. TARGET ALLOCATION
- 60% Stocks (40% US, 20% International)
- 30% Bonds
- 10% REITs
- Rebalance when allocation drifts >5% from target

3. REBALANCING RULES
- Review quarterly
- Rebalance annually OR when >5% off target
- Use new contributions to rebalance when possible

4. WHAT I WILL NOT DO
- I will not check my portfolio more than monthly
- I will not sell during market crashes without consulting my IPS
- I will not chase performance or hot tips
- I will not invest money I need within 5 years
- I will not try to time the market

5. EMERGENCY PROTOCOL
If market drops >20%:
1. Read this IPS
2. Do nothing for 2 weeks
3. Review if allocation still matches goals
4. Consider adding to positions if long-term outlook intact`,
        },
      ],
    },
    {
      id: "alternative-investments",
      title: "Lesson 2: Alternative Investments — REITs, Commodities & Crypto",
      shortDescription:
        "Explore alternative asset classes that can enhance diversification and provide unique return profiles beyond traditional stocks and bonds.",
      duration: "55 mins",
      readingTime: "11 mins read",
      contentMarkdown: `### Why Consider Alternative Investments?

Alternative investments provide **diversification benefits** because they often have low correlation with traditional stocks and bonds. They can also provide **inflation protection** and **income generation**.

> **Mental model:** Think of alternatives as spices in cooking — a little adds flavor and interest, but too much ruins the dish.

#### The Alternative Investment Spectrum

| Risk Level | Low | Medium | High |
|---|---|---|---|
| **Assets** | REITs, Bonds | Commodities, Gold | Crypto, Venture Capital |
| **Liquidity** | High | Medium | Low to High |
| **Complexity** | Low | Medium | High |
| **Recommended Allocation** | 10-20% | 5-10% | 0-5% |

---

### Real Estate Investment Trusts (REITs)

REITs are companies that own and operate income-producing real estate. They trade like stocks and provide exposure to real estate without owning property.

#### Why REITs?

| Benefit | Description |
|---|---|
| **Income** | Must distribute 90% of income as dividends |
| **Diversification** | Low correlation with stocks |
| **Liquidity** | Trade like stocks (unlike physical real estate) |
| **Professional Management** | No landlord headaches |

#### Types of REITs

| Type | Focus | Risk Level | Best For |
|---|---|---|---|
| **Equity REITs** | Own and operate properties | Medium | Income + growth |
| **Mortgage REITs** | Lend money to property owners | High | High income |
| **Hybrid REITs** | Combination of both | Medium | Balanced approach |

#### Top REIT ETFs

| ETF | Focus | Expense Ratio | Dividend Yield |
|---|---|---|---|
| VNQ | US REITs | 0.12% | ~4% |
| VNQI | International REITs | 0.12% | ~4% |
| IYR | US Real Estate | 0.39% | ~3.5% |

---

### Commodities & Gold

Commodities are raw materials — gold, oil, agricultural products. They often move independently of stocks and bonds.

#### Why Gold?

| Property | Benefit |
|---|---|
| **Store of Value** | Maintains purchasing power over centuries |
| **Inflation Hedge** | Rises when inflation increases |
| **Safe Haven** | Investors flock to gold during uncertainty |
| **Currency Hedge** | Protects against dollar weakness |

#### Gold Investment Options

| Method | Pros | Cons |
|---|---|---|
| **Physical Gold** | Tangible, no counterparty risk | Storage, insurance, illiquid |
| **Gold ETFs (GLD, IAU)** | Liquid, easy to trade | Management fees |
| **Gold Mining Stocks** | Leverage to gold price | Company-specific risk |
| **Gold Mutual Funds** | Diversified mining exposure | Higher fees |

#### Commodity ETFs

| ETF | Commodity | Expense Ratio |
|---|---|---|
| GLD | Gold | 0.40% |
| SLV | Silver | 0.50% |
| USO | Oil | 0.60% |
| DBA | Agriculture | 0.85% |

---

### Cryptocurrency

Cryptocurrency is a digital asset that uses cryptography for security. Bitcoin and Ethereum are the two largest by market cap.

#### The Case for Crypto (Small Allocation)

| Argument | Counter-Argument |
|---|---|
| High potential returns | Extremely volatile |
| Decentralization | Regulatory uncertainty |
| Inflation hedge (Bitcoin) | Not proven over long periods |
| Growing institutional adoption | Technology risk |

#### Crypto Investment Rules

| Rule | Rationale |
|---|---|
| **Max 5% of portfolio** | Extreme volatility requires small allocation |
| **Only Bitcoin and Ethereum** | Most established, least risky |
| **Use dollar-cost averaging** | Reduces timing risk |
| **Hold for 5+ years** | Short-term volatility is extreme |
| **Never invest money you can't lose** | Total loss is possible |

#### Crypto Investment Vehicles

| Method | Pros | Cons |
|---|---|---|
| **Direct ownership (Coinbase)** | Full control, no fees | Security responsibility |
| **Bitcoin ETFs (IBIT, FBTC)** | Easy, tax-advantaged | Management fees |
| **Crypto mutual funds** | Diversified exposure | Higher fees |

---

### Building an Alternative Investment Sleeve

Here's how to incorporate alternatives into a diversified portfolio:

#### Conservative Allocation

| Asset | Allocation | Purpose |
|---|---|---|
| US Stocks | 45% | Core growth |
| International Stocks | 15% | Diversification |
| Bonds | 30% | Stability |
| REITs | 5% | Income + inflation |
| Gold | 5% | Safe haven |

#### Moderate Allocation

| Asset | Allocation | Purpose |
|---|---|---|
| US Stocks | 40% | Core growth |
| International Stocks | 15% | Diversification |
| Bonds | 25% | Stability |
| REITs | 10% | Income + inflation |
| Commodities | 5% | Inflation hedge |
| Crypto | 5% | High-risk/reward |

---

### Common Mistakes to Avoid

- **Mistake:** Over-allocating to alternatives — **Fix:** Keep alternatives under 20% total.
- **Mistake:** Treating crypto like a core holding — **Fix:** Limit to 5% max.
- **Mistake:** Ignoring fees — **Fix:** Compare expense ratios; they compound over time.
- **Mistake:** Chasing yield — **Fix:** High yields often come with high risk.

### Professional Tips & Tricks

- REITs are great for income — reinvest dividends for compound growth.
- Gold works best as insurance, not a primary investment.
- Crypto is speculation — only invest what you can afford to lose entirely.
- Use low-cost ETFs for all alternative investments.

---

### Key Takeaways

- Alternative investments provide diversification beyond stocks and bonds.
- REITs offer real estate exposure with stock-like liquidity.
- Gold serves as inflation protection and a safe haven.
- Crypto is high-risk/high-reward — limit to 5% of portfolio.
- Keep total alternative allocation under 20% for most investors.

**Next up:** Building your complete investment plan and putting it all together.`,
      codeLanguage: "text",
      codeSnippet: `# Alternative Investments Guide

## REITs Quick Reference

Top REIT ETFs:
- VNQ (Vanguard US REITs): 0.12% expense ratio
- VNQI (International REITs): 0.12% expense ratio
- IYR (iShares US Real Estate): 0.39% expense ratio

Historical Returns (10-year avg):
- US REITs: ~8-10% annually
- International REITs: ~6-8% annually
- Average dividend yield: 3-5%

## Gold Investment Options

| Method | Pros | Cons |
|--------|------|------|
| Physical Gold | Tangible | Storage/Insurance |
| GLD ETF | Liquid | 0.40% fees |
| IAU ETF | Lower fees | 0.25% fees |
| Mining Stocks | Leverage | Company risk |

Gold allocation: 5-10% for inflation protection

## Crypto Allocation Rules

Bitcoin (BTC) + Ethereum (ETH) only
Maximum allocation: 5% of total portfolio
Use dollar-cost averaging
Hold for 5+ years minimum

## Alternative Allocation Models

Conservative:
├── REITs: 5%
├── Gold: 5%
└── Total: 10%

Moderate:
├── REITs: 10%
├── Commodities: 5%
├── Crypto: 5%
└── Total: 20%

Aggressive:
├── REITs: 10%
├── Commodities: 10%
├── Crypto: 10%
└── Total: 30% (not recommended)`,
      codeOutput: `# Alternative Investments Guide

## REITs Quick Reference

Top REIT ETFs:
- VNQ (Vanguard US REITs): 0.12% expense ratio
- VNQI (International REITs): 0.12% expense ratio
- IYR (iShares US Real Estate): 0.39% expense ratio

Historical Returns (10-year avg):
- US REITs: ~8-10% annually
- International REITs: ~6-8% annually
- Average dividend yield: 3-5%

## Gold Investment Options

| Method | Pros | Cons |
|--------|------|------|
| Physical Gold | Tangible | Storage/Insurance |
| GLD ETF | Liquid | 0.40% fees |
| IAU ETF | Lower fees | 0.25% fees |
| Mining Stocks | Leverage | Company risk |

Gold allocation: 5-10% for inflation protection

## Crypto Allocation Rules

Bitcoin (BTC) + Ethereum (ETH) only
Maximum allocation: 5% of total portfolio
Use dollar-cost averaging
Hold for 5+ years minimum

## Alternative Allocation Models

Conservative:
├── REITs: 5%
├── Gold: 5%
└── Total: 10%

Moderate:
├── REITs: 10%
├── Commodities: 5%
├── Crypto: 5%
└── Total: 20%

Aggressive:
├── REITs: 10%
├── Commodities: 10%
├── Crypto: 10%
└── Total: 30% (not recommended)`,
      visualizationTips: [
        "Compare the 10-year performance of REITs, gold, and Bitcoin vs. S&P 500.",
        "Draw a correlation matrix showing how alternatives move relative to stocks and bonds.",
        "Map out your alternative sleeve allocation based on your risk tolerance.",
      ],
      tipsAndTricks: [
        "REITs are great for income — reinvest dividends for compound growth.",
        "Gold works best as insurance, not a primary investment.",
        "Crypto is speculation — only invest what you can afford to lose entirely.",
      ],
      practice: [
        {
          id: "practice-alternatives-allocation",
          title: "Design Your Alternatives Sleeve",
          difficulty: "Medium",
          task: "You have a $200,000 portfolio and want to add 15% to alternatives. Design an allocation across REITs, gold, and crypto. Explain your reasoning for each percentage.",
          hint: "Consider your risk tolerance, time horizon, and the role each alternative plays.",
          solution: `Alternatives Sleeve Design ($30,000 = 15% of $200,000):

Allocation:
- REITs (VNQ): $18,000 (60% of alternatives, 9% of total)
  Reasoning: Income generation, inflation protection, low correlation

- Gold (GLD): $9,000 (30% of alternatives, 4.5% of total)
  Reasoning: Safe haven, inflation hedge, crisis protection

- Crypto (BTC + ETH): $3,000 (10% of alternatives, 1.5% of total)
  Reasoning: Asymmetric upside, but high risk - small allocation only

Total alternatives: $30,000 (15%)

Expected characteristics:
- Income: ~3-4% from REITs
- Stability: Gold provides downside protection
- Growth: Crypto provides asymmetric upside
- Diversification: Low correlation to stocks`,
        },
        {
          id: "practice-reit-analysis",
          title: "REIT Research Exercise",
          difficulty: "Easy",
          task: "Compare VNQ (US REIT ETF) with owning a rental property. What are the pros and cons of each? Which would you choose and why?",
          hint: "Consider liquidity, management responsibility, income, and tax implications.",
          solution: `VNQ (REIT ETF) vs. Rental Property:

VNQ Pros:
- No management responsibility
- Highly liquid (sell anytime)
- Professional management
- Low minimum investment
- Tax-efficient (in retirement accounts)

VNQ Cons:
- No control over properties
- Market volatility
- Less income than direct ownership
- No tax benefits of direct ownership

Rental Property Pros:
- Full control
- Higher potential income
- Tax benefits (depreciation)
- Leverage (mortgage)
- Tangible asset

Rental Property Cons:
- Management responsibility
- Illiquid
- High minimum investment
- Unexpected repairs
- Vacancy risk

My choice: VNQ for diversification and ease, with a small allocation to direct property if I want more control.`,
        },
      ],
    },
    {
      id: "building-investment-plan",
      title: "Lesson 3: Your Complete Investment Plan — Putting It All Together",
      shortDescription:
        "Create a personalized investment plan that you can execute with confidence, combining everything you've learned in this course.",
      duration: "60 mins",
      readingTime: "12 mins read",
      contentMarkdown: `### The Final Step: Your Investment Plan

You've learned the fundamentals, technical analysis, portfolio management, tax efficiency, behavioral finance, and alternative investments. Now it's time to **put it all together** into a plan you can execute.

> **Mental model:** An investment plan is like a recipe — once you write it down, you just follow the steps. The hard part is writing it, not executing it.

---

### Step 1: Define Your Goals

| Goal | Time Horizon | Risk Tolerance | Priority |
|---|---|---|---|
| Retirement | 20-30 years | High | Long-term wealth building |
| House down payment | 3-5 years | Medium | Capital preservation |
| Emergency fund | Immediate | Very Low | Safety first |
| Education fund | 10-18 years | Medium-High | Consistent growth |

**Key insight:** Different goals require different strategies. You cannot invest for retirement the same way you save for a house.

---

### Step 2: Calculate Your Numbers

#### The Wealth Building Formula

**Monthly Income - Expenses - Savings = Investment Amount**

| Category | Example | Percentage |
|---|---|---|
| **Income** | $6,000/month | 100% |
| **Fixed Expenses** | $2,500/month | 42% |
| **Variable Expenses** | $1,000/month | 17% |
| **Emergency Fund** | $500/month | 8% |
| **Retirement Savings** | $1,000/month | 17% |
| **Investment Amount** | $1,000/month | 17% |

#### The 50/30/20 Rule (Modified for Investors)

| Category | Percentage | Purpose |
|---|---|---|
| **Needs** | 50% | Housing, food, utilities |
| **Wants** | 20% | Entertainment, hobbies |
| **Savings & Investments** | 30% | Emergency, retirement, investing |

---

### Step 3: Design Your Portfolio

#### The Three-Bucket Strategy

| Bucket | Purpose | Time Horizon | Investments |
|---|---|---|---|
| **Bucket 1: Safety** | Emergency fund | Immediate | High-yield savings, money market |
| **Bucket 2: Stability** | Medium-term goals | 3-10 years | Bonds, bond funds, target-date funds |
| **Bucket 3: Growth** | Long-term wealth | 10+ years | Stock index funds, growth ETFs |

#### Sample Portfolio by Age

**Age 25 (Aggressive Growth)**

| Asset Class | Allocation | Example Funds |
|---|---|---|
| US Total Stock Market | 50% | VTI, FSKAX |
| International Stocks | 25% | VXUS, FTIHX |
| Small-Cap Value | 15% | VBR, AVUV |
| Bonds | 10% | BND, FXNAX |

**Age 35 (Moderate Growth)**

| Asset Class | Allocation | Example Funds |
|---|---|---|
| US Total Stock Market | 40% | VTI, FSKAX |
| International Stocks | 20% | VXUS, FTIHX |
| Bonds | 25% | BND, FXNAX |
| REITs | 10% | VNQ, FREL |
| Gold | 5% | GLD, IAU |

**Age 45 (Moderate Conservative)**

| Asset Class | Allocation | Example Funds |
|---|---|---|
| US Total Stock Market | 30% | VTI, FSKAX |
| International Stocks | 15% | VXUS, FTIHX |
| Bonds | 35% | BND, FXNAX |
| REITs | 10% | VNQ, FREL |
| Gold | 5% | GLD, IAU |
| Cash | 5% | High-yield savings |

---

### Step 4: Choose Your Accounts

#### The Account Selection Framework

| Income Level | Strategy |
|---|---|
| **Under $50k** | Roth IRA → 401(k) up to match → Taxable |
| **$50k-$100k** | 401(k) match → Roth IRA → 401(k) max → Taxable |
| **Over $100k** | 401(k) max → Backdoor Roth IRA → Taxable |

#### Account Types Summary

| Account | Best For | Tax Treatment |
|---|---|---|
| **401(k) with Match** | Everyone (free money!) | Pre-tax contributions |
| **Roth IRA** | Under income limit | After-tax, tax-free growth |
| **Traditional IRA** | No 401(k) access | Pre-tax, taxed on withdrawal |
| **HSA** | High-deductible health plan | Triple tax advantage |
| **Taxable Brokerage** | After maxing tax-advantaged | Capital gains on sale |

---

### Step 5: Automate Your System

#### The Automation Checklist

| What to Automate | How | When |
|---|---|---|
| Monthly contributions | Auto-transfer from checking | Same day each month |
| Dividend reinvestment | DRIP in brokerage | Automatic |
| Rebalancing | Annual or when >5% off | Calendar reminder |
| Tax-loss harvesting | Quarterly review | Review in October |

#### Sample Automated System

**Monthly on the 1st:**
- Auto-transfer $1,000 from checking to brokerage
- Auto-invest in target allocation (60% VTI, 25% VXUS, 15% BND)

**Quarterly:**
- Review portfolio allocation
- Rebalance if >5% off target
- Tax-loss harvest any positions at a loss

**Annually:**
- Full portfolio review
- Adjust allocation based on age/goals
- Max out retirement accounts

---

### Step 6: Write Your Investment Policy Statement

#### My Investment Policy Statement

**1. Goals & Time Horizon**
- Primary: Retirement in 25 years
- Secondary: House down payment in 5 years
- Risk tolerance: Moderate (can stomach 30% drawdown)

**2. Target Allocation**
- 50% US Stocks (VTI)
- 25% International Stocks (VXUS)
- 15% Bonds (BND)
- 10% REITs (VNQ)

**3. Rules**
- Invest $1,000/month on the 1st
- Rebalance annually when >5% off target
- Never sell during market crashes without consulting IPS
- Review IPS before making any changes

**4. What I Will NOT Do**
- Check portfolio more than monthly
- Chase performance or hot tips
- Try to time the market
- Invest money I need within 5 years

---

### Step 7: Execute and Monitor

#### The Execution Checklist

| Action | Frequency | Time Required |
|---|---|---|
| Invest monthly | Monthly | 5 minutes |
| Review allocation | Quarterly | 15 minutes |
| Rebalance | Annually | 30 minutes |
| Tax-loss harvest | Quarterly | 15 minutes |
| Full portfolio review | Annually | 1 hour |

#### What to Monitor

| Metric | Target | Action if Off |
|---|---|---|
| Asset allocation | Within 5% of target | Rebalance |
| Expense ratios | Under 0.20% | Switch to lower-cost funds |
| Tax efficiency | Maximize tax-advantaged space | Adjust account selection |
| Savings rate | Increasing each year | Increase contributions |

---

### Common Mistakes to Avoid

- **Mistake:** Not starting because you don't have enough — **Fix:** Start with $50/month; time in the market matters more than amount.
- **Mistake:** Overcomplicating your portfolio — **Fix:** 3-4 low-cost index funds is enough for most people.
- **Mistake:** Checking your portfolio daily — **Fix:** Check quarterly; daily checking leads to emotional decisions.
- **Mistake:** Not having a written plan — **Fix:** Write your IPS today; it's your guide during emotional times.

### Professional Tips & Tricks

- Automate everything — it removes emotion and ensures consistency.
- Keep your portfolio boring — the best investors are boring.
- Focus on savings rate, not investment returns — you control savings rate.
- Review your IPS annually, but don't change it based on market conditions.

---

### Key Takeaways

- Define your goals before designing your portfolio.
- Automate your contributions to remove emotion.
- Write an Investment Policy Statement and follow it.
- Keep your portfolio simple: 3-4 low-cost index funds.
- Focus on time in the market, not timing the market.

## 🎓 Course Completion

Congratulations! You've completed the Complete Stock Market Course. You now have the knowledge and tools to:

1. ✅ Understand how the stock market works
2. ✅ Analyze stocks using fundamental and technical analysis
3. ✅ Build a diversified portfolio
4. ✅ Invest tax-efficiently
5. ✅ Overcome behavioral biases
6. ✅ Explore alternative investments
7. ✅ Create and execute a personalized investment plan

**The best time to start investing was 20 years ago. The second best time is today.**

Start with one step: write your Investment Policy Statement and set up your first automated investment. The rest will follow.

Happy investing! 🚀📈`,
      codeLanguage: "text",
      codeSnippet: `# Your Investment Plan Template

## My Goals
1. Retirement: [Target amount] in [X] years
2. House: Down payment in [X] years
3. Emergency: [X] months of expenses saved

## My Target Allocation
- US Stocks: [%] (VTI)
- International Stocks: [%] (VXUS)
- Bonds: [%] (BND)
- REITs: [%] (VNQ)

## My Rules
1. Invest $[X] on the [1st] of each month
2. Rebalance when >[5]% off target
3. Never sell during crashes without consulting IPS
4. Review IPS before any changes

## My Automation
- Monthly: Auto-transfer $[X] from checking
- Quarterly: Review and rebalance
- Annually: Full portfolio review

## What I Will NOT Do
1. Check portfolio more than monthly
2. Chase performance
3. Time the market
4. Invest money needed within 5 years

---
Investment Policy Statement written: [Date]
Next review date: [Date]`,
      codeOutput: `# Your Investment Plan Template

## My Goals
1. Retirement: [Target amount] in [X] years
2. House: Down payment in [X] years
3. Emergency: [X] months of expenses saved

## My Target Allocation
- US Stocks: [%] (VTI)
- International Stocks: [%] (VXUS)
- Bonds: [%] (BND)
- REITs: [%] (VNQ)

## My Rules
1. Invest $[X] on the [1st] of each month
2. Rebalance when >[5]% off target
3. Never sell during crashes without consulting IPS
4. Review IPS before any changes

## My Automation
- Monthly: Auto-transfer $[X] from checking
- Quarterly: Review and rebalance
- Annually: Full portfolio review

## What I Will NOT Do
1. Check portfolio more than monthly
2. Chase performance
3. Time the market
4. Invest money needed within 5 years

---
Investment Policy Statement written: [Date]
Next review date: [Date]`,
      visualizationTips: [
        "Create a one-page Investment Policy Statement that you can print and keep on your desk.",
        "Draw a simple flowchart showing your automated investment system from paycheck to portfolio.",
        "Map out your three-bucket strategy with specific funds and amounts for each bucket.",
        "Create a quarterly review checklist to ensure you're following your plan.",
      ],
      tipsAndTricks: [
        "Keep your IPS on your desk and read it before making any investment decisions.",
        "Automate your investments on payday so you never see the money in your checking account.",
        "Focus on your savings rate, not your investment returns - you control savings rate.",
        "Start today with whatever amount you can - $50/month is better than waiting for $1,000/month.",
      ],
      practice: [
        {
          id: "practice-write-ips",
          title: "Write Your Investment Policy Statement",
          difficulty: "Hard",
          task: "Using the template provided, write your complete Investment Policy Statement. Include your goals, target allocation, rules, automation, and what you will NOT do. Print it and keep it on your desk.",
          hint: "Be specific and realistic. This document is your guide during emotional times.",
          solution: `My Investment Policy Statement

1. GOALS & TIME HORIZON
- Retirement: $1.5M in 30 years (age 60)
- House: $100K down payment in 5 years
- Emergency: 6 months expenses ($30K) saved

2. TARGET ALLOCATION
- 50% US Stocks (VTI)
- 25% International (VXUS)
- 15% Bonds (BND)
- 10% REITs (VNQ)

3. RULES
- Invest $1,000 on 1st of each month
- Rebalance when >5% off target
- Never sell during crashes without reading IPS
- Review IPS before any changes

4. AUTOMATION
- Monthly: Auto-transfer $1,000 from checking
- Quarterly: Review and rebalance
- Annually: Full portfolio review

5. WHAT I WILL NOT DO
- Check portfolio more than monthly
- Chase performance or hot tips
- Time the market
- Invest money needed within 5 years

Written: [Today's Date]
Next Review: [6 months from now]`,
        },
        {
          id: "practice-first-step",
          title: "Take Your First Step Today",
          difficulty: "Easy",
          task: "Choose one action from this list and do it today: (1) Open a brokerage account, (2) Set up automatic transfer, (3) Buy your first index fund, (4) Write your IPS. Which one will you choose?",
          hint: "The best first step is the one you'll actually do.",
          solution: `Taking the first step:

OPTION 1: Open a brokerage account
- Go to Fidelity, Vanguard, or Schwab
- Open a brokerage account (15 minutes)
- Link your bank account

OPTION 2: Set up automatic transfer
- Log into your bank
- Set up recurring transfer to brokerage
- Choose amount and frequency

OPTION 3: Buy your first index fund
- Search for VTI (Vanguard Total Stock Market)
- Enter the amount you want to invest
- Click buy

OPTION 4: Write your IPS
- Use the template from this lesson
- Fill in your goals and allocation
- Print it and keep on desk

The best first step is the one you'll actually do. Choose now and do it today.`,
        },
      ],
    },
  ],
};
