import { useTranslation } from 'react-i18next'

export default function News() {
  const { t } = useTranslation()

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold text-brand mb-4">{t('news.title')}</h1>
      <p className="text-slate-600">{t('news.subtitle')}</p>
    </div>
  )
}