# 🚀 Portfolio Personnel - V1

Un portfolio interactif, performant et multilingue développé avec React et Tailwind CSS v4. 
Ce projet a été conçu avec une architecture modulaire simulant des appels à une API REST (Mock Backend) en prévision d'une future évolution full-stack.

## ✨ Fonctionnalités Principales

### 🌍 Internationalisation (i18n)
- Support complet de 3 langues : **Français (FR), Anglais (EN), et Coréen (KO)**.
- Traduction dynamique de l'interface, des données mockées et formatage automatique des dates selon la locale de l'utilisateur.

### 📰 Actualités & Veille
- Moteur de recherche en temps réel (titres, descriptions, tags).
- Filtrage dynamique par catégories générées automatiquement.
- Tri chronologique et système de pagination ("Voir plus").
- Mise en évidence intelligente de l'article "À la une".

### 📁 Portfolio d'Activités
- Double affichage : **Vue Cartes** (visuelle) et **Vue Tableau** (analytique).
- Jauges visuelles pour comparer les heures réelles vs valorisées.
- Modale interactive pour afficher les preuves (images, liens GitHub/Live).
- Fonctionnalité d'**Export CSV** des données filtrées.

### 📄 CV Interactif
- **Timeline verticale** responsive pour le parcours académique et professionnel avec accordéons dépliables.
- **Jauges de compétences animées** au chargement.
- Séparation claire des Hard Skills, Soft Skills et Tags technologiques purs.

### ✉️ Page Contact & UX
- Formulaire de contact avec validation en temps réel et simulation d'envoi réseau.
- Sujets de messages prédéfinis cliquables.
- Bouton de copie rapide de l'adresse email dans le presse-papier.
- Section dédiée aux autres espaces/projets annexes (ex: Blog).

## 🛠️ Stack Technique

- **Framework :** [React](https://reactjs.org/) (Vite)
- **Styling :** [Tailwind CSS v4](https://tailwindcss.com/)
- **i18n :** `react-i18next`
- **Déploiement :** *(À compléter : Vercel / Netlify / GitHub Pages)*

## 🏗️ Architecture du Projet

Afin de garantir un code propre et scalable, la logique métier et les données sont séparées des composants UI :

```text
src/
├── assets/          # Images, CV PDF, icônes
├── components/      # Composants UI réutilisables (NewsCard, PortfolioTable, ProofModal...)
├── locales/         # Dictionnaires de traduction (fr.json, en.json, ko.json)
├── pages/           # Pages principales (Home, News, Portfolio, Resume, Contact)
└── services/        # Faux Backend (Mock API)
    ├── newsService.js
    ├── portfolioService.js
    └── resumeService.js
```

Les fichiers dans `src/services/` utilisent des Promesses et des `setTimeout` pour simuler la latence réseau (ex: 600ms), préparant ainsi l'application à être connectée à un véritable backend (Node.js/Express) ou un CMS dans la V2.

## 🚀 Installation & Lancement

1. Cloner le dépôt :
```bash
git clone https://github.com/ton-profil/ton-repo.git
```

2. Installer les dépendances :
```bash
cd ton-repo
npm install
```

3. Lancer le serveur de développement :
```bash
npm run dev
```

4. Ouvrir [http://localhost:5173](http://localhost:5173) pour voir l'application.

## 🔮 Évolutions futures (V2)
- [ ] Remplacer les Mock API par une véritable base de données (PostgreSQL / MongoDB).
- [ ] Créer un Backend (Node.js/Express) pour servir les données et envoyer de vrais emails via le formulaire de contact.

---
*Développé avec ❤️ par Matthieu*