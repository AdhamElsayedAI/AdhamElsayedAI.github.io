export type SkillGroup = { name: string; description: string; evidence: string; skills: string[] };

export const skillGroups: SkillGroup[] = [
  { name: "Generative AI & RAG", description: "Grounded generation and hybrid retrieval pipelines.", evidence: "MedFlow · MedicalPlab", skills: ["RAG", "LLM APIs", "Prompt Engineering", "Grounded Generation", "BGE Embeddings", "ChromaDB", "BM25", "RRF"] },
  { name: "AI Evaluation & Safety", description: "Retrieval measurement, claim checks and fail-closed behavior.", evidence: "MedFlow evaluation · MedicalPlab SAFE_FALLBACK", skills: ["Precision@K", "Hit@K", "MRR", "Citation Validation", "Claim Verification", "NLI Verification", "Safety Guardrails", "Fail-Closed Fallbacks"] },
  { name: "Machine Learning & Vision", description: "Model development for predictive and visual systems.", evidence: "Smart Basket · Code AI Proctor", skills: ["PyTorch", "TensorFlow", "YOLO", "OpenCV", "Deep Learning", "CNNs", "NLP", "Object Detection"] },
  { name: "Backend, Data & BI", description: "Services, analysis and observable delivery surfaces.", evidence: "FastAPI systems · VOLTIX HR analytics", skills: ["Python", "FastAPI", "REST APIs", "SQL", "Pandas", "Power BI", "DAX", "MLflow"] },
  { name: "Deployment, Edge & Tools", description: "Static, containerized and on-device delivery.", evidence: "Raspberry Pi 5 edge inference · portfolio static export", skills: ["Docker", "Git", "GitHub", "Azure AI", "Raspberry Pi 5", "ONNX Runtime", "Firebase", "Flutter", "Next.js", "Arduino", "C++"] },
];
