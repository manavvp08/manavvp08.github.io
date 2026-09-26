import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Manav Purswani · Product Portfolio",
    short_name: "Manav Purswani",
    description:
      "Business Systems Analyst building toward Product Analytics and Product Management.",
    start_url: "/",
    display: "standalone",
    background_color: "#0a0a0b",
    theme_color: "#0a0a0b",
    icons: [
      {
        src: `${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/icon.svg`,
        sizes: "any",
        type: "image/svg+xml",
      },
    ],
  };
}
