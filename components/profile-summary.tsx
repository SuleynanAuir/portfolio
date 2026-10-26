"use client";

import { InternshipEntry } from "@/components/internship-entry";
import { Award, Briefcase, Globe2 } from "lucide-react";
import {
  activities,
  education,
  honorLogos,
  honorRoles,
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
        "Internships, activities and honors",
        "实习、活动实践与荣誉",
      )}
    >
      <div className="internship-info">
        <h2 className="profile-section-heading">
          <Briefcase size={24} aria-hidden="true" />
          <span className="brush-label">{t("Internship", "实习经历")}</span>
        </h2>
        <ul>
          {internships.map((internship) => (
            <InternshipEntry
              key={internship.organization}
              internship={internship}
            />
          ))}
        </ul>
      </div>
      <div className="activities-info">
        <h2 className="profile-section-heading">
          <Globe2 size={24} aria-hidden="true" />
          <span className="brush-label">
            {t("Activities & Practice", "活动与实践")}
          </span>
        </h2>
        <ul>
          {activities.map((activity, index) => (
            <li
              key={activity.name}
              className={`activity-item activity-${index + 1}`}
            >
              <div className="activity-copy">
                <div className="activity-heading">
                  <div
                    className={
                      index === 0 ? "activity-inline-title" : undefined
                    }
                  >
                    <h3>{activity.name}</h3>
                    {index === 0 && <p>Taiwan, China · Jun 2024</p>}
                  </div>
                </div>
                {index !== 0 && <p>{activity.details}</p>}
                <ul className="activity-tags" aria-label={t("Topics", "主题")}>
                  {activity.tags.map((tag) => (
                    <li key={tag}>{tag}</li>
                  ))}
                </ul>
              </div>
              <img
                className="activity-logo"
                src={asset(activity.logo)}
                alt={activity.logoAlt}
                width={56}
                height={56}
              />
            </li>
          ))}
        </ul>
      </div>
      <div className="honors-info">
        <h2 className="profile-section-heading">
          <Award size={24} aria-hidden="true" />
          <span className="brush-label">{t("Honors", "荣誉与奖学金")}</span>
        </h2>
        <ul>
          {education.honors.map((honor) => {
            const logo = honorLogos[honor];
            const role = honorRoles[honor];
            const ranking = honor.match(/\((2nd Place|Top \d+%)\)$/)?.[1];
            const title = ranking ? honor.replace(/ \([^)]*\)$/, "") : honor;
            return (
              <li key={honor} className={logo ? "honor-with-logo" : undefined}>
                {role && ranking ? (
                  <>
                    <span className="honor-title">{title}</span>
                    <span className="honor-details">
                      <strong className="honor-emphasis">({ranking})</strong>
                      <span className="honor-role">{role}</span>
                    </span>
                  </>
                ) : (
                  <span>
                    {honor.split(/(× 3)/g).map((part, index) =>
                      part === "× 3" ? (
                        <strong key={index} className="honor-emphasis">
                          {part}
                        </strong>
                      ) : (
                        part
                      ),
                    )}
                  </span>
                )}
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
    </section>
  );
}
