import type { Module } from "../courses";

export const MODULE_3: Module = {
  id: "module-3-portfolio-management",
  title: "Module 3: Portfolio Management & Investment Strategy",
  description:
    "Build and manage a diversified portfolio with proven strategies for long-term wealth creation.",
  lessons: [
    {
      id: "portfolio-theory",
      title: "Lesson 1: Modern Portfolio Theory & Asset Allocation",
      shortDescription:
        "Understand diversification, the efficient frontier, and how to allocate assets based on your goals and risk tolerance.",
      duration: "55 mins",
      readingTime: "11 mins read",
      contentMarkdown: `### Why Portfolio Management Matters

Even the best stock picks can fail if your portfolio isn't properly diversified. Portfolio management is the art and science of **allocating assets** to maximize returns while minimizing risk.

> **Mental model:** Think of your portfolio as a sports team — you need different players (asset classes) with different strengths to win consistently. A team of only strikers would be terrible at defending.

#### The Core Principle

**Don't put all your eggs in one basket** — but also don't spread them so thin that you can't monitor them.

---

### Modern Portfolio Theory (MPT)

Developed by Harry Markowitz (Nobel Prize, 1952), MPT shows that investors can optimize returns by combining assets that don't move in perfect correlation.

#### Key Concepts

| Concept | Definition | Practical Impact |
|---|---|---|
| **Diversification** | Combining uncorrelated assets | Reduces overall risk |
| **Efficient Frontier** | Optimal portfolios for risk/return | Maximum return per unit of risk |
| **Risk-Return Tradeoff** | Higher return = higher risk | No free lunch |
| **Correlation** | How assets move together | Lower correlation = better diversification |

#### Asset Class Correlations

| Asset Pair | Correlation | Diversification Benefit |
|---|---|---|
| US Stocks + International Stocks | ~0.7 | Moderate |
| US Stocks + Bonds | ~0.2 | High |
| US Stocks + Real Estate | ~0.6 | Moderate |
| Stocks + Commodities | ~0.3 | High |
| Bonds + Real Estate | ~0.4 | Moderate |

> **Key insight:** The magic of diversification is that combining assets with correlation less than 1.0 can actually **reduce risk without proportionally reducing returns**.

---

### Risk Tolerance Assessment

Before allocating assets, you must understand your risk tolerance:

| Factor | Conservative | Moderate | Aggressive |
|---|---|---|---|
| **Age** | 50+ | 30-50 | Under 30 |
| **Income Stability** | Variable | Stable | Stable + growing |
| **Investment Horizon** | < 5 years | 5-15 years | 15+ years |
| **Emergency Fund** | 6+ months | 3-6 months | 3-6 months |
| **Emotional Response to Loss** | Panic sell | Hold steady | Buy more |

#### The Risk Tolerance Questionnaire

Answer these to find your profile:

1. If your portfolio dropped 20% in a month, would you:
   - a) Sell everything (Conservative)
   - b) Hold and wait (Moderate)
   - c) Buy more at lower prices (Aggressive)

2. Your primary investment goal is:
   - a) Preserve capital (Conservative)
   - b) Grow wealth steadily (Moderate)
   - c) Maximize long-term growth (Aggressive)

3. Your investment timeline is:
   - a) 1-5 years (Conservative)
   - b) 5-15 years (Moderate)
   - c) 15+ years (Aggressive)

---

### Asset Allocation Models

Based on your risk tolerance, here are proven allocation models:

#### Conservative Portfolio (Low Risk)

| Asset Class | Allocation | Expected Return | Risk Level |
|---|---|---|---|
| US Large-Cap Stocks | 25% | 8-10% | Medium |
| International Stocks | 10% | 7-9% | Medium |
| Bonds (Intermediate) | 40% | 3-5% | Low |
| Real Estate (REITs) | 10% | 6-8% | Medium |
| Cash/Money Market | 15% | 2-4% | Very Low |
| **Total** | 100% | 5-7% | Low-Medium |

#### Balanced Portfolio (Medium Risk)

| Asset Class | Allocation | Expected Return | Risk Level |
|---|---|---|---|
| US Large-Cap Stocks | 35% | 8-10% | Medium |
| US Mid/Small-Cap | 10% | 9-12% | High |
| International Stocks | 15% | 7-9% | Medium |
| Bonds (Intermediate) | 25% | 3-5% | Low |
| Real Estate (REITs) | 10% | 6-8% | Medium |
| Cash/Money Market | 5% | 2-4% | Very Low |
| **Total** | 100% | 7-9% | Medium |

#### Aggressive Portfolio (High Risk)

| Asset Class | Allocation | Expected Return | Risk Level |
|---|---|---|---|
| US Large-Cap Stocks | 40% | 8-10% | Medium |
| US Mid/Small-Cap | 15% | 9-12% | High |
| International Stocks | 20% | 7-9% | Medium |
| Growth/Emerging Markets | 10% | 10-15% | Very High |
| Bonds (Short-term) | 10% | 3-5% | Low |
| Real Estate (REITs) | 5% | 6-8% | Medium |
| **Total** | 100% | 9-11% | High |

---

### The Glide Path — Adjusting Over Time

As you age, your portfolio should gradually shift from aggressive to conservative:

| Age Range | Stocks | Bonds | Rationale |
|---|---|---|---|
| 20s-30s | 80-90% | 10-20% | Long horizon, can recover from losses |
| 40s | 70-80% | 20-30% | Still growing, but protecting gains |
| 50s | 50-70% | 30-50% | Nearing retirement, reducing risk |
| 60s+ | 30-50% | 50-70% | Preserving capital, generating income |

> **Key insight:** The "Rule of 100" says subtract your age from 100 to get your stock allocation. A 30-year-old = 70% stocks; a 60-year-old = 40% stocks.

---

### Common Mistakes to Avoid

- **Mistake:** Over-concentrating in one stock or sector — **Fix:** No single position should exceed 5-10% of your portfolio.
- **Mistake:** Chasing last year's performance — **Fix:** Stick to your target allocation; don't chase hot sectors.
- **Mistake:** Ignoring fees — **Fix:** High fees compound over time; choose low-cost index funds.
- **Mistake:** Not rebalancing — **Fix:** Rebalance annually to maintain your target allocation.

### Professional Tips & Tricks

- Use low-cost index funds (Vanguard, Fidelity, Schwab) for core holdings.
- Automate contributions — dollar-cost averaging removes emotion.
- Rebalance annually or when allocation drifts more than 5% from target.
- Keep 3-6 months of expenses in cash before investing aggressively.

---

### Key Takeaways

- Diversification reduces risk without proportionally reducing returns.
- Asset allocation is the most important decision in portfolio construction.
- Match your allocation to your risk tolerance, age, and investment horizon.
- Use the glide path to gradually reduce risk as you approach retirement.
- Low-cost index funds are the foundation of most successful portfolios.

**Next up:** Dollar-cost averaging and investment strategies for different market conditions.`,
      codeLanguage: "text",
      codeSnippet: `# Portfolio Allocation Models

## Age-Based Glide Path

| Age | Stocks | Bonds | Risk Level |
|-----|--------|-------|------------|
| 25  | 75%    | 25%   | Aggressive |
| 35  | 65%    | 35%   | Growth     |
| 45  | 55%    | 45%   | Balanced   |
| 55  | 45%    | 55%   | Moderate   |
| 65  | 35%    | 65%   | Conservative |

## Sample Balanced Portfolio ($100,000)

Asset Allocation:
├── US Stocks (VTI): $35,000 (35%)
├── International (VXUS): $15,000 (15%)
├── US Mid-Cap (VO): $10,000 (10%)
├── Bonds (BND): $25,000 (25%)
├── REITs (VNQ): $10,000 (10%)
└── Cash: $5,000 (5%)

Expected Annual Return: 7-9%
Historical Max Drawdown: -25% to -35%

## Correlation Matrix (Simplified)

        Stocks  Bonds  REITs  Commodities
Stocks    1.0    0.2    0.6     0.3
Bonds     0.2    1.0    0.4    -0.1
REITs     0.6    0.4    1.0     0.4
Commod    0.3   -0.1    0.4     1.0

## Rebalancing Schedule

Review portfolio:
- Quarterly: Check allocation drift
- Annually: Full rebalance if >5% off target
- After major life events: Reassess risk tolerance`,
      codeOutput: `# Portfolio Allocation Models

## Age-Based Glide Path

| Age | Stocks | Bonds | Risk Level |
|-----|--------|-------|------------|
| 25  | 75%    | 25%   | Aggressive |
| 35  | 65%    | 35%   | Growth     |
| 45  | 55%    | 45%   | Balanced   |
| 55  | 45%    | 55%   | Moderate   |
| 65  | 35%    | 65%   | Conservative |

## Sample Balanced Portfolio ($100,000)

Asset Allocation:
├── US Stocks (VTI): $35,000 (35%)
├── International (VXUS): $15,000 (15%)
├── US Mid-Cap (VO): $10,000 (10%)
├── Bonds (BND): $25,000 (25%)
├── REITs (VNQ): $10,000 (10%)
└── Cash: $5,000 (5%)

Expected Annual Return: 7-9%
Historical Max Drawdown: -25% to -35%

## Correlation Matrix (Simplified)

        Stocks  Bonds  REITs  Commodities
Stocks    1.0    0.2    0.6     0.3
Bonds     0.2    1.0    0.4    -0.1
REITs     0.6    0.4    1.0     0.4
Commod    0.3   -0.1    0.4     1.0

## Rebalancing Schedule

Review portfolio:
- Quarterly: Check allocation drift
- Annually: Full rebalance if >5% off target
- After major life events: Reassess risk tolerance`,
      visualizationTips: [
        "Draw a pie chart of your ideal portfolio allocation — seeing it visually makes it real.",
        "Plot your portfolio's growth over 20 years using different allocations to see the compounding effect.",
        "Use a correlation heatmap to understand how your assets move together.",
      ],
      tipsAndTricks: [
        "Target-date funds automatically adjust your allocation as you age — great for hands-off investors.",
        "Rebalance when allocation drifts more than 5% from your target.",
        "Don't chase performance — what went up last year may not go up this year.",
      ],
      practice: [
        {
          id: "practice-allocation-design",
          title: "Design Your Portfolio",
          difficulty: "Medium",
          task: "Based on your age and risk tolerance, design a portfolio allocation using the models above. Explain why you chose each allocation percentage.",
          hint: "Consider your age, income stability, and when you'll need the money.",
          solution: `Example: 32-year-old, moderate risk tolerance

Portfolio Design:
- US Total Stock Market (VTI): 40%
- International Stocks (VXUS): 20%
- US Small-Cap Value (VBR): 10%
- Bonds (BND): 20%
- REITs (VNQ): 10%

Rationale:
- Long time horizon allows for growth focus (70% stocks)
- International diversification reduces US-specific risk
- Small-cap value historically outperforms over long periods
- Bonds provide stability during market downturns
- REITs add real estate exposure without buying property`,
        },
        {
          id: "practice-rebalancing",
          title: "Rebalancing Exercise",
          difficulty: "Easy",
          task: "Your target allocation is 60% stocks, 40% bonds. After a strong year, stocks grew to 70% of your portfolio. How do you rebalance? What are the tax implications?",
          hint: "Sell some stocks and buy bonds to return to 60/40. Consider tax-advantaged accounts.",
          solution: `Current: 70% stocks, 30% bonds
Target: 60% stocks, 40% bonds

Rebalancing Action:
1. Sell 10% of stocks (or enough to return to 60%)
2. Buy 10% bonds with the proceeds
3. Result: Back to 60/40 target

Tax Considerations:
- If in 401(k) or IRA: No tax implications
- If in taxable account: Selling triggers capital gains tax
- Tax-efficient approach: Direct new contributions to bonds
- Use wash-sale rule: Don't buy similar securities within 30 days`,
        },
      ],
    },
    {
      id: "dollar-cost-averaging",
      title: "Lesson 2: Dollar-Cost Averaging & Market Timing Myths",
      shortDescription:
        "Learn why consistent investing beats trying to time the market, and how to implement a systematic investment plan.",
      duration: "45 mins",
      readingTime: "9 mins read",
      contentMarkdown: `### What is Dollar-Cost Averaging (DCA)?

Dollar-cost averaging is investing a **fixed amount** at **regular intervals** regardless of market conditions. You buy more shares when prices are low and fewer when prices are high.

> **Mental model:** DCA is like a subscription to your future self — you pay the same amount each month and let the market do the work.

#### How DCA Works

| Month | Investment | Price | Shares Bought |
|---|---|---|---|
| January | $500 | $50 | 10.0 |
| February | $500 | $40 | 12.5 |
| March | $500 | $25 | 20.0 |
| April | $500 | $50 | 10.0 |
| May | $500 | $80 | 6.25 |
| June | $500 | $60 | 8.33 |
| **Total** | **$3,000** | **Avg: $50.83** | **67.08** |

**Key insight:** Your average cost per share ($50.83) is **lower** than the average price ($50.83) because you bought more shares when prices were low!

---

### Why Market Timing Fails

Market timing is trying to predict when to buy low and sell high. Studies consistently show it doesn't work:

#### The Cost of Missing the Best Days

| Scenario | 20-Year Return | Annual Return |
|---|---|---|
| Stayed fully invested | +6.1% | +6.1% |
| Missed 10 best days | +2.5% | +2.5% |
| Missed 20 best days | +0.1% | +0.1% |
| Missed 30 best days | -1.9% | -1.9% |
| Missed 40 best days | -3.6% | -3.6% |

> **Key insight:** The best days often happen right after the worst days — selling during a crash means you miss the recovery.

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

### DCA vs. Lump Sum Investing

| Method | Pros | Cons | Best For |
|---|---|---|---|
| **DCA** | Reduces timing risk, psychologically easier | May underperform in rising markets | Regular income earners |
| **Lump Sum** | Historically outperforms DCA ~67% of time | Higher timing risk, emotionally difficult | Large cash windfalls |

**The data:** According to Vanguard research, lump-sum investing beats DCA about 67% of the time. However, DCA is better for most people because:
1. It removes emotion from investing
2. It's easier to stick with during downturns
3. It aligns with how most people earn (regular paychecks)

---

### Implementing a DCA Strategy

#### Step 1: Choose Your Investment

| Investment Type | Best For | Risk Level |
|---|---|---|
| **S&P 500 Index Fund** | Core US stock exposure | Medium |
| **Total Stock Market Fund** | Broad US diversification | Medium |
| **Target-Date Fund** | Hands-off, auto-rebalancing | Varies |
| **Bond Fund** | Stability, income | Low |

#### Step 2: Set Your Amount and Frequency

| Frequency | Pros | Cons |
|---|---|---|
| **Weekly** | More DCA benefit | More transactions |
| **Bi-weekly** | Good balance | — |
| **Monthly** | Simple, aligns with paycheck | Slightly less DCA benefit |
| **Quarterly** | Fewer transactions | Less DCA benefit |

**Recommended:** Monthly, on the same day each month, regardless of market conditions.

#### Step 3: Automate It

Set up automatic contributions through your broker or 401(k). Automation removes the temptation to time the market.

---

### Common DCA Mistakes to Avoid

- **Mistake:** Stopping contributions during downturns — **Fix:** DCA works best when you buy more during crashes.
- **Mistake:** Checking your portfolio daily — **Fix:** Check quarterly; daily checking leads to emotional decisions.
- **Mistake:** Switching investments frequently — **Fix:** Stick with your plan for at least 5 years.
- **Mistake:** Investing money you'll need soon — **Fix:** Only DCA money you won't need for 5+ years.

### Professional Tips & Tricks

- Automate your investments — it removes emotion and ensures consistency.
- Increase contributions with every raise — lifestyle inflation kills wealth building.
- Use tax-advantaged accounts (401k, IRA) for DCA when possible.
- Don't try to "optimize" your DCA — the benefit is consistency, not timing.

---

### Key Takeaways

- DCA invests fixed amounts at regular intervals, reducing timing risk.
- Missing the best 10 days in 20 years cuts returns by more than half.
- Lump sum beats DCA 67% of the time, but DCA is easier to stick with.
- Automation is the key to successful DCA — remove emotion from the equation.
- Start early and stay consistent — time in the market beats timing the market.

**Next up:** Tax-efficient investing and retirement account strategies.`,
      codeLanguage: "text",
      codeSnippet: `# Dollar-Cost Averaging Calculator

## Monthly DCA Simulation

Monthly Investment: $500
Period: 12 months

| Month | Price | Shares | Total Value |
|-------|-------|--------|-------------|
| Jan   | $100  | 5.00   | $500        |
| Feb   | $90   | 5.56   | $500        |
| Mar   | $80   | 6.25   | $500        |
| Apr   | $85   | 5.88   | $500        |
| May   | $95   | 5.26   | $500        |
| Jun   | $110  | 4.55   | $500        |
| Jul   | $120  | 4.17   | $500        |
| Aug   | $105  | 4.76   | $500        |
| Sep   | $90   | 5.56   | $500        |
| Oct   | $85   | 5.88   | $500        |
| Nov   | $95   | 5.26   | $500        |
| Dec   | $100  | 5.00   | $500        |
|-------|-------|--------|-------------|
| Total | $95.42| 63.13  | $6,313      |

Your Average Cost: $6,000 ÷ 63.13 = $95.04
Market Average Price: $95.42
You SAVED: $0.38 per share (0.4%)

## Cost of Missing Best Days (S&P 500, 2003-2023)

Strategy              | 20-Year Return
Fully Invested        | +6.1% annually
Miss 10 Best Days     | +2.5% annually  
Miss 20 Best Days     | +0.1% annually
Miss 30 Best Days     | -1.9% annually

## Recovery Required After Losses

| Loss  | Gain to Break Even |
|-------|-------------------|
| -10%  | +11%              |
| -20%  | +25%              |
| -30%  | +43%              |
| -40%  | +67%              |
| -50%  | +100%             |`,
      codeOutput: `# Dollar-Cost Averaging Calculator

## Monthly DCA Simulation

Monthly Investment: $500
Period: 12 months

| Month | Price | Shares | Total Value |
|-------|-------|--------|-------------|
| Jan   | $100  | 5.00   | $500        |
| Feb   | $90   | 5.56   | $500        |
| Mar   | $80   | 6.25   | $500        |
| Apr   | $85   | 5.88   | $500        |
| May   | $95   | 5.26   | $500        |
| Jun   | $110  | 4.55   | $500        |
| Jul   | $120  | 4.17   | $500        |
| Aug   | $105  | 4.76   | $500        |
| Sep   | $90   | 5.56   | $500        |
| Oct   | $85   | 5.88   | $500        |
| Nov   | $95   | 5.26   | $500        |
| Dec   | $100  | 5.00   | $500        |
|-------|-------|--------|-------------|
| Total | $95.42| 63.13  | $6,313      |

Your Average Cost: $6,000 ÷ 63.13 = $95.04
Market Average Price: $95.42
You SAVED: $0.38 per share (0.4%)

## Cost of Missing Best Days (S&P 500, 2003-2023)

Strategy              | 20-Year Return
Fully Invested        | +6.1% annually
Miss 10 Best Days     | +2.5% annually  
Miss 20 Best Days     | +0.1% annually
Miss 30 Best Days     | -1.9% annually

## Recovery Required After Losses

| Loss  | Gain to Break Even |
|-------|-------------------|
| -10%  | +11%              |
| -20%  | +25%              |
| -30%  | +43%              |
| -40%  | +67%              |
| -50%  | +100%             |`,
      visualizationTips: [
        "Plot your DCA purchases on a price chart — see how you bought more shares during dips.",
        "Calculate your average cost vs. the market average price after 12 months.",
        "Visualize the compounding effect of consistent investing over 20+ years.",
      ],
      tipsAndTricks: [
        "Automate your investments — it removes emotion and ensures consistency.",
        "Increase contributions with every raise — lifestyle inflation kills wealth building.",
        "Don't check your portfolio daily — check quarterly to avoid emotional decisions.",
      ],
      practice: [
        {
          id: "practice-dca-calculation",
          title: "DCA Calculator",
          difficulty: "Easy",
          task: "You invest $300/month into an S&P 500 index fund for 6 months. Prices are: $400, $350, $300, $320, $380, $400. Calculate: (1) Total shares bought, (2) Your average cost per share, (3) Current portfolio value.",
          hint: "Shares = Investment ÷ Price for each month. Average cost = Total invested ÷ Total shares.",
          solution: `Month 1: $300 ÷ $400 = 0.75 shares
Month 2: $300 ÷ $350 = 0.86 shares
Month 3: $300 ÷ $300 = 1.00 shares
Month 4: $300 ÷ $320 = 0.94 shares
Month 5: $300 ÷ $380 = 0.79 shares
Month 6: $300 ÷ $400 = 0.75 shares

Total Invested: $1,800
Total Shares: 5.09
Average Cost: $1,800 ÷ 5.09 = $353.63
Market Average: $358.33
Portfolio Value at $400: 5.09 × $400 = $2,036

You beat the market by $4.70 per share!`,
        },
        {
          id: "practice-timing-cost",
          title: "Market Timing Cost Calculator",
          difficulty: "Medium",
          task: "If you had $12,000 to invest in January 2020, but waited until March 2020 (market bottom) to invest, you would have missed the 30% recovery. Calculate the opportunity cost over 4 years assuming 10% annual returns from the bottom.",
          hint: "Compare investing $12,000 in Jan 2020 vs. March 2020 with 4 years of 10% returns.",
          solution: `Scenario A: Invest in January 2020
- Initial: $12,000
- Market dropped 30% by March: $8,400
- Recovery + growth (10% annually for 4 years):
  $12,000 × (1.10)^4 = $17,569

Scenario B: Wait until March 2020 (bottom)
- Invest at bottom: $12,000
- Growth (10% annually for 4 years from bottom):
  $12,000 × (1.10)^4 = $17,569

Wait, they're the same? Let's recalculate:
- If you held cash in Jan 2020, you missed the drop BUT also missed the recovery
- By March 2020, the market was down 30%, so $12,000 bought 30% more shares
- From March 2020 bottom to March 2024: market up ~150%
- $12,000 at bottom = $30,000 after 4 years
- vs. $12,000 in Jan 2020 = $17,569 after 4 years

Lesson: Market timing CAN work if you're perfect, but most people sell at the bottom and buy at the top.`,
        },
      ],
    },
    {
      id: "tax-efficient-investing",
      title: "Lesson 3: Tax-Efficient Investing & Retirement Accounts",
      shortDescription:
        "Maximize your after-tax returns by understanding tax-advantaged accounts, tax-loss harvesting, and asset location strategies.",
      duration: "50 mins",
      readingTime: "10 mins read",
      contentMarkdown: `### Why Tax Efficiency Matters

A dollar saved in taxes is a dollar earned — tax-free. Smart tax planning can add 1-2% to your annual returns, which compounds to a massive difference over decades.

> **Mental model:** Think of taxes as a leak in your investment bucket — the smaller the leak, the more water (money) you keep.

#### The Power of Tax-Deferred Growth

| Scenario | Annual Return | Taxes (25%) | After-Tax Return | 30-Year Value ($10,000) |
|---|---|---|---|---|
| Taxable Account | 8% | 2% | 6% | $57,435 |
| Tax-Deferred (401k/IRA) | 8% | 0% | 8% | $100,627 |
| Roth IRA | 8% | 0% | 8% | $100,627 (tax-free) |

**Tax-deferred growth nearly doubles your money over 30 years!**

---

### Retirement Account Types

#### Traditional vs. Roth Accounts

| Feature | Traditional 401k/IRA | Roth 401k/IRA |
|---|---|---|
| **Contributions** | Pre-tax (reduces taxable income now) | After-tax (no deduction now) |
| **Growth** | Tax-deferred | Tax-free |
| **Withdrawals** | Taxed as ordinary income | Tax-free (if qualified) |
| **Best When** | Higher tax bracket now | Lower tax bracket now |
| **Required Distributions** | Yes, at age 73 | No RMDs for original owner |

#### Contribution Limits (2024)

| Account | Under 50 | 50 and Over |
|---|---|---|
| **401(k)** | $23,000 | $30,500 |
| **Traditional/Roth IRA** | $7,000 | $8,000 |
| **SEP IRA** | $69,000 | $69,000 |
| **HSA** | $4,150 (individual) | $4,150 + $1,000 catch-up |

---

### The Order of Operations for Tax Efficiency

Follow this priority list to maximize tax benefits:

| Priority | Account | Why First |
|---|---|---|
| **1** | 401(k) up to employer match | Free money — 100% instant return |
| **2** | HSA (if eligible) | Triple tax advantage |
| **3** | Roth IRA (if eligible) | Tax-free growth and withdrawals |
| **4** | 401(k) up to maximum | Additional tax-deferred growth |
| **5** | Taxable brokerage | Only after maxing tax-advantaged |

---

### Asset Location Strategy

Where you hold investments matters as much as what you hold:

| Asset Type | Best Location | Why |
|---|---|---|
| **Bonds/Fixed Income** | Tax-deferred (401k/IRA) | Interest taxed as ordinary income |
| **High-Growth Stocks** | Roth IRA | Tax-free appreciation |
| **Dividend Stocks** | Tax-deferred | Dividends taxed less in retirement |
| **Index Funds** | Taxable brokerage | Low turnover, tax-efficient |
| **REITs** | Tax-deferred | Dividends taxed as ordinary income |

> **Key insight:** Put your most tax-inefficient investments in tax-advantaged accounts and your most tax-efficient investments in taxable accounts.

---

### Tax-Loss Harvesting

Selling investments at a loss to offset gains and reduce taxes.

#### How It Works

| Step | Action | Tax Impact |
|---|---|---|
| 1 | Sell losing investment | Realize $5,000 loss |
| 2 | Offset gains | Reduce taxable gains by $5,000 |
| 3 | Extra losses | Up to $3,000 can offset ordinary income |
| 4 | Carry forward | Unused losses carry to future years |
| 5 | Repurchase | Buy similar (not identical) investment |

#### Tax-Loss Harvesting Rules

| Rule | Explanation |
|---|---|
| **Wash Sale Rule** | Can't buy "substantially identical" security within 30 days |
| **$3,000 Limit** | Can only deduct $3,000 of losses against ordinary income per year |
| **Long-term vs. Short-term** | Long-term losses offset long-term gains first |
| **Carry Forward** | Unused losses carry forward indefinitely |

---

### Capital Gains Tax Rates

| Holding Period | Tax Rate | Example |
|---|---|---|
| **Short-term (< 1 year)** | Ordinary income rates (10-37%) | $50,000 gain taxed at 22% = $11,000 |
| **Long-term (> 1 year)** | 0%, 15%, or 20% | $50,000 gain taxed at 15% = $7,500 |

**Holding for at least 1 year saves you thousands in taxes!**

#### Long-Term Capital Gains Brackets (2024)

| Filing Status | 0% Rate | 15% Rate | 20% Rate |
|---|---|---|---|
| Single | Up to $47,025 | $47,025 - $518,900 | Over $518,900 |
| Married Filing Jointly | Up to $94,050 | $94,050 - $583,750 | Over $583,750 |

---

### Common Tax Mistakes to Avoid

- **Mistake:** Not maximizing employer 401(k) match — **Fix:** Always contribute enough to get the full match — it's free money.
- **Mistake:** Holding investments for less than 1 year — **Fix:** Be patient; long-term rates are much lower.
- **Mistake:** Ignoring asset location — **Fix:** Put tax-inefficient assets in tax-advantaged accounts.
- **Mistake:** Not tax-loss harvesting — **Fix:** Review your portfolio quarterly for harvesting opportunities.

### Professional Tips & Tricks

- Use tax-loss harvesting software (Wealthfront, Betterment) to automate the process.
- Don't let the tax tail wag the investment dog — good investments beat tax optimization.
- Consider a backdoor Roth IRA if you exceed income limits.
- Work with a tax professional for complex situations.

---

### Key Takeaways

- Tax-deferred accounts can nearly double your money over 30 years.
- Follow the order of operations: 401(k) match → HSA → Roth IRA → 401(k) max → Taxable.
- Asset location matters: put tax-inefficient assets in tax-advantaged accounts.
- Tax-loss harvesting can save thousands in taxes each year.
- Hold investments for at least 1 year to qualify for lower long-term capital gains rates.

**Next up:** Behavioral finance — understanding and overcoming the psychology that derails investors.`,
      codeLanguage: "text",
      codeSnippet: `# Tax-Efficient Investing Cheat Sheet

## Account Priority Order

1. 401(k) up to employer match (FREE MONEY!)
2. HSA (Triple tax advantage)
3. Roth IRA (Tax-free growth)
4. 401(k) to maximum
5. Taxable brokerage

## Asset Location Guide

| Asset Type | Best Account |
|------------|--------------|
| Bonds/Fixed Income | 401(k)/IRA |
| High-Growth Stocks | Roth IRA |
| Dividend Stocks | 401(k)/IRA |
| Index Funds | Taxable Brokerage |
| REITs | 401(k)/IRA |

## Tax-Loss Harvesting Rules

✓ Sell losing positions to offset gains
✓ Up to $3,000 losses offset ordinary income
✓ Unused losses carry forward indefinitely
✗ Don't buy same security within 30 days (Wash Sale)

## Capital Gains Tax Rates

| Holding Period | Tax Rate |
|----------------|----------|
| < 1 year       | 10-37%   |
| > 1 year       | 0-20%    |

## 30-Year Tax Impact ($10,000 at 8%)

| Account Type | After-Tax Value |
|--------------|-----------------|
| Taxable      | $57,435         |
| Tax-Deferred | $100,627        |
| Roth         | $100,627        |

Difference: $43,192 (75% more with tax advantage!)`,
      codeOutput: `# Tax-Efficient Investing Cheat Sheet

## Account Priority Order

1. 401(k) up to employer match (FREE MONEY!)
2. HSA (Triple tax advantage)
3. Roth IRA (Tax-free growth)
4. 401(k) to maximum
5. Taxable brokerage

## Asset Location Guide

| Asset Type | Best Account |
|------------|--------------|
| Bonds/Fixed Income | 401(k)/IRA |
| High-Growth Stocks | Roth IRA |
| Dividend Stocks | 401(k)/IRA |
| Index Funds | Taxable Brokerage |
| REITs | 401(k)/IRA |

## Tax-Loss Harvesting Rules

✓ Sell losing positions to offset gains
✓ Up to $3,000 losses offset ordinary income
✓ Unused losses carry forward indefinitely
✗ Don't buy same security within 30 days (Wash Sale)

## Capital Gains Tax Rates

| Holding Period | Tax Rate |
|----------------|----------|
| < 1 year       | 10-37%   |
| > 1 year       | 0-20%    |

## 30-Year Tax Impact ($10,000 at 8%)

| Account Type | After-Tax Value |
|--------------|-----------------|
| Taxable      | $57,435         |
| Tax-Deferred | $100,627        |
| Roth         | $100,627        |

Difference: $43,192 (75% more with tax advantage!)`,
      visualizationTips: [
        "Compare the growth of $10,000 in taxable vs. tax-deferred accounts over 30 years.",
        "Map out which investments go in which accounts using the asset location guide.",
        "Calculate your current tax savings from maximizing 401(k) contributions.",
      ],
      tipsAndTricks: [
        "Always contribute enough to get the full 401(k) match — it's an instant 100% return.",
        "Use tax-loss harvesting software to automate the process.",
        "Consider a backdoor Roth IRA if you exceed income limits.",
      ],
      practice: [
        {
          id: "practice-account-selection",
          title: "Account Selection Exercise",
          difficulty: "Medium",
          task: "You have $15,000 to invest and access to: 401(k) with 4% match, Roth IRA, and taxable brokerage. Your employer matches 100% up to 4% of salary ($60,000 salary = $2,400 match). How do you allocate?",
          hint: "Follow the priority order: 401(k) match → HSA → Roth IRA → 401(k) max → Taxable",
          solution: `Allocation Strategy:

1. 401(k): $2,400 (gets full $2,400 match)
   - Your contribution: $2,400
   - Employer match: $2,400
   - Total: $4,800

2. HSA (if eligible): $4,150
   - Triple tax advantage

3. Roth IRA: $7,000
   - Tax-free growth

4. Remaining to taxable: $1,450

Total invested: $15,000
Total with match: $17,400 (16% instant return!)

Tax savings (estimated):
- 401(k) deduction: $2,400 × 22% = $528
- HSA deduction: $4,150 × 22% = $913
- Total tax savings: $1,441`,
        },
        {
          id: "practice-tax-loss-harvest",
          title: "Tax-Loss Harvesting Scenario",
          difficulty: "Easy",
          task: "You bought 100 shares of Stock A at $50 ($5,000). It's now at $40 ($4,000). You also sold Stock B for a $3,000 gain. How do you harvest the loss? What are the tax implications?",
          hint: "Sell Stock A to realize the loss, offset Stock B's gain, and buy a similar (not identical) stock.",
          solution: `Tax-Loss Harvesting:

1. Sell Stock A: 100 shares at $40 = $4,000
   - Realized loss: $5,000 - $4,000 = $1,000

2. Offset Stock B gain:
   - Stock B gain: $3,000
   - After Stock A loss: $3,000 - $1,000 = $2,000 net gain

3. Tax impact (assuming 15% long-term rate):
   - Without harvesting: $3,000 × 15% = $450 tax
   - With harvesting: $2,000 × 15% = $300 tax
   - Tax saved: $150

4. Repurchase strategy:
   - Buy Stock C (similar sector, not identical to Stock A)
   - Avoid wash sale (don't buy Stock A within 30 days)

Net result: $150 tax saved, maintained market exposure`,
        },
      ],
    },
  ],
};
