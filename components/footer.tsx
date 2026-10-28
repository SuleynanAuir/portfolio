"use client";

import Link from "next/link";
import { ArrowUpRight, Github, ArrowUp } from "lucide-react";
import { homeCopy } from "@/data/site-copy";
import { useCopy } from "@/components/locale-provider";
import { asset, site } from "@/lib/site-config";
import { technicalSkills } from "@/data/portfolio";

export function Footer({ compact = false }: { compact?: boolean }) {
  const { locale, t, href } = useCopy();
  if (compact)
    return (
      <footer id="contact" className="selected-footer shell">
        <span>
          © {new Date().getFullYear()} {site.name}
        </span>
        <a href={site.github} target="_blank" rel="noreferrer">
          <Github size={16} /> GitHub <ArrowUpRight size={15} />
        </a>
      </footer>
    );
  return (
    <footer id="contact" className="site-footer">
      <div className="shell">
        <div className="contact-banner">
          <div>
            <p className="eyebrow">
              {t("LET’S CONNECT THE DOTS", "让想法相互连接")}
            </p>
            <h2>{t("Curious about what’s next?", "一起探索下一步。")}</h2>
          </div>
          <a
            href={site.github}
            className="paper-button"
            target="_blank"
            rel="noreferrer"
          >
            <Github size={22} />
            {t("Connect on GitHub", "在 GitHub 上交流")}
            <ArrowUpRight size={20} />
          </a>
        </div>
        <div className="footer-grid">
          <div>
            <Link className="brand" href={href()}>
              <img src={asset(site.logo)} width="36" height="36" alt="" />
              {site.name}
            </Link>
            <p>{homeCopy[locale].contactDescription}</p>
          </div>
          <div>
            <h3>{t("Explore", "探索")}</h3>
            <Link href={`${href()}#about`}>
              {t("About me", "关于实验室")}
            </Link>
            <Link href={`${href()}#research`}>
              {t("Research directions", "研究方向")}
            </Link>
            <Link href={`${href()}#portfolio`}>
              {t("All projects", "全部项目")}
            </Link>
            <Link href={`${href()}#notes`}>
              {t("Research notes", "研究笔记")}
            </Link>
          </div>
          <div>
            <h3>{t("Research interests", "研究兴趣")}</h3>
            <div className="footer-tags">
              {technicalSkills.map((skill) => (
                <span key={skill}>{skill}</span>
              ))}
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <span>
            © {new Date().getFullYear()} {site.name}
          </span>
          <Link href={href()}>
            {t("Back to top", "返回顶部")}
            <ArrowUp size={16} />
          </Link>
        </div>
      </div>
    </footer>
  );
}
