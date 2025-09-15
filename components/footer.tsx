'use client'

import { useInView } from 'motion/react'
import { useEffect } from 'react'
import useTextRevealAnimation from '@/hooks/useTextRevealAnimation'
import { Button } from './ui/button'
import { H2 } from './ui/typography'

const navItems = [
  { href: '#intro', label: 'About' },
  { href: '#projects', label: 'Projects' },
  { href: '#testimonials', label: 'Testimonials' },
  { href: '#faqs', label: 'FAQs' },
  { href: '#contact', label: 'Contact' },
]

function Footer() {
  const { scope, entranceAnimation } = useTextRevealAnimation()
  const inView = useInView(scope)

  useEffect(() => {
    if (inView) entranceAnimation()
  }, [inView, entranceAnimation])

  const handleClickNavItem = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
  ) => {
    e.preventDefault()
    const url = new URL(e.currentTarget.href)
    const hash = url.hash
    const target = document.querySelector(hash)

    if (!target) return
    target.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer
      className='section-box section-padding bg-primary text-background'
      id='contact'
    >
      <div>
        <div className='flex items-center gap-3'>
          <div className='size-3 animate-pulse rounded-full bg-chart-2' />
          <span className='uppercase'>One spot available for next month</span>
        </div>
        <div className='mt-2 grid md:mt-4 md:grid-cols-3'>
          <div className='md:col-span-2'>
            <H2 className='mt-8 font-serif text-4xl font-light md:text-7xl'>
              {/* ISSUE: animation won't trigger if adding ref to H2 directly */}
              <span ref={scope}>
                Enough talk. Let&apos;s make something great together.
              </span>
            </H2>
            <Button
              variant='outline'
              className='mt-8 text-foreground dark:bg-primary dark:text-background'
            >
              info@example.com
            </Button>
          </div>
          <nav className='mt-16 flex flex-col gap-2 md:mt-0 md:items-end'>
            {navItems.map(({ href, label }) => (
              <a href={href} key={label} onClick={handleClickNavItem}>
                <Button variant='ghost' className='lg:text-lg'>
                  {label}
                </Button>
              </a>
            ))}
          </nav>
        </div>
      </div>
      <div className='pt-12 text-sm text-muted-foreground'>
        <p>Copyright &copy; 2025 noidilin &bull; All Rights Reserved.</p>
      </div>
    </footer>
  )
}

export default Footer
