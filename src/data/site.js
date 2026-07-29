// Single source of truth for clinic identity & contact details.
// Update here and every component picks it up automatically.

export const site = {
  name: 'Poornaprajna Dantalaya',
  tagline: 'Your Smile is Our Pride',
  signOff: 'Your Smile. Our Commitment.',
  doctor: {
    name: 'Dr. Bhargavi Koty',
    credentials: 'B.D.S., Dental Surgeon',
    college: 'Govt. Dental College & Hospital',
    registration: 'Registration No. 63992 A',
  },
  phone: '+91 94821 67057',
  phoneSecondary: '+91 99450 44296',
  phoneHref: 'tel:+919482167057',
  phoneSecondaryHref: 'tel:+919945044296',
  whatsappNumber: '919482167057',
  whatsappMessage: "Hello, I'd like to book an appointment at Poornaprajna Dantalaya.",
  email: 'dr.bhargavi.koty@gmail.com',
  address: '#11 & 12, 2nd Main, Gururaja Layout, Thyagraj Nagar, BSK 3rd Stage, Behind Vidyapeetha Circle, Bengaluru – 560070',
  mapsQuery: 'Gururaja Layout, Thyagraj Nagar, BSK 3rd Stage, Bengaluru 560070',
  mapsLink: 'https://www.google.com/maps/search/?api=1&query=Gururaja+Layout+Thyagraj+Nagar+BSK+3rd+Stage+Bengaluru+560070',
  instagram: 'https://www.instagram.com/poornaprajnadantalaya',
  googleRating: '5.0',
  reviewsCount: '23',
  hours: [
    { day: 'Monday – Saturday', time: '10:00 AM – 2:00 PM, 5:00 PM – 8:30 PM' },
    { day: 'Sunday', time: 'Closed' },
  ],
}

export const whatsappHref = `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(site.whatsappMessage)}`
