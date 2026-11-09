import { useEffect } from "react"
import { useTranslation } from "react-i18next"

export default function ProofModal({ item, onClose }) {
  const { t } = useTranslation()

  useEffect(() => {
    if (!item) return
    const onKeyDown = (e) => { if (e.key === "Escape") onClose() }
    window.addEventListener("keydown", onKeyDown)
    document.body.style.overflow = "hidden"
    return () => {
      window.removeEventListener("keydown", onKeyDown)
      document.body.style.overflow = ""
    }
  }, [item, onClose])

  if (!item) return null
  const proofs = item.proofItems || []

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/70 backdrop-blur-sm animate-fade-in" onClick={onClose}>
      <div className="w-full max-w-2xl max-h-[85vh] overflow-y-auto rounded-2xl bg-white shadow-2xl" onClick={(e) => e.stopPropagation()}>
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200 sticky top-0 bg-white">
          <h3 className="text-lg font-bold text-slate-900">{item.activite}</h3>
          <button onClick={onClose} className="text-slate-400 hover:text-slate-900 text-2xl leading-none">&times;</button>
        </div>
        <div className="p-6 flex flex-col gap-4">
          {proofs.length === 0 && <p className="text-slate-500 text-sm">{t('portfolio.no_proof')}</p>}
          {proofs.map((proof, i) =>
            proof.type === "image" ? (
              <img key={i} src={proof.url} alt={proof.label || item.activite} className="w-full rounded-xl border border-slate-200" />
            ) : (
              <a key={i} href={proof.url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-3 rounded-xl border border-slate-200 text-brand font-medium hover:bg-slate-50">
                🔗 {proof.label || proof.url}
              </a>
            )
          )}
        </div>
      </div>
    </div>
  )
}