/** Personal information supplied by the portfolio owner. */
export const education = {
  institution: "Beijing Normal-Hong Kong Baptist University (BNBU)",
  degree: "B.Sc. in Artificial Intelligence",
  period: "Sep 2023 – Jun 2027",
  gpa: "3.79 / 4.0",
  rank: "Top 5%",
  honors: [
    "President's Honour Roll (2023–2025)",
    "First-Class Scholarship × 3 (2023–2025/2026)",
    "HSBC Technology Competition | Silver Prize (2nd Place)",
    "Global MCM/ICM | Meritorious Winner (Top 15%)",
    "CUMCM | Provincial Second Prize (Top 16%)",
  ],
} as const;

export const honorLogos: Record<string, { src: string; alt: string }> = {
  "HSBC Technology Competition | Silver Prize (2nd Place)": {
    src: "/assets/organizations/hsbc.png",
    alt: "HSBC",
  },
  "Global MCM/ICM | Meritorious Winner (Top 15%)": {
    src: "/assets/organizations/comap.png",
    alt: "COMAP · MCM/ICM",
  },
  "CUMCM | Provincial Second Prize (Top 16%)": {
    src: "/assets/organizations/cumcm.png",
    alt: "CUMCM",
  },
};

export const internships = [
  {
    organization: "Zhongguancun Institute of Artificial Intelligence (ZGCI)",
    role: "Lead AI Researcher",
    months: 6,
    logo: "/assets/organizations/zgci.png",
    logoAlt: "ZGCI",
  },
  {
    organization: "VIOOH Intelligent Advertising Decision System",
    role: "AI Research Intern",
    months: 6,
    logo: "/assets/organizations/viooh.jpg",
    logoAlt: "VIOOH",
  },
] as const;

export const researchTopics = [
  "ML&DL Algorithms",
  "Representation Learning",
  "CV-NLP Multimodal Perception",
  "LLMs",
  "Agentic AI",
] as const;

export const coursework = [
  "Neural Networks & Deep Learning",
  "Machine Learning",
  "Computer Vision",
  "Natural Language Processing",
  "AIGC",
  "Deep Reinforcement Learning",
  "Bayesian Network",
  "Data Structures & Algorithms",
  "Big Data Analytics",
  "Mathematical & Computing Methods",
  "Linear Algebra",
  "Engineering Calculus",
  "Discrete Structures",
  "Probability and Statistics",
] as const;

export const profileSkills = [
  { label: "Deep Learning & ML", color: "blue" },
  { label: "LLMs & Agentic System", color: "purple" },
  { label: "3D Vision & Embodied Intelligence", color: "coral" },
  { label: "Multimodal Fusion & Understanding", color: "mint" },
  { label: "AI for Science & Cross-Domain Applications", color: "yellow" },
] as const;

export const knowledgeGroups = [
  {
    en: "Math & Foundations",
    zh: "数学与基础",
    color: "blue",
    items: [
      "Linear Algebra · Engineering Calculus",
      "Probability and Statistics · Discrete Structures",
      "Mathematical & Computing Methods",
    ],
  },
  {
    en: "CS & Algorithms",
    zh: "计算机与算法",
    color: "purple",
    items: ["Data Structures & Algorithms · Big Data Analytics"],
  },
  {
    en: "Core AI & ML",
    zh: "AI 核心基础",
    color: "mint",
    items: [
      "Machine Learning · Optimization",
      "Neural Networks & Deep Learning",
      "Computer Vision (3D Vision) · NLP",
      "Deep Reinforcement Learning · Bayesian Network",
    ],
  },
  {
    en: "Advanced & Applied AI",
    zh: "进阶与前沿",
    color: "yellow",
    items: ["AIGC (Generative AI) · LLMs", "Agentic AI · World Models"],
  },
] as const;
