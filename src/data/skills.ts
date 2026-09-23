export type SkillGroup = {
  name: string;
  description: string;
  skills: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    name: "Generative AI & RAG",
    description: "Grounded generation, retrieval pipelines and useful LLM applications.",
    skills: ["RAG", "LLM APIs", "Prompt Engineering", "Grounded Generation", "BGE Embeddings", "ChromaDB", "BM25", "RRF"],
  },
  {
    name: "AI Evaluation & Safety",
    description: "Evidence, measurable retrieval quality and fail-closed behavior.",
    skills: ["Precision@K", "Hit@K", "MRR", "Citation Validation", "Claim Verification", "NLI Verification", "Provenance Gating", "Safety Guardrails", "Fail-Closed Fallbacks"],
  },
  {
    name: "Machine Learning & Vision",
    description: "Model development across predictive systems and computer vision.",
    skills: ["PyTorch", "TensorFlow", "Scikit-learn", "YOLO", "OpenCV", "Deep Learning", "CNNs", "Object Detection"],
  },
  {
    name: "Backend & AI Engineering",
    description: "APIs, service boundaries and production-minded software delivery.",
    skills: ["Python", "FastAPI", "REST APIs", "Docker", "Git", "GitHub", "Linux", "MLflow"],
  },
  {
    name: "Edge & Applications",
    description: "On-device inference and connected application delivery.",
    skills: ["Raspberry Pi 5", "ONNX Runtime", "Firebase", "Flutter", "Next.js", "Three.js"],
  },
  {
    name: "Data & BI",
    description: "Analysis, business intelligence and scalable data preparation.",
    skills: ["Pandas", "PySpark", "SQL", "Power BI", "DAX", "Data Cleaning", "Data Validation"],
  },
];
