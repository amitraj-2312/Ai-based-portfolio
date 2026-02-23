export interface Project {
  title: string;
  description: string;
  tags: string[];
  link?: string;
  image?: string;
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  description: string[];
}

export interface Skill {
  name: string;
  category: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  content: string;
}

export const RESUME_DATA = {
  name: "Amit Raj",
  role: "MERN Stack Developer",
  skills: [
    { name: "React", category: "Frontend" },
    { name: "Node.js", category: "Backend" },
    { name: "Express", category: "Backend" },
    { name: "MongoDB", category: "Database" },
    { name: "Java", category: "Languages" },
    { name: "Python", category: "Languages" },
    { name: "Data Structures", category: "Fundamentals" },
    { name: "Machine Learning Basics", category: "AI/ML" }
  ],
  projects: [
    {
      title: "QuickGPT",
      description: "A powerful AI-driven application for quick information retrieval and task automation using React and Node.js.",
      tags: ["React", "Node.js", "Gemini AI"],
      link: "https://github.com/amitraj-2312/QuickGPT",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800&h=600"
    },
    {
      title: "Doctor Appointment",
      description: "A comprehensive platform for booking and managing medical appointments with a robust Node.js and Express backend.",
      tags: ["React", "Node.js", "MongoDB", "Express"],
      link: "https://github.com/amitraj-2312/doctor-appointment",
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=800&h=600"
    },
    {
      title: "Online Voting Application",
      description: "A secure and transparent digital voting system built with robust Node.js backend logic and JWT authentication.",
      tags: ["Node.js", "Express", "MongoDB", "JWT"],
      link: "https://github.com/amitraj-2312/Backend-Project-Voting-App",
      image: "https://images.unsplash.com/photo-1540910419892-4a36d2c3266c?auto=format&fit=crop&q=80&w=800&h=600"
    },
    {
      title: "BookmyStay",
      description: "A backend-focused accommodation booking system with features for property management and user reservations.",
      tags: ["Node.js", "Express", "MongoDB"],
      link: "https://github.com/amitraj-2312/Backend-project-BookMyStay",
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=800&h=600"
    }
  ],
  experiences: [
    {
      company: "GUVI / HCL",
      role: "Fullstack Developer Intern",
      period: "(13/06/2025 to 12/09/2025)",
      description: [
        "Developing and maintaining full-stack web applications using the MERN stack (MongoDB, Express, React, Node.js).",
        "Collaborating with senior developers to implement new features and optimize performance.",
        "Participating in code reviews and architectural discussions."
      ]
    }
  ],
  education: "BSc Computer Science (Expected 2026)",
  goal: "Looking for Software Developer or ML Research Internship opportunities.",
  contact: {
    email: "amitjhastm2001@gmail.com",
    github: "github.com/amitraj-2312",
    linkedin: "linkedin.com/in/amit-raj-0b58ab280"
  }
};
