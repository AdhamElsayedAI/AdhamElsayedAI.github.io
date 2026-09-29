export type ExperienceItem = {
  period: string;
  organization: string;
  role: string;
  type: "WORK" | "PROGRAM" | "HACKATHON" | "TRAINING";
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
    type: "PROGRAM",
    location: "Egypt",
    summary:
      "Joined the AI track of a career-focused bootcamp centered on workplace simulation and industry-focused preparation.",
    details: [
      "Worked through career-focused activities designed around realistic workplace expectations.",
      "Strengthened practical problem framing, communication and applied AI presentation skills.",
    ],
    tags: ["Artificial Intelligence", "Workplace Simulation", "Industry Preparation"],
  },
  {
    period: "2026",
    organization: "VOLTIX",
    role: "Data Analysis Intern",
    type: "WORK",
    location: "Egypt",
    summary:
      "Cleaned and validated workforce data, then delivered a Power BI HR Attrition dashboard with DAX KPIs.",
    details: [
      "Cleaned and validated data for 1,470 employees.",
      "Analyzed overtime, tenure, compensation and satisfaction through an interactive BI workflow.",
    ],
    tags: ["Power BI", "DAX", "Data Cleaning", "HR Analytics"],
  },
  {
    period: "Aug 2026",
    organization: "Orange Digital Center Egypt × CREATIVA Innovation Hubs",
    role: "AI Hackathons Program Participant",
    type: "HACKATHON",
    location: "Egypt",
    summary:
      "Applied AI / rapid-prototyping program focused on building and presenting a solution under a fixed hackathon timeline.",
    details: [
      "Prototyped and presented an applied AI solution under time constraints.",
      "Practiced rapid iteration, teamwork, technical communication and solution evaluation.",
    ],
    tags: ["Applied AI", "Rapid Prototyping", "Teamwork", "Presentation"],
  },
  {
    period: "Sep 2025 — Jul 2026",
    organization: "Digital Egypt Pioneers Initiative (DEPI)",
    role: "Machine Learning Engineering Trainee — Microsoft Machine Learning Engineer Track",
    type: "TRAINING",
    location: "Egypt — Remote",
    summary:
      "Completed a 10-month AI & Data Science program spanning the applied ML lifecycle from preprocessing through evaluation and MLOps.",
    details: [
      "Covered preprocessing, model training, evaluation, deep learning, NLP and computer vision.",
      "Studied Azure AI, MLOps, MLflow and Hugging Face workflows.",
    ],
    tags: ["Machine Learning", "Deep Learning", "NLP", "Computer Vision", "Azure AI", "MLflow"],
  },
  {
    period: "Jul 2025 — Sep 2025",
    organization: "ST Smart",
    role: "Robotics Software Engineering Trainee",
    type: "TRAINING",
    location: "Mansoura, Egypt — Onsite",
    summary:
      "Completed 50+ hours of robotics training across sensors, motor control, C++/Arduino and hardware-software integration.",
    details: [
      "Worked with sensors, motor control and C++/Arduino control logic.",
      "Tested 20+ simulation scenarios in object tracking and real-time robotic decisions.",
    ],
    tags: ["Robotics", "C++", "Arduino", "Sensors", "Real-time Control"],
  },
];
