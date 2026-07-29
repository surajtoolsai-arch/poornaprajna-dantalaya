import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Phone, MessagesSquare } from 'lucide-react'
import { site, whatsappHref } from '../data/site'
import { navLinks } from '../data/content'
import { useScrollTo } from '../utils/useScrollTo'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const scrollTo = useScrollTo()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  const handleNavClick = (href) => {
    setOpen(false)
    scrollTo(href)
  }

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/95 backdrop-blur shadow-soft' : 'bg-transparent'
      }`}
    >
      <nav className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-8 flex items-center gap-4 h-16 sm:h-20">
        <a
          href="#home"
          onClick={(e) => { e.preventDefault(); handleNavClick('#home') }}
          className="flex items-center gap-2.5 shrink-0"
        >
          <span className="flex h-9 w-9 sm:h-10 sm:w-10 shrink-0 items-center justify-center rounded-full bg-brand-600 text-white font-display font-bold text-sm">
            PD
          </span>
          <span className="font-display font-bold text-[15px] sm:text-lg text-ink leading-tight">
            Poornaprajna Dantalaya
          </span>
        </a>

        {/* flex-1 lets the links share the space left between the logo and the CTA. */}
        <div className="hidden lg:flex flex-1 items-center justify-center gap-6 xl:gap-8">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNavClick(link.href)}
              className="whitespace-nowrap text-sm font-medium text-ink/80 hover:text-brand-600 transition-colors duration-150"
            >
              {link.label}
            </button>
          ))}
        </div>

        <div className="hidden lg:flex items-center gap-4 shrink-0">
          {/* Phone only fits from xl; below that it is still in the hero, contact and sticky bar. */}
          <a href={site.phoneHref} className="hidden xl:flex items-center gap-2 whitespace-nowrap text-sm font-semibold text-ink hover:text-brand-600 transition-colors">
            <Phone className="h-4 w-4 text-brand-600" />
            {site.phone}
          </a>
          <a
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 whitespace-nowrap rounded-full bg-brand-600 text-white px-4 py-2.5 text-sm font-semibold shadow-soft hover:bg-brand-700 hover:scale-[1.03] active:scale-[0.98] transition-all duration-200"
          >
            <MessagesSquare className="h-4 w-4" />
            Book Appointment
          </a>
        </div>

        <button
          onClick={() => setOpen(true)}
          className="lg:hidden ml-auto flex h-11 w-11 shrink-0 items-center justify-center rounded-full text-ink hover:bg-brand-50 transition-colors"
          aria-label="Open menu"
        >
          <Menu className="h-6 w-6" />
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-ink/40 z-40 lg:hidden"
              onClick={() => setOpen(false)}
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              className="fixed top-0 right-0 h-full w-[78%] max-w-xs bg-white z-50 shadow-lift lg:hidden flex flex-col"
            >
              <div className="flex items-center justify-between px-5 h-16 border-b border-black/5">
                <span className="font-display font-bold text-ink">Menu</span>
                <button
                  onClick={() => setOpen(false)}
                  className="flex h-10 w-10 items-center justify-center rounded-full hover:bg-brand-50"
                  aria-label="Close menu"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
              <div className="flex flex-col p-5 gap-1">
                {navLinks.map((link) => (
                  <button
                    key={link.href}
                    onClick={() => handleNavClick(link.href)}
                    className="text-left py-3 px-2 rounded-lg text-base font-medium text-ink hover:bg-brand-50 hover:text-brand-700 transition-colors"
                  >
                    {link.label}
                  </button>
                ))}
              </div>
              <div className="mt-auto p-5 flex flex-col gap-3 border-t border-black/5">
                <a href={site.phoneHref} className="flex items-center gap-2 text-sm font-semibold text-ink">
                  <Phone className="h-4 w-4 text-brand-600" /> {site.phone}
                </a>
                <a
                  href={whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-brand-600 text-white px-4 py-3 text-sm font-semibold shadow-soft"
                >
                  <MessagesSquare className="h-4 w-4" />
                  Book Appointment
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  )
}
