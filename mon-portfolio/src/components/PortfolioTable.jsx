import { useState, Fragment } from "react"
import { useTranslation } from "react-i18next"
import { themeColors } from "../utils/themeColors"

export default function PortfolioTable({ items, onOpenProof }) {
  const { t } = useTranslation()
  const [expandedIds, setExpandedIds] = useState(new Set())

  const toggleExpanded = (id) => {
    const next = new Set(expandedIds)
    next.has(id) ? next.delete(id) : next.add(id)
    setExpandedIds(next)
  }

  const maxHours = Math.max(...items.map(i => i.heuresReellesTri), 1)
  
  // Calcul des totaux
  const totalValorisees = items.reduce((sum, item) => sum + (item.heuresValorisees || 0), 0)
  const totalReelles = items.reduce((sum, item) => sum + (item.heuresReellesTri || 0), 0)

  return (
    <div className="overflow-x-auto rounded-xl border border-slate-200 shadow-sm bg-white">
      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="bg-slate-900 text-white text-xs uppercase tracking-wide">
            <th className="px-4 py-4 font-semibold">{t('portfolio.th_theme')}</th>
            <th className="px-4 py-4 font-semibold">{t('portfolio.th_activity')}</th>
            <th className="px-4 py-4 font-semibold">{t('portfolio.th_location')}</th>
            <th className="px-4 py-4 font-semibold">{t('portfolio.th_date')}</th>
            <th className="px-4 py-4 font-semibold">{t('portfolio.th_hours_val')}</th>
            <th className="px-4 py-4 font-semibold w-48">{t('portfolio.th_hours_real')}</th>
            <th className="px-4 py-4 font-semibold">{t('portfolio.th_links')}</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-100">
          {items.map((item) => {
            const colors = themeColors[item.theme] || { border: "border-slate-300", dot: "bg-slate-500" }
            const isExpanded = expandedIds.has(item.id)
            const gaugeWidth = Math.min((item.heuresReellesTri / maxHours) * 100, 100)

            return (
              <Fragment key={item.id}>
                <tr className={`border-l-4 ${colors.border} hover:bg-slate-50 transition-colors`}>
                  <td className="px-4 py-4 text-sm font-medium text-slate-900 whitespace-nowrap">
                    <span className="flex items-center gap-2">
                      <span className={`w-2 h-2 rounded-full ${colors.dot}`} />
                      {item.theme}
                    </span>
                  </td>
                  <td className="px-4 py-4 text-sm text-slate-900 font-semibold">{item.activite}</td>
                  <td className="px-4 py-4 text-sm text-slate-600">{item.lieu}</td>
                  <td className="px-4 py-4 text-sm text-slate-600 whitespace-nowrap">{item.date}</td>
                  <td className="px-4 py-4 text-sm text-slate-600 font-medium">{item.heuresValorisees}h</td>
                  <td className="px-4 py-4 text-sm text-slate-600">
                    <div className="flex flex-col gap-1">
                      <span>{item.heuresReellesLabel}</span>
                      <div className="w-full bg-slate-100 rounded-full h-1.5">
                        <div className={`h-1.5 rounded-full ${colors.dot}`} style={{ width: `${gaugeWidth}%` }}></div>
                      </div>
                    </div>
                  </td>
                  <td className="px-4 py-4">
                    <div className="flex gap-2">
                      <button onClick={() => onOpenProof(item)} className="text-xs px-3 py-1.5 rounded-md bg-brand/10 text-brand hover:bg-brand/20 font-medium transition-colors">
                        {t('portfolio.btn_proofs')}
                      </button>
                      <button onClick={() => toggleExpanded(item.id)} className="text-xs px-3 py-1.5 rounded-md bg-slate-100 text-slate-700 hover:bg-slate-200 font-medium transition-colors">
                        {t('portfolio.btn_analysis')} {isExpanded ? "▲" : "▼"}
                      </button>
                    </div>
                  </td>
                </tr>
                {isExpanded && (
                  <tr className={`border-l-4 ${colors.border} bg-slate-50/50`}>
                    <td colSpan={7} className="px-6 py-4">
                      <div className="text-sm text-slate-700 leading-relaxed italic border-l-2 border-slate-300 pl-4">
                        {item.reflectionText || t('portfolio.no_analysis')}
                      </div>
                      {item.technologies && (
                        <div className="mt-3 flex gap-2">
                          {item.technologies.map(tech => (
                            <span key={tech} className="px-2 py-1 bg-white border border-slate-200 text-xs rounded-md text-slate-600">{tech}</span>
                          ))}
                        </div>
                      )}
                    </td>
                  </tr>
                )}
              </Fragment>
            )
          })}
        </tbody>
        {/* Le pied de page avec les totaux */}
        <tfoot className="bg-slate-50 border-t-2 border-slate-200">
          <tr>
            <td colSpan={4} className="px-4 py-4 text-sm font-bold text-slate-900 text-right uppercase tracking-wider">
              {t('portfolio.total')}
            </td>
            <td className="px-4 py-4 text-sm font-bold text-slate-900">{totalValorisees}h</td>
            <td className="px-4 py-4 text-sm font-bold text-brand">≥ {totalReelles}h</td>
            <td></td>
          </tr>
        </tfoot>
      </table>
    </div>
  )
}