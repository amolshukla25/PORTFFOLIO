import { StockMarketingModule } from "../types/stock-marketing";

export const MODULE_7: StockMarketingModule = {
  id: "7",
  title: "Advanced Stock Valuation Techniques",
  description: "Master the art of valuing Indian stocks using DCF, relative valuation, and sum-of-parts analysis — know exactly what a stock is worth before you invest.",
  duration: "8 hours",
  difficulty: "Advanced",
  prerequisites: [
    "Basic understanding of Indian stock market (Module 1)",
    "Fundamental analysis basics (Module 1)",
    "Understanding of financial statements"
  ],
  lessons: [
    {
      id: "71",
      title: "Discounted Cash Flow (DCF) Valuation — The Gold Standard",
      duration: "3 hours",
      content: `## What is DCF Valuation? A Simple Explanation

Imagine you're buying a small tea shop. The shop earns ₹2,00,000 per year in profit. You want to know how much to pay for this shop. One approach is to think about how much money the shop will make in the future and then figure out what those future profits are worth today.

That's exactly what DCF (Discounted Cash Flow) valuation does. It estimates the value of a company based on how much cash it's expected to generate in the future, and then "discounts" those future cash flows back to today's value.

**Why Future Money is Worth Less Than Today's Money:**

If someone promises to give you ₹1,00,000 one year from now, would you pay ₹1,00,000 for that promise today? Probably not. Because:

1. **Inflation:** ₹1,00,000 today can buy more than ₹1,00,000 next year.
2. **Risk:** There's always a chance the person might not pay you.
3. **Opportunity Cost:** You could invest ₹1,00,000 today and earn returns.

So, you might value that promise at only ₹90,000-95,000 today. The process of reducing future money to its present value is called "discounting."

**The DCF Formula (Simplified):**

Value of a Company = Sum of (Future Cash Flow ÷ (1 + Discount Rate)^Number of Years)

Let's break this down:

- **Future Cash Flow:** How much cash the company is expected to generate each year
- **Discount Rate:** The rate of return you require for the risk you're taking (typically 10-15% for Indian stocks)
- **Number of Years:** How many years into the future you're projecting

**A Simple DCF Example:**

Suppose a company is expected to generate the following free cash flows over the next 5 years:

Year 1: ₹100 crore
Year 2: ₹115 crore
Year 3: ₹132 crore
Year 4: ₹152 crore
Year 5: ₹175 crore

After Year 5, the company is expected to grow at 5% forever (this is called the "terminal growth rate").

Discount Rate: 12%

**Step 1: Discount Each Year's Cash Flow**

Year 1: ₹100 ÷ (1.12)^1 = ₹89.29 crore
Year 2: ₹115 ÷ (1.12)^2 = ₹91.70 crore
Year 3: ₹132 ÷ (1.12)^3 = ₹93.98 crore
Year 4: ₹152 ÷ (1.12)^4 = ₹96.58 crore
Year 5: ₹175 ÷ (1.12)^5 = ₹99.28 crore

Total PV of first 5 years: ₹470.83 crore

**Step 2: Calculate Terminal Value**

Terminal Value = Year 5 Cash Flow × (1 + Growth Rate) ÷ (Discount Rate - Growth Rate)
= ₹175 × 1.05 ÷ (0.12 - 0.05)
= ₹183.75 ÷ 0.07
= ₹2,625 crore

PV of Terminal Value = ₹2,625 ÷ (1.12)^5 = ₹1,489.47 crore

**Step 3: Calculate Total Enterprise Value**

Enterprise Value = ₹470.83 + ₹1,489.47 = ₹1,960.30 crore

**Step 4: Calculate Equity Value**

Equity Value = Enterprise Value - Debt + Cash
If the company has ₹200 crore debt and ₹50 crore cash:
Equity Value = ₹1,960.30 - ₹200 + ₹50 = ₹1,810.30 crore

**Step 5: Calculate Value Per Share**

If the company has 10 crore shares outstanding:
Value Per Share = ₹1,810.30 ÷ 10 = ₹181.03

If the current market price is ₹150, the stock is undervalued by about 21%.

## Key Inputs for DCF — What You Need to Estimate

**1. Free Cash Flow (FCF):**

Free Cash Flow is the cash a company generates after paying for its operating expenses and capital expenditures. It's the cash available to be distributed to shareholders (through dividends or buybacks) or used to pay down debt.

How to calculate FCF:
FCF = Operating Cash Flow - Capital Expenditure

Or equivalently:
FCF = EBIT × (1 - Tax Rate) + Depreciation - Change in Working Capital - Capital Expenditure

For Indian companies, you can find these numbers in the cash flow statement of their annual report or on financial websites like Screener.in, Trendlyne, or Moneycontrol.

**2. Discount Rate (Cost of Capital):**

The discount rate represents the minimum return you expect from the investment. For Indian stocks, this is typically the Weighted Average Cost of Capital (WACC).

WACC = (Cost of Equity × Equity Weight) + (Cost of Debt × Debt Weight × (1 - Tax Rate))

For most Indian companies:
- Cost of Equity: 12-15% (depends on the risk of the company)
- Cost of Debt: 8-10% (interest rate on borrowings)
- Tax Rate: 25% (for most Indian companies)

A simple rule of thumb: use 12% for large, stable companies (like TCS, HDFC Bank) and 15% for riskier, smaller companies.

**3. Growth Rate:**

How fast will the company's cash flows grow? This is the most critical and difficult assumption in DCF.

Short-term growth (Years 1-5): Based on the company's historical growth, industry growth rate, and management guidance. For example, if TCS has been growing at 12-15% for the past 5 years and the IT industry is expected to grow at 10-12%, you might assume 12% growth for the next 5 years.

Long-term growth (after Year 5): This should be conservative — typically 4-6% for Indian companies. No company can grow faster than the economy forever. India's nominal GDP growth is about 10-12%, so a long-term growth rate of 5-6% is reasonable.

**4. Terminal Value:**

Most of a DCF valuation comes from the terminal value — the value of all cash flows beyond your explicit forecast period. This is why the long-term growth rate and discount rate assumptions are so important. Small changes in these assumptions can dramatically change the valuation.

## DCF Valuation of Real Indian Companies — Practical Examples

**Example 1: Valuing TCS (Tata Consultancy Services)**

TCS is India's largest IT services company. Let's build a simple DCF:

Assumptions:
- Current Free Cash Flow: ₹48,000 crore (approximate)
- Growth Rate (Years 1-5): 12% per year
- Growth Rate (Year 6 onwards): 5% per year
- Discount Rate: 12%
- Debt: Negligible (TCS is virtually debt-free)
- Cash: ₹50,000 crore
- Shares Outstanding: 36.4 crore

Projected Free Cash Flows:
Year 1: ₹48,000 × 1.12 = ₹53,760 crore
Year 2: ₹53,760 × 1.12 = ₹60,211 crore
Year 3: ₹60,211 × 1.12 = ₹67,436 crore
Year 4: ₹67,436 × 1.12 = ₹75,529 crore
Year 5: ₹75,529 × 1.12 = ₹84,592 crore

PV of first 5 years' cash flows (at 12% discount):
Year 1: ₹48,000
Year 2: ₹48,000
Year 3: ₹48,000
Year 4: ₹48,000
Year 5: ₹48,000
Total PV: ₹2,40,000 crore (approximately)

Terminal Value: ₹84,592 × 1.05 ÷ (0.12 - 0.05) = ₹12,68,880 crore
PV of Terminal Value: ₹12,68,880 ÷ (1.12)^5 = ₹7,20,000 crore

Enterprise Value: ₹2,40,000 + ₹7,20,000 = ₹9,60,000 crore
Equity Value: ₹9,60,000 + ₹50,000 (cash) = ₹10,10,000 crore
Value Per Share: ₹10,10,000 ÷ 36.4 = ₹27,747

If the current market price is ₹3,800, the DCF suggests TCS is significantly overvalued at this price. However, this is just one model — real valuation requires multiple approaches.

**Example 2: Valuing a Mid-Cap Company — Persistent Systems**

Assumptions:
- Current Free Cash Flow: ₹1,200 crore
- Growth Rate (Years 1-5): 18% per year
- Growth Rate (Year 6 onwards): 6% per year
- Discount Rate: 14% (higher for a mid-cap company)
- Debt: ₹200 crore
- Cash: ₹800 crore
- Shares Outstanding: 6.8 crore

This exercise shows how the same DCF framework applies to companies of different sizes and risk profiles.

## Common DCF Mistakes and How to Avoid Them

**Mistake 1: Being Too Optimistic About Growth**

Many investors assume high growth rates forever. Remember: no company can grow faster than the economy forever. If you assume 20% growth for 10 years, you're probably overvaluing the company.

**How to Avoid:** Use conservative growth rates. For mature Indian companies, assume 10-12% for the first 5 years and 4-6% for the long term. For high-growth companies, you can use higher short-term rates but always bring them down to 4-6% for the long term.

**Mistake 2: Using the Wrong Discount Rate**

Using too low a discount rate overvalues the company. Using too high a discount rate undervalues it. The discount rate should reflect the risk of the specific company you're valuing.

**How to Avoid:** Use 12% for large, stable companies. Use 14-15% for mid-cap and small-cap companies. Use 16-18% for very risky or early-stage companies. Always adjust for the company's specific risk profile.

**Mistake 3: Ignoring the Terminal Value**

The terminal value often represents 60-80% of the total DCF value. Small changes in the terminal growth rate or discount rate can dramatically change the valuation.

**How to Avoid:** Do a sensitivity analysis — calculate the DCF value using different combinations of growth rates and discount rates. This gives you a range of values rather than a single number.

**Mistake 4: Not Adjusting for Debt and Cash**

A company with ₹1,000 crore enterprise value but ₹300 crore debt is worth ₹700 crore to equity holders. Always subtract debt and add cash to get the equity value.

**How to Avoid:** Always include net debt (Debt - Cash) in your DCF calculation. For debt-free companies like TCS, you can skip this step, but for companies with significant debt (like many Indian infrastructure and real estate companies), this adjustment is crucial.

**Mistake 5: Using DCF in Isolation**

DCF is just one valuation method. It relies heavily on assumptions, and different reasonable assumptions can give very different values. Never rely on DCF alone.

**How to Avoid:** Use DCF alongside other valuation methods (relative valuation, sum-of-parts, etc.) to get a more complete picture.

## Sensitivity Analysis — The Key to Robust DCF Valuation

Since DCF depends on assumptions, it's essential to test how sensitive the valuation is to changes in key inputs. This is called sensitivity analysis.

**How to Do Sensitivity Analysis:**

Create a table showing the DCF value per share for different combinations of discount rates and growth rates:

Discount Rate →  10%    12%    14%    16%
Growth 4%:      ₹220   ₹185   ₹158   ₹137
Growth 5%:      ₹255   ₹210   ₹175   ₹149
Growth 6%:      ₹300   ₹240   ₹198   ₹165
Growth 7%:      ₹360   ₹280   ₹225   ₹185

This table shows that the stock could be worth anywhere from ₹137 to ₹360 per share depending on your assumptions. If the current market price is ₹200, the stock appears fairly valued under most scenarios.

**What to Look For:**

1. If the stock is undervalued in MOST scenarios (most cells in the table show a value higher than the current price), it's likely a good buy.
2. If the stock is overvalued in MOST scenarios, it's likely expensive.
3. If the valuation is mixed (some scenarios show undervaluation, others show overvaluation), the stock is fairly valued and you need to make a judgment call on the assumptions.

## How to Build a DCF Model — Step-by-Step Guide

**Step 1: Gather Historical Financial Data (5-10 years)**
- Revenue, EBIT, Net Profit, Free Cash Flow
- Capital Expenditure, Depreciation, Working Capital changes
- Debt, Cash, Interest Expense

**Step 2: Estimate Revenue Growth**
- Look at historical revenue growth
- Consider industry growth rates
- Factor in the company's competitive position
- Be conservative — use the lower end of your estimate range

**Step 3: Project Margins**
- Estimate operating margins (EBIT/Revenue)
- Consider if margins are expanding, stable, or contracting
- Factor in economies of scale or competitive pressures

**Step 4: Calculate Free Cash Flow**
- For each projected year, calculate: FCF = EBIT × (1 - Tax) + Depreciation - CapEx - Working Capital Change

**Step 5: Choose Discount Rate**
- Calculate WACC using the company's cost of equity and cost of debt
- For simple analysis, use 12% for large-cap, 14% for mid-cap, 16% for small-cap

**Step 6: Calculate Terminal Value**
- Use the perpetuity growth method: Terminal Value = Year 5 FCF × (1 + g) / (WACC - g)
- Or use the exit multiple method: Terminal Value = Year 5 EBIT × Exit Multiple

**Step 7: Calculate Enterprise Value**
- Sum the PV of projected cash flows and PV of terminal value

**Step 8: Calculate Equity Value**
- Equity Value = Enterprise Value - Net Debt
- Add any non-operating assets (investments, real estate)

**Step 9: Calculate Value Per Share**
- Value Per Share = Equity Value / Number of Shares Outstanding

**Step 10: Compare with Market Price**
- If DCF value > Market Price: Stock may be undervalued
- If DCF value < Market Price: Stock may be overvalued
- Always do sensitivity analysis to understand the range of possible values

## DCF Limitations — When Not to Use DCF

DCF is a powerful tool, but it has limitations:

1. **Not suitable for companies with negative cash flows:** If a company is not yet generating positive free cash flow (like many startups and early-stage companies), DCF doesn't work well because you can't discount negative cash flows meaningfully.

2. **Highly sensitive to assumptions:** Small changes in growth rate or discount rate can dramatically change the valuation. This is why sensitivity analysis is crucial.

3. **Not suitable for cyclical companies:** Companies whose cash flows vary significantly with economic cycles (like metals, oil, banking) are difficult to value with DCF because it's hard to predict their cash flows.

4. **Ignores qualitative factors:** DCF focuses on numbers but doesn't capture competitive advantages, management quality, brand value, or regulatory environment — all of which affect a company's value.

5. **Terminal value dominates:** In most DCF models, 60-80% of the value comes from the terminal value, which is based on long-term assumptions that are inherently uncertain.

For these reasons, DCF should always be used alongside other valuation methods.

## Summary — Key Takeaways

1. DCF values a company based on the present value of its future free cash flows — it's the most theoretically sound valuation method.

2. The three critical inputs are: Free Cash Flow projections, Discount Rate (WACC), and Terminal Growth Rate.

3. Most of a DCF value comes from the terminal value — be very careful with long-term assumptions.

4. Always do sensitivity analysis — test different combinations of growth rates and discount rates to get a range of possible values.

5. Use 12% discount rate for large-cap, 14% for mid-cap, and 16% for small-cap Indian companies as a starting point.

6. Never rely on DCF alone — use it alongside relative valuation and other methods for a complete picture.

7. DCF works best for stable, cash-generating companies. It's less suitable for cyclical, early-stage, or negative cash flow companies.`,
      codeSnippet: `DCF Valuation Framework:\n\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\nStep 1: Historical Data (5 years)\n├── Revenue: ₹5,000, ₹5,600, ₹6,272, ₹7,025, ₹7,868\n├── EBIT: ₹1,000, ₹1,176, ₹1,380, ₹1,617, ₹1,889\n├── FCF: ₹800, ₹940, ₹1,104, ₹1,293, ₹1,512\n└── CAGR: Revenue 12%, EBIT 17%, FCF 17%\n\nStep 2: Projections (5 years)\n├── Revenue Growth: 14%\n├── EBIT Margin: 24%\n├── FCF Conversion: 85%\n└── Projected FCF: ₹1,724, ₹1,965, ₹2,240, ₹2,554, ₹2,911\n\nStep 3: Terminal Value\n├── Terminal Growth: 5%\n├── Terminal Value: ₹2,911 × 1.05 / (0.12 - 0.05) = ₹43,665\n└── PV of Terminal: ₹43,665 / (1.12)^5 = ₹24,789\n\nStep 4: Enterprise Value\n├── PV of FCF (Y1-5): ₹7,245\n├── PV of Terminal: ₹24,789\n├── Enterprise Value: ₹32,034\n├── Less: Net Debt: ₹5,000\n├── Equity Value: ₹27,034\n└── Per Share (10Cr shares): ₹2,703\n\nStep 5: Sensitivity Analysis\nDiscount →  10%    12%    14%\nGrowth 4%: ₹2,450  ₹2,100 ₹1,820\nGrowth 5%: ₹2,703  ₹2,300 ₹1,970\nGrowth 6%: ₹3,020  ₹2,540 ₹2,150\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`,
      codeOutput: `DCF Analysis Result:\n\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\nCompany: [Indian Mid-Cap]\nCurrent Price: ₹2,200\nDCF Fair Value: ₹2,703 (base case)\nUpside: 23%\n\nSensitivity Range:\nBull Case: ₹3,020 (+37%)\nBase Case: ₹2,703 (+23%)\nBear Case: ₹1,820 (-17%)\n\nKey Assumptions:\n✅ Revenue CAGR: 14% (justified by 17% historical)\n✅ EBIT Margin: 24% (stable, in line with history)\n✅ Discount Rate: 12% (large-cap, low debt)\n✅ Terminal Growth: 5% (conservative for India)\n\nRisk Factors:\n⚠️ If growth drops to 10%: Value = ₹2,100 (overvalued)\n⚠️ If discount rate rises to 14%: Value = ₹1,970 (overvalued)\n⚠️ If terminal growth drops to 3%: Value = ₹2,200 (fair)\n\nVerdict: MARGINALLY UNDERVALUED\nThe stock appears to offer modest upside at the current price.\nMost sensitivity scenarios show the stock is fairly valued.\nRecommendation: ACCUMULATE on dips below ₹2,000\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`,
      tips: [
        "DCF is the gold standard of valuation, but it's only as good as your assumptions — always do sensitivity analysis",
        "Use 12% discount rate for stable large-cap Indian companies, 14% for mid-cap, and 16% for small-cap",
        "Terminal value typically represents 60-80% of total DCF value — be very conservative with long-term growth assumptions",
        "For Indian companies, a terminal growth rate of 4-6% is reasonable (India's nominal GDP growth is about 10-12%)",
        "Never rely on DCF alone — use it alongside P/E, EV/EBITDA, and other valuation methods"
      ],
      practiceExercises: [
        {
          id: "711",
          difficulty: "Easy",
          task: "A company has free cash flows of ₹50 crore, ₹58 crore, ₹67 crore, ₹77 crore, and ₹89 crore for the next 5 years. After Year 5, cash flows grow at 4% forever. The discount rate is 12%. Calculate the enterprise value using DCF.",
          hint: "Discount each year's cash flow, calculate terminal value, and sum everything up",
          solution: "Step 1: Discount each year's cash flow:\nYear 1: ₹50 / 1.12 = ₹44.64 crore\nYear 2: ₹58 / 1.12² = ₹46.26 crore\nYear 3: ₹67 / 1.12³ = ₹47.70 crore\nYear 4: ₹77 / 1.12⁴ = ₹49.17 crore\nYear 5: ₹89 / 1.12⁵ = ₹50.45 crore\nTotal PV of FCF: ₹238.22 crore\n\nStep 2: Terminal Value:\nTV = ₹89 × 1.04 / (0.12 - 0.04) = ₹92.56 / 0.08 = ₹1,157 crore\nPV of TV = ₹1,157 / 1.12⁵ = ₹657.18 crore\n\nStep 3: Enterprise Value:\nEV = ₹238.22 + ₹657.18 = ₹895.40 crore\n\nNote: 73% of the value comes from terminal value — this shows why long-term assumptions are so important."
        },
        {
          id: "712",
          difficulty: "Medium",
          task: "Build a DCF analysis for an Indian FMCG company with the following data:\n- Current Revenue: ₹10,000 crore\n- EBIT Margin: 18%\n- Tax Rate: 25%\n- CapEx: 3% of revenue\n- Depreciation: 2% of revenue\n- Working Capital Change: 1% of revenue growth\n- Revenue Growth: 12% for 5 years, then 5% forever\n- Discount Rate: 12%\n- Shares Outstanding: 20 crore\n- Net Debt: ₹500 crore\n\nCalculate the fair value per share.",
          hint: "Project revenue, calculate FCF for each year, discount back, add terminal value, subtract net debt",
          solution: "Year 1: Revenue = ₹11,200. EBIT = ₹2,016. Tax = ₹504. NOPAT = ₹1,512. Dep = ₹224. CapEx = ₹336. WC Change = ₹120. FCF = ₹1,280.\nYear 2: Revenue = ₹12,544. EBIT = ₹2,258. NOPAT = ₹1,693. Dep = ₹251. CapEx = ₹376. WC Change = ₹134. FCF = ₹1,434.\nYear 3: Revenue = ₹14,049. EBIT = ₹2,529. NOPAT = ₹1,897. Dep = ₹281. CapEx = ₹421. WC Change = ₹150. FCF = ₹1,606.\nYear 4: Revenue = ₹15,735. EBIT = ₹2,832. NOPAT = ₹2,124. Dep = ₹315. CapEx = ₹472. WC Change = ₹169. FCF = ₹1,799.\nYear 5: Revenue = ₹17,623. EBIT = ₹3,172. NOPAT = ₹2,379. Dep = ₹352. CapEx = ₹529. WC Change = ₹189. FCF = ₹2,013.\n\nPV of FCF (Years 1-5):\n₹1,280/1.12 + ₹1,434/1.12² + ₹1,606/1.12³ + ₹1,799/1.12⁴ + ₹2,013/1.12⁵\n= ₹1,143 + ₹1,143 + ₹1,143 + ₹1,143 + ₹1,143 = ₹5,715 crore\n\nTerminal Value:\nYear 6 FCF = ₹2,013 × 1.05 = ₹2,114\nTV = ₹2,114 / (0.12 - 0.05) = ₹30,200 crore\nPV of TV = ₹30,200 / 1.12⁵ = ₹17,144 crore\n\nEnterprise Value = ₹5,715 + ₹17,144 = ₹22,859 crore\nEquity Value = ₹22,859 - ₹500 = ₹22,359 crore\nPer Share = ₹22,359 / 20 = ₹1,118\n\nIf current price is ₹900, the stock is undervalued by about 24%."
        },
        {
          id: "713",
          difficulty: "Hard",
          task: "You're analyzing two Indian IT companies using DCF:\n\nCompany A (Large Cap):\n- FCF: ₹45,000 crore\n- Growth: 12% (5 years), 5% (terminal)\n- Discount Rate: 11%\n- Net Debt: -₹30,000 crore (net cash)\n- Shares: 36 crore\n\nCompany B (Mid Cap):\n- FCF: ₹1,500 crore\n- Growth: 20% (5 years), 6% (terminal)\n- Discount Rate: 14%\n- Net Debt: ₹2,000 crore\n- Shares: 7 crore\n\nWhich company offers better value at current prices of ₹3,800 (A) and ₹1,500 (B)?",
          hint: "Run DCF for both, compare fair values to market prices, and consider which assumptions are more reliable",
          solution: "Company A DCF:\nPV of FCF (5 years): ₹45,000 × 4.037 = ₹1,81,665 crore\nTerminal Value: ₹45,000 × 1.12⁵ × 1.05 / (0.11 - 0.05) = ₹17,41,111 crore\nPV of TV: ₹17,41,111 / 1.11⁵ = ₹10,34,625 crore\nEnterprise Value: ₹1,81,665 + ₹10,34,625 = ₹12,16,290 crore\nEquity Value: ₹12,16,290 + ₹30,000 = ₹12,46,290 crore\nPer Share: ₹12,46,290 / 36 = ₹34,619\nMarket Price: ₹3,800 → MASSIVELY OVERVALUED (DCF suggests ₹34,619)\n\nNote: This extreme result suggests the assumptions may be too optimistic, or the market is pricing in much lower growth.\n\nCompany B DCF:\nPV of FCF (5 years):\nY1: ₹1,800/1.14 = ₹1,579\nY2: ₹2,160/1.14² = ₹1,662\nY3: ₹2,592/1.14³ = ₹1,749\nY4: ₹3,110/1.14⁴ = ₹1,841\nY5: ₹3,732/1.14⁵ = ₹1,938\nTotal PV: ₹8,769 crore\n\nTerminal Value: ₹3,732 × 1.06 / (0.14 - 0.06) = ₹49,462 crore\nPV of TV: ₹49,462 / 1.14⁵ = ₹25,696 crore\n\nEnterprise Value: ₹8,769 + ₹25,696 = ₹34,465 crore\nEquity Value: ₹34,465 - ₹2,000 = ₹32,465 crore\nPer Share: ₹32,465 / 7 = ₹4,638\nMarket Price: ₹1,500 → SIGNIFICANTLY UNDERVALUED (DCF suggests ₹4,638)\n\nConclusion:\nCompany B offers much better value at current prices.\nHowever, Company B's higher growth assumptions (20%) carry more risk.\nCompany A is a safer company but appears very expensive.\n\nRecommendation: Prefer Company B for value investors, but size the position appropriately given the higher risk."
        }
      ]
    },
    {
      id: "72",
      title: "Relative Valuation — P/E, EV/EBITDA, and Comparables",
      duration: "3 hours",
      content: `## What is Relative Valuation? The "Comparison Shop" Approach

Imagine you're buying a house. You find a 2BHK apartment in Bangalore priced at ₹80 lakh. Is this a good price? To answer that, you'd look at what similar 2BHK apartments in the same area are selling for. If most similar apartments are priced at ₹75-85 lakh, the ₹80 lakh price is reasonable. If similar apartments are selling for ₹60-65 lakh, the ₹80 lakh price is expensive.

That's exactly what relative valuation does. Instead of calculating an absolute value (like DCF), it compares a company's valuation metrics to similar companies or to its own historical averages.

The logic is simple: if a company is similar to its peers but trades at a lower valuation, it might be undervalued. If it trades at a higher valuation, it might be overvalued — unless there's a good reason for the premium.

## The Most Important Valuation Ratios

**1. Price-to-Earnings (P/E) Ratio**

The P/E ratio is the most widely used valuation metric. It tells you how much you're paying for each rupee of the company's earnings.

P/E Ratio = Market Price Per Share ÷ Earnings Per Share (EPS)

Or equivalently:
P/E Ratio = Market Capitalization ÷ Net Profit

**Example:** If Reliance Industries has a market cap of ₹17,00,000 crore and net profit of ₹68,000 crore, the P/E ratio is 17,00,000 ÷ 68,000 = 25x.

This means you're paying ₹25 for every ₹1 of Reliance's earnings.

**What P/E Tells You:**

- A high P/E (say 40x) means investors expect high future growth. They're willing to pay more today for the promise of higher earnings tomorrow.
- A low P/E (say 10x) could mean the company is undervalued, OR it could mean the market expects low growth or perceives higher risk.

**How to Use P/E for Indian Stocks:**

Compare the P/E ratio to:
1. The company's own historical P/E (is it above or below its 5-year average?)
2. Its industry peers (is it cheaper or more expensive than competitors?)
3. The overall market P/E (the Nifty 50 P/E is typically 18-22x)

**Typical P/E Ranges for Indian Sectors:**

- IT Services: 25-35x (TCS, Infosys trade at premium P/Es due to high growth and quality)
- FMCG: 40-60x (HUL, Nestle trade at very high P/Es because of brand value and steady growth)
- Banking: 12-20x (HDFC Bank, ICICI Bank — P/E varies with credit cycle)
- Auto: 20-30x (Maruti, Bajaj Auto — depends on demand cycle)
- PSU: 5-12x (Coal India, ONGC — low P/Es due to government ownership and lower growth expectations)
- Pharma: 20-35x (Dr. Reddy's, Sun Pharma — varies with product pipeline)
- Real Estate: 30-80x (DLF, Godrej Properties — high P/Es because of asset-heavy valuations)

**2. Price-to-Book (P/B) Ratio**

The P/B ratio compares the company's market price to its book value (net worth).

P/B Ratio = Market Price Per Share ÷ Book Value Per Share

Or equivalently:
P/B Ratio = Market Capitalization ÷ Net Worth

**What P/B Tells You:**

- P/B = 1 means the stock is trading at its book value
- P/B > 1 means the market values the company more than its net worth (investors believe the company will generate returns above its cost of equity)
- P/B < 1 means the stock is trading below book value (could be undervalued or the company is destroying value)

**How to Use P/B for Indian Stocks:**

P/B is particularly useful for:
- Banks and financial companies (where book value is a meaningful measure of the asset base)
- Asset-heavy companies (manufacturing, infrastructure)
- Companies with stable, predictable earnings

It's less useful for:
- IT services companies (minimal physical assets)
- FMCG companies (brand value not reflected in book value)
- Companies with intangible assets (pharmaceuticals, technology)

**Typical P/B Ranges for Indian Sectors:**

- Banking: 1.5-4x (HDFC Bank trades at 3-4x, PSU banks at 0.8-1.5x)
- IT: 8-15x (TCS trades at 12-15x due to high ROE)
- FMCG: 10-30x (HUL trades at 15-25x)
- PSU: 1-3x (Coal India at 3-4x, ONGC at 1-1.5x)
- Auto: 3-8x

**3. EV/EBITDA Ratio**

EV/EBITDA is a more comprehensive valuation metric than P/E because it considers the company's entire capital structure (both equity and debt).

EV (Enterprise Value) = Market Cap + Debt - Cash

EBITDA = Earnings Before Interest, Tax, Depreciation, and Amortization

EV/EBITDA tells you how much you're paying for each rupee of the company's operating earnings, regardless of how the company is financed.

**Why EV/EBITDA is Better Than P/E:**

1. It's capital structure neutral — a company with high debt won't look artificially cheap just because interest expense reduces its P/E.
2. It's useful for comparing companies with different debt levels.
3. It eliminates the impact of depreciation policies, which can vary between companies.

**Typical EV/EBITDA Ranges for Indian Sectors:**

- IT: 18-25x
- FMCG: 30-50x (very high due to high margins and low capital intensity)
- Banking: Not applicable (banking uses P/B instead)
- Auto: 12-20x
- Manufacturing: 10-18x
- PSU: 5-10x

**4. Price-to-Sales (P/S) Ratio**

P/S Ratio = Market Capitalization ÷ Revenue

This is useful for companies that are not yet profitable or have variable earnings. It tells you how much you're paying for each rupee of revenue.

**When to Use P/S:**
- Early-stage companies that are not yet profitable
- Companies with volatile earnings (cyclical industries)
- Comparing companies with different profit margins

**Typical P/S Ranges:**

- IT: 6-12x
- FMCG: 8-15x
- Banking: 3-6x
- Manufacturing: 2-5x
- Startups/Unprofitable: 1-10x (highly variable)

## How to Do Comparable Company Analysis — A Step-by-Step Guide

**Step 1: Identify Comparable Companies**

Find companies that are similar in terms of:
- Industry/sector
- Size (market cap)
- Growth rate
- Business model
- Geographic focus

**Example:** To value Infosys, you might compare it with:
- TCS (direct competitor, similar size and business)
- Wipro (IT services, slightly smaller)
- HCL Technologies (IT services)
- Tech Mahindra (IT services)
- For global comparison: Accenture, Cognizant

**Step 2: Gather Valuation Metrics**

For each comparable company, calculate:
- P/E Ratio (trailing and forward)
- P/B Ratio
- EV/EBITDA
- P/S Ratio
- EV/Revenue
- Dividend Yield

**Step 3: Calculate the Average and Median**

For each metric, calculate the average and median across all comparable companies.

**Step 4: Apply to the Target Company**

Apply the average/median multiples to the target company's financial metrics to estimate its fair value.

**Example — Valuing Infosys:**

Comparable companies:
- TCS: P/E = 30x, EV/EBITDA = 22x
- Wipro: P/E = 22x, EV/EBITDA = 16x
- HCL Tech: P/E = 25x, EV/EBITDA = 18x
- Tech Mahindra: P/E = 35x, EV/EBITDA = 20x

Average P/E: 28x
Median P/E: 27.5x

Infosys EPS: ₹65
Fair Value (using average P/E): ₹65 × 28 = ₹1,820
Fair Value (using median P/E): ₹65 × 27.5 = ₹1,788

If current price is ₹1,500, the stock appears undervalued based on peer comparison.

## PEG Ratio — Combining Growth and Valuation

The PEG ratio adjusts the P/E ratio for the company's growth rate:

PEG Ratio = P/E Ratio ÷ Earnings Growth Rate

**How to Interpret:**

- PEG < 1: The stock is undervalued relative to its growth (good value)
- PEG = 1: The stock is fairly valued relative to its growth
- PEG > 1.5: The stock is expensive relative to its growth

**Example:**

Company A: P/E = 30, Growth = 20% → PEG = 30/20 = 1.5 (expensive)
Company B: P/E = 20, Growth = 25% → PEG = 20/25 = 0.8 (undervalued)

Even though Company A has a higher P/E, Company B is actually better value because it's growing faster relative to its P/E.

**Typical PEG Ranges for Indian Stocks:**

- Large-cap growth stocks: 1.0-2.0 (TCS, HDFC Bank)
- Mid-cap growth stocks: 0.8-1.5 (Bajaj Finance, Asian Paints)
- Value stocks: 0.5-1.0 (Coal India, SBI)
- Expensive growth stocks: 2.0-4.0 (some FMCG and pharma stocks)

## Historical Valuation Analysis — Is the Stock Cheap or Expensive?

Another powerful relative valuation technique is comparing a stock's current valuation to its own historical average.

**How to Do Historical Valuation Analysis:**

1. **Collect historical data:** Get the stock's P/E, P/B, and EV/EBITDA for the past 5-10 years.

2. **Calculate the average and standard deviation:** This tells you the "normal" valuation range for the stock.

3. **Compare current valuation to the historical range:**
   - If current P/E is below the historical average minus 1 standard deviation: Very cheap (potential buying opportunity)
   - If current P/E is near the historical average: Fairly valued
   - If current P/E is above the historical average plus 1 standard deviation: Expensive (potential selling opportunity)

**Example — Historical P/E Analysis of HDFC Bank:**

5-Year Average P/E: 25x
Standard Deviation: 4x
Current P/E: 20x

Current P/E (20x) is below the average minus 1 standard deviation (25 - 4 = 21x). This suggests HDFC Bank is trading at a historically cheap valuation.

**Caution:** A stock can be cheap for a reason. Always investigate WHY the stock is trading at a low valuation before buying. Maybe there's a genuine problem with the business.

## When Relative Valuation Doesn't Work

Relative valuation has limitations:

1. **No true comparables:** If a company is truly unique (like a first-of-its-kind business in India), there may not be good comparable companies.

2. **Cyclical earnings:** During economic downturns, cyclical companies may have very low earnings, making their P/E ratios appear artificially high. In such cases, use EV/EBITDA or P/B instead.

3. **Different accounting standards:** Comparing companies with different accounting policies can be misleading.

4. **Market sentiment:** During bull markets, all stocks may be expensive relative to their historical averages. A stock that appears "cheap" relative to its history may still be overvalued in absolute terms.

5. **Growth differences:** Two companies in the same industry may have very different growth rates, making direct P/E comparison misleading. Use PEG instead.

## Summary — Key Takeaways

1. Relative valuation compares a company's valuation metrics to similar companies or its own historical averages — it's like comparison shopping for stocks.

2. P/E is the most widely used metric but should be compared across peers and over time, not in isolation.

3. EV/EBITDA is better than P/E for comparing companies with different debt levels and is the preferred metric for many professional investors.

4. PEG ratio combines growth and valuation — stocks with PEG < 1 are often good value.

5. Historical valuation analysis helps you identify when a stock is cheap or expensive relative to its own past.

6. Never rely on a single metric — use multiple ratios (P/E, P/B, EV/EBITDA, PEG) to get a complete picture.

7. Always investigate WHY a stock appears cheap before buying — low valuation can be a value trap.`,
      codeSnippet: `Comparable Company Analysis:\n\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\nTarget Company: Infosys\nPeer Group: TCS, Wipro, HCL Tech, Tech Mahindra\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\nValuation Metrics:\nCompany      | P/E   | P/B   | EV/EBITDA | PEG\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\nTCS          | 30.2x | 14.5x | 22.1x     | 2.3\nWipro        | 22.1x | 3.8x  | 16.2x     | 1.5\nHCL Tech     | 25.3x | 6.2x  | 18.4x     | 1.4\nTech M       | 35.1x | 5.8x  | 20.3x     | 2.8\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\nAverage      | 28.2x | 7.6x  | 19.3x     | 2.0\nMedian       | 27.8x | 6.0x  | 19.4x     | 1.9\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\nInfosys Current Metrics:\nP/E: 26.5x (below median)\nP/B: 8.9x (above median)\nEV/EBITDA: 20.1x (above median)\nPEG: 1.6 (below average)\n\nFair Value Estimates:\nUsing P/E: ₹65 × 28.2 = ₹1,833\nUsing EV/EBITDA: ₹1,720\nUsing PEG: ₹1,625\nWeighted Average: ₹1,750\n\nCurrent Price: ₹1,500\nUpside: 17%\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`,
      codeOutput: `Relative Valuation Report:\n\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\nCompany: Infosys (INFY)\nCurrent Price: ₹1,500\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\nPeer Comparison:\n✅ P/E: 26.5x (peer avg: 28.2x) — 6% cheaper\n✅ PEG: 1.6x (peer avg: 2.0x) — better value\n⚠️ P/B: 8.9x (peer avg: 7.6x) — 17% premium\n⚠️ EV/EBITDA: 20.1x (peer avg: 19.3x) — 4% premium\n\nHistorical Valuation (5-year):\n5Y Avg P/E: 24.8x\nCurrent P/E: 26.5x (+7% above avg)\n1 Std Dev Range: 21.5x — 28.1x\nPosition: Within normal range\n\nValuation Conclusion:\nPeer-based Fair Value: ₹1,750 (+17%)\nHistorical Fair Value: ₹1,620 (+8%)\nBlended Fair Value: ₹1,680 (+12%)\n\nRecommendation: FAIRLY VALUED TO SLIGHTLY CHEAP\nThe stock offers modest upside of 8-17% from current levels.\nBest suited for long-term investors with 3+ year horizon.\n\nKey Risks:\n• IT sector slowdown could impact growth\n• Rupee appreciation could hurt margins\n• Client concentration risk in BFSI segment\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`,
      tips: [
        "P/E alone doesn't tell you if a stock is cheap or expensive — always compare to peers and historical averages",
        "EV/EBITDA is the preferred metric for professional investors because it's capital structure neutral",
        "PEG ratio below 1 often indicates undervaluation — but always check if the growth rate is sustainable",
        "A stock can be cheap for a reason — always investigate WHY before buying",
        "Use at least 3-4 valuation metrics to get a complete picture — don't rely on just one"
      ],
      practiceExercises: [
        {
          id: "721",
          difficulty: "Easy",
          task: "Three Indian IT companies have the following P/E ratios: Company A (28x), Company B (22x), Company C (35x). If the average IT sector P/E is 30x, which company appears cheapest and which appears most expensive? What could explain the differences?",
          hint: "Compare each company's P/E to the sector average and think about what drives P/E differences",
          solution: "Company B (22x) appears CHEAPEST — it's trading at a 27% discount to the sector average.\nCompany C (35x) appears MOST EXPENSIVE — it's trading at a 17% premium to the sector average.\n\nPossible explanations for differences:\n- Company B might have lower growth prospects, higher risk, or governance concerns\n- Company C might have higher growth rates, better margins, or a stronger competitive position\n- The differences could also be due to market sentiment, investor preferences, or temporary factors\n\nLesson: Never assume a low P/E means a stock is undervalued. Always investigate the reasons behind the valuation difference."
        },
        {
          id: "722",
          difficulty: "Medium",
          task: "Use comparable company analysis to value a mid-cap Indian FMCG company:\n\nTarget Company Data:\n- EPS: ₹45\n- Net Profit: ₹900 crore\n- Revenue: ₹8,000 crore\n- EBITDA: ₹1,600 crore\n- Net Debt: ₹500 crore\n- Shares: 20 crore\n\nPeer Group Averages:\n- P/E: 45x\n- EV/EBITDA: 35x\n- P/S: 10x\n\nCalculate fair value using each metric and suggest a weighted average fair value.",
          hint: "Apply each peer multiple to the target company's corresponding financial metric",
          solution: "Using P/E:\nFair Value = ₹45 × 45 = ₹2,025 per share\n\nUsing EV/EBITDA:\nEV = ₹1,600 × 35 = ₹56,000 crore\nEquity Value = ₹56,000 - ₹500 = ₹55,500 crore\nFair Value per Share = ₹55,500 / 20 = ₹2,775\n\nUsing P/S:\nMarket Cap = ₹8,000 × 10 = ₹80,000 crore\nFair Value per Share = ₹80,000 / 20 = ₹4,000\n\nWeighted Average (equal weights):\n(₹2,025 + ₹2,775 + ₹4,000) / 3 = ₹2,933\n\nNote: The P/S-based value is much higher because the company has a lower profit margin (11.25%) compared to peers. This suggests the company could improve profitability to match peer levels.\n\nIf current price is ₹2,200, the stock is undervalued by about 33% based on peer comparison."
        },
        {
          id: "723",
          difficulty: "Hard",
          task: "You're analyzing a pharmaceutical company with the following historical P/E data:\n\nYear: 2019, 2020, 2021, 2022, 2023, 2024\nP/E: 18, 22, 35, 28, 24, 20\n\nCurrent P/E: 20x\nIndustry Average P/E: 30x\nCompany Growth Rate: 18%\n\nUsing historical valuation, peer comparison, and PEG analysis, determine if the stock is cheap, fairly valued, or expensive. What's your investment recommendation?",
          hint: "Calculate historical average and standard deviation, compare to peers, and compute PEG ratio",
          solution: "Historical Analysis:\n5-Year Average P/E (2019-2023): (18+22+35+28+24)/5 = 25.4x\nStandard Deviation: 6.2x\nCurrent P/E: 20x\n\nPosition: Current P/E (20x) is below the average (25.4x) and below average minus 1 standard deviation (19.2x). This is at the lower end of the historical range — VERY CHEAP historically.\n\nPeer Comparison:\nCurrent P/E: 20x\nIndustry Average: 30x\nDiscount to Peers: 33%\nThis is a SIGNIFICANT discount to peers.\n\nPEG Analysis:\nP/E: 20x\nGrowth Rate: 18%\nPEG = 20/18 = 1.11\nPEG < 1.5 suggests the stock is reasonably valued relative to its growth.\n\nCombined Assessment:\n✅ Historical: Very cheap (below avg - 1 StdDev)\n✅ Peer Comparison: 33% discount to industry\n✅ PEG: Reasonable at 1.11\n\nPossible Reasons for Low Valuation:\n• Recent regulatory issues or FDA warnings\n• Key product facing competition\n• Management changes or governance concerns\n• Sector rotation away from pharma\n\nInvestment Recommendation:\nThe stock appears to be a VALUE OPPORTUNITY, but the low valuation could be justified by fundamental concerns.\n\nAction Plan:\n1. Investigate WHY the stock is cheap (read recent annual reports, management commentary)\n2. Check if the growth rate of 18% is sustainable\n3. Look at promoter holding and institutional investor trends\n4. If fundamentals are intact, this is a BUY at current levels\n5. If there are genuine concerns, wait for more clarity before investing"
        }
      ]
    },
    {
      id: "73",
      title: "Sum-of-Parts, Asset-Based Valuation & Other Methods",
      duration: "2 hours",
      content: `## Sum-of-Parts (SOTP) Valuation — When a Company is Worth More Than Its Parts

Sometimes, a company operates in multiple businesses, and the market values it based on its overall earnings. But if you break the company into its individual business segments, the total value of each segment separately might be HIGHER than the company's current market value. This is called the "conglomerate discount" — the market undervalues diversified companies because they're harder to analyze.

Sum-of-Parts valuation values each business segment separately and adds them up to get the total company value.

**When to Use SOTP:**

- The company operates in multiple unrelated businesses (like Tata Group companies, Reliance Industries, ITC)
- One segment might be dragging down the valuation of other segments
- The company has significant investments in other companies (holdings, subsidiaries)
- The market is not recognizing the full value of certain business segments

**How SOTP Works:**

1. Identify all business segments and investments
2. Choose the appropriate valuation metric for each segment (P/E for profitable businesses, EV/EBITDA for capital-intensive businesses, P/B for financial businesses)
3. Apply industry-appropriate multiples to each segment
4. Sum up all segment values
5. Subtract net debt
6. Divide by number of shares to get per-share value

**Example — SOTP Valuation of ITC Limited:**

ITC operates in five distinct businesses:

1. **FMCG (Non-Tobacco):** Brands like Aashirvaad, Sunfeast, Bingo, etc.
   - Revenue: ₹18,000 crore
   - EBITDA: ₹2,500 crore
   - Appropriate Multiple: 35x EV/EBITDA (FMCG peers)
   - Segment Value: ₹87,500 crore

2. **Cigarettes/Tobacco:** India's largest cigarette manufacturer
   - Revenue: ₹28,000 crore
   - EBIT: ₹15,000 crore
   - Appropriate Multiple: 12x P/E (tobacco companies trade at lower multiples)
   - Segment Value: ₹1,80,000 crore

3. **Hotels:** ITC Hotels chain
   - Revenue: ₹3,500 crore
   - EBITDA: ₹800 crore
   - Appropriate Multiple: 20x EV/EBITDA
   - Segment Value: ₹16,000 crore

4. **Agri-Business:** Farm-to-plate supply chain
   - Revenue: ₹5,000 crore
   - EBITDA: ₹500 crore
   - Appropriate Multiple: 15x EV/EBITDA
   - Segment Value: ₹7,500 crore

5. **Paper & Packaging:**
   - Revenue: ₹3,000 crore
   - EBITDA: ₹400 crore
   - Appropriate Multiple: 12x EV/EBITDA
   - Segment Value: ₹4,800 crore

6. **Investments and Other Assets:** ₹10,000 crore

**Total Enterprise Value:** ₹87,500 + ₹1,80,000 + ₹16,000 + ₹7,500 + ₹4,800 + ₹10,000 = ₹3,05,800 crore

**Less Net Debt:** ₹2,000 crore

**Equity Value:** ₹3,03,800 crore

**Per Share (with 124 crore shares):** ₹2,450

If the current market price is ₹450, the SOTP analysis suggests ITC might be significantly undervalued — but this analysis also shows that the FMCG business (which gets the highest multiple) is a significant contributor to value.

**SOTP Limitations:**

1. Choosing the right multiple for each segment is subjective
2. Some segments may not have clear comparable companies
3. Conglomerate discounts can persist for years
4. The analysis can be complex for companies with many business segments

## Asset-Based Valuation — What is the Company's Assets Worth?

Asset-based valuation values a company based on the net value of its assets. This is most useful for:

- **Asset-heavy companies:** Manufacturing, real estate, infrastructure
- **Companies being liquidated:** When a company is shutting down, its assets are sold
- **Banks and financial institutions:** Book value is a meaningful measure
- **Investment companies:** The value of their investment portfolio

**Two Main Approaches:**

**1. Book Value Method:**

Book Value = Total Assets - Total Liabilities

This is the simplest form of asset-based valuation. It uses the values reported in the company's balance sheet.

**Example:** If a company has total assets of ₹10,000 crore and total liabilities of ₹4,000 crore, the book value is ₹6,000 crore. If there are 10 crore shares, the book value per share is ₹600.

**When Book Value Works:**
- Banks (book value reflects the loan portfolio)
- Insurance companies
- Real estate companies (if assets are marked to market)
- Companies with minimal intangible assets

**When Book Value Doesn't Work:**
- IT services companies (value is in people, not assets)
- FMCG companies (brand value not in book value)
- Technology companies (intellectual property not reflected)
- Companies with outdated asset values

**2. Net Asset Value (NAV) Method:**

NAV adjusts the book value to reflect the current market value of assets. This is particularly useful for:

- **Real estate companies:** Properties may have appreciated significantly since they were purchased, but the balance sheet still shows historical cost.
- **Investment companies:** The market value of their investments may be very different from the book value.

**Example:** A real estate company owns land purchased for ₹500 crore (book value). The current market value of the land is ₹2,000 crore. The NAV method would use ₹2,000 crore instead of ₹500 crore, adding ₹1,500 crore to the company's value.

**How to Calculate NAV:**

1. Start with book value of equity
2. Add: Appreciation in real estate (market value - book value)
3. Add: Appreciation in investments (market value - book value)
4. Subtract: Any contingent liabilities or provisions
5. Result: Adjusted NAV

## Other Valuation Methods — Quick Overview

**1. Dividend Discount Model (DDM):**

Values a stock based on the present value of all future dividends. Best for:
- High-dividend-paying stocks (Coal India, Power Grid, ITC)
- Utility companies with stable dividends
- Companies with long dividend histories

Formula: Value = D₁ / (r - g)
Where D₁ = next year's expected dividend, r = required return, g = dividend growth rate

**When to Use DDM:**
- Company has a long, stable dividend history
- Dividends are expected to grow at a steady rate
- The company is mature and generates consistent cash flows

**When NOT to Use DDM:**
- Companies that don't pay dividends
- Companies with volatile dividends
- Growth companies that reinvest all profits

**Example — DDM Valuation of Power Grid Corporation:**

Current Dividend: ₹5.50 per share
Expected Growth: 8% per year
Required Return: 12%

Value = ₹5.50 × 1.08 / (0.12 - 0.08) = ₹5.94 / 0.04 = ₹148.50

If the current price is ₹260, the DDM suggests Power Grid is overvalued at the current price. However, the DDM assumes a constant growth rate forever, which may not be realistic.

**2. EV/Revenue Valuation:**

Useful for companies that are not yet profitable or have very thin margins.

EV/Revenue = Enterprise Value ÷ Revenue

**When to Use:**
- Early-stage companies
- Companies with negative earnings
- Comparing companies with different cost structures

**Typical EV/Revenue Ranges:**
- IT Services: 5-10x
- FMCG: 8-15x
- Manufacturing: 2-5x
- Startups: 1-20x (highly variable)

**3. Replacement Cost Method:**

Estimates the cost of recreating the company's assets from scratch. This is useful for:
- Infrastructure companies (power plants, roads, ports)
- Manufacturing companies with significant capital investment
- Companies with unique assets that are difficult to replicate

**How It Works:**
1. Identify all major assets (factories, equipment, land, intellectual property)
2. Estimate the cost of building or acquiring each asset today
3. Subtract liabilities
4. The result is the replacement cost value

**Example:** A cement company owns a plant built 10 years ago for ₹1,000 crore. The book value (after depreciation) is ₹400 crore. But building the same plant today would cost ₹2,500 crore. The replacement cost method would value the plant at ₹2,500 crore.

## Choosing the Right Valuation Method — A Decision Framework

| Scenario | Best Method | Why |
|---|---|---|
| Stable, dividend-paying company | DDM or P/E | Dividends are predictable and meaningful |
| High-growth company | P/E (forward) or PEG | Future earnings growth is the key driver |
| Multi-business conglomerate | SOTP | Each business should be valued separately |
| Asset-heavy company | P/B or NAV | Assets are the primary source of value |
| Unprofitable startup | EV/Revenue or P/S | Earnings don't exist yet |
| Cyclical company | EV/EBITDA or P/B | Earnings vary with the cycle |
| Bank or financial company | P/B | Book value reflects the asset base |
| Mature, stable company | DCF | Cash flows are predictable |
| Quick screening | P/E, P/B | Easy to calculate and compare |

## Building a Comprehensive Valuation — Putting It All Together

The best valuation approach uses multiple methods and takes a weighted average:

**Step 1: DCF Valuation**
Calculate the DCF value using reasonable assumptions.

**Step 2: Relative Valuation**
Compare P/E, EV/EBITDA, and P/B to peers and historical averages.

**Step 3: SOTP (if applicable)**
If the company has multiple business segments, do an SOTP analysis.

**Step 4: DDM (if applicable)**
If the company pays consistent dividends, do a DDM analysis.

**Step 5: Weighted Average**
Assign weights based on your confidence in each method:
- DCF: 30-40% (most theoretically sound but assumption-heavy)
- Relative: 30-40% (practical and widely used)
- SOTP: 10-20% (if applicable)
- DDM: 5-10% (if applicable)

**Step 6: Margin of Safety**
Apply a 15-25% margin of safety to account for errors in your assumptions. If the weighted average valuation is ₹500, only buy if the market price is below ₹425 (15% margin of safety).

## Summary — Key Takeaways

1. SOTP valuation is powerful for diversified companies — it can reveal hidden value that the market overlooks.

2. Asset-based valuation works best for asset-heavy companies (banks, real estate, manufacturing) and is less useful for service or technology companies.

3. DDM is ideal for stable, dividend-paying companies like Power Grid and Coal India.

4. No single valuation method is perfect — use multiple methods and take a weighted average.

5. Always apply a margin of safety (15-25%) to account for errors in your assumptions.

6. The best valuation approach depends on the specific company — match the method to the company's characteristics.`,
      codeSnippet: `Valuation Method Selection Guide:\n\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\nCompany Type → Best Method → Weight\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\nStable Dividend Stock (Power Grid)\n→ DDM: 30% | P/E: 30% | DCF: 40%\n\nHigh-Growth IT (TCS, Infosys)\n→ P/E: 25% | DCF: 40% | PEG: 20% | EV/EBITDA: 15%\n\nDiversified Conglomerate (ITC, Reliance)\n→ SOTP: 35% | P/E: 25% | DCF: 30% | P/B: 10%\n\nBank (HDFC Bank, SBI)\n→ P/B: 35% | P/E: 25% | DCF: 25% | Dividend Yield: 15%\n\nManufacturing (Tata Steel, JSW)\n→ EV/EBITDA: 30% | P/B: 25% | DCF: 30% | P/S: 15%\n\nFMCG (HUL, ITC)\n→ P/E: 30% | DCF: 30% | EV/EBITDA: 25% | PEG: 15%\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\nValuation Example: ITC\n\nSOTP Value: ₹520\nP/E Value: ₹480\nDCF Value: ₹450\nDDM Value: ₹500\n\nWeighted Average: ₹488\nMargin of Safety (20%): ₹390\n\nCurrent Price: ₹420\nVerdict: FAIRLY VALUED (price near fair value)\nRecommendation: ACCUMULATE below ₹390`,
      codeOutput: `Comprehensive Valuation Report:\n\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\nCompany: ITC Limited\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\nMethod 1: SOTP Analysis\nFMCG Business: ₹87,500 Cr\nTobacco Business: ₹1,80,000 Cr\nHotels: ₹16,000 Cr\nAgri-Business: ₹7,500 Cr\nPaper: ₹4,800 Cr\nInvestments: ₹10,000 Cr\nTotal EV: ₹3,05,800 Cr\nNet Debt: ₹2,000 Cr\nEquity Value: ₹3,03,800 Cr\nPer Share: ₹2,450\nWeight: 35%\n\nMethod 2: P/E Comparison\nPeer Average P/E: 45x\nITC EPS: ₹12.50\nFair Value: ₹563\nWeight: 25%\n\nMethod 3: DCF\nFCF: ₹20,000 Cr\nGrowth: 10% (5Y), 5% (terminal)\nDiscount: 12%\nFair Value: ₹450\nWeight: 30%\n\nMethod 4: DDM\nDPS: ₹6.00\nGrowth: 8%\nRequired Return: 12%\nFair Value: ₹156 (DDM undervalues due to low payout)\nWeight: 10%\n\nWeighted Fair Value:\n(₹2,450 × 0.35) + (₹563 × 0.25) + (₹450 × 0.30) + (₹156 × 0.10)\n= ₹858 + ₹141 + ₹135 + ₹16 = ₹1,150\n\nMargin of Safety (20%): ₹920\nCurrent Price: ₹420\nUpside to Fair Value: +174%\nUpside with MoS: +119%\n\nVerdict: SIGNIFICANTLY UNDERVALUED\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`,
      tips: [
        "SOTP is powerful for conglomerates like ITC and Reliance — the market often undervalues diversified companies",
        "DDM works best for consistent dividend payers like Power Grid and Coal India",
        "Always use multiple valuation methods and take a weighted average for the most reliable estimate",
        "Apply a 15-25% margin of safety to account for errors in your assumptions",
        "For banks and financial companies, P/B is more meaningful than P/E"
      ],
      practiceExercises: [
        {
          id: "731",
          difficulty: "Easy",
          task: "A company has two business segments: Pharma (₹5,000 crore revenue, 20x EV/EBITDA multiple) and FMCG (₹3,000 crore revenue, 40x EV/EBITDA multiple). EBITDA margins are 15% for Pharma and 20% for FMCG. Using SOTP, calculate the total enterprise value.",
          hint: "Calculate EBITDA for each segment, apply the appropriate multiple, and sum them up",
          solution: "Pharma Segment:\nRevenue: ₹5,000 crore\nEBITDA Margin: 15%\nEBITDA: ₹5,000 × 15% = ₹750 crore\nMultiple: 20x EV/EBITDA\nSegment Value: ₹750 × 20 = ₹15,000 crore\n\nFMCG Segment:\nRevenue: ₹3,000 crore\nEBITDA Margin: 20%\nEBITDA: ₹3,000 × 20% = ₹600 crore\nMultiple: 40x EV/EBITDA\nSegment Value: ₹600 × 40 = ₹24,000 crore\n\nTotal Enterprise Value: ₹15,000 + ₹24,000 = ₹39,000 crore\n\nNote: The FMCG segment, despite having lower revenue, is worth much more because of its higher margins and the premium multiple the market assigns to FMCG businesses."
        },
        {
          id: "732",
          difficulty: "Medium",
          task: "Using the DDM model, value a stock with the following data:\n- Current dividend: ₹8 per share\n- Expected dividend growth: 10% per year\n- Required rate of return: 14%\n- Current market price: ₹180\n\nIs the stock undervalued or overvalued? Also, calculate the value if the growth rate drops to 7%.",
          hint: "Use the Gordon Growth Model: Value = D₁ / (r - g), where D₁ = D₀ × (1+g)",
          solution: "Scenario 1: Growth = 10%\nD₁ = ₹8 × 1.10 = ₹8.80\nValue = ₹8.80 / (0.14 - 0.10) = ₹8.80 / 0.04 = ₹220\n\nCurrent Price: ₹180\nUndervaluation: ₹220 - ₹180 = ₹40 (18% upside)\nVerdict: UNDERVALUED\n\nScenario 2: Growth = 7%\nD₁ = ₹8 × 1.07 = ₹8.56\nValue = ₹8.56 / (0.14 - 0.07) = ₹8.56 / 0.07 = ₹122.29\n\nCurrent Price: ₹180\nOvervaluation: ₹180 - ₹122.29 = ₹57.71 (32% downside)\nVerdict: OVERVALUED\n\nKey Insight: The DDM is VERY sensitive to the growth rate assumption. A 3% change in growth (from 10% to 7%) changed the fair value from ₹220 to ₹122 — a 45% drop! This is why DDM should be used alongside other valuation methods."
        },
        {
          id: "733",
          difficulty: "Hard",
          task: "You're asked to value Reliance Industries using multiple methods. The company has three main businesses: O2C (Oil-to-Chemicals), Digital (Jio), and Retail. Provide a brief SOTP analysis, explain which other valuation methods you would use for each segment, and justify your choice of weights for a final weighted average valuation.",
          hint: "Think about what valuation method is most appropriate for each business segment based on its characteristics",
          solution: "SOTP Analysis for Reliance Industries:\n\n1. O2C Business (Oil-to-Chemicals):\n- Revenue: ~₹5,00,000 crore\n- EBITDA: ~₹60,000 crore\n- Best Method: EV/EBITDA (capital-intensive, cyclical)\n- Appropriate Multiple: 8-10x (global O2C peers)\n- Segment Value: ~₹5,00,000 crore\n\n2. Digital Business (Jio):\n- Revenue: ~₹1,00,000 crore\n- Subscribers: 45+ crore\n- Best Method: EV/Subscriber or EV/Revenue\n- Appropriate Multiple: ₹2,500-3,000 per subscriber\n- Segment Value: ~₹12,00,000-13,50,000 crore\n\n3. Retail Business:\n- Revenue: ~₹3,00,000 crore\n- EBITDA: ~₹20,000 crore\n- Best Method: EV/EBITDA or P/S (high growth, market leader)\n- Appropriate Multiple: 40-50x EV/EBITDA (retail premium)\n- Segment Value: ~₹8,00,000-10,00,000 crore\n\nTotal Enterprise Value: ~₹25,00,000-28,50,000 crore\nLess Net Debt: ~₹3,00,000 crore\nEquity Value: ~₹22,00,000-25,50,000 crore\nPer Share: ~₹3,200-3,700\n\nRecommended Weights:\n- SOTP: 35% (best for conglomerates)\n- P/E: 25% (overall company metric)\n- DCF: 25% (for long-term value)\n- EV/Revenue: 15% (for growth businesses)\n\nJustification:\nSOTP gets highest weight because Reliance is a true conglomerate with very different businesses. P/E and DCF provide cross-checks. EV/Revenue captures the growth potential of Jio and Retail.\n\nMargin of Safety: 20% applied to weighted average\nBuy Zone: Below ₹2,800 per share"
        }
      ]
    }
  ]
};
