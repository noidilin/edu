import Navbar from '@/components/nav-bar'
import Hero from './(home)/hero'
import LogoTicker from './(home)/logo-ticker'
import Intro from './(home)/intro'

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <LogoTicker />
      <Intro />
    </>
  )
}
