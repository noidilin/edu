import { LucideMenu } from 'lucide-react'
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
  return (
    <header className='section-box fixed top-0 left-0 w-full bg-sidebar/90 text-sidebar-foreground backdrop-blur-sm'>
      <div className='flex h-12 items-center justify-between xl:h-14'>
        <div>
          <a href='/'>
            <span className='text-xl font-bold lowercase'>noidilin.</span>
          </a>
        </div>
        <div className='flex items-center gap-2'>
          <Button variant='ghost' className='hidden lowercase md:inline-flex'>
            Contact me
          </Button>
          <ThemeToggle />
          <Button variant='ghost' size='icon'>
            <LucideMenu className='size-6' strokeWidth={3} />
          </Button>
        </div>
      </div>
    </header>
  )
}

export default Header
