import { ValidPages } from "./constants";

type PagesConfig = {
  [key in ValidPages]: {
    title: string;
    description: string;
    metadata: {
      title: string;
      description: string;
    };
    // featuredDescription: string;
  };
};

export const pagesConfig: PagesConfig = {
  home: {
    title: "Home",
    description: "Welcome to my portfolio website.",
    metadata: {
      title: "Amol Shukla — AI Developer & Trainer",
      description:
        "Amol Shukla — AI Developer, Trainer, and Agentic AI Expert building agentic AI systems and training on LLMs and generative AI with Python.",
    },
  },
  skills: {
    title: "Skills",
    description: "Key skills that define my professional identity.",
    metadata: {
      title: "Skills",
      description:
        "AI, agentic AI, Python, and full-stack skills that define Amol Shukla — AI developer and trainer.",
    },
  },
  projects: {
    title: "Projects",
    description: "Showcasing impactful projects and technical achievements.",
    metadata: {
      title: "Projects",
      description:
        "AI, agentic AI, and web development projects built by Amol Shukla — AI developer, trainer, and agentic AI expert.",
    },
  },
  contact: {
    title: "Contact",
    description: "Let's connect and explore collaborations.",
    metadata: {
      title: "Contact",
      description:
        "Contact Amol Shukla — AI developer, trainer, and agentic AI expert — to collaborate on AI and software projects.",
    },
  },
  contributions: {
    title: "Contributions",
    description: "Open-source contributions and community involvement.",
    metadata: {
      title: "Contributions",
      description:
        "Amol shukla's open-source contributions and community involvement.",
    },
  },
  resume: {
    title: "Resume",
    description: "Amol shukla's resume.",
    metadata: {
      title: "Resume",
      description: "Amol shukla's resume.",
    },
  },
  blogs: {
    title: "Blogs",
    description:
      "Thoughts on AI, software engineering, and building in public.",
    metadata: {
      title: "Blogs",
      description:
        "Amol Shukla's blog — tutorials and thoughts on agentic AI, LLMs, generative AI, Python, and software engineering.",
    },
  },
  experience: {
    title: "Experience",
    description: "Professional journey and career timeline.",
    metadata: {
      title: "Experience",
      description:
        "Amol shukla's professional journey and experience timeline.",
    },
  },
};
