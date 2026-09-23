import type { MetadataRoute } from "next";

export const dynamic = "force-static";
export default function sitemap(): MetadataRoute.Sitemap {
  return [{ url: "https://adhamelsayedai.github.io/", changeFrequency: "monthly", priority: 1 }];
}
