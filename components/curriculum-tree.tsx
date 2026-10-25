"use client";

import { ArrowUpRight } from "lucide-react";
import { useCopy } from "@/components/locale-provider";
import { asset } from "@/lib/site-config";

export function CurriculumTree() {
  const { t } = useCopy();
  const image = asset("/assets/education/ai-coursework-curriculum-tree.png");
  return (
    <figure className="hero-coursework curriculum-tree">
      <a
        href={image}
        target="_blank"
        rel="noreferrer"
        aria-label={t(
          "Open the full-size AI coursework curriculum tree",
          "查看完整尺寸的 AI 课程知识树",
        )}
      >
        <img
          src={image}
          width={1122}
          height={1402}
          alt={t(
            "AI Coursework Curriculum Tree: Math & Foundations, CS & Algorithms, Core AI & ML, and Advanced & Applied AI.",
            "AI 课程知识树：数学与基础、计算机与算法、AI 核心基础、进阶与前沿。",
          )}
        />
      </a>
      <figcaption>
        {t("View full-size", "点击查看原图")}
        <ArrowUpRight size={12} aria-hidden="true" />
      </figcaption>
    </figure>
  );
}
