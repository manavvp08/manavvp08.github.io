import type { Metadata, Viewport } from "next";
import Sidebar from "./components/sidebar";
import CommandPalette from "./components/command-palette";
import MobileDock from "./components/mobile-dock";
import AskWidget from "./components/ask-widget";
import ScrollReset from "./components/scroll-reset";
import { SITE_URL, structuredData } from "./lib/seo";
import { themeInitScript } from "./lib/theme";
// @ts-ignore
import "./globals.css";

const description =
  "Manav Purswani is a Business Systems Analyst at Deloitte, building toward Product Analytics and Product Management through data-driven decisions and measurable delivery.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Manav Purswani — Business Systems Analyst → Product Analyst",
    template: "%s · Manav Purswani",
  },
  description,
  applicationName: "Manav Purswani",
  authors: [{ name: "Manav Purswani", url: SITE_URL }],
  creator: "Manav Purswani",
  publisher: "Manav Purswani",
  category: "business",
  keywords: [
    "Manav Purswani",
    "Business Systems Analyst",
    "Product Analyst",
    "Associate Product Manager",
    "Product Management",
    "SQL",
    "Data Analysis",
    "Root Cause Analysis",
    "Requirements Gathering",
    "Product Analytics",
    "Mumbai",
  ],
  alternates: {
    canonical: "/",
  },
  formatDetection: { email: false, telephone: false, address: false },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "profile",
    firstName: "Manav",
    lastName: "Purswani",
    username: "manav-purswani",
    title: "Manav Purswani — Business Systems Analyst → Product Analyst",
    description,
    url: SITE_URL,
    siteName: "Manav Purswani",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Manav Purswani — Business Systems Analyst → Product Analyst",
    description,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Stack+Sans+Headline&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body>
        <ScrollReset />
        <div className="lg:grid lg:h-[100dvh] lg:grid-cols-[268px_1fr] lg:overflow-hidden">
          <Sidebar />
          <main
            id="scroll-root"
            className="relative pb-28 lg:h-[100dvh] lg:overflow-y-auto lg:pb-0"
          >
            {children}
          </main>
        </div>
        <MobileDock />
        <AskWidget />
        <CommandPalette />
      </body>
    </html>
  );
}
