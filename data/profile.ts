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

export const honorRoles: Record<string, string> = {
  "HSBC Technology Competition | Silver Prize (2nd Place)":
    "Technical Director",
  "Global MCM/ICM | Meritorious Winner (Top 15%)": "Algorithm Architect",
  "CUMCM | Provincial Second Prize (Top 16%)": "Modeling Lead",
};

export const internships = [
  {
    organization:
      "Zhongguancun Institute of Artificial Intelligence (ZGCI) · NEXUS4Sci",
    role: "Lead AI Researcher",
    distinction: "First Patent Inventor",
    period: "Jun 2026 – Present",
    focus: "Research Agent Architecture & AI Model Design",
    institutionType: "New-type AI R&D Institution",
    summary:
      "AI-native research agents and neuro-symbolic materials world models, integrating LLMs, physics-informed ML and self-evolving GraphRAG.",
    highlights: [
      "Designed an AI-native autonomous research agent architecture at the intersection of AI models, Physics-Informed ML (PIML), materials informatics and computational chemistry. Integrated LLMs, ontology engineering and graph-augmented multi-agent intelligence to move beyond static LLM–tool workflows toward autonomous research.",
      "Advancing the invention patent “Self-Evolving Knowledge Graph and Intelligent Reasoning System for ASC Composite Refractory Materials” as First Patent Inventor, lead author of the technical disclosure and lead algorithm developer (ZGCA + ZGCI; filing work from Sep 2026).",
      "Built a neuro-symbolic ASC materials science world model integrating multimodal evidence and expert knowledge across composition, processing, reaction mechanisms, phase evolution, microstructure and properties.",
      "Architected an agentic GraphRAG framework for multi-hop trajectory planning and evidence verification. Combined dynamic agent memory with self-evolving knowledge graphs to incorporate newly published multimodal information and expert domain experience.",
    ],
    logo: "/assets/organizations/zgci.png",
    logoAlt: "ZGCI",
  },
  {
    organization: "VIOOH · Intelligent Advertising Decision System",
    role: "AI Research Intern",
    distinction: "Commercial Intelligence",
    period: "Jun 2026 – Present",
    focus: "Multimodal World Models & Advertising Agents",
    institutionType: "",
    summary:
      "Multimodal world models connect screens, places and audiences. Planning agents support audience matching, reach prediction and budget optimization.",
    highlights: [
      "Designed a multimodal world model and an autonomous agent-driven advertising decision system to move beyond rule-based campaign delivery, manual media experience and static user profiles.",
      "Built a spatial-cognitive world model fusing screen inventory, geospatial data, POI context, visual perception and consumer behavior into a dynamic screen–environment–audience–behavior reasoning chain.",
      "Designed an advertising planning agent workflow for candidate screen analysis, audience matching, reach prediction and budget optimization, shifting media buying from manual procurement toward automated decision-making.",
    ],
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

export const researchLaboratories = [
  {
    name: "Zhongguancun Institute of Artificial Intelligence (ZGCI)",
    label: "China National AI Research Institute",
    period: "Jun 2026 — Present",
    periodZh: "2026 年 6 月 — 至今",
    role: "Lead AI Researcher",
    distinction: "First Patent Inventor",
    color: "blue",
  },
  {
    name: "Key Laboratory for Artificial Intelligence and Multi-Modal Data Processing of Department of Education of Guangdong Province",
    label: "Departmental AI Lab",
    period: "2023 — 2026",
    periodZh: "2023 — 2026",
    role: "AI R&D Algorithm Lead",
    distinction: "Project Director",
    color: "purple",
  },
  {
    name: "Guangdong Provincial Key Laboratory of Interdisciplinary Research and Application for Data Science",
    label: "Provincial Data Science Lab",
    period: "2023 — 2026",
    periodZh: "2023 — 2026",
    role: "AI R&D Algorithm Lead",
    distinction: "Project Director",
    color: "mint",
  },
] as const;

export const activities = [
  {
    name: "NVIDIA AI Summit",
    logo: "/assets/organizations/nvidia-ai-summit.png",
    logoAlt: "NVIDIA AI Summit",
    details: "Taiwan, China · Attendee · Jun 2024",
    tags: ["NVIDIA", "GTC", "Generative AI"],
  },
  {
    name: "International Congress of Basic Science (ICBS 2026)",
    logo: "/assets/organizations/icbs-2026.webp",
    logoAlt: "International Congress of Basic Science",
    details: "Basic Science and AI Forum · Beijing, China · Aug 2026",
    tags: ["AI4Science", "Interdisciplinary Research"],
  },
  {
    name: "DACon (Data+AI Conference)",
    logo: "/assets/organizations/dacon.webp",
    logoAlt: "DACon · DataFun",
    details: "Beijing/Shenzhen, China · Jul & Nov 2025",
    tags: ["Industry-Oriented", "Production-Ready AI", "Agentic AI"],
  },
  {
    name: "Wanxi XiaoIce (Zhongshan) Technology Co., Ltd.",
    logo: "/assets/organizations/xiaoice.png",
    logoAlt: "XiaoIce",
    details: "Project Manager · 2024",
    tags: ["Digital Human", "AIGC Solutions", "Client Management"],
  },
] as const;
