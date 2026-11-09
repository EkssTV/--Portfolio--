// Les technologies brutes (mots-clés pour les recruteurs)
export const techTags = [
  "React", "Tailwind CSS", "Vite", "JavaScript/TypeScript", 
  "Python", "SQL", "PostgreSQL", "Figma", "Node.js", "Git / GitHub"
];

export const mockResumeData = {
  languages: [
    { id: "french", name: "French", level: 100, description: "Level C2 — native language." },
    { id: "english", name: "English", level: 80, description: "Level B2–C1 — used regularly for studies, technical research and international exchanges." },
    { id: "korean", name: "Korean", level: 56, description: "Level A2/B1 — learned through courses at UCL (King Sejong Institute, 2024–2026), reinforced by an exchange in Korea." }
  ],
  technicalSkills: [
    { id: "fullstack", name: "Full-Stack Development", level: 75, description: "End-to-end web development, illustrated by this portfolio and other EPHEC projects." },
    { id: "data", name: "Data Analysis", level: 65, description: "Data analysis and structuring as part of academic projects." },
    { id: "ai", name: "Artificial Intelligence (AI)", level: 40, description: "Experimenting with AI tools to explore new ways of solving problems." },
    { id: "problem-solving", name: "Problem Solving", level: 80, description: "Methodical approach to solving technical and organizational problems." },
    { id: "ux", name: "User-Centered Design", level: 65, description: "Design thinking centered around real user needs and experience." }
  ],
  softSkills: [
    "Adaptability", "Problem-Solving", "Communication Skills", "Intercultural Awareness", "Team Collaboration"
  ],
  experiences: [
    {
      id: "quick", title: "Restaurant Crew Member (Student Job)", organization: "Quick — Part-time, Jumet, Belgium", period: "Jul 2025 – Nov 2025",
      description: "Student job in fast-food service. Managed customer orders, food preparation, hygiene standards, teamwork and high-pressure situations.",
      highlights: ["Strengthened reliability and adaptability", "Customer-service mindset under pressure"],
      type: "exp"
    },
    {
      id: "feel-food", title: "Waiter / Floor-Staff", organization: "Restaurant Feel Food — Part-time, Thuin, Belgium", period: "Jul 2023 – Aug 2023",
      description: "Customer service, order management, coordination with the kitchen and maintaining a professional service.",
      highlights: ["Improved communication and multitasking", "Developed a strong sense of responsibility"],
      type: "exp"
    }
  ],
  education: [
    {
      id: "ephec", title: "IT — Bachelor's Degree", institution: "EPHEC University College, Louvain-La-Neuve, Belgium", period: "2024 – …",
      description: "Bachelor's degree in Computer Science (in progress). Coursework includes software development, web programming, data structures, databases, operating systems, networking, cybersecurity basics, electronics, and IT project management.",
      type: "edu"
    },
        {
      id: "pnu", title: "Exchange Semester", institution: "Pusan National University (PNU), Busan, South Korea", period: "Sep 2026 - Dec 2026",
      description: "Completed an Erasmus exchange at Pusan National University (South Korea), developing cross-cultural adaptability while specializing in AI Programming, Data Science, and C Systems Programming.",
      type: "edu"
    },
    {
      id: "sejong", title: "Korean Lessons", institution: "King Sejong Institute — UCL, Louvain-La-Neuve", period: "2024 – 2026",
      description: "Korean language courses taken alongside the bachelor's degree, strengthening linguistic skills and understanding of Korean culture.",
      type: "edu"
    },
    {
      id: "samk", title: "International Week", institution: "Satakunta University of Applied Sciences (SAMK), Pori, Finland", period: "Feb 2025",
      description: "International week focused on robotics, automation and collaborative problem-solving, working in multicultural teams to tackle real technical challenges.",
      type: "edu"
    }
  ],
interests: [
    { 
      id: "climbing", 
      label: "Climbing – Bouldering", 
      imageUrl: "https://unsplash.com/photos/qrxiirVOMEE/download?w=800", 
      detail: "Advanced climber" 
    },
    { 
      id: "art", 
      label: "Art – Paint – Photo – Video", 
      imageUrl: "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?auto=format&fit=crop&w=800&q=80", 
      detail: "Emotional share lover" 
    }
  ]
};

export const fetchResumeData = () => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(mockResumeData), 400);
  });
};
