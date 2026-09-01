export type Certification = {
  title: string;
  issuer: string;
  category: "GenAI" | "AI / ML" | "Data" | "Programs";
  year?: string;
  initials: string;
};

export const certifications: Certification[] = [
  { title: "Building with the Claude API", issuer: "Anthropic · Claude Academy", category: "GenAI", initials: "AN" },
  { title: "Python Essentials 1", issuer: "Cisco Networking Academy", category: "Programs", initials: "CS" },
  { title: "Generative AI", issuer: "Simplilearn SkillUp", category: "GenAI", initials: "SU" },
  { title: "One Million Prompts — Prompt Engineering", issuer: "One Million Prompts", category: "GenAI", initials: "1M" },
  { title: "Introduction to Modern AI", issuer: "Cisco Networking Academy", category: "AI / ML", initials: "CS" },
  { title: "Introduction to Generative AI and Agents", issuer: "Microsoft", category: "GenAI", initials: "MS" },
  { title: "Develop a Generative AI Chat App with Microsoft Foundry", issuer: "Microsoft", category: "GenAI", initials: "MS" },
  { title: "Introduction to Data Science", issuer: "Cisco Networking Academy", category: "Data", initials: "CS" },
  { title: "Exploring Artificial Intelligence", issuer: "IBM SkillsBuild", category: "AI / ML", initials: "IBM" },
  { title: "HCIA-AI V3.5", issuer: "Huawei", category: "AI / ML", year: "2025", initials: "HW" },
  { title: "Robotics Programming Training", issuer: "ST Smart", category: "Programs", year: "2025", initials: "RT" },
  { title: "Introduction to AI & Applications", issuer: "Zewail City of Science and Technology", category: "AI / ML", year: "2025", initials: "ZC" },
  { title: "Artificial Intelligence Training Program", issuer: "IMPACT", category: "Programs", year: "2024", initials: "AI" },
];
