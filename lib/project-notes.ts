import fs from "node:fs";
import path from "node:path";

export type ProjectCategory =
  | "Agent Systems"
  | "LLM Engineering"
  | "Computer Vision"
  | "Machine Learning"
  | "Research Notes";

export type Project = {
  slug: string;
  title: string;
  category: ProjectCategory;
  year: number;
  status: string;
  summary: string;
  focus: string;
  difficulty: string;
  github?: string;
  papers: string[];
  tags: string[];
  stack: string[];
  featured: boolean;
  body: string;
};

type FrontmatterValue = string | number | boolean | string[];

const projectsDirectory = path.join(process.cwd(), "content/projects");

export function getAllProjects(): Project[] {
  if (!fs.existsSync(projectsDirectory)) {
    return [];
  }

  return fs
    .readdirSync(projectsDirectory)
    .filter((fileName) => fileName.endsWith(".md"))
    .map((fileName) => readProject(fileName))
    .sort((a, b) => {
      if (a.featured !== b.featured) {
        return a.featured ? -1 : 1;
      }

      return b.year - a.year || a.title.localeCompare(b.title);
    });
}

export function getProjectBySlug(slug: string): Project | undefined {
  return getAllProjects().find((project) => project.slug === slug);
}

export function getProjectStats(projects: Project[]) {
  const categories = new Set(projects.map((project) => project.category));
  const featured = projects.filter((project) => project.featured).length;

  return [
    { label: "Projects", value: projects.length },
    { label: "Areas", value: categories.size },
    { label: "Featured", value: featured },
  ];
}

function readProject(fileName: string): Project {
  const fullPath = path.join(projectsDirectory, fileName);
  const raw = fs.readFileSync(fullPath, "utf8");
  const { frontmatter, body } = parseMarkdown(raw);
  const slug = fileName.replace(/\.md$/, "");

  return {
    slug,
    title: requireString(frontmatter.title, "title", slug),
    category: requireString(
      frontmatter.category,
      "category",
      slug,
    ) as ProjectCategory,
    year: requireNumber(frontmatter.year, "year", slug),
    status: requireString(frontmatter.status, "status", slug),
    summary: requireString(frontmatter.summary, "summary", slug),
    focus: requireString(frontmatter.focus, "focus", slug),
    difficulty: requireString(frontmatter.difficulty, "difficulty", slug),
    github: optionalString(frontmatter.github),
    papers: requireStringArray(frontmatter.papers, "papers", slug),
    tags: requireStringArray(frontmatter.tags, "tags", slug),
    stack: requireStringArray(frontmatter.stack, "stack", slug),
    featured: Boolean(frontmatter.featured),
    body,
  };
}

function parseMarkdown(raw: string): {
  frontmatter: Record<string, FrontmatterValue>;
  body: string;
} {
  const match = raw.match(/^---\n([\s\S]*?)\n---\n?([\s\S]*)$/);

  if (!match) {
    return { frontmatter: {}, body: raw.trim() };
  }

  const frontmatter = Object.fromEntries(
    match[1]
      .split("\n")
      .map((line) => line.trim())
      .filter(Boolean)
      .map((line) => {
        const separatorIndex = line.indexOf(":");

        if (separatorIndex === -1) {
          throw new Error(`Invalid frontmatter line: "${line}"`);
        }

        const key = line.slice(0, separatorIndex).trim();
        const value = line.slice(separatorIndex + 1).trim();

        return [key, parseFrontmatterValue(value)];
      }),
  );

  return {
    frontmatter,
    body: match[2].trim(),
  };
}

function parseFrontmatterValue(value: string): FrontmatterValue {
  if (value === "true") {
    return true;
  }

  if (value === "false") {
    return false;
  }

  if (/^\d+$/.test(value)) {
    return Number(value);
  }

  if (value.startsWith("[") && value.endsWith("]")) {
    return value
      .slice(1, -1)
      .split(",")
      .map((item) => stripQuotes(item.trim()))
      .filter(Boolean);
  }

  return stripQuotes(value);
}

function stripQuotes(value: string) {
  return value.replace(/^["']|["']$/g, "");
}

function requireString(
  value: FrontmatterValue | undefined,
  key: string,
  slug: string,
) {
  if (typeof value !== "string" || !value) {
    throw new Error(`Project "${slug}" requires a string "${key}" field.`);
  }

  return value;
}

function requireNumber(
  value: FrontmatterValue | undefined,
  key: string,
  slug: string,
) {
  if (typeof value !== "number") {
    throw new Error(`Project "${slug}" requires a number "${key}" field.`);
  }

  return value;
}

function requireStringArray(
  value: FrontmatterValue | undefined,
  key: string,
  slug: string,
) {
  if (!Array.isArray(value)) {
    throw new Error(
      `Project "${slug}" requires a string array "${key}" field.`,
    );
  }

  return value;
}

function optionalString(value: FrontmatterValue | undefined) {
  return typeof value === "string" && value.length > 0 ? value : undefined;
}
