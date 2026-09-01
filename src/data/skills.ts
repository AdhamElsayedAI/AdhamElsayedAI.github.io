export type SkillGroup = {
  name: string;
  description: string;
  skills: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    name: "Generative AI",
    description: "Grounded generation and useful LLM applications.",
    skills: ["RAG", "LLM APIs", "Prompt Engineering", "AI Agents", "Hugging Face", "Grounded Generation"],
  },
  {
    name: "Retrieval & LLM Engineering",
    description: "Search, fusion and measurable retrieval pipelines.",
    skills: ["ChromaDB", "Vector Databases", "BGE Embeddings", "Semantic Search", "BM25", "Reciprocal Rank Fusion", "Retrieval Evaluation"],
  },
  {
    name: "AI / Machine Learning",
    description: "Model development across vision and predictive systems.",
    skills: ["PyTorch", "TensorFlow", "Scikit-learn", "YOLO", "OpenCV"],
  },
  {
    name: "AI Evaluation",
    description: "Evidence, confidence and failure-aware evaluation.",
    skills: ["Precision@K", "Hit@K", "MRR", "Retrieval Evaluation", "Citation Validation", "Evidence Verification", "Confidence Thresholding", "Safety Guardrails"],
  },
  {
    name: "Backend / Engineering",
    description: "APIs and practical software delivery.",
    skills: ["Python", "FastAPI", "REST APIs", "Docker", "Git", "GitHub", "Linux"],
  },
  {
    name: "Edge / Applications",
    description: "On-device inference and connected applications.",
    skills: ["Raspberry Pi", "Firebase", "Flutter", "ONNX Runtime"],
  },
  {
    name: "Data",
    description: "Analysis and scalable data preparation.",
    skills: ["Pandas", "PySpark", "SQL", "Data Analysis"],
  },
];
