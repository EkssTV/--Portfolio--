// 1. Notre base de données enrichie
const mockNewsDatabase = [
  {
    id: 1,
    date: "2026-11-09",
    title: "Lancement de mon Portfolio React",
    description: "Mise en ligne de ma nouvelle SPA avec Vite, Tailwind v4 et une vraie architecture de composants.",
    tags: ["React", "Tailwind", "Vite"],
    imageUrl: "https://images.unsplash.com/photo-1555099962-4199c345e5dd?auto=format&fit=crop&w=800&q=80",
    imageAlt: "Écran affichant du code React",
    liveUrl: "#",
    githubUrl: "#",
    readTime: "3 min",
    category: "Projet Web",
    isFeatured: true // Cet article sera affiché en grand tout en haut
  },
  {
    id: 2,
    date: "2026-10-25",
    title: "Apprentissage de TypeScript",
    description: "Je commence à intégrer le typage fort dans mes projets personnels pour un code plus robuste et maintenable.",
    tags: ["TypeScript", "JS"],
    imageUrl: "https://images.unsplash.com/photo-1516116216624-53e697fedbea?auto=format&fit=crop&w=800&q=80",
    imageAlt: "Clavier d'ordinateur et écran de code",
    liveUrl: null,
    githubUrl: "https://github.com/",
    readTime: "5 min",
    category: "Veille Tech",
    isFeatured: false
  },
  {
    id: 3,
    date: "2026-10-05",
    title: "Création d'une API REST",
    description: "Développement d'un petit backend avec Express.js pour comprendre la logique côté serveur et les bases de données.",
    tags: ["Node.js", "Backend", "API"],
    imageUrl: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80",
    imageAlt: "Serveurs dans un data center",
    liveUrl: null,
    githubUrl: "https://github.com/",
    readTime: "4 min",
    category: "Tutoriel",
    isFeatured: false
  },
  {
    id: 4,
    date: "2026-09-15",
    title: "Certification Web Accessibilité",
    description: "Validation des acquis sur les normes WCAG pour rendre le web plus inclusif et accessible à tous les utilisateurs.",
    tags: ["A11y", "HTML", "CSS"],
    imageUrl: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=800&q=80",
    imageAlt: "Personne tapant sur un ordinateur portable",
    liveUrl: "https://www.w3.org/",
    githubUrl: null,
    readTime: "2 min",
    category: "Veille Tech",
    isFeatured: false
  },
  {
    id: 5,
    date: "2026-08-20",
    title: "Clone de Netflix en React",
    description: "Reproduction de l'interface de Netflix pour m'entraîner sur les grilles complexes et les animations CSS.",
    tags: ["React", "CSS", "Design"],
    imageUrl: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&w=800&q=80",
    imageAlt: "Logo d'application de streaming",
    liveUrl: "#",
    githubUrl: "#",
    readTime: "6 min",
    category: "Projet Web",
    isFeatured: false
  }
];

// 2. L'appel pour la page d'accueil (Les 3 plus récentes)
export const fetchLatestNews = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mockNewsDatabase.slice(0, 3));
    }, 600);
  });
};

// 3. L'appel pour la page "Actualités" (Toutes les news)
export const fetchAllNews = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mockNewsDatabase);
    }, 600);
  });
};