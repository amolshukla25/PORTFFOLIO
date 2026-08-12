import type { Module } from "../courses";

export const MODULE_1: Module = {
  id: "module-1-dm-foundations",
  title: "Module 1: Foundations of Digital Marketing",
  description:
    "Understand the digital marketing landscape, key concepts, and build a strong foundation for your marketing career.",
  lessons: [
    {
      id: "intro-digital-marketing",
      title: "Lesson 1: Introduction to Digital Marketing",
      shortDescription:
        "What is digital marketing, why it matters in 2026, and the evolution from traditional to digital channels.",
      duration: "40 mins",
      readingTime: "8 mins read",
      contentMarkdown: `### What is Digital Marketing?

Digital marketing is the practice of promoting products, services, or brands through digital channels to reach and engage customers. Unlike traditional marketing (TV, radio, print), digital marketing leverages the internet and electronic devices to deliver targeted, measurable, and interactive campaigns.

#### Why Digital Marketing Matters in 2026

- **Global Reach**: Access billions of internet users across the world instantly.
- **Cost-Effective**: Reach more people for less money compared to traditional advertising.
- **Measurable Results**: Track every click, impression, and conversion in real-time.
- **Targeted Advertising**: Deliver personalized messages to specific audience segments.
- **Interactive Engagement**: Two-way communication with your audience through social media, email, and more.

#### The Evolution of Marketing

| Era | Primary Channels | Key Characteristics |
|---|---|---|
| Traditional (Pre-2000) | TV, Radio, Print, Billboards | One-way communication, broad targeting |
| Early Digital (2000-2010) | Websites, Email, Banner Ads | Basic online presence, email newsletters |
| Social Era (2010-2020) | Social Media, Mobile, Content | Two-way engagement, influencer marketing |
| AI-Powered (2020+) | AI, Personalization, Automation | Hyper-personalization, predictive analytics |

> **Mental model:** Think of digital marketing as a conversation with your audience at scale — you're not shouting at them (like a billboard), you're engaging with them where they already spend their time.

#### Key Components of Digital Marketing

1. **Search Engine Optimization (SEO)**: Getting found organically on Google
2. **Content Marketing**: Creating valuable content to attract and retain customers
3. **Social Media Marketing**: Building communities and driving engagement
4. **Pay-Per-Click (PPC)**: Paid advertising on search engines and platforms
5. **Email Marketing**: Direct communication with your audience
6. **Analytics & Data**: Measuring and optimizing everything you do

#### Common Mistakes to Avoid

- **Mistake:** Thinking digital marketing is just posting on social media — **Fix:** It's a strategic, multi-channel approach with clear goals and measurement.
- **Mistake:** Ignoring analytics — **Fix:** Always track your results and optimize based on data.
- **Mistake:** Trying to be everywhere at once — **Fix:** Start with 2-3 channels where your audience actually is.
- **Mistake:** Not having a clear target audience — **Fix:** Create detailed buyer personas before spending a dime.

### Professional Tips & Tricks

- Start by understanding your audience — who are they, where do they hang out online, what problems do they have?
- Digital marketing is a marathon, not a sprint — consistent effort compounds over time.
- Always be testing — A/B test everything from email subject lines to ad copy.
- Stay updated — the digital landscape changes rapidly; follow industry blogs and podcasts.

---

### Key Takeaways

- Digital marketing uses online channels to reach and engage customers.
- It offers measurable, targeted, and cost-effective alternatives to traditional marketing.
- The key components include SEO, content, social media, PPC, email, and analytics.
- Understanding your audience is the foundation of all successful marketing.

**Next up:** Understanding your audience through buyer personas and customer journey mapping.`,
      codeLanguage: "text",
      codeSnippet: `# Digital Marketing Landscape Overview

Key Metrics to Track:
- Website Traffic: How many people visit your site
- Conversion Rate: % of visitors who take desired action
- Cost Per Acquisition (CPA): How much it costs to get a customer
- Return on Ad Spend (ROAS): Revenue generated per dollar spent
- Customer Lifetime Value (CLV): Total revenue from a customer over time

Example Marketing Funnel:
Awareness (SEO, Social) → Interest (Content) → Consideration (Email) → Conversion (PPC) → Loyalty (Retention)`,
      codeOutput: `Digital Marketing Landscape Overview

Key Metrics to Track:
- Website Traffic: How many people visit your site
- Conversion Rate: % of visitors who take desired action
- Cost Per Acquisition (CPA): How much it costs to get a customer
- Return on Ad Spend (ROAS): Revenue generated per dollar spent
- Customer Lifetime Value (CLV): Total revenue from a customer over time

Example Marketing Funnel:
Awareness (SEO, Social) → Interest (Content) → Consideration (Email) → Conversion (PPC) → Loyalty (Retention)`,
      visualizationTips: [
        "Draw the marketing funnel from top (awareness) to bottom (loyalty) — each stage narrows as people move closer to purchase.",
        "Create a mind map with 'Digital Marketing' at the center and all channels branching out.",
        "Compare the traditional vs digital marketing landscape side by side to see the differences.",
      ],
      tipsAndTricks: [
        "Start with 2-3 channels rather than trying to be everywhere at once.",
        "Always have a clear goal before launching any campaign.",
        "Data should drive your decisions — not gut feelings.",
      ],
      practice: [
        {
          id: "practice-dm-audit",
          title: "Digital Marketing Audit",
          difficulty: "Easy",
          task: "Pick a local business and identify 3 digital marketing channels they could use to reach more customers.",
          hint: "Consider their target audience and where those people spend time online.",
          solution: `Example for a local bakery:
1. Instagram - Visual content of baked goods
2. Google My Business - Local SEO for "bakery near me" searches
3. Email Marketing - Weekly specials and loyalty rewards`,
        },
        {
          id: "practice-metrics",
          title: "Metrics Brainstorm",
          difficulty: "Easy",
          task: "For an e-commerce store, list 5 key metrics you would track and explain why each matters.",
          hint: "Think about traffic, conversions, revenue, and customer behavior.",
          solution: `Key metrics for e-commerce:
1. Conversion Rate - Measures how effective your site is at turning visitors into buyers
2. Average Order Value (AOV) - Shows how much customers spend per transaction
3. Cart Abandonment Rate - Identifies friction in the checkout process
4. Customer Acquisition Cost (CAC) - Ensures you're not spending too much to get customers
5. Return on Ad Spend (ROAS) - Measures profitability of advertising campaigns`,
        },
      ],
    },
    {
      id: "buyer-personas",
      title: "Lesson 2: Buyer Personas & Customer Journey Mapping",
      shortDescription:
        "Create detailed buyer personas and map the customer journey from awareness to advocacy.",
      duration: "45 mins",
      readingTime: "9 mins read",
      contentMarkdown: `### Why Buyer Personas Matter

A **buyer persona** is a semi-fictional representation of your ideal customer based on market research and real data. Without personas, your marketing is like throwing darts blindfolded — you might hit something, but you won't know what.

#### The Anatomy of a Buyer Persona

A complete persona includes:

| Component | What to Include | Example |
|---|---|---|
| Demographics | Age, gender, location, income, education | "Sarah, 32, Marketing Manager, $75K, Boston" |
| Goals | What they want to achieve | "Increase team productivity by 30%" |
| Pain Points | Challenges and frustrations | "Wasting time on manual reporting" |
| Preferred Channels | Where they consume content | "LinkedIn, industry blogs, podcasts" |
| Objections | Reasons they might not buy | "Budget constraints, implementation time" |
| Buying Behavior | How they make decisions | "Researches extensively, reads reviews" |

> **Mental model:** Think of buyer personas as character profiles in a novel — the more detailed and real they feel, the better you can write marketing that speaks directly to them.

#### Creating Your First Persona

**Step 1: Research**
- Interview existing customers (aim for 5-10 interviews)
- Survey your email list and social followers
- Analyze website analytics and social media insights
- Study your competitors' audiences

**Step 2: Identify Patterns**
- What do your best customers have in common?
- What problems did they have before finding you?
- What made them choose you over competitors?

**Step 3: Build the Persona**
- Give them a name and a photo (makes them feel real)
- Fill in all the components from the table above
- Create 2-3 personas to cover your main audience segments

---

### The Customer Journey Map

The **customer journey** is the complete experience a customer has with your brand — from first hearing about you to becoming a loyal advocate.

#### The 5 Stages of the Customer Journey

| Stage | Customer Mindset | Marketing Tactics | Metrics |
|---|---|---|---|
| **Awareness** | "I have a problem" | SEO, social media, content | Impressions, reach, traffic |
| **Consideration** | "I'm researching solutions" | Blog posts, webinars, comparisons | Engagement, time on site |
| **Decision** | "I'm ready to buy" | Landing pages, demos, testimonials | Conversion rate, sales |
| **Retention** | "Did I make the right choice?" | Onboarding, support, email | Churn rate, satisfaction |
| **Advocacy** | "I love this, I'll tell others" | Referral programs, reviews | NPS, referrals, reviews |

#### Why Mapping the Journey Matters

- **Right message, right time**: Send awareness content to people who don't know you yet, not to people ready to buy.
- **Identify gaps**: Find where customers drop off and optimize those touchpoints.
- **Align teams**: Marketing, sales, and support all understand what the customer needs at each stage.

> **Key insight:** Most businesses focus only on the Decision stage (conversion), but the real money is in Retention and Advocacy — it costs 5x more to acquire a new customer than to retain an existing one.

#### Common Mistakes to Avoid

- **Mistake:** Creating personas based on assumptions — **Fix:** Always back personas with real data and customer interviews.
- **Mistake:** Having only one persona — **Fix:** Most businesses have 2-3 distinct audience segments.
- **Mistake:** Treating the journey as linear — **Fix:** Customers loop back, skip stages, and take different paths.
- **Mistake:** Ignoring post-purchase experience — **Fix:** Retention and advocacy are where the highest ROI lives.

### Professional Tips & Tricks

- Update personas quarterly — customer needs and behaviors change over time.
- Share personas with everyone in your company, not just the marketing team.
- Use tools like HubSpot's Make My Persona or Xtensio for beautiful, shareable personas.
- Map at least 3 different customer journeys for different personas.

---

### Key Takeaways

- Buyer personas are detailed profiles of your ideal customers.
- They help you create targeted, relevant marketing messages.
- The customer journey has 5 stages: Awareness, Consideration, Decision, Retention, Advocacy.
- Map your journey to identify gaps and deliver the right content at the right time.
- Post-purchase experience is just as important as pre-purchase marketing.

**Next up:** Building your digital marketing strategy and setting SMART goals.`,
      codeLanguage: "text",
      codeSnippet: `# Buyer Persona Template

## Persona: "Marketing Manager Maria"
- Age: 32
- Role: Marketing Manager at SaaS company
- Income: $75,000/year
- Location: Boston, MA
- Education: MBA in Marketing

Goals:
- Increase team productivity by 30%
- Reduce time spent on manual reporting
- Prove marketing ROI to leadership

Pain Points:
- Current tools are siloed and don't integrate
- Reporting takes 8+ hours per week
- Difficulty attributing revenue to specific campaigns

Preferred Channels:
- LinkedIn (daily)
- Marketing podcasts (during commute)
- Industry webinars (monthly)

Buying Behavior:
- Researches extensively before purchasing
- Needs buy-in from finance and IT
- Prefers free trials before committing`,
      codeOutput: `Buyer Persona Template

## Persona: "Marketing Manager Maria"
- Age: 32
- Role: Marketing Manager at SaaS company
- Income: $75,000/year
- Location: Boston, MA
- Education: MBA in Marketing

Goals:
- Increase team productivity by 30%
- Reduce time spent on manual reporting
- Prove marketing ROI to leadership

Pain Points:
- Current tools are siloed and don't integrate
- Reporting takes 8+ hours per week
- Difficulty attributing revenue to specific campaigns

Preferred Channels:
- LinkedIn (daily)
- Marketing podcasts (during commute)
- Industry webinars (monthly)

Buying Behavior:
- Researches extensively before purchasing
- Needs buy-in from finance and IT
- Prefers free trials before committing`,
      visualizationTips: [
        "Draw the customer journey as a winding road with different stops (stages) — not a straight line.",
        "Create a simple Venn diagram showing the overlap between what your customer wants, what you offer, and where they spend time.",
        "Use sticky notes to map touchpoints at each stage — it makes gaps visible.",
      ],
      tipsAndTricks: [
        "Give your personas names and photos — it makes them feel real to your team.",
        "Interview your best customers first — they know why they chose you.",
        "The post-purchase journey is where the real ROI lives — don't neglect it.",
      ],
      practice: [
        {
          id: "practice-create-persona",
          title: "Create Your First Persona",
          difficulty: "Medium",
          task: "Using the template above, create a detailed buyer persona for a B2B software company. Include demographics, goals, pain points, and preferred channels.",
          hint: "Think about who makes the buying decision and who uses the product daily.",
          solution: `Example persona:
## "Tech-Savvy Tom"
- Age: 28
- Role: Software Developer
- Goals: Learn new skills, increase efficiency
- Pain Points: Outdated tools, lack of documentation
- Channels: GitHub, Stack Overflow, Twitter/X
- Buying Behavior: Tries before buying, values developer experience`,
        },
        {
          id: "practice-journey-map",
          title: "Journey Mapping Exercise",
          difficulty: "Medium",
          task: "Map the customer journey for someone buying a new laptop. List what they're thinking, feeling, and doing at each stage.",
          hint: "Consider research sources, comparison criteria, and post-purchase support.",
          solution: `Awareness: "My laptop is slow" → Researches "best laptops 2026"
Consideration: Reads reviews, watches YouTube comparisons
Decision: Compares prices, checks warranty options
Retention: Sets up laptop, contacts support if needed
Advocacy: Recommends to friends, leaves a review`,
        },
      ],
    },
    {
      id: "smart-goals",
      title: "Lesson 3: Setting SMART Marketing Goals",
      shortDescription:
        "Learn how to set Specific, Measurable, Achievable, Relevant, and Time-bound goals for your marketing campaigns.",
      duration: "35 mins",
      readingTime: "7 mins read",
      contentMarkdown: `### Why Goal Setting Matters

Without clear goals, marketing becomes a series of random activities with no way to measure success. SMART goals give you a framework to set objectives that are clear, trackable, and aligned with your business.

#### The SMART Framework

| Letter | Meaning | Question to Ask | Example |
|---|---|---|---|
| **S** | Specific | What exactly do I want to achieve? | "Increase website traffic" |
| **M** | Measurable | How will I track progress? | "By 25%" |
| **A** | Achievable | Is this realistic with my resources? | "Yes, with current budget" |
| **R** | Relevant | Does this align with business objectives? | "Yes, drives revenue" |
| **T** | Time-bound | What's the deadline? | "By Q4 2026" |

> **Mental model:** SMART goals are like a GPS for your marketing — they tell you where you're going, how to get there, and when you'll arrive.

#### Turning Vague Goals into SMART Goals

| Vague Goal | SMART Goal |
|---|---|
| "Get more followers" | "Increase Instagram followers by 15% in 3 months through consistent posting and engagement" |
| "Improve website" | "Increase website conversion rate from 2% to 3% by optimizing landing pages by end of Q3" |
| "Do more email marketing" | "Grow email list by 500 subscribers and achieve 25% open rate by December 2026" |

---

### Types of Marketing Goals

#### 1. Awareness Goals
- Increase brand awareness
- Grow social media following
- Improve search engine rankings

#### 2. Engagement Goals
- Increase email open rates
- Boost social media engagement rate
- Grow time on site

#### 3. Conversion Goals
- Increase landing page conversion rate
- Reduce cart abandonment rate
- Grow email list subscribers

#### 4. Revenue Goals
- Increase online sales by X%
- Reduce customer acquisition cost
- Grow customer lifetime value

---

### Common Mistakes to Avoid

- **Mistake:** Setting too many goals at once — **Fix:** Focus on 3-5 key goals per quarter.
- **Mistake:** Setting unrealistic goals — **Fix:** Base goals on historical data and industry benchmarks.
- **Mistake:** Not tracking progress — **Fix:** Review goals weekly and adjust tactics as needed.
- **Mistake:** Setting goals without a budget — **Fix:** Ensure you have the resources to achieve each goal.

### Professional Tips & Tricks

- Break annual goals into quarterly, monthly, and weekly milestones.
- Make goals visible to your entire team — transparency drives accountability.
- Review and adjust goals quarterly — markets change, and so should your targets.
- Celebrate small wins along the way to maintain motivation.

---

### Key Takeaways

- SMART goals provide clarity and accountability for your marketing efforts.
- Each goal should be Specific, Measurable, Achievable, Relevant, and Time-bound.
- Focus on 3-5 key goals per quarter to avoid spreading yourself too thin.
- Track progress regularly and adjust tactics as needed.

**Next up:** Search Engine Optimization (SEO) fundamentals and how to get found on Google.`,
      codeLanguage: "text",
      codeSnippet: `# SMART Goal Setting Worksheet

## Business Objective: Increase online revenue by 20% in 2026

### Marketing Goal 1: Grow Organic Traffic
- Specific: Increase organic website traffic
- Measurable: From 10,000 to 15,000 monthly visitors
- Achievable: With SEO improvements and content marketing
- Relevant: More traffic = more potential customers
- Time-bound: By December 31, 2026
- SMART Goal: "Increase organic website traffic from 10,000 to 15,000 monthly visitors by December 31, 2026 through SEO optimization and content marketing."

### Marketing Goal 2: Improve Conversion Rate
- Specific: Increase landing page conversion rate
- Measurable: From 2% to 3.5%
- Achievable: With A/B testing and UX improvements
- Relevant: Higher conversion = more revenue from existing traffic
- Time-bound: By Q3 2026
- SMART Goal: "Increase landing page conversion rate from 2% to 3.5% by September 30, 2026 through systematic A/B testing and user experience optimization."

### Marketing Goal 3: Build Email List
- Specific: Grow email subscriber list
- Measurable: Add 2,000 new subscribers
- Achievable: With lead magnets and promotion
- Relevant: Email is highest ROI marketing channel
- Time-bound: By June 30, 2026
- SMART Goal: "Grow email subscriber list by 2,000 new subscribers by June 30, 2026 through lead magnets, content upgrades, and cross-promotion."`,
      codeOutput: `SMART Goal Setting Worksheet

## Business Objective: Increase online revenue by 20% in 2026

### Marketing Goal 1: Grow Organic Traffic
- Specific: Increase organic website traffic
- Measurable: From 10,000 to 15,000 monthly visitors
- Achievable: With SEO improvements and content marketing
- Relevant: More traffic = more potential customers
- Time-bound: By December 31, 2026
- SMART Goal: "Increase organic website traffic from 10,000 to 15,000 monthly visitors by December 31, 2026 through SEO optimization and content marketing."

### Marketing Goal 2: Improve Conversion Rate
- Specific: Increase landing page conversion rate
- Measurable: From 2% to 3.5%
- Achievable: With A/B testing and UX improvements
- Relevant: Higher conversion = more revenue from existing traffic
- Time-bound: By Q3 2026
- SMART Goal: "Increase landing page conversion rate from 2% to 3.5% by September 30, 2026 through systematic A/B testing and user experience optimization."

### Marketing Goal 3: Build Email List
- Specific: Grow email subscriber list
- Measurable: Add 2,000 new subscribers
- Achievable: With lead magnets and promotion
- Relevant: Email is highest ROI marketing channel
- Time-bound: By June 30, 2026
- SMART Goal: "Grow email subscriber list by 2,000 new subscribers by June 30, 2026 through lead magnets, content upgrades, and cross-promotion."`,
      visualizationTips: [
        "Create a goal dashboard with progress bars for each SMART goal — it makes tracking visual and motivating.",
        "Use a calendar to mark milestones and deadlines for each goal.",
        "Draw a simple flowchart showing how each goal connects to the overall business objective.",
      ],
      tipsAndTricks: [
        "Break big goals into smaller weekly tasks — it makes them less overwhelming.",
        "Share goals with your team — accountability drives results.",
        "Review goals weekly, not just at the end of the quarter.",
      ],
      practice: [
        {
          id: "practice-smart-goals",
          title: "SMART Goal Workshop",
          difficulty: "Medium",
          task: "Transform this vague goal into a SMART goal: 'We want to do better on social media.'",
          hint: "Apply each SMART criterion: Specific, Measurable, Achievable, Relevant, Time-bound.",
          solution: `SMART Goal: "Increase LinkedIn engagement rate from 2% to 4% by posting 3 times per week and responding to all comments within 24 hours by September 30, 2026."`,
        },
        {
          id: "practice-goal-metrics",
          title: "Metric Selection",
          difficulty: "Easy",
          task: "For each of these goals, identify 2-3 metrics you would track: website traffic, email list growth, and social media engagement.",
          hint: "Think about leading and lagging indicators.",
          solution: `Website Traffic:
- Sessions (total visits)
- Users (unique visitors)
- Pages per session

Email List Growth:
- New subscribers per week
- Unsubscribe rate
- List growth rate

Social Media Engagement:
- Likes, comments, shares
- Engagement rate (%)
- Follower growth rate`,
        },
      ],
    },
  ],
};
