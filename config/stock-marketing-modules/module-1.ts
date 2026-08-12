import type { Module } from "../courses";

export const MODULE_1: Module = {
  id: "module-1-stock-foundations",
  title: "Module 1: Foundations of Stock Market Investing",
  description:
    "Understand how the stock market works, learn key terminology, and build a solid foundation for your investing journey.",
  lessons: [
    {
      id: "intro-stock-market",
      title: "Lesson 1: Introduction to the Stock Market",
      shortDescription:
        "What is the stock market, how it works, and why it's essential for building long-term wealth.",
      duration: "45 mins",
      readingTime: "9 mins read",
      contentMarkdown: `### What is the Stock Market?

The stock market is a marketplace where buyers and sellers come together to trade shares of publicly listed companies. When you buy a stock, you're purchasing a small piece of ownership in that company — making you a **shareholder**.

#### Why the Stock Market Matters

- **Wealth Building**: Historically, stocks have returned ~10% annually on average over the long term.
- **Beat Inflation**: Cash loses value over time due to inflation; stocks typically outpace it.
- **Compound Growth**: Reinvested returns generate their own returns, creating exponential growth.
- **Liquidity**: Stocks can be bought and sold quickly, unlike real estate or other investments.

> **Mental model:** Think of the stock market as a giant auction house where company ownership is auctioned off. Prices go up when more people want to buy, and down when more people want to sell.

#### The History of Stock Markets

| Year | Milestone | Significance |
|---|---|---|
| 1602 | Dutch East India Company | First publicly traded company |
| 1792 | Buttonwood Agreement | Formation of what became the NYSE |
| 1971 | NASDAQ launches | First electronic stock exchange |
| 1990s | Internet boom | Democratized access via online brokers |
| 2008 | Financial crisis | Lessons on risk and regulation |
| 2020s | Commission-free trading | Accessible to everyone |

#### How Companies Go Public

1. **Initial Public Offering (IPO)**: Company offers shares to the public for the first time
2. **Listing**: Shares begin trading on a stock exchange (NYSE, NASDAQ)
3. **Secondary Market**: Investors trade shares among themselves

---

### Key Stock Market Terminology

| Term | Definition | Example |
|---|---|---|
| **Stock/Share** | A unit of ownership in a company | "I own 100 shares of Apple" |
| **Ticker Symbol** | Abbreviated code for a stock | AAPL (Apple), GOOGL (Google) |
| **Market Capitalization** | Total value of all shares (price × shares outstanding) | Apple: ~$3 trillion |
| **Dividend** | Payment made to shareholders from company profits | "$0.24 per share quarterly" |
| **Bull Market** | Period of rising stock prices | 2009-2020 bull run |
| **Bear Market** | Period of falling stock prices (typically >20% decline) | 2020 COVID crash |
| **Volatility** | Degree of price fluctuation | High volatility = big swings |
| **Liquidity** | How easily an asset can be bought/sold | Large-cap stocks = high liquidity |

> **Key insight:** Understanding these terms is like learning the rules of a game — you can't win if you don't know how the pieces move.

#### Major Stock Exchanges

| Exchange | Location | Notable Features |
|---|---|---|
| New York Stock Exchange (NYSE) | New York, USA | Largest exchange by market cap |
| NASDAQ | New York, USA | Tech-heavy, electronic trading |
| London Stock Exchange | London, UK | Oldest exchange (1801) |
| Tokyo Stock Exchange | Tokyo, Japan | Largest in Asia |
| Shanghai Stock Exchange | Shanghai, China | Rapidly growing |

---

### Common Mistakes to Avoid

- **Mistake:** Thinking the stock market is a get-rich-quick scheme — **Fix:** It's a long-term wealth-building tool.
- **Mistake:** Investing money you'll need soon — **Fix:** Only invest money you won't need for at least 5 years.
- **Mistake:** Trying to time the market — **Fix:** Focus on time IN the market, not timing the market.
- **Mistake:** Not understanding what you're buying — **Fix:** Research companies before investing.

### Professional Tips & Tricks

- Start early — compound growth needs time to work its magic.
- Diversify — don't put all your eggs in one basket.
- Invest consistently — regular contributions smooth out market volatility.
- Stay informed but don't overreact to daily news.

---

### Key Takeaways

- The stock market is where company ownership is bought and sold.
- Stocks have historically provided the best long-term returns of any asset class.
- Key terminology includes shares, market cap, dividends, and market conditions.
- Successful investing requires patience, diversification, and consistent contributions.

**Next up:** Understanding different types of stocks and how to evaluate them.`,
      codeLanguage: "text",
      codeSnippet: `# Stock Market Fundamentals

## The Power of Compound Growth

Initial Investment: $10,000
Annual Return: 10%
Time Horizon: 30 years

Year 5:   $16,105
Year 10:  $25,937
Year 15:  $41,772
Year 20:  $67,275
Year 25: $108,347
Year 30: $174,494

💡 $10,000 invested at 10% for 30 years = $174,494
   That's 17.4x your money!

## Key Market Metrics

S&P 500 Historical Returns:
- Average annual return: ~10%
- Best year: +54% (1933)
- Worst year: -37% (1931)
- Average bear market duration: ~1.3 years
- Average bull market duration: ~6.6 years

## Portfolio Basics

Conservative Portfolio:
- 60% Bonds, 40% Stocks
- Expected return: 6-8% annually

Balanced Portfolio:
- 50% Stocks, 50% Bonds
- Expected return: 7-9% annually

Growth Portfolio:
- 80% Stocks, 20% Bonds
- Expected return: 9-11% annually`,
      codeOutput: `Stock Market Fundamentals

## The Power of Compound Growth

Initial Investment: $10,000
Annual Return: 10%
Time Horizon: 30 years

Year 5:   $16,105
Year 10:  $25,937
Year 15:  $41,772
Year 20:  $67,275
Year 25: $108,347
Year 30: $174,494

💡 $10,000 invested at 10% for 30 years = $174,494
   That's 17.4x your money!

## Key Market Metrics

S&P 500 Historical Returns:
- Average annual return: ~10%
- Best year: +54% (1933)
- Worst year: -37% (1931)
- Average bear market duration: ~1.3 years
- Average bull market duration: ~6.6 years

## Portfolio Basics

Conservative Portfolio:
- 60% Bonds, 40% Stocks
- Expected return: 6-8% annually

Balanced Portfolio:
- 50% Stocks, 50% Bonds
- Expected return: 7-9% annually

Growth Portfolio:
- 80% Stocks, 20% Bonds
- Expected return: 9-11% annually`,
      visualizationTips: [
        "Draw a simple supply and demand graph to understand how stock prices move.",
        "Create a timeline of major market events to understand historical context.",
        "Use a compound interest calculator to visualize long-term growth.",
      ],
      tipsAndTricks: [
        "Start with index funds — they provide instant diversification.",
        "Set up automatic investments — it removes emotion from the equation.",
        "Keep your investment costs low — fees eat into returns significantly.",
      ],
      practice: [
        {
          id: "practice-market-basics",
          title: "Market Terminology Quiz",
          difficulty: "Easy",
          task: "Define these terms in your own words: market capitalization, dividend, bear market, ticker symbol.",
          hint: "Think about how each concept affects your investment decisions.",
          solution: `Market Capitalization: The total value of a company's shares (share price × number of shares). Helps compare company sizes.

Dividend: Cash payments made to shareholders from company profits, usually quarterly. Provides income without selling shares.

Bear Market: A period when stock prices fall 20% or more from recent highs. Often accompanied by economic recession.

Ticker Symbol: Short abbreviation used to identify a stock on an exchange (e.g., AAPL for Apple). Used when placing trades.`,
        },
        {
          id: "practice-compound-growth",
          title: "Compound Growth Calculator",
          difficulty: "Medium",
          task: "Calculate how much $5,000 invested annually at 8% return would grow to in 20 years. Compare this to simply saving $5,000 annually without investing.",
          hint: "Use the future value of annuity formula or an online calculator.",
          solution: `Investment Scenario:
- Annual contribution: $5,000
- Annual return: 8%
- Time horizon: 20 years

With investing (8% return):
- Total contributed: $100,000
- Final value: ~$233,048
- Growth: $133,048

Without investing (0% return):
- Total saved: $100,000
- Final value: $100,000
- Growth: $0

Difference: $133,048 more with investing!`,
        },
      ],
    },
    {
      id: "types-of-stocks",
      title: "Lesson 2: Types of Stocks & Asset Classes",
      shortDescription:
        "Understand different stock categories, sectors, and asset classes to build a diversified portfolio.",
      duration: "50 mins",
      readingTime: "10 mins read",
      contentMarkdown: `### Categories of Stocks

Stocks can be classified in several ways — by size, style, sector, and geography. Understanding these categories helps you build a diversified portfolio that balances risk and reward.

#### By Market Capitalization

| Category | Market Cap | Characteristics | Risk/Reward |
|---|---|---|---|
| **Large-Cap** | > $10 billion | Stable, established companies | Lower risk, moderate returns |
| **Mid-Cap** | $2-10 billion | Growth potential with some stability | Medium risk, medium returns |
| **Small-Cap** | < $2 billion | High growth potential, less stable | Higher risk, higher potential returns |

> **Mental model:** Think of market cap like company size — large-caps are like established oak trees (steady, reliable), while small-caps are like young saplings (fast-growing but vulnerable).

#### By Investment Style

| Style | Description | Best For |
|---|---|---|
| **Growth Stocks** | Companies expected to grow faster than the market | Investors seeking capital appreciation |
| **Value Stocks** | Undervalued companies trading below intrinsic worth | Investors seeking bargains and dividends |
| **Income Stocks** | Companies that pay high, consistent dividends | Investors seeking regular income |
| **Blue-Chip Stocks** | Large, well-established, financially sound companies | Conservative, long-term investors |

#### By Sector

| Sector | Examples | Characteristics |
|---|---|---|
| **Technology** | Apple, Microsoft, Google | High growth, volatile |
| **Healthcare** | Johnson & Johnson, Pfizer | Defensive, stable demand |
| **Financial** | JPMorgan, Berkshire Hathaway | Tied to interest rates |
| **Consumer Staples** | Coca-Cola, Procter & Gamble | Stable, recession-resistant |
| **Energy** | ExxonMobil, Chevron | Tied to oil prices |
| **Real Estate (REITs)** | Vanguard Real Estate ETF | High dividends, interest rate sensitive |

---

### Beyond Stocks: Other Asset Classes

| Asset Class | Description | Risk Level | Return Potential |
|---|---|---|---|
| **Bonds** | Loans to governments/companies | Low-Medium | 3-6% annually |
| **Real Estate** | Property or REITs | Medium | 5-10% annually |
| **Commodities** | Gold, oil, agricultural products | High | Variable |
| **Cryptocurrency** | Digital currencies (Bitcoin, Ethereum) | Very High | Highly variable |
| **Cash/Money Market** | Savings accounts, CDs | Very Low | 1-5% annually |

> **Key insight:** Diversification across asset classes is the closest thing to a "free lunch" in investing — it can reduce risk without proportionally reducing returns.

---

### Common Mistakes to Avoid

- **Mistake:** Only investing in one sector — **Fix:** Diversify across multiple sectors.
- **Mistake:** Confusing stock price with value — **Fix:** A $10 stock isn't "cheaper" than a $100 stock.
- **Mistake:** Ignoring dividends — **Fix:** Reinvesting dividends significantly boosts long-term returns.
- **Mistake:** Chasing hot sectors — **Fix:** By the time a sector is "hot," the easy gains are often gone.

### Professional Tips & Tricks

- Use index funds or ETFs for instant diversification across sectors.
- Consider your age when choosing between growth and value stocks.
- Younger investors can afford more risk (more growth stocks).
- Older investors may prefer income and stability (more value/income stocks).

---

### Key Takeaways

- Stocks are categorized by market cap, investment style, and sector.
- Large-cap stocks are generally safer; small-caps offer higher growth potential.
- Diversification across asset classes reduces portfolio risk.
- Index funds and ETFs provide easy diversification for most investors.

**Next up:** Fundamental analysis — how to evaluate whether a stock is worth buying.`,
      codeLanguage: "text",
      codeSnippet: `# Stock Types & Portfolio Allocation Guide

## Market Cap Categories

| Category | Market Cap | Example Companies | Risk Level |
|----------|------------|-------------------|------------|
| Large-Cap | > $10B | AAPL, MSFT, AMZN | Low-Medium |
| Mid-Cap | $2-10B | SNAP, ETSY, ROKU | Medium |
| Small-Cap | < $2B | Various growth companies | High |

## Sample Diversified Portfolio

### Conservative (Near Retirement)
- 30% US Large-Cap Stocks
- 10% US Mid/Small-Cap Stocks
- 20% International Stocks
- 30% Bonds
- 10% Cash

### Balanced (Mid-Career)
- 40% US Large-Cap Stocks
- 15% US Mid/Small-Cap Stocks
- 25% International Stocks
- 15% Bonds
- 5% Cash

### Aggressive (Early Career)
- 50% US Large-Cap Stocks
- 20% US Mid/Small-Cap Stocks
- 25% International Stocks
- 5% Bonds
- 0% Cash

## Sector Diversification

Recommended allocation by sector:
- Technology: 20-25%
- Healthcare: 10-15%
- Financial: 10-15%
- Consumer Discretionary: 10-15%
- Industrials: 10-15%
- Other sectors: 15-20%`,
      codeOutput: `Stock Types & Portfolio Allocation Guide

## Market Cap Categories

| Category | Market Cap | Example Companies | Risk Level |
|----------|------------|-------------------|------------|
| Large-Cap | > $10B | AAPL, MSFT, AMZN | Low-Medium |
| Mid-Cap | $2-10B | SNAP, ETSY, ROKU | Medium |
| Small-Cap | < $2B | Various growth companies | High |

## Sample Diversified Portfolio

### Conservative (Near Retirement)
- 30% US Large-Cap Stocks
- 10% US Mid/Small-Cap Stocks
- 20% International Stocks
- 30% Bonds
- 10% Cash

### Balanced (Mid-Career)
- 40% US Large-Cap Stocks
- 15% US Mid/Small-Cap Stocks
- 25% International Stocks
- 15% Bonds
- 5% Cash

### Aggressive (Early Career)
- 50% US Large-Cap Stocks
- 20% US Mid/Small-Cap Stocks
- 25% International Stocks
- 5% Bonds
- 0% Cash

## Sector Diversification

Recommended allocation by sector:
- Technology: 20-25%
- Healthcare: 10-15%
- Financial: 10-15%
- Consumer Discretionary: 10-15%
- Industrials: 10-15%
- Other sectors: 15-20%`,
      visualizationTips: [
        "Create a pie chart of your ideal portfolio allocation by asset class.",
        "Map out sector correlations — some sectors move together, others don't.",
        "Use a risk/reward graph to visualize where different stock types fall.",
      ],
      tipsAndTricks: [
        "Target-date funds automatically adjust your allocation as you age.",
        "Rebalance your portfolio annually to maintain your target allocation.",
        "Don't chase performance — what went up last year may not go up this year.",
      ],
      practice: [
        {
          id: "practice-portfolio-design",
          title: "Portfolio Design Exercise",
          difficulty: "Medium",
          task: "Design a diversified portfolio for a 30-year-old investor with a $50,000 investment. Include specific allocations to different asset classes and explain your reasoning.",
          hint: "Consider risk tolerance, time horizon, and diversification.",
          solution: `Portfolio for 30-year-old investor:
US Total Stock Market Index Fund: 40% ($20,000)
International Stock Index Fund: 25% ($12,500)
US Bond Index Fund: 15% ($7,500)
Real Estate (REIT) Fund: 10% ($5,000)
Small-Cap Value Fund: 10% ($5,000)

Rationale:
- Long time horizon allows for growth focus
- International diversification reduces US-specific risk
- Bonds provide stability during market downturns
- REITs add real estate exposure without buying property
- Small-cap value historically outperforms over long periods`,
        },
        {
          id: "practice-sector-analysis",
          title: "Sector Analysis",
          difficulty: "Easy",
          task: "List 3 companies from each of these sectors: Technology, Healthcare, and Consumer Staples. For each company, identify one strength and one risk.",
          hint: "Think about competitive advantages and potential threats.",
          solution: `Technology:
- Apple (AAPL): Strength - Brand loyalty; Risk - Regulatory pressure
- Microsoft (MSFT): Strength - Cloud dominance; Risk - Competition from AWS
- Google (GOOGL): Strength - Search monopoly; Risk - Ad revenue dependency

Healthcare:
- Johnson & JNJ: Strength - Diversified products; Risk - Lawsuit exposure
- Pfizer (PFE): Strength - Vaccine pipeline; Risk - Patent cliffs
- UnitedHealth (UNH): Strength - Insurance moat; Risk - Regulatory changes

Consumer Staples:
- Coca-Cola (KO): Strength - Global brand; Risk - Health trends
- Procter & Gamble (PG): Strength - Product portfolio; Risk - Commodity costs
- Walmart (WMT): Strength - Scale; Risk - E-commerce competition`,
        },
      ],
    },
    {
      id: "fundamental-analysis",
      title: "Lesson 3: Fundamental Analysis for Stock Evaluation",
      shortDescription:
        "Learn how to evaluate stocks using financial statements, ratios, and valuation metrics.",
      duration: "55 mins",
      readingTime: "11 mins read",
      contentMarkdown: `### What is Fundamental Analysis?

Fundamental analysis is the process of evaluating a stock's **intrinsic value** by examining its financial health, competitive position, and growth prospects. It answers the question: "Is this company worth what the market is currently charging?"

#### The Three Financial Statements

| Statement | What It Shows | Key Metrics |
|---|---|---|
| **Income Statement** | Revenue, expenses, and profit over a period | Revenue, Net Income, EPS |
| **Balance Sheet** | Assets, liabilities, and equity at a point in time | Total Assets, Debt, Equity |
| **Cash Flow Statement** | Cash generated and used over a period | Operating Cash Flow, Free Cash Flow |

> **Mental model:** Think of financial statements as a company's report card — the income statement shows grades (performance), the balance sheet shows resources (assets vs. liabilities), and the cash flow statement shows actual cash in hand.

#### Key Financial Ratios

| Ratio | Formula | What It Tells You | Good Benchmark |
|---|---|---|---|
| **P/E Ratio** | Price per share / EPS | How much you're paying for $1 of earnings | 15-25 for stable companies |
| **P/B Ratio** | Price per share / Book value per share | How market value compares to net asset value | < 3.0 is generally reasonable |
| **Debt-to-Equity** | Total Debt / Shareholders' Equity | Financial leverage and risk | < 1.0 is conservative |
| **Current Ratio** | Current Assets / Current Liabilities | Short-term liquidity | > 1.5 is healthy |
| **ROE** | Net Income / Shareholders' Equity | How efficiently equity generates profits | > 15% is strong |
| **ROA** | Net Income / Total Assets | How efficiently assets generate profits | > 5% is good |

#### How to Read an Income Statement

**Revenue** → **Cost of Goods Sold** = **Gross Profit**
**Gross Profit** → **Operating Expenses** = **Operating Income**
**Operating Income** → **Interest & Taxes** = **Net Income**

**Example:**
Revenue: $100M
COGS: ($40M)
Gross Profit: $60M (60% margin)
Operating Expenses: ($30M)
Operating Income: $30M (30% margin)
Interest & Taxes: ($10M)
Net Income: $20M (20% net margin)

---

### Valuation Methods

#### 1. Discounted Cash Flow (DCF)

Estimates a company's value based on projected future cash flows, discounted to present value.

**Formula:**
Value = Σ (Cash Flow / (1 + Discount Rate)^Year)

> **Key insight:** A company is worth the sum of all its future cash flows, adjusted for the time value of money.

#### 2. Comparable Company Analysis (Comps)

Compare a company's valuation multiples to similar companies.

**Example:**
- Company A P/E: 20
- Company B P/E: 25
- Company C P/E: 18
- Industry Average: 21

If Company A trades at P/E 15, it might be undervalued.

#### 3. Price-to-Earnings Growth (PEG) Ratio

**Formula:** PEG = P/E Ratio / Earnings Growth Rate

| PEG Ratio | Interpretation |
|---|---|
| < 1.0 | Potentially undervalued |
| 1.0 | Fairly valued |
| > 1.0 | Potentially overvalued |

---

### Building a Stock Analysis Framework

**Step 1: Quantitative Analysis**
- Review financial statements (3-5 years)
- Calculate key ratios
- Compare to industry averages
- Check for consistent growth

**Step 2: Qualitative Analysis**
- Competitive advantage (moat)
- Management quality
- Industry position
- Growth opportunities

**Step 3: Valuation**
- Apply 2-3 valuation methods
- Determine intrinsic value range
- Compare to current price
- Calculate margin of safety

> **Margin of Safety:** The difference between intrinsic value and market price. A 20-30% margin of safety provides a cushion against estimation errors.

---

### Common Mistakes to Avoid

- **Mistake:** Relying on a single metric — **Fix:** Use multiple ratios and valuation methods.
- **Mistake:** Ignoring industry context — **Fix:** Compare ratios to industry peers, not the overall market.
- **Mistake:** Overcomplicating analysis — **Fix:** Focus on the 5-6 most important metrics.
- **Mistake:** Ignoring qualitative factors — **Fix:** Numbers don't tell the whole story; understand the business.

### Professional Tips & Tricks

- Use company filings (10-K, 10-Q) for accurate financial data.
- Look for consistent revenue and earnings growth over 5+ years.
- Check the debt-to-equity ratio — too much debt is risky.
- Calculate owner earnings (net income + depreciation - capital expenditures) for a true cash flow picture.

---

### Key Takeaways

- Fundamental analysis evaluates a stock's intrinsic value through financial statements.
- Key ratios include P/E, P/B, Debt-to-Equity, ROE, and ROA.
- Valuation methods include DCF, comps, and PEG ratio.
- A margin of safety protects against estimation errors.
- Combine quantitative and qualitative analysis for the best results.

**Next up:** Technical analysis — reading charts and understanding market psychology.`,
      codeLanguage: "text",
      codeSnippet: `# Stock Analysis Framework

## Financial Ratio Cheat Sheet

### Valuation Ratios
- P/E Ratio: Price ÷ Earnings per share
- P/B Ratio: Price ÷ Book value per share
- P/S Ratio: Price ÷ Sales per share
- PEG Ratio: P/E ÷ Earnings growth rate

### Profitability Ratios
- Gross Margin: (Revenue - COGS) ÷ Revenue
- Operating Margin: Operating Income ÷ Revenue
- Net Margin: Net Income ÷ Revenue
- ROE: Net Income ÷ Shareholders' Equity
- ROA: Net Income ÷ Total Assets

### Financial Health Ratios
- Current Ratio: Current Assets ÷ Current Liabilities
- Quick Ratio: (Current Assets - Inventory) ÷ Current Liabilities
- Debt-to-Equity: Total Debt ÷ Shareholders' Equity
- Interest Coverage: EBIT ÷ Interest Expense

## Example Analysis: Apple (AAPL)

### Income Statement Highlights
- Revenue: $394B (TTM)
- Net Income: $100B
- Net Margin: 25.4%
- EPS: $6.13

### Key Ratios
- P/E Ratio: 28.5 (vs industry avg 22)
- P/B Ratio: 45.2
- ROE: 160%
- Debt-to-Equity: 1.8

### Valuation Assessment
- Current Price: $175
- DCF Intrinsic Value: $195
- Margin of Safety: 10%
- Recommendation: Fairly valued, hold`,
      codeOutput: `Stock Analysis Framework

## Financial Ratio Cheat Sheet

### Valuation Ratios
- P/E Ratio: Price ÷ Earnings per share
- P/B Ratio: Price ÷ Book value per share
- P/S Ratio: Price ÷ Sales per share
- PEG Ratio: P/E ÷ Earnings growth rate

### Profitability Ratios
- Gross Margin: (Revenue - COGS) ÷ Revenue
- Operating Margin: Operating Income ÷ Revenue
- Net Margin: Net Income ÷ Revenue
- ROE: Net Income ÷ Shareholders' Equity
- ROA: Net Income ÷ Total Assets

### Financial Health Ratios
- Current Ratio: Current Assets ÷ Current Liabilities
- Quick Ratio: (Current Assets - Inventory) ÷ Current Liabilities
- Debt-to-Equity: Total Debt ÷ Shareholders' Equity
- Interest Coverage: EBIT ÷ Interest Expense

## Example Analysis: Apple (AAPL)

### Income Statement Highlights
- Revenue: $394B (TTM)
- Net Income: $100B
- Net Margin: 25.4%
- EPS: $6.13

### Key Ratios
- P/E Ratio: 28.5 (vs industry avg 22)
- P/B Ratio: 45.2
- ROE: 160%
- Debt-to-Equity: 1.8

### Valuation Assessment
- Current Price: $175
- DCF Intrinsic Value: $195
- Margin of Safety: 10%
- Recommendation: Fairly valued, hold`,
      visualizationTips: [
        "Create a financial dashboard with key metrics for easy comparison.",
        "Draw a waterfall chart showing how revenue flows to net income.",
        "Use a radar chart to compare a company's ratios to industry averages.",
      ],
      tipsAndTricks: [
        "Always check the footnotes in financial statements — important details are often hidden there.",
        "Look for companies with consistent revenue growth and expanding margins.",
        "Compare current ratios to the company's own historical averages, not just industry peers.",
      ],
      practice: [
        {
          id: "practice-ratio-analysis",
          title: "Financial Ratio Analysis",
          difficulty: "Medium",
          task: "Calculate the following ratios for a company of your choice using data from Yahoo Finance: P/E Ratio, Debt-to-Equity, ROE, and Current Ratio. Interpret what each ratio tells you about the company.",
          hint: "Look up the company's latest quarterly report for the most recent numbers.",
          solution: `Example: Microsoft (MSFT)
- P/E Ratio: 35.2 → High, but justified by growth expectations
- Debt-to-Equity: 0.5 → Conservative, healthy balance sheet
- ROE: 42% → Excellent, efficient use of equity
- Current Ratio: 1.8 → Strong liquidity, can cover short-term obligations

Overall Assessment: MSFT is a high-quality company with strong profitability, reasonable leverage, and good liquidity. The high P/E reflects market confidence in continued growth.`,
        },
        {
          id: "practice-valuation",
          title: "Simple Valuation Exercise",
          difficulty: "Hard",
          task: "Perform a basic DCF valuation for a small company. Use the following assumptions: projected cash flows of $5M, $6M, $7M, $8M, $9M over the next 5 years, a discount rate of 10%, and a terminal growth rate of 3%. What is the estimated intrinsic value?",
          hint: "Use the formula: Value = Σ (Cash Flow / (1 + r)^t) + Terminal Value",
          solution: `DCF Calculation:

Year 1: $5M / (1.10)^1 = $4.55M
Year 2: $6M / (1.10)^2 = $4.96M
Year 3: $7M / (1.10)^3 = $5.26M
Year 4: $8M / (1.10)^4 = $5.46M
Year 5: $9M / (1.10)^5 = $5.59M

Terminal Value = $9M × (1.03) / (0.10 - 0.03) = $132.43M
PV of Terminal Value = $132.43M / (1.10)^5 = $82.20M

Total Value = $4.55M + $4.96M + $5.26M + $5.46M + $5.59M + $82.20M = $108.02M

Intrinsic Value: ~$108 million`,
        },
      ],
    },
  ],
};
