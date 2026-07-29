import { motion } from 'framer-motion'
import { Star } from 'lucide-react'
import { site } from '../data/site'
import { testimonials } from '../data/content'
import { fadeUp, stagger, viewportOnce } from '../utils/motion'
import SectionHeading from './SectionHeading'

export default function Testimonials() {
  return (
    <section id="reviews" className="py-16 sm:py-20 lg:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-8 flex flex-col gap-12">
        <SectionHeading
          eyebrow="Trusted by Our Patients"
          title={`Rated ${site.googleRating}★ on Google`}
          subtitle="Nothing speaks louder than the experience of our patients."
        />

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="grid grid-cols-1 md:grid-cols-3 gap-5"
        >
          {testimonials.map((t) => (
            <motion.div
              key={t.name}
              variants={fadeUp}
              className="bg-surface rounded-2xl border border-black/5 shadow-soft p-6 flex flex-col gap-4"
            >
              <div className="flex gap-0.5" aria-label={`${t.rating} out of 5 stars`}>
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-accent-500 text-accent-500" />
                ))}
              </div>
              <p className="text-sm text-ink/80 leading-relaxed">"{t.review}"</p>
              <p className="text-sm font-semibold text-ink mt-auto">{t.name}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="text-center text-lg font-semibold text-brand-700"
        >
          Your trust is our greatest achievement.
        </motion.p>
      </div>
    </section>
  )
}
