import { ChevronRight } from 'lucide-react'
import Image from 'next/image'
import { H2, H3 } from '@/components/ui/typography'
import image1 from '@/public/images/project-1.jpg'
import image2 from '@/public/images/project-2.jpg'
import image3 from '@/public/images/project-3.jpg'
import image4 from '@/public/images/project-4.jpg'
import image5 from '@/public/images/project-5.jpg'

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
    <section className='section-box py-24 md:py-32 lg:py-40'>
      <H2 className='text-4xl font-bold md:text-7xl lg:text-8xl'>
        Select Works
      </H2>
      <div className='mt-10 md:mt-16 lg:mt-20'>
        {projects.map(({ name, image }) => (
          <a
            href='/'
            key={name}
            className='flex flex-col border-b py-6 last:border-0 md:py-8 lg:py-10'
          >
            <div>
              <div className='aspect-video md:hidden'>
                <Image
                  src={image}
                  alt={`${name} image`}
                  className='size-full object-cover'
                />
              </div>
              <div className='mt-8 flex items-end justify-between md:mt-0'>
                <H3 className='md:text-3xl lg:text-4xl'>{name}</H3>
                <ChevronRight />
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  )
}

export default Projects
