export type SkillGroup = { name: string; description: string; evidence: string; skills: string[] };

export const skillGroups: SkillGroup[] = [
  { name: "Generative AI & RAG", description: "Grounded generation and hybrid retrieval pipelines.", evidence: "MedFlow · MedicalPlab", skills: ["RAG", "BGE", "BM25", "RRF", "ChromaDB", "LLM APIs"] },
  { name: "AI Evaluation & Safety", description: "Retrieval measurement, claim checks and fail-closed behavior.", evidence: "MedFlow evaluation · MedicalPlab SAFE_FALLBACK", skills: ["Precision@K", "Hit@K", "MRR", "Citation Validation", "NLI", "SAFE_FALLBACK"] },
  { name: "Machine Learning & Vision", description: "Model development for predictive and visual systems.", evidence: "Smart Basket · Code AI Proctor", skills: ["PyTorch", "YOLO", "OpenCV", "ONNX Runtime", "Object Detection"] },
  { name: "Backend, Data & BI", description: "Services, analysis and observable delivery surfaces.", evidence: "FastAPI systems · VOLTIX HR analytics", skills: ["Python", "FastAPI", "SQL", "Pandas", "Power BI", "DAX"] },
  { name: "Deployment, Edge & Tools", description: "Static, containerized and on-device delivery.", evidence: "Raspberry Pi 5 edge inference · portfolio static export", skills: ["Docker", "GitHub Actions", "Raspberry Pi 5", "Firebase", "Next.js"] },
];
