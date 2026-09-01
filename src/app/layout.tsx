import type { Metadata, Viewport } from "next";
import { ThemeProvider, themeBootstrapScript } from "@/components/ThemeProvider";
import "./globals.css";
import "./reference.css";
import "./enhancements.css";
import "./portrait-v4.css";
import "./showcase-v5.css";
import "./polish-v6.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://adhamelsayedai.github.io"),
  title: "Adham Elsayed | AI Engineer",
  description:
    "AI Engineer focused on Generative AI, RAG, Computer Vision, Edge AI and intelligent systems.",
  alternates: { canonical: "https://adhamelsayedai.github.io/" },
  authors: [{ name: "Adham Elsayed", url: "https://adhamelsayedai.github.io/" }],
  keywords: [
    "Adham Elsayed",
    "AI Engineer",
    "Generative AI",
    "RAG",
    "Computer Vision",
    "Edge AI",
    "Machine Learning",
    "AI Evaluation",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://adhamelsayedai.github.io/",
    siteName: "Adham Elsayed · AI Engineer",
    title: "Adham Elsayed | AI Engineer",
    description:
      "Generative AI, RAG, Computer Vision, Edge AI and intelligent systems built around measurable behavior.",
    images: [
      {
        url: "/og-image.svg",
        width: 1200,
        height: 630,
        alt: "Adham Elsayed — AI Engineer focused on Generative AI, RAG and Computer Vision",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Adham Elsayed | AI Engineer",
    description: "Generative AI · RAG · Computer Vision · Edge AI",
    images: ["/og-image.svg"],
  },
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg", apple: "/favicon.svg" },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f7f6f9" },
    { media: "(prefers-color-scheme: dark)", color: "#050507" },
  ],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const buildSha = process.env.NEXT_PUBLIC_BUILD_SHA ?? "local";

  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeBootstrapScript }} />
      </head>
      <body data-build-sha={buildSha}>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
