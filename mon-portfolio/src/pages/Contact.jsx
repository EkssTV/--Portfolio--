import { useState } from 'react'
import { useTranslation } from 'react-i18next'

export default function Contact() {
  const { t } = useTranslation()

  const [emailCopied, setEmailCopied] = useState(false)
  const myEmail = "matthieu.decreme@gmail.com"

  const otherSites = [
    { id: 1, name: "Caflog", url: "under-construction", icon: "☕" },
  ]

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(myEmail)
    setEmailCopied(true)
    setTimeout(() => setEmailCopied(false), 2000)
  }

  return (
    <div className="max-w-6xl mx-auto space-y-12 animate-fade-in">
      
      {/* En-tête de la page */}
      <div className="text-center md:text-left border-b border-slate-200 pb-6">
        <h1 className="text-4xl font-bold text-brand mb-4">{t('contact.title')}</h1>
        <p className="text-lg text-slate-600">{t('contact.subtitle')}</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        
        {/* COLONNE GAUCHE : Encart "Under construction" */}
        <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 flex flex-col items-center justify-center text-center space-y-6">
          <div className="w-20 h-20 rounded-2xl bg-brand/10 text-brand flex items-center justify-center text-4xl shadow-inner">
            🚧
          </div>

          <div className="space-y-3 max-w-md">
            <span className="inline-block px-3 py-1 rounded-full bg-amber-50 text-amber-700 border border-amber-200 text-xs font-semibold uppercase tracking-wider">
              Static Version
            </span>
            <h2 className="text-2xl font-bold text-slate-900">
              {t('contact.under_construction_title', 'Formulaire en pause café ☕')}
            </h2>
            <p className="text-slate-600 text-sm leading-relaxed">
              {t(
                'contact.under_construction_desc',
                "Le formulaire de contact est temporairement en construction car cette version du portfolio tourne en mode 100 % statique sans serveur backend. En attendant, vous pouvez m'écrire directement par email !"
              )}
            </p>
          </div>

          <a
            href={`mailto:${myEmail}`}
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-brand text-white font-semibold hover:bg-brand-dark transition-all transform hover:-translate-y-0.5 shadow-md"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            {t('contact.send_direct_email', "M'envoyer un email directement")}
          </a>
        </div>

        {/* COLONNE DROITE : Infos & Autres Sites */}
        <div className="space-y-8">
          
          {/* Bloc Coordonnées & Statut */}
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 flex flex-col gap-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-50 text-green-700 text-sm font-semibold rounded-full border border-green-200 self-start">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
              {t('contact.availability')}
            </div>

            <div>
              <p className="text-sm font-medium text-slate-500 uppercase tracking-wider mb-2">Email</p>
              <div className="flex items-center justify-between gap-2 bg-slate-50 p-4 rounded-xl border border-slate-200">
                <a href={`mailto:${myEmail}`} className="font-medium text-slate-900 hover:text-brand transition-colors truncate">
                  {myEmail}
                </a>
                <button 
                  onClick={handleCopyEmail}
                  className="flex items-center gap-2 px-3 py-1.5 bg-white border border-slate-200 rounded-lg text-sm text-slate-600 hover:bg-slate-100 transition-colors shrink-0"
                >
                  {emailCopied ? (
                    <span className="text-green-600 font-medium">{t('contact.copied')}</span>
                  ) : (
                    <>
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" /></svg>
                      {t('contact.copy_email')}
                    </>
                  )}
                </button>
              </div>
            </div>

            <div>
              <p className="text-sm font-medium text-slate-500 uppercase tracking-wider mb-3">Réseaux</p>
              <div className="flex gap-4">
                <a href="https://github.com/EkssTV" target="_blank" rel="noopener noreferrer" className="p-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" /></svg>
                </a>
                <a href="https://linkedin.com/in/ton-profil" target="_blank" rel="noopener noreferrer" className="p-3 bg-slate-50 border border-slate-200 rounded-xl text-blue-600 hover:text-blue-700 hover:bg-blue-50 transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                </a>
              </div>
            </div>
          </div>

          {/* BLOC : Mes autres sites / projets */}
          <div className="bg-slate-900 p-8 rounded-2xl shadow-sm text-white">
            <h3 className="text-xl font-bold mb-2">{t('contact.other_sites_title')}</h3>
            <p className="text-slate-400 text-sm mb-6">{t('contact.other_sites_desc')}</p>
            
            <div className="space-y-4">
              {otherSites.map(site => (
                <a 
                  key={site.id} 
                  href={site.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center p-4 bg-slate-800 rounded-xl border border-slate-700 hover:border-brand hover:bg-slate-800/80 transition-all group"
                >
                  <span className="text-2xl mr-4">{site.icon}</span>
                  <div className="flex-grow">
                    <h4 className="font-semibold text-slate-100 group-hover:text-brand transition-colors">{site.name}</h4>
                    <p className="text-xs text-slate-400">{site.url.replace('https://', '')}</p>
                  </div>
                  <svg className="w-5 h-5 text-slate-500 group-hover:text-brand transform group-hover:translate-x-1 transition-all" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                </a>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}