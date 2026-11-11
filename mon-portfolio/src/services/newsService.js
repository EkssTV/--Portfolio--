// On récupère l'URL de base depuis le fichier .env
const API_URL = import.meta.env.VITE_API_URL;

export const fetchAllNews = async (lang = 'fr') => {
  try {
    const response = await fetch(`${API_URL}/news?lang=${lang}`);
    if (!response.ok) throw new Error('Erreur lors de la récupération des actualités');
    return await response.json();
  } catch (error) {
    console.error('Erreur API News:', error);
    return []; // Sécurité : on retourne un tableau vide pour ne pas faire crasher l'interface
  }
};

export const fetchLatestNews = async (lang = 'fr') => {
  try {
    // On exploite le paramètre "limit=3" que nous avons configuré dans le backend
    const response = await fetch(`${API_URL}/news?lang=${lang}&limit=3`);
    if (!response.ok) throw new Error('Erreur lors de la récupération des dernières actualités');
    return await response.json();
  } catch (error) {
    console.error('Erreur API Latest News:', error);
    return [];
  }
};