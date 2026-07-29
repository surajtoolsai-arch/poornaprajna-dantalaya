import { Stethoscope, Sparkles, Wrench, Activity, PocketKnife, Scissors, AlignJustify, Layers } from 'lucide-react'

export const navLinks = [
  { label: 'Why Visit Us', href: '#why' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Reviews', href: '#reviews' },
  { label: 'Learn', href: '#learn' },
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
    title: 'Preventive Dental Check-ups',
    description: 'Regular examinations to detect problems early and maintain lifelong oral health.',
    icon: Stethoscope,
  },
  {
    title: 'Professional Teeth Cleaning & Whitening',
    description: 'Remove plaque, stains, and tartar while improving the brightness of your smile.',
    icon: Sparkles,
  },
  {
    title: 'Tooth-Coloured Fillings',
    description: 'Natural-looking restorations that repair cavities and strengthen damaged teeth.',
    icon: Wrench,
  },
  {
    title: 'Comfortable Root Canal Treatment',
    description: 'Modern, painless techniques to relieve tooth pain and preserve your natural tooth.',
    icon: Activity,
  },
  {
    title: 'Dental Implants',
    description: 'Permanent, natural-looking replacements that restore missing teeth with confidence.',
    icon: PocketKnife,
  },
  {
    title: 'Tooth Extractions',
    description: 'Safe and gentle removal of teeth only when they cannot be saved.',
    icon: Scissors,
  },
  {
    title: 'Braces & Teeth Alignment',
    description: 'Personalised orthodontic treatments to create healthier bites and confident smiles.',
    icon: AlignJustify,
  },
  {
    title: 'Crowns & Bridges',
    description: 'Strong, custom-made restorations that protect damaged teeth and replace missing ones.',
    icon: Layers,
  },
]

export const learnTopics = [
  'Tooth pain',
  'Root canal treatment',
  'Dental implants',
  'Braces',
  "Children's dental care",
  'Oral hygiene tips',
  'Common dental myths',
]
