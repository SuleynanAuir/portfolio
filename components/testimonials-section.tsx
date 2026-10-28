"use client";

import { Quote, ArrowUpRight } from "lucide-react";
import { useCopy } from "@/components/locale-provider";
import { homeCopy } from "@/data/site-copy";
import { site } from "@/lib/site-config";

/** The template's testimonial slot now presents the author's research principles. */
export function TestimonialsSection() {
  const { locale, t } = useCopy();
  return (
    <section
      className="section shell principles page-panel"
      data-page-panel
      data-page-label={t("Principles", "研究理念")}
    >
      <div className="section-heading centered">
        <p className="eyebrow">
          {t("A SIMPLE RESEARCH PRINCIPLE", "一个朴素的研究原则")}
        </p>
        <h2>
          {t("Think in systems.", "系统性思考，")}
          <br />
          <span className="highlight blue">
            {t("Build with evidence.", "用证据构建。")}
          </span>
        </h2>
      </div>
      <div className="principle-card paper-card">
        <Quote size={52} className="quote-mark" />
        <p>{homeCopy[locale].visionCards[2].body}</p>
        <div className="principle-signature">
          <div>
            <strong>{site.name}</strong>
            <span>
              {t("Research Portfolio", "AI 系统研究实验室")}
            </span>
          </div>
          <a
            href={site.github}
            target="_blank"
            rel="noreferrer"
            aria-label={t(
              "View Suleynan Aiur on GitHub",
              "在 GitHub 上查看 Suleynan Aiur",
            )}
          >
            <ArrowUpRight size={28} />
          </a>
        </div>
      </div>
    </section>
  );
}
