import type React from "react";
import type { Metadata } from "next";

import "./globals.css";
import { PageTransitions } from "@/components/page-transitions";

import localFont from "next/font/local";
import { site, siteUrl } from "@/lib/site-config";

const onest = localFont({
  src: [
    {
      path: "../public/fonts/onest-medium.ttf",
      weight: "500",
      style: "normal",
    },
    { path: "../public/fonts/onest-bold.ttf", weight: "700", style: "normal" },
  ],
  variable: "--font-onest",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(`${siteUrl}/`),
  title: {
    default: `${site.name} · AI Research Lab`,
    template: `%s · ${site.name}`,
  },
  description: site.description,
  authors: [{ name: site.name, url: site.github }],
  openGraph: {
    title: `${site.name} · AI Research Lab`,
    description: site.description,
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${onest.variable} font-sans antialiased`}>
        <PageTransitions>{children}</PageTransitions>
      </body>
    </html>
  );
}
