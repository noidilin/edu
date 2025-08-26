import Navbar from '@/components/nav-bar';
import Hero from './(home)/hero';
import LogoTicker from './(home)/logo-ticker';

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <LogoTicker />
    </>
  );
}
