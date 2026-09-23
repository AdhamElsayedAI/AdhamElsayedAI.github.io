export type ExperienceItem = {
  period: string;
  organization: string;
  role: string;
  type: string;
  location: string;
  summary: string;
  details: string[];
  tags: string[];
};

export const experience: ExperienceItem[] = [
  {
    period: "Sep 2026",
    organization: "EraaSoft × iCareer",
    role: "AI Track Participant — Digitera Bootcamp (YIEP 2026)",
    type: "AI / CAREER",
    location: "Egypt",
    summary:
      "AI-focused career bootcamp centered on workplace simulation, industry preparation and practical problem solving.",
    details: [
      "Worked through career-focused technical activities designed around realistic workplace expectations.",
      "Strengthened communication, problem framing and applied AI presentation skills.",
    ],
    tags: ["Artificial Intelligence", "Workplace Simulation", "Problem Solving", "Communication"],
  },
  {
    period: "2026",
    organization: "VOLTIX",
    role: "Data Analysis Intern",
    type: "DATA / BI",
    location: "Egypt",
    summary:
      "Built an HR workforce and attrition analysis workflow from data cleaning and validation through DAX KPIs and an interactive Power BI dashboard.",
    details: [
      "Cleaned and validated a workforce dataset covering 1,470 employees.",
      "Analyzed attrition across overtime, tenure, compensation, satisfaction and workforce segments using Power BI and DAX.",
    ],
    tags: ["Power BI", "DAX", "Data Cleaning", "Data Validation", "HR Analytics"],
  },
  {
    period: "Aug 2026",
    organization: "Orange Digital Center Egypt × CREATIVA Innovation Hubs",
    role: "AI Hackathons Program Participant",
    type: "AI / HACKATHON",
    location: "Egypt",
    summary:
      "Applied AI and rapid-prototyping program focused on building, evaluating and presenting solutions under a fixed hackathon timeline.",
    details: [
      "Prototyped and presented an applied AI solution under time constraints.",
      "Practiced rapid iteration, teamwork, technical communication and solution evaluation.",
    ],
    tags: ["AI Hackathon", "Rapid Prototyping", "Teamwork", "Evaluation", "Presentation"],
  },
  {
    period: "Sep 2025 — Jul 2026",
    organization: "Digital Egypt Pioneers Initiative (DEPI)",
    role: "Machine Learning Engineering Trainee",
    type: "AI / ML",
    location: "Egypt — Remote",
    summary:
      "Microsoft Machine Learning Engineer track covering the applied ML lifecycle from preprocessing and modeling through evaluation and MLOps.",
    details: [
      "Worked across preprocessing, model training, validation, evaluation, deep learning, NLP and computer vision.",
      "Studied Azure AI, scalable data solutions, MLOps, MLflow and Hugging Face workflows.",
    ],
    tags: ["Machine Learning", "Deep Learning", "NLP", "Computer Vision", "MLflow", "Azure AI"],
  },
  {
    period: "Jul 2025 — Sep 2025",
    organization: "ST Smart",
    role: "Robotics Software Engineering Trainee",
    type: "ROBOTICS",
    location: "Mansoura, Egypt — Onsite",
    summary:
      "50+ hours of practical robotics training across sensors, motor control, C++/Arduino and hardware-software integration.",
    details: [
      "Covered sensors, motor control, robot movement logic and C++/Arduino control.",
      "Tested 20+ simulation scenarios for object tracking and real-time robotic decisions.",
    ],
    tags: ["Robotics", "C++", "Arduino", "Sensors", "Real-time Control"],
  },
];
