import { motion } from 'framer-motion'
import { services } from '../data/content'
import { fadeUp, stagger, viewportOnce } from '../utils/motion'
import SectionHeading from './SectionHeading'

export default function Services() {
  return (
    <section id="services" className="py-16 sm:py-20 lg:py-24 bg-brand-50/40">
      <div className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-8 flex flex-col gap-12">
        <SectionHeading
          eyebrow="What We Offer"
          title="Comprehensive Dental Services"
          subtitle="Clear, one-sentence explanations for every treatment we offer — no jargon, no surprises."
        />

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
        >
          {services.map((service) => {
            const Icon = service.icon
            return (
              <motion.div
                key={service.title}
                variants={fadeUp}
                whileHover={{ y: -8 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                className="group bg-white rounded-2xl border border-black/5 shadow-soft p-6 flex flex-col gap-4 hover:shadow-lift"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-50 text-brand-600 transition-transform duration-300 group-hover:rotate-6 group-hover:scale-110">
                  <Icon className="h-6 w-6" />
                </span>
                <h3 className="text-base font-bold text-ink">{service.title}</h3>
                <p className="text-sm text-muted leading-relaxed">{service.description}</p>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
