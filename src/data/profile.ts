import { assetPath } from "@/lib/assetPath";

export const profile = {
  name: "Adham Elsayed",
  role: "AI Engineer",
  tagline: "AI Engineer | Grounded GenAI · Machine Learning · Computer Vision",
  intro:
    "I engineer AI systems that can be evaluated, traced and deployed — from evidence-grounded RAG and adaptive learning to YOLO/ONNX edge inference and analytics products.",
  email: "adhamelsayed515@gmail.com",
  location: "Mansoura, Egypt",
  github: "https://github.com/AdhamElsayedAI",
  linkedin: "https://www.linkedin.com/in/adham-elsayed-",
  cv: assetPath("/Adham_Elsayed_CV.pdf"),
  portrait: assetPath("/images/adham-transparent-v2.png"),
  website: "https://adhamelsayedai.github.io/",
} as const;

export const navItems = [
  { label: "Home", href: "#home" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Achievements", href: "#achievements" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Certifications", href: "#certifications" },
  { label: "Contact", href: "#contact" },
] as const;

export const heroTags = [
  "Generative AI",
  "RAG",
  "AI Evaluation",
  "Computer Vision",
  "FastAPI",
  "Edge AI",
];

export const stats = [
  { value: "2nd", label: "AI Hackathon", context: "Mansoura 2026" },
  { value: "87.50%", label: "Hit@4", context: "MedFlow retrieval" },
  { value: "96.89%", label: "mAP@0.5", context: "Smart Basket YOLO" },
  { value: "1,470", label: "employee records", context: "VOLTIX BI analysis" },
] as const;
