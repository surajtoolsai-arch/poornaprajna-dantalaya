import { Stethoscope, Sparkles, Wrench, Activity, PocketKnife, Scissors, AlignJustify, Layers } from 'lucide-react'

export const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Reviews', href: '#reviews' },
  { label: 'Learn With Us', href: '#learn' },
  { label: 'Contact', href: '#contact' },
]

export const testimonials = [
  {
    name: 'Shrivatsa Kulkarni',
    rating: 5,
    review: 'I had a very good experience at this dental clinic. The doctors and staff were very professional, friendly, and made me feel at ease throughout the entire process.',
  },
  {
    name: 'Sindhu Bhagi',
    rating: 5,
    review: 'My daughter is 7 years old and the doctor Bhargavi is patient and makes her feel comfortable. She did not suggest unnecessary and expensive treatments. It was a wonderful experience.',
  },
  {
    name: 'Srihari Upadhyaya K',
    rating: 5,
    review: 'A good dental clinic that offers great value for money. Dr. Bhargavi Koty did an excellent job with my root canal treatment and cap fitting — she explained the procedure clearly and gave proper post-treatment instructions.',
  },
]

export const services = [
  {
    title: 'Routine Oral Check-up',
    description: 'A thorough exam to catch issues early and keep your mouth healthy.',
    icon: Stethoscope,
  },
  {
    title: 'Dental Cleaning & Whitening',
    description: 'Gentle professional cleaning that removes plaque and brightens your smile.',
    icon: Sparkles,
  },
  {
    title: 'Dental Fillings',
    description: "Comfortable, tooth-coloured fillings to treat cavities and restore strength.",
    icon: Wrench,
  },
  {
    title: 'Root Canal Therapy',
    description: 'Gentle, modern root canal treatment to relieve pain and save your tooth.',
    icon: Activity,
  },
  {
    title: 'Dental Implants',
    description: 'Durable, natural-looking replacements for missing teeth.',
    icon: PocketKnife,
  },
  {
    title: 'Dental Extractions',
    description: "Safe, careful removal when a tooth truly can't be saved.",
    icon: Scissors,
  },
  {
    title: 'Dental Braces',
    description: 'Guided teeth alignment for a straighter, more confident smile.',
    icon: AlignJustify,
  },
  {
    title: 'Dental Crowns & Bridge',
    description: 'Custom-fitted restorations that protect and complete your smile.',
    icon: Layers,
  },
]
