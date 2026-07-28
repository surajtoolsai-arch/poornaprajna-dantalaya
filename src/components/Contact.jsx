import { motion } from 'framer-motion'
import { MapPin, Phone, Mail, Clock, MessagesSquare } from 'lucide-react'
import { site, whatsappHref } from '../data/site'
import { fadeUp, slideRight, viewportOnce } from '../utils/motion'
import SectionHeading from './SectionHeading'

export default function Contact() {
  return (
    <section id="contact" className="py-16 sm:py-20 lg:py-24 bg-surface">
      <div className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-8 flex flex-col gap-12">
        <SectionHeading eyebrow="Visit Us" title="Book your visit or drop by" />

        <div className="grid lg:grid-cols-2 gap-8 items-start">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            className="bg-white rounded-2xl border border-black/5 shadow-soft p-6 sm:p-8 flex flex-col gap-6"
          >
            <div className="flex items-start gap-3.5">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-50 text-brand-600">
                <MapPin className="h-5 w-5" />
              </span>
              <div>
                <p className="text-sm font-semibold text-ink">Address</p>
                <p className="text-sm text-muted leading-relaxed">{site.address}</p>
              </div>
            </div>

            <div className="flex items-start gap-3.5">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-50 text-brand-600">
                <Phone className="h-5 w-5" />
              </span>
              <div>
                <p className="text-sm font-semibold text-ink">Phone</p>
                <a href={site.phoneHref} className="block text-sm text-muted hover:text-brand-600 transition-colors">{site.phone}</a>
                <a href={site.phoneSecondaryHref} className="block text-sm text-muted hover:text-brand-600 transition-colors">{site.phoneSecondary}</a>
              </div>
            </div>

            <div className="flex items-start gap-3.5">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-50 text-brand-600">
                <Mail className="h-5 w-5" />
              </span>
              <div>
                <p className="text-sm font-semibold text-ink">Email</p>
                <a href={`mailto:${site.email}`} className="text-sm text-muted hover:text-brand-600 transition-colors break-all">{site.email}</a>
              </div>
            </div>

            <div className="flex items-start gap-3.5">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-50 text-brand-600">
                <Clock className="h-5 w-5" />
              </span>
              <div className="text-sm text-muted leading-relaxed">
                <p className="font-semibold text-ink mb-0.5">Hours</p>
                {site.hours.map((h) => (
                  <p key={h.day}>{h.day}: {h.time}</p>
                ))}
              </div>
            </div>

            <motion.a
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-brand-600 text-white px-6 py-3.5 text-sm sm:text-base font-semibold shadow-soft hover:bg-brand-700 transition-colors duration-200 mt-2"
            >
              <MessagesSquare className="h-5 w-5" />
              Book Appointment via WhatsApp
            </motion.a>
          </motion.div>

          <motion.div
            variants={slideRight}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            className="rounded-2xl overflow-hidden shadow-soft aspect-[4/3] lg:aspect-auto lg:h-full min-h-[360px]"
          >
            <iframe
              title="Poornaprajna Dantalaya location on Google Maps"
              src={`https://www.google.com/maps?q=${encodeURIComponent(site.mapsQuery)}&output=embed`}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-full w-full"
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
