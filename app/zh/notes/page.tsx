import { ContentPage } from "@/components/content-page";
import { ArticlesSection } from "@/components/articles-section";
import { getAllProjects } from "@/lib/project-notes";
export default function Page() {
  return (
    <ContentPage locale="zh">
      <main id="main-content">
        <ArticlesSection notes={getAllProjects()} />
      </main>
    </ContentPage>
  );
}
