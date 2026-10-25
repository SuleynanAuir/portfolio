"use client";
import { knowledgeGroups } from "@/data/profile";
import { useCopy } from "@/components/locale-provider";
export function CourseworkTags() {
  const { t } = useCopy();
  return (
    <div className="knowledge-tree">
      {knowledgeGroups.map((group, index) => (
        <section
          className={`knowledge-group knowledge-${group.color}`}
          key={group.en}
        >
          <h3>
            <span aria-hidden="true">0{index + 1}</span>
            {t(group.en, group.zh)}
          </h3>
          <ul>
            {group.items.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>
      ))}
    </div>
  );
}
