"use client";

import Link from "next/link";
import {
  ArrowLeft,
  ArrowUpRight,
  Github,
  BookOpen,
  GitBranch,
} from "lucide-react";
import { useCopy } from "@/components/locale-provider";
import {
  allProjects,
  asset,
  projectImage,
  imageSize,
  categoryColors,
} from "@/lib/site-config";
import {
  getCategoryDisplay,
  getProjectDisplay,
  projectModuleCopy,
} from "@/data/site-copy";

export function ProjectDetail({ slug }: { slug: string }) {
  const { locale, t, href } = useCopy();
  const original = allProjects.find((project) => project.slug === slug)!;
  const project = getProjectDisplay(original, locale);
  const copy = projectModuleCopy[locale];
  const images = [
    ...new Set(project.images ?? (project.image ? [project.image] : [])),
  ];
  return (
    <main id="main-content" className="shell detail-page">
      <Link className="text-link back-link" href={`${href()}#portfolio`}>
        <ArrowLeft size={19} />
        {t("Back to projects", "返回项目集")}
      </Link>
      <header className="detail-header">
        <p className="eyebrow">
          {getCategoryDisplay(original.category, locale).title}
        </p>
        <h1>{project.name}</h1>
        <p className="detail-summary">{project.description}</p>
        <div className="tag-list">
          {project.keywords.map((keyword) => (
            <span key={keyword}>{keyword}</span>
          ))}
        </div>
        <div className="button-row">
          {project.github && (
            <a
              className="paper-button"
              href={project.github}
              target="_blank"
              rel="noreferrer"
            >
              <Github size={20} />
              {t("View repository", "查看项目仓库")}
              <ArrowUpRight size={18} />
            </a>
          )}
          <Link className="paper-button secondary" href="#project-notes">
            <BookOpen size={20} />
            {copy.readmeNotes}
          </Link>
          <Link className="paper-button secondary" href="#logic-chain">
            <GitBranch size={20} />
            {copy.logicChain}
          </Link>
        </div>
      </header>
      <div className="detail-grid">
        <div className="detail-main">
          <section
            className="paper-card detail-block"
            style={{ backgroundColor: categoryColors[original.categoryIndex] }}
          >
            <p className="eyebrow">{copy.keyContribution}</p>
            <h2>{project.impact}</h2>
          </section>
          <section className="paper-card detail-block">
            <h2>{t("Role in the research ecosystem", "在研究体系中的作用")}</h2>
            <p>{project.platformRole}</p>
          </section>
          <section id="project-notes" className="paper-card detail-block">
            <h2>{copy.readmeNotes}</h2>
            <ul className="detail-list">
              {project.readmeHighlights?.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>
          <section id="logic-chain" className="paper-card detail-block">
            <h2>{copy.logicChain}</h2>
            <ol className="logic-list">
              {project.logicChain?.map((step, index) => (
                <li key={step.label}>
                  <span className="logic-number">0{index + 1}</span>
                  <div>
                    <h3>{step.label}</h3>
                    <p>{step.value}</p>
                  </div>
                </li>
              ))}
            </ol>
          </section>
          <section className="paper-card detail-block">
            <h2>{copy.professionalKnowledge}</h2>
            <p>{project.knowledgeIntro}</p>
          </section>
        </div>
        <aside className="detail-sidebar">
          <section className="paper-card detail-block learning-path">
            <p className="eyebrow">{t("KEEP EXPLORING", "继续探索")}</p>
            <h2>{copy.learningPath}</h2>
            {project.learningPath?.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noreferrer"
              >
                <span className="learning-source">
                  {link.source}
                  <ArrowUpRight size={18} />
                </span>
                <h3>{link.label}</h3>
                <p>{link.description}</p>
              </a>
            ))}
          </section>
        </aside>
      </div>
      {images.length > 0 && (
        <section className="evidence-section">
          <div className="section-heading">
            <p className="eyebrow">
              {t("FROM THE PROJECT", "来自项目的原始图示")}
            </p>
            <h2>
              {t("Research", "研究")}{" "}
              <span className="highlight yellow">
                {t("evidence.", "证据。")}
              </span>
            </h2>
            <p>
              {t(
                "Open an image to inspect the original at full resolution.",
                "点击图像，在新标签页查看原始大图。",
              )}
            </p>
          </div>
          <div className="evidence-grid">
            {images.map((src, index) => (
              <figure className="paper-card" key={src}>
                <a href={asset(src)} target="_blank" rel="noreferrer">
                  <img
                    src={projectImage(src)}
                    {...imageSize(src)}
                    alt={`${project.name} — ${t("project evidence", "项目图示")} ${index + 1}`}
                    loading="lazy"
                  />
                </a>
                <figcaption>
                  {project.name}
                  <span>
                    {(index + 1).toString().padStart(2, "0")}{" "}
                    <ArrowUpRight size={16} />
                  </span>
                </figcaption>
              </figure>
            ))}
          </div>
        </section>
      )}
    </main>
  );
}
