import { useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { Eye } from 'lucide-react'
import { services } from '../data/content'
import { fadeUp, stagger, viewportOnce } from '../utils/motion'
import SectionHeading from './SectionHeading'

export default function Services() {
  const [active, setActive] = useState(null)
  // Touch fires pointerenter too, so remember how the card was reached and let
  // tap toggle only on touch — otherwise a mouse click would close the reveal.
  const pointerType = useRef('mouse')

  const toggle = (i) => setActive((current) => (current === i ? null : i))

  return (
    <section id="services" className="py-16 sm:py-20 lg:py-24 bg-brand-50/40">
      <div className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-8 flex flex-col gap-12">
        <SectionHeading
          eyebrow="What We Offer"
          title="Comprehensive Dental Care"
          subtitle="Complete dental solutions for patients of all ages, using modern technology and a gentle approach."
        />

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6"
        >
          {services.map((service, i) => {
            const Icon = service.icon
            const isActive = active === i

            return (
              <motion.div
                key={service.title}
                variants={fadeUp}
                role="button"
                tabIndex={0}
                aria-expanded={isActive}
                aria-label={`${service.title} — view illustration`}
                onPointerEnter={(e) => {
                  pointerType.current = e.pointerType
                  if (e.pointerType === 'mouse') setActive(i)
                }}
                onPointerLeave={(e) => {
                  if (e.pointerType === 'mouse') setActive(null)
                }}
                onClick={() => {
                  if (pointerType.current !== 'mouse') toggle(i)
                }}
                onFocus={() => setActive(i)}
                onBlur={() => setActive(null)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault()
                    toggle(i)
                  }
                }}
                className="group relative aspect-[5/4] overflow-hidden rounded-2xl border border-black/5 bg-white shadow-soft transition-shadow duration-300 hover:shadow-lift focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2 cursor-pointer"
              >
                {/* Resting state */}
                <div
                  className={`absolute inset-0 flex flex-col gap-4 p-6 sm:p-8 transition-opacity duration-300 ease-out ${
                    isActive ? 'opacity-0' : 'opacity-100'
                  }`}
                >
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
                    <Icon className="h-6 w-6" />
                  </span>
                  <h3 className="text-lg sm:text-xl font-bold text-ink">{service.title}</h3>
                  <p className="text-sm sm:text-base text-muted leading-relaxed max-w-sm">
                    {service.description}
                  </p>
                  <span className="mt-auto text-brand-600/40" aria-hidden="true">
                    <Eye className="h-4 w-4" />
                  </span>
                </div>

                {/* The captioned artwork is authored at 5:4, matching the card,
                    so object-cover fills it edge to edge without cropping any
                    of the baked-in text. */}
                <div
                  className={`absolute inset-0 transition-opacity duration-300 ease-out ${
                    isActive ? 'opacity-100' : 'opacity-0'
                  }`}
                  aria-hidden={!isActive}
                >
                  <img
                    src={service.image}
                    alt={`${service.title} at Poornaprajna Dantalaya`}
                    loading="lazy"
                    decoding="async"
                    className={`h-full w-full object-cover transition-transform duration-500 ease-out ${
                      isActive ? 'scale-100' : 'scale-[1.03]'
                    }`}
                  />

                  {!service.captioned && (
                    <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/80 to-transparent px-6 pb-5 pt-10">
                      <h3 className="text-base sm:text-lg font-bold text-white">{service.title}</h3>
                    </div>
                  )}
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
