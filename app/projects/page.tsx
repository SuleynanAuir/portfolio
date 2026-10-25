import { ContentPage } from "@/components/content-page";
import { PortfolioSection } from "@/components/portfolio-section";
export default function Page() {
  return (
    <ContentPage locale="en">
      <main id="main-content">
        <PortfolioSection />
      </main>
    </ContentPage>
  );
}
