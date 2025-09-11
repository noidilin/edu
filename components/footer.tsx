import { Button } from './ui/button'
import { H2 } from './ui/typography'

const navItems = [
  { href: '#', label: 'Home' },
  { href: '#', label: 'Projects' },
  { href: '#', label: 'Testimonials' },
  { href: '#', label: 'FAQs' },
  { href: '#', label: 'Contact' },
]

function Footer() {
  return (
    <footer className='section-box bg-primary text-background' id='contact'>
      <div className='section-padding'>
        <div className='flex items-center gap-3'>
          <div className='size-3 rounded-full bg-accent' />
          <span className='uppercase'>One spot available for next month</span>
        </div>
        <div className='mt-2 grid md:mt-4 md:grid-cols-3'>
          <div className='md:col-span-2'>
            <H2 className='mt-8 font-serif text-4xl font-light md:text-7xl'>
              Enough talk. Let&apos;s make something great together.
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
              <a href={href} key={label}>
                <Button variant='ghost' className='lg:text-lg'>
                  {label}
                </Button>
              </a>
            ))}
          </nav>
        </div>
      </div>
      <div className='py-8 text-sm text-muted-foreground'>
        <p>Copyright &copy; 2025 noidilin &bull; All Rights Reserved.</p>
      </div>
    </footer>
  )
}

export default Footer
