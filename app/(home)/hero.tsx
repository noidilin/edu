'use client'

import { ChevronDown } from 'lucide-react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { H1 } from '@/components/ui/typography'
import heroImage from '@/public/images/hero-image.jpg'
import SplitType from 'split-type'
import {
  useAnimate,
  motion,
  stagger,
  useScroll,
  useTransform,
} from 'motion/react'
import { useEffect, useRef } from 'react'

function Hero() {
  const [titleScope, titleAnimate] = useAnimate()
  // element that has enough height to scroll will give sticky element time to be animated
  const scrollingDiv = useRef<HTMLDivElement>(null)
  // map scroll progress to value that will be animated
  const { scrollYProgress } = useScroll({
    target: scrollingDiv,
    offset: ['start end', 'end end'],
  })
  // 12 / 5 = 2.4
  const portraitWidth = useTransform(scrollYProgress, [0, 1], ['100%', '240%'])

  useEffect(() => {
    new SplitType(titleScope.current, { types: 'words' })

    titleAnimate(
      titleScope.current.querySelectorAll('.word'),
      { opacity: [0, 1], transform: ['translateY(100%)', 'translateY(0)'] },
      { duration: 0.5, delay: stagger(0.2) },
    )
  }, [titleScope, titleAnimate])

  return (
    <section className='mt-40 md:mt-0'>
      <div className='grid md:sticky md:top-0 md:h-screen md:grid-cols-12 md:items-stretch'>
        <div className='section-box flex flex-col justify-center md:col-span-7'>
          <H1 className='text-5xl md:text-6xl lg:text-7xl'>
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              ref={titleScope}
            >
              Crafting digital experiences through code and creative design
            </motion.span>
          </H1>
          <div className='mt-10 flex flex-col items-start gap-6 md:flex-row'>
            <motion.div
              initial={{ opacity: 0, y: '100%' }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.75 }}
            >
              <Button
                variant='outline'
                className='dark:bg-background dark:hover:text-primary'
              >
                View My Work <ChevronDown />
              </Button>
              <Button variant='ghost'>Let&apos;s Talk</Button>
            </motion.div>
          </div>
        </div>
        <div className='relative mt-20 md:col-span-5 md:mt-0'>
          {/* FIX: scrollYProgress will be 1 when screen size is smaller than md, causing portraitWidth become 240% */}
          {/* NOTE: max-md:!w-full:
              on screen that is smaller than screen size 'md',
              set width to 100% with !important priority */}
          <motion.div
            className='max-md:!w-full md:absolute md:right-0 md:h-full'
            style={{ width: portraitWidth }}
          >
            <Image
              src={heroImage}
              alt='portrait image'
              className='size-full object-cover'
            />
          </motion.div>
        </div>
      </div>
      <div className='md:h-[200vh] md:bg-muted' ref={scrollingDiv} />
    </section>
  )
}

export default Hero
