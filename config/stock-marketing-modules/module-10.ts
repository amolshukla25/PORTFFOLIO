import type { Module } from "../courses";

export const MODULE_10: Module = {
  id: "module-10-risk-management",
  title: "Module 10: Risk Management & Capital Preservation",
  description:
    "Master portfolio risk management, understand different types of investment risk, learn hedging strategies, and build a framework for protecting capital during market crises.",
  lessons: [
    {
      id: "understanding-investment-risk",
      title: "Lesson 1: Understanding Investment Risk — Types, Measurement & Management",
      shortDescription:
        "Identify the different types of investment risk, learn how to measure them, and understand why risk management is the most important skill in investing.",
      duration: "55 mins",
      readingTime: "11 mins read",
      contentMarkdown: `### The Truth About Risk and Return

The relationship between risk and return is the fundamental law of investing. Higher potential returns require accepting higher risk — but the key is managing risk intelligently, not avoiding it.

> **Mental model:** Risk management is like a seatbelt — you hope you never need it, but when you do, it saves your financial life. The time to put it on is before the crash, not during.

---

### The Types of Investment Risk

#### 1. Market Risk (Systematic Risk)

Risk that affects the entire market — cannot be diversified away.

| Event | Impact | Example |
|---|---|---|
| **Recession** | -30% to -50% | 2008 Financial Crisis |
| **Pandemic** | -30%+ | 2020 COVID Crash |
| **Interest Rate Hikes** | -10% to -20% | 2022 Rate Cycle |
| **Geopolitical Crisis** | -10% to -25% | Wars, sanctions |

> **Key insight:** You cannot avoid market risk, but you can manage it through position sizing and asset allocation.

#### 2. Company-Specific Risk (Unsystematic Risk)

Risk unique to a single company — can be diversified away.

| Risk Type | Example | Mitigation |
|---|---|---|
| **Management failure** | CEO fraud (Enron) | Diversify across companies |
| **Product failure** | Recall, failed drug trial | Diversify across sectors |
| **Competitive disruption** | Nokia vs. iPhone | Focus on moat durability |
| **Legal/regulatory** | Lawsuits, fines | Monitor 10-K risk factors |

#### 3. Sector Risk

Risk that affects an entire sector.

| Sector | Key Risks | Historical Drawdown |
|---|---|---|
| **Technology** | Regulation, competition, interest rates | -35% (2022) |
| **Energy** | Oil price collapse, transition risk | -55% (2020) |
| **Financials** | Credit crisis, regulation | -80% (2008) |
| **Healthcare** | Drug patent cliffs, regulation | -25% (2016) |

#### 4. Currency Risk

Risk from exchange rate fluctuations for international investments.

| Currency Move | Impact on US Investor |
|---|---|
| Dollar strengthens | International stocks lose value (in USD) |
| Dollar weakens | International stocks gain value (in USD) |
| Hedging | Removes currency risk but costs money |

#### 5. Interest Rate Risk

Risk from changes in interest rates.

| Rate Change | Impact on Stocks | Impact on Bonds |
|---|---|---|
| **Rates rise** | Negative (higher discount rate) | Negative (prices fall) |
| **Rates fall** | Positive (lower discount rate) | Positive (prices rise) |
| **Rates stable** | Neutral | Neutral |

#### 6. Liquidity Risk

Risk that you can't sell an investment quickly at a fair price.

| Asset Type | Liquidity Risk |
|---|---|
| Large-cap stocks | Very Low |
| Small-cap stocks | Low-Medium |
| Bonds | Medium |
| Real estate | High |
| Private equity | Very High |

---

### Measuring Risk

#### 1. Standard Deviation (Volatility)

How much a stock's returns vary from its average.

| Volatility Level | Annual Std Dev | Example |
|---|---|---|
| Low | 10-15% | Utilities, consumer staples |
| Medium | 15-25% | S&P 500, large-cap stocks |
| High | 25-40% | Small-cap stocks, emerging markets |
| Very High | 40%+ | Individual stocks, crypto |

#### 2. Beta

How much a stock moves relative to the market.

| Beta | Interpretation | Example |
|---|---|---|
| 0.0 | No correlation with market | Cash |
| 0.5 | Half as volatile as market | Utilities |
| 1.0 | Moves with market | S&P 500 index fund |
| 1.5 | 50% more volatile than market | Growth tech stocks |
| 2.0+ | Twice as volatile as market | Leveraged ETFs |

#### 3. Maximum Drawdown

The largest peak-to-trough decline.

| Asset | Max Drawdown | Recovery Time |
|---|---|---|
| **S&P 500** | -56% (2008-09) | 4 years |
| **NASDAQ** | -78% (2000-02) | 15 years |
| **Bitcoin** | -77% (2022) | 2 years |
| **Small-Cap Stocks** | -60% (2008-09) | 4 years |

> **Key insight:** Understanding maximum drawdown tells you how much pain you need to endure. If you can't stomach a 50% decline, you shouldn't be 100% in stocks.

#### 4. Value at Risk (VaR)

The maximum expected loss over a given time period with a given confidence level.

| Confidence | Time Period | S&P 500 VaR | Meaning |
|---|---|---|---|
| 95% | 1 Day | -2.0% | 95% chance of losing less than 2% in a day |
| 99% | 1 Month | -12% | 99% chance of losing less than 12% in a month |

---

### Risk Management Framework

#### Step 1: Know Your Risk Tolerance

| Factor | Conservative | Moderate | Aggressive |
|---|---|---|---|
| **Max Drawdown Tolerance** | -15% | -30% | -50% |
| **Investment Horizon** | < 5 years | 5-15 years | 15+ years |
| **Income Needs** | High (current) | Medium | Low (future) |
| **Emotional Response** | Panic at -10% | Hold at -20% | Buy at -30% |

#### Step 2: Set Your Risk Budget

| Risk Budget | Maximum Allocation | Why |
|---|---|---|
| **Single Stock** | 5-10% | Avoid concentration risk |
| **Single Sector** | 20-25% | Avoid sector risk |
| **Single Country** | 60-70% | Avoid home country risk |
| **High Volatility Assets** | 20-30% | Limit overall portfolio risk |

#### Step 3: Implement Risk Controls

| Control | How It Works | When to Use |
|---|---|---|
| **Stop Loss** | Auto-sell at a price | Individual stock positions |
| **Position Sizing** | Limit per-stock risk | Always |
| **Asset Allocation** | Mix stocks/bonds/cash | Always |
| **Rebalancing** | Return to target weights | Annually |
| **Diversification** | Spread across sectors/countries | Always |

---

### The Risk Management Checklist

Before EVERY investment decision:

| Check | Question | Action if No |
|---|---|---|
| **Diversification** | Does this add diversification? | Reconsider |
| **Position Size** | Is this <10% of portfolio? | Reduce |
| **Risk/Reward** | Is expected return >2x expected risk? | Reconsider |
| **Stop Loss** | Do I know where I'll exit if wrong? | Set one |
| **Time Horizon** | Can I hold this for 5+ years? | Reconsider |
| **Thesis** | Can I explain why this will go up? | Do more research |

---

### Common Risk Management Mistakes

- **Mistake:** Ignoring risk because stocks always go up — **Fix:** They don't; prepare for drawdowns.
- **Mistake:** Over-concentrating in "sure things" — **Fix:** No stock is a sure thing.
- **Mistake:** Not having a stop loss — **Fix:** Define your exit before you enter.
- **Mistake:** Taking too much risk for too little return — **Fix:** Ensure risk/reward is favorable.
- **Mistake:** Ignoring correlation — **Fix:** Diversify across uncorrelated assets.

### Professional Tips & Tricks

- The first rule of investing: don't lose money. The second rule: don't forget the first.
- Position sizing is the most important risk management tool — it determines your downside.
- During market crashes, the best risk management is having cash to buy quality stocks on sale.
- Track your portfolio's maximum drawdown — it tells you how much risk you're really taking.

---

### Key Takeaways

- Risk comes in many forms: market, company, sector, currency, interest rate, and liquidity.
- Standard deviation, beta, and maximum drawdown are key risk metrics.
- Know your risk tolerance — it determines your asset allocation.
- Position sizing (5-10% max per stock) is the most important risk control.
- Diversification reduces company-specific but not market risk.
- Always define your exit before you enter a position.

**Next up:** Hedging strategies and crisis management.`,
      codeLanguage: "text",
      codeSnippet: `# Risk Management Toolkit

## Risk Types Summary

Risk Type        | Diversifiable? | Measurement     | Mitigation
-----------------|----------------|-----------------|------------------
Market Risk      | No             | Beta, Std Dev   | Asset allocation
Company Risk     | Yes            | Stock volatility| Diversification
Sector Risk      | Partially      | Sector drawdown | Sector allocation
Currency Risk    | Yes            | FX correlation  | Hedging
Interest Rate    | Partially      | Duration        | Bond laddering
Liquidity Risk   | Yes            | Bid-ask spread  | Avoid illiquid

## Risk Metrics Cheat Sheet

Metric           | Formula/Source            | Target
-----------------|---------------------------|------------------
Volatility       | Annual standard deviation | < 15% for conservative
Beta             | Covariance / Variance     | 0.8-1.2 for balanced
Max Drawdown     | Peak-to-trough decline    | < 30% for moderate
Sharpe Ratio     | (Return - Rf) / Volatility| > 0.7 is good
Sortino Ratio    | (Return - Rf) / Downside Vol| > 1.0 is good

## Position Sizing Rules

Portfolio Size | Max per Stock | Max Risk per Trade
---------------|---------------|-------------------
$10,000        | $1,000 (10%)  | $100 (1%)
$50,000        | $5,000 (10%)  | $500 (1%)
$100,000       | $10,000 (10%) | $1,000 (1%)

## Risk Budget Allocation

Single Stock:    ≤ 10% of portfolio
Single Sector:   ≤ 25% of portfolio
Single Country:  ≤ 70% of portfolio
High Volatility: ≤ 30% of portfolio
Cash Buffer:     5-10% of portfolio`,
      codeOutput: `# Risk Management Toolkit

## Risk Types Summary

Risk Type        | Diversifiable? | Measurement     | Mitigation
-----------------|----------------|-----------------|------------------
Market Risk      | No             | Beta, Std Dev   | Asset allocation
Company Risk     | Yes            | Stock volatility| Diversification
Sector Risk      | Partially      | Sector drawdown | Sector allocation
Currency Risk    | Yes            | FX correlation  | Hedging
Interest Rate    | Partially      | Duration        | Bond laddering
Liquidity Risk   | Yes            | Bid-ask spread  | Avoid illiquid

## Risk Metrics Cheat Sheet

Metric           | Formula/Source            | Target
-----------------|---------------------------|------------------
Volatility       | Annual standard deviation | < 15% for conservative
Beta             | Covariance / Variance     | 0.8-1.2 for balanced
Max Drawdown     | Peak-to-trough decline    | < 30% for moderate
Sharpe Ratio     | (Return - Rf) / Volatility| > 0.7 is good
Sortino Ratio    | (Return - Rf) / Downside Vol| > 1.0 is good

## Position Sizing Rules

Portfolio Size | Max per Stock | Max Risk per Trade
---------------|---------------|-------------------
$10,000        | $1,000 (10%)  | $100 (1%)
$50,000        | $5,000 (10%)  | $500 (1%)
$100,000       | $10,000 (10%) | $1,000 (1%)

## Risk Budget Allocation

Single Stock:    ≤ 10% of portfolio
Single Sector:   ≤ 25% of portfolio
Single Country:  ≤ 70% of portfolio
High Volatility: ≤ 30% of portfolio
Cash Buffer:     5-10% of portfolio`,
      visualizationTips: [
        "Create a risk matrix plotting each risk type by probability and impact.",
        "Build a drawdown chart showing historical portfolio declines and recovery times.",
        "Plot a risk budget dashboard showing current vs. target allocations."
      ],
      tipsAndTricks: [
        "Position sizing is the most important risk management tool.",
        "During crashes, having cash to buy quality stocks is the best risk management.",
        "Track your portfolio's maximum drawdown — it reveals your true risk.",
        "Always define your exit before you enter a position."
      ],
      practice: [
        {
          id: "practice-risk-assessment",
          title: "Portfolio Risk Assessment",
          difficulty: "Medium",
          task: "Assess the risk of a portfolio with: 40% AAPL, 25% TSLA, 20% NVDA, 15% BTC. Identify all risk types present and calculate the maximum single-stock and single-sector concentration.",
          hint: "Consider market risk, company risk, sector risk, and correlation between holdings.",
          solution: `Portfolio Risk Assessment:

Current Allocation:
- AAPL: 40% (Technology)
- TSLA: 25% (Consumer Discretionary / Tech)
- NVDA: 20% (Technology)
- BTC: 15% (Cryptocurrency)

Risk Analysis:

1. CONCENTRATION RISK (SEVERE):
   - Single stock max: 40% (AAPL) → VIOLATES 10% rule
   - Technology sector: 40% + 20% + ~10% (TSLA) = 70% → VIOLATES 25% rule
   - This portfolio is essentially a tech bet

2. MARKET RISK:
   - Beta estimate: ~1.5-2.0 (very volatile)
   - Expected drawdown in crash: -50% to -70%
   - 100% equity (no bonds/cash for stability)

3. COMPANY-SPECIFIC RISK:
   - Only 3 stocks + 1 crypto = extreme concentration
   - Any single company failure could devastate portfolio

4. SECTOR RISK:
   - 70%+ in technology/AI
   - If tech sector drops 30%, portfolio drops ~21% just from sector

5. VOLATILITY RISK:
   - BTC volatility: ~60-80% annually
   - TSLA volatility: ~50-60% annually
   - Portfolio volatility estimate: ~45-55%

Maximum Drawdown Estimate: -60% to -75%

RECOMMENDATION: This portfolio is extremely risky. Diversify across sectors and asset classes. No single stock >10%, no single sector >25%.`
        },
        {
          id: "practice-risk-budget",
          title: "Risk Budget Exercise",
          difficulty: "Easy",
          task: "You have a $200,000 portfolio with moderate risk tolerance (max -30% drawdown). Design a risk budget that allocates risk across asset classes, sectors, and individual positions.",
          hint: "Use the 10% rule for single stocks and 25% rule for sectors.",
          solution: `Risk Budget for $200,000 (Moderate Risk):

Asset Allocation Risk Budget:
├── US Stocks (50%): $100,000
│   ├── Max single stock: $20,000 (10%)
│   ├── Max single sector: $50,000 (25%)
│   └── Min 15-20 individual stocks
├── International Stocks (25%): $50,000
│   ├── Max single country: $15,000 (7.5%)
│   └── Use ETFs for diversification
├── Bonds (20%): $40,000
│   ├── Max single bond: $10,000 (5%)
│   └── Prefer bond funds for diversification
└── Alternatives (5%): $10,000
    ├── Max single position: $5,000 (2.5%)
    └── REITs, gold, or crypto

Risk Controls:
1. No single stock > $20,000 (10%)
2. No single sector > $50,000 (25%)
3. No single country > $60,000 (30%)
4. Cash buffer: $10,000 (5%) for opportunities
5. Maximum drawdown target: -25% to -30%

Stress Test Results:
- 2008-like crash (-50% stocks): Portfolio drops ~22%
- Interest rate spike (-10% bonds): Portfolio drops ~2%
- Combined scenario: Portfolio drops ~24%

This portfolio stays within the -30% max drawdown tolerance.`
        }
      ]
    },
    {
      id: "hedging-and-protection",
      title: "Lesson 2: Hedging Strategies — Protecting Your Portfolio",
      shortDescription:
        "Learn practical hedging strategies including diversification, options hedging, inverse ETFs, and portfolio insurance to protect against market downturns.",
      duration: "55 mins",
      readingTime: "11 mins read",
      contentMarkdown: `### What Is Hedging?

Hedging is taking an offsetting position to reduce the risk of adverse price movements. Think of it as buying insurance for your portfolio.

> **Mental model:** Hedging is like buying car insurance — you pay a small premium to protect against a large loss. You hope you never need it, but you're glad you have it when you do.

---

### Hedging Strategy 1: Diversification

The simplest and most effective hedge — own assets that don't move together.

| Diversification Level | What It Protects Against |
|---|---|
| **Across stocks** | Company-specific risk |
| **Across sectors** | Sector-specific risk |
| **Across asset classes** | Market risk (partially) |
| **Across geographies** | Country-specific risk |

#### The 60/40 Portfolio as a Hedge

| Component | Allocation | Purpose |
|---|---|---|
| **Stocks (60%)** | Growth engine | Long-term returns |
| **Bonds (40%)** | Stability anchor | Reduce drawdowns |

**Historical Performance:**

| Year | S&P 500 | 60/40 Portfolio | Difference |
|---|---|---|---|
| **2008** | -37% | -15% | +22% |
| **2020** | +18% | +14% | -4% |
| **2022** | -18% | -12% | +6% |
| **Average** | +10% | +8% | -2% |

> **Key insight:** The 60/40 portfolio sacrifices ~2% annual return but reduces drawdowns by 30-50%. That's a good trade-off for many investors.

---

### Hedging Strategy 2: Cash as a Hedge

Holding cash provides two benefits:

| Benefit | How It Works |
|---|---|
| **Downside protection** | Cash doesn't lose value during crashes |
| **Dry powder** | Cash to buy stocks when they're cheap |

#### The Cash Buffer Strategy

| Market Condition | Cash Allocation | Purpose |
|---|---|---|
| **Normal markets** | 5% | Emergency buffer |
| **Overvalued markets** | 10-15% | Building dry powder |
| **After a crash** | 0-3% | Deployed into cheap stocks |

---

### Hedging Strategy 3: Bond Laddering

Buying bonds with different maturity dates to manage interest rate risk.

| Maturity | Yield | Risk | Best For |
|---|---|---|---|
| **1-2 years** | 4.5% | Very Low | Short-term needs |
| **3-5 years** | 4.2% | Low | Medium-term needs |
| **7-10 years** | 4.0% | Medium | Long-term stability |
| **20+ years** | 4.3% | High | Maximum income |

---

### Hedging Strategy 4: Defensive Sector Rotation

Overweighting defensive sectors during uncertain times.

| Defensive Sector | Why It's Defensive | Typical Drawdown in Crash |
|---|---|---|
| **Consumer Staples** | People always need food, hygiene | -20% (vs -50% market) |
| **Healthcare** | People always need medicine | -25% (vs -50% market) |
| **Utilities** | People always need electricity | -30% (vs -50% market) |

---

### Hedging Strategy 5: Options Hedging (Protective Puts)

Buying put options on your holdings to limit downside.

| Strategy | Cost | Protection | Best For |
|---|---|---|---|
| **Protective Put** | Premium (1-3%) | Limits loss to strike price | Large individual positions |
| **Collar** | Net zero (sell call, buy put) | Limits both upside and downside | Income-focused hedging |
| **Portfolio Put** | Premium on SPY puts | Protects entire portfolio | Broad market hedging |

#### Protective Put Example

| Component | Details |
|---|---|
| **Stock owned** | 100 shares of AAPL at $175 |
| **Put purchased** | 1 contract, $170 strike, 3-month expiry |
| **Put cost** | $500 (5 points × 100 shares) |
| **Maximum loss** | $1,000 (stock loss) + $500 (put cost) = $1,500 |
| **Maximum gain** | Unlimited (stock upside minus put cost) |

> **Key insight:** Options hedging is like insurance — it costs money but limits your downside. Only hedge when you believe the risk of a decline is high.

---

### Hedging Strategy 6: Inverse ETFs

ETFs that move in the opposite direction of their benchmark.

| Inverse ETF | Tracks | Use Case |
|---|---|---|
| **SH** | S&P 500 (-1x) | Short-term market hedge |
| **SDS** | S&P 500 (-2x) | Aggressive short-term hedge |
| **QID** | NASDAQ (-2x) | Tech-specific hedge |
| **TBT** | 20+ Year Treasury (-2x) | Interest rate hedge |

**Warning:** Inverse ETFs are designed for short-term use only. Due to daily rebalancing, they lose value over time (volatility decay).

---

### Hedging Strategy 7: Dollar-Cost Averaging into Downturns

Instead of hedging, systematically buy more during declines.

| Market Drop | Action | Amount |
|---|---|---|
| -10% | Buy | 25% of dry powder |
| -20% | Buy | 25% of dry powder |
| -30% | Buy | 25% of dry powder |
| -40%+ | Buy | Remaining 25% |

> **Key insight:** For long-term investors, the best hedge is having cash to buy quality stocks on sale during crashes.

---

### Cost vs. Benefit of Hedging

| Strategy | Annual Cost | Protection Level | Complexity |
|---|---|---|---|
| **Diversification** | 0% (free) | High | Low |
| **Cash buffer** | 0% (opportunity cost) | Medium | Low |
| **Bond allocation** | 0% (opportunity cost) | Medium-High | Low |
| **Defensive rotation** | 0% | Medium | Medium |
| **Protective puts** | 1-3% | High | High |
| **Inverse ETFs** | 0.9% (decay) | High (short-term) | Medium |

---

### Common Hedging Mistakes

- **Mistake:** Hedging too much — **Fix:** Over-hedging costs returns; hedge only what you can afford to lose.
- **Mistake:** Using inverse ETFs long-term — **Fix:** They lose value due to daily rebalancing; use only short-term.
- **Mistake:** Hedging after a crash — **Fix:** Hedge before, not after — insurance is cheap before the storm.
- **Mistake:** Ignoring correlation changes — **Fix:** Correlations spike during crashes; diversification helps less than expected.
- **Mistake:** Paying too much for options — **Fix:** Only hedge when you have high conviction about a decline.

### Professional Tips & Tricks

- For most investors, diversification + cash is sufficient hedging — no need for complex strategies.
- The best time to hedge is when markets are euphoric, not when they're already falling.
- Keep hedging costs low — they compound over time and eat into returns.
- Remember: hedging reduces risk but also reduces returns — it's a trade-off.

---

### Key Takeaways

- Hedging is portfolio insurance — it costs money but protects against large losses.
- Diversification is the cheapest and most effective hedge for most investors.
- Cash provides both protection and opportunity during market crashes.
- Options hedging works but is expensive for long-term use.
- Inverse ETFs are for short-term use only — volatility decay destroys returns.
- The best hedge for long-term investors is having cash to buy quality stocks on sale.

**Next up:** Crisis management and building a portfolio that survives and thrives through market turmoil.`,
      codeLanguage: "text",
      codeSnippet: `# Hedging Strategy Guide

## Hedging Cost-Benefit Analysis

Strategy          | Annual Cost | Protection | Best For
------------------|-------------|------------|----------
Diversification   | 0% (free)   | High       | Everyone
Cash Buffer       | 0% (opp.)   | Medium     | Long-term
Bond Allocation   | 0% (opp.)   | Med-High   | Conservative
Defensive Sectors | 0%          | Medium     | Late cycle
Protective Puts   | 1-3%        | High       | Large positions
Inverse ETFs      | 0.9%/yr     | High (ST)  | Short-term

## 60/40 Portfolio Hedge Test

Year | S&P 500 | 60/40  | Hedge Benefit
-----|---------|--------|-------------
2008 | -37%    | -15%   | +22% saved
2020 | +18%    | +14%   | -4% cost
2022 | -18%    | -12%   | +6% saved

## Protective Put Calculator

Stock: 100 shares × $175 = $17,500
Put: $170 strike, 3-month, $5 premium

Cost: 5 × 100 = $500 (2.9% of position)
Max Loss: ($175 - $170) × 100 + $500 = $1,000
Max Gain: Unlimited (minus $500 cost)
Breakeven: $180 (stock must rise $5 to cover put cost)

## Cash Buffer Strategy

Market Condition    | Cash %  | Action
--------------------|---------|------------------
Normal              | 5%      | Maintain buffer
Overvalued          | 10-15%  | Build dry powder
After -20% drop     | 5%      | Deploy 25% of cash
After -30% drop     | 3%      | Deploy 25% more
After -40%+ drop    | 0%      | Deploy all cash`,
      codeOutput: `# Hedging Strategy Guide

## Hedging Cost-Benefit Analysis

Strategy          | Annual Cost | Protection | Best For
------------------|-------------|------------|----------
Diversification   | 0% (free)   | High       | Everyone
Cash Buffer       | 0% (opp.)   | Medium     | Long-term
Bond Allocation   | 0% (opp.)   | Med-High   | Conservative
Defensive Sectors | 0%          | Medium     | Late cycle
Protective Puts   | 1-3%        | High       | Large positions
Inverse ETFs      | 0.9%/yr     | High (ST)  | Short-term

## 60/40 Portfolio Hedge Test

Year | S&P 500 | 60/40  | Hedge Benefit
-----|---------|--------|-------------
2008 | -37%    | -15%   | +22% saved
2020 | +18%    | +14%   | -4% cost
2022 | -18%    | -12%   | +6% saved

## Protective Put Calculator

Stock: 100 shares × $175 = $17,500
Put: $170 strike, 3-month, $5 premium

Cost: 5 × 100 = $500 (2.9% of position)
Max Loss: ($175 - $170) × 100 + $500 = $1,000
Max Gain: Unlimited (minus $500 cost)
Breakeven: $180 (stock must rise $5 to cover put cost)

## Cash Buffer Strategy

Market Condition    | Cash %  | Action
--------------------|---------|------------------
Normal              | 5%      | Maintain buffer
Overvalued          | 10-15%  | Build dry powder
After -20% drop     | 5%      | Deploy 25% of cash
After -30% drop     | 3%      | Deploy 25% more
After -40%+ drop    | 0%      | Deploy all cash`,
      visualizationTips: [
        "Compare the drawdown of a hedged vs. unhedged portfolio during 2008.",
        "Plot the cost of protective puts over time vs. the protection they provide.",
        "Build a cash deployment schedule for different market crash scenarios."
      ],
      tipsAndTricks: [
        "For most investors, diversification + cash is sufficient hedging.",
        "The best time to hedge is when markets are euphoric, not when they're falling.",
        "Inverse ETFs lose value over time — use only for short-term hedging.",
        "The best hedge for long-term investors is cash to buy quality stocks on sale."
      ],
      practice: [
        {
          id: "practice-hedging-strategy",
          title: "Design a Hedging Strategy",
          difficulty: "Medium",
          task: "You have a $500,000 portfolio that's 80% stocks and 20% bonds. Markets are at all-time highs and you're concerned about a potential 20-30% correction. Design a hedging strategy that protects your portfolio while maintaining upside potential.",
          hint: "Consider a combination of defensive rotation, cash buffer, and possibly protective puts on large positions.",
          solution: `Hedging Strategy for $500,000 Portfolio:

Current Allocation:
- Stocks: $400,000 (80%)
- Bonds: $100,000 (20%)

Hedging Actions:

1. CASH BUFFER (10% = $50,000):
   - Reduce stocks from 80% to 70% ($350,000)
   - Hold $50,000 in money market (5% yield)
   - Purpose: Dry powder to buy during crash

2. DEFENSIVE ROTATION (within stocks):
   - Increase Consumer Staples from 5% to 10%
   - Increase Healthcare from 10% to 15%
   - Increase Utilities from 3% to 5%
   - Decrease Technology from 30% to 20%
   - Purpose: Reduce volatility during correction

3. PROTECTIVE PUTS on largest positions:
   - Buy puts on $100,000 of largest stock holdings
   - Cost: ~$3,000 (3% of protected value)
   - Protection: Limits loss to 15% on protected portion

Total Hedging Cost:
- Cash opportunity cost: ~$2,500/year (5% on $50K)
- Put premium: ~$3,000/year
- Total: ~$5,500/year (1.1% of portfolio)

Protection Profile:
- If market drops 20%: Portfolio loses ~10-12% (vs 16% unhedged)
- If market drops 30%: Portfolio loses ~15-18% (vs 24% unhedged)
- If market rises 10%: Portfolio gains ~7-8% (vs 8% unhedged)

Trade-off: Give up ~2% upside for ~50% downside protection. Worth it at all-time highs.`
        },
        {
          id: "practice-crisis-hedging",
          title: "Crisis Hedging Scenario",
          difficulty: "Easy",
          task: "During the 2020 COVID crash, the S&P 500 dropped 34% in 23 days. If you had a $200,000 portfolio and followed the cash buffer strategy (deploying 25% of cash at each -10% drop), how much would you have deployed and what would your portfolio be worth at the bottom?",
          hint: "Calculate the cash deployed at -10%, -20%, and -30% drops.",
          solution: `COVID Crash Hedging Exercise:

Starting Portfolio: $200,000
Cash Buffer: 10% = $20,000
Stocks: $180,000

Market Drop Timeline:
Day 1-10: Market drops 10%
- Deploy 25% of cash: $5,000 into stocks
- Cash remaining: $15,000
- Stock value: $180,000 × 0.90 + $5,000 = $167,000

Day 10-15: Market drops 20% (total)
- Deploy 25% of cash: $5,000 into stocks
- Cash remaining: $10,000
- Stock value: $180,000 × 0.80 + $10,000 = $154,000

Day 15-23: Market drops 34% (total)
- Deploy 25% of cash: $5,000 into stocks
- Cash remaining: $5,000
- Stock value: $180,000 × 0.66 + $15,000 = $133,800

Portfolio at Bottom: $133,800 + $5,000 = $138,800
Loss: $200,000 - $138,800 = $61,200 (-30.6%)

Comparison:
- Without hedging: $180,000 × 0.66 = $118,800 (-40.6%)
- With hedging: $138,800 (-30.6%)
- Hedging benefit: +10% (saved $20,000)

Plus: You bought $15,000 of stocks at a 34% discount!
Recovery: Those shares recovered to $22,727 by year-end (51% gain on new purchases)`
        }
      ]
    },
    {
      id: "crisis-management",
      title: "Lesson 3: Crisis Management — Surviving and Thriving Through Market Turmoil",
      shortDescription:
        "Build a crisis management plan that helps you stay calm, make rational decisions, and potentially profit from market dislocations during major downturns.",
      duration: "55 mins",
      readingTime: "11 mins read",
      contentMarkdown: `### The Anatomy of a Market Crisis

Every market crisis follows a similar pattern. Understanding this pattern helps you prepare and profit.

> **Mental model:** Market crises are like storms — they're inevitable, they follow predictable patterns, and the best time to prepare is before they arrive.

---

### The Five Phases of a Market Crisis

| Phase | Market Action | Investor Emotion | Best Action |
|---|---|---|---|
| **1. Denial** | Initial decline, "it's just a pullback" | Disbelief, complacency | Review allocation |
| **2. Panic** | Rapid decline, margin calls | Fear, desperation | Stick to plan |
| **3. Capitulation** | "I'm selling everything" | Hopelessness | Deploy cash |
| **4. Recovery** | Bottoming, early bounce | Skepticism | Stay invested |
| **5. New Highs** | Sustained rally | Optimism, FOMO | Rebalance |

---

### Historical Market Crises

| Crisis | Date | S&P 500 Drop | Recovery Time | Lesson |
|---|---|---|---|---|
| **Black Monday** | 1987 | -34% | 2 years | Crashes happen fast |
| **Dot-Com Bust** | 2000-02 | -49% | 7 years | Speculation collapses |
| **Financial Crisis** | 2008-09 | -57% | 4 years | Leverage destroys |
| **COVID Crash** | 2020 | -34% | 5 months | Speed matters |
| **Rate Hikes** | 2022 | -25% | 2 years | Interest rates matter |

---

### The Crisis Management Playbook

#### Before the Crisis (Preparation Phase)

| Action | What to Do | Why It Matters |
|---|---|---|
| **Write your IPS** | Investment Policy Statement | Guide during emotional times |
| **Set cash reserve** | 5-10% in cash/money market | Dry powder for opportunities |
| **Define stop losses** | Know where you'll exit | Remove emotion from decisions |
| **Stress test portfolio** | Model -30% to -50% scenarios | Know your pain tolerance |
| **Diversify properly** | Across sectors, geographies | Reduce concentration risk |
| **Reduce leverage** | No margin, no leveraged ETFs | Leverage kills in crashes |

#### During the Crisis (Execution Phase)

| Phase | Action | Emotional Check |
|---|---|---|
| **-10% drop** | Review allocation, do nothing | "This is normal" |
| **-15% drop** | Deploy 25% of cash buffer | "Opportunity is building" |
| **-20% drop** | Deploy 25% more cash | "Quality is on sale" |
| **-25% drop** | Review IPS, deploy 25% more | "I have a plan" |
| **-30%+ drop** | Deploy remaining cash | "Maximum opportunity" |

#### After the Crisis (Recovery Phase)

| Action | What to Do |
|---|---|
| **Rebalance** | Return to target allocation |
| **Harvest tax losses** | Sell losers to offset gains |
| **Review what worked** | Document lessons learned |
| **Rebuild cash** | Refill your cash buffer |

---

### What NOT to Do During a Crisis

| Don't Do This | Why | Do This Instead |
|---|---|---|
| **Sell everything** | Locks in losses at worst time | Stick to your IPS |
| **Stop investing** | Misses the recovery | Continue DCA |
| **Check portfolio daily** | Increases emotional stress | Check quarterly |
| **Chase "safe" stocks** | Often too late, they've already dropped | Diversify beforehand |
| **Use margin** | Amplifies losses | Reduce leverage before crisis |
| **Try to time the bottom** | Nobody can consistently do this | Deploy cash systematically |

---

### The Buy-List Strategy

Prepare a list of stocks you want to own BEFORE a crisis:

| Criteria | Why |
|---|---|
| **Wide-moat companies** | Survive and thrive through downturns |
| **Low debt** | Can survive credit crunches |
| **Strong free cash flow** | Don't need external financing |
| **Dividend Aristocrats** | Consistent income, quality |
| **Leading market position** | Best positioned for recovery |

**Example Buy List:**

| Company | Why It's on the List | Target Buy Price (20% below) |
|---|---|---|
| **Apple** | Brand, cash flow, ecosystem | $140 |
| **Microsoft** | Cloud dominance, sticky revenue | $280 |
| **Johnson & Johnson** | Healthcare defensive, dividend | $140 |
| **Visa** | Network effects, payment growth | $220 |
| **Costco** | Membership model, loyal customers | $480 |

---

### Crisis Investing Checklist

Before buying during a crisis:

| Check | Question | If No |
|---|---|---|
| **Quality** | Is this a wide-moat company? | Reconsider |
| **Valuation** | Is it trading below intrinsic value? | Wait for better price |
| **Financial Health** | Can it survive 2 years of zero revenue? | Risky |
| **Liquidity** | Can I hold this for 5+ years? | Don't invest |
| **Position Size** | Will this be <10% of portfolio? | Reduce |
| **Cash** | Do I have enough cash for emergencies? | Don't invest |

---

### The Emotional Management Framework

| Phase | Emotion | Counter-Strategy |
|---|---|---|
| **Denial** | "It won't happen" | Read your IPS |
| **Fear** | "I'm going to lose everything" | Check your diversification |
| **Panic** | "I need to sell now" | Call your accountability partner |
| **Capitulation** | "I can't take anymore" | Re-read your IPS |
| **Recovery** | "I missed the bottom" | Stay invested, don't chase |

> **Key insight:** The best investors are the ones who can control their emotions during a crisis. Automation and written rules are your best defense against panic.

---

### Post-Crisis Review Template

After every crisis, document:

| Section | Questions |
|---|---|
| **What happened** | Timeline of events, market drops |
| **What I did** | Actions taken, emotions felt |
| **What worked** | Strategies that helped |
| **What didn't work** | Mistakes made |
| **Lessons learned** | Changes to make next time |
| **Portfolio impact** | Final P/L vs. benchmark |

---

### Common Crisis Management Mistakes

- **Mistake:** Not having a plan before the crisis — **Fix:** Write your IPS today.
- **Mistake:** Selling during panic — **Fix:** Automate investments to remove emotion.
- **Mistake:** Waiting for the "all clear" to invest — **Fix:** You'll miss the recovery.
- **Mistake:** Not having cash reserves — **Fix:** Maintain 5-10% in cash.
- **Mistake:** Forgetting that crises are temporary — **Fix:** The market has recovered from every crash in history.

### Professional Tips & Tricks

- Automate your investments — it removes emotion from the equation during crises.
- Keep your IPS on your desk and read it before making any changes during a crisis.
- The best time to buy is during capitulation — when everyone else is selling.
- Document your emotional state during crises — it helps you prepare for the next one.
- Remember: every crisis in history has been followed by a recovery and new highs.

---

### Key Takeaways

- Market crises follow a predictable emotional pattern: Denial → Panic → Capitulation → Recovery.
- The crisis management playbook: Prepare before, execute during, review after.
- Never sell during panic — stick to your Investment Policy Statement.
- Have a buy-list of quality companies prepared before the crisis hits.
- Deploy cash systematically during declines — don't try to time the bottom.
- Every crisis in history has been followed by a recovery — stay invested.

## 🎓 Module 10 Complete

You now have a complete risk management and crisis survival framework. You can protect your portfolio during downturns and potentially profit from market dislocations.

## 🎓 Full Course Complete!

Congratulations! You've completed the Complete Stock Market Course with all 10 modules. You now have the knowledge and tools to:

1. ✅ Understand how the stock market works (Module 1)
2. ✅ Analyze stocks using technical analysis (Module 2)
3. ✅ Build and manage a diversified portfolio (Module 3)
4. ✅ Understand behavioral finance (Module 4)
5. ✅ Generate income through dividend investing (Module 5)
6. ✅ Invest globally including emerging markets (Module 6)
7. ✅ Value stocks using professional methods (Module 7)
8. ✅ Research companies using SEC filings (Module 8)
9. ✅ Analyze sectors and competitive moats (Module 9)
10. ✅ Manage risk and survive crises (Module 10)

**The best time to start investing was 20 years ago. The second best time is today.**

Happy investing! 🚀📈`,
      codeLanguage: "text",
      codeSnippet: `# Crisis Management Playbook

## Market Crisis Timeline

Phase         | Drop   | Action              | Cash Deployed
--------------|--------|--------------------|---------------
Denial        | -5%    | Review allocation   | 0%
Early Warning | -10%   | Deploy 25% cash     | 25%
Panic         | -20%   | Deploy 25% cash     | 50%
Capitulation  | -30%   | Deploy 25% cash     | 75%
Deep Crisis   | -40%+  | Deploy final 25%    | 100%

## Pre-Crisis Checklist

□ Investment Policy Statement written
□ Cash buffer: 5-10% of portfolio
□ Stop losses defined
□ Diversification across sectors/countries
□ Buy-list of quality companies prepared
□ No margin or leverage
□ Emergency fund: 6 months expenses

## Crisis Buy-List Template

Company    | Moat Type     | Debt/Equity | FCF Yield | Target Price
-----------|---------------|-------------|-----------|-------------
___________| _____________| ________    | ________  | $___________
___________| _____________| ________    | ________  | $___________
___________| _____________| ________    | ________  | $___________
___________| _____________| ________    | ________  | $___________
___________| _____________| ________    | ________  | $___________

## Post-Crisis Review

Date: ___________
Crisis Name: ___________
S&P 500 Max Drawdown: ____%
My Portfolio Drawdown: ____%
Benchmark Outperformance: ____%

WHAT I DID RIGHT:
1. _______________________________
2. _______________________________
3. _______________________________

WHAT I DID WRONG:
1. _______________________________
2. _______________________________
3. _______________________________

LESSONS FOR NEXT TIME:
1. _______________________________
2. _______________________________
3. _______________________________`,
      codeOutput: `# Crisis Management Playbook

## Market Crisis Timeline

Phase         | Drop   | Action              | Cash Deployed
--------------|--------|--------------------|---------------
Denial        | -5%    | Review allocation   | 0%
Early Warning | -10%   | Deploy 25% cash     | 25%
Panic         | -20%   | Deploy 25% cash     | 50%
Capitulation  | -30%   | Deploy 25% cash     | 75%
Deep Crisis   | -40%+  | Deploy final 25%    | 100%

## Pre-Crisis Checklist

□ Investment Policy Statement written
□ Cash buffer: 5-10% of portfolio
□ Stop losses defined
□ Diversification across sectors/countries
□ Buy-list of quality companies prepared
□ No margin or leverage
□ Emergency fund: 6 months expenses

## Crisis Buy-List Template

Company    | Moat Type     | Debt/Equity | FCF Yield | Target Price
-----------|---------------|-------------|-----------|-------------
___________| _____________| ________    | ________  | $___________
___________| _____________| ________    | ________  | $___________
___________| _____________| ________    | ________  | $___________
___________| _____________| ________    | ________  | $___________
___________| _____________| ________    | ________  | $___________

## Post-Crisis Review

Date: ___________
Crisis Name: ___________
S&P 500 Max Drawdown: ____%
My Portfolio Drawdown: ____%
Benchmark Outperformance: ____%

WHAT I DID RIGHT:
1. _______________________________
2. _______________________________
3. _______________________________

WHAT I DID WRONG:
1. _______________________________
2. _______________________________
3. _______________________________

LESSONS FOR NEXT TIME:
1. _______________________________
2. _______________________________
3. _______________________________`,
      visualizationTips: [
        "Create a timeline of historical market crises with drawdown and recovery periods.",
        "Build a crisis management flowchart from preparation through execution to review.",
        "Plot the emotional cycle of investing during a crisis with recommended actions."
      ],
      tipsAndTricks: [
        "Automate your investments — it removes emotion during crises.",
        "Keep your IPS on your desk and read it before making changes.",
        "The best time to buy is during capitulation — when everyone else is selling.",
        "Every crisis in history has been followed by a recovery and new highs."
      ],
      practice: [
        {
          id: "practice-crisis-plan",
          title: "Write Your Crisis Management Plan",
          difficulty: "Hard",
          task: "Write a complete crisis management plan that includes: (1) Pre-crisis preparation steps, (2) Actions at each -10% decline, (3) Your buy-list of 5 quality companies with target prices, (4) Post-crisis review process.",
          hint: "Be specific and actionable. This plan should guide you during the next crisis.",
          solution: `My Crisis Management Plan

1. PRE-CRISIS PREPARATION:
- Maintain 10% cash buffer ($20,000 on $200K portfolio)
- Investment Policy Statement on desk
- No margin or leverage
- Diversified across 8+ sectors
- Emergency fund: 6 months expenses in savings

2. ACTIONS BY DECLINE LEVEL:

-5% Decline:
□ Review portfolio allocation
□ Do nothing — normal volatility
□ Re-read IPS

-10% Decline:
□ Deploy 25% of cash ($5,000)
□ Buy best 1-2 stocks on buy-list
□ Continue regular DCA contributions

-20% Decline:
□ Deploy 25% of remaining cash ($3,750)
□ Buy 2-3 more stocks on buy-list
□ Stop checking portfolio daily

-30% Decline:
□ Deploy 25% of remaining cash ($2,813)
□ Buy remaining stocks on buy-list
□ Re-read IPS, call accountability partner

-40%+ Decline:
□ Deploy all remaining cash
□ Maximum buying opportunity
□ Stay the course

3. MY BUY-LIST:

Company      | Current | Target (-20%) | Why
-------------|---------|---------------|----
Apple        | $175    | $140          | Brand moat, FCF
Microsoft    | $350    | $280          | Cloud dominance
J&J          | $175    | $140          | Healthcare defensive
Visa         | $275    | $220          | Network effects
Costco       | $600    | $480          | Membership model

4. POST-CRISIS REVIEW:
- Document what happened and what I did
- Calculate portfolio P/L vs. benchmark
- Identify what worked and what didn't
- Update IPS with lessons learned
- Rebuild cash buffer to 10%`
        },
        {
          id: "practice-crisis-simulation",
          title: "Crisis Simulation Exercise",
          difficulty: "Medium",
          task: "Simulate the 2008 Financial Crisis for a $100,000 portfolio. If you had a 60/40 portfolio with a 10% cash buffer and followed the crisis management playbook, what would your portfolio value be at the bottom and at the 1-year recovery mark?",
          hint: "S&P 500 dropped 57% peak-to-trough. Bonds returned +5% in 2008. Stocks recovered +26% in 2009.",
          solution: `2008 Crisis Simulation ($100,000 portfolio):

STARTING ALLOCATION:
- Stocks: $54,000 (60%)
- Bonds: $36,000 (40%)
- Cash: $10,000 (10%)

DURING THE CRISIS (Peak to Trough, -57% stocks):

Stocks: $54,000 × 0.43 = $23,220
Bonds: $36,000 × 1.05 = $37,800 (bonds gained 5%)
Cash: $10,000 (unchanged)

Cash Deployment:
- At -10%: Deploy $2,500 into stocks
- At -20%: Deploy $2,500 into stocks
- At -30%: Deploy $2,500 into stocks
- At -40%+: Deploy $2,500 into stocks
Total deployed: $10,000 into stocks

Stocks at bottom: $23,220 + $10,000 = $33,220
Portfolio at bottom: $33,220 + $37,800 = $71,020
Drawdown: -29%

COMPARISON:
- 100% Stocks: $43,000 (-57%)
- 60/40 (no cash): $58,800 (-41%)
- 60/40 + cash + deployment: $71,020 (-29%)

YOUR PORTFOLIO SURVIVED WITH ONLY -29% DRAWDOWN!

1-YEAR RECOVERY (2009: S&P 500 +26%):
Stocks: $33,220 × 1.26 = $41,857
Bonds: $37,800 × 1.05 = $39,690
Cash: $0 (all deployed)
Portfolio: $81,547

Recovery: -29% → -18.5% (improving rapidly)

By end of 2010: Portfolio would be ~$95,000 (nearly recovered)

KEY LESSON: Hedging + systematic buying reduced the crisis drawdown from -57% to -29% and accelerated recovery.`
        }
      ]
    }
  ],
};
