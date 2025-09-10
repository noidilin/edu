import Header from '@/components/header'
import Hero from './(home)/hero'
import Intro from './(home)/intro'
import Projects from './(home)/projects'
import Testimonials from './(home)/testimonials'

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Intro />
      <Projects />
      <Testimonials />
    </>
  )
}
