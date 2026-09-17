// Types
export interface PersonalInfo {
  name: string;
  title: string;
  email: string;
  phone: string;
  location?: string;
  linkedin: string;
  github: string;
  taglines: string[];
}

export interface SkillCategory {
  id: string;
  label: string;
  skills?: string[];
}

export interface ArchitectureStep {
  step: string;
  detail: string;
}

export interface Project {
  id: number;
  title: string;
  subtitle: string;
  year: string;
  featured: boolean;
  description: string;
  techStack: string[];
  highlights: string[];
  challenges: string[];
  architecture: ArchitectureStep[];
  github: string;
  live: string;
  image: string;
}

export interface Experience {
  id: number;
  role: string;
  type: string;
  period: string;
  description: string;
  skills: string[];
}

export interface Education {
  id: number;
  degree: string;
  institution: string;
  location: string;
  period: string;
  score?: string;
  icon: string;
}

export interface Metric {
  value: string;
  label: string;
  icon: string;
}

export interface NavItem {
  label: string;
  href: string;
}

// Personal Info
export const personalInfo: PersonalInfo = {
  name: "Vedant Tripathi",
  title: "Full Stack Developer & Computer Vision Engineer",
  email: "vedantripathi05@gmail.com",
  phone: "+91 8815471744",
  linkedin: "https://linkedin.com/in/vedant-tripathi-800896273",
  github: "https://github.com/VedantT425",
  taglines: [
    "Full-Stack Engineer (MERN)",
    "Computer Vision Specialist (OpenCV)",
    "Python & RESTful API Architect",
    "Generative AI & Data Analytics Builder"
  ]
};

// Skills - categorized
export const skillCategories: SkillCategory[] = [
  {
    id: "all",
    label: "All Skills"
  },
  {
    id: "languages",
    label: "Languages",
    skills: ["Python", "JavaScript", "TypeScript", "C", "SQL", "HTML5", "CSS3"]
  },
  {
    id: "frontend",
    label: "Frontend",
    skills: ["React.js", "Next.js", "Tailwind CSS", "Bootstrap", "EJS", "Responsive Design"]
  },
  {
    id: "backend",
    label: "Backend & APIs",
    skills: ["Node.js", "Express.js", "Flask", "REST APIs", "JWT Authentication", "Gunicorn"]
  },
  {
    id: "databases",
    label: "Databases & Cloud",
    skills: ["MongoDB", "SQLite", "MySQL", "Render", "Vercel", "Git", "GitHub"]
  },
  {
    id: "ai",
    label: "AI & Analytics",
    skills: ["OpenCV", "dlib", "face_recognition", "NumPy", "Pandas", "Power BI", "Chart.js", "Generative AI"]
  }
];

// Projects
export const projects: Project[] = [
  {
    id: 1,
    title: "Face Recognition Attendance System",
    subtitle: "Real-Time Biometric Pipeline",
    year: "2024",
    featured: true,
    description: "Production-grade biometric attendance system with real-time face recognition via live video streaming, multi-angle 3-shot registration pipeline, and comprehensive analytics dashboard.",
    techStack: ["Python", "Flask", "OpenCV", "dlib", "face_recognition", "WebRTC", "HTML5 Canvas", "SQLite", "Chart.js", "Gunicorn", "Render"],
    highlights: [
      "Real-time WebRTC video streaming with HTML5 Canvas frame extraction",
      "Multi-angle 3-shot face registration for robust recognition",
      "Euclidean distance-based face matching with < 800ms latency",
      "Interactive Chart.js analytics dashboard with CSV export",
      "Production deployment on Render with Gunicorn WSGI server"
    ],
    challenges: [
      "Handling lighting variance across different environments",
      "Optimizing frame rate for real-time processing without dropping accuracy",
      "Managing video memory leaks in long-running browser sessions",
      "Building a robust multi-angle registration to handle pose variations"
    ],
    architecture: [
      { step: "WebRTC Video Feed", detail: "Browser captures live camera stream" },
      { step: "HTML5 Canvas", detail: "Frame extraction at optimized intervals" },
      { step: "Flask REST API", detail: "Frame processing endpoint" },
      { step: "OpenCV + dlib", detail: "Face detection and 128-d feature vector extraction" },
      { step: "Euclidean Matching", detail: "Distance-based identity verification" },
      { step: "SQLite Database", detail: "Attendance records and user profiles" },
      { step: "Chart.js Dashboard", detail: "Real-time analytics and CSV export" }
    ],
    github: "https://github.com/VedantT425",
    live: "https://face-attendance-system-nuu3.onrender.com",
    image: "/project-face-recognition.png"
  }
];

// Experience
export const experiences: Experience[] = [
  {
    id: 1,
    role: "Full Stack Web Developer (MERN)",
    type: "Project-Based Experience",
    period: "2023 – 2024",
    description: "Built end-to-end web applications using the MERN stack. Developed modular REST APIs, implemented JWT-based authentication, optimized MongoDB queries, and delivered responsive React UIs.",
    skills: ["MongoDB", "Express.js", "React.js", "Node.js", "JWT", "REST APIs"]
  },
  {
    id: 2,
    role: "Data Analytics & Generative AI",
    type: "Project-Based Experience",
    period: "2024",
    description: "Worked with Python-based data analytics tools (Pandas, NumPy) and Power BI for visualization. Explored practical Generative AI workflows for automated insight generation.",
    skills: ["Python", "Pandas", "NumPy", "Power BI", "Generative AI"]
  }
];

// Education
export const education: Education[] = [
  {
    id: 1,
    degree: "B.Tech in Computer Science & Engineering",
    institution: "Shri Ram Institute of Technology",
    location: "Jabalpur, Madhya Pradesh",
    period: "2021 – 2025",
    icon: "GraduationCap"
  },
  {
    id: 2,
    degree: "Higher Secondary (Class XII)",
    institution: "Senior Secondary School",
    location: "Madhya Pradesh",
    period: "2020 – 2021",
    score: "88%",
    icon: "BookOpen"
  },
  {
    id: 3,
    degree: "High School (Class X)",
    institution: "High School",
    location: "Madhya Pradesh",
    period: "2018 – 2019",
    score: "60%",
    icon: "School"
  }
];

// Metrics for bento cards
export const metrics: Metric[] = [
  { value: "< 800ms", label: "Face Recognition Latency", icon: "Zap" },
  { value: "3-Shot", label: "Multi-Angle Registration", icon: "Camera" },
  { value: "4+", label: "Production Tech Stacks", icon: "Layers" },
  { value: "88%", label: "Academic Merit (XII)", icon: "Award" }
];

// Nav items
export const navItems: NavItem[] = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" }
];
