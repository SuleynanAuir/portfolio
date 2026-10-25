"use client";

import Link from "next/link";
import { ArrowLeft, ArrowUpRight, Github } from "lucide-react";
import { useCopy } from "@/components/locale-provider";
import { findProject } from "@/lib/site-config";
import type { Project } from "@/lib/project-notes";

export function NoteDetail({ note }: { note: Project }) {
  const { t, href } = useCopy();
  const researchProject = findProject(note.slug);
  const github = researchProject?.github ?? note.github;
  const sections = note.body.split(/^## /m).filter(Boolean);
  return (
    <main id="main-content" className="shell detail-page">
      <Link className="text-link back-link" href={`${href()}#notes`}>
        <ArrowLeft size={19} />
        {t("Back to research notes", "返回研究笔记")}
      </Link>
      <header className="detail-header">
        <p className="eyebrow">
          {note.category} · {note.year}
        </p>
        <h1>{note.title}</h1>
        <p className="detail-summary">{note.summary}</p>
        {github && (
          <a
            className="paper-button"
            href={github}
            target="_blank"
            rel="noreferrer"
          >
            <Github size={20} />
            {t("View repository", "查看项目仓库")}
            <ArrowUpRight size={18} />
          </a>
        )}
        {researchProject && (
          <Link
            className="paper-button secondary"
            href={href(`/projects/${researchProject.slug}/`)}
          >
            {t("Explore project evidence", "查看完整项目与证据")}
            <ArrowUpRight size={18} />
          </Link>
        )}
      </header>
      <div className="detail-grid">
        <div className="detail-main">
          {sections.map((section) => {
            const [title, ...body] = section.trim().split("\n");
            return (
              <section className="paper-card detail-block" key={title}>
                <h2>{title}</h2>
                {body
                  .join("\n")
                  .split(/\n{2,}/)
                  .filter(Boolean)
                  .map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
              </section>
            );
          })}
        </div>
        <aside className="paper-card detail-block note-facts">
          <dl>
            <dt>{t("Status", "状态")}</dt>
            <dd>{note.status}</dd>
            <dt>{t("Focus", "方向")}</dt>
            <dd>{note.focus}</dd>
            <dt>{t("Difficulty", "难度")}</dt>
            <dd>{note.difficulty}</dd>
          </dl>
          {[
            [t("Topics", "主题"), note.tags],
            [t("Technology", "技术栈"), note.stack],
            [t("Related reading", "相关阅读"), note.papers],
          ].map(([label, items]) => (
            <section key={label as string}>
              <h3>{label}</h3>
              <div className="tag-list">
                {(items as string[]).map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
            </section>
          ))}
        </aside>
      </div>
    </main>
  );
}
