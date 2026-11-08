import { useTranslation } from 'react-i18next'

export default function Home() {
  const { t } = useTranslation()

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold text-brand mb-4">{t('home.title')}</h1>
      <p className="text-slate-600">{t('home.subtitle')}</p>
    </div>
  )
}