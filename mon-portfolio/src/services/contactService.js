const API_URL = import.meta.env.VITE_API_URL;

export const sendContactMessage = async (contactData) => {
  const response = await fetch(`${API_URL}/contact`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(contactData),
  });

  if (!response.ok) {
    // Si notre Throttler (limitateur) NestJS bloque la requête
    if (response.status === 429) {
      throw new Error("Vous avez envoyé trop de messages. Veuillez patienter quelques minutes.");
    }
    throw new Error("Une erreur est survenue lors de l'envoi du message.");
  }

  return await response.json();
};