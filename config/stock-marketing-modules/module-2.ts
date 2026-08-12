import type { Module } from "../courses";

export const MODULE_2: Module = {
  id: "module-2-technical-analysis",
  title: "Module 2: Technical Analysis — Reading Charts & Indicators",
  description:
    "Master chart patterns, technical indicators, and volume analysis to time your entries and exits with confidence.",
  lessons: [
    {
      id: "chart-basics",
      title: "Lesson 1: Chart Types & Price Action Fundamentals",
      shortDescription:
        "Understand candlestick charts, support/resistance levels, and how to read price action like a professional trader.",
      duration: "50 mins",
      readingTime: "10 mins read",
      contentMarkdown: `### What is Technical Analysis?

Technical analysis is the study of price movements and trading volume to forecast future price direction. Unlike fundamental analysis (which evaluates a company's intrinsic value), technical analysis focuses on **what the market is doing**, not **what the company is worth**.

> **Mental model:** Think of technical analysis as reading the market's body language — price action, volume, and patterns tell you whether buyers or sellers are in control.

#### The Three Pillars of Technical Analysis

| Pillar | What It Studies | Key Insight |
|---|---|---|
| **Price Action** | How price moves over time | Price discounts everything |
| **Volume** | How much trading activity occurs | Volume confirms trends |
| **Time** | How long patterns take to form | Timing matters for entries/exits |

---

### Chart Types — Choosing Your Window

#### 1. Line Charts

The simplest chart type — connects closing prices with a continuous line.

| Pros | Cons |
|---|---|
| Easy to read | Hides intraday volatility |
| Shows overall trend clearly | No open/high/low data |
| Good for beginners | Less detail for trading decisions |

#### 2. Bar Charts (OHLC)

Each bar shows four prices: Open, High, Low, Close.

| Component | Position |
|---|---|
| **Open** | Horizontal tick on the left |
| **High** | Top of the vertical line |
| **Low** | Bottom of the vertical line |
| **Close** | Horizontal tick on the right |

#### 3. Candlestick Charts (Most Popular)

Japanese candlesticks show the same OHLC data but with a visual "body" that makes patterns easier to spot.

| Candle Color | Meaning | Visual |
|---|---|---|
| **Green/White** | Close > Open (bullish) | Filled body |
| **Red/Black** | Close < Open (bearish) | Hollow/filled body |

**Candlestick Anatomy:**
- **Body**: Range between open and close
- **Upper Wick/Shadow**: High to the higher of open/close
- **Lower Wick/Shadow**: Low to the lower of open/single

---

### Key Candlestick Patterns

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
| **Three White Soldiers** | Three consecutive bullish candles | Strong uptrend |

---

### Support and Resistance

**Support** is a price level where buying interest is strong enough to prevent further decline. **Resistance** is where selling interest prevents further advance.

#### How to Identify Support & Resistance

1. **Look for price bounces** — levels where price has reversed multiple times
2. **Round numbers** — $50, $100, $200 often act as psychological levels
3. **Previous highs/lows** — historical turning points
4. **Moving averages** — dynamic support/resistance (covered later)

> **Key insight:** Support becomes resistance once broken, and vice versa — this is called the "polarity principle."

#### The Role of Volume at Key Levels

| Volume at Level | What It Means |
|---|---|
| High volume bounce | Strong support/resistance |
| Low volume bounce | Weak level, likely to break |
| High volume breakout | Confirmed breakout |
| Low volume breakout | Likely false breakout |

---

### Trend Lines and Channels

#### Drawing Trend Lines

- **Uptrend line**: Connect at least two higher lows with a straight line
- **Downtrend line**: Connect at least two lower highs with a straight line
- **More touches** = stronger trend line

#### Trend Channels

A channel is formed by drawing a parallel line to the trend line:

| Channel Type | How to Draw | Trading Strategy |
|---|---|---|
| **Ascending** | Parallel line above trend line | Buy at support, sell at resistance |
| **Descending** | Parallel line below trend line | Short at resistance, cover at support |
| **Horizontal** | Both lines flat | Trade the range |

---

### Common Mistakes to Avoid

- **Mistake:** Drawing too many lines — **Fix:** Focus on the most obvious levels; less is more.
- **Mistake:** Ignoring the timeframe — **Fix:** Support/resistance on daily charts are more significant than on 5-minute charts.
- **Mistake:** Treating levels as exact prices — **Fix:** Think of them as zones, not precise numbers.
- **Mistake:** Forcing patterns where none exist — **Fix:** Let the pattern come to you; don't chase it.

### Professional Tips & Tricks

- Start with daily charts for the big picture, then zoom in for entries.
- Use at least 2-3 touches to confirm a trend line.
- Round numbers ($50, $100) are powerful psychological levels.
- Always check multiple timeframes before making a decision.

---

### Key Takeaways

- Technical analysis studies price, volume, and time to forecast direction.
- Candlestick charts are the most popular and informative chart type.
- Support and resistance are zones where supply and demand shift.
- Trend lines and channels help you identify the market's direction.
- Always use multiple indicators and timeframes for confirmation.

**Next up:** Technical indicators — moving averages, RSI, and MACD.`,
      codeLanguage: "text",
      codeSnippet: `# Technical Analysis Fundamentals

## Candlestick Anatomy

Bullish Candle (Green):
        ┃  ← Upper Wick (High)
    ┏━━━━━━┓
    ┃ BODY ┃  ← Close is ABOVE Open
    ┗━━━━━━┛
        ┃  ← Lower Wick (Low)

Bearish Candle (Red):
        ┃  ← Upper Wick (High)
    ┏━━━━━━┓
    ┃ BODY ┃  ← Close is BELOW Open
    ┗━━━━━━┛
        ┃  ← Lower Wick (Low)

## Support & Resistance Zones

Price ($)
  │
120 ──────────── Resistance ───────────
  │                    ╲
100 ──────────── Support ──────────────
  │                         ╱
 80 ──────────── Support ──────────────
  │
  └────────────────────────────────────── Time

## Key Pattern Cheat Sheet

| Pattern | Signal | Strength |
|---------|--------|----------|
| Hammer | Bullish Reversal | ★★★☆☆ |
| Engulfing | Strong Reversal | ★★★★☆ |
| Doji | Indecision | ★★☆☆☆ |
| Morning Star | Buy Signal | ★★★★☆ |`,
      codeOutput: `Technical Analysis Fundamentals

## Candlestick Anatomy

Bullish Candle (Green):
        ┃  ← Upper Wick (High)
    ┏━━━━━━┓
    ┃ BODY ┃  ← Close is ABOVE Open
    ┗━━━━━━┛
        ┃  ← Lower Wick (Low)

Bearish Candle (Red):
        ┃  ← Upper Wick (High)
    ┏━━━━━━┓
    ┃ BODY ┃  ← Close is BELOW Open
    ┗━━━━━━┛
        ┃  ← Lower Wick (Low)

## Support & Resistance Zones

Price ($)
  │
120 ──────────── Resistance ───────────
  │                    ╲
100 ──────────── Support ──────────────
  │                         ╱
 80 ──────────── Support ──────────────
  │
  └────────────────────────────────────── Time

## Key Pattern Cheat Sheet

| Pattern | Signal | Strength |
|---------|--------|----------|
| Hammer | Bullish Reversal | ★★★☆☆ |
| Engulfing | Strong Reversal | ★★★★☆ |
| Doji | Indecision | ★★☆☆☆ |
| Morning Star | Buy Signal | ★★★★☆ |`,
      visualizationTips: [
        "Draw your own candlestick on paper — label the body, wicks, open, high, low, and close.",
        "Open a chart on TradingView and identify at least 3 support/resistance levels.",
        "Practice spotting hammer and shooting star patterns on historical data.",
      ],
      tipsAndTricks: [
        "Never rely on a single candlestick pattern — wait for confirmation from the next candle.",
        "Support and resistance are zones, not exact lines — allow some wiggle room.",
        "Higher timeframe levels (daily, weekly) are more significant than lower ones.",
      ],
      practice: [
        {
          id: "practice-chart-reading",
          title: "Chart Reading Exercise",
          difficulty: "Easy",
          task: "Open TradingView (free) and find 3 different stocks. For each, identify the current trend (up, down, or sideways) and draw a trend line connecting at least 2 points.",
          hint: "Use the drawing tools on TradingView. Start with daily charts for clearer patterns.",
          solution: `Example Analysis (AAPL):
1. Trend: Uptrend (higher highs, higher lows)
2. Support: ~$170 (recent bounce level)
3. Resistance: ~$195 (recent high)
4. Trend line: Connect $155 and $165 lows

Example Analysis (TSLA):
1. Trend: Sideways/Consolidation
2. Support: ~$180
3. Resistance: ~$250
4. Pattern: Triangle forming, breakout expected`,
        },
        {
          id: "practice-candlestick-spotting",
          title: "Candlestick Pattern Recognition",
          difficulty: "Medium",
          task: "Look at the last 30 days of any stock's daily chart. Find and label: 1 Doji, 1 Hammer, and 1 Engulfing pattern. Note the date and what happened to price afterward.",
          hint: "Zoom in on the daily chart. Dojis have very small bodies; hammers have long lower wicks.",
          solution: `Example findings for MSFT (hypothetical):
1. Doji - Jan 15: Small body, price closed near open. Next day: slight pullback
2. Hammer - Jan 22: Long lower wick at support ($380). Next 3 days: +4% rally
3. Bullish Engulfing - Feb 3: Green candle engulfed previous red candle. Next week: continued uptrend`,
        },
      ],
    },
    {
      id: "technical-indicators",
      title: "Lesson 2: Technical Indicators — Moving Averages, RSI & MACD",
      shortDescription:
        "Learn the most widely-used technical indicators to identify trends, momentum, and overbought/oversold conditions.",
      duration: "55 mins",
      readingTime: "11 mins read",
      contentMarkdown: `### What Are Technical Indicators?

Technical indicators are mathematical calculations based on price, volume, or open interest. They help traders identify trends, momentum, volatility, and potential reversal points.

> **Mental model:** Indicators are like dashboard gauges in a car — they don't tell you where to drive, but they tell you how fast you're going, how much fuel you have, and whether the engine is overheating.

#### Types of Indicators

| Category | Purpose | Examples |
|---|---|---|
| **Trend** | Identify direction | Moving Averages, ADX |
| **Momentum** | Measure speed of change | RSI, MACD, Stochastic |
| **Volatility** | Measure price fluctuation | Bollinger Bands, ATR |
| **Volume** | Confirm trends with volume | OBV, Volume Profile |

---

### Moving Averages — The Foundation

A **Moving Average (MA)** smooths out price data by creating a constantly updated average price over a specific period.

#### Types of Moving Averages

| Type | Calculation | Characteristics |
|---|---|---|
| **SMA** (Simple) | Equal weight to all periods | Smooth, slower to react |
| **EMA** (Exponential) | More weight to recent prices | Responsive, faster signals |

#### Common Moving Average Periods

| Period | Name | Use Case |
|---|---|---|
| **9/10 EMA** | Short-term | Scalping, day trading |
| **20 EMA** | Short-term | Swing trading, dynamic support |
| **50 SMA** | Medium-term | Trend confirmation |
| **100 SMA** | Medium-term | Major trend direction |
| **200 SMA** | Long-term | Bull/bear market filter |

#### Moving Average Crossover Strategy

| Signal | Description | Action |
|---|---|---|
| **Golden Cross** | 50 MA crosses above 200 MA | Bullish — consider buying |
| **Death Cross** | 50 MA crosses below 200 MA | Bearish — consider selling |

> **Key insight:** Moving averages are lagging indicators — they confirm trends but don't predict them. Use them with other tools, not in isolation.

---

### RSI (Relative Strength Index)

RSI measures the speed and magnitude of recent price changes to identify overbought or oversold conditions.

#### RSI Formula Concept

RSI = 100 - (100 / (1 + RS))

Where RS = Average Gain / Average Loss over the period (typically 14 days)

#### RSI Interpretation

| RSI Value | Condition | Potential Action |
|---|---|---|
| **Above 70** | Overbought | Consider selling or waiting for pullback |
| **50-70** | Bullish momentum | Hold or look for buy opportunities |
| **30-50** | Bearish momentum | Be cautious, wait for confirmation |
| **Below 30** | Oversold | Consider buying or watching for reversal |

#### RSI Divergence (Advanced Signal)

| Divergence Type | Price Action | RSI Action | Signal |
|---|---|---|---|
| **Bullish Divergence** | Price makes lower low | RSI makes higher low | Potential reversal up |
| **Bearish Divergence** | Price makes higher high | RSI makes lower high | Potential reversal down |

---

### MACD (Moving Average Convergence Divergence)

MACD shows the relationship between two moving averages of a stock's price.

#### MACD Components

| Component | Description | Typical Settings |
|---|---|---|
| **MACD Line** | 12 EMA - 26 EMA | Fast line |
| **Signal Line** | 9 EMA of MACD Line | Slow line |
| **Histogram** | MACD Line - Signal Line | Shows momentum |

#### MACD Signals

| Signal | Description | Meaning |
|---|---|---|
| **Bullish Crossover** | MACD crosses above Signal | Buy signal |
| **Bearish Crossover** | MACD crosses below Signal | Sell signal |
| **Zero Line Cross** | MACD crosses above/below 0 | Trend change |
| **Histogram Growing** | Bars getting larger | Momentum increasing |
| **Histogram Shrinking** | Bars getting smaller | Momentum fading |

---

### Combining Indicators — The Power of Confluence

The best trading signals come when multiple indicators agree:

| Confluence Setup | Indicators | Signal Strength |
|---|---|---|
| Trend + Momentum | 50 MA up + RSI > 50 | Strong buy |
| Support + Oversold | Price at support + RSI < 30 | High-probability buy |
| Resistance + Overbought | Price at resistance + RSI > 70 | High-probability sell |
| Crossover + Volume | MA crossover + high volume | Confirmed signal |

> **Mental model:** Think of confluence as a jury — one indicator alone might be wrong, but when multiple indicators agree, the verdict is much more reliable.

---

### Common Mistakes to Avoid

- **Mistake:** Using too many indicators — **Fix:** Stick to 2-3 that complement each other.
- **Mistake:** Using lagging indicators for prediction — **Fix:** Use them for confirmation, not prediction.
- **Mistake:** Ignoring the trend — **Fix:** Always know the bigger picture before trading indicators.
- **Mistake:** Over-optimizing indicator settings — **Fix:** Default settings work well for most situations.

### Professional Tips & Tricks

- RSI works best in ranging markets; MACD works best in trending markets.
- Moving averages are dynamic support/resistance — watch for bounces.
- Divergences are early warning signals but require patience to play out.
- Always check the daily chart before trading on shorter timeframes.

---

### Key Takeaways

- Moving averages smooth price data and identify trend direction.
- RSI measures momentum and identifies overbought/oversold conditions.
- MACD shows trend changes through line crossovers and histogram analysis.
- Combine multiple indicators for stronger signals (confluence).
- No single indicator is perfect — use them as part of a complete system.

**Next up:** Volume analysis and trade entry/exit strategies.`,
      codeLanguage: "text",
      codeSnippet: `# Technical Indicators Cheat Sheet

## Moving Average Settings

SMA (Simple Moving Average):
- Short-term: 10, 20 periods
- Medium-term: 50, 100 periods
- Long-term: 200 periods

EMA (Exponential Moving Average):
- Short-term: 9, 12 periods
- Medium-term: 26 periods
- Signal line: 9 period EMA of MACD

## RSI Calculation (14-period)

RSI = 100 - (100 / (1 + RS))
RS = Avg Gain / Avg Loss

Interpretation:
- RSI > 70 → Overbought (sell zone)
- RSI < 30 → Oversold (buy zone)
- RSI = 50 → Neutral

## MACD Formula

MACD Line = 12 EMA - 26 EMA
Signal Line = 9 EMA of MACD Line
Histogram = MACD Line - Signal Line

Signals:
- MACD crosses above Signal → BUY
- MACD crosses below Signal → SELL
- MACD crosses above 0 → Bullish trend
- MACD crosses below 0 → Bearish trend

## Indicator Combo Guide

| Trend + Momentum | Signal |
|------------------|--------|
| 50 MA up + RSI > 50 | Strong Buy |
| 50 MA down + RSI < 50 | Strong Sell |
| Price at Support + RSI < 30 | Buy |
| Price at Resistance + RSI > 70 | Sell |`,
      codeOutput: `Technical Indicators Cheat Sheet

## Moving Average Settings

SMA (Simple Moving Average):
- Short-term: 10, 20 periods
- Medium-term: 50, 100 periods
- Long-term: 200 periods

EMA (Exponential Moving Average):
- Short-term: 9, 12 periods
- Medium-term: 26 periods
- Signal line: 9 period EMA of MACD

## RSI Calculation (14-period)

RSI = 100 - (100 / (1 + RS))
RS = Avg Gain / Avg Loss

Interpretation:
- RSI > 70 → Overbought (sell zone)
- RSI < 30 → Oversold (buy zone)
- RSI = 50 → Neutral

## MACD Formula

MACD Line = 12 EMA - 26 EMA
Signal Line = 9 EMA of MACD Line
Histogram = MACD Line - Signal Line

Signals:
- MACD crosses above Signal → BUY
- MACD crosses below Signal → SELL
- MACD crosses above 0 → Bullish trend
- MACD crosses below 0 → Bearish trend

## Indicator Combo Guide

| Trend + Momentum | Signal |
|------------------|--------|
| 50 MA up + RSI > 50 | Strong Buy |
| 50 MA down + RSI < 50 | Strong Sell |
| Price at Support + RSI < 30 | Buy |
| Price at Resistance + RSI > 70 | Sell |`,
      visualizationTips: [
        "Overlay a 50-day and 200-day moving average on a stock chart and watch for crossovers.",
        "Mark overbought (>70) and oversold (<30) zones on the RSI indicator.",
        "Watch the MACD histogram grow and shrink to feel momentum changes.",
      ],
      tipsAndTricks: [
        "RSI works best in ranging markets; MACD works best in trending markets.",
        "Use the 200-day MA as a bull/bear filter — only buy above it, only sell below it.",
        "Divergences take time to play out — be patient and wait for confirmation.",
      ],
      practice: [
        {
          id: "practice-ma-analysis",
          title: "Moving Average Analysis",
          difficulty: "Medium",
          task: "For any stock, identify: (1) Is price above or below the 50-day MA? (2) Is the 50-day MA above or below the 200-day MA? (3) What does this tell you about the trend?",
          hint: "Use TradingView or Yahoo Finance to view moving averages. Above = bullish, Below = bearish.",
          solution: `Example: AAPL (hypothetical)
1. Price ($185) is ABOVE 50-day MA ($178) → Short-term bullish
2. 50-day MA ($178) is ABOVE 200-day MA ($165) → Long-term bullish
3. Conclusion: Strong uptrend confirmed. Golden Cross in effect.

Example: META (hypothetical)
1. Price ($480) is ABOVE 50-day MA ($465) → Short-term bullish
2. 50-day MA ($465) is ABOVE 200-day MA ($420) → Long-term bullish
3. Conclusion: Healthy uptrend with momentum`,
        },
        {
          id: "practice-rsi-reading",
          title: "RSI Interpretation",
          difficulty: "Easy",
          task: "Check the current RSI (14-day) for 3 different stocks. Classify each as overbought, oversold, or neutral. What action would you consider for each?",
          hint: "RSI > 70 = overbought, RSI < 30 = oversold, 30-70 = neutral",
          solution: `Example readings:
1. AAPL RSI = 62 → Neutral/Bullish momentum
   Action: Hold if owned, wait for pullback to buy

2. TSLA RSI = 78 → Overbought
   Action: Consider taking profits, wait for RSI to cool off

3. NVDA RSI = 45 → Neutral
   Action: Wait for clearer signal, monitor for RSI direction`,
        },
      ],
    },
    {
      id: "volume-analysis",
      title: "Lesson 3: Volume Analysis & Trade Execution",
      shortDescription:
        "Use volume to confirm trends, identify accumulation/distribution, and execute trades with proper entry and exit strategies.",
      duration: "50 mins",
      readingTime: "10 mins read",
      contentMarkdown: `### Why Volume Matters

Volume is the number of shares or contracts traded during a given period. It's the **fuel** that drives price movement — without volume, price changes are unreliable.

> **Mental model:** Price is what you pay; volume is what you get. High volume means conviction; low volume means uncertainty.

#### Volume基本原则

| Volume Level | Interpretation | What It Means |
|---|---|---|
| **High volume + price up** | Strong buying interest | Bullish confirmation |
| **High volume + price down** | Strong selling pressure | Bearish confirmation |
| **Low volume + price up** | Weak rally | Likely to reverse |
| **Low volume + price down** | Weak selling | Likely to bounce |

---

### Volume Analysis Techniques

#### 1. On-Balance Volume (OBV)

OBV adds volume on up days and subtracts on down days, creating a cumulative indicator.

| OBV Signal | Price Action | Meaning |
|---|---|---|
| OBV rising + Price rising | Confirmation | Trend is strong |
| OBV rising + Price flat/rising | Accumulation | Smart money buying |
| OBV falling + Price flat/falling | Distribution | Smart money selling |
| OBV divergence | Price up, OBV down | Warning — trend may reverse |

#### 2. Volume Profile

Volume Profile shows how much volume occurred at each price level, revealing **where** most trading happened.

| Level Type | Description | Significance |
|---|---|---|
| **POC** (Point of Control) | Price with highest volume | Strongest support/resistance |
| **Value Area** | 70% of volume | "Fair value" zone |
| **Low Volume Nodes** | Price with least volume | Price moves quickly through these |

#### 3. Accumulation/Distribution Line

This indicator measures money flow into and out of a security.

| A/D Line | Price | Interpretation |
|---|---|---|
| Rising | Rising | Healthy uptrend |
| Rising | Falling | Divergence — potential reversal up |
| Falling | Rising | Divergence — potential reversal down |
| Falling | Falling | Healthy downtrend |

---

### Building a Complete Trading System

A trading system combines analysis with rules for entry, exit, and risk management.

#### Entry Rules (Example System)

| Condition | Requirement |
|---|---|
| Trend | Price above 50-day MA |
| Momentum | RSI between 40-70 (not overbought) |
| Confirmation | MACD bullish crossover |
| Volume | Above-average volume on entry day |
| Support | Price near a support level |

#### Exit Rules

| Exit Type | Trigger |
|---|---|
| **Stop Loss** | Price falls 7-8% below entry (or below key support) |
| **Trailing Stop** | Price closes below 20-day MA |
| **Profit Target** | Price reaches resistance or RSI > 70 |
| **Time Stop** | No movement after 2-3 weeks |

---

### Position Sizing — Protecting Your Capital

The amount you invest in each position should be based on your risk tolerance and account size.

#### The 1% Rule

Never risk more than 1% of your total portfolio on a single trade.

| Portfolio Size | Max Risk Per Trade | Position Size (with 7% stop) |
|---|---|---|
| $10,000 | $100 | ~$1,428 |
| $50,000 | $500 | ~$7,142 |
| $100,000 | $1,000 | ~$14,285 |

**Formula:**
Position Size = (Account × Risk%) / (Entry Price - Stop Loss Price)

---

### Trade Journal — Learning from Every Trade

Keep a record of every trade to improve over time:

| Field | Purpose |
|---|---|
| **Date/Time** | When you entered |
| **Stock** | What you traded |
| **Entry Price** | What you paid |
| **Stop Loss** | Your risk level |
| **Target** | Your profit goal |
| **Reason** | Why you took the trade |
| **Result** | P/L and lesson learned |

---

### Common Mistakes to Avoid

- **Mistake:** Ignoring volume on breakouts — **Fix:** Always confirm breakouts with above-average volume.
- **Mistake:** Risking too much per trade — **Fix:** Follow the 1% rule religiously.
- **Mistake:** Having no exit plan — **Fix:** Define stop loss and target BEFORE entering.
- **Mistake:** Averaging down on losers — **Fix:** Cut losses short; let winners run.

### Professional Tips & Tricks

- Volume precedes price — watch for volume spikes before big moves.
- Keep a trading journal; it's the fastest way to improve.
- Risk management is more important than stock selection.
- paper trade (simulate) your system before using real money.

---

### Key Takeaways

- Volume confirms trends — price moves without volume are unreliable.
- OBV and Volume Profile reveal accumulation and distribution patterns.
- A complete trading system includes entry rules, exit rules, and position sizing.
- The 1% rule protects your capital from catastrophic losses.
- Keep a trade journal to continuously improve your performance.

**Next up:** Portfolio management and long-term investment strategy.`,
      codeLanguage: "text",
      codeSnippet: `# Volume & Trade Execution Framework

## Volume Interpretation Guide

| Volume | Price | Signal | Action |
|--------|-------|--------|--------|
| High | ↑ Up | Strong Buy | Confirm entry |
| High | ↓ Down | Strong Sell | Exit/Short |
| Low | ↑ Up | Weak Rally | Wait/Be cautious |
| Low | ↓ Down | Weak Sell | Potential bounce |

## Position Sizing Calculator

Account Size: $_______
Risk Per Trade: 1% = $_______
Entry Price: $_______
Stop Loss: $_______
Risk Per Share: $_______

Position Size = Risk Amount ÷ Risk Per Share
= $_______ ÷ $_______
= _______ shares

## Trade Journal Template

| Field | Your Entry |
|-------|------------|
| Date | __________ |
| Stock | __________ |
| Entry | $_________ |
| Stop | $_________ |
| Target | $_________ |
| Shares | _________ |
| Risk $ | $_________ |
| Reason | __________ |
| Result | __________ |
| Lesson | __________ |

## Complete System Checklist

Before EVERY trade, check:
□ Trend confirmed (50 MA direction)
□ Momentum aligned (RSI 40-70)
□ Volume confirms (above average)
□ Near support/resistance
□ Risk defined (stop loss set)
□ Position sized (≤1% risk)
□ Exit plan ready (target + stop)`,
      codeOutput: `Volume & Trade Execution Framework

## Volume Interpretation Guide

| Volume | Price | Signal | Action |
|--------|-------|--------|--------|
| High | ↑ Up | Strong Buy | Confirm entry |
| High | ↓ Down | Strong Sell | Exit/Short |
| Low | ↑ Up | Weak Rally | Wait/Be cautious |
| Low | ↓ Down | Weak Sell | Potential bounce |

## Position Sizing Calculator

Account Size: $_______
Risk Per Trade: 1% = $_______
Entry Price: $_______
Stop Loss: $_______
Risk Per Share: $_______

Position Size = Risk Amount ÷ Risk Per Share
= $_______ ÷ $_______
= _______ shares

## Trade Journal Template

| Field | Your Entry |
|-------|------------|
| Date | __________ |
| Stock | __________ |
| Entry | $_________ |
| Stop | $_________ |
| Target | $_________ |
| Shares | _________ |
| Risk $ | $_________ |
| Reason | __________ |
| Result | __________ |
| Lesson | __________ |

## Complete System Checklist

Before EVERY trade, check:
□ Trend confirmed (50 MA direction)
□ Momentum aligned (RSI 40-70)
□ Volume confirms (above average)
□ Near support/resistance
□ Risk defined (stop loss set)
□ Position sized (≤1% risk)
□ Exit plan ready (target + stop)`,
      visualizationTips: [
        "Compare volume bars during rallies vs. pullbacks — rallies on high volume are healthy.",
        "Draw horizontal lines at high-volume price levels — they become future support/resistance.",
        "Watch for volume spikes before earnings or major news — they signal institutional activity.",
      ],
      tipsAndTricks: [
        "Volume precedes price — unusual volume often signals upcoming moves.",
        "Paper trade your system for at least 3 months before risking real money.",
        "The best traders lose on 40-50% of trades but make money through position sizing.",
      ],
      practice: [
        {
          id: "practice-volume-analysis",
          title: "Volume Analysis Exercise",
          difficulty: "Medium",
          task: "Pick a stock that recently had a big price move (up or down). Analyze the volume pattern: Was volume above average? Did volume confirm the move? What does this tell you about the move's sustainability?",
          hint: "Look for stocks in the news. Compare volume to the 20-day average volume.",
          solution: `Example: NVDA earnings report
- Price: +12% on earnings day
- Volume: 85M shares (vs 20-day avg of 45M)
- Analysis: Nearly 2x normal volume confirms institutional buying
- Conclusion: Strong conviction behind the move, likely to continue

Example: Stock XYZ breakdown
- Price: -8% on no news
- Volume: 2M shares (vs 20-day avg of 5M)
- Analysis: Below-average volume on sell-off
- Conclusion: Weak conviction, may be a false breakdown`,
        },
        {
          id: "practice-position-sizing",
          title: "Position Sizing Calculator",
          difficulty: "Easy",
          task: "Calculate the proper position size for: $25,000 account, 1% risk, buying at $50 with a stop loss at $46.50. How many shares can you buy?",
          hint: "Position Size = (Account × Risk%) / (Entry - Stop Loss)",
          solution: `Account: $25,000
Risk Amount: $25,000 × 1% = $250
Risk Per Share: $50 - $46.50 = $3.50
Position Size: $250 ÷ $3.50 = 71 shares

Total Position Value: 71 × $50 = $3,550
Portfolio Allocation: $3,550 / $25,000 = 14.2%

This is a properly sized position that limits risk to 1% of portfolio.`,
        },
      ],
    },
  ],
};
