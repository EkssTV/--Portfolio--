const API_URL = import.meta.env.VITE_API_URL;

export const fetchResumeData = async (lang = 'fr') => {
  try {
    const response = await fetch(`${API_URL}/resume?lang=${lang}`);
    if (!response.ok) throw new Error('Erreur lors de la récupération du CV');
    return await response.json();
  } catch (error) {
    console.error('Erreur API Resume:', error);
    return null;
  }
};