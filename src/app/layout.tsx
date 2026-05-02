import type { Metadata } from "next";
import { Heebo } from "next/font/google";

import { siteContent } from "@content/site";
import { siteAssets } from "@/lib/site-assets";
import "./globals.css";

const heebo = Heebo({
  subsets: ["hebrew", "latin"],
  display: "swap",
  variable: "--font-heebo",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteContent.config.metadata.domain),
  title: {
    default: siteContent.config.metadata.title,
    template: `%s | ${siteContent.config.brand.name}`,
  },
  description: siteContent.config.metadata.description,
  applicationName: siteContent.config.brand.name,
  keywords: [
    "מסאז' תאילנדי בירושלים",
    "עיסוי תאילנדי ירושלים",
    "עיסוי בשמן ירושלים",
    "פוט מסאז' ירושלים",
    "Original Thai Massage Jerusalem",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: siteContent.config.metadata.title,
    description: siteContent.config.metadata.description,
    url: siteContent.config.metadata.domain,
    siteName: siteContent.config.brand.name,
    images: [
      {
        url: siteAssets.logo,
        width: 1024,
        height: 1024,
        alt: siteContent.config.brand.name,
      },
    ],
    locale: "he_IL",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: siteContent.config.metadata.title,
    description: siteContent.config.metadata.description,
    images: [siteAssets.logo],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: siteAssets.logo,
    shortcut: siteAssets.logo,
    apple: siteAssets.logo,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="he" dir="rtl">
      <body className={`${heebo.variable} antialiased`}>{children}</body>
    </html>
  );
}
