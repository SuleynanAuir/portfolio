"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import {
  ArrowUpRight,
  Github,
  Search,
  X,
  Bot,
  BrainCircuit,
  FlaskConical,
  ChartNoAxesCombined,
  Workflow,
  ScanEye,
} from "lucide-react";
import { projectApplications } from "@/data/project-applications";
import { coursework } from "@/data/profile";
import {
  researchDirections,
  directionSearchTerms,
} from "@/data/research-directions";
import { researchCategories } from "@/data/portfolio";
import { getCategoryDisplay, getProjectDisplay } from "@/data/site-copy";
import {
  allProjects,
  categoryColors,
  categoryId,
  projectSlug,
} from "@/lib/site-config";
import { useCopy } from "@/components/locale-provider";

const icons = [
  Bot,
  BrainCircuit,
  FlaskConical,
  ChartNoAxesCombined,
  Workflow,
  ScanEye,
];

export function PortfolioSection() {
  const { locale, t, href } = useCopy();
  const [query, setQuery] = useState("");
  const [active, setActive] = useState<number | null>(null);
  useEffect(() => {
    let frame = 0;
    const showCategory = (hash = window.location.hash) => {
      const match = hash.match(/^#research-([1-6])$/);
      if (!match) return;
      cancelAnimationFrame(frame);
      setQuery("");
      setActive(Number(match[1]) - 1);
      frame = requestAnimationFrame(() => {
        frame = requestAnimationFrame(() =>
          document.getElementById(`research-${match[1]}`)?.scrollIntoView(),
        );
      });
    };
    const onHashChange = () => showCategory();
    const onCategorySelect = (event: Event) =>
      showCategory(`#${categoryId((event as CustomEvent<number>).detail)}`);
    showCategory();
    window.addEventListener("hashchange", onHashChange);
    window.addEventListener("select-research-category", onCategorySelect);
    return () => {
      window.removeEventListener("hashchange", onHashChange);
      window.removeEventListener("select-research-category", onCategorySelect);
      cancelAnimationFrame(frame);
    };
  }, []);
  const search = query.trim().toLowerCase();
  const categories = researchCategories
    .map((category, index) => ({
      category,
      index,
      projects: category.projects.filter((project) => {
        const display = getProjectDisplay(project, locale);
        return `${project.name} ${project.description} ${display.description} ${project.keywords.join(" ")} ${getCategoryDisplay(category, locale).title} ${directionSearchTerms(index)} ${projectApplications[project.name]?.en ?? ""} ${projectApplications[project.name]?.zh ?? ""}`
          .toLowerCase()
          .includes(search);
      }),
    }))
    .filter(
      (group) =>
        (active === null || group.index === active) &&
        group.projects.length > 0,
    );
  const count = categories.reduce(
    (total, group) => total + group.projects.length,
    0,
  );
  return (
    <section
      id="research"
      className="section shell research-explorer page-panel"
      data-page-panel
      data-page-label={t("Research", "研究")}
    >
      <span id="portfolio" className="panel-anchor" aria-hidden="true" />
      <div id="about" className="explorer-intro">
        <div className="explorer-heading">
          <h2 className="explorer-title">
            Beyond patterns &amp; prediction, toward{" "}
            <em className="highlight coral">mechanistic</em>{" "}
            understanding and real-world intelligence.
          </h2>
        </div>
      </div>
      <div className="explorer-search">
        <form
          className="explorer-search-form"
          role="search"
          onSubmit={(event) => {
            event.preventDefault();
            document
              .getElementById("research-results")
              ?.scrollIntoView({ block: "start" });
          }}
        >
          <div className="search-field">
            <Search size={23} aria-hidden="true" />
            <input
              type="search"
              aria-label={t("Search projects", "搜索项目")}
              aria-controls="research-results"
              placeholder={t(
                "Search projects, topics, or coursework…",
                "搜索项目、研究主题或课程…",
              )}
              value={query}
              onChange={(event) => setQuery(event.target.value)}
            />
            {query && (
              <button
                type="button"
                onClick={() => setQuery("")}
                aria-label={t("Clear search", "清除搜索")}
              >
                <X size={18} />
              </button>
            )}
            <button className="explorer-submit" type="submit">
              {t("Search", "搜索")}
              <ArrowUpRight size={17} aria-hidden="true" />
            </button>
          </div>
        </form>
        <div
          className="filter-list"
          aria-label={t("Filter by research direction", "按研究方向筛选")}
        >
          <button
            className={active === null ? "filter active" : "filter"}
            aria-pressed={active === null}
            onClick={() => setActive(null)}
          >
            {t("All directions", "全部方向")}
          </button>
          {researchDirections.map((direction, index) => (
            <button
              key={direction.en}
              className={active === index ? "filter active" : "filter"}
              aria-pressed={active === index}
              onClick={() => setActive(index)}
            >
              {t(direction.en, direction.zh)}
            </button>
          ))}
        </div>
        <p className="project-count" role="status">
          {count} / {allProjects.length} {t("projects", "个项目")}{" "}
          <span aria-hidden="true">·</span> {categories.length}{" "}
          {t("directions", "个方向")}
        </p>
      </div>
      <div id="research-results" className="direction-grid">
        {!count && (
          <div className="empty-state paper-card">
            <h3>{t("No matching projects", "没有找到匹配的项目")}</h3>
            <p>
              {t(
                "Try another keyword or explore all directions.",
                "试试其他关键词，或浏览全部研究方向。",
              )}
            </p>
            <button
              className="paper-button"
              onClick={() => {
                setQuery("");
                setActive(null);
              }}
            >
              {t("Show all projects", "显示全部项目")}
            </button>
          </div>
        )}
        {categories.map(({ category, index, projects }) => {
          const Icon = icons[index];
          const direction = researchDirections[index];
          return (
            <article
              className="direction-card"
              id={categoryId(index)}
              key={category.title}
              style={{ backgroundColor: categoryColors[index] }}
            >
              <header className="direction-header">
                <div className="direction-icon" aria-hidden="true">
                  <Icon size={34} strokeWidth={1.5} />
                </div>
                <div className="direction-overview">
                  <div className="direction-heading">
                    <h3>{t(direction.en, direction.zh)}</h3>
                    <ul
                      className="direction-tags"
                      aria-label={t("Related coursework", "相关课程")}
                    >
                      {direction.tags.map((tag, i) => (
                        <li key={tag}>
                          <abbr title={coursework[direction.courses[i]]}>
                            {tag}
                          </abbr>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <p className="direction-summary">
                    {t(direction.summary.en, direction.summary.zh)}
                  </p>
                </div>
              </header>
              <span
                className="direction-count"
                aria-label={`${category.projects.length} ${t("projects in this direction", "个方向项目")}`}
              >
                <span aria-hidden="true">× {category.projects.length}</span>
              </span>
              <div className="direction-copy">
                <ul className="direction-projects">
                  {projects.map((project) => {
                    const application = projectApplications[project.name];
                    return (
                      <li key={project.name}>
                        <Link
                          className="project-detail-link"
                          href={href(`/projects/${projectSlug(project.name)}/`)}
                        >
                          {project.name}
                        </Link>
                        <span className="project-application">
                          {application
                            ? t(application.en, application.zh)
                            : "AI"}
                        </span>
                        {project.github && (
                          <a
                            className="project-github"
                            href={project.github}
                            target="_blank"
                            rel="noreferrer"
                            aria-label={`${project.name} ${t("on GitHub", "的 GitHub 仓库")}`}
                            title="GitHub"
                          >
                            <Github size={17} aria-hidden="true" />
                          </a>
                        )}
                      </li>
                    );
                  })}
                </ul>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
