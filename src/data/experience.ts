export type ExperienceItem = {
  period: string;
  organization: string;
  role: string;
  summary: string;
  details: string[];
  tags: string[];
};

export const experience: ExperienceItem[] = [
  {
    period: "2026",
    organization: "Orange Digital Center Egypt × Creativa Innovation Hubs",
    role: "AI Hackathons Participant",
    summary:
      "Participated in the AI Hackathons program organized through Orange Digital Center Egypt and Creativa Innovation Hubs, with ecosystem partners shown in the official event material.",
    details: [
      "Worked in a hackathon environment focused on building and presenting applied AI solutions under time constraints.",
      "Developed stronger skills in teamwork, rapid prototyping, technical communication and solution evaluation.",
    ],
    tags: ["AI Hackathon", "Rapid Prototyping", "Teamwork", "Problem Solving", "Presentation"],
  },
  {
    period: "Sep 2025 — Jul 2026",
    organization: "Digital Egypt Pioneers Initiative (DEPI)",
    role: "Machine Learning Engineering Trainee",
    summary:
      "Microsoft AI & Data Science track focused on the applied machine-learning lifecycle.",
    details: [
      "Worked across preprocessing, training, validation, evaluation and performance analysis.",
      "Studied deep learning, scalable data solutions, Azure AI concepts, MLOps, MLflow and Hugging Face.",
    ],
    tags: ["Machine Learning", "Deep Learning", "MLOps", "Azure AI", "Hugging Face"],
  },
  {
    period: "Jul 2025 — Sep 2025",
    organization: "ST Smart",
    role: "Robotics Software Engineering Trainee",
    summary:
      "50+ hours of practical robotics training across control logic and hardware-software integration.",
    details: [
      "Covered sensors, motor control, robot movement logic and C++ Arduino control.",
      "Completed more than 20 simulation scenarios for real-time robotic decisions.",
    ],
    tags: ["Robotics", "C++", "Arduino", "Sensors", "Real-time Control"],
  },
];
