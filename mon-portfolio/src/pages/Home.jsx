import { useTranslation } from 'react-i18next'
import HeroCarousel from '../components/HeroCarousel'
import photoMoi from "../assets/photo.png"
export default function Home() {
  const { t } = useTranslation()

  return (
    <div className="max-w-6xl mx-auto space-y-12">
      
      {/* SECTION 1 : Le Carrousel */}
      <section className="w-full">
        <HeroCarousel />
      </section>

      {/* SECTION 2 : Grille 2/3 - 1/3 */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Colonne Gauche : 2/3 (Actualités) */}
        <div className="md:col-span-2 space-y-6">
          <h2 className="text-2xl font-bold text-slate-900 border-b-2 border-brand pb-2 inline-block">
            {t('home.latest_news', 'Dernières actualités')}
          </h2>
          
          <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 min-h-[300px]">
            <p className="text-slate-500 italic">
              {t('home.news_placeholder', 'Mes derniers projets et articles apparaîtront ici...')}
            </p>
          </div>
        </div>

        {/* Colonne Droite : 1/3 (Bio & Stack) */}
        <div className="md:col-span-1 space-y-6">
          <h2 className="text-2xl font-bold text-slate-900 border-b-2 border-brand pb-2 inline-block">
            {t('home.about_me', 'En bref')}
          </h2>
          
          <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 flex flex-col items-center text-center space-y-4">
            
            {/* Photo de profil (à remplacer par ton image dans src/assets/) */}
            <div className="w-28 h-28 bg-slate-100 rounded-full border-4 border-brand-light/20 overflow-hidden shadow-inner">
              <img 
                src= {photoMoi}
                alt="Matthieu" 
                className="w-full h-full object-cover"
              />
            </div>
            
            <div>
              <h3 className="font-bold text-xl text-slate-900">Matthieu</h3>
              <p className="text-sm text-brand font-medium mt-1">{t('home.titleMat', 'Dernières actualités')}</p>
            </div>

            <p className="text-sm text-slate-600">
             {t('home.fastResume', 'Télécharger mon CV')}
            </p>
            
            <button className="w-full py-2.5 mt-2 bg-brand text-white rounded-lg hover:bg-brand-dark transition-all transform hover:-translate-y-0.5 shadow-md text-sm font-semibold flex items-center justify-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
              </svg>
              {t('home.download_cv', 'Télécharger mon CV')}
            </button>
            
            {/* Stack Technique */}
            <div className="w-full pt-5 border-t border-slate-100 mt-2 flex flex-wrap gap-2 justify-center">
              {['FullStack Development', 'Data Analysis', 'Artificial Intelligence (AI)', 'Problem Solving', 'UserCentered Design'].map(tech => (
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