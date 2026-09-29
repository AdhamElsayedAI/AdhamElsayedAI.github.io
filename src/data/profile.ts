import { assetPath } from "@/lib/assetPath";

export const profile = {
  name: "Adham Elsayed",
  role: "AI Engineer",
  tagline: "AI Engineer | Generative AI, Machine Learning & Computer Vision",
  intro:
    "Final-year AI Engineering student building complete AI systems across evidence-grounded GenAI/RAG, machine learning, computer vision, evaluation and edge deployment.",
  email: "adhamelsayed515@gmail.com",
  location: "Mansoura, Egypt",
  github: "https://github.com/AdhamElsayedAI",
  linkedin: "https://www.linkedin.com/in/adham-elsayed-",
  cv: assetPath("/Adham_Elsayed_CV.pdf"),
  portrait: assetPath("/images/adham-portrait-original.jpg"),
  website: "https://adhamelsayedai.github.io/",
} as const;

export const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Achievements", href: "#achievements" },
  { label: "Experience", href: "#experience" },
  { label: "Certifications", href: "#certifications" },
  { label: "Contact", href: "#contact" },
] as const;

export const heroTags = [
  "Generative AI",
  "RAG",
  "Machine Learning",
  "Computer Vision",
  "AI Evaluation",
  "Edge AI",
];

export const stats = [
  { value: "2nd", label: "AI Hackathon Mansoura 2026" },
  { value: "4", label: "Featured AI systems" },
  { value: "7/7", label: "MedFlow grounded cases" },
  { value: "2027", label: "Expected graduation" },
];
