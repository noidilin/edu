'use client'

import { useInView } from 'motion/react'
import { useEffect } from 'react'
import { H2 } from '@/components/ui/typography'
import useTextRevealAnimation from '@/hooks/useTextRevealAnimation'

function Intro() {
  const { scope, entranceAnimation } = useTextRevealAnimation()
  const inView = useInView(scope, { once: true })

  useEffect(() => {
    if (inView) entranceAnimation()
  }, [inView, entranceAnimation])

  return (
    <section
      className='section-box section-padding mt-12 md:mt-16 lg:mt-20'
      id='intro'
      ref={scope}
    >
      <H2 className='border-0 font-serif text-4xl md:text-7xl lg:w-4/5 lg:text-8xl'>
        Building beautiful websites with clean code and thoughtful design to
        help your business grow and stand out online
      </H2>
    </section>
  )
}

export default Intro
