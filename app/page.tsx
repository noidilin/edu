import Navbar from '@/components/nav-bar'
import Hero from './(home)/hero'
import LogoTicker from './(home)/logo-ticker'
import Intro from './(home)/intro'
import Features from './(home)/features'
import Integrations from './(home)/integrations'
import Faqs from './(home)/faqs'
import Cta from './(home)/cta'
import Footer from '@/components/footer'

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <LogoTicker />
      <Intro />
      <Features />
      <Integrations />
      <Faqs />
      <Cta />
      <Footer />
    </>
  )
}
