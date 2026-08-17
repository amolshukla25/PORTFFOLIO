export interface Lesson {
  id: string;
  title: string;
  duration: string;
  description: string;
}

export interface ModuleData {
  id: string;
  slug: string;
  number: string;
  title: string;
  shortDesc: string;
  duration: string;
  lessonsCount: number;
  badge?: string;
  keyTakeaways: string[];
  lessons?: Lesson[];
}

export interface Course {
  id: string;
  slug: string;
  trackSlug: string;
  trackName: string;
  title: string;
  subtitle: string;
  description: string;
  instructor: {
    name: string;
    role: string;
    bio: string;
    avatarUrl?: string;
    social: {
      github?: string;
      linkedin?: string;
      email?: string;
    };
  };
  level: "Beginner" | "Intermediate" | "Advanced" | "All Levels";
  duration: string;
  modulesCount: number;
  featured?: boolean;
  tags: string[];
  rating: number;
  studentsCount: number;
  lastUpdated: string;
  modules: ModuleData[];
  prerequisites: string[];
  whatYouWillLearn: string[];
  seo: {
    title: string;
    description: string;
    keywords: string[];
  };
}

export interface Track {
  id: string;
  slug: string;
  title: string;
  tagline: string;
  description: string;
  icon: string;
  badge: string;
  coursesCount: number;
  totalDuration: string;
  seo: {
    title: string;
    description: string;
    keywords: string[];
  };
}

export const INSTRUCTOR_AMOL = {
  name: "Amol Shukla",
  role: "Lead AI Engineer & Technical Educator",
  bio: "Amol Shukla is an AI engineer, researcher, and educator specializing in Large Language Models, prompt engineering, agentic AI systems, and scalable full-stack software architectures. His courses provide clear, production-ready frameworks for mastering modern AI technologies.",
  social: {
    github: "https://github.com",
    linkedin: "https://linkedin.com",
    email: "contact@amolshukla.dev",
  },
};

export const TRACKS: Track[] = [
  {
    id: "ai-tools-and-technology",
    slug: "ai-tools-and-technology",
    title: "AI Tools and Technology",
    tagline: "Master generative AI, LLM architectures, and agentic workflows from ground up.",
    description: "Explore the bleeding-edge frontier of artificial intelligence. Master Large Language Models (LLM), Prompt Engineering, RAG systems, Vector Databases, and AI developer tools curated by Amol Shukla.",
    icon: "sparkles",
    badge: "Hot & Emerging",
    coursesCount: 3,
    totalDuration: "18 Hours",
    seo: {
      title: "AI Tools and Technology Courses by Amol Shukla | Learn LLM, Prompting & AI",
      description: "Master modern AI tools and technology with comprehensive courses by Amol Shukla. Learn LLMs, Prompt Engineering, LangChain, RAG, and AI agents.",
      keywords: [
        "Amol Shukla",
        "Amol Shukla AI",
        "AI Tools and Technology Amol Shukla",
        "LLM Course Amol Shukla",
        "Prompt Engineering Amol Shukla",
        "Generative AI Amol Shukla",
        "Artificial Intelligence Courses",
      ],
    },
  },
  {
    id: "python-mastery",
    slug: "python",
    title: "Python Mastery & Engineering",
    tagline: "From core fundamentals to asynchronous architecture and production systems.",
    description: "A comprehensive reference roadmap covering Python syntax, data structures, object-oriented programming, FastAPI, asynchronous programming, and machine learning toolkits curated by Amol Shukla.",
    icon: "code",
    badge: "Core Foundation",
    coursesCount: 2,
    totalDuration: "24 Hours",
    seo: {
      title: "Python Mastery & Engineering Course by Amol Shukla",
      description: "Master Python programming from syntax to advanced backend and AI systems with Amol Shukla. Full-stack Python course with hands-on projects.",
      keywords: [
        "Amol Shukla",
        "Amol Shukla Python",
        "Python Course Amol Shukla",
        "Python Engineering Amol Shukla",
        "FastAPI Python Amol Shukla",
      ],
    },
  },
];

export const LLM_COURSE: Course = {
  id: "llm-mastery",
  slug: "llm",
  trackSlug: "ai-tools-and-technology",
  trackName: "AI Tools and Technology",
  title: "Large Language Models (LLM) Mastery",
  subtitle: "The definitive guide to Prompt Engineering, Advanced Prompting Types, and LLM Engineering by Amol Shukla",
  description: "Gain an unfair advantage in modern software engineering with Amol Shukla's complete LLM masterclass. Understand how transformers think, master precision prompt engineering techniques, and build autonomous AI agents.",
  instructor: INSTRUCTOR_AMOL,
  level: "All Levels",
  duration: "8.5 Hours",
  modulesCount: 3,
  featured: true,
  tags: ["LLM", "Prompt Engineering", "Generative AI", "Transformers", "RAG", "Amol Shukla"],
  rating: 4.98,
  studentsCount: 2450,
  lastUpdated: "August 2026",
  seo: {
    title: "LLM Mastery & Prompt Engineering Course | Amol Shukla",
    description: "Learn Large Language Models (LLMs) with Amol Shukla. Master Prompt Engineering, Zero-Shot, Few-Shot, Chain of Thought, Transformers, and RAG architectures.",
    keywords: [
      "Amol Shukla",
      "Amol Shukla LLM",
      "Amol Shukla Prompt Engineering",
      "LLM Course Amol Shukla",
      "Types of Prompting Amol Shukla",
      "How LLMs Work Amol Shukla",
      "Prompt Engineering Tutorial",
      "Chain of Thought Prompting",
      "Generative AI by Amol Shukla",
    ],
  },
  prerequisites: [
    "Basic understanding of programming concepts (Python familiarity is a plus)",
    "An inquisitive mindset to experiment with AI prompts and models",
    "No prior deep learning math background required",
  ],
  whatYouWillLearn: [
    "Construct robust, production-grade prompts using Amol Shukla's 5-pillar Prompting Framework",
    "Master advanced prompting strategies: Zero-Shot, Few-Shot, Chain-of-Thought (CoT), Tree of Thoughts (ToT), and ReAct",
    "Understand the internal mechanics of Transformers, Tokenizers, Self-Attention, and Probabilistic Sampling",
    "Prevent hallucinations, secure against prompt injections, and enforce structured JSON output schemas",
    "Design and implement Retrieval-Augmented Generation (RAG) with vector databases",
    "Build autonomous AI agents with tool calling and API integrations in Python",
  ],
  modules: [
    {
      id: "prompt-engineering",
      slug: "prompt-engineering",
      number: "01",
      title: "Prompt Engineering Mastery",
      shortDesc: "The science and craft of steering LLMs with surgical precision, robust constraints, and structured schema outputs.",
      duration: "2.5 Hours",
      lessonsCount: 6,
      badge: "Module 1",
      keyTakeaways: [
        "The 5-Pillar Architecture of an Effective Prompt",
        "Role, Persona, Context, Constraints, and Output Format specification",
        "Using Delimiters (`###`, `\"\"\"`, `<xml>`) to eliminate ambiguity",
        "Zero-Hallucination techniques & Grounding mechanisms",
        "Prompt Injection & Jailbreak Defense guardrails",
        "Enforcing strict JSON and Pydantic structured output models",
      ],
      lessons: [
        {
          id: "pe-1",
          title: "Introduction to Prompt Engineering & Mental Models",
          duration: "20 min",
          description: "Why prompt engineering is programming in natural language and how modern LLMs parse instructions.",
        },
        {
          id: "pe-2",
          title: "The 5-Pillar Anatomy of a Production Prompt",
          duration: "25 min",
          description: "System vs. User prompts, context windows, and constraint engineering.",
        },
        {
          id: "pe-3",
          title: "Delimiters, Formatting & Disambiguation",
          duration: "20 min",
          description: "Preventing prompt injection and input confusion using XML, Markdown, and markdown code fences.",
        },
        {
          id: "pe-4",
          title: "Structured Outputs & JSON Mode",
          duration: "30 min",
          description: "Guaranteeing machine-readable outputs, JSON schemas, and function parameters.",
        },
        {
          id: "pe-5",
          title: "Mitigating Hallucinations & Factual Grounding",
          duration: "25 min",
          description: "Techniques for asking models to cite sources, explain reasoning, and acknowledge lack of information.",
        },
        {
          id: "pe-6",
          title: "Production Guardrails & Evaluation Frameworks",
          duration: "30 min",
          description: "Testing prompts for edge cases, token latency, cost efficiency, and regression testing.",
        },
      ],
    },
    {
      id: "types-of-prompting",
      slug: "types-of-prompting",
      number: "02",
      title: "Types of Prompting & Advanced Reasoning",
      shortDesc: "Comprehensive exploration of Zero-Shot, Few-Shot, Chain-of-Thought (CoT), Tree of Thoughts (ToT), and ReAct paradigms.",
      duration: "3 Hours",
      lessonsCount: 7,
      badge: "Module 2",
      keyTakeaways: [
        "Zero-Shot vs. Few-Shot: In-context exemplar selection strategies",
        "Chain-of-Thought (CoT) & Zero-Shot CoT ('Let's think step by step')",
        "Directional Stimulus Prompting for targeted text generation",
        "Least-to-Most Prompting for decomposing multi-step logic problems",
        "Self-Consistency Sampling: Majority voting across multiple inference paths",
        "Tree of Thoughts (ToT) for complex planning and exploration",
        "ReAct (Reason + Act) Framework: Connecting thought reasoning with tool execution",
      ],
      lessons: [
        {
          id: "top-1",
          title: "Zero-Shot Prompting: When Direct Instruction Works",
          duration: "20 min",
          description: "Baseline prompting without examples, best practices, and limitations.",
        },
        {
          id: "top-2",
          title: "Few-Shot Prompting & In-Context Learning",
          duration: "30 min",
          description: "Selecting optimal exemplars, handling edge cases, and formatting patterns.",
        },
        {
          id: "top-3",
          title: "Chain-of-Thought (CoT) & Step-by-Step Reasoning",
          duration: "35 min",
          description: "Unlocking arithmetic, symbolic, and complex logic reasoning in modern LLMs.",
        },
        {
          id: "top-4",
          title: "Least-to-Most & Directional Stimulus Prompting",
          duration: "25 min",
          description: "Breaking down intricate subproblems and steering narrative direction.",
        },
        {
          id: "top-5",
          title: "Self-Consistency & Majority Voting",
          duration: "25 min",
          description: "Generating multiple reasoning paths and choosing the most mathematically consistent answer.",
        },
        {
          id: "top-6",
          title: "Tree of Thoughts (ToT) & Graph Reasoning",
          duration: "25 min",
          description: "Heuristic search, backtracking, and multi-branch exploration for algorithmic tasks.",
        },
        {
          id: "top-7",
          title: "ReAct (Reason + Act): The Foundation of AI Agents",
          duration: "35 min",
          description: "Synergizing reasoning traces with external tool action execution.",
        },
      ],
    },
    {
      id: "how-llms-work-and-applications",
      slug: "how-llms-work-and-applications",
      number: "03",
      title: "How LLMs Work & Practical Applications",
      shortDesc: "Under the hood of Transformers, Tokenization, Probabilistic Sampling, RAG architectures, and building production AI agents.",
      duration: "3 Hours",
      lessonsCount: 7,
      badge: "Module 3",
      keyTakeaways: [
        "Transformer Architecture: Self-Attention, Multi-Head Attention, and Positional Encodings",
        "Tokenization mechanics (BPE / Byte-Pair Encoding) and context limits",
        "Inference Parameters: Temperature, Top-P, Top-K, and Repetition Penalty",
        "RAG (Retrieval-Augmented Generation) vs. Fine-Tuning trade-offs",
        "Vector Embeddings, High-Dimensional Spaces, and Vector Databases (Pinecone, Chroma)",
        "End-to-End Python implementation of an autonomous LLM Agent with Tool Calling",
        "Deploying and monitoring production LLM applications with Amol Shukla's checklist",
      ],
      lessons: [
        {
          id: "hlw-1",
          title: "The Transformer Revolution & Next-Token Prediction",
          duration: "25 min",
          description: "How neural networks process language, self-attention matrices, and generative prediction.",
        },
        {
          id: "hlw-2",
          title: "Tokenization & Context Limits Decoded",
          duration: "25 min",
          description: "How text becomes numbers, Byte-Pair Encoding, calculating token costs and latency.",
        },
        {
          id: "hlw-3",
          title: "Sampling Mathematics: Temperature, Top-P & Top-K",
          duration: "25 min",
          description: "Controlling creativity, determinism, randomness, and sampling probabilities.",
        },
        {
          id: "hlw-4",
          title: "Vector Embeddings & Semantic Search",
          duration: "30 min",
          description: "Converting concepts into high-dimensional vectors and cosine similarity querying.",
        },
        {
          id: "hlw-5",
          title: "RAG Architecture: Retrieval-Augmented Generation",
          duration: "35 min",
          description: "Chunking strategies, vector database retrieval, and augmented prompt synthesis.",
        },
        {
          id: "hlw-6",
          title: "Fine-Tuning vs. RAG vs. In-Context Learning",
          duration: "20 min",
          description: "Decision matrix for when to train weights versus when to augment dynamic context.",
        },
        {
          id: "hlw-7",
          title: "Building an End-to-End AI Agent in Python",
          duration: "40 min",
          description: "Full code walkthrough of an autonomous agent equipped with search, calculator, and API execution.",
        },
      ],
    },
  ],
};

export const PYTHON_COURSE: Course = {
  id: "python-mastery-full",
  slug: "python",
  trackSlug: "python",
  trackName: "Python Mastery & Engineering",
  title: "Python Mastery: From Syntax to Scalable Systems",
  subtitle: "Master core Python, data structures, async programming, and modern backend APIs with Amol Shukla",
  description: "A complete professional engineering course designed by Amol Shukla to take you from foundational Python syntax to enterprise-grade software architecture, async systems, and FastAPI services.",
  instructor: INSTRUCTOR_AMOL,
  level: "All Levels",
  duration: "14 Hours",
  modulesCount: 4,
  featured: false,
  tags: ["Python", "FastAPI", "AsyncIO", "OOP", "Data Structures", "Amol Shukla"],
  rating: 4.96,
  studentsCount: 3120,
  lastUpdated: "July 2026",
  seo: {
    title: "Python Mastery Course by Amol Shukla | Full Python Roadmap",
    description: "Learn Python from fundamentals to advanced asynchronous systems and web frameworks with Amol Shukla.",
    keywords: [
      "Amol Shukla",
      "Amol Shukla Python",
      "Python Course Amol Shukla",
      "Learn Python Amol Shukla",
      "FastAPI Tutorial Amol Shukla",
    ],
  },
  prerequisites: [
    "No prior programming experience required for the beginner modules",
    "Computer with Windows, macOS, or Linux",
  ],
  whatYouWillLearn: [
    "Write clean, idiomatic Python using modern Python 3.12+ features",
    "Master object-oriented programming, design patterns, and clean code principles",
    "Harness high-performance asynchronous concurrency with AsyncIO",
    "Build production RESTful microservices with FastAPI and Pydantic",
  ],
  modules: [
    {
      id: "python-fundamentals",
      slug: "fundamentals",
      number: "01",
      title: "Python Core Fundamentals & Data Structures",
      shortDesc: "Variables, control flow, functions, lists, dictionaries, sets, and comprehension patterns.",
      duration: "3.5 Hours",
      lessonsCount: 6,
      badge: "Module 1",
      keyTakeaways: [
        "Memory model, variables, and dynamic typing in Python",
        "Control flow, pattern matching (match-case), and loops",
        "Deep dive into Lists, Tuples, Dictionaries, and Sets",
        "List and Dictionary Comprehensions with filtering",
      ],
    },
    {
      id: "python-oop",
      slug: "oop-and-design-patterns",
      number: "02",
      title: "Object-Oriented Programming & Architecture",
      shortDesc: "Classes, inheritance, polymorphism, encapsulation, dunder methods, and dataclasses.",
      duration: "3.5 Hours",
      lessonsCount: 5,
      badge: "Module 2",
      keyTakeaways: [
        "Classes, instance variables, and class methods",
        "Dunder (magic) methods for operator overloading",
        "Dataclasses and modern type hinting with Pydantic",
        "Clean architecture and SOLID principles in Python",
      ],
    },
    {
      id: "python-async",
      slug: "asyncio-and-concurrency",
      number: "03",
      title: "AsyncIO, Multithreading & High Concurrency",
      shortDesc: "Event loops, coroutines, tasks, async context managers, and high-throughput I/O.",
      duration: "3.5 Hours",
      lessonsCount: 5,
      badge: "Module 3",
      keyTakeaways: [
        "Understanding the GIL (Global Interpreter Lock)",
        "Async/await syntax, event loop lifecycle, and task groups",
        "Async HTTP requests and database connection pooling",
        "Thread pools vs Process pools for CPU-bound computation",
      ],
    },
    {
      id: "python-fastapi",
      slug: "fastapi-and-production-apis",
      number: "04",
      title: "FastAPI & Production Web Microservices",
      shortDesc: "Building scalable async APIs, dependency injection, authentication, and database ORM.",
      duration: "3.5 Hours",
      lessonsCount: 6,
      badge: "Module 4",
      keyTakeaways: [
        "Routing, request validation, and OpenAPI documentation with FastAPI",
        "Dependency injection system for database sessions and auth",
        "SQLAlchemy 2.0 async ORM integration",
        "Docker containerization and production deployment",
      ],
    },
  ],
};

export const ALL_COURSES: Course[] = [LLM_COURSE, PYTHON_COURSE];

export function getCourseBySlug(trackSlug: string, courseSlug: string): Course | undefined {
  return ALL_COURSES.find(
    (c) => c.trackSlug === trackSlug && c.slug === courseSlug
  );
}

export function getTrackBySlug(slug: string): Track | undefined {
  return TRACKS.find((t) => t.slug === slug);
}

export function getModuleBySlug(course: Course, moduleSlug: string): ModuleData | undefined {
  return course.modules.find((m) => m.slug === moduleSlug);
}
