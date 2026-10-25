"use client";

import { Award, Briefcase } from "lucide-react";
import {
  education,
  honorLogos,
  internships,
  profileSkills,
} from "@/data/profile";
import { useCopy } from "@/components/locale-provider";
import { asset } from "@/lib/site-config";

export function ResearchIntroduction() {
  const { t } = useCopy();
  const skill = (index: number) => (
    <strong className={`inline-skill skill-${profileSkills[index].color}`}>
      {profileSkills[index].label}
    </strong>
  );
  return (
    <p className="hero-description">
      {t("I build intelligent systems with ", "我以 ")}
      {skill(0)}
      {t(" and ", " 与 ")}
      {skill(1)}
      {t(", connecting ", " 构建智能系统，融合 ")}
      {skill(2)}
      {t(" with ", " 与 ")}
      {skill(3)}
      {t(" to explore ", "，探索 ")}
      {skill(4)}
      {t(
        " — one open-source project at a time.",
        "，以开源项目连接理论与实践。",
      )}
    </p>
  );
}

export function ProfileSummary() {
  const { t } = useCopy();
  return (
    <section
      className="profile-summary"
      aria-label={t(
        "Education, honors and internships",
        "教育背景、荣誉与实习",
      )}
    >
      <div className="education-info">
        <div className="education-details">
          <h2>{education.institution}</h2>
          <p className="education-degree">{education.degree}</p>
          <div className="education-meta">
            <p className="education-period">
              {education.period} {t("(Expected)", "（预计毕业）")}
            </p>
            <p className="gpa-row">
              <span className="gpa-badge">
                <strong>GPA</strong> {education.gpa}
              </span>
              <strong className="rank-badge">({education.rank})</strong>
            </p>
          </div>
        </div>
        <div
          className="university-logos"
          aria-label="Beijing Normal University × Hong Kong Baptist University"
        >
          <img
            src={asset("/assets/schools/beijing-normal-university.svg")}
            alt="Beijing Normal University"
            width={56}
            height={56}
          />
          <span className="university-connector" aria-hidden="true">
            X
          </span>
          <img
            src={asset("/assets/schools/hong-kong-baptist-university.png")}
            alt="Hong Kong Baptist University"
            width={56}
            height={56}
          />
        </div>
      </div>
      <div className="honors-info">
        <h2>
          <Award size={18} aria-hidden="true" />
          {t("Honors", "荣誉与奖学金")}
        </h2>
        <ul>
          {education.honors.map((honor) => {
            const logo = honorLogos[honor];
            return (
              <li key={honor} className={logo ? "honor-with-logo" : undefined}>
                <span>{honor}</span>
                {logo && (
                  <img
                    className="honor-logo"
                    src={asset(logo.src)}
                    alt={logo.alt}
                    width={44}
                    height={20}
                  />
                )}
              </li>
            );
          })}
        </ul>
      </div>
      <div className="internship-info">
        <h2>
          <Briefcase size={18} aria-hidden="true" />
          {t("Internship", "实习经历")}
        </h2>
        <ul>
          {internships.map((internship) => (
            <li key={internship.organization}>
              <h3>{internship.organization}</h3>
              <div className="internship-meta">
                <p>
                  <span>{internship.role}</span>
                  <span className="internship-duration">
                    {internship.months} {t("months", "个月")}
                  </span>
                </p>
                <img
                  className="internship-logo"
                  src={asset(internship.logo)}
                  alt={internship.logoAlt}
                  width={46}
                  height={28}
                />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
