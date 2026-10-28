"use client";

import Link from "next/link";
import { ArrowUpRight, Network, Search, Wrench, Database } from "lucide-react";
import { useCopy } from "@/components/locale-provider";
import { homeCopy } from "@/data/site-copy";
import { allProjects } from "@/lib/site-config";

export function AboutSection() {
  const { locale, t } = useCopy();
  const copy = homeCopy[locale];
  return (
    <section id="about" className="section shell about-grid">
      <div
        className="about-art"
        aria-label={t(
          "Models, tools, memory and evidence form an AI system",
          "模型、工具、记忆与证据构成 AI 系统",
        )}
      >
        <div className="about-orbit" />
        <div className="about-core">
          <Network size={58} strokeWidth={1.5} />
          <strong>AI Systems</strong>
        </div>
        <span className="orbit-label label-top">
          <Search size={20} />
          {t("Evidence", "证据")}
        </span>
        <span className="orbit-label label-right">
          <Wrench size={20} />
          {t("Tools", "工具")}
        </span>
        <span className="orbit-label label-bottom">
          <Database size={20} />
          {t("Memory", "记忆")}
        </span>
        <span className="about-star" aria-hidden="true">
          ✳
        </span>
      </div>
      <div>
        <p className="eyebrow">
          {t("THE THINKING BEHIND THE WORK", "项目背后的思考")}
        </p>
        <h2>
          {t("From algorithms", "从算法出发，")}
          <br />
          {t("to", "走向")}{" "}
          <span className="highlight blue">
            {t("intelligence.", "智能系统。")}
          </span>
        </h2>
        <p className="section-intro">{copy.visionDescription}</p>
        <div className="about-facts">
          <div>
            <span className="fact-square purple" />
            <div>
              <h3>
                {allProjects.length}{" "}
                {t("open research projects", "个开放研究项目")}
              </h3>
              <p>{copy.visionCards[0].body}</p>
            </div>
          </div>
          <div>
            <span className="fact-square coral" />
            <div>
              <h3>{t("Built around evidence", "以证据为核心")}</h3>
              <p>{copy.visionCards[2].body}</p>
            </div>
          </div>
        </div>
        <Link className="paper-button secondary" href="#trajectory">
          {t("Follow the research journey", "了解研究路径")}
          <ArrowUpRight size={20} />
        </Link>
      </div>
    </section>
  );
}
