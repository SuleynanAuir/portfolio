import { LocaleProvider } from "@/components/locale-provider";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import type { Locale } from "@/data/site-copy";

export function ContentPage({
  locale,
  children,
}: {
  locale: Locale;
  children: React.ReactNode;
}) {
  return (
    <LocaleProvider locale={locale}>
      <Navigation />
      {children}
      <Footer />
    </LocaleProvider>
  );
}
