import { useState, useEffect, useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import NewsCard from '../components/NewsCard'
import { fetchAllNews } from '../services/newsService'

export default function News() {
  const { t, i18n } = useTranslation()
  const [news, setNews] = useState([])
  const [loading, setLoading] = useState(true)

  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('ALL') // Clé technique pour "Tous"
  const [sortOrder, setSortOrder] = useState('desc')
  const [visibleCount, setVisibleCount] = useState(4)

  useEffect(() => {
    const getNews = async () => {
      try {
        const data = await fetchAllNews(i18n.language)
        setNews(data)
      } catch (error) {
        console.error("Erreur", error)
      } finally {
        setLoading(false)
      }
    }
    getNews()
  }, [i18n.language])

  const categories = useMemo(() => {
    const cats = news.map(item => item.category).filter(Boolean)
    return ['ALL', ...new Set(cats)]
  }, [news])

  const processedNews = useMemo(() => {
    let result = [...news]

    if (searchQuery) {
      const lowerQuery = searchQuery.toLowerCase()
      result = result.filter(item => 
        item.title.toLowerCase().includes(lowerQuery) || 
        item.description.toLowerCase().includes(lowerQuery) ||
        item.tags.some(tag => tag.toLowerCase().includes(lowerQuery))
      )
    }

    if (selectedCategory !== 'ALL') {
      result = result.filter(item => item.category === selectedCategory)
    }

    result.sort((a, b) => {
      const dateA = new Date(a.date).getTime()
      const dateB = new Date(b.date).getTime()
      return sortOrder === 'desc' ? dateB - dateA : dateA - dateB
    })

    return result
  }, [news, searchQuery, selectedCategory, sortOrder])

  const isFiltering = searchQuery !== '' || selectedCategory !== 'ALL'
  const featuredArticle = !isFiltering ? processedNews.find(item => item.isFeatured) : null
  
  const gridNews = featuredArticle 
    ? processedNews.filter(item => item.id !== featuredArticle.id) 
    : processedNews

  return (
    <div className="max-w-6xl mx-auto space-y-10">
      
      {/* En-tête */}
      <div className="border-b border-slate-200 pb-6 text-center md:text-left">
        <h1 className="text-4xl font-bold text-brand mb-4">{t('news.title')}</h1>
        <p className="text-lg text-slate-600">{t('news.subtitle')}</p>
      </div>

      {/* Barre de contrôles */}
      <div className="flex flex-col md:flex-row gap-4 justify-between items-center bg-white p-4 rounded-xl shadow-sm border border-slate-100">
        
        <div className="relative w-full md:w-1/3">
          <input 
            type="text" 
            placeholder={t('news.search')}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand/50 transition-all text-sm"
          />
          <svg className="w-5 h-5 absolute left-3 top-2.5 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>

        {/* Catégories (Onglets) */}
        <div className="flex gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-hide">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`whitespace-nowrap px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                selectedCategory === cat 
                  ? 'bg-brand text-white shadow-md' 
                  : 'bg-slate-50 text-slate-600 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              {/* On traduit la clé 'ALL', sinon on affiche le nom de la catégorie */}
              {cat === 'ALL' ? t('news.category_all') : cat}
            </button>
          ))}
        </div>

        <select 
          value={sortOrder}
          onChange={(e) => setSortOrder(e.target.value)}
          className="w-full md:w-auto px-4 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm text-slate-700 focus:outline-none focus:ring-2 focus:ring-brand/50 cursor-pointer"
        >
          <option value="desc">{t('news.sort_newest')}</option>
          <option value="asc">{t('news.sort_oldest')}</option>
        </select>

      </div>

      {loading ? (
        <div className="flex justify-center py-20">
          <div className="animate-spin h-8 w-8 border-4 border-brand border-t-transparent rounded-full"></div>
        </div>
      ) : (
        <div className="space-y-10">
          
          {featuredArticle && (
            <section className="mb-12">
              <h2 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-brand animate-pulse"></span>
                {t('news.featured_title')}
              </h2>
              <div className="md:w-2/3 lg:w-1/2">
                <NewsCard {...featuredArticle} />
              </div>
            </section>
          )}

          <section>
            {featuredArticle && gridNews.length > 0 && (
              <h2 className="text-xl font-bold text-slate-900 mb-6 border-b border-slate-200 pb-2 inline-block">
                {t('news.all_articles_title')}
              </h2>
            )}
            
            {gridNews.length === 0 ? (
              <div className="text-center py-12 text-slate-500 bg-white rounded-xl border border-slate-100">
                {t('news.no_results')}
              </div>
            ) : (
              <>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {gridNews.slice(0, visibleCount).map(item => (
                    <NewsCard key={item.id} {...item} />
                  ))}
                </div>

                {visibleCount < gridNews.length && (
                  <div className="flex justify-center mt-10">
                    <button 
                      onClick={() => setVisibleCount(prev => prev + 3)}
                      className="px-6 py-3 bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold rounded-lg transition-colors border border-slate-200 shadow-sm"
                    >
                      {t('news.load_more')}
                    </button>
                  </div>
                )}
              </>
            )}
          </section>
        </div>
      )}
    </div>
  )
}