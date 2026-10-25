import { researchCategories } from "@/data/portfolio";
import imageDimensions from "@/data/image-dimensions.json";

export function imageSize(path: string) {
  return (
    (imageDimensions as Record<string, { width: number; height: number }>)[
      path
    ] ?? { width: 1200, height: 750 }
  );
}

/** Personal details and deployment settings shared by every page. */
export const site = {
  name: "Suleynan Aiur",
  title: "AI Research Lab",
  github: "https://github.com/SuleynanAuir",
  avatar: "/assets/web_page/head_img.jpeg",
  logo: "/assets/web_page/logo.png",
  description:
    "AI research portfolio: autonomous agents, foundation models, scientific AI, machine learning, reinforcement learning and multimodal intelligence.",
};

export const basePath = (process.env.NEXT_PUBLIC_BASE_PATH ?? "").replace(
  /\/$/,
  "",
);
export const siteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL ??
  `https://suleynanauir.github.io${basePath}`
).replace(/\/$/, "");
export function asset(path: string) {
  return `${basePath}${path}`;
}
export function projectImage(path: string) {
  return asset(
    path
      .replace("/assets/web_page/", "/assets/optimized/")
      .replace(/\.(png|jpe?g)$/i, ".webp"),
  );
}
export const categoryColors = [
  "#ffc224",
  "#a7a5ff",
  "#bce8ca",
  "#ff9ca8",
  "#9ac5ff",
  "#ffce9a",
];
export const categoryId = (index: number) => `research-${index + 1}`;
export function projectSlug(name: string) {
  return name
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}
export const allProjects = researchCategories.flatMap(
  (category, categoryIndex) =>
    category.projects.map((project) => ({
      ...project,
      slug: projectSlug(project.name),
      category,
      categoryIndex,
    })),
);

/** Retain cvweb's original project URLs and connect its Markdown notes to richer evidence. */
export const noteProjectSlugs: Record<string, string> = {
  "agent-you-mustknows": "agent-you-mustknows",
  "cognitive-temp-deepsearch-agents": "cognitivetemp-deepsearch-agents",
  "llama-factory-pipeline": "llama-factory-fine-tuning",
  nexus: "nexus",
  "nexus-simulator": "nexus",
  "p-adonis": "p-adonis-ocr",
  peanut: "peanut-video-restoration",
  "qwen-finetuning": "qwen-hotelservice-master",
  "upairs-agents": "uparis-ds-agents",
};

export function findProject(slug: string) {
  return allProjects.find(
    (project) => project.slug === (noteProjectSlugs[slug] ?? slug),
  );
}
