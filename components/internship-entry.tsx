"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, Github, X } from "lucide-react";
import { internships } from "@/data/profile";
import { useCopy } from "@/components/locale-provider";
import { asset } from "@/lib/site-config";

type Internship = (typeof internships)[number];

export function InternshipEntry({ internship }: { internship: Internship }) {
  const { t } = useCopy();
  const [open, setOpen] = useState(false);
  const dialog = useRef<HTMLDialogElement>(null);
  const titleId = `internship-${internship.logoAlt.toLowerCase()}`;
  useEffect(() => {
    if (!open) return;
    const element = dialog.current;
    const overflow = document.body.style.overflow;
    element?.showModal();
    document.body.style.overflow = "hidden";
    return () => {
      element?.close();
      document.body.style.overflow = overflow;
    };
  }, [open]);

  return (
    <li className="internship-entry">
      <div className="internship-heading">
        <h3>
          {internship.organization}
          {"projectUrl" in internship && (
            <a
              className="internship-more internship-project-link"
              href={internship.projectUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github size={12} aria-hidden="true" /> Patent Project Page
            </a>
          )}
        </h3>
        <img
          className="internship-logo"
          src={asset(internship.logo)}
          alt={internship.logoAlt}
          width={40}
          height={26}
        />
      </div>
      <div className="internship-meta-line">
        <div className="internship-roles">
          <strong>{internship.role}</strong>
          <span className={internship.distinction === "First Patent Inventor" ? "patent-distinction" : undefined}>{internship.distinction}</span>
        </div>
        <p className="internship-period">{internship.period}</p>
      </div>
      <p className="internship-summary">{internship.summary}</p>
      <div className="internship-actions">
        <button
          className="internship-more"
          onClick={() => setOpen(true)}
          aria-haspopup="dialog"
          aria-label={`${t("Research details", "研究详情")} · ${internship.logoAlt}`}
        >
          {t("Research details", "研究详情")}{" "}
          <ArrowUpRight size={12} aria-hidden="true" />
        </button>
      </div>
      <dialog
        ref={dialog}
        className="internship-detail"
        aria-labelledby={titleId}
        onClose={() => setOpen(false)}
        onClick={(event) => {
          if (event.target === event.currentTarget) {
            const rect = event.currentTarget.getBoundingClientRect();
            if (
              event.clientX < rect.left ||
              event.clientX > rect.right ||
              event.clientY < rect.top ||
              event.clientY > rect.bottom
            )
              setOpen(false);
          }
        }}
      >
        <button
          className="dialog-close"
          autoFocus
          onClick={() => setOpen(false)}
          aria-label={t("Close research details", "关闭研究详情")}
        >
          <X size={20} />
        </button>
        <img
          className="detail-organization-logo"
          src={asset(internship.logo)}
          alt=""
          width={64}
          height={42}
        />
        <h2 id={titleId}>{internship.organization}</h2>
        <p className="detail-period">{internship.period}</p>
        <div className="internship-roles">
          <strong>{internship.role}</strong>
          <span className={internship.distinction === "First Patent Inventor" ? "patent-distinction" : undefined}>{internship.distinction}</span>
        </div>
        {internship.institutionType && (
          <p className="detail-institution">{internship.institutionType}</p>
        )}
        <h3>{internship.focus}</h3>
        <ul>
          {internship.highlights.map((highlight) => (
            <li key={highlight}>{highlight}</li>
          ))}
        </ul>
      </dialog>
    </li>
  );
}
