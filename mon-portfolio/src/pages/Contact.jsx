import { useTranslation } from 'react-i18next'

export default function Contact() {
  const { t } = useTranslation()

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold text-brand mb-4">{t('contact.title')}</h1>
      <p className="text-slate-600">{t('contact.subtitle')}</p>
    </div>
  )
}