export type Certification = {
  title: string;
  issuer: string;
  category: "GenAI" | "AI / ML" | "Data" | "Programs";
  year?: string;
  featured?: boolean;
  initials: string;
  brand: "anthropic" | "cisco" | "simplilearn" | "one-million" | "microsoft" | "ibm" | "huawei" | "st-smart" | "zewail" | "impact";
};

export const certifications: Certification[] = [
  { title: "Building with the Claude API", issuer: "Anthropic · Claude Academy", category: "GenAI", featured: true, initials: "A", brand: "anthropic" },
  { title: "Develop a Generative AI Chat App with Microsoft Foundry", issuer: "Microsoft", category: "GenAI", featured: true, initials: "MS", brand: "microsoft" },
  { title: "Introduction to Generative AI and Agents", issuer: "Microsoft", category: "GenAI", featured: true, initials: "MS", brand: "microsoft" },
  { title: "HCIA-AI V3.5", issuer: "Huawei", category: "AI / ML", year: "2025", featured: true, initials: "HUAWEI", brand: "huawei" },
  { title: "Exploring Artificial Intelligence", issuer: "IBM SkillsBuild", category: "AI / ML", featured: true, initials: "IBM", brand: "ibm" },
  { title: "Introduction to Modern AI", issuer: "Cisco Networking Academy", category: "AI / ML", featured: true, initials: "CISCO", brand: "cisco" },
  { title: "Python Essentials 1", issuer: "Cisco Networking Academy", category: "Programs", initials: "CISCO", brand: "cisco" },
  { title: "Generative AI", issuer: "Simplilearn SkillUp", category: "GenAI", initials: "SL", brand: "simplilearn" },
  { title: "One Million Prompts — Prompt Engineering", issuer: "One Million Prompts", category: "GenAI", initials: "1M", brand: "one-million" },
  { title: "Introduction to Data Science", issuer: "Cisco Networking Academy", category: "Data", initials: "CISCO", brand: "cisco" },
  { title: "Robotics Programming Training", issuer: "ST Smart", category: "Programs", year: "2025", initials: "ST", brand: "st-smart" },
  { title: "Introduction to AI & Applications", issuer: "Zewail City of Science and Technology", category: "AI / ML", year: "2025", initials: "ZC", brand: "zewail" },
  { title: "Artificial Intelligence Training Program", issuer: "IMPACT", category: "Programs", year: "2024", initials: "IM", brand: "impact" },
];
