import { Navigation } from "@/components/navigation";
import { HeroSection } from "@/components/hero-section";
import { PortfolioSection } from "@/components/portfolio-section";
import { FeaturedProjects } from "@/components/featured-projects";
import { Footer } from "@/components/footer";
import { LocaleProvider } from "@/components/locale-provider";
import type { Locale } from "@/data/site-copy";

export function HomePage({ locale = "en" }: { locale?: Locale }) {
  return (
    <LocaleProvider locale={locale}>
      <main id="main-content">
        <section
          className="home-intro page-panel"
          data-page-panel
          data-page-label={locale === "zh" ? "关于" : "About"}
        >
          <Navigation />
          <HeroSection />
        </section>
        <section
          className="selected-page page-panel"
          data-page-panel
          data-page-label={locale === "zh" ? "推荐项目" : "Selected projects"}
        >
          <FeaturedProjects />
          <Footer compact />
        </section>
        <PortfolioSection />
      </main>
    </LocaleProvider>
  );
}
