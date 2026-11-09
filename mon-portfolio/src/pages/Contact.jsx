import { useState } from 'react'
import { useTranslation } from 'react-i18next'

export default function Contact() {
  const { t } = useTranslation()

  // --- Gestion du formulaire ---
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' })
  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  
  // --- Fonctionnalité Copier l'email ---
  const [emailCopied, setEmailCopied] = useState(false)
  const myEmail = "matthieu.decreme@gmail.com" // <-- REMPLACE PAR TON VRAI MAIL

  // Liste des sujets prédéfinis
  const subjects = [
    t('contact.subject_job'), 
    t('contact.subject_freelance'), 
    t('contact.subject_chat')
  ]

  // Fausse base de données pour tes autres sites
  const otherSites = [
    { id: 1, name: "Aventure Café", url: "https://ton-blog-cafe.com", icon: "☕" }
  ]

  const validateForm = () => {
    let newErrors = {}
    if (!formData.name) newErrors.name = t('contact.form_err_req')
    if (!formData.message) newErrors.message = t('contact.form_err_req')
    if (!formData.email) {
      newErrors.email = t('contact.form_err_req')
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = t('contact.form_err_email')
    }
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!validateForm()) return

    setIsSubmitting(true)
    
    // Simulation d'un envoi vers un backend (API)
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSuccess(true)
      setFormData({ name: '', email: '', subject: '', message: '' })
      
      // Le message de succès disparaît après 5 secondes
      setTimeout(() => setIsSuccess(false), 5000)
    }, 1500)
  }

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
        
        {/* COLONNE GAUCHE : Formulaire */}
        <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 relative overflow-hidden">
          {isSuccess && (
            <div className="absolute inset-0 bg-white/90 backdrop-blur-sm z-10 flex flex-col items-center justify-center p-6 text-center animate-fade-in">
              <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-4">
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-2">{t('contact.form_success')}</h3>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            
            {/* Nom & Email sur la même ligne si écran large */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">{t('contact.form_name')}</label>
                <input 
                  type="text" 
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className={`w-full px-4 py-3 rounded-xl bg-slate-50 border ${errors.name ? 'border-red-400 focus:ring-red-500' : 'border-slate-200 focus:ring-brand'} focus:outline-none focus:ring-2 transition-all`}
                />
                {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
              </div>
              
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">{t('contact.form_email')}</label>
                <input 
                  type="email" 
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className={`w-full px-4 py-3 rounded-xl bg-slate-50 border ${errors.email ? 'border-red-400 focus:ring-red-500' : 'border-slate-200 focus:ring-brand'} focus:outline-none focus:ring-2 transition-all`}
                />
                {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
              </div>
            </div>

            {/* Sujets prédéfinis */}
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-3">{t('contact.form_subject')}</label>
              <div className="flex flex-wrap gap-2 mb-3">
                {subjects.map(sub => (
                  <button 
                    key={sub} type="button"
                    onClick={() => setFormData({...formData, subject: sub})}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${formData.subject === sub ? 'bg-brand text-white shadow-md' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'}`}
                  >
                    {sub}
                  </button>
                ))}
              </div>
              <input 
                type="text" 
                value={formData.subject}
                onChange={(e) => setFormData({...formData, subject: e.target.value})}
                placeholder="Autre sujet..."
                className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-brand transition-all"
              />
            </div>

            {/* Message */}
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">Message</label>
              <textarea 
                rows="5"
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
                placeholder={t('contact.form_message')}
                className={`w-full px-4 py-3 rounded-xl bg-slate-50 border ${errors.message ? 'border-red-400 focus:ring-red-500' : 'border-slate-200 focus:ring-brand'} focus:outline-none focus:ring-2 transition-all resize-none`}
              ></textarea>
              {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
            </div>

            {/* Bouton de soumission */}
            <button 
              type="submit" 
              disabled={isSubmitting}
              className="w-full py-4 rounded-xl bg-brand text-white font-bold text-lg hover:bg-brand-dark transition-all transform hover:-translate-y-0.5 shadow-md disabled:bg-slate-300 disabled:cursor-not-allowed disabled:transform-none flex justify-center items-center gap-2"
            >
              {isSubmitting ? (
                <>
                  <svg className="animate-spin h-5 w-5 text-white" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z"></path></svg>
                  {t('contact.form_sending')}
                </>
              ) : (
                t('contact.form_send')
              )}
            </button>
          </form>
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
              <div className="flex items-center justify-between bg-slate-50 p-4 rounded-xl border border-slate-200">
                <span className="font-medium text-slate-900">{myEmail}</span>
                <button 
                  onClick={handleCopyEmail}
                  className="flex items-center gap-2 px-3 py-1.5 bg-white border border-slate-200 rounded-lg text-sm text-slate-600 hover:bg-slate-100 transition-colors"
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
                <a href="https://www.linkedin.com/in/matthieu-decreme" target="_blank" rel="noopener noreferrer" className="p-3 bg-slate-50 border border-slate-200 rounded-xl text-blue-600 hover:text-blue-700 hover:bg-blue-50 transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                </a>
              </div>
            </div>
          </div>

          {/* NOUVEAU BLOC : Mes autres sites / projets */}
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