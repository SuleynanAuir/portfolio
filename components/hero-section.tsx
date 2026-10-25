"use client";

import Link from "next/link";
import { ArrowDownRight, ArrowUpRight, Github, Sparkles } from "lucide-react";
import { useCopy } from "@/components/locale-provider";
import { allProjects, projectImage, site } from "@/lib/site-config";
import { researchCategories } from "@/data/portfolio";
import { CurriculumTree } from "@/components/curriculum-tree";
import {
  ProfileSummary,
  ResearchIntroduction,
} from "@/components/profile-summary";

export function HeroSection() {
  const { t } = useCopy();
  return (
    <section id="home" className="hero shell">
      <div className="hero-copy">
        <p className="eyebrow">
          <span className="status-dot" />{" "}
          {t("AI SYSTEMS RESEARCH LABORATORY", "AI 系统研究实验室")}
        </p>
        <h1>
          <span className="hero-title-line">
            {t("Hi, I'm", "你好，我是")}{" "}
            <span className="highlight coral">{site.name}</span>{" "}
            <span
              className="greeting-wave"
              role="img"
              aria-label={t("Waving hand", "挥手")}
            >
              👋
            </span>
          </span>
          <span className="hero-title-line">
            {t("Building", "构建")}{" "}
            <span className="highlight blue">
              {t("intelligent systems.", "智能系统。")}
            </span>
          </span>
        </h1>
        <ResearchIntroduction />
        <div className="button-row">
          <Link href="#portfolio" className="paper-button">
            {t("Explore my projects", "探索研究项目")}
            <ArrowDownRight size={20} />
          </Link>
          <a
            href={site.github}
            className="paper-button secondary"
            target="_blank"
            rel="noreferrer"
          >
            <Github size={20} /> GitHub <ArrowUpRight size={17} />
          </a>
        </div>
      </div>
      <CurriculumTree />
      <div className="hero-visual">
        <div className="portrait-frame">
          <img
            className="portrait"
            src={projectImage(site.avatar)}
            width="800"
            height="800"
            alt="Suleynan Aiur"
            fetchPriority="high"
          />
          <div className="portrait-caption">
            <span>RESEARCH. BUILD. REPEAT.</span>
            <Sparkles size={22} />
          </div>
        </div>
        <div className="sticker sticker-top">
          <Sparkles size={20} />{" "}
          {t("Curiosity → intelligence", "从好奇心到智能")}
        </div>
        <div className="sticker sticker-bottom">
          <span className="sticker-number">{allProjects.length}</span>
          <span>
            {t("research projects", "研究项目")}
            <br />
            <b>
              {researchCategories.length}{" "}
              {t("connected directions", "个相互连接的方向")}
            </b>
          </span>
        </div>
        <span className="hero-spark" aria-hidden="true">
          ✳
        </span>
      </div>
      <ProfileSummary />
    </section>
  );
}
