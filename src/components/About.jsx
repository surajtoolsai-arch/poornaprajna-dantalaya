import { motion } from 'framer-motion'
import { BadgeCheck } from 'lucide-react'
import { site } from '../data/site'
import { fadeUp, slideRight, viewportOnce } from '../utils/motion'

export default function About() {
  return (
    <section id="about" className="py-16 sm:py-20 lg:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
        <motion.div
          variants={slideRight}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="relative order-2 lg:order-1"
        >
          <div className="rounded-[24px] overflow-hidden shadow-soft aspect-[4/3]">
            <img
              src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=900&q=80"
              alt="Warm, clean dental consultation room"
              className="h-full w-full object-cover"
              loading="lazy"
            />
          </div>
        </motion.div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="order-1 lg:order-2 flex flex-col gap-4"
        >
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-600">
            Meet Your Dentist
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-ink tracking-tight">
            {site.doctor.name}
          </h2>
          <p className="text-sm font-semibold text-brand-700">{site.doctor.credentials}</p>

          <p className="text-base text-muted leading-relaxed max-w-prose">
            At Poornaprajna Dantalaya, Dr. Bhargavi Koty treats every patient like family —
            taking the time to listen, explain each step in plain language, and recommend
            only the treatment you actually need. Whether it's a routine check-up or a more
            involved procedure, you're in calm, capable hands.
          </p>

          <div className="flex items-center gap-2.5 rounded-xl bg-brand-50 px-4 py-3 w-fit">
            <BadgeCheck className="h-5 w-5 text-brand-600 shrink-0" />
            <span className="text-sm font-medium text-ink">{site.doctor.registration}</span>
          </div>

          <blockquote className="border-l-2 border-brand-300 pl-4 text-ink/80 italic text-sm sm:text-base">
            "Your comfort matters as much as your smile — we go at your pace, always."
          </blockquote>
        </motion.div>
      </div>
    </section>
  )
}
