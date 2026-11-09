# 📊 État d'avancement - Portfolio React

## ✅ Ce qui est terminé et fonctionnel
* **Socle technique :** Projet initialisé avec Vite, React et Tailwind CSS v4.
* **Routage :** Navigation fluide via `react-router-dom` sur 5 pages (Accueil, Actualités, Portfolio, Parcours, Contact).
* **Internationalisation (i18n) :** 
  * Configuration de `react-i18next`.
  * Dictionnaires FR, EN, et KO intégrés (`src/locales/`).
  * Sélecteur de langue fonctionnel dans la Navbar avec mémorisation.
* **Page d'accueil (Home) :**
  * Composant `HeroCarousel` dynamique (images, traductions, défilement auto, flèches).
  * Sidebar droite finalisée (Photo de profil, Bio express, Badges de compétences).
  * Bouton de téléchargement connecté au vrai fichier `cv-matthieu.pdf`.
* **Architecture Données :** Création du faux backend (`src/services/newsService.js`) simulant des appels API avec des Promesses et des délais (`setTimeout`).

---

## 🚧 Ce qu'il reste à faire (Immédiat)
- [ ] **Page d'accueil :** Appeler la fonction `fetchLatestNews()` pour récupérer les 3 dernières actualités et les afficher dans la colonne 2/3.
- [ ] **Composant NewsCard :** Créer un composant réutilisable pour formater l'affichage d'une actualité (Date, Titre, Description, Tags).
- [ ] **Page Actualités (News) :** Appeler la fonction `fetchAllNews()` pour afficher l'intégralité de la base de données.
- [ ] **Pages restantes :** Designer et intégrer les données pour les pages *Portfolio*, *Parcours* (Timeline), et *Contact*.

---

## 🚀 Évolutions futures (Passage en Production / Backend)

### 1. Remplacement de la "Fausse API" par une vraie Base de Données
* **Action :** Supprimer les données en dur (`mockNewsDatabase`) et les `setTimeout` dans `newsService.js`.
* **Remplacement :** Mettre en place de vrais appels réseaux (`fetch` ou `axios`) vers un serveur Node.js, Supabase, ou Firebase.
* *Avantage :* Le code des composants React (`Home.jsx`, `News.jsx`) n'aura pas besoin d'être modifié, la transition sera transparente.

### 2. Gestion des langues (i18n) côté Serveur
Actuellement, les actualités factices sont en français en dur. Lors du passage à la vraie base de données, il faudra gérer le multilinguisme des données dynamiques.
* **Option A (Paramètre d'URL) :** Le service frontend enverra la langue active à l'API.
  * *Exemple :* `fetch('/api/news?lang=en')` -> Le serveur ne renvoie que le contenu anglais.
* **Option B (JSON structuré en DB) :** La base de données stocke toutes les langues, et le composant React affiche la bonne selon la clé.
  * *Exemple de retour DB :* `{ "title": { "fr": "Bonjour", "en": "Hello" } }`
