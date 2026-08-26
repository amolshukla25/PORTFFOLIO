import type { Module } from "../courses";

export const MODULE_2: Module = {
  id: "module-2-technical-analysis",
  title: "Module 2: Technical Analysis — Reading Charts & Indicators on Indian Markets",
  description:
    "Master chart patterns, technical indicators, and volume analysis on NSE/BSE to identify trends and time your entries and exits with confidence.",
  lessons: [
    {
      id: "chart-basics-indian",
      title: "Lesson 1: Chart Types & Price Action on Indian Markets",
      shortDescription:
        "Understand candlestick charts, support/resistance levels, and how to read price action on NSE and BSE stocks like a professional Indian investor.",
      duration: "50 mins",
      readingTime: "10 mins read",
      contentMarkdown: `### What is Technical Analysis?

Technical analysis is the study of price movements and trading volume to forecast future price direction. For Indian markets, you'll use TradingView, Zerodha Kite, or Groww charts to analyze NSE/BSE stocks.

> **Mental model:** Think of technical analysis as reading the market's body language — price action, volume, and patterns on Indian stocks tell you whether buyers or sellers are in control.

---

### Indian Market Hours & Structure

| Session | Time (IST) | What Happens |
|---|---|---|
| **Pre-Open** | 9:00 AM - 9:15 AM | Order matching, price discovery |
| **Market Hours** | 9:15 AM - 3:30 PM | Active trading on NSE/BSE |
| **Closing Session** | 3:30 PM - 3:40 PM | Closing price calculation |
| **Post-Close** | 3:40 PM - 4:00 PM | Order entry for next day |

> **Key insight:** Indian markets are open 6 hours 15 minutes per day. Most price movement happens in the first 1 hour (9:15-10:15 AM) and last 1 hour (2:30-3:30 PM).

#### Circuit Breakers (SEBI Rules)

| Index Drop | Trading Halt | Duration |
|---|---|---|
| -10% (Level 1) | 15-minute halt | 15 mins |
| -15% (Level 2) | 30-minute halt | 30 mins |
| -20% (Level 3) | Halt for rest of day | Rest of day |

---

### Key Candlestick Patterns on Indian Stocks

#### Single Candle Patterns

| Pattern | Appearance | Signal | Reliability |
|---|---|---|---|
| **Doji** | Very small body, long wicks | Indecision | Medium |
| **Hammer** | Small body, long lower wick | Bullish reversal | High |
| **Shooting Star** | Small body, long upper wick | Bearish reversal | High |
| **Marubozu** | Full body, no wicks | Strong conviction | High |

#### Multi-Candle Patterns

| Pattern | Description | Signal |
|---|---|---|
| **Engulfing** | Current candle engulfs previous | Strong reversal |
| **Morning Star** | Three-candle bullish reversal | Buy signal |
| **Evening Star** | Three-candle bearish reversal | Sell signal |

---

### Support and Resistance on Indian Stocks

#### How to Identify Support & Resistance on NSE Stocks

1. **Look for price bounces** — levels where Nifty 50 or stock has reversed multiple times
2. **Round numbers** — ₹500, ₹1,000, ₹5,000 often act as psychological levels in India
3. **Previous highs/lows** — historical turning points on NSE charts
4. **Moving averages** — 50-day, 200-day MA act as dynamic support/resistance

> **Key insight:** In India, round numbers like ₹1,000 (HDFC Bank), ₹3,000 (TCS), ₹2,500 (Reliance) are powerful psychological levels.

---

### Indian Stock Chart Analysis Platforms

| Platform | Features | Cost | Best For |
|---|---|---|---|
| **TradingView** | Advanced charts, indicators, community | Free/Premium | Serious technical analysis |
| **Zerodha Kite** | Integrated with brokerage, clean UI | Free (with account) | Active traders |
| **Groww** | Simple charts, good for beginners | Free | New investors |
| **ChartInk** | Indian market screeners, pattern detection | Free/Premium | Indian market scans |
| **Moneycontrol** | News + charts combined | Free | Research + analysis |

---

### Common Technical Analysis Mistakes on Indian Stocks

- **Mistake:** Drawing too many lines on Nifty charts — **Fix:** Focus on the most obvious levels.
- **Mistake:** Ignoring liquidity — **Fix:** Technical analysis works better on liquid NSE stocks than illiquid BSE stocks.
- **Mistake:** Treating levels as exact prices — **Fix:** Think of them as zones (e.g., ₹2,480-2,520 for Reliance).

### Professional Tips & Tricks

- Start with daily Nifty 50 charts for the big picture, then zoom in for entries.
- Use at least 2-3 touches to confirm a trend line on Indian stocks.
- Round numbers (₹100, ₹500, ₹1,000, ₹5,000) are powerful in India.
- Always check multiple timeframes before making a decision on Indian stocks.

---

### Key Takeaways

- Indian markets trade 9:15 AM - 3:30 PM IST on NSE/BSE.
- Candlestick charts are the most popular and informative chart type.
- Support and resistance are zones where supply and demand shift.
- Use TradingView or Zerodha Kite for Indian stock chart analysis.
- Technical analysis works best on liquid NSE stocks.

**Next up:** Technical indicators — moving averages, RSI, and MACD for Indian markets.`,
      codeLanguage: "text",
      codeSnippet: `Technical Analysis for Indian Markets — Quick Reference

INDIAN MARKET SCHEDULE
Pre-Open:     9:00 AM - 9:15 AM IST
Market Hours:  9:15 AM - 3:30 PM IST
Closing:       3:30 PM - 3:40 PM IST

NIFTY 50 KEY LEVELS
Support Levels:    22,000 | 21,500 | 21,000 | 20,500
Resistance Levels: 22,500 | 23,000 | 23,500 | 24,000

INDIAN STOCK CHART CHECKLIST
Before analyzing any Indian stock:
- Is it traded on NSE? (prefer NSE for liquidity)
- What is the average daily volume? (>1 lakh shares ideal)
- What is the market cap? (>₹5,000 crore for reliability)
- Check weekly chart first (big picture)
- Then daily chart (entry timing)
- Then hourly chart (precision entry)

CANDLESTICK PATTERNS FOR NSE STOCKS
Pattern        | Signal           | Best On
---------------|------------------|------------------
Hammer         | Bullish Reversal | Nifty 50 stocks
Engulfing      | Strong Reversal  | All liquid stocks
Doji           | Indecision       | High-volume stocks
Morning Star   | Buy Signal       | Blue chips
Shooting Star  | Bearish Reversal | Any stock

KEY PSYCHOLOGICAL LEVELS (INDIAN STOCKS)
Stock          | Key Support | Key Resistance
---------------|-------------|----------------
Reliance       | ₹2,400      | ₹2,800
TCS            | ₹3,500      | ₹4,000
HDFC Bank      | ₹1,600      | ₹1,850
Infosys        | ₹1,400      | ₹1,650
ITC            | ₹420        | ₹500
SBI            | ₹700        | ₹850

MARKET HOURS STRATEGY
9:15-9:30 AM:  Avoid — high volatility, gap openings
9:30-10:30 AM: Watch — first hour sets the trend
10:30-2:30 PM: Analyze — mid-day is best for research
2:30-3:30 PM: Watch — closing session can be volatile`,
      codeOutput: `Technical Analysis for Indian Markets — Quick Reference

INDIAN MARKET SCHEDULE
Pre-Open:     9:00 AM - 9:15 AM IST
Market Hours:  9:15 AM - 3:30 PM IST
Closing:       3:30 PM - 3:40 PM IST

NIFTY 50 KEY LEVELS
Support Levels:    22,000 | 21,500 | 21,000 | 20,500
Resistance Levels: 22,500 | 23,000 | 23,500 | 24,000

INDIAN STOCK CHART CHECKLIST
Before analyzing any Indian stock:
- Is it traded on NSE? (prefer NSE for liquidity)
- What is the average daily volume? (>1 lakh shares ideal)
- What is the market cap? (>₹5,000 crore for reliability)
- Check weekly chart first (big picture)
- Then daily chart (entry timing)
- Then hourly chart (precision entry)

CANDLESTICK PATTERNS FOR NSE STOCKS
Pattern        | Signal           | Best On
---------------|------------------|------------------
Hammer         | Bullish Reversal | Nifty 50 stocks
Engulfing      | Strong Reversal  | All liquid stocks
Doji           | Indecision       | High-volume stocks
Morning Star   | Buy Signal       | Blue chips
Shooting Star  | Bearish Reversal | Any stock

KEY PSYCHOLOGICAL LEVELS (INDIAN STOCKS)
Stock          | Key Support | Key Resistance
---------------|-------------|----------------
Reliance       | ₹2,400      | ₹2,800
TCS            | ₹3,500      | ₹4,000
HDFC Bank      | ₹1,600      | ₹1,850
Infosys        | ₹1,400      | ₹1,650
ITC            | ₹420        | ₹500
SBI            | ₹700        | ₹850

MARKET HOURS STRATEGY
9:15-9:30 AM:  Avoid — high volatility, gap openings
9:30-10:30 AM: Watch — first hour sets the trend
10:30-2:30 PM: Analyze — mid-day is best for research
2:30-3:30 PM: Watch — closing session can be volatile`,
      visualizationTips: [
        "Open TradingView and apply candlestick charts to Nifty 50 or your favorite NSE stock.",
        "Draw support/resistance zones (not exact lines) on Nifty daily chart.",
        "Practice spotting hammer and engulfing patterns on Indian stock historical data."
      ],
      tipsAndTricks: [
        "Never rely on a single candlestick pattern — wait for confirmation.",
        "Support and resistance are zones, not exact prices — allow wiggle room.",
        "Higher timeframe levels (weekly, monthly) are more significant on Indian stocks.",
        "Use NSE data for technical analysis — it has 9x more volume than BSE."
      ],
      practice: [
        {
          id: "practice-chart-reading",
          title: "Indian Stock Chart Reading Exercise",
          difficulty: "Easy",
          task: "Open TradingView and analyze Nifty 50 index. Identify the current trend (up, down, or sideways), draw a trend line, and mark 2 support and 2 resistance levels.",
          hint: "Use the drawing tools. Start with daily charts for clearer patterns on Nifty.",
          solution: `Example Nifty 50 Analysis:

1. Trend: Uptrend (higher highs, higher lows since Oct 2023)
2. Trend line: Connect 21,000 (Oct low) with 21,500 (Dec low)
3. Support 1: ₹22,000 (recent bounce level)
4. Support 2: ₹21,500 (trend line support)
5. Resistance 1: ₹23,500 (recent high)
6. Resistance 2: ₹24,000 (psychological level)

Key Observation: Nifty is in a strong uptrend with support at the 50-day moving average (~22,200). Any pullback to ₹22,000-21,500 zone would be a buying opportunity.

Risk Management: Stop loss below ₹21,000 (200-day MA) for long positions.`
        },
        {
          id: "practice-candlestick-spotting",
          title: "Indian Stock Candlestick Recognition",
          difficulty: "Medium",
          task: "Look at the last 60 days of TCS daily chart on TradingView. Find and label: 1 Hammer, 1 Engulfing pattern, and 1 Doji. Note the date and what happened to price afterward.",
          hint: "Zoom in on the daily chart. Hammers have long lower wicks; dojis have very small bodies.",
          solution: `TCS Candlestick Analysis (hypothetical example):

1. Hammer - Found on day when TCS dropped to ₹3,450 intraday but recovered to close at ₹3,520.
   Result: Next 3 days, TCS rallied 4% to ₹3,660. Hammer at support = reliable reversal.

2. Bullish Engulfing - Green candle completely engulfed previous red candle near ₹3,500 support.
   Result: Next week, TCS moved up 5% to ₹3,700. Strong buy signal.

3. Doji - Small body at ₹3,600 after a 3-day rally.
   Result: Next day was flat, followed by a 2% pullback. Doji at resistance = caution.

Key Lesson: Candlestick patterns work best when they appear near support/resistance levels on liquid NSE stocks like TCS. Never use them in isolation.`
        }
      ]
    },
    {
      id: "technical-indicators-indian",
      title: "Lesson 2: Technical Indicators for Indian Markets",
      shortDescription:
        "Learn moving averages, RSI, and MACD calibrated for Indian market conditions and NSE/BSE stock analysis.",
      duration: "55 mins",
      readingTime: "11 mins read",
      contentMarkdown: `### Technical Indicators on Indian Stocks

Technical indicators help Indian investors identify trends, momentum, and overbought/oversold conditions on NSE/BSE stocks.

> **Mental model:** Indicators are like dashboard gauges in your car — they tell you how fast you're going and whether the engine is overheating, but they don't tell you where to drive.

---

### Moving Averages for Indian Stocks

| Period | Name | Use Case on Indian Stocks |
|---|---|---|
| **9/20 EMA** | Short-term | Intraday/swing trading |
| **50 SMA** | Medium-term | Trend confirmation for Nifty 50 stocks |
| **200 SMA** | Long-term | Bull/bear market filter for Nifty |

#### Moving Average Crossover Strategy (Indian Context)

| Signal | Description | Action on Nifty/Stocks |
|---|---|---|
| **Golden Cross** | 50 MA crosses above 200 MA | Bullish — consider buying |
| **Death Cross** | 50 MA crosses below 200 MA | Bearish — consider reducing |

> **Key insight:** The 200-day SMA on Nifty 50 has been a reliable bull/bear filter. When Nifty trades above 200 SMA, it's a bull market; below = bear market.

---

### RSI (Relative Strength Index) for Indian Stocks

| RSI Value | Condition | Action on Indian Stocks |
|---|---|---|
| **Above 80** | Extremely overbought | Strong sell signal |
| **70-80** | Overbought | Consider booking profits |
| **50-70** | Bullish momentum | Hold or look for buy opportunities |
| **30-50** | Bearish momentum | Be cautious, wait for confirmation |
| **20-30** | Oversold | Consider buying at support |
| **Below 20** | Extremely oversold | Strong buy signal (contrarian) |

> **Key insight:** Indian markets tend to be more volatile than US markets. RSI above 80 on Nifty is more common than on S&P 500 — adjust your thresholds accordingly.

---

### MACD for Indian Stocks

| Signal | Description | Action |
|---|---|---|
| **Bullish Crossover** | MACD crosses above Signal | Buy signal |
| **Bearish Crossover** | MACD crosses below Signal | Sell signal |
| **Zero Line Cross** | MACD crosses above/below 0 | Trend change |
| **Histogram Growing** | Bars getting larger | Momentum increasing |

---

### Combining Indicators — The Power of Confluence

| Confluence Setup | Indicators | Signal Strength |
|---|---|---|
| Trend + Momentum | 50 MA up + RSI > 50 | Strong buy |
| Support + Oversold | Price at support + RSI < 30 | High-probability buy |
| Resistance + Overbought | Price at resistance + RSI > 70 | High-probability sell |

---

### Indian Market-Specific Indicator Tips

| Indicator | Indian Market Behavior | Adjustment |
|---|---|---|
| **RSI** | Indian markets more volatile | Use 80/20 instead of 70/30 |
| **Moving Averages** | Works well on Nifty 50, less on small-caps | Use only on liquid stocks |
| **MACD** | Good for trend confirmation | Use on daily/weekly charts |

---

### Key Takeaways

- Moving averages smooth price data and identify trend direction on Indian stocks.
- RSI measures momentum — use 80/20 thresholds for Indian market volatility.
- MACD shows trend changes through crossovers and histogram analysis.
- Combine multiple indicators for stronger signals (confluence).

**Next up:** Volume analysis and trade execution strategies for Indian markets.`,
      codeLanguage: "text",
      codeSnippet: `Indian Market Technical Indicators — Reference Guide

MOVING AVERAGE SETTINGS (INDIAN STOCKS)

SMA (Simple Moving Average):
- Short-term: 10, 20 periods
- Medium-term: 50, 100 periods
- Long-term: 200 periods (most important)

EMA (Exponential Moving Average):
- Short-term: 9, 12 periods
- Medium-term: 26 periods
- Signal line: 9 period EMA of MACD

RSI FOR INDIAN MARKETS (ADJUSTED)
RSI = 100 - (100 / (1 + RS))
RS = Avg Gain / Avg Loss (14-period)

Indian Market Calibration:
- RSI > 80 → Extremely Overbought (sell zone)
- RSI < 20 → Extremely Oversold (buy zone)
- RSI = 50 → Neutral

Note: Indian markets are more volatile than US,
so use wider thresholds (80/20 vs 70/30).

MACD FORMULA
MACD Line = 12 EMA - 26 EMA
Signal Line = 9 EMA of MACD Line
Histogram = MACD Line - Signal Line

INDICATOR COMBO GUIDE FOR INDIAN STOCKS
Trend + Momentum        | Signal
------------------------|-----------
50 MA up + RSI > 50     | Strong Buy
50 MA down + RSI < 50   | Strong Sell
Price at Support + RSI < 30 | Buy
Price at Resistance + RSI > 70 | Sell

NIFTY 50 INDICATOR DASHBOARD
Current Nifty Level: _____
50-day SMA: _____ (above/below?)
200-day SMA: _____ (above/below?)
RSI (14-day): _____ (overbought/oversold?)
MACD: _____ (bullish/bearish crossover?)
Volume: _____ (above/below average?)`,
      codeOutput: `Indian Market Technical Indicators — Reference Guide

MOVING AVERAGE SETTINGS (INDIAN STOCKS)

SMA (Simple Moving Average):
- Short-term: 10, 20 periods
- Medium-term: 50, 100 periods
- Long-term: 200 periods (most important)

EMA (Exponential Moving Average):
- Short-term: 9, 12 periods
- Medium-term: 26 periods
- Signal line: 9 period EMA of MACD

RSI FOR INDIAN MARKETS (ADJUSTED)
RSI = 100 - (100 / (1 + RS))
RS = Avg Gain / Avg Loss (14-period)

Indian Market Calibration:
- RSI > 80 → Extremely Overbought (sell zone)
- RSI < 20 → Extremely Oversold (buy zone)
- RSI = 50 → Neutral

Note: Indian markets are more volatile than US,
so use wider thresholds (80/20 vs 70/30).

MACD FORMULA
MACD Line = 12 EMA - 26 EMA
Signal Line = 9 EMA of MACD Line
Histogram = MACD Line - Signal Line

INDICATOR COMBO GUIDE FOR INDIAN STOCKS
Trend + Momentum        | Signal
------------------------|-----------
50 MA up + RSI > 50     | Strong Buy
50 MA down + RSI < 50   | Strong Sell
Price at Support + RSI < 30 | Buy
Price at Resistance + RSI > 70 | Sell

NIFTY 50 INDICATOR DASHBOARD
Current Nifty Level: _____
50-day SMA: _____ (above/below?)
200-day SMA: _____ (above/below?)
RSI (14-day): _____ (overbought/oversold?)
MACD: _____ (bullish/bearish crossover?)
Volume: _____ (above/below average?)`,
      visualizationTips: [
        "Overlay 50-day and 200-day MA on Nifty 50 chart and watch for crossovers.",
        "Mark overbought (>80) and oversold (<20) zones on RSI indicator.",
        "Watch the MACD histogram grow and shrink on Reliance or TCS charts."
      ],
      tipsAndTricks: [
        "Use 80/20 RSI thresholds for Indian markets (more volatile than US).",
        "200-day MA on Nifty is the most important indicator for long-term investors.",
        "RSI divergences on Nifty 50 signal major turning points — be patient.",
        "Check delivery volume on NSE to confirm if moves are genuine."
      ],
      practice: [
        {
          id: "practice-ma-analysis",
          title: "Indian Stock Moving Average Analysis",
          difficulty: "Medium",
          task: "For Reliance Industries (NSE), identify: (1) Is price above or below the 50-day MA? (2) Is the 50-day MA above or below the 200-day MA? (3) What does this tell you about the trend?",
          hint: "Use TradingView or Zerodha Kite to view moving averages on Reliance daily chart.",
          solution: `Reliance Industries MA Analysis (hypothetical):

1. Current Price (₹2,650) is ABOVE 50-day MA (₹2,580) → Short-term bullish
2. 50-day MA (₹2,580) is ABOVE 200-day MA (₹2,400) → Long-term bullish
3. Conclusion: Strong uptrend confirmed. Golden Cross in effect.

Trading Strategy:
- Any pullback to ₹2,500-2,550 zone (near 50-day MA) is a buying opportunity
- Stop loss below ₹2,400 (200-day MA) for long-term positions
- Target: ₹2,800-3,000 (based on trend projection)

This is a healthy uptrend — higher highs, higher lows, MAs aligned bullish.`
        },
        {
          id: "practice-rsi-reading",
          title: "Indian Stock RSI Interpretation",
          difficulty: "Easy",
          task: "Check the current RSI (14-day) for 3 Indian stocks: TCS, HDFC Bank, and ITC. Classify each as overbought, oversold, or neutral based on Indian market thresholds (80/20).",
          hint: "RSI > 80 = overbought, RSI < 20 = oversold (use Indian-adjusted thresholds)",
          solution: `Indian Stock RSI Analysis (hypothetical):

1. TCS RSI = 72 → Slightly Overbought (using Indian 80 threshold)
   Action: Hold if owned, wait for pullback to RSI 50-60 for fresh entry

2. HDFC Bank RSI = 55 → Neutral/Bullish momentum
   Action: Good accumulation zone. Can buy at current levels.

3. ITC RSI = 38 → Neutral (approaching oversold)
   Action: Watch for RSI to drop below 30 for better entry. Support near ₹420.

Indian Market Note: Use 80/20 thresholds instead of 70/30 because Indian stocks are more volatile. A stock at RSI 72 on TCS is not as overbought as it would be on a US stock.`
        }
      ]
    },
    {
      id: "volume-analysis-indian",
      title: "Lesson 3: Volume Analysis & Indian Market Patterns",
      shortDescription:
        "Use delivery volume, OBV, and accumulation/distribution to confirm trends on NSE stocks and identify institutional activity.",
      duration: "50 mins",
      readingTime: "10 mins read",
      contentMarkdown: `### Why Volume Matters in Indian Markets

Volume is the number of shares traded during a given period. In Indian markets, you can check both **total volume** and **delivery volume** on NSE — delivery volume tells you if the move is genuine or just intraday noise.

> **Mental model:** Price is what you pay; volume is what you get. High delivery volume means conviction; low delivery means uncertainty.

---

### Total Volume vs. Delivery Volume (India-Specific)

| Metric | What It Shows | Where to Check |
|---|---|---|
| **Total Volume** | All shares traded (intraday + delivery) | NSE website, Zerodha |
| **Delivery Volume** | Shares actually delivered to demat | NSE website |
| **Delivery %** | Delivery / Total Volume × 100 | NSE market data |

#### Delivery Volume Interpretation

| Delivery % | Interpretation | What It Means |
|---|---|---|
| **Above 60%** | Strong conviction | Genuine buying/selling |
| **40-60%** | Normal | Mixed signals |
| **Below 40%** | Weak conviction | Mostly intraday, not genuine |

> **Key insight:** In India, check delivery volume on NSE — if a stock rises 5% with 70% delivery, it's genuine institutional buying. If it rises 5% with only 30% delivery, it's mostly intraday speculation.

---

### Institutional Activity on Indian Markets

#### How to Track FII and DII Activity

| Investor Type | What to Check | Where |
|---|---|---|
| **FII** (Foreign Institutional Investors) | Daily buy/sell data | NSE website, Moneycontrol |
| **DII** (Domestic Institutional Investors) | Daily buy/sell data | NSE website, Trendlyne |
| **Mutual Funds** | Weekly/monthly buying | AMFI data, Value Research |
| **Promoters** | Insider buying/selling | BSE insider trading disclosures |

#### FII/DII Activity Signals

| Activity | Signal | What It Means |
|---|---|---|
| **FII buying + DII buying** | Very bullish | Both domestic and foreign money flowing in |
| **FII selling + DII buying** | Neutral-bullish | DIIs providing support |
| **FII selling + DII selling** | Bearish | Broad institutional selling |

> **Key insight:** FII flows are a major driver of Indian market direction. When FIIs buy heavily (₹5,000+ crore in a month), Nifty tends to rally.

---

### Common Volume Analysis Mistakes in India

- **Mistake:** Ignoring delivery volume — **Fix:** Always check delivery % on NSE.
- **Mistake:** Not tracking FII/DII flows — **Fix:** Check daily FII/DII data on NSE website.
- **Mistake:** Trusting volume in illiquid stocks — **Fix:** Volume analysis works best on NSE large/mid-cap stocks.

### Professional Tips & Tricks

- Delivery volume above 60% on NSE = genuine institutional activity.
- Track FII flows weekly — they drive Nifty direction in the short term.
- Volume precedes price — unusual volume often signals upcoming moves in Indian stocks.

---

### Key Takeaways

- Volume confirms trends — price moves without volume are unreliable.
- Delivery volume on NSE separates genuine moves from intraday noise.
- FII and DII activity drives Indian market direction.
- Always check delivery % before trusting a price move in Indian stocks.

**Next up:** Portfolio management and long-term investment strategy for Indian investors.`,
      codeLanguage: "text",
      codeSnippet: `Indian Market Volume Analysis — Reference Guide

NSE VOLUME & DELIVERY GUIDE

How to Check Delivery Volume on NSE:
1. Go to nseindia.com
2. Click "Live Market" → "Equity"
3. Search for stock
4. Check "Deliv Qty" and "Deliv %" columns

VOLUME INTERPRETATION (INDIAN CONTEXT)
Delivery %  | Signal           | Action
------------|------------------|------------------
> 60%       | Strong conviction| Genuine move, trust it
40-60%      | Normal           | Mixed signals
< 40%       | Weak (intraday)  | Don't trust the move

FII/DII ACTIVITY DASHBOARD
Daily FII Activity: ₹_____ crore (Buy/Sell)
Daily DII Activity: ₹_____ crore (Buy/Sell)
Monthly FII Net: ₹_____ crore
Monthly DII Net: ₹_____ crore

Signal:
- Both buying = Very Bullish
- FII selling, DII buying = Support
- Both selling = Bearish

INDIAN MARKET VOLUME PATTERNS
Pattern                | Volume    | Reliability
-----------------------|-----------|------------
Nifty breakout >22K    | High      | ★★★★★
Small-cap low vol rally| Low       | ★★☆☆☆
FII buying + high vol  | Very High | ★★★★★
Block deal (>₹10 Cr)   | Very High | ★★★★☆

BLOCK DEAL TRACKING
Check NSE block deals daily:
- Block deals > ₹10 crore
- Insider trading disclosures on BSE
- Bulk deals > ₹5 crore`,
      codeOutput: `Indian Market Volume Analysis — Reference Guide

NSE VOLUME & DELIVERY GUIDE

How to Check Delivery Volume on NSE:
1. Go to nseindia.com
2. Click "Live Market" → "Equity"
3. Search for stock
4. Check "Deliv Qty" and "Deliv %" columns

VOLUME INTERPRETATION (INDIAN CONTEXT)
Delivery %  | Signal           | Action
------------|------------------|------------------
> 60%       | Strong conviction| Genuine move, trust it
40-60%      | Normal           | Mixed signals
< 40%       | Weak (intraday)  | Don't trust the move

FII/DII ACTIVITY DASHBOARD
Daily FII Activity: ₹_____ crore (Buy/Sell)
Daily DII Activity: ₹_____ crore (Buy/Sell)
Monthly FII Net: ₹_____ crore
Monthly DII Net: ₹_____ crore

Signal:
- Both buying = Very Bullish
- FII selling, DII buying = Support
- Both selling = Bearish

INDIAN MARKET VOLUME PATTERNS
Pattern                | Volume    | Reliability
-----------------------|-----------|------------
Nifty breakout >22K    | High      | ★★★★★
Small-cap low vol rally| Low       | ★★☆☆☆
FII buying + high vol  | Very High | ★★★★★
Block deal (>₹10 Cr)   | Very High | ★★★★☆

BLOCK DEAL TRACKING
Check NSE block deals daily:
- Block deals > ₹10 crore
- Insider trading disclosures on BSE
- Bulk deals > ₹5 crore`,
      visualizationTips: [
        "Compare volume bars during Nifty rallies vs. pullbacks — rallies on high delivery are healthy.",
        "Track FII/DII daily flows on NSE website for 1 month to see patterns.",
        "Watch for volume spikes on Indian stocks before quarterly results."
      ],
      tipsAndTricks: [
        "Delivery volume > 60% on NSE = genuine institutional activity.",
        "Track FII flows weekly — they drive Nifty direction in the short term.",
        "Block deals on NSE (>₹10 crore) show institutional conviction.",
        "Volume precedes price — unusual volume often signals upcoming moves."
      ],
      practice: [
        {
          id: "practice-volume-analysis",
          title: "Indian Stock Volume Analysis",
          difficulty: "Medium",
          task: "Check the NSE website for FII and DII activity over the past week. What was the net buying/selling by FIIs? How did Nifty move during that period? What does this tell you?",
          hint: "Go to nseindia.com → Live Market → FII/DII Activity. Compare with Nifty movement.",
          solution: `FII/DII Analysis (hypothetical week):

Monday: FII sold ₹2,500 Cr, DII bought ₹1,800 Cr → Nifty down 0.5%
Tuesday: FII sold ₹1,200 Cr, DII bought ₹900 Cr → Nifty down 0.3%
Wednesday: FII bought ₹800 Cr, DII sold ₹200 Cr → Nifty up 0.4%
Thursday: FII bought ₹1,500 Cr, DII sold ₹500 Cr → Nifty up 0.8%
Friday: FII bought ₹2,200 Cr, DII sold ₹800 Cr → Nifty up 1.0%

Weekly Total:
FII Net: +₹1,600 Cr (net buyers)
DII Net: +₹1,200 Cr (net buyers)
Nifty: +1.4%

Analysis: Both FIIs and DIIs were net buyers this week, which is a bullish signal. The shift from FII selling (Mon-Tue) to buying (Wed-Fri) suggests changing sentiment.

Key Lesson: FII flows are a leading indicator for Nifty. When FIIs shift from selling to buying, it often signals a short-term bottom.`
        },
        {
          id: "practice-delivery-analysis",
          title: "Delivery Volume Analysis",
          difficulty: "Easy",
          task: "Pick an Indian stock that recently had a big price move (up or down). Check its delivery volume on NSE. Was delivery above 50%? Did volume confirm the move?",
          hint: "Check NSE website for delivery data. Compare delivery % to 20-day average.",
          solution: `Delivery Volume Analysis (hypothetical example):

Stock: Reliance Industries
Event: Results day — stock rose 4% in one day

Volume Analysis:
- Total Volume: 2.5 crore shares (vs 20-day avg: 80 lakh)
- Delivery Volume: 1.8 crore shares (72% delivery)
- Previous day delivery avg: 55%

Analysis:
1. Volume was 3x normal — strong institutional interest
2. Delivery 72% — well above 50% threshold = genuine buying
3. Both FIIs and DIIs were buyers (confirmed from FII/DII data)

Conclusion: HIGH CONVICTION MOVE
- This was not intraday speculation
- Institutional investors were accumulating
- The move is likely sustainable
- Pullback to ₹2,500-2,600 would be a buying opportunity

Key Lesson: When a stock rises on high volume AND high delivery %, it signals genuine institutional conviction.`
        }
      ]
    }
  ],
};
