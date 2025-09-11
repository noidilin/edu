'use client'

import { ChevronRight, MenuIcon } from 'lucide-react'
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'
import { ThemeToggle } from './theme-toggle'
import { Button } from './ui/button'

const navItems = [
  {
    label: 'About',
    href: '#intro',
  },
  {
    label: 'Selected Works',
    href: '#projects',
  },
  {
    label: 'Testimonials',
    href: '#testimonials',
  },
  {
    label: 'FAQs',
    href: '#faqs',
  },
  {
    label: 'Contact',
    href: '#contact',
  },
]

function Header() {
  // NOTE: MouseEvent is DOM events which don't support generic type, while React.MouseEvent is generic
  const handleClickMobileNavItem = (
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
    <header className='section-box fixed top-0 left-0 z-100 w-full bg-sidebar/90 text-sidebar-foreground backdrop-blur-sm'>
      <div className='flex h-12 items-center justify-between xl:h-14'>
        <div>
          <a href='/'>
            <span className='text-xl font-bold text-accent-foreground lowercase dark:text-accent'>
              noidilin.
            </span>
          </a>
        </div>
        <div className='flex items-center gap-2'>
          <Button variant='ghost' className='hidden lowercase md:inline-flex'>
            Contact me
          </Button>
          <ThemeToggle />
          <Sheet>
            <SheetTrigger asChild>
              <Button variant='ghost' size='icon'>
                <MenuIcon className='size-6' strokeWidth={1.5} />
              </Button>
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle>navigation.</SheetTitle>
              </SheetHeader>
              <div className='mb-8 px-4'>
                {navItems.map(({ label, href }) => (
                  <a
                    href={href}
                    key={label}
                    className='group/nav-item relative text-card-foreground lowercase'
                    onClick={(e) => handleClickMobileNavItem(e)}
                  >
                    <SheetClose asChild>
                      <div className='flex items-center-safe justify-end transition-all duration-300 group-hover/nav-item:pr-2'>
                        <span className='border-b text-lg'>{label}</span>
                        <ChevronRight className='size-4' strokeWidth={2} />
                      </div>
                    </SheetClose>
                    <div className='absolute -right-1 bottom-0 h-0 w-0.5 bg-primary transition-all duration-300 group-hover/nav-item:h-full' />
                  </a>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}

export default Header
