import type { Module } from "../courses";

export const MODULE_1: Module = {
  id: "module-1-stock-foundations",
  title: "Module 1: Foundations of the Indian Stock Market",
  description:
    "Understand how the Indian stock market works — NSE, BSE, SEBI regulations, key terminology, and build a solid foundation for your investing journey.",
  lessons: [
    {
      id: "intro-indian-stock-market",
      title: "Lesson 1: Introduction to the Indian Stock Market",
      shortDescription:
        "What is the Indian stock market, how NSE and BSE work, SEBI's role, and why Indian equities are essential for building long-term wealth.",
      duration: "45 mins",
      readingTime: "9 mins read",
      contentMarkdown: `### What is the Indian Stock Market?

The Indian stock market is a marketplace where buyers and sellers come together to trade shares of publicly listed companies in India. When you buy a stock on NSE or BSE, you're purchasing a small piece of ownership in that company — making you a **shareholder**.

#### Why the Indian Stock Market Matters

- **Wealth Building**: Indian equities have returned ~12-14% annually over the long term (Nifty 50 since 1996)
- **Beat Inflation**: Indian inflation averages 5-6%; stocks typically outpace it
- **Compound Growth**: Reinvested dividends and capital gains create exponential wealth
- **Demographic Dividend**: India's young population (median age 28) fuels decades of growth
- **Digital India**: UPI, demat accounts, and fintech have democratized access

> **Mental model:** Think of the Indian stock market as a giant auction house where company ownership is auctioned off. Prices go up when more people want to buy, and down when more people want to sell.

---

### The Two Stock Exchanges of India

| Exchange | Full Name | Founded | Headquarters | Key Index |
|---|---|---|---|---|
| **NSE** | National Stock Exchange | 1992 | Mumbai | Nifty 50 |
| **BSE** | Bombay Stock Exchange | 1875 | Mumbai (Dalal Street) | Sensex |

#### NSE vs. BSE — What's the Difference?

| Feature | NSE | BSE |
|---|---|---|
| **Founded** | 1992 (newer) | 1875 (oldest in Asia) |
| **Trading Volume** | Higher (~90% of equity volume) | Lower (~10% of equity volume) |
| **Technology** | Fully electronic from day one | Transitioned from open outcry |
| **Listed Companies** | ~2,200 | ~5,400 (most in the world!) |
| **Benchmark Index** | Nifty 50 | Sensex (BSE 30) |
| **Settlement** | T+1 (since 2023) | T+1 |

> **Key insight:** Most investors trade on NSE due to higher liquidity, but BSE has more listed companies including many small-cap and micro-cap stocks.

---

### SEBI — The Regulator

The **Securities and Exchange Board of India (SEBI)** is the regulator that protects investors and ensures fair markets.

#### SEBI's Key Roles

| Role | What It Does | Why It Matters |
|---|---|---|
| **Register intermediaries** | Licenses brokers, mutual funds, advisors | Ensures only qualified entities operate |
| **Protect investors** | Enforces fair practices, insider trading rules | Your money is safer |
| **Regulate markets** | Sets trading rules, margin requirements | Prevents manipulation |
| **Promote development** | Introduces new products, market reforms | Better investment options |

#### Key SEBI Regulations Every Investor Should Know

| Regulation | What It Means | Impact on You |
|---|---|---|
| **T+1 Settlement** | Shares credited next trading day | Faster access to your stocks |
| **Circuit Breakers** | Trading halted if index falls 10-13% | Prevents panic selling |
| **Margin Requirements** | Must maintain margin for F&O | Limits leverage risk |
| **KYC mandatory** | PAN + Aadhaar + bank proof needed | One-time setup required |
| **Lock-in for IPOs** | Promoters can't sell for 1-3 years | Aligns promoter interests |

---

### How Companies Go Public in India

#### The Indian IPO Process

| Step | What Happens | Timeline |
|---|---|---|
| **1. DRHP Filing** | Company files Draft Red Herring Prospectus with SEBI | Month 1 |
| **2. SEBI Review** | SEBI reviews disclosures, asks questions | 1-3 months |
| **3. Roadshow** | Company presents to institutional investors | 1-2 weeks |
| **4. Price Band** | Company sets price range (e.g., ₹500-520) | Before issue |
| **5. IPO Opens** | Retail and institutional investors apply | 3-5 days |
| **6. Allotment** | Shares allotted (lottery if oversubscribed) | 1 week after |
| **7. Listing** | Shares start trading on NSE/BSE | T+6 from issue close |

#### IPO Application Methods

| Method | Platform | How It Works |
|---|---|---|
| **ASBA** | Net banking (SBI, HDFC, etc.) | Money blocked, deducted only on allotment |
| **UPI** | GPay, PhonePe, BHIM | UPI mandate blocks money |
| **Broker app** | Zerodha, Groww, Angel One | Integrated IPO application |

> **Key insight:** ASBA (Application Supported by Blocked Amount) means your money stays in your bank account until allotment — no risk of money being stuck.

---

### Key Indian Stock Market Terminology

| Term | Definition | Example |
|---|---|---|
| **Nifty 50** | Top 50 companies on NSE by market cap | Reliance, TCS, HDFC Bank |
| **Sensex** | Top 30 companies on BSE | Same blue chips, fewer stocks |
| **SEBI** | Market regulator | Like India's SEC |
| **Demat Account** | Electronic holding of shares | Like a bank account for stocks |
| **Trading Account** | Account to buy/sell shares | Linked to demat + bank |
| **PAN** | Permanent Account Number | Mandatory for investing |
| **Face Value** | Original value of share (usually ₹1 or ₹10) | Reliance FV = ₹10 |
| **Market Capitalization** | Total value of all shares (price × shares outstanding) | Reliance: ~₹18 lakh crore |
| **Bull Market** | Period of rising prices | 2020-2024 bull run |
| **Bear Market** | Period of falling prices (>20% decline) | 2008, 2020 COVID crash |
| **Circuit Breaker** | Trading halt triggered by SEBI at 10%, 15%, 20% drops | Prevents panic selling |
| **Delivery** | Buying shares for long-term holding | Shares credited to demat |

---

### The Power of Compound Growth in INR

#### ₹10,000 Invested in Nifty 50 (1996-2024)

| Year | Nifty 50 Level | Portfolio Value | Growth Multiple |
|---|---|---|---|
| 1996 | 1,000 | ₹10,000 | 1.0x |
| 2001 | 1,000 | ₹10,000 | 1.0x |
| 2006 | 3,300 | ₹33,000 | 3.3x |
| 2011 | 4,600 | ₹46,000 | 4.6x |
| 2016 | 7,900 | ₹79,000 | 7.9x |
| 2021 | 17,000 | ₹1,70,000 | 17.0x |
| 2024 | 24,000 | ₹2,40,000 | 24.0x |

> **Key insight:** ₹10,000 invested in Nifty 50 in 1996 would be worth ~₹2,40,000 today — that's 24x your money over 28 years!

#### Monthly SIP Example (₹5,000/month for 20 years)

| Scenario | Total Invested | Value at 12% CAGR | Wealth Created |
|---|---|---|---|
| **Savings Account (4%)** | ₹12,00,000 | ₹18,40,000 | ₹6,40,000 |
| **PPF (7.1%)** | ₹12,00,000 | ₹26,40,000 | ₹14,40,000 |
| **Nifty 50 SIP (12%)** | ₹12,00,000 | ₹49,50,000 | ₹37,50,000 |

**Equity investing created 2.4x more wealth than PPF and 5.8x more than a savings account!**

---

### Major Indian Companies by Sector

| Sector | Top Companies | Index |
|---|---|---|
| **Oil & Gas** | Reliance, ONGC, BPCL | Nifty |
| **Banking** | HDFC Bank, ICICI Bank, SBI | Nifty |
| **IT** | TCS, Infosys, Wipro, HCL Tech | Nifty |
| **FMCG** | HUL, ITC, Nestle India | Nifty |
| **Automobile** | Maruti, Tata Motors, M&M | Nifty |
| **Pharma** | Sun Pharma, Dr. Reddy's, Cipla | Nifty |
| **Metals** | Tata Steel, JSW Steel, Vedanta | Nifty |
| **Telecom** | Bharti Airtel, Jio (Reliance) | Nifty |

---

### Common Mistakes to Avoid

- **Mistake:** Thinking the stock market is gambling — **Fix:** It's ownership in real businesses with real cash flows.
- **Mistake:** Investing money you'll need soon — **Fix:** Only invest money you won't need for at least 5 years.
- **Mistake:** Trying to time the market — **Fix:** Focus on time IN the market, not timing the market.
- **Mistake:** Following tips from WhatsApp/Telegram groups — **Fix:** Do your own research or use SEBI-registered advisors.

### Professional Tips & Tricks

- Start early — compound growth needs time to work its magic in India's growing economy.
- Diversify — don't put all your eggs in one basket.
- Use SIPs for disciplined investing — remove emotion from the equation.
- Stay informed but don't overreact to daily market noise.

---

### Key Takeaways

- The Indian stock market operates on NSE and BSE, regulated by SEBI.
- Nifty 50 (NSE) and Sensex (BSE) are the benchmark indices.
- Indian equities have returned ~12-14% annually over the long term.
- SEBI ensures investor protection through strict regulations.
- SIPs in equity mutual funds or index funds are the easiest way to start investing.
- Open a demat + trading account today to begin your investment journey.

**Next up:** Understanding different types of Indian stocks and how to evaluate them.`,
      codeLanguage: "text",
      codeSnippet: `Indian Stock Market — Key Facts & Figures

THE POWER OF COMPOUND GROWTH (INR)

Monthly SIP: ₹5,000 | Annual Return: 12% (Nifty 50 historical)

Year 5:   ₹4,12,000  (Invested: ₹3,00,000)
Year 10:  ₹11,60,000 (Invested: ₹6,00,000)
Year 15:  ₹25,00,000 (Invested: ₹9,00,000)
Year 20:  ₹49,50,000 (Invested: ₹12,00,000)
Year 25:  ₹94,90,000 (Invested: ₹15,00,000)
Year 30: ₹1,76,00,000 (Invested: ₹18,00,000)

₹5,000/month for 30 years = ₹1.76 Crore!
You invested ₹18 lakh, wealth created = ₹1.58 Crore

NIFTY 50 HISTORICAL RETURNS
Average annual return: ~12-14%
Best year: +75% (1991)
Worst year: -38% (2008)
Average bear market: ~1.2 years
Average bull market: ~4.5 years

KEY INDIAN MARKET METRICS
Sensex (BSE 30): ~75,000 (2024)
Nifty 50 (NSE 50): ~22,000 (2024)
India Market Cap: ~₹400 lakh crore (~$5 trillion)
Number of demat accounts: ~15 crore (150 million)
Daily trading volume: ~₹2-3 lakh crore

PORTFOLIO ALLOCATION GUIDE (INDIAN CONTEXT)

Conservative (Near Retirement):
30% Nifty 50 Index Fund | 10% Mid/Small Cap
20% International Fund | 30% Debt Funds | 10% Gold ETF

Balanced (Mid-Career):
40% Nifty 50 Index Fund | 15% Mid/Small Cap
20% International Fund | 15% Debt Funds | 10% Gold ETF

Aggressive (Early Career):
50% Nifty 50 Index Fund | 20% Mid/Small Cap
20% International Fund | 5% Debt Funds | 5% Gold ETF`,
      codeOutput: `Indian Stock Market — Key Facts & Figures

THE POWER OF COMPOUND GROWTH (INR)

Monthly SIP: ₹5,000 | Annual Return: 12% (Nifty 50 historical)

Year 5:   ₹4,12,000  (Invested: ₹3,00,000)
Year 10:  ₹11,60,000 (Invested: ₹6,00,000)
Year 15:  ₹25,00,000 (Invested: ₹9,00,000)
Year 20:  ₹49,50,000 (Invested: ₹12,00,000)
Year 25:  ₹94,90,000 (Invested: ₹15,00,000)
Year 30: ₹1,76,00,000 (Invested: ₹18,00,000)

₹5,000/month for 30 years = ₹1.76 Crore!
You invested ₹18 lakh, wealth created = ₹1.58 Crore

NIFTY 50 HISTORICAL RETURNS
Average annual return: ~12-14%
Best year: +75% (1991)
Worst year: -38% (2008)
Average bear market: ~1.2 years
Average bull market: ~4.5 years

KEY INDIAN MARKET METRICS
Sensex (BSE 30): ~75,000 (2024)
Nifty 50 (NSE 50): ~22,000 (2024)
India Market Cap: ~₹400 lakh crore (~$5 trillion)
Number of demat accounts: ~15 crore (150 million)
Daily trading volume: ~₹2-3 lakh crore

PORTFOLIO ALLOCATION GUIDE (INDIAN CONTEXT)

Conservative (Near Retirement):
30% Nifty 50 Index Fund | 10% Mid/Small Cap
20% International Fund | 30% Debt Funds | 10% Gold ETF

Balanced (Mid-Career):
40% Nifty 50 Index Fund | 15% Mid/Small Cap
20% International Fund | 15% Debt Funds | 10% Gold ETF

Aggressive (Early Career):
50% Nifty 50 Index Fund | 20% Mid/Small Cap
20% International Fund | 5% Debt Funds | 5% Gold ETF`,
      visualizationTips: [
        "Draw a simple supply and demand graph to understand how Nifty 50 prices move.",
        "Create a timeline of major Indian market events (1992 Harshad Mehta, 2000 dot-com, 2008 crisis, 2020 COVID).",
        "Use a compound interest calculator with Indian returns (12% CAGR) to visualize long-term growth."
      ],
      tipsAndTricks: [
        "Start with Nifty 50 index funds — they provide instant diversification across India's top 50 companies.",
        "Set up SIPs on the 1st of every month — it removes emotion from investing.",
        "Keep your investment costs low — direct plans have 0.5-1% lower expense ratios than regular plans.",
        "Never invest based on WhatsApp tips — do your own research or use SEBI-registered advisors."
      ],
      practice: [
        {
          id: "practice-market-basics",
          title: "Indian Market Terminology Quiz",
          difficulty: "Easy",
          task: "Define these terms in your own words: Nifty 50, Sensex, SEBI, demat account, ASBA, circuit breaker, face value.",
          hint: "Think about how each concept affects your investment decisions in the Indian context.",
          solution: `Indian Market Terminology:

Nifty 50: The benchmark index of NSE consisting of 50 of the largest and most liquid Indian companies across 13 sectors. Used to gauge overall market performance.

Sensex: The benchmark index of BSE consisting of 30 well-established companies. Older than Nifty but covers fewer stocks.

SEBI: Securities and Exchange Board of India — the regulator that protects investors and ensures fair market practices. Like India's version of the SEC.

Demat Account: An electronic account that holds your shares in digital form (like a bank account for stocks). Required to buy/sell shares in India.

ASBA: Application Supported by Blocked Amount — when you apply for an IPO, money is blocked in your bank account but only deducted on allotment. Safe and convenient.

Circuit Breaker: SEBI-mandated trading halts triggered when the market falls 10%, 15%, or 20% in a day. Prevents panic selling.

Face Value: The original value of a share when issued (usually ₹1 or ₹10). The market price (which can be ₹100 or ₹5,000) is different from face value.`
        },
        {
          id: "practice-compound-growth",
          title: "Indian Compound Growth Calculator",
          difficulty: "Medium",
          task: "Calculate how much ₹3,000 invested monthly at 12% CAGR would grow to in 25 years. Compare this to keeping the same amount in a bank FD at 7% interest.",
          hint: "Use the future value of annuity formula or an online SIP calculator.",
          solution: `Indian Compound Growth Calculation:

Monthly SIP: ₹3,000
Time Horizon: 25 years
Total Invested: ₹3,000 × 12 × 25 = ₹9,00,000

With Equity SIP (12% CAGR):
Final Value: ~₹47,50,000
Wealth Created: ₹38,50,000
Total Return: 428%

With Bank FD (7% annual, monthly compounding):
Final Value: ~₹24,30,000
Wealth Created: ₹15,30,000
Total Return: 170%

Difference: Equity SIP created ₹23,20,000 MORE wealth!

Why equity outperforms:
- Compounding at 12% vs 7% creates exponential difference
- Over 25 years, the gap becomes massive
- Even accounting for volatility, equity SIPs outperform FDs

Lesson: Start your SIP today — the longer you wait, the more compound growth you miss.`
        }
      ]
    },
    {
      id: "types-of-indian-stocks",
      title: "Lesson 2: Types of Indian Stocks & Asset Classes",
      shortDescription:
        "Understand different stock categories in India — large-cap, mid-cap, small-cap, sectors, and asset classes like debt funds, gold, and REITs.",
      duration: "50 mins",
      readingTime: "10 mins read",
      contentMarkdown: `### Categories of Indian Stocks

Stocks can be classified in several ways — by size, style, sector, and exchange. Understanding these categories helps you build a diversified portfolio.

#### By Market Capitalization (SEBI Definition)

| Category | Market Cap | SEBI Definition | Risk/Reward | Example |
|---|---|---|---|---|
| **Large-Cap** | > ₹20,000 crore | Top 100 companies by market cap | Lower risk, moderate returns | Reliance, TCS, HDFC Bank |
| **Mid-Cap** | ₹5,000-20,000 crore | Companies ranked 101-250 | Medium risk, medium returns | Trent, Persistent, Zomato |
| **Small-Cap** | < ₹5,000 crore | Companies ranked beyond 250 | Higher risk, higher potential returns | Many niche companies |

> **Mental model:** Think of market cap like company size — large-caps are like established banyan trees (steady, reliable), while small-caps are like young saplings (fast-growing but vulnerable).

#### By Investment Style

| Style | Description | Best For | Indian Examples |
|---|---|---|---|
| **Growth Stocks** | Companies growing faster than economy | Capital appreciation | TCS, Infosys, Avenue Supermarts |
| **Value Stocks** | Undervalued companies below intrinsic worth | Bargains + dividends | SBI, Coal India, ONGC |
| **Income Stocks** | Companies paying high dividends | Regular income | ITC, Power Grid, Coal India |
| **Blue-Chip Stocks** | Large, well-established, financially sound | Conservative investors | Reliance, HDFC, TCS |

#### By Sector (NSE Nifty Sectoral Indices)

| Sector | Key Companies | Nifty Sectoral Index |
|---|---|---|
| **IT** | TCS, Infosys, Wipro, HCL Tech | Nifty IT |
| **Banking** | HDFC Bank, ICICI Bank, SBI, Kotak | Nifty Bank |
| **FMCG** | HUL, ITC, Nestle, Britannia | Nifty FMCG |
| **Pharma** | Sun Pharma, Dr. Reddy's, Cipla | Nifty Pharma |
| **Auto** | Maruti, Tata Motors, M&M, Bajaj Auto | Nifty Auto |
| **Metals** | Tata Steel, JSW Steel, Hindalco | Nifty Metal |
| **Energy** | Reliance, ONGC, NTPC, Power Grid | Nifty Energy |
| **Real Estate** | DLF, Godrej Properties, Oberoi | Nifty Realty |

---

### Beyond Stocks: Indian Asset Classes

| Asset Class | Description | How to Invest | Risk Level |
|---|---|---|---|
| **Equity Mutual Funds** | Professionally managed stock portfolios | SIP or lumpsum via MF platforms | Medium-High |
| **Index Funds (Nifty/Sensex)** | Passive funds tracking benchmark indices | Direct plans on Kuvera, Groww | Medium |
| **Debt Funds** | Invest in bonds, government securities | Liquid, Short Duration, Gilt funds | Low-Medium |
| **Gold (SGBs)** | Sovereign Gold Bonds — earn 2.5% interest + gold price appreciation | RBI SGB scheme, Gold ETFs | Medium |
| **PPF** | Public Provident Fund — 15-year lock-in, 7.1% tax-free | Post office or banks | Very Low |
| **ELSS** | Equity Linked Savings Scheme — tax saving under 80C | Mutual fund platforms | Medium-High |
| **REITs** | Real Estate Investment Trusts — own commercial real estate | Embassy REIT, Mindspace REIT | Medium |
| **NPS** | National Pension System — retirement savings | NPS platforms, banks | Medium |
| **Fixed Deposits** | Bank deposits with guaranteed returns | Any bank | Very Low |

> **Key insight:** Equity mutual funds (especially index funds) provide the best long-term wealth creation for most Indian investors.

---

### The Indian Investment Tax Landscape

| Investment | Short-Term Tax | Long-Term Tax | Lock-in |
|---|---|---|---|
| **Equity (STCG)** | 20% (if held < 1 year) | — | None |
| **Equity (LTCG)** | — | 12.5% above ₹1.25 lakh/year | None |
| **Equity MF (STCG)** | 20% (if held < 1 year) | — | None |
| **Equity MF (LTCG)** | — | 12.5% above ₹1.25 lakh/year | None |
| **Debt MF** | Slab rate (if held < 3 years) | 20% with indexation (>3 yrs) | None |
| **ELSS** | — | 12.5% above ₹1.25 lakh | 3 years |
| **PPF** | — | Tax-free (EEE status) | 15 years |
| **SGB** | 20% with indexation (on redemption) | Tax-free if held to maturity (8 yrs) | 5 years (can sell on exchange) |
| **FD** | Slab rate | Slab rate | Varies |

---

### Common Mistakes to Avoid

- **Mistake:** Only investing in one sector — **Fix:** Diversify across sectors using index funds.
- **Mistake:** Confusing stock price with value — **Fix:** A ₹10 stock isn't "cheaper" than a ₹1,000 stock.
- **Mistake:** Not using SIPs — **Fix:** SIPs remove emotion and provide rupee cost averaging.

### Professional Tips & Tricks

- Use index funds (Nifty 50, Nifty Next 50) for instant diversification.
- Consider your age when choosing between growth and value stocks.
- ELSS gives you tax savings AND equity growth — best of both worlds.

---

### Key Takeaways

- Indian stocks are categorized by market cap (SEBI definition), investment style, and sector.
- Large-cap stocks are generally safer; small-caps offer higher growth potential.
- Diversification across asset classes reduces portfolio risk.
- Index funds and ELSS provide easy diversification for most Indian investors.
- India's tax regime favors long-term equity investing (LTCG at 12.5% above ₹1.25 lakh).

**Next up:** Fundamental analysis — how to evaluate whether an Indian stock is worth buying.`,
      codeLanguage: "text",
      codeSnippet: `Indian Stock Types & Portfolio Allocation Guide

MARKET CAP CATEGORIES (SEBI DEFINITION)

Category    | Market Cap       | Example Companies      | Risk Level
------------|------------------|------------------------|------------
Large-Cap   | > ₹20,000 crore | Reliance, TCS, HDFC    | Low-Medium
Mid-Cap     | ₹5,000-20,000 cr| Trent, Persistent       | Medium
Small-Cap   | < ₹5,000 crore  | Many niche companies   | High

SAMPLE DIVERSIFIED PORTFOLIO (INDIAN CONTEXT)

Conservative (Near Retirement):
30% Nifty 50 Index Fund | 10% Mid/Small Cap
20% International Fund | 30% Debt Funds | 10% Gold ETF

Balanced (Mid-Career):
35% Nifty 50 Index Fund | 10% Nifty Next 50
10% Mid Cap Fund | 20% International Fund
15% Debt Funds | 10% Gold ETF

Aggressive (Early Career):
30% Nifty 50 Index Fund | 10% Nifty Next 50
15% Mid Cap Fund | 10% Small Cap Fund
20% International Fund | 10% Debt Funds | 5% Gold ETF

INDIAN TAX-EFFICIENT INVESTMENT PRIORITY

1. ELSS (Section 80C): ₹1.5 lakh/year tax saving + equity growth
2. NPS (Section 80CCD): Additional ₹50,000 tax saving
3. PPF: Tax-free returns, 15-year lock-in
4. SGB: Gold exposure + 2.5% interest + tax-free at maturity
5. Equity Index Funds: 12.5% LTCG tax (above ₹1.25 lakh)

SECTOR DIVERSIFICATION (INDIAN CONTEXT)

Banking/NBFC: 20-25% | IT: 15-20%
Energy/Infrastructure: 10-15% | FMCG: 10-15%
Healthcare: 10-15% | Auto: 10-15% | Other: 10-15%`,
      codeOutput: `Indian Stock Types & Portfolio Allocation Guide

MARKET CAP CATEGORIES (SEBI DEFINITION)

Category    | Market Cap       | Example Companies      | Risk Level
------------|------------------|------------------------|------------
Large-Cap   | > ₹20,000 crore | Reliance, TCS, HDFC    | Low-Medium
Mid-Cap     | ₹5,000-20,000 cr| Trent, Persistent       | Medium
Small-Cap   | < ₹5,000 crore  | Many niche companies   | High

SAMPLE DIVERSIFIED PORTFOLIO (INDIAN CONTEXT)

Conservative (Near Retirement):
30% Nifty 50 Index Fund | 10% Mid/Small Cap
20% International Fund | 30% Debt Funds | 10% Gold ETF

Balanced (Mid-Career):
35% Nifty 50 Index Fund | 10% Nifty Next 50
10% Mid Cap Fund | 20% International Fund
15% Debt Funds | 10% Gold ETF

Aggressive (Early Career):
30% Nifty 50 Index Fund | 10% Nifty Next 50
15% Mid Cap Fund | 10% Small Cap Fund
20% International Fund | 10% Debt Funds | 5% Gold ETF

INDIAN TAX-EFFICIENT INVESTMENT PRIORITY

1. ELSS (Section 80C): ₹1.5 lakh/year tax saving + equity growth
2. NPS (Section 80CCD): Additional ₹50,000 tax saving
3. PPF: Tax-free returns, 15-year lock-in
4. SGB: Gold exposure + 2.5% interest + tax-free at maturity
5. Equity Index Funds: 12.5% LTCG tax (above ₹1.25 lakh)

SECTOR DIVERSIFICATION (INDIAN CONTEXT)

Banking/NBFC: 20-25% | IT: 15-20%
Energy/Infrastructure: 10-15% | FMCG: 10-15%
Healthcare: 10-15% | Auto: 10-15% | Other: 10-15%`,
      visualizationTips: [
        "Create a pie chart of your ideal portfolio allocation by asset class (Indian context).",
        "Map out sector correlations — Nifty IT vs Nifty Bank vs Nifty Pharma.",
        "Use a risk/reward graph to visualize where different Indian stock types fall."
      ],
      tipsAndTricks: [
        "Start with Nifty 50 or Nifty Next 50 index funds — instant diversification.",
        "Use direct plans to save 0.5-1% in expense ratios every year.",
        "ELSS gives you tax savings AND equity growth — best of both worlds.",
        "Don't chase mid/small-cap hype — they can underperform for years."
      ],
      practice: [
        {
          id: "practice-portfolio-design",
          title: "Design Your Indian Portfolio",
          difficulty: "Medium",
          task: "Design a diversified portfolio for a 28-year-old Indian investor with ₹5,00,000 to invest. Include specific fund names (from Indian AMCs) and explain your reasoning.",
          hint: "Consider risk tolerance, time horizon, tax benefits (ELSS), and diversification.",
          solution: `Portfolio for 28-year-old Indian investor (₹5,00,000):

1. Nifty 50 Index Fund (Direct Growth): ₹1,50,000 (30%)
   Fund: UTI Nifty 50 Index Fund Direct Growth
   Why: Core India exposure, low cost (0.10% expense)

2. Nifty Next 50 Index Fund: ₹75,000 (15%)
   Fund: ICICI Pru Nifty Next 50 Index Fund Direct
   Why: Emerging blue chips, higher growth potential

3. ELSS Fund (Tax Saving): ₹1,50,000 (30%)
   Fund: Quant ELSS Tax Saver Fund Direct Growth
   Why: Section 80C tax saving + equity growth (3yr lock-in)

4. International Fund: ₹75,000 (15%)
   Fund: Motilal Oswal S&P 500 Index Fund Direct
   Why: US market exposure, diversification from India

5. Small Cap Fund: ₹50,000 (10%)
   Fund: Nippon India Small Cap Fund Direct Growth
   Why: High growth potential, 10+ year horizon

Total: ₹5,00,000

Rationale:
- Long time horizon (30+ years to retirement) allows for aggressive allocation
- 90% equity for maximum growth
- ELSS provides ₹1.5 lakh tax saving under 80C
- International fund reduces India-specific risk
- Small cap provides asymmetric upside over 10+ years`
        },
        {
          id: "practice-sector-analysis",
          title: "Indian Sector Analysis",
          difficulty: "Easy",
          task: "List 2 companies from each of these Indian sectors: Banking, IT, FMCG, and Pharma. For each company, identify one strength and one risk.",
          hint: "Think about competitive advantages and potential threats in the Indian context.",
          solution: `Indian Sector Analysis:

Banking:
- HDFC Bank: Strength - Largest private bank, strong asset quality; Risk - High valuation, merger integration
- SBI: Strength - Largest bank in India, government backing; Risk - NPA cycles, bureaucratic culture

IT:
- TCS: Strength - Largest IT company in India, trusted brand globally; Risk - US recession risk, visa issues
- Infosys: Strength - Strong margins, digital transformation leader; Risk - Employee attrition, client concentration

FMCG:
- HUL: Strength - Market leader in most categories, strong distribution; Risk - Rural demand slowdown, raw material inflation
- ITC: Strength - Diversified (cigarettes, hotels, FMCG), cash-rich; Risk - Regulatory risk on cigarettes, FMCG margins thin

Pharma:
- Sun Pharma: Strength - Largest pharma company in India, global presence; Risk - US FDA issues, specialty pipeline risk
- Dr. Reddy's: Strength - Strong generic portfolio, biosimilars; Risk - Pricing pressure in US generics`
        }
      ]
    },
    {
      id: "fundamental-analysis",
      title: "Lesson 3: Fundamental Analysis for Indian Stock Evaluation",
      shortDescription:
        "Learn how to evaluate Indian stocks using financial statements, key ratios, and valuation metrics — with Indian company examples.",
      duration: "55 mins",
      readingTime: "11 mins read",
      contentMarkdown: `### What is Fundamental Analysis?

Fundamental analysis is the process of evaluating a stock's **intrinsic value** by examining its financial health, competitive position, and growth prospects. For Indian stocks, you'll use BSE/NSE data, company annual reports, and screener.in for analysis.

> **Mental model:** Think of fundamental analysis as a health check-up for a company — you're checking its blood pressure (revenue), cholesterol (debt), and fitness level (profitability).

---

### Where to Find Indian Company Financials

| Source | What It Provides | Cost |
|---|---|---|
| **Screener.in** | Financial ratios, charts, peer comparison | Free |
| **Trendlyne** | Financial analysis, DCF models, screeners | Free/Premium |
| **Moneycontrol** | Financial statements, news, analysis | Free |
| **Company Website** | Annual reports, investor presentations | Free |
| **BSE/NSE** | Official filings, shareholding pattern | Free |
| **Tijori Finance** | Industry-level data, sector analysis | Free/Premium |

---

### The Three Financial Statements (Indian Context)

| Statement | What It Shows | Key Metrics |
|---|---|---|
| **Profit & Loss** | Revenue, expenses, and profit over a year | Revenue, PAT, EPS |
| **Balance Sheet** | Assets, liabilities, and equity at a point | Total Assets, Debt, Equity |
| **Cash Flow Statement** | Cash generated and used over a year | Operating CF, Free CF |

> **Key insight:** Indian companies file quarterly results with BSE/NSE, but the detailed annual report (with auditor's report and notes) is the most reliable source.

---

### Key Financial Ratios for Indian Stocks

#### 1. Valuation Ratios

| Ratio | Formula | What It Tells You | Good Benchmark (India) |
|---|---|---|---|
| **P/E Ratio** | Price per share / EPS | How much you're paying for ₹1 of earnings | 15-25 for stable companies |
| **P/B Ratio** | Price per share / Book value per share | Market value vs. net asset value | < 3.0 is reasonable |
| **PEG Ratio** | P/E / Earnings Growth Rate | Value adjusted for growth | < 1.0 is undervalued |

#### 2. Profitability Ratios

| Ratio | Formula | What It Tells You | Good Benchmark |
|---|---|---|---|
| **ROE** | Net Profit / Shareholders' Equity | How efficiently equity generates profits | > 15% is strong |
| **ROCE** | EBIT / Capital Employed | Return on all capital (equity + debt) | > 18% is excellent |
| **Operating Margin** | Operating Profit / Revenue | Core business profitability | Varies by sector |
| **Net Profit Margin** | PAT / Revenue | Bottom-line profitability | Varies by sector |

#### 3. Financial Health Ratios

| Ratio | Formula | What It Tells You | Good Benchmark |
|---|---|---|---|
| **Debt-to-Equity** | Total Debt / Shareholders' Equity | Financial leverage and risk | < 1.0 is conservative |
| **Current Ratio** | Current Assets / Current Liabilities | Short-term liquidity | > 1.5 is healthy |
| **Interest Coverage** | EBIT / Interest Expense | Can company afford interest payments | > 3x is safe |

---

### Indian-Specific Metrics to Watch

| Metric | Why It Matters in India |
|---|---|
| **Promoter Holding** | High promoter holding (>50%) shows skin in the game |
| **Pledged Shares** | Promoter pledged shares = risk of forced selling |
| **FII Holding** | FII buying/selling signals global interest |
| **MF Holding** | MF buying signals domestic institutional confidence |
| **Promoter Buying/Selling** | Insider transactions signal conviction |

#### Promoter Holding Guide (India-Specific)

| Promoter Holding | Interpretation | Action |
|---|---|---|
| > 60% | Strong alignment | Positive signal |
| 50-60% | Good alignment | Normal |
| 40-50% | Moderate | Monitor for changes |
| < 40% | Low alignment | Caution |
| Declining rapidly | Red flag | Investigate why |

> **Key insight:** In India, promoter holding is unique to the market — it shows whether the founding family has confidence in the company's future. A sudden drop in promoter holding is a major red flag.

---

### Building a Stock Analysis Framework (Indian Context)

**Step 1: Quantitative Analysis**
- Review 5 years of financials on Screener.in
- Calculate key ratios (ROE, ROCE, Debt/Equity)
- Compare to industry averages
- Check for consistent revenue and profit growth

**Step 2: Qualitative Analysis**
- Promoter background and track record
- Competitive advantage (moat)
- Industry position (market leader?)
- Corporate governance (related party transactions?)

**Step 3: Valuation**
- Compare P/E to 5-year average and industry peers
- Calculate fair value using DCF or relative valuation
- Check margin of safety (buy at 20-30% below intrinsic value)

---

### Common Fundamental Analysis Mistakes in India

- **Mistake:** Ignoring promoter holding — **Fix:** Always check promoter pledge and holding changes.
- **Mistake:** Comparing P/E across sectors — **Fix:** IT stocks (25-35x P/E) shouldn't be compared to banks (10-15x P/E).
- **Mistake:** Ignoring related party transactions — **Fix:** Check annual report notes for RPTs with promoter entities.

### Professional Tips & Tricks

- Use Screener.in for quick ratio comparison — it's the best free tool for Indian stocks.
- Look for companies with consistent ROCE > 18% and ROE > 15% over 5 years.
- Always check the shareholding pattern — FII and MF buying is a positive signal.

---

### Key Takeaways

- Fundamental analysis evaluates intrinsic value through financial statements and ratios.
- Key Indian metrics: ROE, ROCE, Debt/Equity, and Promoter Holding.
- Screener.in is the best free tool for Indian stock analysis.
- Promoter holding and pledge levels are unique to Indian markets — always check them.
- Look for companies with consistent growth in revenue and profit over 5+ years.

**Next up:** Technical analysis — reading charts and understanding market psychology.`,
      codeLanguage: "text",
      codeSnippet: `Indian Stock Analysis Framework — Key Reference

FINANCIAL RATIO CHEAT SHEET (INDIAN CONTEXT)

Valuation Ratios:
- P/E Ratio: Price ÷ Earnings per share (compare within sector)
- P/B Ratio: Price ÷ Book value per share
- PEG Ratio: P/E ÷ Earnings growth rate (< 1 = undervalued)

Profitability Ratios:
- ROE: Net Profit ÷ Shareholders' Equity (> 15% = strong)
- ROCE: EBIT ÷ Capital Employed (> 18% = excellent)
- Operating Margin: Operating Profit ÷ Revenue
- Net Margin: PAT ÷ Revenue

Financial Health:
- Debt/Equity: Total Debt ÷ Shareholders' Equity (< 1.0 = safe)
- Interest Coverage: EBIT ÷ Interest Expense (> 3x = safe)
- Current Ratio: Current Assets ÷ Current Liabilities (> 1.5)

EXAMPLE ANALYSIS: TCS (Tata Consultancy Services)

Financial Highlights (FY2024):
Revenue: ₹2,25,000 crore | Growth: ~13% YoY
EBITDA Margin: ~25% | PAT: ₹42,000 crore | EPS: ₹115

Key Ratios:
P/E Ratio: 32x (vs IT sector avg 28x)
ROE: 50% (excellent) | ROCE: 65% (excellent)
Debt/Equity: 0.05 (almost debt-free)
Promoter Holding: 72% (Tata Group)

Promoter Analysis:
- Promoter: Tata Sons (72%)
- Promoter Pledged: 0% (no pledge)
- FII Holding: 12% (stable)
- MF Holding: 8% (increasing)

Valuation Assessment:
Current Price: ₹3,700 | Fair Value (DCF): ₹3,500
Assessment: Slightly overvalued, but quality justifies premium

QUICK STOCK HEALTH CHECK (SCREENER.IN)

Before investing, check these 5 numbers:
1. ROE > 15%?  YES / NO
2. ROCE > 18%? YES / NO
3. Debt/Equity < 1? YES / NO
4. Promoter holding > 50%? YES / NO
5. Revenue growing 5+ years? YES / NO

If all 5 are YES → likely a quality company
If 3-4 are YES → investigate further
If < 3 are YES → avoid or deep research`,
      codeOutput: `Indian Stock Analysis Framework — Key Reference

FINANCIAL RATIO CHEAT SHEET (INDIAN CONTEXT)

Valuation Ratios:
- P/E Ratio: Price ÷ Earnings per share (compare within sector)
- P/B Ratio: Price ÷ Book value per share
- PEG Ratio: P/E ÷ Earnings growth rate (< 1 = undervalued)

Profitability Ratios:
- ROE: Net Profit ÷ Shareholders' Equity (> 15% = strong)
- ROCE: EBIT ÷ Capital Employed (> 18% = excellent)
- Operating Margin: Operating Profit ÷ Revenue
- Net Margin: PAT ÷ Revenue

Financial Health:
- Debt/Equity: Total Debt ÷ Shareholders' Equity (< 1.0 = safe)
- Interest Coverage: EBIT ÷ Interest Expense (> 3x = safe)
- Current Ratio: Current Assets ÷ Current Liabilities (> 1.5)

EXAMPLE ANALYSIS: TCS (Tata Consultancy Services)

Financial Highlights (FY2024):
Revenue: ₹2,25,000 crore | Growth: ~13% YoY
EBITDA Margin: ~25% | PAT: ₹42,000 crore | EPS: ₹115

Key Ratios:
P/E Ratio: 32x (vs IT sector avg 28x)
ROE: 50% (excellent) | ROCE: 65% (excellent)
Debt/Equity: 0.05 (almost debt-free)
Promoter Holding: 72% (Tata Group)

Promoter Analysis:
- Promoter: Tata Sons (72%)
- Promoter Pledged: 0% (no pledge)
- FII Holding: 12% (stable)
- MF Holding: 8% (increasing)

Valuation Assessment:
Current Price: ₹3,700 | Fair Value (DCF): ₹3,500
Assessment: Slightly overvalued, but quality justifies premium

QUICK STOCK HEALTH CHECK (SCREENER.IN)

Before investing, check these 5 numbers:
1. ROE > 15%?  YES / NO
2. ROCE > 18%? YES / NO
3. Debt/Equity < 1? YES / NO
4. Promoter holding > 50%? YES / NO
5. Revenue growing 5+ years? YES / NO

If all 5 are YES → likely a quality company
If 3-4 are YES → investigate further
If < 3 are YES → avoid or deep research`,
      visualizationTips: [
        "Create a financial dashboard on Screener.in for your favorite Indian stock.",
        "Draw a waterfall chart showing how revenue flows to PAT for an Indian company.",
        "Use a radar chart to compare a company's ratios to industry averages."
      ],
      tipsAndTricks: [
        "Always check promoter pledge level — high pledge is a major red flag in India.",
        "Use Screener.in's 'export to Excel' feature for detailed financial analysis.",
        "Look for companies with consistent ROCE > 18% over 5 years — it signals a durable moat.",
        "Read the 'Related Party Transactions' section in annual reports for governance issues."
      ],
      practice: [
        {
          id: "practice-ratio-analysis",
          title: "Indian Stock Ratio Analysis",
          difficulty: "Medium",
          task: "Analyze HDFC Bank using Screener.in. Find: (1) P/E Ratio, (2) ROE, (3) ROCE, (4) Debt/Equity, (5) Promoter Holding, (6) 5-year revenue growth. Is this a quality stock to own?",
          hint: "Go to Screener.in, search for HDFC Bank, and check the financial ratios section.",
          solution: `HDFC Bank Analysis (FY2024):

Financial Data:
- Revenue: ₹2,80,000 crore (TTM)
- PAT: ₹60,000 crore
- EPS: ₹78

Key Ratios:
- P/E Ratio: 19x (reasonable for a bank)
- ROE: 16.5% (strong for banking)
- ROCE: 18.2% (excellent)
- Debt/Equity: N/A (banks use different metric — use Capital Adequacy Ratio: 18.4%, well above 9% requirement)
- Net Interest Margin: 3.4% (healthy)

Promoter & Shareholding:
- Promoter Holding: 25.5% (lower due to HDFC Ltd merger)
- FII Holding: 49% (very high — global confidence)
- MF Holding: 12% (increasing)
- Promoter Pledged: 0%

5-Year Revenue Growth: ~15% CAGR
5-Year Profit Growth: ~18% CAGR

Assessment: QUALITY STOCK ✓
- Industry-leading bank with strong margins
- Excellent ROE and ROCE for the sector
- Low valuation relative to growth
- Strong institutional backing
- Risk: Integration with HDFC Ltd, asset quality in stress

Recommendation: Quality stock for long-term holding.`
        },
        {
          id: "practice-valuation",
          title: "Simple Valuation Exercise (Indian Context)",
          difficulty: "Hard",
          task: "You're analyzing Reliance Industries. Current P/E is 28x. Industry average P/E is 22x. Reliance is growing at 15% CAGR. Calculate the PEG ratio and determine if it's fairly valued.",
          hint: "PEG = P/E ÷ Growth Rate. PEG < 1 = undervalued, PEG 1-1.5 = fairly valued, PEG > 1.5 = overvalued.",
          solution: `Reliance Industries Valuation:

Current P/E: 28x
Earnings Growth Rate: 15% CAGR
Industry Average P/E: 22x

PEG Ratio Calculation:
PEG = P/E ÷ Growth Rate
PEG = 28 ÷ 15 = 1.87

Interpretation:
- PEG > 1.5 → Potentially overvalued
- You're paying ₹1.87 for each unit of growth
- Industry average PEG would be: 22 ÷ 15 = 1.47

Assessment:
Reliance trades at a premium to industry (28x vs 22x P/E)
PEG of 1.87 suggests slight overvaluation
However, Reliance deserves premium due to:
- Diversified business (O2C, Retail, Telecom, New Energy)
- Market leader in multiple segments
- Strong cash flow generation
- Jio's growth potential

Fair Value Estimate:
If we apply industry P/E of 22x:
Fair Price = EPS × 22 = ₹100 × 22 = ₹2,200
Current Price: ₹2,600
Overvalued by: ~18%

Conclusion: Reliance is quality but slightly expensive at current levels. Wait for a pullback to ₹2,200-2,400 for better entry.`
        }
      ]
    }
  ],
};
