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
import { allProjects, asset, projectImage, imageSize } from "@/lib/site-config";
import { getCategoryDisplay, getProjectDisplay } from "@/data/site-copy";
import {
  getProjectStudy,
  studyImageSource,
  studyImageSize,
  type StudyText,
} from "@/lib/project-studies";

export function ProjectDetail({ slug }: { slug: string }) {
  const { locale, t, href } = useCopy();
  const original = allProjects.find((project) => project.slug === slug)!;
  const project = getProjectDisplay(original, locale);
  const study = getProjectStudy(slug);
  const text = (copy: StudyText) => copy[locale];
  const sectionIds = ["project-notes", "implementation", "evaluation"];
  const figure = (src: string, caption: StudyText, hero = false) => {
    const size = src.startsWith("/assets/web_page/")
      ? imageSize(src)
      : studyImageSize(src);
    const source = studyImageSource(src);
    return (
      <figure
        className={hero ? "study-figure detail-hero-image" : "study-figure"}
      >
        <a
          className="study-image-link"
          href={asset(src)}
          target="_blank"
          rel="noreferrer"
          aria-label={`${text(caption)} — ${t("Open full-size image", "打开原图")}`}
        >
          <img
            src={projectImage(src)}
            width={size.width}
            height={size.height}
            alt={text(caption)}
            loading={hero ? "eager" : "lazy"}
            fetchPriority={hero ? "high" : undefined}
          />
          <span className="image-expand">
            <ArrowUpRight size={17} />
          </span>
        </a>
        <figcaption>
          <span>{text(caption)}</span>
          {source && (
            <a href={source} target="_blank" rel="noreferrer">
              {t("Source", "来源")} <ArrowUpRight size={12} />
            </a>
          )}
        </figcaption>
      </figure>
    );
  };
  return (
    <main id="main-content" className="shell detail-page project-study-page">
      <Link className="text-link back-link" href={`${href()}#portfolio`}>
        <ArrowLeft size={19} />
        {t("Back to projects", "返回项目集")}
      </Link>
      <header className="detail-header study-hero">
        <div className="study-hero-copy">
          <p className="eyebrow">
            {getCategoryDisplay(original.category, locale).title}
          </p>
          <h1>{project.name}</h1>
          <p className="detail-summary">{text(study.overview)}</p>
          <div className="tag-list study-tags">
            {project.keywords.map((keyword) => (
              <span key={keyword}>
                {keyword}
              </span>
            ))}
          </div>
          <div className="button-row">
            <a
              className="paper-button"
              href={study.sources[0]}
              target="_blank"
              rel="noreferrer"
            >
              <Github size={19} />
              {t("View repository", "查看项目仓库")}
              <ArrowUpRight size={17} />
            </a>
            <a className="paper-button secondary" href="#project-notes">
              <BookOpen size={19} />
              {t("Technical study", "技术详解")}
            </a>
            <a className="paper-button secondary" href="#logic-chain">
              <GitBranch size={19} />
              {t("Workflow", "实现流程")}
            </a>
          </div>
        </div>
        {figure(study.hero, study.heroCaption, true)}
      </header>
      <section
        id="logic-chain"
        className="study-workflow"
        aria-label={t("Project workflow", "项目流程")}
      >
        {study.stages.map((stage, index) => (
          <div key={stage.en}>
            <span className="study-step">0{index + 1}</span>
            <h2>{text(stage)}</h2>
          </div>
        ))}
      </section>
      <div className="detail-grid study-grid">
        <article className="detail-main study-narrative">
          {study.sections.map((section, index) => (
            <section
              id={sectionIds[index]}
              className="study-section"
              key={section.title.en}
            >
              <p className="eyebrow study-section-number">
                0{index + 1} / {t("PROJECT STUDY", "项目详解")}
              </p>
              <h2>{text(section.title)}</h2>
              <p>{text(section.paragraphs[0])}</p>
              {section.image && figure(section.image, section.caption)}
              <p>{text(section.paragraphs[1])}</p>
              {index === 1 && (
                <dl className="study-specifications">
                  {study.specifications.map((spec) => (
                    <div key={spec.label.en}>
                      <dt>{text(spec.label)}</dt>
                      <dd>{text(spec.value)}</dd>
                    </div>
                  ))}
                </dl>
              )}
              {index === 2 && study.metrics.length > 0 && (
                <div
                  className="study-metrics"
                  aria-label={t(
                    "README-reported evaluation",
                    "README 报告的评估结果",
                  )}
                >
                  {study.metrics.map((metric) => (
                    <div key={metric.label.en}>
                      <span>{text(metric.label)}</span>
                      <strong>{metric.value}</strong>
                      <small>{metric.context}</small>
                    </div>
                  ))}
                  <p>
                    {t(
                      "Reported in the repository README; see the evaluation context above.",
                      "数值来自仓库 README，评估背景见上文。",
                    )}
                  </p>
                </div>
              )}
            </section>
          ))}
          <section
            id="reproduction"
            className="study-reproduction paper-card detail-block"
          >
            <p className="eyebrow">
              {t("FROM READING TO RUNNING", "从阅读到复现")}
            </p>
            <h2>{t("Reproduction notes", "复现要点")}</h2>
            <p>{text(study.reproduction)}</p>
            <div className="study-source-links">
              {study.sources.map((url, index) => (
                <a
                  href={`${url}#readme`}
                  key={url}
                  target="_blank"
                  rel="noreferrer"
                >
                  <Github size={17} />
                  {study.sources.length > 1
                    ? `README · v${index + 1}`
                    : t("Read the source README", "阅读原始 README")}
                  <ArrowUpRight size={16} />
                </a>
              ))}
            </div>
          </section>
        </article>
        <aside className="detail-sidebar study-sidebar">
          <nav
            className="study-contents"
            aria-label={t("On this page", "本页目录")}
          >
            <p className="eyebrow">{t("IN THIS PROJECT", "本项目内容")}</p>
            {study.sections.map((section, index) => (
              <a key={section.title.en} href={`#${sectionIds[index]}`}>
                <span>0{index + 1}</span>
                {text(section.title)}
              </a>
            ))}
            <a href="#reproduction">
              <span>04</span>
              {t("Reproduction & sources", "复现与来源")}
            </a>
          </nav>
          <section className="study-reading">
            <h2>{t("Explore the foundations", "延伸阅读")}</h2>
            {project.learningPath?.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noreferrer"
              >
                <span className="learning-source">
                  {link.source}
                  <ArrowUpRight size={15} />
                </span>
                <h3>{link.label}</h3>
                <p>{link.description}</p>
              </a>
            ))}
          </section>
        </aside>
      </div>
    </main>
  );
}
