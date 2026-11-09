# 📂 Arborescence du Projet Portfolio

Voici la structure de dossiers et fichiers que nous allons mettre en place pour ton portfolio. 

```text
mon-portfolio/
├── node_modules/       # (Généré automatiquement) Les paquets de code installés via npm. Ne jamais y toucher.
├── public/             # Fichiers publics accessibles directement par le navigateur.
│   └── favicon.ico     # Petite icône dans l'onglet du navigateur (à ajouter plus tard).
├── src/                # 🧠 C'est ici que 99% du travail de code va se passer !
│   ├── assets/         # Tes médias statiques.
│   │   ├── cv-matthieu.pdf # Ton CV en PDF pour le bouton de téléchargement.
│   │   ├── photo.png       # Ta photo de profil.
│   │   └── ...             # Tes icônes et autres images (CMB26-28.jpg, etc.).
│   ├── components/     # 🧩 Tes "briques de Lego" (composants d'interface réutilisables).
│   │   ├── Navbar.jsx      # Le menu de navigation principal.
│   │   ├── Footer.jsx      # Le pied de page.
│   │   └── ProjectCard.jsx # Modèle visuel pour afficher un projet dans le portfolio.
│   ├── data/           # 🗃️ Tes bases de données locales (sépare le texte du code).
│   │   ├── projects.js     # La liste de tes réalisations (titres, descriptions, liens).
│   │   └── resume.js       # Tes expériences professionnelles et compétences.
│   ├── pages/          # 📄 Tes 5 vues (pages) principales.
│   │   ├── Home.jsx        # L'accueil (Main / Hero section avec ton résumé).
│   │   ├── News.jsx        # La page d'Actualité.
│   │   ├── Portfolio.jsx   # La galerie de tes projets.
│   │   ├── Resume.jsx      # Le CV interactif.
│   │   └── Contact.jsx     # Le formulaire et tes liens.
│   ├── App.jsx         # Le composant maître (chef d'orchestre) qui affichera les bonnes pages.
│   ├── index.css       # Le CSS global où on a configuré Tailwind et ton bleu #3e5c76.
│   └── main.jsx        # Le point de démarrage technique de React.
├── .gitignore          # Liste les fichiers que Git ne doit pas envoyer sur Github (ex: node_modules).
├── index.html          # La seule véritable page HTML de ton site (Single Page Application).
├── package.json        # "La carte d'identité" du projet, liste les outils installés.
├── README.md           # Le fichier de présentation pour Github.
├── ROADMAP.md          # Ton pense-bête personnel.
└── vite.config.js      # Le fichier de configuration de Vite (où l'on a branché Tailwind).
```

## 📝 Comment procéder maintenant ?

Dans ton terminal, ou directement depuis ton éditeur de code (VS Code), tu peux créer les dossiers suivants dans le dossier `src` :
1. `src/assets` (normalement déjà présent, tu peux y glisser ton pdf et ta photo)
2. `src/components`
3. `src/pages`
4. `src/data`