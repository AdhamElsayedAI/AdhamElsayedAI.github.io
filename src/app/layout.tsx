import type { Metadata, Viewport } from "next";
import { ThemeProvider, themeBootstrapScript } from "@/components/ThemeProvider";
import "./globals.css";
import "./reference.css";
import "./enhancements.css";
import "./portrait-v4.css";
import "./showcase-v5.css";
import "./polish-v6.css";
import "./portrait-v7.css";
import "./section-headings-v8.css";
import "./recruiter-v4.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://adhamelsayedai.github.io"),
  title: "Adham Elsayed | AI Engineer — Grounded GenAI, ML & Computer Vision",
  description:
    "AI Engineer building evidence-grounded RAG systems, adaptive learning platforms, machine-learning products and YOLO/ONNX edge computer-vision systems.",
  alternates: { canonical: "https://adhamelsayedai.github.io/" },
  authors: [{ name: "Adham Elsayed", url: "https://adhamelsayedai.github.io/" }],
  keywords: [
    "Adham Elsayed",
    "AI Engineer",
    "Generative AI",
    "RAG Engineer",
    "LLM Engineering",
    "AI Evaluation",
    "Machine Learning",
    "Computer Vision",
    "YOLO",
    "ONNX",
    "FastAPI",
    "Power BI",
    "Edge AI",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://adhamelsayedai.github.io/",
    siteName: "Adham Elsayed · AI Engineer",
    title: "Adham Elsayed | AI Engineer",
    description:
      "Grounded GenAI, measurable retrieval, adaptive learning, machine learning and edge computer vision.",
    images: [
      {
        url: "/og-image.svg",
        width: 1200,
        height: 630,
        alt: "Adham Elsayed — AI Engineer focused on Grounded GenAI, Machine Learning and Computer Vision",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Adham Elsayed | AI Engineer",
    description: "Grounded GenAI · RAG · Machine Learning · Computer Vision · Edge AI",
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

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Adham Elsayed",
  url: "https://adhamelsayedai.github.io/",
  jobTitle: "AI Engineer",
  sameAs: [
    "https://github.com/AdhamElsayedAI",
    "https://www.linkedin.com/in/adham-elsayed-",
  ],
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "Mansoura University",
  },
  knowsAbout: [
    "Generative AI",
    "Retrieval-Augmented Generation",
    "Machine Learning",
    "Computer Vision",
    "AI Evaluation",
    "FastAPI",
    "Edge AI",
  ],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const buildSha = process.env.NEXT_PUBLIC_BUILD_SHA ?? "local";

  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeBootstrapScript }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }} />
      </head>
      <body data-build-sha={buildSha}>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
