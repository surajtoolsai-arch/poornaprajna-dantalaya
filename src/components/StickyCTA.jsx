import { Phone, MessagesSquare } from 'lucide-react'
import { site, whatsappHref } from '../data/site'

export default function StickyCTA() {
  return (
    <div className="fixed bottom-0 inset-x-0 z-40 lg:hidden bg-white border-t border-black/5 shadow-lift px-4 py-3 flex gap-3 pb-[calc(env(safe-area-inset-bottom)+0.75rem)]">
      <a
        href={whatsappHref}
        target="_blank"
        rel="noopener noreferrer"
        className="flex-1 inline-flex items-center justify-center gap-2 rounded-full bg-brand-600 text-white px-4 py-3 text-sm font-semibold shadow-soft active:scale-[0.98] transition-transform"
      >
        <MessagesSquare className="h-4 w-4" />
        WhatsApp
      </a>
      <a
        href={site.phoneHref}
        className="flex-1 inline-flex items-center justify-center gap-2 rounded-full bg-white text-ink border border-black/10 px-4 py-3 text-sm font-semibold active:scale-[0.98] transition-transform"
      >
        <Phone className="h-4 w-4 text-brand-600" />
        Call Now
      </a>
    </div>
  )
}
