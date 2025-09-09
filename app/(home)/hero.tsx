import { ChevronDown } from 'lucide-react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { H1 } from '@/components/ui/typography'
import heroImage from '@/public/images/hero-image.jpg'

function Hero() {
  return (
    <section className='section-box mt-40 grid md:mt-0 md:h-screen md:grid-cols-12 md:items-stretch'>
      <div className='flex flex-col justify-center md:col-span-7'>
        <H1 className='text-5xl md:text-6xl lg:text-7xl'>
          Crafting digital experiences through code and creative design
        </H1>
        <div className='mt-10 flex flex-col items-start gap-6 md:flex-row'>
          <Button variant='outline' className='dark:bg-background'>
            View My Work <ChevronDown />
          </Button>
          <Button variant='ghost'>Let&apos;s Talk</Button>
        </div>
      </div>
      <div className='mt-20 md:col-span-5 md:mt-0 md:h-full'>
        <Image
          src={heroImage}
          alt='portrait image'
          className='size-full object-cover'
        />
      </div>
    </section>
  )
}

export default Hero
