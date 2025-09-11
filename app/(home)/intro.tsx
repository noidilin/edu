'use client'

import { stagger, useAnimate, useInView } from 'motion/react'
import { useEffect } from 'react'
import SplitType from 'split-type'
import { H2 } from '@/components/ui/typography'

function Intro() {
  const [scope, animate] = useAnimate()
  const inView = useInView(scope, {
    once: true,
  })

  useEffect(() => {
    new SplitType(scope.current.querySelectorAll('h2'), { types: 'words' })
    if (inView) {
      animate(
        scope.current.querySelectorAll('.word'),
        {
          opacity: [0, 1],
          transform: ['translateY(100%)', 'translateY(0)'],
        },
        { duration: 0.5, delay: stagger(0.2) },
      )
    }
  }, [scope, inView, animate])

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
