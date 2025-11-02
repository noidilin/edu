import { ChevronRight } from 'lucide-react'
import Image from 'next/image'
import { H2, H3 } from '@/components/ui/typography'
import image1 from '@/public/images/project-1.jpg'
import image2 from '@/public/images/project-2.jpg'
import image3 from '@/public/images/project-3.jpg'
import image4 from '@/public/images/project-4.jpg'
import image5 from '@/public/images/project-5.jpg'
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from '@/components/ui/hover-card'

const projects = [
  {
    name: 'Artisan Brew Co.',
    image: image1,
  },
  {
    name: 'Wavelength Studios',
    image: image2,
  },
  {
    name: 'Nova Fitness',
    image: image3,
  },
  {
    name: 'Urban Plates',
    image: image4,
  },
  {
    name: 'Bloom Botanicals',
    image: image5,
  },
]

function Projects() {
  return (
    <section className='section-box section-padding' id='projects'>
      <H2 className='text-4xl font-bold md:text-7xl lg:text-8xl'>
        Select Works
      </H2>
      <div className='mt-10'>
        {projects.map(({ name, image }) => (
          <a
            href='/'
            key={name}
            className='group/project relative flex flex-col border-b py-6 last:border-0 md:py-8 lg:py-10'
          >
            <div className='absolute bottom-0 left-0 h-0.5 w-0 bg-accent transition-all duration-300 group-hover/project:w-full' />
            <HoverCard>
              <div className='aspect-video md:hidden'>
                <Image
                  src={image}
                  alt={`${name} image`}
                  className='size-full object-cover'
                />
              </div>
              <HoverCardTrigger asChild>
                <div className='mt-8 flex items-end justify-between md:mt-0'>
                  <div className='transition-all duration-300 group-hover/project:pl-4'>
                    <H3 className='md:text-3xl lg:text-4xl'>{name}</H3>
                  </div>
                  <div className='transition-all duration-300 group-hover/project:pr-4'>
                    <ChevronRight />
                  </div>
                </div>
              </HoverCardTrigger>
              <HoverCardContent
                align='end'
                sideOffset={0}
                className='md:w-sm lg:w-md xl:w-xl'
              >
                <Image
                  src={image}
                  alt={`${name} image`}
                  className='size-full object-cover'
                />
              </HoverCardContent>
            </HoverCard>
          </a>
        ))}
      </div>
    </section>
  )
}

export default Projects
