export default function Cta() {
  return (
    <section className='py-24'>
      <div className='flex overflow-x-clip p-4'>
        <div className='flex flex-none gap-16 text-7xl font-medium md:text-8xl'>
          {Array.from({ length: 10 }).map((_, i) => (
            <div key={i} className='flex items-center gap-16'>
              <span className='text-7xl text-lime-400'>&#10038;</span>
              <span>Try it for free</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
