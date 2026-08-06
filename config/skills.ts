import { Icons } from "@/components/common/icons";

export interface skillsInterface {
  name: string;
  description: string;
  rating: number;
  icon: any;
}

export const skillsUnsorted: skillsInterface[] = [
  {
    name: "Next.js",
    description:
      "Effortlessly build dynamic apps with routing, layouts, loading UI, and API routes.",
    rating: 5,
    icon: Icons.nextjs,
  },
  {
    name: "React",
    description:
      "Craft interactive user interfaces using components, state, props, and virtual DOM.",
    rating: 5,
    icon: Icons.react,
  },
  {
    name: "GraphQL",
    description:
      "Fetch data precisely with a powerful query language for APIs and runtime execution.",
    rating: 4,
    icon: Icons.graphql,
  },
  {
    name: "Nest.js",
    description:
      "Create scalable and modular applications with a progressive Node.js framework.",
    rating: 4,
    icon: Icons.nestjs,
  },
  {
    name: "express.js",
    description:
      "Build web applications and APIs quickly using a fast, unopinionated Node.js framework.",
    rating: 5,
    icon: Icons.express,
  },
  {
    name: "Node.js",
    description:
      "Run JavaScript on the server side, enabling dynamic and responsive applications.",
    rating: 5,
    icon: Icons.nodejs,
  },
  {
    name: "MongoDB",
    description:
      "Store and retrieve data seamlessly with a flexible and scalable NoSQL database.",
    rating: 5,
    icon: Icons.mongodb,
  },
  {
    name: "Typescript",
    description:
      "Enhance JavaScript with static types, making code more understandable and reliable.",
    rating: 5,
    icon: Icons.typescript,
  },
  {
    name: "Javascript",
    description:
      "Create interactive and dynamic web experiences with the versatile scripting language.",
    rating: 5,
    icon: Icons.javascript,
  },
  {
    name: "HTML 5",
    description:
      "Structure web content beautifully with the latest version of HyperText Markup Language.",
    rating: 4,
    icon: Icons.html5,
  },
  {
    name: "CSS 3",
    description:
      "Style web pages creatively with the latest iteration of Cascading Style Sheets.",
    rating: 4,
    icon: Icons.css3,
  },
  {
    name: "React Native",
    description:
      "Develop cross-platform mobile apps using React for consistent and engaging experiences.",
    rating: 4,
    icon: Icons.react,
  },
  {
    name: "Angular",
    description:
      "Build dynamic web apps with a TypeScript-based open-source framework by Google.",
    rating: 3,
    icon: Icons.angular,
  },
  {
    name: "Redux",
    description:
      "Manage app state effectively using a predictable and centralized state container.",
    rating: 4,
    icon: Icons.redux,
  },
  {
    name: "Socket.io",
    description:
      "Enable real-time, bidirectional communication between clients and servers effortlessly.",
    rating: 3,
    icon: Icons.socketio,
  },
  {
    name: "Material UI",
    description:
      "Create stunning and responsive UIs with a popular React UI framework.",
    rating: 4,
    icon: Icons.mui,
  },

  {
    name: "Tailwind CSS",
    description:
      "Design beautiful, modern websites faster with a utility-first CSS framework.",
    rating: 5,
    icon: Icons.tailwindcss,
  },
  {
    name: "AWS",
    description:
      "Utilize Amazon Web Services to build and deploy scalable, reliable, and secure applications.",
    rating: 3,
    icon: Icons.amazonaws,
  },
  {
    name: "Bootstrap",
    description:
      "Quickly create responsive and appealing web designs using a popular CSS framework.",
    rating: 2,
    icon: Icons.bootstrap,
  },
  {
    name: "MySQL",
    description:
      "Manage and organize relational databases efficiently for data-driven applications.",
    rating: 2,
    icon: Icons.mysql,
  },
  {
    name: "Netlify",
    description:
      "Deploy and host modern web applications instantly with serverless functions and CI/CD integrations.",
    rating: 4,
    icon: Icons.netlify,
  },
  {
    name: "LangChain",
    description:
      "Build context-aware, reasoning applications with LLMs using flexible chains and agents.",
    rating: 5,
    icon: Icons.langchain,
  },
  {
    name: "LangGraph",
    description:
      "Orchestrate multi-actor LLM applications with stateful, multi-agent workflows.",
    rating: 4,
    icon: Icons.network,
  },
  {
    name: "LangSmith",
    description:
      "Debug, test, evaluate, and monitor LLM applications and agent actions.",
    rating: 4,
    icon: Icons.activity,
  },
  {
    name: "n8n",
    description:
      "Design workflow automation and AI agent pipelines with a node-based integration system.",
    rating: 4,
    icon: Icons.n8n,
  },
  {
    name: "Machine Learning",
    description:
      "Develop predictive models, classification systems, and regression pipelines using structured data.",
    rating: 5,
    icon: Icons.brain,
  },
  {
    name: "Deep Learning",
    description:
      "Train neural networks, convolution architectures, and transformers for complex AI tasks.",
    rating: 4,
    icon: Icons.workflow,
  },
  {
    name: "TensorFlow",
    description:
      "Build, train, and deploy machine learning models with an open-source end-to-end platform.",
    rating: 4,
    icon: Icons.tensorflow,
  },
  {
    name: "Vercel",
    description:
      "Deploy front-end and serverless applications instantly with optimized edge hosting.",
    rating: 5,
    icon: Icons.vercel,
  },
  {
    name: "Azure",
    description:
      "Build, deploy, and manage enterprise cloud services, cognitive tools, and AI infrastructures.",
    rating: 4,
    icon: Icons.azure,
  },
];

export const skills = skillsUnsorted
  .slice()
  .sort((a, b) => b.rating - a.rating);

export const featuredSkills = skills.slice(0, 6);
