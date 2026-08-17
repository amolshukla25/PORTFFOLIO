import type { Module } from "../courses";

export const LLM_MODULE_5: Module = {
  id: "ai-tools-module-5-agentic-loops",
  title: "Module 5: [LLM] Agentic Loops & AI Agents",
  description:
    "LLM Course · Move from single prompts to agents: the plan–act–observe loop, tools and function calling, and building your own agent.",
  lessons: [
    {
      id: "agentic-loop-basics",
      title: "Lesson 10: What Is an Agentic Loop?",
      shortDescription:
        "One prompt = one answer. An agentic loop = the model plans, acts, observes, and repeats until the job is done.",
      duration: "50 mins",
      readingTime: "10 mins read",
      contentMarkdown: `### From Chatbot to Agent

A plain LLM call is a **single shot**: prompt in, answer out. An **agent** wraps the LLM in a loop that lets it take actions and use the results:

\`\`\`
        ┌─────────────┐
        │   THINK     │  decide what to do next
        └──────┬──────┘
               ▼
        ┌─────────────┐
        │    ACT      │  call a tool (search, code, API)
        └──────┬──────┘
               ▼
        ┌─────────────┐
        │  OBSERVE    │  read the tool's result
        └──────┬──────┘
               │
        ┌──────▼──────┐
        │  DONE?      │── no ──▶ back to THINK
        └─────────────┘
               │ yes
               ▼
          FINAL ANSWER
\`\`\`

#### The Loop Phases

| Phase | What Happens | Example |
|---|---|---|
| **Think** | The model reasons about the goal and picks the next step | "I need the current price, so I'll call get_stock_price" |
| **Act** | The model calls a tool with arguments | \`get_stock_price("RELIANCE")\` |
| **Observe** | The tool's output is fed back into the context | "₹2,940.50 as of 10:04 AM" |
| **Repeat** | Loop until the goal is met or a stop condition fires | Re-check, compare, summarize |
| **Answer** | Produce the final response | "RELIANCE is up 1.2% today…" |

#### What Makes It "Agentic"

The key property: **the model decides the next action based on what it just observed.** It's not a fixed script — it adapts. That's what lets one agent write code, run it, read the error, fix the bug, and rerun — autonomously.

#### Agent vs. Chatbot vs. Workflow

| | Definition | Example |
|---|---|---|
| **Chatbot** | Single-turn Q&A, no tools | "What's the weather?" |
| **Workflow** | Fixed, predefined steps | Summarize → Translate → Email |
| **Agent** | Model decides steps dynamically | Research → plan → execute → verify |

#### Real-World Agent Examples

- **Coding agents**: read your repo, write code, run tests, iterate on failures.
- **Research agents**: search the web, read pages, cross-check sources, write a report.
- **Data agents**: query databases, clean data, build charts, explain findings.
- **Customer-service agents**: check orders, refund policies, draft replies.

#### Stop Conditions (Crucial!)

Agents need to know **when to stop**, or they loop forever (and burn tokens):

1. Goal achieved (final answer ready).
2. Max steps reached (e.g. 10 tool calls).
3. Model decides it needs human input.
4. Budget/token limit hit.
5. Tool error that can't be recovered.

---

### Key Takeaways

- An agentic loop = Think → Act → Observe → Repeat → Answer.
- The model decides the next action from observations — that's the "agentic" part.
- Agents shine at multi-step, adaptive tasks; workflows win for fixed pipelines.
- Always define stop conditions — unbounded loops are a real failure mode.

**Next up:** Tools and function calling — how agents actually do things.`,
      codeLanguage: "python",
      codeSnippet: `# The agentic loop in its simplest form: plan -> act -> observe -> repeat
def agent_loop(task, max_steps=3):
    print(f"Task: {task}\\n")
    for step in range(1, max_steps + 1):
        print(f"Step {step}:")
        print("  Thought: I need more information to complete this task.")
        action = f"search('{task.split('about ')[-1]}')"
        print(f"  Action: {action}")
        print("  Observation: 3 results found.")
        if step == max_steps:
            print("  Final Answer: Task complete based on gathered evidence.")
            break
        print()

agent_loop("Find facts about the Eiffel Tower", max_steps=3)`,
      codeOutput: `Task: Find facts about the Eiffel Tower

Step 1:
  Thought: I need more information to complete this task.
  Action: search('the Eiffel Tower')
  Observation: 3 results found.

Step 2:
  Thought: I need more information to complete this task.
  Action: search('the Eiffel Tower')
  Observation: 3 results found.

Step 3:
  Thought: I need more information to complete this task.
  Action: search('the Eiffel Tower')
  Observation: 3 results found.
  Final Answer: Task complete based on gathered evidence.`,
      visualizationTips: [
        "Draw the loop as a circle with the five phases and an arrow back from OBSERVE to THINK.",
        "Trace a real task (e.g. 'book a flight') through the loop, writing each tool call.",
        "Annotate where stop conditions fire — circle the moment the agent should stop.",
      ],
      tipsAndTricks: [
        "Start with a workflow; upgrade to an agent only when the steps genuinely vary per task.",
        "Log every Think/Action/Observation — agent debugging is impossible without traces.",
        "Give agents a 'ask the user' tool: knowing when to stop and ask is a feature, not a failure.",
      ],
      practice: [
        {
          id: "practice-agent-trace",
          title: "Trace an Agentic Loop",
          difficulty: "Medium",
          task: "Trace how an agent would answer 'Is it cheaper to fly or take the train from Delhi to Mumbai next Friday?' — write the Think/Action/Observation sequence and the stop condition.",
          hint: "It needs several tools: flight search, train search, maybe currency — and a final comparison step.",
          solution: `1. THINK: I need prices for both modes on next Friday.
2. ACTION: search_flights("Delhi", "Mumbai", next_friday)
   OBSERVATION: flights from ₹3,500 (6h 45m)
3. ACTION: search_trains("Delhi", "Mumbai", next_friday)
   OBSERVATION: trains from ₹1,200 (16h)
4. THINK: Compare cost AND time — cheaper is train, faster is flight.
5. ACTION: ask_user("Do you prioritize cost or time?")
   OBSERVATION: "Cost"
6. FINAL ANSWER: Train is cheaper at ₹1,200 vs ₹3,500.

Stop condition: user preference resolved → goal achieved.`,
        },
      ],
    },
    {
      id: "tools-function-calling",
      title: "Lesson 11: Tools & Function Calling",
      shortDescription:
        "Tools are how agents touch the world. Learn function calling, tool schemas, and the ReAct pattern with a real example.",
      duration: "60 mins",
      readingTime: "11 mins read",
      contentMarkdown: `### What Is a Tool?

A **tool** is a function you expose to the model. The model can *request* to call it with specific arguments; your code executes it and returns the result.

\`\`\`
LLM ──▶ "call get_weather(city='Delhi')" ──▶ YOUR CODE runs the real API
YOUR CODE ──▶ "32°C, sunny" ──▶ LLM reads it and continues
\`\`\`

The LLM doesn't run the tool — **your application does**. The model only proposes the call.

#### Function Calling / Tool Use

Modern APIs (OpenAI, Anthropic, Gemini) support **function calling** natively: you declare tools with a schema (name, description, parameters), and the API returns a structured tool call instead of free text.

\`\`\`
tools = [
  {
    "type": "function",
    "function": {
      "name": "get_weather",
      "description": "Get current weather for a city",
      "parameters": {
        "type": "object",
        "properties": {
          "city": {"type": "string", "description": "City name"}
        },
        "required": ["city"]
      }
    }
  }
]
\`\`\`

**The description field is a prompt for the tool** — write it like one ("Use this when the user asks about weather"), because the model reads it to decide when to call.

#### The ReAct Pattern

**ReAct = Reason + Act**. The canonical agent prompt structure:

| Section | Purpose |
|---|---|
| System prompt | Role, available tools, rules |
| Thought | Model's reasoning about the next step |
| Action | Tool name + arguments (or FINAL ANSWER) |
| Observation | Tool output, fed back |
| …repeat | Until FINAL ANSWER |

Many frameworks encode ReAct for you, but understanding it matters: **the quality of your tool descriptions determines whether the model picks the right tool.**

#### Design Rules for Good Tools

1. **One tool = one job.** Don't make a mega-tool with ten parameters.
2. **Descriptions are prompts.** "Use when the user asks for the price of a stock" beats "gets prices".
3. **Validate arguments in your code** — models sometimes hallucinate values.
4. **Return structured, plain results** — JSON or short text, not HTML.
5. **Handle errors inside tools** — return "No data for X" instead of crashing.
6. **Sandbox anything dangerous** (file writes, shell commands, network).

#### Safety First

Tools that write files, run code, send emails, or spend money are **capability + risk**. Apply: allowlists, read-only defaults, human approval for irreversible actions, and audit logs.

---

### Key Takeaways

- Tools = functions your app runs; the model proposes calls, your code executes them.
- Tool descriptions act as prompts — invest in them.
- ReAct = Thought / Action / Observation loops until a final answer.
- Validate and sandbox tool calls; errors are expected, handle them gracefully.

**Next up:** Building a simple agent end-to-end.`,
      codeLanguage: "python",
      codeSnippet: `# ReAct in action: the LLM decides which tool to call, your code runs it
def get_weather(city):
    weather = {"Delhi": "32C, sunny", "Mumbai": "28C, humid", "Bengaluru": "24C, cloudy"}
    return weather.get(city, "No data for that city.")

def calculator(expression):
    try:
        return str(eval(expression))
    except Exception as e:
        return f"Error: {e}"

tools = {"get_weather": get_weather, "calculator": calculator}

def react_agent(prompt):
    print(f"User: {prompt}\\n")
    if "weather" in prompt.lower():
        city = prompt.split("in ")[-1].strip("?")
        print("Thought: The user wants weather. I will call get_weather.")
        print(f"Action: get_weather('{city}')")
        result = tools["get_weather"](city)
        print(f"Observation: {result}")
        print(f"Final Answer: The weather in {city} is {result}.")
    elif any(op in prompt for op in ["+", "-", "*", "/"]):
        print("Thought: This is a math expression. I will call calculator.")
        print(f"Action: calculator('{prompt}')")
        result = tools["calculator"](prompt)
        print(f"Observation: {result}")
        print(f"Final Answer: {prompt} = {result}")

react_agent("What is the weather in Delhi?")
print()
react_agent("12 * 8")`,
      codeOutput: `User: What is the weather in Delhi?

Thought: The user wants weather. I will call get_weather.
Action: get_weather('Delhi')
Observation: 32C, sunny
Final Answer: The weather in Delhi is 32C, sunny.

User: 12 * 8

Thought: This is a math expression. I will call calculator.
Action: calculator('12 * 8')
Observation: 96
Final Answer: 12 * 8 = 96`,
      visualizationTips: [
        "Draw the tool round-trip: LLM proposes → your code runs → result returns — label who does what.",
        "Annotate a ReAct transcript with colors: Thought=blue, Action=green, Observation=orange.",
        "Sketch a tool schema as a form the model 'fills in' — description, name, required fields.",
      ],
      tipsAndTricks: [
        "Write tool descriptions from the model's perspective: 'Call this when…' beats vague labels.",
        "Return JSON from tools — models parse structured data far more reliably than prose.",
        "Never trust tool arguments blindly: validate types and ranges in your code.",
      ],
      practice: [
        {
          id: "practice-tool-schema",
          title: "Design a Tool Schema",
          difficulty: "Medium",
          task: "Design the function-calling schema for a 'send_email' tool: name, description, and JSON parameters. Include validation considerations.",
          hint: "What fields does an email need? What could go wrong if the model invents arguments?",
          solution: `{
  "type": "function",
  "function": {
    "name": "send_email",
    "description": "Send an email to a recipient. Use only when the user explicitly asks to send an email.",
    "parameters": {
      "type": "object",
      "properties": {
        "to": {"type": "string", "description": "Recipient email address"},
        "subject": {"type": "string"},
        "body": {"type": "string"}
      },
      "required": ["to", "subject", "body"]
    }
  }
}

Validation concerns: verify "to" is a real address (models invent emails),
require human approval before sending, and log every send for auditing.
Email is irreversible — a 'confirm before send' step is a must.`,
        },
      ],
    },
    {
      id: "build-a-simple-agent",
      title: "Lesson 12: Building a Simple Agent",
      shortDescription:
        "Hands-on: assemble a minimal agent with tools, memory, and stop conditions — then meet the frameworks that do it for you.",
      duration: "75 mins",
      readingTime: "12 mins read",
      contentMarkdown: `### Anatomy of a Real Agent

Every production agent has four parts:

1. **Model** — the reasoning brain.
2. **Tools** — what it can do (search, code, APIs).
3. **Memory / state** — conversation history, files, results so far.
4. **Control loop** — decide → act → observe → repeat, with stop conditions.

#### Minimal Agent Pseudocode

\`\`\`
def run_agent(task, tools, max_steps=8):
    messages = [system_prompt(tools), user(task)]
    for step in range(max_steps):
        reply = model.call(messages)
        if reply.is_final_answer:
            return reply.text
        result = execute(reply.tool_call)   # your code, not the model!
        messages.append(tool_result(result))
    return "Stopped: max steps reached"
\`\`\`

#### The Three Control-Flow Patterns

| Pattern | What It Does | Use When |
|---|---|---|
| **Single loop** | One agent loops until done | One clear job |
| **Router** | A planner picks a specialist sub-agent | Mixed tasks (chat, code, data) |
| **Multi-agent** | Several agents talk to each other | Complex pipelines (research → write → review) |

#### Memory: Short-Term vs. Long-Term

- **Short-term**: messages inside the context window (trim/summarize old turns).
- **Long-term**: a vector database of past facts/decisions the agent retrieves (agent memory / RAG).

#### Frameworks (Choose by Need)

| Framework | Vibe | Best For |
|---|---|---|
| **LangGraph** | Graph-based state machines | Production, controllable agents |
| **OpenAI Agents SDK** | Simple, function-calling native | Fast start with OpenAI models |
| **CrewAI** | Role-based 'crews' | Multi-agent teams |
| **Claude Agent SDK** | Tool use + computer use | Claude ecosystem, browser agents |
| **Roll your own** | ~100 lines loop | Learning + minimal deps |

**Rule of thumb**: start by writing the loop yourself once (you'll learn everything); then use a framework for production.

#### Debugging Agents

- **Log every step**: input tokens, tool calls, observations, costs.
- **Reproduce with temperature 0** and fixed seeds when possible.
- **Watch for loops** (same action twice) — add a dedupe: "already tried, don't repeat".
- **Budget tokens**: cap max steps and track spend per run.

#### A Simple Agent Example (Concept)

\`\`\`
System: "You are a research assistant with tools: search_web, read_url,
summarize. Plan your steps. Stop when you have a 5-bullet answer."

User: "What are the top 3 AI trends of 2026?"
1. Thought: search the web for AI trends 2026
2. Action: search_web("AI trends 2026")
3. Observation: [10 results]
4. Thought: read the top 3 articles
5. Action: read_url(result[0].url) … (repeat)
6. Thought: I have enough — write the answer
7. Final Answer: 5 bullets with sources
\`\`\`

---

### Key Takeaways

- An agent = model + tools + memory + a control loop with stop conditions.
- Your code executes tools; the model only proposes calls.
- Start with a hand-written loop, then adopt a framework for production.
- Log everything and cap steps — agents fail by looping and overspending.

**Next up:** Advanced LLM topics — RAG, embeddings, and evaluation.`,
      codeLanguage: "python",
      codeSnippet: `# A minimal autonomous agent: search + summarize tools with a control loop
def search(query):
    return f"Top result for '{query}': https://example.com/{query.replace(' ', '-')}"

def summarize(text):
    words = text.split()
    return " ".join(words[:8]) + "..." if len(words) > 8 else text

def run_agent(task):
    print(f"Task: {task}\\n")
    print("1. Thought: I'll search the web first.")
    obs = search(task)
    print(f"   Action: search('{task}')")
    print(f"   Observation: {obs}")
    print("2. Thought: Now I'll summarize what I found.")
    summary = summarize(obs)
    print("   Action: summarize(observation)")
    print(f"   Observation: {summary}")
    print("3. Final Answer: Done - returning the summary to the user.")
    return summary

result = run_agent("latest AI news")
print(f"\\nAgent returned: {result}")`,
      codeOutput: `Task: latest AI news

1. Thought: I'll search the web first.
   Action: search('latest AI news')
   Observation: Top result for 'latest AI news': https://example.com/latest-AI-news
2. Thought: Now I'll summarize what I found.
   Action: summarize(observation)
   Observation: Top result for 'latest AI news': https://example.com/latest-AI-news
3. Final Answer: Done - returning the summary to the user.

Agent returned: Top result for 'latest AI news': https://example.com/latest-AI-news`,
      visualizationTips: [
        "Draw the agent anatomy diagram: Model, Tools, Memory, Control loop as four connected boxes.",
        "Map the three control-flow patterns (single loop, router, multi-agent) as different graphs.",
        "Add a 'budget meter' to your agent sketch — step counter and token counter ticking up.",
      ],
      tipsAndTricks: [
        "Prototype with the cheapest model; swap in the smart one only when the loop is stable.",
        "Add a 'final answer' tool — forcing explicit completion prevents vague early exits.",
        "Test agents on 5–10 canned tasks with recorded transcripts before letting them loose.",
      ],
      practice: [
        {
          id: "practice-agent-design",
          title: "Design an Agent Spec",
          difficulty: "Hard",
          task: "Spec the four parts (model, tools, memory, control loop) for a 'meeting note taker' agent that records action items from a transcript and emails them.",
          hint: "What tools does it need? What memory? What are the stop conditions?",
          solution: `Model: any capable chat model (for summarization + tool use).
Tools:
  - extract_action_items(transcript) -> list  (or prompt-based)
  - draft_email(items, attendees)
  - send_email(to, subject, body)  [requires confirmation]
Memory: transcript in context; action items stored in a file/DB for follow-up.
Control loop:
  1. Extract action items from the transcript.
  2. Draft the email.
  3. SHOW draft to the user and ask for confirmation.
  4. Send only after approval.
Stop conditions: user approves+cancels, or 5 max steps.

The confirmation gate on send_email is the safety-critical design choice.`,
        },
      ],
    },
  ],
};
