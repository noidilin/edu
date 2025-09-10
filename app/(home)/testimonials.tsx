'use client'

import { ChevronLeft, ChevronRight } from 'lucide-react'
import Image from 'next/image'
import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Blockquote, H2 } from '@/components/ui/typography'
import image1 from '@/public/images/testimonial-1.jpg'
import image2 from '@/public/images/testimonial-2.jpg'
import image3 from '@/public/images/testimonial-3.jpg'

const testimonials = [
  {
    name: 'Sarah Chen',
    company: 'Pixel Perfect',
    role: 'Head of Design',
    quote:
      "Alex's expertise in both technical development and design created a beautiful, high-performing website.",
    image: image1,
    imagePositionY: 0.2,
  },
  {
    name: 'Marcus Rodriguez',
    company: 'Craft Coffee Co.',
    role: 'Founder',
    quote:
      'Alex transformed our boutique coffee brand with a website that perfectly balances aesthetics and functionality.',
    image: image2,
    imagePositionY: 0.1,
  },
  {
    name: 'Emily Watson',
    company: 'Studio Minimal',
    role: 'Creative Director',
    quote:
      'The collaborative process was amazing. Alex brought lots of fresh perspectives and innovative solutions.',
    image: image3,
    imagePositionY: 0.55,
  },
]

function Testimonials() {
  const [testimonialIndex, setTestimonialIndex] = useState(0)
  return (
    <section className='section-padding'>
      <H2 className='flex flex-col overflow-hidden text-4xl md:text-7xl lg:text-8xl'>
        <span className='whitespace-nowrap'>
          Some nice words from my past clients
        </span>
        <span className='self-end whitespace-nowrap text-muted-foreground'>
          Some nice words from my past clients
        </span>
      </H2>
      <div className='section-box mt-20'>
        <div>
          {testimonials.map(
            ({ name, company, role, quote, image, imagePositionY }, index) =>
              index === testimonialIndex && (
                <div
                  key={name}
                  className='grid md:grid-cols-5 md:items-center md:gap-8 lg:gap-16'
                >
                  <div className='aspect-square md:col-span-2 md:aspect-[9/16]'>
                    <Image
                      src={image}
                      alt={name}
                      className='size-full object-cover'
                      style={{
                        objectPosition: `50% ${imagePositionY * 100}%`,
                      }}
                    />
                  </div>
                  <div className='flex flex-col justify-between md:col-span-3 md:h-full'>
                    <Blockquote className='md:mt-0'>
                      <div className='font-serif text-3xl md:text-5xl lg:text-6xl'>
                        <span>&ldquo;</span>
                        <span>{quote}</span>
                        <span>&rdquo;</span>
                      </div>
                      <cite className='mt-4 block font-extralight not-italic md:mt-8 md:text-lg lg:text-xl'>
                        {name}, {role} at {company}
                      </cite>
                    </Blockquote>
                    {/* TODO: is it efficient since this components are the same */}
                    <div className='flex gap-4 self-end'>
                      <Button
                        variant='outline'
                        className='dark:bg-background'
                        onClick={() => setTestimonialIndex(0)}
                      >
                        <ChevronLeft />
                      </Button>
                      <Button
                        variant='outline'
                        className='dark:bg-background'
                        onClick={() => setTestimonialIndex(1)}
                      >
                        <ChevronRight />
                      </Button>
                    </div>
                  </div>
                </div>
              ),
          )}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
