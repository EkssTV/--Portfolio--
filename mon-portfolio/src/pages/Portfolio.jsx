import { useState, useEffect, useMemo } from "react"
import { useTranslation } from "react-i18next"
import PortfolioTable from "../components/PortfolioTable"
import PortfolioCard from "../components/PortfolioCard"
import ProofModal from "../components/ProofModal"
import { fetchPortfolioItems } from "../services/portfolioService"

export default function Portfolio() {
  const { t } = useTranslation()
  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(true)
  const [view, setView] = useState("table")
  const [searchQuery, setSearchQuery] = useState("")
  const [themeFilter, setThemeFilter] = useState("ALL")
  const [proofItem, setProofItem] = useState(null)

  useEffect(() => {
    fetchPortfolioItems().then(data => {
      setItems(data)
      setLoading(false)
    })
  }, [])

  const themes = useMemo(() => ["ALL", ...new Set(items.map(i => i.theme))], [items])

  const filteredItems = useMemo(() => {
    return items.filter(item => {
      const matchTheme = themeFilter === "ALL" || item.theme === themeFilter
      const matchSearch = item.activite.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          item.lieu.toLowerCase().includes(searchQuery.toLowerCase())
      return matchTheme && matchSearch
    }).sort((a, b) => b.heuresReellesTri - a.heuresReellesTri)
  }, [items, themeFilter, searchQuery])

  const handleExportCSV = () => {
    // Traduction des en-têtes du CSV
    const headers = [
      t('portfolio.th_theme'), t('portfolio.th_activity'), t('portfolio.th_location'), 
      t('portfolio.th_date'), t('portfolio.th_hours_val'), t('portfolio.th_hours_real')
    ]
    const rows = filteredItems.map(i => [
      `"${i.theme}"`, `"${i.activite}"`, `"${i.lieu}"`, `"${i.date}"`, i.heuresValorisees, `"${i.heuresReellesLabel}"`
    ])
    const csvContent = [headers.join(","), ...rows.map(e => e.join(","))].join("\n")
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' })
    const link = document.createElement("a")
    link.href = URL.createObjectURL(blob)
    link.download = "portfolio_export.csv"
    link.click()
  }

  return (
    <div className="max-w-7xl mx-auto space-y-8 animate-fade-in">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end border-b border-slate-200 pb-6 gap-4">
        <div>
          <h1 className="text-4xl font-bold text-brand mb-2">{t('portfolio.title')}</h1>
          <p className="text-slate-600">
            {filteredItems.length} {t('portfolio.activities_count')}
          </p>
        </div>
        <button onClick={handleExportCSV} className="flex items-center gap-2 px-4 py-2 bg-slate-900 text-white rounded-lg text-sm font-semibold hover:bg-slate-800 transition-colors">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path></svg>
          {t('portfolio.export_csv')}
        </button>
      </div>

      <div className="flex flex-col lg:flex-row gap-4 justify-between bg-white p-4 rounded-xl shadow-sm border border-slate-100">
        <div className="flex flex-col md:flex-row gap-4 flex-grow">
          <input 
            type="text" 
            placeholder={t('portfolio.search_placeholder')}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full md:w-64 px-4 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-brand/50"
          />
          <select value={themeFilter} onChange={(e) => setThemeFilter(e.target.value)} className="w-full md:w-auto px-4 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-brand/50">
            {themes.map(tOption => (
              <option key={tOption} value={tOption}>
                {tOption === "ALL" ? t('portfolio.theme_all') : tOption}
              </option>
            ))}
          </select>
        </div>

        <div className="flex gap-1 p-1 bg-slate-100 rounded-lg shrink-0">
          <button onClick={() => setView("table")} className={`px-4 py-1.5 rounded-md text-sm font-semibold transition-all ${view === "table" ? "bg-white text-brand shadow-sm" : "text-slate-500 hover:text-slate-900"}`}>{t('portfolio.view_table')}</button>
          <button onClick={() => setView("card")} className={`px-4 py-1.5 rounded-md text-sm font-semibold transition-all ${view === "card" ? "bg-white text-brand shadow-sm" : "text-slate-500 hover:text-slate-900"}`}>{t('portfolio.view_card')}</button>
        </div>
      </div>

      {loading ? (
        <div className="flex justify-center py-20"><div className="animate-spin h-8 w-8 border-4 border-brand border-t-transparent rounded-full"></div></div>
      ) : filteredItems.length === 0 ? (
        <div className="text-center py-20 bg-white rounded-xl border border-slate-100 text-slate-500">{t('portfolio.no_results')}</div>
      ) : (
        <div className="transition-all duration-300">
          {view === "table" ? (
            <PortfolioTable items={filteredItems} onOpenProof={setProofItem} />
          ) : (
            <PortfolioCard items={filteredItems} onOpenProof={setProofItem} />
          )}
        </div>
      )}

      <ProofModal item={proofItem} onClose={() => setProofItem(null)} />
    </div>
  )
}