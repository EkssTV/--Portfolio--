const BASE_URL = import.meta.env.BASE_URL;

export const fetchResumeData = async (lang = 'fr') => {
  try {
    const response = await fetch(`${BASE_URL}data/resume-${lang}.json`);
    if (!response.ok) throw new Error('Erreur lors de la récupération du CV');
    return await response.json();
  } catch (error) {
    console.error('Erreur Static Resume:', error);
    return null;
  }
};