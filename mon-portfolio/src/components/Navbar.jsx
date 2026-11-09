import { NavLink } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

export default function Navbar() {
  const { t, i18n } = useTranslation()

  // Fonction pour styliser le lien actif du menu
  const linkStyle = ({ isActive }) => 
    isActive 
      ? "text-brand font-semibold border-b-2 border-brand pb-1 transition-colors" 
      : "text-slate-500 hover:text-brand-light transition-colors pb-1"

  // Fonction pour changer la langue au clic
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng)
  }

  // Fonction pour styliser la langue active (en surbrillance)
  // On utilise startsWith pour gérer les cas comme "fr-FR" détectés par le navigateur
  const langStyle = (lng) => 
    i18n.language?.startsWith(lng)
      ? "text-brand font-bold" 
      : "text-slate-400 hover:text-brand-light transition-colors"

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo / Nom */}
        <div className="text-xl font-bold text-slate-900 tracking-tight">
          Matthieu<span className="text-brand">.dcr</span>
        </div>

        {/* Liens de navigation avec la fonction de traduction t() */}
        <div className="flex gap-6 text-sm">
          <NavLink to="/" className={linkStyle}>{t('navbar.home')}</NavLink>
          <NavLink to="/news" className={linkStyle}>{t('navbar.news')}</NavLink>
          <NavLink to="/portfolio" className={linkStyle}>{t('navbar.portfolio')}</NavLink>
          <NavLink to="/resume" className={linkStyle}>{t('navbar.resume')}</NavLink>
          <NavLink to="/contact" className={linkStyle}>{t('navbar.contact')}</NavLink>
        </div>

        {/* Sélecteur de langues */}
        <div className="flex gap-3 text-xs uppercase font-medium items-center">
          <button onClick={() => changeLanguage('fr')} className={langStyle('fr')}>FR</button>
          <span className="text-slate-200">|</span>
          <button onClick={() => changeLanguage('en')} className={langStyle('en')}>EN</button>
          <span className="text-slate-200">|</span>
          <button onClick={() => changeLanguage('ko')} className={langStyle('ko')}>KR</button>
        </div>
      </div>
    </nav>
  )
}