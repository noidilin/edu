import Header from '@/components/header'
import Hero from './(home)/hero'
import Intro from './(home)/intro'
import Projects from './(home)/projects'
import Testimonials from './(home)/testimonials'
import FAQs from './(home)/faq'
import Footer from '@/components/footer'

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Intro />
      <Projects />
      <Testimonials />
      <FAQs />
      <Footer />
    </>
  )
}
