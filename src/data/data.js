// ============================================
// 📝 PORTFOLIO DATA — Edit this file to customize your portfolio!
// ============================================

export const personalInfo = {
  name: "Komal Lamba",
  tagline: "Aspiring Machine Learning Engineer",

  roles: [
    "Aspiring Machine Learning Engineer",
    "Computer Science Student",
    "AI/ML Enthusiast",
    "Problem Solver"
  ],
  bio: `I build practical AI/ML systems focused on real-world impact and scalability.`,
  aboutBio: `I'm a Computer Science student focused on Machine Learning and real-world problem solving.

I build systems that combine ML models with practical deployment, from performance monitoring tools to predictive analytics solutions.

I believe in consistency, hands-on learning, and creating systems that deliver measurable impact.`,
  email: "lamba6765@gmail.com",
  phone: "7496816764",
  location: "Gurugram, Haryana",
  // direct download link to avoid Google view permission issues across devices
  cvLink: "https://drive.google.com/uc?export=download&id=1SVXElD_tE_nYXzpFHNTLghexZeMyOr6X",
  resumeLink: "https://drive.google.com/file/d/1SVXElD_tE_nYXzpFHNTLghexZeMyOr6X/view?usp=sharing",
};

export const stats = [
  { value: 5, suffix: "+", label: "Projects Completed" },
  { value: 0, suffix: "+", label: "Years Experience" },
  { value: 12, suffix: "+", label: "Technologies" },
  { value: 500, suffix: "+", label: "Cups of Coffee" },
];

export const skills = [
  {
    category: "Languages",
    icon: "💻",
    items: [
      { name: "C++", level: 85 },
      { name: "Python", level: 90 },
      { name: "Java", level: 80 },
      { name: "C", level: 75 },
    ],
  },
  {
    category: "ML/AI",
    icon: "🤖",
    items: [
      { name: "TensorFlow", level: 80 },
      { name: "OpenCV", level: 75 },
      { name: "XGBoost", level: 85 },
      { name: "Scikit-learn", level: 80 },
    ],
  },
  {
    category: "Tools",
    icon: "🛠️",
    items: [
      { name: "MySQL", level: 75 },
      { name: "Streamlit", level: 80 },
      { name: "Git", level: 85 },
      { name: "VS Code", level: 90 },
    ],
  },
];

export const projects = [
  {
    title: "AI Performance Analyzer",
    description:
      "Real-time system monitoring tool that analyzes CPU, memory, and disk usage using ML-driven insights.",
    tags: ["Python", "Streamlit", "NumPy", "Matplotlib", "psutil"],
    category: "ml",
    github: "https://github.com/komal0809/AI-Performance-Analyzer",
    live: "#",
    image: null,
  },
  {
    title: "Fuel Efficiency Predictor",
    description:
      "Predicts vehicle fuel efficiency using machine learning to support cost-effective and eco-friendly decisions.",
    tags: ["XGBoost", "Python", "Pandas", "Streamlit"],
    category: "ml",
    github: "https://github.com/mahekmehra/Fuel_efficiency_predictor",
    live: "#",
    image: null,
  },
  {
    title: "Smart Waste Management System",
    description:
      "AI-based waste classification system using computer vision.",
    tags: ["TensorFlow", "OpenCV", "NumPy"],
    category: "ml",
    github: "https://github.com/komal0809/Smart-Waste-Management",
    live: "#",
    image: null,
  },
  {
    title: "Book Store Management System",
    description:
      "Manages inventory, customers, and transactions efficiently.",
    tags: ["Java", "MySQL", "OOP"],
    category: "backend",
    github: "https://github.com/Arun2295/Book-Store-System.git",
    live: "#",
    image: null,
  },
  {
    title: "VibeMate – Shared Living App",
    description:
      "UI/UX app to improve communication and task coordination in shared living spaces.",
    tags: ["Figma", "Design Thinking"],
    category: "design",
    github: "#",
    live: "https://lnkd.in/gQ9kr3Tf",
    image: null,
  },
];

export const experience = [
  {
    role: "B.Tech in Computer Science (AI & ML)",
    company: "Lovely Professional University",
    period: "2023 – Present",
    description:
      "Pursuing a degree in Computer Science with focus on Artificial Intelligence and Machine Learning.",
    technologies: ["Python", "TensorFlow", "Machine Learning", "Data Structures"],
  },
  {
    role: "UI/UX Design & Design Thinking",
    company: "Summer Training",
    period: "Jun 2025 - Aug 2025",
    description:
      "Completed training in UI/UX design principles and design thinking methodologies.",
    technologies: ["Figma", "Design Thinking"],
  },
  {
    role: "Salesforce Developer Catalyst Program",
    company: "Salesforce",
    period: "Feb 2026- Mar 2026",
    description:
      "Participated in Salesforce Developer Catalyst Program to learn platform development.",
    technologies: ["Salesforce, Apex", "Lightning Web Components"],
  },
  
  {
    role: "AI with Machine Learning Workshop",
    company: "IIT Roorkee",
    period: "Feb 2024",
    description:
      "Attended workshop on AI and Machine Learning fundamentals and applications.",
    technologies: ["AI", "Machine Learning"],
  },
];

export const socialLinks = [
  {
    name: "GitHub",
    url: "https://github.com/komal0809",
    icon: "github",
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/komal-lamba-b03421297",
    icon: "linkedin",
  },
  {
    name: "Email",
    url: "mailto:lamba6765@gmail.com",
    icon: "email",
  },
];

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];
