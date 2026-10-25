import type { MetadataRoute } from "next";
import { allProjects, siteUrl } from "@/lib/site-config";
import { getAllProjects } from "@/lib/project-notes";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = [
    "/",
    "/projects/",
    "/notes/",
    ...allProjects.map((project) => `/projects/${project.slug}/`),
    ...getAllProjects().map((note) => `/notes/${note.slug}/`),
  ];
  return paths.flatMap((path) => {
    const en = `${siteUrl}${path}`;
    const zh = `${siteUrl}/zh${path}`;
    const alternates = { languages: { en, "zh-CN": zh } };
    return [
      { url: en, alternates },
      { url: zh, alternates },
    ];
  });
}
