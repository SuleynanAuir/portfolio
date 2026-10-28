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
  return paths.map((path) => ({ url: `${siteUrl}${path}` }));
}
