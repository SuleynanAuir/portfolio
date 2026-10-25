"use client";

import { createContext, useContext, useEffect } from "react";
import type { Locale } from "@/data/site-copy";

const LocaleContext = createContext<Locale>("en");
export function LocaleProvider({
  locale,
  children,
}: {
  locale: Locale;
  children: React.ReactNode;
}) {
  useEffect(() => {
    document.documentElement.lang = locale === "zh" ? "zh-CN" : "en";
  }, [locale]);
  return (
    <LocaleContext.Provider value={locale}>{children}</LocaleContext.Provider>
  );
}
export function useCopy() {
  const locale = useContext(LocaleContext);
  return {
    locale,
    t: (en: string, zh: string) => (locale === "zh" ? zh : en),
    href: (path = "/") =>
      locale === "zh" ? `/zh${path === "/" ? "/" : path}` : path,
  };
}
