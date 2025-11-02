'use client'

import { motion, useScroll, useTransform } from 'motion/react'
import Image from 'next/image'
import { useRef } from 'react'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'
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
  const titleRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: titleRef,
    offset: ['start end', 'end start'],
  })
  const transTop = useTransform(scrollYProgress, [0, 1], ['0%', '15%'])
  const transBot = useTransform(scrollYProgress, [0, 1], ['0%', '-15%'])

  return (
    <section className='section-padding' id='testimonials'>
      <div ref={titleRef}>
        <H2 className='flex flex-col overflow-hidden text-4xl font-bold opacity-20 md:text-7xl lg:text-8xl'>
          <motion.span className='whitespace-nowrap' style={{ x: transTop }}>
            Some nice words from my past clients
          </motion.span>
          <motion.span
            className='self-end whitespace-nowrap text-muted-foreground'
            style={{ x: transBot }}
          >
            Some nice words from my past clients
          </motion.span>
        </H2>
      </div>
      <Carousel className='section-box mt-20'>
        <CarouselContent>
          {testimonials.map(
            ({ name, company, role, quote, image, imagePositionY }) => (
              <CarouselItem
                key={name}
                className='md:grid md:grid-cols-5 md:items-center md:gap-8 lg:gap-16'
              >
                <div className='aspect-square md:col-span-2 md:aspect-[3/4] xl:aspect-square'>
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
                  <Blockquote className='not-italic md:mt-0'>
                    <div className='font-serif text-3xl md:text-5xl lg:text-6xl'>
                      {quote}
                    </div>
                    <cite className='mt-4 block font-extralight not-italic md:mt-8 md:text-lg lg:text-xl'>
                      {name}, {role} at {company}
                    </cite>
                  </Blockquote>
                </div>
              </CarouselItem>
            ),
          )}
        </CarouselContent>
        <CarouselPrevious className='top-full left-[calc(100%-6rem)] translate-y-0 md:top-[calc(100%-2rem)]' />
        <CarouselNext className='top-full right-[calc(1rem)] translate-y-0 md:top-[calc(100%-2rem)]' />
      </Carousel>
    </section>
  )
}

export default Testimonials
