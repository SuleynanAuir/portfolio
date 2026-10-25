import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getAllProjects, getProjectBySlug } from "@/lib/project-notes";
import { ContentPage } from "@/components/content-page";
import { NoteDetail } from "@/components/note-detail";

type Props = { params: Promise<{ slug: string }> };
export const dynamicParams = false;
export function generateStaticParams() {
  return getAllProjects().map(({ slug }) => ({ slug }));
}
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const note = getProjectBySlug((await params).slug);
  return { title: note?.title, description: note?.summary };
}
export default async function Page({ params }: Props) {
  const note = getProjectBySlug((await params).slug);
  if (!note) notFound();
  return (
    <ContentPage locale="en">
      <NoteDetail note={note} />
    </ContentPage>
  );
}
