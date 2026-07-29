import { motion } from 'framer-motion'
import { Phone, MessagesSquare, Star } from 'lucide-react'
import { site, whatsappHref } from '../data/site'
import { fadeUp, scaleIn, stagger } from '../utils/motion'

export default function Hero() {
  return (
    <section id="home" className="relative pt-28 pb-16 sm:pt-36 sm:pb-24 overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-brand-50 via-white to-white" />

      <div className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
        <motion.div variants={stagger} initial="hidden" animate="show" className="flex flex-col gap-6">
          <motion.span
            variants={fadeUp}
            className="inline-flex w-fit items-center gap-2 rounded-full bg-white border border-brand-200 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.15em] text-brand-700 shadow-soft"
          >
            <Star className="h-3.5 w-3.5 fill-accent-500 text-accent-500" />
            {site.googleRating} Google Rating · {site.reviewsCount} Reviews
          </motion.span>

          <motion.h1 variants={fadeUp} className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-ink tracking-tight leading-[1.1]">
            {site.tagline}
          </motion.h1>

          <motion.p variants={fadeUp} className="text-base sm:text-lg text-muted max-w-lg leading-relaxed">
            Compassionate, ethical, and modern dental care for every member of your family in BSK 3rd
            Stage — led by {site.doctor.name}, {site.doctor.credentials}.
          </motion.p>

          <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-3 pt-2">
            <motion.a
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-brand-600 text-white px-6 py-3.5 text-sm sm:text-base font-semibold shadow-soft hover:bg-brand-700 transition-colors duration-200"
            >
              <MessagesSquare className="h-5 w-5" />
              Book Appointment via WhatsApp
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              href={site.phoneHref}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-white text-ink border border-black/10 px-6 py-3.5 text-sm sm:text-base font-semibold shadow-soft hover:border-brand-300 transition-colors duration-200"
            >
              <Phone className="h-5 w-5 text-brand-600" />
              Call Now
            </motion.a>
          </motion.div>
        </motion.div>

        <motion.div
          variants={scaleIn}
          initial="hidden"
          animate="show"
          className="relative"
        >
          <div className="relative rounded-[28px] overflow-hidden shadow-lift aspect-[4/5] sm:aspect-[5/4] lg:aspect-[4/5]">
            <img
              src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=900&q=80"
              alt="Clean, modern dental clinic reception"
              className="h-full w-full object-cover"
              loading="eager"
            />
          </div>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="absolute -bottom-5 left-5 right-5 sm:left-auto sm:right-6 sm:w-64 bg-white rounded-2xl shadow-lift p-4 flex items-center gap-3"
          >
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-brand-50 text-brand-700 font-display font-bold">
              BK
            </span>
            <div className="leading-snug">
              <p className="text-sm font-semibold text-ink">{site.doctor.name}</p>
              <p className="text-xs text-muted">{site.doctor.credentials}</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
