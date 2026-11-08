import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import translationFR from './locales/fr.json';
import translationEN from './locales/en.json';
import translationKO from './locales/ko.json';

const resources = {
  fr: { translation: translationFR },
  en: { translation: translationEN },
  ko: { translation: translationKO }
};

i18n
  .use(LanguageDetector) // Détecte la langue du navigateur
  .use(initReactI18next) // Passe l'instance i18n à React
  .init({
    resources,
    fallbackLng: 'fr', // Langue par défaut si la détection échoue
    interpolation: {
      escapeValue: false // React gère déjà la protection XSS
    }
  });

export default i18n;