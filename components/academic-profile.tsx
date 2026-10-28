"use client";

import { FlaskConical } from "lucide-react";
import { education, researchLaboratories } from "@/data/profile";
import { useCopy } from "@/components/locale-provider";
import { asset } from "@/lib/site-config";

export function AcademicProfile() {
  const { t } = useCopy();
  return (
    <section
      className="academic-profile"
      aria-label={t(
        "Education and research laboratories",
        "教育背景与研究实验室",
      )}
    >
      <div className="academic-education">
        <p className="academic-institution">{education.institution}</p>
        <h2>{education.degree}</h2>
        <div className="academic-record">
          <p className="academic-period">
            {education.period} {t("(Expected)", "（预计毕业）")}
          </p>
          <p className="gpa-row">
            <span className="gpa-badge">
              <strong>GPA</strong> {education.gpa}
            </span>
            <strong className="rank-badge">({education.rank})</strong>
          </p>
        </div>
        <div className="academic-credentials">
          <div
            className="university-logos"
            aria-label="Beijing Normal University × Hong Kong Baptist University"
          >
            <img
              src={asset("/assets/schools/beijing-normal-university.svg")}
              alt="Beijing Normal University"
              width={54}
              height={54}
            />
            <span className="university-connector" aria-hidden="true">
              X
            </span>
            <img
              src={asset("/assets/schools/hong-kong-baptist-university.png")}
              alt="Hong Kong Baptist University"
              width={54}
              height={54}
            />
          </div>
        </div>
      </div>
      <div className="academic-laboratories">
        <h2 className="profile-section-heading">
          <FlaskConical size={24} aria-hidden="true" />
          <span className="brush-label">
            {t("Research Experience", "研究实验室")}
          </span>
        </h2>
        <ul>
          {researchLaboratories.map((lab) => (
            <li
              key={lab.name}
              className={`laboratory-item laboratory-${lab.color}`}
            >
              <h3>
                {lab.name}{" "}
                <span className="laboratory-period">
                  {t(lab.period, lab.periodZh)}
                </span>
              </h3>
              <div className="laboratory-meta">
                <span className={`laboratory-label${lab.label === "China National AI Research Institute" ? " institution-emphasis" : ""}`}>{lab.label}</span>
                <span className="laboratory-role">
                  <span className="role-caption">Role</span>{" "}
                  <span className="research-role">{lab.role}</span> +{" "}
                  <strong className={lab.distinction === "First Patent Inventor" ? "patent-distinction" : undefined}>{lab.distinction}</strong>
                </span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
