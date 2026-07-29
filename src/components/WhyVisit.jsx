import { motion } from 'framer-motion'
import { HeartPulse, ShieldCheck, MessageCircleHeart } from 'lucide-react'
import { fadeUp, stagger, viewportOnce } from '../utils/motion'

const pillars = [
  {
    title: 'Compassionate',
    description: 'Enough time to understand your dental health, and questions answered patiently.',
    icon: MessageCircleHeart,
  },
  {
    title: 'Ethical',
    description: 'Only the treatment that is truly necessary — nothing added, nothing rushed.',
    icon: ShieldCheck,
  },
  {
    title: 'Modern',
    description: 'Evidence-based care and modern techniques for every member of your family.',
    icon: HeartPulse,
  },
]

export default function WhyVisit() {
  return (
    <section id="why" className="py-16 sm:py-20 lg:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-8 flex flex-col gap-12">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="max-w-3xl flex flex-col gap-5"
        >
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-600">
            Why Visit Us
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-ink tracking-tight">
            Your oral health is a mirror of your general health
          </h2>
          <p className="text-base text-muted leading-relaxed">
            Your mouth often gives the earliest signs of serious conditions elsewhere in the body.
            Diagnosed early by a dentist, those signs can help prevent far more serious illness later.
          </p>
          <p className="text-base text-muted leading-relaxed">
            We believe every patient deserves honest guidance, gentle treatment, and enough time to
            understand their dental health. We explain every procedure clearly, answer your questions
            patiently, and recommend only the treatment that is truly necessary.
          </p>
          <p className="text-lg font-semibold text-brand-700">Healthy smiles begin with trust.</p>
        </motion.div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="grid grid-cols-1 sm:grid-cols-3 gap-5"
        >
          {pillars.map((pillar) => {
            const Icon = pillar.icon
            return (
              <motion.div
                key={pillar.title}
                variants={fadeUp}
                className="rounded-2xl border border-black/5 bg-surface shadow-soft p-6 flex flex-col gap-3"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className="text-base font-bold text-ink">{pillar.title}</h3>
                <p className="text-sm text-muted leading-relaxed">{pillar.description}</p>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
