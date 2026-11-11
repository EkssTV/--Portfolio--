const API_URL = import.meta.env.VITE_API_URL;

export const fetchPortfolioItems = async (lang = 'fr') => {
  try {
    const response = await fetch(`${API_URL}/portfolio?lang=${lang}`);
    if (!response.ok) throw new Error('Erreur lors de la récupération du portfolio');
    return await response.json();
  } catch (error) {
    console.error('Erreur API Portfolio:', error);
    return [];
  }
};