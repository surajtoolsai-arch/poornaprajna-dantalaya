import { site } from '../data/site'

export default function Footer() {
  return (
    <footer className="bg-ink text-white/80 py-10">
      <div className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-8 flex flex-col gap-4 items-center text-center">
        <div className="flex items-center gap-2.5">
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-brand-600 text-white font-display font-bold text-xs">
            PD
          </span>
          <span className="font-display font-bold text-white text-sm sm:text-base">{site.name}</span>
        </div>
        <p className="text-sm font-semibold text-brand-200">{site.signOff}</p>
        <p className="text-xs sm:text-sm text-white/60 max-w-md leading-relaxed">{site.address}</p>
        <p className="text-xs text-white/40">
          © {new Date().getFullYear()} {site.name}. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
