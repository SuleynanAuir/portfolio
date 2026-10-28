"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { useCopy } from "@/components/locale-provider";
import { asset, site } from "@/lib/site-config";
import { researchTopics } from "@/data/profile";

export function Navigation() {
  const { t, href } = useCopy();
  const [open, setOpen] = useState(false);
  const links = [
    [t("About", "关于"), "about"],
    [t("Research", "研究"), "research"],
    [t("Projects", "项目"), "portfolio"],
    [t("Notes", "笔记"), "notes"],
  ];
  return (
    <header className="site-header shell">
      <a className="skip-link" href="#main-content">
        {t("Skip to content", "跳转到正文")}
      </a>
      <div className="header-panel">
        <nav className="paper-nav" aria-label={t("Main navigation", "主导航")}>
          <Link
            href={href()}
            className="brand"
            aria-label="Suleynan Aiur home"
          >
            <img src={asset(site.logo)} width="36" height="36" alt="" />
            <span>
              {site.name}<span className="brand-dot">.</span>
            </span>
          </Link>
          <div className="desktop-nav">
            {links.map(([label, id]) => (
              <Link key={id} href={`${href()}#${id}`}>
                {label}
              </Link>
            ))}
          </div>
          <div className="header-topic-band">
            <ul
              className="header-topics"
              aria-label={t("Research topics", "研究主题")}
            >
              {researchTopics.map((topic, index) => (
                <li key={topic}>
                  {index > 0 && <span aria-hidden="true">✳</span>}
                  {topic}
                </li>
              ))}
            </ul>
          </div>
          <div className="nav-actions">
            <Link
              className="nav-contact"
              href={`${href()}#contact`}
              aria-label={t("Get in touch", "联系我")}
            >
              <ArrowUpRight size={22} />
            </Link>
            <button
              className="menu-toggle"
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={t("Toggle navigation", "切换导航菜单")}
              onClick={() => setOpen(!open)}
            >
              {open ? <X /> : <Menu />}
            </button>
          </div>
        </nav>
      </div>
      {open && (
        <div className="mobile-nav paper-card" id="mobile-menu">
          {links.map(([label, id]) => (
            <Link
              key={id}
              href={`${href()}#${id}`}
              onClick={() => setOpen(false)}
            >
              {label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
