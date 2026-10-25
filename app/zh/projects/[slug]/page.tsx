import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { allProjects, findProject } from "@/lib/site-config";
import { getProjectDisplay } from "@/data/site-copy";
import { ContentPage } from "@/components/content-page";
import { getAllProjects, getProjectBySlug } from "@/lib/project-notes";
import { NoteDetail } from "@/components/note-detail";
import { ProjectDetail } from "@/components/project-detail";

type Props = { params: Promise<{ slug: string }> };
export const dynamicParams = false;
export function generateStaticParams() {
  return [
    ...new Set(
      [...allProjects, ...getAllProjects()].map((project) => project.slug),
    ),
  ].map((slug) => ({ slug }));
}
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = findProject(slug);
  const note = getProjectBySlug(slug);
  return {
    title: project?.name ?? note?.title,
    description: project
      ? getProjectDisplay(project, "zh").description
      : note?.summary,
  };
}
export default async function Page({ params }: Props) {
  const { slug } = await params;
  const project = findProject(slug);
  const note = getProjectBySlug(slug);
  if (!project && !note) notFound();
  return (
    <ContentPage locale="zh">
      {project ? (
        <ProjectDetail slug={project.slug} />
      ) : (
        <NoteDetail note={note!} />
      )}
    </ContentPage>
  );
}
