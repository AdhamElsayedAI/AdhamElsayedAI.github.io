export type Certification = {
  title: string;
  issuer: string;
  category: "GenAI" | "AI / ML" | "Data" | "Programs";
  year?: string;
  initials: string;
  issuerDomain?: string;
};

export const certifications: Certification[] = [
  { title: "Building with the Claude API", issuer: "Anthropic · Claude Academy", category: "GenAI", initials: "A", issuerDomain: "anthropic.com" },
  { title: "Python Essentials 1", issuer: "Cisco Networking Academy", category: "Programs", initials: "C", issuerDomain: "netacad.com" },
  { title: "Generative AI", issuer: "Simplilearn SkillUp", category: "GenAI", initials: "S", issuerDomain: "simplilearn.com" },
  { title: "One Million Prompts — Prompt Engineering", issuer: "One Million Prompts", category: "GenAI", initials: "1M", issuerDomain: "onemillionprompts.com" },
  { title: "Introduction to Modern AI", issuer: "Cisco Networking Academy", category: "AI / ML", initials: "C", issuerDomain: "netacad.com" },
  { title: "Introduction to Generative AI and Agents", issuer: "Microsoft", category: "GenAI", initials: "M", issuerDomain: "microsoft.com" },
  { title: "Develop a Generative AI Chat App with Microsoft Foundry", issuer: "Microsoft", category: "GenAI", initials: "M", issuerDomain: "microsoft.com" },
  { title: "Introduction to Data Science", issuer: "Cisco Networking Academy", category: "Data", initials: "C", issuerDomain: "netacad.com" },
  { title: "Exploring Artificial Intelligence", issuer: "IBM SkillsBuild", category: "AI / ML", initials: "IBM", issuerDomain: "ibm.com" },
  { title: "HCIA-AI V3.5", issuer: "Huawei", category: "AI / ML", year: "2025", initials: "H", issuerDomain: "huawei.com" },
  { title: "Robotics Programming Training", issuer: "ST Smart", category: "Programs", year: "2025", initials: "ST" },
  { title: "Introduction to AI & Applications", issuer: "Zewail City of Science and Technology", category: "AI / ML", year: "2025", initials: "ZC", issuerDomain: "zewailcity.edu.eg" },
  { title: "Artificial Intelligence Training Program", issuer: "IMPACT", category: "Programs", year: "2024", initials: "I" },
];
