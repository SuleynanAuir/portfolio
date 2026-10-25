import { researchTopics } from "@/data/profile";

export function LogoMarquee() {
  return (
    <div className="marquee-outer">
      <div className="marquee-band">
        <ul className="research-topics" aria-label="Research topics">
          {researchTopics.map((topic, index) => (
            <li key={topic}>
              {topic}
              {index < researchTopics.length - 1 && (
                <span className="marquee-star" aria-hidden="true">
                  ✳
                </span>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
