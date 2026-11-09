import { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import HeroCarousel from '../components/HeroCarousel'
import NewsCard from '../components/NewsCard'
import { fetchLatestNews } from '../services/newsService'

import maPhoto from '../assets/photo.png'
import monCV from '../assets/cv-matthieu.pdf'

export default function Home() {
  const { t } = useTranslation()
  
  // États pour gérer les données et le chargement
  const [news, setNews] = useState([])
  const [loading, setLoading] = useState(true)

  // Appel au service lors du chargement de la page
  useEffect(() => {
    const getNews = async () => {
      try {
        // On attend que la fausse API nous réponde
        const data = await fetchLatestNews()
        setNews(data)
      } catch (error) {
        console.error("Erreur de chargement", error)
      } finally {
        setLoading(false)
      }
    }
    
    getNews()
  }, []) // Le tableau vide [] signifie "exécuter une seule fois au montage"

  return (
    <div className="max-w-6xl mx-auto space-y-12">
      
      <section className="w-full">
        <HeroCarousel />
      </section>

      <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Colonne Gauche : 2/3 (Actualités) */}
        <div className="md:col-span-2 space-y-6">
          <h2 className="text-2xl font-bold text-slate-900 border-b-2 border-brand pb-2 inline-block">
            {t('home.latest_news', 'Dernières actualités')}
          </h2>
          
          <div className="space-y-4">
            {loading ? (
              // Petit effet de chargement pendant les 600ms
              <div className="flex items-center justify-center py-12 text-slate-400">
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-brand" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z"></path>
                </svg>
                Chargement...
              </div>
            ) : (
              // On boucle sur nos données pour afficher une NewsCard par élément
              news.map((item) => (
                <NewsCard key={item.id} {...item} />
              ))
            )}
          </div>
        </div>

        {/* Colonne Droite : 1/3 (Bio & Stack) - INCHANGÉE */}
        <div className="md:col-span-1 space-y-6">
          <h2 className="text-2xl font-bold text-slate-900 border-b-2 border-brand pb-2 inline-block">
            {t('home.about_me', 'En bref')}
          </h2>
          
          <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 flex flex-col items-center text-center space-y-4">
            
            <div className="w-28 h-28 bg-slate-100 rounded-full border-4 border-brand-light/20 overflow-hidden shadow-inner flex items-center justify-center">
              <img src={maPhoto} alt="Matthieu" className="w-full h-full object-cover" />
            </div>
            
            <div>
              <h3 className="font-bold text-xl text-slate-900">Matthieu</h3>
              <p className="text-sm text-brand font-medium mt-1">Développeur Front-End</p>
            </div>

            <p className="text-sm text-slate-600">
              Création d'interfaces web modernes, performantes et accessibles. Toujours prêt pour un nouveau défi technique.
            </p>
            
            <a href={monCV} download="CV_Matthieu.pdf" className="w-full py-2.5 mt-2 bg-brand text-white rounded-lg hover:bg-brand-dark transition-all transform hover:-translate-y-0.5 shadow-md text-sm font-semibold flex items-center justify-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
              </svg>
              {t('home.download_cv', 'Télécharger mon CV')}
            </a>
            
            <div className="w-full pt-5 border-t border-slate-100 mt-2 flex flex-wrap gap-2 justify-center">
              {['React', 'Tailwind CSS', 'Vite', 'JavaScript', 'Git'].map(tech => (
                <span key={tech} className="px-3 py-1 bg-slate-50 border border-slate-200 text-xs text-slate-600 rounded-full font-medium">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

      </section>
    </div>
  )
}