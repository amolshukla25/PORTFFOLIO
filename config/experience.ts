import { ValidSkills } from "./constants";

export interface ExperienceInterface {
  id: string;
  position: string;
  company: string;
  location: string;
  startDate: Date;
  endDate: Date | "Present";
  description: string[];
  achievements: string[];
  skills: ValidSkills[];
  companyUrl?: string;
  logo?: string;
}

export const experiences: ExperienceInterface[] = [
  {
    id: "ikigai-ai-trainer",
    position: "Full-Time AI Trainer",
    company: "Ikigai School of AI",
    location: "India",
    startDate: new Date("2024-01-01"),
    endDate: "Present",
    description: [
      "Deliver full-time training in Python, AI, and Data Science to aspiring developers and data professionals.",
      "Design project-based curricula covering machine learning pipelines, generative AI fundamentals, and real-world automation.",
      "Mentor students through capstone projects, interview preparation, and placement readiness.",
    ],
    achievements: [
      "Delivered comprehensive AI and Python training for batches of aspiring developers and data professionals.",
      "Built project-based learning modules around ML pipelines, generative AI, and real-world automation.",
      "Guided students through capstone work, placements, and interview preparation.",
    ],
    skills: ["Python", "TensorFlow", "PyTorch", "SQL", "FastAPI"],
    companyUrl: "https://ikigai.ai",
    logo: "/profile-img.jpg",
  },
  {
    id: "rcpl-trainer",
    position: "PHP + AI Trainer",
    company: "RCPL",
    location: "India",
    startDate: new Date("2023-01-01"),
    endDate: new Date("2024-01-01"),
    description: [
      "Conducted dual-track training in PHP development and artificial intelligence.",
      "Taught backend fundamentals including PHP core programming, database connectivity, and RESTful API integration.",
      "Introduced AI modules on Python for Data Science, machine learning basics, and generative AI applications.",
    ],
    achievements: [
      "Enabled trainees to build both web development and AI literacy together.",
      "Created practical assignments and coding assessments for web and intelligent automation learning.",
    ],
    skills: ["PHP", "Python", "MySQL", "SQL", "FastAPI"],
    companyUrl: "https://www.rcpl.com",
    logo: "/profile-img.jpg",
  },
  {
    id: "true-mind-trainer",
    position: "AI & Python Trainer",
    company: "True Mind",
    location: "India",
    startDate: new Date("2021-01-01"),
    endDate: new Date("2023-01-01"),
    description: [
      "Delivered end-to-end training in Python from fundamentals to OOPs, file handling, and modular coding.",
      "Trained more than 100 students in NumPy, Pandas, Matplotlib, Seaborn, and real-world data analysis workflows.",
      "Integrated generative AI and LLM concepts into learning modules for smart application development.",
    ],
    achievements: [
      "Mentored students for technical interviews, placements, and final-year projects.",
      "Introduced machine learning fundamentals, evaluation, and deployment basics to learners.",
    ],
    skills: ["Python", "TensorFlow", "PyTorch", "SQL", "FastAPI"],
    companyUrl: "https://truemind.in",
    logo: "/profile-img.jpg",
  },
  {
    id: "hitbull-eye-trainer",
    position: "Big Data & Data Science Trainer",
    company: "Hitbull Eye",
    location: "India",
    startDate: new Date("2020-01-01"),
    endDate: new Date("2021-01-01"),
    description: [
      "Delivered specialized training in Big Data technologies and data science workflows.",
      "Taught DSA topics including arrays, trees, graphs, and dynamic programming with focus on scalable systems.",
      "Conducted DBMS lessons on normalization, indexing, joins, transactions, and ACID.",
    ],
    achievements: [
      "Performed code reviews, doubt-solving sessions, and mock interviews for campus placement drives.",
      "Delivered hands-on practical assignments and structured lesson plans for data-intensive learners.",
    ],
    skills: ["Python", "SQL", "MySQL", "AWS", "Docker"],
    companyUrl: "https://hitbullseye.com",
    logo: "/profile-img.jpg",
  },
];

/*
  {
    id: "ubs",
    position: "Software Development Engineer",
    company: "UBS",
    location: "Mumbai, India",
    startDate: new Date("2024-08-01"),
    endDate: "Present",
    description: [
      "Shipped production features within the first month for a trader-facing P&L dashboard used by global stakeholders.",
      "Led the migration from Kendo UI to UBS’s internal design system to reduce UI inconsistencies and improve render performance.",
      "Designed and automated a daily FX rate ingestion pipeline using Databricks (Python, Spark SQL) and Java services.",
    ],
    achievements: [
      "Shipped production features within the first month for a trader-facing P&L dashboard used by global stakeholders.",
      "Led migration from Kendo UI to UBS’s internal design system, reducing UI inconsistencies and improving render performance across core dashboards.",
      "Designed and automated a daily FX rate ingestion pipeline using Databricks (Python, Spark SQL) and Java services, eliminating manual rate updates.",
      "Won UBS AI Venture Challenge by building data transformation and anomaly detection pipelines on trading datasets.",
      "Led a 12-member team in an internal hackathon to build an AI-powered tool that generates GitLab tickets, test cases, and requirement summaries.",
    ],
    skills: ["Typescript", "React", "Databricks", "Java", "Python"],
    companyUrl: "https://www.ubs.com",
    logo: "/experience/keys-logo.png",
  },
  {
    id: "muze-ai",
    position: "Founding Engineer",
    company: "Muze AI",
    location: "Bengaluru, India",
    startDate: new Date("2023-10-01"),
    endDate: new Date("2024-03-01"),
    description: [
      "Improved LLM function-calling accuracy through structured prompt design and response validation.",
      "Developed APIs and integrated Slack, Google Workspace, and HubSpot automations via FastAPI.",
      "Migrated ML inference from Replicate to AWS SageMaker to reduce cold-start latency.",
    ],
    achievements: [
      "Improved LLM function-calling accuracy by ~40% through structured prompt design and response validation.",
      "Developed APIs and integrated Slack, Google Workspace, and HubSpot automations via FastAPI.",
      "Migrated ML inference from Replicate to AWS SageMaker, reducing cold-start latency by ~30%.",
      "Created a Next.js dashboard and a demo video explaining the implementation.",
    ],
    skills: ["FastAPI", "Python", "AWS", "Next.js", "React", "Typescript"],
    companyUrl: "https://muzecmo.com",
    logo: "/experience/muzeai-logo.png",
  },
  {
    id: "builtdesign",
    position: "Web Developer Intern",
    company: "Builtdesign",
    location: "Nagpur, India",
    startDate: new Date("2021-07-01"),
    endDate: new Date("2022-07-01"),
    description: [
      "Developed websites using React, Angular, and GraphQL.",
      "Set up AWS servers and CI/CD pipelines.",
      "Built a multi-page PDF reader for large files (>300MB).",
    ],
    achievements: [
      "Developed websites using React, Angular, and GraphQL; reduced API load time by 30%.",
      "Set up AWS servers and CI/CD pipelines, scaling traffic to 3,000+ users/day.",
      "Built a multi-page PDF reader for large files (>300MB) to boost user engagement.",
    ],
    skills: [
      "React",
      "Angular",
      "GraphQL",
      "AWS",
      "HTML 5",
      "CSS 3",
      "Javascript",
    ],
    companyUrl: "https://builtdesign.in",
    logo: "/experience/builtdesign-logo.png",
  },
*/

