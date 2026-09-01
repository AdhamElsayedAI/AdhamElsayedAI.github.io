import { assetPath } from "@/lib/assetPath";

export type Project = {
  title: string;
  category: string;
  description: string;
  technologies: string[];
  github: string;
  icon: "basket" | "shield" | "chart" | "spark";
  metrics?: Array<{ label: string; value: string }>;
};

export const medflow = {
  title: "MedFlow-AI",
  category: "Generative AI / RAG / Healthcare AI",
  description:
    "Evidence-grounded clinical AI system using retrieval-augmented generation, verifiable citations, safety guardrails and evaluation-driven engineering.",
  technologies: [
    "RAG",
    "BGE",
    "ChromaDB",
    "BM25",
    "RRF",
    "Hugging Face",
    "FastAPI",
    "Groq",
    "Python",
  ],
  github: "https://github.com/AdhamElsayedAI/MedFlow-AI",
  images: [
    { src: assetPath("/images/medflow/rag-chat.png"), alt: "MedFlow evidence-grounded RAG chat interface" },
    { src: assetPath("/images/medflow/home.png"), alt: "MedFlow clinical AI home workspace" },
    { src: assetPath("/images/medflow/rag-architecture-ui.png"), alt: "MedFlow transparent RAG architecture interface" },
    { src: assetPath("/images/medflow/knowledge-base.png"), alt: "MedFlow knowledge base interface" },
    { src: assetPath("/images/medflow/lab-interpreter.png"), alt: "MedFlow lab interpreter interface" },
    { src: assetPath("/images/medflow/pdf-search.png"), alt: "MedFlow semantic PDF search interface" },
  ],
  retrieval: [
    { label: "Embedding", value: "BAAI/bge-small-en-v1.5" },
    { label: "Dimensions", value: "384 · normalized" },
    { label: "Chunking", value: "200 tokens · 0 overlap" },
    { label: "Top-K", value: "4" },
    { label: "Indexed chunks", value: "1,470" },
  ],
  metrics: [
    { label: "Precision@4", value: "53.12%" },
    { label: "Hit@4", value: "87.50%" },
    { label: "MRR", value: "≈ 0.7031" },
  ],
} as const;

export const projects: Project[] = [
  {
    title: "Smart Basket",
    category: "Computer Vision / Edge AI",
    description:
      "Real-time retail product recognition and smart basket system using YOLO and OpenCV on Raspberry Pi with synchronized application state.",
    technologies: ["YOLO", "OpenCV", "Raspberry Pi", "ONNX", "Firebase", "Flutter", "Python"],
    github: "https://github.com/AdhamElsayedAI/Smart-Basket",
    icon: "basket",
    metrics: [
      { label: "mAP@0.5", value: "96.89%" },
      { label: "mAP@0.5:0.95", value: "84.79%" },
    ],
  },
  {
    title: "Code AI Proctor",
    category: "AI Exam Monitoring",
    description:
      "AI-powered exam monitoring platform combining webcam inference, incident detection and an auditable exam workflow.",
    technologies: ["Computer Vision", "YOLO", "PyTorch", "FastAPI", "Python"],
    github: "https://github.com/AdhamElsayedAI/code-ai-proctor",
    icon: "shield",
  },
  {
    title: "Student Performance Analysis",
    category: "Data Analytics",
    description:
      "Exploratory analysis of student outcomes, study behavior and academic performance using reproducible Python data workflows.",
    technologies: ["Python", "Pandas", "Matplotlib", "Data Analysis"],
    github: "https://github.com/AdhamElsayedAI/Student-Performance-Analysis",
    icon: "chart",
  },
  {
    title: "Telco Customer Churn",
    category: "Machine Learning / Big Data",
    description:
      "PySpark machine-learning pipeline for churn analysis and prediction using encoded customer attributes and logistic regression.",
    technologies: ["PySpark", "MLlib", "Logistic Regression", "Data Analysis"],
    github: "https://github.com/AdhamElsayedAI/Telco-Customer-Churn-Project",
    icon: "spark",
  },
];
