"use client";

import Link from "next/link";
import { ArrowDownRight } from "lucide-react";
import { heroCopy } from "@/data/site-copy";
import { useCopy } from "@/components/locale-provider";
import { categoryColors } from "@/lib/site-config";

export function ExperienceSection() {
  const { locale, t } = useCopy();
  return (
    <section
      id="trajectory"
      className="trajectory section page-panel"
      data-page-panel
      data-page-label={t("Journey", "研究路径")}
    >
      <div className="shell trajectory-grid">
        <div className="trajectory-intro">
          <p className="eyebrow">
            {t("AN EVOLVING RESEARCH JOURNEY", "不断演进的研究路径")}
          </p>
          <h2>
            {t("Learning to build.", "从学习到构建，")}
            <br />
            <span className="highlight purple">
              {t("Building to learn.", "在构建中学习。")}
            </span>
          </h2>
          <p>
            {t(
              "A connected path from mathematical foundations to autonomous systems. Each layer informs the next — and every project is a chance to ask a better question.",
              "从数学与算法基础出发，逐步走向自主智能系统。每一层都为下一层提供支撑，每个项目都帮助提出更好的问题。",
            )}
          </p>
          <Link href="#notes" className="paper-button light">
            {t("Read the research notes", "阅读研究笔记")}
            <ArrowDownRight size={20} />
          </Link>
        </div>
        <div className="timeline">
          {heroCopy[locale].stages.map((stage, index) => (
            <div className="timeline-card" key={stage.title}>
              <div className="timeline-top">
                <span>
                  {t("CHAPTER", "阶段")} 0{index + 1}
                </span>
                <span
                  className="timeline-dot"
                  style={{ backgroundColor: categoryColors[index] }}
                />
              </div>
              <div className="timeline-copy">
                <h3>{stage.title}</h3>
                <p>{stage.description}</p>
                <div className="tag-list">
                  {stage.keywords.map((keyword) => (
                    <span key={keyword}>{keyword}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
