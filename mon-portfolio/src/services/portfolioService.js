const BASE_URL = import.meta.env.BASE_URL;

export const fetchPortfolioItems = async (lang = 'fr') => {
  try {
    const response = await fetch(`${BASE_URL}data/portfolio-${lang}.json`);
    if (!response.ok) throw new Error('Erreur lors de la récupération du portfolio');
    return await response.json();
  } catch (error) {
    console.error('Erreur Static Portfolio:', error);
    return [];
  }
};