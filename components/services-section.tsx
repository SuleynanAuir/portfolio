"use client";

import Link from "next/link";
import {
  ArrowUpRight,
  Bot,
  BrainCircuit,
  FlaskConical,
  ChartNoAxesCombined,
  Workflow,
  ScanEye,
} from "lucide-react";
import { researchCategories } from "@/data/portfolio";
import { getCategoryDisplay } from "@/data/site-copy";
import { categoryColors, categoryId } from "@/lib/site-config";
import { useCopy } from "@/components/locale-provider";

const icons = [
  Bot,
  BrainCircuit,
  FlaskConical,
  ChartNoAxesCombined,
  Workflow,
  ScanEye,
];
const names = [
  "Autonomous agents",
  "Foundation models",
  "AI for science",
  "Machine learning",
  "Learning to decide",
  "Multimodal AI",
];
export function ServicesSection() {
  const { locale, t } = useCopy();
  return (
    <section id="research" className="section shell">
      <div className="section-heading centered">
        <p className="eyebrow">
          {t("A CONNECTED RESEARCH PRACTICE", "相互连接的研究实践")}
        </p>
        <h2>
          {t("Six directions.", "六个方向，")}
          <br />
          <span className="highlight coral">
            {t("One curious mind.", "同一份好奇心。")}
          </span>
        </h2>
        <p>
          {t(
            "From the mathematics underneath to the systems that reason, act, and learn. Explore the ideas behind the work.",
            "从底层数学与算法，到能够推理、行动和学习的系统。探索每个项目背后的研究方向。",
          )}
        </p>
      </div>
      <div className="research-grid">
        {researchCategories.map((category, index) => {
          const copy = getCategoryDisplay(category, locale);
          const Icon = icons[index];
          return (
            <Link
              href={`#${categoryId(index)}`}
              onClick={() =>
                window.dispatchEvent(
                  new CustomEvent("select-research-category", {
                    detail: index,
                  }),
                )
              }
              className="paper-card research-card"
              key={category.title}
            >
              <div
                className="research-art"
                style={{ backgroundColor: categoryColors[index] }}
              >
                <span className="art-orbit" />
                <Icon size={80} strokeWidth={1.5} />
                <span className="art-index">0{index + 1}</span>
                <span className="art-star" aria-hidden="true">
                  ✳
                </span>
              </div>
              <div className="research-card-copy">
                <div className="card-kicker">
                  {category.projects.length} {t("PROJECTS", "个项目")}
                  <ArrowUpRight size={20} />
                </div>
                <h3>{t(names[index], copy.title)}</h3>
                <p>{copy.signal}</p>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
