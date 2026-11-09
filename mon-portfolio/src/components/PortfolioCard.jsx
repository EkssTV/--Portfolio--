import { useState } from "react"
import { useTranslation } from "react-i18next"
import { themeColors } from "../utils/themeColors"

export default function PortfolioCard({ items, onOpenProof }) {
  const { t } = useTranslation()
  const [expandedIds, setExpandedIds] = useState(new Set())

  const toggleExpanded = (id) => {
    const next = new Set(expandedIds)
    next.has(id) ? next.delete(id) : next.add(id)
    setExpandedIds(next)
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {items.map((item) => {
        const colors = themeColors[item.theme] || { badge: "bg-slate-100 text-slate-800", border: "border-slate-300" }
        const isExpanded = expandedIds.has(item.id)

        return (
          <article key={item.id} className={`group flex flex-col justify-between rounded-2xl border-t-4 ${colors.border} bg-white p-6 shadow-sm hover:shadow-md transition-all`}>
            <div>
              <span className={`inline-block text-xs font-bold uppercase tracking-wide px-3 py-1 rounded-full mb-4 ${colors.badge}`}>
                {item.theme}
              </span>
              <h3 className="text-lg font-bold text-slate-900 mb-1">{item.activite}</h3>
              <p className="text-sm text-slate-500 mb-4">{item.lieu} • {item.date}</p>
              
              <div className="flex justify-between items-center bg-slate-50 p-3 rounded-lg text-sm mb-4">
                <div className="flex flex-col">
                  <span className="text-slate-400 text-xs uppercase">{t('portfolio.label_val')}</span>
                  <span className="font-bold text-slate-700">{item.heuresValorisees}h</span>
                </div>
                <div className="flex flex-col text-right">
                  <span className="text-slate-400 text-xs uppercase">{t('portfolio.label_real')}</span>
                  <span className="font-bold text-brand">{item.heuresReellesLabel}</span>
                </div>
              </div>

              {item.technologies && (
                <div className="flex gap-2 flex-wrap mb-4">
                  {item.technologies.map(tech => (
                    <span key={tech} className="px-2 py-1 bg-slate-100 text-xs rounded text-slate-600">{tech}</span>
                  ))}
                </div>
              )}

              {isExpanded && (
                <div className="mb-4 p-4 rounded-xl bg-slate-50 border border-slate-100 text-sm text-slate-700 italic">
                  {item.reflectionText || t('portfolio.no_analysis')}
                </div>
              )}
            </div>

            <div className="flex gap-2 mt-auto pt-4 border-t border-slate-100">
              <button onClick={() => onOpenProof(item)} className="flex-1 py-2 rounded-lg bg-brand text-white text-sm font-semibold hover:bg-brand-dark transition-colors">
                {t('portfolio.btn_proofs')}
              </button>
              <button onClick={() => toggleExpanded(item.id)} className="flex-1 py-2 rounded-lg border border-slate-200 text-slate-700 text-sm font-semibold hover:bg-slate-50 transition-colors">
                {t('portfolio.btn_analysis')} {isExpanded ? "▲" : "▼"}
              </button>
            </div>
          </article>
        )
      })}
    </div>
  )
}