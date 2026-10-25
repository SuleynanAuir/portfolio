import { coursework } from "@/data/profile";

/** Course-based labels for the six existing research directions. */
export const researchDirections = [
  {
    en: "Autonomous agents",
    summary: {
      en: "Plan, search, and reason with tools and memory.",
      zh: "结合工具与记忆，规划、检索与推理。",
    },
    zh: "自主智能体",
    courses: [3, 4, 7],
    tags: ["NLP", "AIGC", "DSA"],
  },
  {
    en: "Foundation models",
    summary: {
      en: "Adapt and align models for practical tasks.",
      zh: "适配与对齐模型，解决实际任务。",
    },
    zh: "基础模型",
    courses: [0, 3, 4],
    tags: ["DL", "NLP", "AIGC"],
  },
  {
    en: "AI for science",
    summary: {
      en: "Forecast, model uncertainty, and support discovery.",
      zh: "时序预测、不确定性建模与科学发现。",
    },
    zh: "科学智能",
    courses: [1, 6, 13],
    tags: ["ML", "Bayes", "Stats"],
  },
  {
    en: "Machine learning",
    summary: {
      en: "Turn data and algorithms into useful decisions.",
      zh: "以数据与算法支持真实场景决策。",
    },
    zh: "机器学习",
    courses: [1, 8, 7],
    tags: ["ML", "Big Data", "DSA"],
  },
  {
    en: "Learning to decide",
    summary: {
      en: "Learn policies and personalize recommendations.",
      zh: "学习决策策略，构建个性化推荐。",
    },
    zh: "强化学习与决策",
    courses: [5, 0, 13],
    tags: ["DRL", "DL", "Stats"],
  },
  {
    en: "Multimodal AI",
    summary: {
      en: "Connect language, images, video, and documents.",
      zh: "连接语言、图像、视频与文档。",
    },
    zh: "多模态智能",
    courses: [2, 3, 0],
    tags: ["CV", "NLP", "DL"],
  },
] as const;

export function directionSearchTerms(index: number) {
  const direction = researchDirections[index];
  return `${direction.en} ${direction.zh} ${direction.tags.join(" ")} ${direction.courses.map((i) => coursework[i]).join(" ")}`;
}
