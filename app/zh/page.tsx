import type { Metadata } from "next";
import { HomePage } from "@/components/home-page";
export const metadata: Metadata = {
  title: "Suleynan Aiur · AI 研究实验室",
  description:
    "探索智能体、基础模型、科学 AI、机器学习、强化学习和多模态智能的研究作品集。",
};
export default function Home() {
  return <HomePage locale="zh" />;
}
