import { motion } from 'framer-motion'
import { Instagram, PlayCircle } from 'lucide-react'
import { site } from '../data/site'
import { learnTopics } from '../data/content'
import { fadeUp, slideRight, viewportOnce } from '../utils/motion'

export default function LearnWithUs() {
  return (
    <section id="learn" className="py-16 sm:py-20 lg:py-24 bg-brand-900 text-white overflow-hidden">
      <div className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="flex flex-col gap-5"
        >
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-200">
            Learn With Us
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Learn about your dental health
          </h2>
          <p className="text-base text-brand-100/90 leading-relaxed max-w-lg">
            We believe informed patients make better decisions. Follow Dr. Bhargavi on Instagram for
            simple, easy-to-understand videos covering:
          </p>

          <ul className="flex flex-wrap gap-2">
            {learnTopics.map((topic) => (
              <li
                key={topic}
                className="rounded-full bg-white/10 border border-white/15 px-3.5 py-1.5 text-sm text-brand-50"
              >
                {topic}
              </li>
            ))}
          </ul>

          <p className="text-base text-brand-100/90 leading-relaxed max-w-lg">
            Because understanding your treatment is the first step towards a healthier smile.
          </p>

          <motion.a
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            href={site.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 w-fit rounded-full bg-white text-brand-900 px-6 py-3.5 text-sm sm:text-base font-semibold shadow-soft hover:bg-brand-50 transition-colors duration-200"
          >
            <Instagram className="h-5 w-5" />
            Follow on Instagram
          </motion.a>
        </motion.div>

        <motion.div
          variants={slideRight}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="grid grid-cols-2 gap-4"
        >
          {[
            'https://images.unsplash.com/photo-1609840114035-3c981b782dfe?auto=format&fit=crop&w=600&q=80',
            'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=600&q=80',
          ].map((src, i) => (
            <div key={src} className={`relative rounded-2xl overflow-hidden aspect-[3/4] ${i === 1 ? 'mt-8' : ''}`}>
              <img src={src} alt="Dental education content preview" className="h-full w-full object-cover" loading="lazy" />
              <div className="absolute inset-0 bg-ink/25 flex items-center justify-center">
                <PlayCircle className="h-10 w-10 text-white/90" />
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
