import studies from "@/data/project-studies.json";
import imageSources from "@/data/project-image-sources.json";

export type StudyText = { en: string; zh: string };
export type ProjectStudy = {
  sources: string[];
  overview: StudyText;
  hero: string;
  heroCaption: StudyText;
  stages: StudyText[];
  sections: {
    title: StudyText;
    paragraphs: StudyText[];
    image: string | null;
    caption: StudyText;
  }[];
  reproduction: StudyText;
  specifications: { label: StudyText; value: StudyText }[];
  metrics: { label: StudyText; value: string; context: string }[];
};
export function getProjectStudy(slug: string): ProjectStudy {
  return (studies as Record<string, ProjectStudy>)[slug];
}
export function studyImageSource(src: string) {
  return imageSources.find((image) => image.src === src)?.source;
}
export function studyImageSize(src: string) {
  return (
    imageSources.find((image) => image.src === src) ?? {
      width: 1000,
      height: 680,
    }
  );
}
