import { MenuIcon } from 'lucide-react'
import Image from 'next/image'
import logoImage from '@/public/images/logo.svg'
import { ThemeToggle } from './theme-toggle'
import { Button } from './ui/button'

const navLinks = [
  { label: 'Home', href: '#' },
  { label: 'Features', href: '#features' },
  { label: 'Integrations', href: '#integrations' },
  { label: 'FAQs', href: '#faqs' },
]

export default function Navbar() {
  return (
    <section className='mx-auto flex max-w-10/12 items-center gap-2 py-4 lg:py-8'>
      <div className='grid flex-1 grid-cols-2 items-center rounded-2xl border border-foreground/15 px-6 py-2 lg:grid-cols-3'>
        <div>
          <Image
            alt='layers logo'
            className='h-9 w-auto lg:h-auto'
            src={logoImage}
          />
        </div>
        <div className='hidden items-center justify-center lg:flex'>
          <nav className='flex gap-6 font-medium'>
            {navLinks.map((link) => (
              <a href={link.href} key={link.label}>
                {link.label}
              </a>
            ))}
          </nav>
        </div>
        <div className='flex items-center justify-end'>
          <MenuIcon className='md:hidden' />
          <div className='hidden gap-2 md:flex'>
            <Button variant='outline'>Log In</Button>
            <Button className='bg-lime-400'>Sign In</Button>
          </div>
        </div>
      </div>
      <ThemeToggle />
    </section>
  )
}
