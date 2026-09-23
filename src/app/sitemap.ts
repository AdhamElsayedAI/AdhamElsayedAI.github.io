import type { MetadataRoute } from "next";
export default function sitemap(): MetadataRoute.Sitemap {
  return [{ url: "https://adhamelsayedai.github.io/", changeFrequency: "monthly", priority: 1 }];
}
