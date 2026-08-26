import type { Module } from "../courses";

export const MODULE_1: Module = {
  id: "module-1-stock-foundations",
  title: "Module 1: Foundations of the Indian Stock Market",
  description:
    "A complete beginner's guide to understanding how the Indian stock market works, including NSE, BSE, SEBI regulations, and everything you need to start investing.",
  lessons: [
    {
      id: "intro-indian-stock-market",
      title: "Lesson 1: What is the Indian Stock Market and How Does It Work?",
      shortDescription:
        "A beginner-friendly introduction to the Indian stock market — what it is, why it exists, how NSE and BSE work, and how you can start investing today.",
      duration: "60 mins",
      readingTime: "12 mins read",
      contentMarkdown: `### What Exactly is the Stock Market? (In Simple Words)

Imagine you want to open a chai shop, but you don't have enough money. Your friend Rahul has extra money. You both agree: you will run the shop, and Rahul will own a small part of it. In return, when the shop makes profit, Rahul gets a share of that profit.

This is exactly what happens in the stock market. When a company needs money to grow, it sells small pieces of itself (called **shares** or **stocks**) to the public. When you buy a share of Reliance or TCS, you become a **part-owner** of that company.

If the company does well and makes more profit, the value of your share goes up. If the company does badly, the value goes down. That's the basic idea — you are buying ownership in real businesses.

#### Why Should You Care About the Stock Market?

Let me give you a real example. If your grandfather had invested just ₹10,000 in the Indian stock market (Nifty 50) in the year 1996, that money would be worth approximately ₹2,40,000 today. That is 24 times the original money, without doing anything extra.

But if the same ₹10,000 was kept in a bank savings account earning 4% interest, it would be worth only about ₹30,000 today. That's a massive difference — ₹2,10,000 less just because of where the money was kept.

The reason is **compound growth**. When you invest in stocks, your money earns returns. Those returns then earn returns on top of returns. Over 20-30 years, this creates a snowball effect that turns small amounts into large wealth.

#### The Two Main Stock Exchanges in India

When you hear "stock market" in India, it actually means two places where stocks are bought and sold:

**The National Stock Exchange (NSE)** — This is the newer exchange, started in 1992. It is fully electronic, meaning everything happens on computers. About 90% of all stock trading in India happens on NSE. The main benchmark index here is called the **Nifty 50**, which tracks the top 50 companies in India.

**The Bombay Stock Exchange (BSE)** — This is the oldest stock exchange in Asia, started way back in 1875. It is located on Dalal Street in Mumbai. Even though it is older and has more listed companies (over 5,400), most trading volume happens on NSE. The main benchmark here is the **Sensex**, which tracks the top 30 companies.

**Which one should you use?** Most investors use NSE because it has more liquidity (meaning you can buy and sell more easily). But both are regulated by the same authority — SEBI.

#### What is SEBI and Why Does It Matter?

SEBI stands for **Securities and Exchange Board of India**. Think of SEBI as the referee of the stock market. Just like a cricket umpire ensures fair play, SEBI ensures that the stock market operates fairly and transparently.

SEBI's job is to:
- Protect you, the investor, from fraud and manipulation
- Make sure companies share truthful information about their financial health
- Regulate brokers, mutual funds, and other market participants
- Punish anyone who tries to cheat the system

Because SEBI exists, you can invest with confidence knowing that there are strict rules in place to protect your money.

#### How Do You Actually Buy and Sell Stocks?

To buy or sell stocks in India, you need three accounts:

**Demat Account** — This is like a digital locker where your shares are stored electronically. Before 1996, shares were physical paper certificates. Now everything is digital, and your demat account holds all your investments.

**Trading Account** — This is the account through which you actually place buy and sell orders. When you want to buy a stock, you place the order through your trading account.

**Bank Account** — This is linked to your trading account. When you buy stocks, money is deducted from here. When you sell stocks, money comes back here.

All three accounts are linked together. The easiest way to open all three is through apps like **Zerodha, Groww, or Angel One**. The process takes about 15-20 minutes online, and you just need your PAN card, Aadhaar card, and a bank account.

#### How Long Does It Take to Get Your Shares?

Since 2023, India follows a **T+1 settlement** system. This means when you buy shares today, they are credited to your demat account by the next working day. This is much faster than the old system where it took 2 days.

#### What Happens During a Market Crash?

Sometimes the stock market falls sharply — this is called a market crash. To protect investors from panic selling, SEBI has **circuit breakers**:

- If Nifty falls 10% in a day, trading is halted for 15 minutes
- If Nifty falls 15%, trading is halted for 30 minutes
- If Nifty falls 20%, trading is halted for the rest of the day

This gives investors time to think calmly instead of making emotional decisions.

#### How Companies Go Public (IPO Process)

When a private company wants to raise money from the public for the first time, it does an **IPO (Initial Public Offering)**. Here's how it works in simple steps:

First, the company files documents with SEBI explaining its business, financials, and how it plans to use the money. SEBI reviews everything and asks questions. Once approved, the company announces a price range — for example, ₹500 to ₹520 per share.

Then the IPO opens for 3-5 days. You can apply through your bank's net banking (using ASBA) or through apps like Zerodha or Groww. If more people apply than there are shares available (which happens often in India), shares are allotted through a lottery system.

After allotment, the shares start trading on NSE/BSE, and you can see whether the stock is trading above or below the IPO price.

#### The Most Important Terms You Must Know

Here are the terms you will hear everywhere in the Indian stock market:

**Nifty 50** — The index that tracks the top 50 companies on NSE. When people say "the market is up today," they usually mean Nifty 50 is up.

**Sensex** — The index that tracks the top 30 companies on BSE. Similar to Nifty but covers fewer companies.

**Market Capitalization (Market Cap)** — This tells you how big a company is. It is calculated by multiplying the current share price by the total number of shares. For example, if Reliance's share price is ₹2,500 and it has 675 crore shares, its market cap is ₹16,87,500 crore (about ₹17 lakh crore). This makes it India's most valuable company.

**Face Value** — This is the original price at which a share was issued when the company was first listed. Usually it is ₹1 or ₹10. Don't confuse face value with the current market price — a share with face value ₹10 might be trading at ₹2,500.

**Bull Market** — A period when stock prices are rising consistently. The period from 2020 to 2024 was a bull market in India.

**Bear Market** — A period when stock prices fall significantly (typically 20% or more from recent highs). The 2008 financial crisis and the 2020 COVID crash were bear markets.

**Dividend** — When a company makes profit, it may choose to share some of that profit with shareholders. This payment is called a dividend. For example, ITC pays about ₹3 per share as dividend every year.

**Delivery** — When you buy shares and hold them in your demat account (not selling the same day), it is called taking delivery. This is different from intraday trading where you buy and sell on the same day.

#### The History of Indian Stock Market Crashes

Understanding past crashes helps you prepare for future ones:

In 1992, the Harshad Mehta scam caused Sensex to crash after a massive manipulation scheme was exposed. In 2000, the dot-com bubble burst globally and Indian IT stocks fell sharply. In 2008, the global financial crisis caused Nifty to fall 60% from its peak — it took about 2 years to recover. In March 2020, COVID-19 caused Nifty to crash 38% in just one month, but it recovered within 6 months.

The lesson from all these crashes? The market always recovers. Investors who stayed invested or bought more during crashes made the most money.

#### Common Mistakes Beginners Make

The biggest mistake is thinking the stock market is like gambling. It is not. When you gamble, you are betting against the house with no real underlying value. When you buy a stock, you are buying ownership in a real company that sells real products and earns real profit.

Another mistake is investing money you will need soon. If you need money in 1-2 years for a wedding or house down payment, keep it in a fixed deposit or savings account. Only invest money you won't need for at least 5 years.

The third mistake is trying to time the market — buying when you think prices are low and selling when you think prices are high. Even professional fund managers cannot do this consistently. Instead, invest regularly through SIPs and let compound growth do the work.

#### Key Takeaways

- The stock market is where you buy ownership in real companies
- NSE and BSE are the two main exchanges in India
- SEBI protects investors and ensures fair market practices
- You need a demat account, trading account, and bank account to start
- Indian stocks have returned about 12-14% annually over the long term
- Never invest money you need in the next 5 years
- Start with SIPs in index funds for the simplest entry into investing

**Next up:** Understanding different types of Indian stocks and how to choose between them.`,
      codeLanguage: "text",
      codeSnippet: `The Indian Stock Market — A Beginner's Complete Guide

WHAT IS THE STOCK MARKET?
When a company needs money to grow, it sells small pieces of itself (shares) to the public. When you buy a share, you become a part-owner of that company. If the company does well, your share becomes more valuable.

THE TWO MAIN EXCHANGES IN INDIA

National Stock Exchange (NSE):
- Started in 1992
- Fully electronic
- 90% of all trading happens here
- Main index: Nifty 50 (top 50 companies)

Bombay Stock Exchange (BSE):
- Started in 1875 (oldest in Asia)
- Located on Dalal Street, Mumbai
- 5,400+ listed companies (most in the world)
- Main index: Sensex (top 30 companies)

WHAT IS SEBI?
SEBI is the Securities and Exchange Board of India — the referee of the stock market. It protects investors, ensures fair practices, and punishes fraud.

WHAT DO YOU NEED TO START INVESTING?

Three accounts (all linked together):
1. Demat Account — Your digital locker for shares
2. Trading Account — Where you place buy/sell orders
3. Bank Account — Linked for payments

How to open: Use apps like Zerodha, Groww, or Angel One
Time needed: 15-20 minutes online
Documents needed: PAN card, Aadhaar card, bank account

HOW LONG TO GET YOUR SHARES?
Since 2023, India follows T+1 settlement — shares are in your demat account by the next working day.

MARKET CRASH PROTECTION (CIRCUIT BREAKERS)
If Nifty falls 10% → Trading halted 15 minutes
If Nifty falls 15% → Trading halted 30 minutes
If Nifty falls 20% → Trading halted rest of day

THE IPO PROCESS (How Companies Go Public)
1. Company files documents with SEBI
2. SEBI reviews and approves
3. Company announces price range
4. IPO opens for 3-5 days
5. You apply through bank or app
6. Shares allotted (lottery if oversubscribed)
7. Shares start trading on NSE/BSE

KEY TERMS EVERY BEGINNER MUST KNOW

Nifty 50: Index tracking top 50 companies on NSE
Sensex: Index tracking top 30 companies on BSE
Market Cap: Share price × Total shares = Company size
Face Value: Original issue price (usually ₹1 or ₹10)
Dividend: Profit sharing from company to shareholders
Delivery: Buying and holding shares (not same-day trading)
Bull Market: Prices rising consistently
Bear Market: Prices falling 20%+ from highs

PAST INDIAN MARKET CRASHES
1992: Harshad Mehta scam
2000: Dot-com bubble burst
2008: Global financial crisis (Nifty fell 60%)
2020: COVID crash (Nifty fell 38%, recovered in 6 months)

Lesson: Market always recovers. Stay invested.

THE POWER OF COMPOUND GROWTH
₹10,000 invested in 1996:
- In bank FD (4%): Worth ₹30,000 today
- In Nifty 50 (12%): Worth ₹2,40,000 today

Difference: ₹2,10,000 more by investing in stocks!

BEGINNER MISTAKES TO AVOID
1. Thinking stock market = gambling (it's not)
2. Investing money needed within 5 years
3. Trying to time the market
4. Following WhatsApp/Telegram tips
5. Not starting because you think you need lots of money`,
      codeOutput: `The Indian Stock Market — A Beginner's Complete Guide

WHAT IS THE STOCK MARKET?
When a company needs money to grow, it sells small pieces of itself (shares) to the public. When you buy a share, you become a part-owner of that company. If the company does well, your share becomes more valuable.

THE TWO MAIN EXCHANGES IN INDIA

National Stock Exchange (NSE):
- Started in 1992
- Fully electronic
- 90% of all trading happens here
- Main index: Nifty 50 (top 50 companies)

Bombay Stock Exchange (BSE):
- Started in 1875 (oldest in Asia)
- Located on Dalal Street, Mumbai
- 5,400+ listed companies (most in the world)
- Main index: Sensex (top 30 companies)

WHAT IS SEBI?
SEBI is the Securities and Exchange Board of India — the referee of the stock market. It protects investors, ensures fair practices, and punishes fraud.

WHAT DO YOU NEED TO START INVESTING?

Three accounts (all linked together):
1. Demat Account — Your digital locker for shares
2. Trading Account — Where you place buy/sell orders
3. Bank Account — Linked for payments

How to open: Use apps like Zerodha, Groww, or Angel One
Time needed: 15-20 minutes online
Documents needed: PAN card, Aadhaar card, bank account

HOW LONG TO GET YOUR SHARES?
Since 2023, India follows T+1 settlement — shares are in your demat account by the next working day.

MARKET CRASH PROTECTION (CIRCUIT BREAKERS)
If Nifty falls 10% → Trading halted 15 minutes
If Nifty falls 15% → Trading halted 30 minutes
If Nifty falls 20% → Trading halted rest of day

THE IPO PROCESS (How Companies Go Public)
1. Company files documents with SEBI
2. SEBI reviews and approves
3. Company announces price range
4. IPO opens for 3-5 days
5. You apply through bank or app
6. Shares allotted (lottery if oversubscribed)
7. Shares start trading on NSE/BSE

KEY TERMS EVERY BEGINNER MUST KNOW

Nifty 50: Index tracking top 50 companies on NSE
Sensex: Index tracking top 30 companies on BSE
Market Cap: Share price × Total shares = Company size
Face Value: Original issue price (usually ₹1 or ₹10)
Dividend: Profit sharing from company to shareholders
Delivery: Buying and holding shares (not same-day trading)
Bull Market: Prices rising consistently
Bear Market: Prices falling 20%+ from highs

PAST INDIAN MARKET CRASHES
1992: Harshad Mehta scam
2000: Dot-com bubble burst
2008: Global financial crisis (Nifty fell 60%)
2020: COVID crash (Nifty fell 38%, recovered in 6 months)

Lesson: Market always recovers. Stay invested.

THE POWER OF COMPOUND GROWTH
₹10,000 invested in 1996:
- In bank FD (4%): Worth ₹30,000 today
- In Nifty 50 (12%): Worth ₹2,40,000 today

Difference: ₹2,10,000 more by investing in stocks!

BEGINNER MISTAKES TO AVOID
1. Thinking stock market = gambling (it's not)
2. Investing money needed within 5 years
3. Trying to time the market
4. Following WhatsApp/Telegram tips
5. Not starting because you think you need lots of money`,
      visualizationTips: [
        "Draw a timeline showing major Indian market events from 1992 to 2024.",
        "Create a simple flowchart: Salary → Savings → Investment → Wealth.",
        "Use a compound interest calculator to see how ₹5,000/month grows over 20 years."
      ],
      tipsAndTricks: [
        "Start with just ₹500 per month SIP — you don't need lots of money to begin.",
        "Open your demat account on Zerodha or Groww today — it takes only 15 minutes.",
        "Read business news for 15 minutes daily — it builds your market knowledge.",
        "Never invest based on tips from WhatsApp groups — do your own research."
      ],
      practice: [
        {
          id: "practice-market-basics",
          title: "Test Your Understanding of Market Basics",
          difficulty: "Easy",
          task: "Answer these questions to check your understanding: (1) What is the difference between NSE and BSE? (2) What does SEBI do? (3) What is a demat account? (4) What happens when Nifty falls 10% in a day? (5) What is the difference between face value and market price?",
          hint: "Think about what each concept means for you as an investor.",
          solution: `(1) NSE vs BSE: NSE is the newer, electronic exchange where 90% of trading happens. BSE is older (1875) and has more listed companies but less trading volume.

(2) SEBI's Role: SEBI is the regulator that protects investors, ensures fair market practices, and punishes fraud. Think of it as the referee of the stock market.

(3) Demat Account: It's a digital locker where your shares are stored electronically. Before 1996, shares were paper certificates. Now everything is digital.

(4) 10% Nifty Fall: SEBI circuit breaker kicks in — trading is halted for 15 minutes to prevent panic selling and give investors time to think calmly.

(5) Face Value vs Market Price: Face value is the original issue price (usually ₹1 or ₹10). Market price is what the stock trades at today (could be ₹100 or ₹5,000). They are completely different numbers.`
        },
        {
          id: "practice-compound-growth",
          title: "See the Power of Compound Growth",
          difficulty: "Medium",
          task: "If you invest ₹5,000 per month for 20 years at 12% annual return, how much will you have? Compare this to keeping the same amount in a bank FD at 7% interest. How much extra wealth does investing create?",
          hint: "Use an online SIP calculator or do the math: SIP value at 12% for 20 years = approximately ₹49.5 lakh.",
          solution: `Compound Growth Comparison:

Monthly SIP: ₹5,000
Time: 20 years
Total Invested: ₹5,000 × 12 × 20 = ₹12,00,000 (₹12 lakh)

Option 1: Bank FD at 7%
Final Value: ~₹26,00,000 (₹26 lakh)
Wealth Created: ₹14,00,000

Option 2: Nifty 50 SIP at 12%
Final Value: ~₹49,50,000 (₹49.5 lakh)
Wealth Created: ₹37,50,000

Difference: ₹23,50,000 more with equity investing!

What happened: Your ₹12 lakh became ₹49.5 lakh — that's 4 times your money. The extra ₹37.5 lakh is pure wealth created by compound growth.

Why this works: At 12%, your money doubles roughly every 6 years. Over 20 years, it doubles more than 3 times. That's the magic of compounding.

Lesson: Start your SIP today. Even ₹1,000/month is better than waiting for the "right time."`
        }
      ]
    },
    {
      id: "types-of-indian-stocks",
      title: "Lesson 2: Types of Indian Stocks and How to Choose Between Them",
      shortDescription:
        "Understand the different types of Indian stocks — large-cap, mid-cap, small-cap — and learn how to build a balanced portfolio that matches your goals.",
      duration: "55 mins",
      readingTime: "11 mins read",
      contentMarkdown: `### Understanding Stock Categories in India

Not all stocks are the same. Just like cars come in different categories — hatchback, sedan, SUV — stocks are categorized by the size of the company, the type of business, and the sector they belong to. Understanding these categories helps you choose the right stocks for your goals.

#### By Company Size (Market Capitalization)

SEBI (the market regulator) has defined specific categories based on how big a company is:

**Large-Cap Companies** are the biggest and most established companies in India. They have a market capitalization of more than ₹20,000 crore. Think of companies like Reliance Industries, TCS, HDFC Bank, and Infosys. These companies have been around for decades, have proven track records, and are generally less risky. They may not give the highest returns, but they provide steady, reliable growth.

**Mid-Cap Companies** are medium-sized companies with market capitalization between ₹5,000 crore and ₹20,000 crore. Examples include companies like Trent (which owns Westside), Persistent Systems, and Zomato. These companies have more growth potential than large-caps but also carry more risk. They are like the "middle child" — not too safe, not too risky.

**Small-Cap Companies** are smaller companies with market capitalization below ₹5,000 crore. These are often newer companies or companies in niche industries. They have the highest growth potential but also the highest risk. Some small-cap companies grow into mid-caps and eventually large-caps, but many don't survive. Think of small-caps as young startups — some become the next big thing, but many fail.

#### By Investment Style

**Growth Stocks** are companies that are growing their revenue and profits faster than the overall economy. Indian IT companies like TCS and Infosys have been classic growth stocks — they grow at 10-15% every year. You buy growth stocks because you expect their share price to increase significantly over time.

**Value Stocks** are companies that the market thinks are underpriced. Maybe the company is temporarily out of favor, or maybe investors are ignoring it. Value investing means finding these bargains and waiting for the market to recognize their true worth. SBI and Coal India are examples of value stocks — they trade at low valuations relative to their earnings.

**Dividend Stocks** are companies that pay regular income to shareholders. Indian PSU stocks like Coal India, Power Grid, and ONGC are known for high dividends. If you need regular income from your investments (like during retirement), dividend stocks are a good choice.

**Blue-Chip Stocks** are large, well-established companies that have weathered many economic cycles. They are considered the safest stocks to own. Reliance, HDFC Bank, TCS, and Asian Paints are all blue-chip stocks. Every investor's portfolio should have some blue-chip stocks.

#### By Industry Sector

India's stock market has companies across many sectors. Here are the main ones:

**Banking Sector** includes HDFC Bank, ICICI Bank, SBI, and Kotak Mahindra Bank. Banking stocks are sensitive to interest rates and economic growth. When the economy grows, banks lend more and make more money.

**IT Sector** includes TCS, Infosys, Wipro, and HCL Tech. These companies provide technology services to global clients. They earn in US dollars, which means they benefit when the rupee weakens.

**FMCG (Fast Moving Consumer Goods)** includes companies that make products you use every day — HUL (soaps, shampoos), ITC (cigarettes, biscuits, hotels), Nestle (Maggi, coffee). FMCG stocks are considered defensive because people buy these products regardless of economic conditions.

**Pharma Sector** includes Sun Pharma, Dr. Reddy's, and Cipla. These companies make medicines. Like FMCG, pharma is defensive because people need medicines in good times and bad.

**Automobile Sector** includes Maruti Suzuki, Tata Motors, and Mahindra & Mahindra. Auto stocks are cyclical — they do well when the economy is growing and people have money to buy cars.

#### Beyond Stocks: Other Investment Options in India

You don't have to invest only in stocks. Here are other options:

**Equity Mutual Funds** are professionally managed portfolios of stocks. Instead of picking individual stocks yourself, you give your money to a fund manager who does it for you. You can invest through SIP (Systematic Investment Plan) starting from just ₹500 per month.

**Index Funds** are mutual funds that automatically invest in all the companies in an index like Nifty 50. They are the simplest and cheapest way to invest in the stock market. You don't need to pick individual stocks — the fund does it for you automatically.

**PPF (Public Provident Fund)** is a government savings scheme that gives you 7.1% interest, and the returns are completely tax-free. It has a 15-year lock-in period. This is the best guaranteed-return investment available in India.

**ELSS (Equity Linked Savings Scheme)** are mutual funds that give you tax benefits under Section 80C. You can invest up to ₹1.5 lakh per year and save tax. The best part is that ELSS funds invest in stocks, so you get tax savings plus the potential for high returns.

**Gold (Sovereign Gold Bonds)** are government securities denominated in gold. You get the benefit of gold price appreciation plus 2.5% annual interest. And if you hold until maturity (8 years), the gains are completely tax-free.

**NPS (National Pension System)** is a retirement savings scheme that gives you additional tax benefits under Section 80CCD. You can invest up to ₹50,000 extra per year (over and above the ₹1.5 lakh 80C limit) and save tax.

#### How to Choose the Right Mix

The right mix depends on your age, income, and when you need the money:

If you are in your 20s, you can afford to take more risk because you have decades to recover from any losses. A good mix would be 80% in equity (stocks and equity mutual funds) and 20% in debt (PPF, debt funds).

If you are in your 40s, you should start reducing risk. A good mix would be 60% equity and 40% debt.

If you are in your 50s or 60s, capital preservation becomes more important than growth. A good mix would be 40% equity and 60% debt.

#### Common Mistakes to Avoid

The biggest mistake is only investing in one sector. If you put all your money in IT stocks and the IT sector has a bad year, your entire portfolio suffers. Diversify across sectors.

Another mistake is confusing stock price with value. A stock trading at ₹10 is not "cheaper" than a stock trading at ₹1,000. What matters is the price relative to the company's earnings and growth potential.

The third mistake is ignoring mid and small-cap stocks entirely. While they are riskier, they also offer higher growth potential. A small allocation (10-20%) to mid and small-caps can significantly boost your long-term returns.

#### Key Takeaways

- Stocks are categorized by company size: large-cap, mid-cap, small-cap
- Large-caps are safer, small-caps have higher growth potential
- Diversify across sectors and investment styles
- Index funds are the simplest way to start investing
- PPF at 7.1% tax-free is the best guaranteed return in India
- ELSS gives you tax savings plus equity growth
- Your asset allocation should become more conservative as you age

**Next up:** How to evaluate whether a stock is worth buying — fundamental analysis.`,
      codeLanguage: "text",
      codeSnippet: `Types of Indian Stocks — A Beginner's Complete Guide

COMPANY SIZE CATEGORIES (SEBI DEFINITION)

Large-Cap: More than ₹20,000 crore market cap
Examples: Reliance, TCS, HDFC Bank, Infosys
Risk: Lower | Returns: Moderate (10-12%)
Best for: Conservative investors, retirement savings

Mid-Cap: ₹5,000 to ₹20,000 crore market cap
Examples: Trent, Persistent Systems, Zomato
Risk: Medium | Returns: Higher (14-16%)
Best for: Investors with 5-10 year horizon

Small-Cap: Less than ₹5,000 crore market cap
Examples: Many niche companies
Risk: High | Returns: Highest (16-20%)
Best for: Aggressive investors with 10+ year horizon

INVESTMENT STYLES

Growth Stocks: Companies growing faster than economy
Examples: TCS, Infosys, Avenue Supermarts
Best for: Capital appreciation over long term

Value Stocks: Underpriced companies with potential
Examples: SBI, Coal India, ONGC
Best for: Patient investors who can wait

Dividend Stocks: Companies paying regular income
Examples: ITC, Power Grid, Coal India
Best for: Income needs, retirement

Blue-Chip Stocks: Large, stable, established companies
Examples: Reliance, HDFC Bank, TCS, Asian Paints
Best for: Every investor's core portfolio

INDIAN MARKET SECTORS

Banking: HDFC Bank, ICICI Bank, SBI, Kotak
IT: TCS, Infosys, Wipro, HCL Tech
FMCG: HUL, ITC, Nestle, Britannia
Pharma: Sun Pharma, Dr. Reddy's, Cipla
Auto: Maruti, Tata Motors, M&M
Energy: Reliance, ONGC, NTPC, Power Grid
Metals: Tata Steel, JSW Steel, Hindalco

BEYOND STOCKS — OTHER INDIAN INVESTMENT OPTIONS

Equity Mutual Funds: Professionally managed stock portfolios
  Starting amount: ₹500/month SIP
  Risk: Medium-High | Returns: 12-15%

Index Funds: Auto-invest in Nifty 50 companies
  Starting amount: ₹500/month SIP
  Risk: Medium | Returns: 12%

PPF: Government savings, 7.1% tax-free
  Lock-in: 15 years
  Risk: Very Low | Returns: 7.1% (guaranteed)

ELSS: Tax-saving mutual fund (Section 80C)
  Lock-in: 3 years
  Risk: Medium-High | Returns: 12-15%

SGB (Gold): Sovereign Gold Bonds
  Interest: 2.5% annual + gold appreciation
  Tax: Free if held 8 years

NPS: National Pension System
  Extra tax saving: ₹50,000 under 80CCD
  Returns: 10-12%

AGE-BASED ALLOCATION GUIDE

Age 20-30: 80% Equity + 20% Debt
  You can take more risk, long time to recover

Age 30-40: 70% Equity + 30% Debt
  Still growing, but start protecting gains

Age 40-50: 60% Equity + 40% Debt
  Reducing risk, building retirement corpus

Age 50-60: 40% Equity + 60% Debt
  Near retirement, focus on capital preservation

Age 60+: 20% Equity + 80% Debt
  Generate income, protect what you have`,
      codeOutput: `Types of Indian Stocks — A Beginner's Complete Guide

COMPANY SIZE CATEGORIES (SEBI DEFINITION)

Large-Cap: More than ₹20,000 crore market cap
Examples: Reliance, TCS, HDFC Bank, Infosys
Risk: Lower | Returns: Moderate (10-12%)
Best for: Conservative investors, retirement savings

Mid-Cap: ₹5,000 to ₹20,000 crore market cap
Examples: Trent, Persistent Systems, Zomato
Risk: Medium | Returns: Higher (14-16%)
Best for: Investors with 5-10 year horizon

Small-Cap: Less than ₹5,000 crore market cap
Examples: Many niche companies
Risk: High | Returns: Highest (16-20%)
Best for: Aggressive investors with 10+ year horizon

INVESTMENT STYLES

Growth Stocks: Companies growing faster than economy
Examples: TCS, Infosys, Avenue Supermarts
Best for: Capital appreciation over long term

Value Stocks: Underpriced companies with potential
Examples: SBI, Coal India, ONGC
Best for: Patient investors who can wait

Dividend Stocks: Companies paying regular income
Examples: ITC, Power Grid, Coal India
Best for: Income needs, retirement

Blue-Chip Stocks: Large, stable, established companies
Examples: Reliance, HDFC Bank, TCS, Asian Paints
Best for: Every investor's core portfolio

INDIAN MARKET SECTORS

Banking: HDFC Bank, ICICI Bank, SBI, Kotak
IT: TCS, Infosys, Wipro, HCL Tech
FMCG: HUL, ITC, Nestle, Britannia
Pharma: Sun Pharma, Dr. Reddy's, Cipla
Auto: Maruti, Tata Motors, M&M
Energy: Reliance, ONGC, NTPC, Power Grid
Metals: Tata Steel, JSW Steel, Hindalco

BEYOND STOCKS — OTHER INDIAN INVESTMENT OPTIONS

Equity Mutual Funds: Professionally managed stock portfolios
  Starting amount: ₹500/month SIP
  Risk: Medium-High | Returns: 12-15%

Index Funds: Auto-invest in Nifty 50 companies
  Starting amount: ₹500/month SIP
  Risk: Medium | Returns: 12%

PPF: Government savings, 7.1% tax-free
  Lock-in: 15 years
  Risk: Very Low | Returns: 7.1% (guaranteed)

ELSS: Tax-saving mutual fund (Section 80C)
  Lock-in: 3 years
  Risk: Medium-High | Returns: 12-15%

SGB (Gold): Sovereign Gold Bonds
  Interest: 2.5% annual + gold appreciation
  Tax: Free if held 8 years

NPS: National Pension System
  Extra tax saving: ₹50,000 under 80CCD
  Returns: 10-12%

AGE-BASED ALLOCATION GUIDE

Age 20-30: 80% Equity + 20% Debt
  You can take more risk, long time to recover

Age 30-40: 70% Equity + 30% Debt
  Still growing, but start protecting gains

Age 40-50: 60% Equity + 40% Debt
  Reducing risk, building retirement corpus

Age 50-60: 40% Equity + 60% Debt
  Near retirement, focus on capital preservation

Age 60+: 20% Equity + 80% Debt
  Generate income, protect what you have`,
      visualizationTips: [
        "Create a pie chart showing different portfolio allocations for different ages.",
        "Compare the 10-year returns of large-cap, mid-cap, and small-cap indices.",
        "Draw a simple flowchart showing the different investment options available in India."
      ],
      tipsAndTricks: [
        "Start with Nifty 50 index fund — it's the simplest way to invest in India's top 50 companies.",
        "Use direct plans to save 0.5-1% in expense ratios every year.",
        "ELSS is the best Section 80C investment — shortest lock-in + highest returns.",
        "Don't put all your money in one sector — diversify across banking, IT, FMCG, and pharma."
      ],
      practice: [
        {
          id: "practice-portfolio-design",
          title: "Design Your First Portfolio",
          difficulty: "Medium",
          task: "You are 28 years old and want to invest ₹5,00,000. Design a portfolio that matches your age and risk tolerance. Include specific investment options (index funds, PPF, ELSS, etc.) and explain why you chose each one.",
          hint: "Think about your age, when you'll need the money, and how much risk you can handle.",
          solution: `Portfolio for a 28-year-old (₹5,00,000):

1. Nifty 50 Index Fund (UTI): ₹1,50,000 (30%)
   Why: Core India exposure, low cost, tracks top 50 companies

2. Nifty Next 50 Index Fund (ICICI): ₹75,000 (15%)
   Why: Next generation of blue chips, higher growth potential

3. ELSS Fund (Quant): ₹1,50,000 (30%)
   Why: Section 80C tax saving + equity growth, 3-year lock-in

4. International Fund (Motilal Oswal S&P 500): ₹75,000 (15%)
   Why: US market exposure, reduces India-specific risk

5. Small Cap Fund (Nippon): ₹50,000 (10%)
   Why: High growth potential, 10+ year investment horizon

Total: ₹5,00,000

Why this works:
- 90% equity for maximum growth (you're young, can handle risk)
- ELSS saves ₹1.5 lakh tax under 80C
- International fund diversifies globally
- Small cap provides extra growth over long term
- All direct plans for lowest costs`
        },
        {
          id: "practice-sector-analysis",
          title: "Understand Indian Market Sectors",
          difficulty: "Easy",
          task: "List 2 companies from each of these Indian sectors: Banking, IT, FMCG, and Pharma. For each company, explain one reason why it might be a good investment and one risk to watch out for.",
          hint: "Think about what makes each company strong and what could go wrong.",
          solution: `Indian Sector Analysis:

Banking Sector:
- HDFC Bank: Strength — largest private bank in India with strong asset quality. Risk — high valuation, merger integration challenges.
- SBI: Strength — largest bank in India with government backing. Risk — NPA cycles, slower decision-making.

IT Sector:
- TCS: Strength — largest IT company in India with trusted global brand. Risk — depends on US economy, visa regulation changes.
- Infosys: Strength — strong profit margins, leader in digital transformation. Risk — employee attrition, client concentration.

FMCG Sector:
- HUL: Strength — market leader in most product categories, strong distribution network. Risk — rural demand slowdown, raw material inflation.
- ITC: Strength — diversified business (cigarettes, hotels, FMCG), generates lots of cash. Risk — regulatory risk on cigarettes, thin FMCG margins.

Pharma Sector:
- Sun Pharma: Strength — largest pharma company in India with global presence. Risk — US FDA regulatory issues, specialty drug pipeline.
- Dr. Reddy's: Strength — strong generic drug portfolio, growing biosimilars business. Risk — pricing pressure in US generic market.`
        }
      ]
    },
    {
      id: "fundamental-analysis",
      title: "Lesson 3: How to Evaluate if an Indian Stock is Worth Buying",
      shortDescription:
        "Learn how to check a company's financial health, understand key numbers, and decide whether a stock is a good investment — all explained in simple language.",
      duration: "60 mins",
      readingTime: "12 mins read",
      contentMarkdown: `### What is Fundamental Analysis? (In Simple Words)

Fundamental analysis is like doing a health check-up for a company before you invest your money in it. Just like you would check a person's blood pressure, cholesterol, and fitness level before deciding if they are healthy, you check a company's revenue, profit, debt, and growth to decide if it is a healthy investment.

The goal is to figure out the **intrinsic value** of a stock — what it is actually worth, regardless of what the market is currently charging. If the market price is lower than the intrinsic value, the stock is a bargain. If it is higher, the stock is expensive.

> **Think of it this way:** Imagine you want to buy a second-hand car. You would check its age, condition, mileage, service history, and compare the price to similar cars. Fundamental analysis is the same thing, but for companies instead of cars.

#### Where to Find Information About Indian Companies

Before we dive into the numbers, let me tell you where to find them:

**Screener.in** — This is the best free tool for Indian stock analysis. You just type in a company name like "TCS" or "HDFC Bank" and it shows you all the financial data, ratios, and charts in one place.

**Moneycontrol** — Great for financial statements, news, and market data. You can find quarterly results, annual reports, and analyst opinions here.

**Company Website** — Every listed company has an "Investor Relations" section on its website where you can download annual reports, investor presentations, and quarterly results.

**BSE/NSE Website** — The official exchange websites show shareholding patterns, insider trading disclosures, and corporate announcements.

#### The Three Most Important Financial Statements

Every company publishes three main financial reports. Think of them as the company's report card:

**The Profit and Loss Statement (P&L)** shows how much money the company made (revenue), how much it spent (expenses), and how much profit is left over. For example, if TCS earned ₹2,25,000 crore in revenue and spent ₹1,83,000 crore on employees and other costs, its profit (called PAT — Profit After Tax) would be ₹42,000 crore.

**The Balance Sheet** shows what the company owns (assets) and what it owes (liabilities) at a specific point in time. Think of it as a snapshot of the company's financial health. If a company has ₹10,000 crore in assets and ₹3,000 crore in debt, its net worth (equity) is ₹7,000 crore.

**The Cash Flow Statement** shows how much actual cash the company generated. This is important because a company can show profit on paper but still run out of cash. Cash flow tells you the real story of how much money the business is generating.

#### Key Numbers Every Indian Investor Must Understand

Let me explain the most important financial ratios in simple language:

**Price-to-Earnings Ratio (P/E Ratio)** tells you how much you are paying for every ₹1 of the company's profit. If a stock has a P/E of 25, it means you are paying ₹25 for every ₹1 of annual profit. A lower P/E generally means the stock is cheaper, and a higher P/E means it is expensive. But you must compare P/E within the same sector — IT stocks typically have P/E of 25-35, while banks have P/E of 10-15.

**Return on Equity (ROE)** tells you how efficiently the company is using shareholders' money to generate profit. If a company has ROE of 20%, it means for every ₹100 invested by shareholders, the company generates ₹20 of profit. Higher ROE is better — look for companies with ROE above 15%.

**Return on Capital Employed (ROCE)** is similar to ROE but considers all the capital the company uses (both shareholder money and borrowed money). It is considered a better measure of profitability. Look for ROCE above 18%.

**Debt-to-Equity Ratio** tells you how much debt the company has compared to its own money. If the ratio is 1.0, it means the company has equal amounts of debt and equity. Lower is better — a ratio below 1.0 is considered healthy. Some companies like TCS and Infosys have almost no debt, which makes them very safe.

**Operating Margin** tells you what percentage of revenue becomes operating profit. If a company earns ₹100 in revenue and has ₹30 left after paying for raw materials and employees (but before paying interest and taxes), its operating margin is 30%. Higher margin means the company is more efficient.

#### The Indian-Specific Metrics You Must Check

In India, there are some unique things you need to check that are not as important in other countries:

**Promoter Holding** shows how much of the company is owned by the founding family or promoters. In India, most companies are controlled by promoter families. If the promoter owns more than 50% of the company, it is a good sign — it means they have skin in the game and are confident about the company's future. If promoter holding drops suddenly, it is a red flag.

**Promoter Pledge** shows how many shares the promoters have pledged as collateral for loans. If a promoter has pledged 40% of their shares, it means they have borrowed money using their shares as security. If the stock price falls significantly, the lender may sell the pledged shares, which can cause further price decline. Always check if promoters have pledged shares — low or zero pledge is best.

**FII (Foreign Institutional Investor) Holding** shows how much of the company is owned by foreign institutional investors like Goldman Sachs, Morgan Stanley, etc. When FIIs buy a stock, it signals global confidence in the company. When they sell, it can put pressure on the stock price.

**Mutual Fund Holding** shows how much is owned by Indian mutual funds. When mutual funds increase their stake, it means professional fund managers see value in the company.

#### How to Read an Indian Annual Report (Simplified)

Every year, listed companies publish an annual report. Here is how to read it efficiently:

Start with the **Chairman's Letter** — this gives you management's perspective on the year's performance and future outlook.

Then read the **Management Discussion and Analysis** section — this is where management explains what happened, why it happened, and what they plan to do next.

Check the **auditor's report** — this is an independent opinion on whether the financial statements are accurate. If the auditor has raised any concerns (called "qualifications"), pay attention.

Finally, look at the **financial statements** and the **notes to accounts** — the notes often contain important details about accounting policies, pending lawsuits, and related party transactions.

#### Building Your Stock Analysis Framework

Here is a simple step-by-step process:

Step 1: Check the basic numbers on Screener.in — revenue growth, profit growth, ROE, ROCE, debt levels, and promoter holding.

Step 2: Read the annual report to understand the business, competitive advantages, and management quality.

Step 3: Compare the company's ratios to its industry peers — is it better or worse than competitors?

Step 4: Determine a fair price using valuation methods — is the current stock price reasonable compared to the company's earnings and growth?

Step 5: Buy only if there is a margin of safety — the stock should be priced below your estimated fair value.

#### Common Mistakes to Avoid

The biggest mistake is relying on just one ratio. A low P/E does not automatically mean a stock is cheap — the company might have low P/E because it has serious problems. Always look at multiple ratios together.

Another mistake is not checking promoter holding and pledge. In India, this is one of the most important indicators of corporate governance. Always check it.

The third mistake is ignoring the annual report. The numbers on Screener.in are useful, but the annual report tells you the story behind the numbers.

#### Key Takeaways

- Fundamental analysis evaluates whether a stock is worth its current price
- Check revenue growth, profit growth, ROE, ROCE, and debt levels
- In India, always check promoter holding and pledge levels
- Screener.in is the best free tool for Indian stock analysis
- Compare ratios within the same sector, not across different sectors
- Read the annual report for qualitative insights beyond the numbers
- Buy only when there is a margin of safety — the stock is priced below its fair value

**Next up:** Technical analysis — reading charts and understanding market psychology.`,
      codeLanguage: "text",
      codeSnippet: `Fundamental Analysis for Indian Stocks — A Beginner's Guide

WHAT IS FUNDAMENTAL ANALYSIS?
It's like a health check-up for a company. You check its financial health before investing money. The goal is to find the "intrinsic value" — what the company is actually worth.

WHERE TO FIND INDIAN COMPANY DATA

Screener.in — Best free tool, shows all financials in one place
Moneycontrol — Financial statements, news, market data
Company Website — Annual reports, investor presentations
BSE/NSE Website — Shareholding patterns, insider trading

THE THREE FINANCIAL STATEMENTS

1. Profit & Loss Statement (P&L)
   Shows: Revenue → Expenses → Profit
   Example: TCS earned ₹2,25,000 Cr revenue, spent ₹1,83,000 Cr, kept ₹42,000 Cr as profit

2. Balance Sheet
   Shows: What company owns (assets) vs what it owes (liabilities)
   Example: Company has ₹10,000 Cr assets, ₹3,000 Cr debt, ₹7,000 Cr net worth

3. Cash Flow Statement
   Shows: Actual cash generated (not just paper profit)
   Important: A company can show profit but still run out of cash

KEY FINANCIAL RATIOS EXPLAINED IN SIMPLE WORDS

P/E Ratio (Price-to-Earnings):
What it means: How much you pay for ₹1 of company's profit
Example: P/E of 25 means you pay ₹25 for every ₹1 of annual profit
Good range: 15-25 for stable companies (compare within same sector!)
IT stocks: 25-35 P/E is normal
Bank stocks: 10-15 P/E is normal

ROE (Return on Equity):
What it means: How efficiently company uses your money to make profit
Formula: Net Profit ÷ Shareholders' Money × 100
Good: Above 15%
Excellent: Above 20%

ROCE (Return on Capital Employed):
What it means: Profit generated from ALL money used (equity + debt)
Good: Above 18%
Excellent: Above 25%

Debt-to-Equity Ratio:
What it means: How much the company owes vs how much it owns
Good: Below 1.0 (company has more own money than borrowed)
Excellent: Near 0 (almost no debt, like TCS, Infosys)

Operating Margin:
What it means: What % of revenue becomes profit before interest and tax
Good: Above 15%
Excellent: Above 25%

INDIAN-SPECIFIC METRICS (VERY IMPORTANT!)

Promoter Holding:
What it means: How much the founding family owns
Good: Above 50% (they have skin in the game)
Bad: Below 40% or declining rapidly
Always check this — it's unique to Indian markets!

Promoter Pledge:
What it means: Shares pledged as loan collateral
Good: 0% pledge (no risk of forced selling)
Bad: Above 20% pledge (risky)

FII Holding:
What it means: How much foreign investors own
Good: Stable or increasing (global confidence)
Watch: Rapid selling (might signal problems)

Mutual Fund Holding:
What it means: How much Indian fund managers own
Good: Increasing (professional investors see value)

HOW TO READ AN ANNUAL REPORT (SIMPLE STEPS)

1. Chairman's Letter — Management's perspective
2. Management Discussion — What happened and why
3. Auditor's Report — Is everything accurate?
4. Financial Statements — The actual numbers
5. Notes to Accounts — Important details

BUILD YOUR STOCK ANALYSIS CHECKLIST

Before investing in any Indian stock, check:
1. Revenue growing 5+ years? YES / NO
2. Profit growing 5+ years? YES / NO
3. ROE above 15%? YES / NO
4. ROCE above 18%? YES / NO
5. Debt/Equity below 1? YES / NO
6. Promoter holding above 50%? YES / NO
7. Promoter pledge near 0%? YES / NO
8. Fair price or overvalued? YES / NO

If 7-8 YES → Strong buy candidate
If 5-6 YES → Investigate further
If below 5 YES → Avoid or deep research`,
      codeOutput: `Fundamental Analysis for Indian Stocks — A Beginner's Guide

WHAT IS FUNDAMENTAL ANALYSIS?
It's like a health check-up for a company. You check its financial health before investing money. The goal is to find the "intrinsic value" — what the company is actually worth.

WHERE TO FIND INDIAN COMPANY DATA

Screener.in — Best free tool, shows all financials in one place
Moneycontrol — Financial statements, news, market data
Company Website — Annual reports, investor presentations
BSE/NSE Website — Shareholding patterns, insider trading

THE THREE FINANCIAL STATEMENTS

1. Profit & Loss Statement (P&L)
   Shows: Revenue → Expenses → Profit
   Example: TCS earned ₹2,25,000 Cr revenue, spent ₹1,83,000 Cr, kept ₹42,000 Cr as profit

2. Balance Sheet
   Shows: What company owns (assets) vs what it owes (liabilities)
   Example: Company has ₹10,000 Cr assets, ₹3,000 Cr debt, ₹7,000 Cr net worth

3. Cash Flow Statement
   Shows: Actual cash generated (not just paper profit)
   Important: A company can show profit but still run out of cash

KEY FINANCIAL RATIOS EXPLAINED IN SIMPLE WORDS

P/E Ratio (Price-to-Earnings):
What it means: How much you pay for ₹1 of company's profit
Example: P/E of 25 means you pay ₹25 for every ₹1 of annual profit
Good range: 15-25 for stable companies (compare within same sector!)
IT stocks: 25-35 P/E is normal
Bank stocks: 10-15 P/E is normal

ROE (Return on Equity):
What it means: How efficiently company uses your money to make profit
Formula: Net Profit ÷ Shareholders' Money × 100
Good: Above 15%
Excellent: Above 20%

ROCE (Return on Capital Employed):
What it means: Profit generated from ALL money used (equity + debt)
Good: Above 18%
Excellent: Above 25%

Debt-to-Equity Ratio:
What it means: How much the company owes vs how much it owns
Good: Below 1.0 (company has more own money than borrowed)
Excellent: Near 0 (almost no debt, like TCS, Infosys)

Operating Margin:
What it means: What % of revenue becomes profit before interest and tax
Good: Above 15%
Excellent: Above 25%

INDIAN-SPECIFIC METRICS (VERY IMPORTANT!)

Promoter Holding:
What it means: How much the founding family owns
Good: Above 50% (they have skin in the game)
Bad: Below 40% or declining rapidly
Always check this — it's unique to Indian markets!

Promoter Pledge:
What it means: Shares pledged as loan collateral
Good: 0% pledge (no risk of forced selling)
Bad: Above 20% pledge (risky)

FII Holding:
What it means: How much foreign investors own
Good: Stable or increasing (global confidence)
Watch: Rapid selling (might signal problems)

Mutual Fund Holding:
What it means: How much Indian fund managers own
Good: Increasing (professional investors see value)

HOW TO READ AN ANNUAL REPORT (SIMPLE STEPS)

1. Chairman's Letter — Management's perspective
2. Management Discussion — What happened and why
3. Auditor's Report — Is everything accurate?
4. Financial Statements — The actual numbers
5. Notes to Accounts — Important details

BUILD YOUR STOCK ANALYSIS CHECKLIST

Before investing in any Indian stock, check:
1. Revenue growing 5+ years? YES / NO
2. Profit growing 5+ years? YES / NO
3. ROE above 15%? YES / NO
4. ROCE above 18%? YES / NO
5. Debt/Equity below 1? YES / NO
6. Promoter holding above 50%? YES / NO
7. Promoter pledge near 0%? YES / NO
8. Fair price or overvalued? YES / NO

If 7-8 YES → Strong buy candidate
If 5-6 YES → Investigate further
If below 5 YES → Avoid or deep research`,
      visualizationTips: [
        "Open Screener.in and look up TCS — find all the ratios mentioned above.",
        "Create a simple checklist you can use before investing in any Indian stock.",
        "Compare two Indian companies side by side using the ratios we learned."
      ],
      tipsAndTricks: [
        "Always check promoter pledge level — high pledge is a major red flag in India.",
        "Compare P/E ratios within the same sector, not across different sectors.",
        "Look for companies with consistent ROCE above 18% over 5 years.",
        "Read the 'Related Party Transactions' section in annual reports for governance issues."
      ],
      practice: [
        {
          id: "practice-ratio-analysis",
          title: "Analyze an Indian Stock Using Fundamental Analysis",
          difficulty: "Medium",
          task: "Go to Screener.in and look up HDFC Bank. Find and understand: (1) P/E Ratio, (2) ROE, (3) ROCE, (4) Debt levels, (5) Promoter Holding, (6) 5-year revenue growth. Based on these numbers, would you invest in HDFC Bank? Why or why not?",
          hint: "Use the checklist we learned — check if HDFC Bank passes most of the criteria.",
          solution: `HDFC Bank Fundamental Analysis:

P/E Ratio: 19x
Interpretation: Reasonable for a bank. Banks typically have P/E of 10-15, but HDFC Bank deserves a premium because of its quality. 19x is fair.

ROE: 16.5%
Interpretation: Strong. Above our 15% threshold. This means the bank is efficiently using shareholders' money to generate profits.

ROCE: 18.2%
Interpretation: Excellent. Above our 18% threshold. The bank is generating good returns on all capital employed.

Debt Levels: N/A for banks (they use different metrics)
Instead, check Capital Adequacy Ratio: 18.4% (well above 9% minimum required by RBI). This means the bank has plenty of capital buffer.

Promoter Holding: 25.5%
Interpretation: Lower than usual due to HDFC Ltd merger. But FII holding is 49% (very high — global confidence). MF holding is 12% (increasing). No promoter pledge.

5-Year Revenue Growth: ~15% CAGR
Interpretation: Consistent double-digit growth. The bank is growing its business steadily.

Overall Assessment: This is a QUALITY stock.
- Passes most of our checklist criteria
- Strong profitability (ROE 16.5%, ROCE 18.2%)
- Low risk (strong capital adequacy)
- Global confidence (high FII holding)
- Consistent growth (15% revenue CAGR)

Conclusion: HDFC Bank is a quality stock suitable for long-term holding. It's not the cheapest stock, but quality rarely is.`
        },
        {
          id: "practice-valuation",
          title: "Simple Stock Valuation for Beginners",
          difficulty: "Easy",
          task: "You're looking at Reliance Industries. Its current P/E ratio is 28x. The average P/E for the industry is 22x. Reliance is growing at 15% per year. Calculate the PEG ratio. Is Reliance expensive or cheap?",
          hint: "PEG ratio = P/E divided by Growth Rate. If PEG is below 1, the stock might be undervalued.",
          solution: `Reliance Industries Valuation:

Current P/E: 28x
Industry Average P/E: 22x
Growth Rate: 15% per year

PEG Ratio Calculation:
PEG = P/E ÷ Growth Rate
PEG = 28 ÷ 15 = 1.87

What does this mean?

PEG below 1.0: Stock is potentially undervalued (good deal)
PEG between 1.0 and 1.5: Fairly valued (reasonable price)
PEG above 1.5: Potentially overvalued (expensive)

Reliance PEG is 1.87 → Slightly overvalued

However, Reliance deserves a premium because:
- It's India's most valuable company
- Diversified across oil, retail, telecom, and new energy
- Market leader in multiple businesses
- Strong cash flow generation

Fair Value Estimate:
If we apply industry P/E of 22x:
Fair Price = Current Price × (22 ÷ 28) = ~18% lower than current price

Conclusion: Reliance is a great company but slightly expensive at current levels. A better entry would be 15-20% lower. If you're a long-term investor (10+ years), the quality justifies the premium.`
        }
      ]
    }
  ],
};
