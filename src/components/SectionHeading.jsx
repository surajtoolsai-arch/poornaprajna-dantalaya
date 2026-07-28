import { motion } from 'framer-motion'
import { fadeUp, viewportOnce } from '../utils/motion'

export default function SectionHeading({ eyebrow, title, subtitle, align = 'center' }) {
  const alignment = align === 'center' ? 'items-center text-center mx-auto' : 'items-start text-left'

  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={viewportOnce}
      className={`flex flex-col gap-3 max-w-2xl ${alignment}`}
    >
      {eyebrow && (
        <span className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-600">
          {eyebrow}
        </span>
      )}
      <h2 className="text-3xl sm:text-4xl font-extrabold text-ink tracking-tight">{title}</h2>
      {subtitle && <p className="text-muted text-base leading-relaxed">{subtitle}</p>}
    </motion.div>
  )
}
