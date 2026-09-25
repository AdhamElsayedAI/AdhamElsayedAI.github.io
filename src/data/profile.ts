import { assetPath } from "@/lib/assetPath";

export const profile = {
  name: "Adham Elsayed",
  role: "AI Engineer",
  tagline: "AI Engineer | Grounded GenAI · Machine Learning · Computer Vision",
  intro: "I engineer AI systems that can be evaluated, traced and deployed — from evidence-grounded RAG and adaptive learning to computer vision, edge inference and intelligent products.",
  email: "adhamelsayed515@gmail.com",
  location: "Mansoura, Egypt",
  github: "https://github.com/AdhamElsayedAI",
  linkedin: "https://www.linkedin.com/in/adham-elsayed-",
  cv: assetPath("/Adham_Elsayed_CV.pdf"),
  portrait: assetPath("/images/adham-transparent-v2.png"),
  website: "https://adhamelsayedai.github.io/",
} as const;

export const navItems = [
  { label: "Work", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "About", href: "#about" },
  { label: "Stack", href: "#skills" },
  { label: "Credentials", href: "#certifications" },
  { label: "Contact", href: "#contact" },
] as const;
