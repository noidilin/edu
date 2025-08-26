import { Badge } from '@/components/ui/badge'

const text = `You're racing to create exceptional work, but traditional design tools slow you down with unnecessary complexity and steep learning curves.`

export default function Intro() {
  return (
    <section className='py-28 lg:py-40'>
      <div className='flex justify-center'>
        <Badge
          variant='outline'
          className='block rounded-full border border-lime-400 px-3 py-1 text-sm text-lime-400 uppercase'
        >
          &#10038; Introducing Layers
        </Badge>
      </div>
      <div className='mt-10 text-center text-4xl font-medium md:text-6xl lg:text-7xl'>
        <span>Your creative process deserves better.</span>{' '}
        <span className='text-foreground/15'>{text}</span>
        <span className='block text-lime-400'>
          That&apos;s why we built Layers.
        </span>
      </div>
    </section>
  )
}
