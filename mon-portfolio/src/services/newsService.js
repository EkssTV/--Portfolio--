const BASE_URL = import.meta.env.BASE_URL;

export const fetchAllNews = async (lang = 'fr') => {
  try {
    const response = await fetch(`${BASE_URL}data/news-${lang}.json`);
    if (!response.ok) throw new Error('Erreur lors de la récupération des actualités');
    return await response.json();
  } catch (error) {
    console.error('Erreur Static News:', error);
    return [];
  }
};

export const fetchLatestNews = async (lang = 'fr') => {
  const allNews = await fetchAllNews(lang);
  return allNews.slice(0, 3);
};