import { NavLink } from 'react-router-dom'

export default function Navbar() {
  // Fonction pour styliser le lien actif
  const linkStyle = ({ isActive }) => 
    isActive 
      ? "text-brand font-semibold border-b-2 border-brand pb-1 transition-colors" 
      : "text-slate-500 hover:text-brand-light transition-colors pb-1"

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo / Nom */}
        <div className="text-xl font-bold text-slate-900 tracking-tight">
          Matthieu<span className="text-brand">.</span>
        </div>

        {/* Liens de navigation */}
        <div className="flex gap-6 text-sm">
          <NavLink to="/" className={linkStyle}>Accueil</NavLink>
          <NavLink to="/news" className={linkStyle}>Actualités</NavLink>
          <NavLink to="/portfolio" className={linkStyle}>Portfolio</NavLink>
          <NavLink to="/resume" className={linkStyle}>Parcours</NavLink>
          <NavLink to="/contact" className={linkStyle}>Contact</NavLink>
        </div>
      </div>
    </nav>
  )
}