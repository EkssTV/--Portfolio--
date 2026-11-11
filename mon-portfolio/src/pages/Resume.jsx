import { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { fetchResumeData } from '../services/resumeService'
import monCV from '../assets/cv-matthieu.pdf'
import maPhoto from '../assets/photo.png'

// --- COMPOSANT 1 : La jauge de compétence animée ---
const SkillBar = ({ name, level, description }) => {
  const [width, setWidth] = useState(0)

  useEffect(() => {
    const timer = setTimeout(() => setWidth(level), 200)
    return () => clearTimeout(timer)
  }, [level])

  return (
    <div className="mb-5 group">
      <div className="flex justify-between items-end mb-1">
        <span className="font-bold text-slate-800 text-sm">{name}</span>
        <span className="text-xs text-brand font-medium">{level}%</span>
      </div>
      <div className="w-full bg-slate-100 rounded-full h-2 overflow-hidden relative">
        <div 
          className="bg-brand h-2 rounded-full transition-all duration-1000 ease-out"
          style={{ width: `${width}%` }}
        ></div>
      </div>
      <p className="text-xs text-slate-500 mt-2 line-clamp-1 group-hover:line-clamp-none transition-all">
        {description}
      </p>
    </div>
  )
}

// --- COMPOSANT 2 : La carte Timeline (Accordéon) ---
const TimelineItem = ({ title, organization, period, description, highlights, type }) => {
  const { t} = useTranslation()
  const [isOpen, setIsOpen] = useState(false)
  
  const isEdu = type === 'edu'
  const dotColor = isEdu ? 'bg-blue-500' : 'bg-amber-500'
  const badgeColor = isEdu ? 'bg-blue-50 text-blue-700 border-blue-200' : 'bg-amber-50 text-amber-700 border-amber-200'
  const label = isEdu ? t('resume.edu_label', 'Formation') : t('resume.exp_label', 'Expérience')

  return (
    <div className="relative pl-8 md:pl-0">
      
      <div className={`hidden md:block absolute left-1/2 transform -translate-x-1/2 -mt-1.5 w-4 h-4 rounded-full border-4 border-white shadow-sm z-10 ${dotColor}`}></div>
      <div className={`md:hidden absolute left-[-5px] top-4 w-3 h-3 rounded-full border-2 border-white shadow-sm z-10 ${dotColor}`}></div>

      <div className={`md:w-1/2 ${isEdu ? 'md:pr-12 md:text-right md:ml-0' : 'md:pl-12 md:ml-auto'}`}>
        <div 
          onClick={() => setIsOpen(!isOpen)}
          className="bg-white p-5 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md hover:border-brand/30 transition-all cursor-pointer text-left"
        >
          <div className={`flex flex-col ${isEdu ? 'md:items-end' : 'md:items-start'} mb-2`}>
            <span className={`text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full border mb-3 ${badgeColor}`}>
              {label}
            </span>
            <h3 className="text-lg font-bold text-slate-900 leading-tight">{title}</h3>
            <p className="text-brand text-sm font-semibold mt-1">{organization}</p>
            <p className="text-slate-400 text-xs mt-1 font-medium tracking-wide uppercase">{period}</p>
          </div>

          <div className={`grid transition-all duration-300 ease-in-out ${isOpen ? 'grid-rows-[1fr] opacity-100 mt-4' : 'grid-rows-[0fr] opacity-0'}`}>
            <div className="overflow-hidden">
              <p className="text-sm text-slate-600 mb-3">{description}</p>
              {highlights && highlights.length > 0 && (
                <ul className="text-sm text-slate-600 list-disc pl-5 space-y-1 marker:text-brand">
                  {highlights.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              )}
            </div>
          </div>
          
          <div className={`text-center mt-2 text-slate-300 transition-transform ${isOpen ? 'rotate-180' : ''}`}>
            ▼
          </div>
        </div>
      </div>
    </div>
  )
}

// --- COMPOSANT PRINCIPAL : La Page Resume ---
export default function Resume() {
  const { t,i18n } = useTranslation()
  const [data, setData] = useState(null)
  
  useEffect(() => {
    fetchResumeData(i18n.language).then(res => setData(res))
  }, [i18n.language])

  if (!data) {
    return (
      <div className="flex justify-center py-20">
        <div className="animate-spin h-8 w-8 border-4 border-brand border-t-transparent rounded-full"></div>
      </div>
    )
  }

  const timelineItems = [...data.education, ...data.experiences]

  return (
    <div className="max-w-5xl mx-auto space-y-16 animate-fade-in pb-20">
      
      {/* 1. HEADER & BIO */}
      <section className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-slate-100">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8 mb-8 border-b border-slate-100 pb-8">
          
          <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
            {/* TA PHOTO */}
            <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-brand-light/20 shrink-0 shadow-inner">
              <img src={maPhoto} alt="Matthieu" className="w-full h-full object-cover" />
            </div>
            
            <div>
              <h1 className="text-4xl font-bold text-slate-900 mb-2">{t('resume.title')}</h1>
              <p className="text-lg text-brand font-medium">Matthieu — Développeur Front-End</p>
            </div>
          </div>
          
          <a 
            href={monCV} 
            download="CV_Matthieu.pdf"
            className="flex items-center gap-2 px-6 py-3 bg-slate-900 text-white rounded-xl font-bold hover:bg-slate-800 hover:-translate-y-1 transition-all shadow-md shrink-0 w-full lg:w-auto justify-center"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
            {t('resume.download_pdf')}
          </a>
        </div>

        <div>
          <h2 className="text-xl font-bold text-slate-900 mb-4">{t('resume.about_title')}</h2>
          <p className="text-slate-600 leading-relaxed whitespace-pre-line text-justify md:text-left">
            {t('resume.about_text')}
          </p>
        </div>
      </section>

      {/* 2. SKILLS (Grille à 3 colonnes) */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Hard Skills */}
        <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100">
          <h2 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-3">
            <svg className="w-6 h-6 text-brand" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
            </svg>
            {t('resume.skills_tech')}
          </h2>
          {data.technicalSkills.map(skill => (
            <SkillBar key={skill.id} {...skill} />
          ))}
        </div>

        {/* Languages */}
        <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100">
          <h2 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-3">
            <svg className="w-6 h-6 text-brand" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9 9 0 100-18 9 9 0 000 18zM12 3a9 9 0 00-6.364 2.636M12 21a9 9 0 006.364-2.636M12 3v18M3.636 15.364A9 9 0 0012 21M20.364 8.636A9 9 0 0012 3" />
            </svg>
            {t('resume.skills_lang')}
          </h2>
          {data.languages.map(lang => (
            <SkillBar key={lang.id} {...lang} />
          ))}
        </div>

        {/* Soft Skills & Tags bruts */}
        <div className="space-y-8">
          <div className="bg-slate-900 p-8 rounded-3xl shadow-sm text-white">
            <h2 className="text-xl font-bold mb-6 flex items-center gap-3">
              <svg className="w-6 h-6 text-slate-300" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
              </svg>
              {t('resume.skills_soft')}
            </h2>
            <div className="flex flex-wrap gap-2">
              {data.softSkills.map(soft => (
                <span key={soft} className="px-4 py-2 bg-slate-800 rounded-lg text-sm font-medium text-slate-200 border border-slate-700 hover:border-brand transition-colors cursor-default">
                  {soft}
                </span>
              ))}
            </div>
          </div>

          <div className="bg-brand/10 p-8 rounded-3xl border border-brand/20">
            <h2 className="text-xl font-bold text-brand-dark mb-4">{t('resume.skills_tags')}</h2>
            <div className="flex flex-wrap gap-2">
              {data.techTags.map(tag => (
                <span key={tag} className="px-3 py-1 bg-white text-brand-dark text-xs font-bold rounded-full shadow-sm">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

      </section>

      {/* 3. TIMELINE (Expériences & Formations) */}
      <section>
        <h2 className="text-3xl font-bold text-center text-slate-900 mb-12">{t('resume.timeline_title')}</h2>
        
        <div className="relative">
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-slate-200"></div>
          <div className="md:hidden absolute left-0 h-full w-0.5 bg-slate-200 ml-1"></div>

          <div className="space-y-8">
            {timelineItems.map((item) => (
              <TimelineItem 
                key={item.id} 
                {...item} 
                organization={item.organization || item.institution} 
              />
            ))}
          </div>
        </div>
      </section>

      {/* 4. INTERESTS (Images au lieu d'émojis) */}
      <section>
        <h2 className="text-3xl font-bold text-center text-slate-900 mb-12">{t('resume.interests_title')}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {data.interests.map(interest => (
            <div key={interest.id} className="relative h-48 md:h-64 rounded-3xl overflow-hidden group shadow-sm">
              <img 
                src={interest.imageUrl} 
                alt={interest.label} 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent flex flex-col justify-end p-8">
                <p className="font-bold text-white text-xl mb-1">{interest.label}</p>
                {interest.detail && <p className="text-sm text-brand-light font-medium">{interest.detail}</p>}
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  )
}