export type SkillGroup = {
  name: string;
  description: string;
  skills: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    name: "Generative AI & LLM Engineering",
    description: "Grounded generation, retrieval and practical LLM application engineering.",
    skills: ["RAG", "LLM APIs", "Prompt Engineering", "Grounded Generation", "BGE Embeddings", "ChromaDB", "BM25", "RRF", "NLI Verification", "Hugging Face"],
  },
  {
    name: "AI Evaluation & Safety",
    description: "Measurable retrieval quality, claim verification and fail-closed behavior.",
    skills: ["Precision@K", "Hit@K", "MRR", "Citation Validation", "Claim Verification", "Safety Guardrails", "Fail-Closed Fallbacks"],
  },
  {
    name: "Machine Learning & Computer Vision",
    description: "Model development across predictive, visual and deep-learning systems.",
    skills: ["PyTorch", "TensorFlow", "YOLO", "OpenCV", "Deep Learning", "CNNs", "NLP", "Object Detection"],
  },
  {
    name: "Backend, Data & BI",
    description: "APIs, data workflows and decision-focused analytics delivery.",
    skills: ["Python", "FastAPI", "REST APIs", "SQL", "Pandas", "Power BI", "DAX", "MLflow"],
  },
  {
    name: "Deployment, Edge & Tools",
    description: "Containerized, cloud-connected and on-device delivery workflows.",
    skills: ["Docker", "Git", "GitHub", "Azure AI", "Raspberry Pi 5", "ONNX Runtime", "Firebase", "Flutter", "Next.js", "Arduino", "C++"],
  },
];
