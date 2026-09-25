import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Manav Purswani — Product Analyst",
  description:
    "Product analytics portfolio of Manav Purswani: product thinking, measurable delivery, and selected product work.",
  authors: [{ name: "Manav Purswani", url: "https://github.com/manavvp08" }],
  openGraph: {
    title: "Manav Purswani — Product Analyst",
    description: "Product thinking, measurable delivery, and selected product work.",
    type: "profile",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
