import Image from 'next/image'
import { Pointer } from '@/components/pointer'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { H1, Lead, Muted } from '@/components/ui/typography'
import designExample1Image from '@/public/images/design-example-1.png'
import designExample2Image from '@/public/images/design-example-2.png'

export default function Hero() {
  return (
    <section className='overflow-x-clip py-24'>
      <div className='relative mx-auto max-w-11/12'>
        <div className='hidden lg:block'>
          <div className='absolute top-24 -left-48'>
            <Image alt='design exampe 1' src={designExample1Image} />
          </div>
          <div className='absolute -top-24 -right-72'>
            <Image alt='design exampe 2' src={designExample2Image} />
          </div>
          <div className='absolute top-96 left-56'>
            <Pointer
              labelStyle='bg-blue-500'
              name='Johnason'
              pointerStyle='size-5'
            />
          </div>
          <div className='absolute -top-4 right-80'>
            <Pointer
              labelStyle='bg-rose-500'
              name='Andrea'
              pointerStyle='size-5'
            />
          </div>
        </div>
        <div className='mx-auto flex flex-col items-center'>
          <Lead className='inline-flex rounded-full bg-gradient-to-r from-purple-400 to-pink-400 px-3 py-1 font-semibold text-neutral-900'>
            $7.5M seed round raised
          </Lead>
          <H1 className='mt-6 text-center md:max-w-xl md:text-6xl lg:max-w-2xl lg:text-7xl xl:max-w-4xl xl:text-8xl'>
            Impactful design, created effortlessly
          </H1>
          <Muted className='mt-8 max-w-2xl text-center text-lg'>
            Design tools should not slow you down. Layers combines powerful
            features with an intuitive interface that keep you in your creative
            flow.
          </Muted>
          <form className='mt-8 flex w-1/2 max-w-lg gap-2 rounded-2xl border border-foreground/15 p-2'>
            <Input
              placeholder='Enter your email'
              type='email'
              className='w-full px-4 md:flex-1'
            />
            <Button type='submit' className='bg-lime-400'>
              Sign Up
            </Button>
          </form>
        </div>
      </div>
    </section>
  )
}
