import { Button } from './ui/button'
import { LucideMenu } from 'lucide-react'

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

export default function Header() {
  return (
    <header className='mx-auto px-4 md:px-8 lg:px-16 max-w-full'>
      <div className='flex justify-between h-20 items-center'>
        <div>
          <a href='/'>
            <span className='text-xl font-bold uppercase'>noidilin.</span>
          </a>
        </div>
        <div className='flex items-center gap-2'>
          <Button variant='outline'>Contact me</Button>
          <Button variant='ghost' size='icon'>
            <LucideMenu className='size-6' strokeWidth={3} />
          </Button>
        </div>
      </div>
    </header>
  )
}
