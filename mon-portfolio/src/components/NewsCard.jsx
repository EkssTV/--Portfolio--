import { useTranslation } from 'react-i18next'

export default function NewsCard({ 
  date, 
  title, 
  description, 
  tags, 
  imageUrl, 
  imageAlt, 
  category, 
  readTime, 
  liveUrl, 
  githubUrl 
}) {
  const { i18n, t } = useTranslation();

  // Formatage de la date
  const dateLocale = i18n.language?.startsWith('en') ? 'en-US' : (i18n.language?.startsWith('ko') ? 'ko-KR' : 'fr-FR');
  const formattedDate = new Date(date).toLocaleDateString(dateLocale, {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  });

  return (
    <div className="bg-white rounded-xl shadow-sm border border-slate-100 hover:shadow-md hover:border-brand/30 transition-all group flex flex-col overflow-hidden h-full">
      
      {/* 1. Bloc Image (Haut) */}
      {imageUrl && (
        <div className="relative h-48 w-full overflow-hidden bg-slate-100">
          <img 
            src={imageUrl} 
            alt={imageAlt || title} 
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          {/* Badge Catégorie */}
          {category && (
            <span className="absolute top-3 left-3 px-3 py-1 bg-white/90 backdrop-blur-sm text-brand text-xs font-bold rounded-full shadow-sm">
              {category}
            </span>
          )}
        </div>
      )}

      {/* 2. Bloc Contenu (Bas) */}
      <div className="p-5 flex flex-col flex-grow">
        
        {/* Métadonnées : Date & Temps de lecture */}
        <div className="flex justify-between items-center mb-3 text-xs font-semibold text-slate-400 tracking-wider uppercase">
          <span className="text-brand">{formattedDate}</span>
          {readTime && <span>⏱ {readTime}</span>}
        </div>

        {/* Textes principaux */}
        <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-brand transition-colors line-clamp-2">
          {title}
        </h3>
        <p className="text-slate-600 text-sm mb-4 line-clamp-3 flex-grow">
          {description}
        </p>
        
        {/* Tags */}
        <div className="flex gap-2 flex-wrap mb-5">
          {tags?.map(tag => (
            <span key={tag} className="px-2.5 py-1 bg-slate-50 text-slate-500 text-xs rounded-md border border-slate-200 font-medium">
              #{tag}
            </span>
          ))}
        </div>

        {/* Boutons d'action (S'affichent uniquement si les liens existent) */}
        {(liveUrl || githubUrl) && (
          <div className="flex gap-3 mt-auto pt-4 border-t border-slate-100">
            {liveUrl && (
              <a href={liveUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-sm font-medium text-white bg-brand px-4 py-2 rounded-lg hover:bg-brand-dark transition-colors">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                {t('news.view_live', 'Voir le site')}
              </a>
            )}
            
            {githubUrl && (
              <a href={githubUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-sm font-medium text-slate-600 bg-slate-100 px-4 py-2 rounded-lg hover:bg-slate-200 hover:text-slate-900 transition-colors">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" /></svg>
                Code
              </a>
            )}
          </div>
        )}
      </div>
    </div>
  )
}