"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { useCopy } from "@/components/locale-provider";
import { asset, basePath, site } from "@/lib/site-config";
import { researchTopics } from "@/data/profile";

export function Navigation() {
  const { locale, t, href } = useCopy();
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const localPath =
    basePath && pathname.startsWith(basePath)
      ? pathname.slice(basePath.length) || "/"
      : pathname;
  const switchPath =
    locale === "zh"
      ? localPath.replace(/^\/zh(?=\/|$)/, "") || "/"
      : `/zh${localPath === "/" ? "/" : localPath}`;
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
            aria-label={t("AI Research Lab home", "AI 研究实验室首页")}
          >
            <img src={asset(site.logo)} width="36" height="36" alt="" />
            <span>
              AI Lab<span className="brand-dot">.</span>
            </span>
          </Link>
          <div className="desktop-nav">
            {links.map(([label, id]) => (
              <Link key={id} href={`${href()}#${id}`}>
                {label}
              </Link>
            ))}
          </div>
          <div className="nav-actions">
            <Link
              className="language-switch"
              href={switchPath}
              aria-label={t("Switch to Chinese", "切换为英文")}
            >
              {t("中文", "EN")}
            </Link>
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
