import { stagger, useAnimate } from 'motion/react'
import { useEffect } from 'react'
import SplitType from 'split-type'

function useTextRevealAnimation() {
  const [scope, animate] = useAnimate()

  useEffect(() => {
    new SplitType(scope.current, { types: 'words' })
  }, [scope])

  const entranceAnimation = () => {
    return animate(
      scope.current.querySelectorAll('.word'),
      { opacity: [0, 1], transform: ['translateY(100%)', 'translateY(0)'] },
      { duration: 0.3, delay: stagger(0.1) },
    )
  }

  const exitAnimation = () => {
    return animate(
      scope.current.querySelectorAll('.word'),
      { opacity: [1, 0], transform: ['translateY(0)', 'translateY(100%)'] },
      {
        duration: 0.3,
        delay: stagger(-0.1, {
          startDelay: scope.current.querySelectorAll('.word').length * 0.1,
        }),
      },
    )
  }

  return { scope, entranceAnimation, exitAnimation }
}

export default useTextRevealAnimation
