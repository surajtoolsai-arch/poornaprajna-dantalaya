import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Testimonials from './components/Testimonials'
import LearnWithUs from './components/LearnWithUs'
import Contact from './components/Contact'
import Footer from './components/Footer'
import StickyCTA from './components/StickyCTA'

export default function App() {
  return (
    <div className="pb-20 lg:pb-0">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Testimonials />
        <LearnWithUs />
        <Contact />
      </main>
      <Footer />
      <StickyCTA />
    </div>
  )
}
