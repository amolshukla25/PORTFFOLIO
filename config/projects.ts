import { ValidCategory, ValidExpType, ValidSkills } from "./constants";

interface PagesInfoInterface {
  title: string;
  imgArr: string[];
  description?: string;
}

interface DescriptionDetailsInterface {
  paragraphs: string[];
  bullets: string[];
}

export interface ProjectInterface {
  id: string;
  type: ValidExpType;
  companyName: string;
  category: ValidCategory[];
  shortDescription: string;
  websiteLink?: string;
  githubLink?: string;
  techStack: ValidSkills[];
  startDate: Date;
  endDate: Date;
  companyLogoImg: any;
  descriptionDetails: DescriptionDetailsInterface;
  pagesInfoArr: PagesInfoInterface[];
}

export const Projects: ProjectInterface[] = [
  {
    id: "portfolio-card",
    companyName: "Portfolio Card",
    type: "Personal",
    category: ["Web Dev", "Frontend", "3D Modeling"],
    shortDescription:
      "Forged an immersive 3D Portfolio Card utilizing the prowess of Three.js and Blender, where art and technology converge in an interactive masterpiece.",
    githubLink: "https://github.com/amolshukla",
    techStack: ["React", "Javascript", "HTML 5", "CSS 3"],
    startDate: new Date("2022-03-01"),
    endDate: new Date("2022-07-01"),
    companyLogoImg: "/projects/covers/portfolio-card.webp",
    pagesInfoArr: [
      {
        title: "Card Views",
        description: "Front and back views of the interactive 3D card",
        imgArr: ["/projects/card/card_2.webp", "/projects/card/card_3.webp"],
      },
      {
        title: "Interactive Elements",
        description:
          "Custom links embedded in the 3D model with interactive animations",
        imgArr: ["/projects/card/card_1.webp"],
      },
      {
        title: "3D Model Development",
        description: "Blender project showcasing the model creation process",
        imgArr: ["/projects/card/card_4.webp"],
      },
    ],
    descriptionDetails: {
      paragraphs: [
        "In my personal, I've ventured into the world of creativity, fashioning a distinctive portfolio card through the utilization of Three.js.",
        "This portfolio card transcends convention; it emerges as a captivating 3D model, adorned with meticulous lighting arrangements that conjure a spellbinding visual journey.",
        "To materialize this concept, I've harnessed the combined potential of Three.js and Blender, orchestrating a meticulous crafting of the central 3D model that serves as the cornerstone of the card's allure.",
        "Yet, the allure extends beyond aesthetics. I've ingeniously interwoven custom links directly into the fabric of Three.js components. Through the creation and seamless integration of novel components, these additions elegantly rest upon the card's surface, mirroring its rotations and delivering an interactive dimension to my portfolio.",
        "The portfolio card itself is an opus of motion, perpetually swaying in an auto-rotational dance that unfurls its multifaceted essence. As an enhancement, I've introduced an instinctive user interaction element. A simple, intuitive drag of the card in specific directions grants viewers a comprehensive vantage, enabling exploration from every conceivable angle.",
        "At its core, my personal epitomizes technical finesse, artistic expression, and interactive design. The amalgamation of Three.js, Blender's prowess, and the innovation of component integration has birthed not only a portfolio card, but a dynamic encounter leaving an indelible imprint on all who partake.",
      ],
      bullets: [
        "Conceptualized and realized a distinct portfolio card using Three.js, highlighting creative exploration.",
        "Crafted a mesmerizing 3D model enhanced by thoughtful lighting arrangements, resulting in a captivating visual voyage.",
        "Leveraged the synergy of Three.js and Blender to meticulously sculpt and refine the central 3D model, embodying meticulous attention to detail.",
        "Innovatively integrated custom links within Three.js components, introducing an interactive layer via seamlessly incorporated new elements.",
        "Enabled an auto-rotating feature for the portfolio card, perpetually showcasing its various facets to observers.",
        "Introduced an instinctual user interaction mechanism, allowing viewers to comprehensively explore the card's dimensions through simple, intuitive dragging motions.",
        "Represented a fusion of technical prowess, artistic ingenuity, and interactive design in a project that reshapes the boundaries of conventional portfolio representation.",
      ],
    },
  },
  {
    id: "academic-learning-assistant",
    companyName: "AI-Powered Academic Learning Assistant",
    type: "Personal",
    category: ["Web Dev", "Backend", "UI/UX"],
    shortDescription:
      "An LLM-based tutoring assistant designed to support learners in DSA, DBMS, and Python with context-aware answers.",
    techStack: ["Python", "FastAPI", "SQL", "TensorFlow"],
    startDate: new Date("2024-01-01"),
    endDate: new Date("2024-06-01"),
    companyLogoImg: "/projects/covers/academic-learning-assistant.webp",
    pagesInfoArr: [
      {
        title: "Context-aware tutoring",
        description:
          "Built an AI tutor that answers learner questions with context from DSA, DBMS, and Python topics.",
        imgArr: ["/projects/academic-learning-assistant/thumbnail.png"],
      },
    ],
    descriptionDetails: {
      paragraphs: [
        "Architected an LLM-based tutoring assistant to help students resolve doubts quickly and consistently.",
        "The experience improved engagement and reduced repetitive doubt-solving time by approximately 40%.",
      ],
      bullets: [
        "Designed a context-aware learning assistant for DSA, DBMS, and Python.",
        "Improved student engagement through faster, relevant answers.",
      ],
    },
  },
  {
    id: "smart-resume-analyzer",
    companyName: "Smart Resume Analyzer",
    type: "Personal",
    category: ["Web Dev", "Backend", "UI/UX"],
    shortDescription:
      "An AI-driven resume screening system that compares resumes against job descriptions and generates ATS-friendly suggestions.",
    techStack: ["Python", "FastAPI", "SQL", "PyTorch"],
    startDate: new Date("2024-06-01"),
    endDate: new Date("2024-12-01"),
    companyLogoImg: "/projects/covers/smart-resume-analyzer.webp",
    pagesInfoArr: [
      {
        title: "Resume matching",
        description:
          "Built an NLP-powered workflow to identify skill gaps and recommend keyword improvements for resumes.",
        imgArr: ["/projects/smart-resume-analyzer/thumbnail.png"],
      },
    ],
    descriptionDetails: {
      paragraphs: [
        "Developed a generative AI solution that analyzes resumes against job descriptions and highlights ATS-friendly improvements.",
        "The system helped students improve resume-match scores by an average of 35%.",
      ],
      bullets: [
        "Created an AI resume screening workflow using NLP and LLMs.",
        "Generated skill-gap insights and keyword recommendations for better job matching.",
      ],
    },
  },
  {
    id: "ikigai-website",
    companyName: "Ikigai School of AI Website",
    type: "Professional",
    category: ["Web Dev", "Frontend", "UI/UX"],
    shortDescription:
      "Built a professional, modern website for Ikigai School of AI to present its programs, training, and learning experience.",
    websiteLink: "https://www.ikigailudhiana.com/",
    techStack: ["Next.js", "React", "Typescript", "Tailwind CSS"],
    startDate: new Date("2024-01-01"),
    endDate: new Date("2024-12-01"),
    companyLogoImg: "/projects/covers/ikigai-website.webp",
    pagesInfoArr: [
      {
        title: "Program showcase",
        description:
          "Created a polished experience for presenting AI and data training programs clearly and professionally.",
        imgArr: ["/projects/ikigai-website/thumbnail.png"],
      },
    ],
    descriptionDetails: {
      paragraphs: [
        "Developed a professional website for Ikigai School of AI to improve its online presence and communicate its training programs more effectively.",
        "The site was designed to feel modern, credible, and aligned with an education-focused AI brand.",
      ],
      bullets: [
        "Built a polished website for Ikigai School of AI.",
        "Focused on clarity, modern design, and better presentation of training offerings.",
      ],
    },
  },
];

export const featuredProjects = Projects.slice(0, 3);
