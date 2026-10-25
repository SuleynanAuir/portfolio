"use client";

import Link from "next/link";
import { ArrowUpRight, BookOpen } from "lucide-react";
import { useCopy } from "@/components/locale-provider";
import { categoryColors } from "@/lib/site-config";
import type { Project } from "@/lib/project-notes";

export function ArticlesSection({ notes }: { notes: Project[] }) {
  const { t, href } = useCopy();
  return (
    <section
      id="notes"
      className="section shell notes-section page-panel"
      data-page-panel
      data-page-label={t("Notes", "笔记")}
    >
      <div className="section-heading row-heading">
        <div>
          <p className="eyebrow">{t("THE NOTEBOOK", "研究手记")}</p>
          <h2>
            {t("Notes &", "笔记与")}{" "}
            <span className="highlight yellow">
              {t("explorations.", "探索。")}
            </span>
          </h2>
        </div>
        <span className="note-count">
          {notes.length} {t("project notes", "篇项目笔记")}
        </span>
      </div>
      <div className="notes-grid">
        {notes.map((note, index) => (
          <Link
            className="paper-card note-card"
            href={href(`/notes/${note.slug}/`)}
            key={note.slug}
          >
            <div
              className="note-icon"
              style={{
                backgroundColor: categoryColors[index % categoryColors.length],
              }}
            >
              <BookOpen size={25} />
            </div>
            <div className="note-meta">
              {note.category} · {note.year}
            </div>
            <h3>{note.title}</h3>
            <p>{note.summary}</p>
            <span className="text-link">
              {t("Read project notes", "阅读项目笔记")}
              <ArrowUpRight size={20} />
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}
