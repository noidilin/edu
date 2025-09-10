import { H2 } from '@/components/ui/typography'
import { Plus } from 'lucide-react'

const faqs = [
  {
    question: 'How long does it take to build a website?',
    answer:
      'It depends on the complexity of the website and the scope of the project.',
  },
  {
    question: 'What is your development process like?',
    answer:
      'I follow a hands-on approach starting with project planning, building out the core features, and regular check-ins to make sure everything matches your needs.',
  },
  {
    question: 'Do you work with international clients?',
    answer:
      'Yes, I work with clients globally and can accommodate different time zones for meetings and communication.',
  },
  {
    question: 'What industries do you specialize in?',
    answer:
      'I have experience across various industries including technology, retail, hospitality, and professional services, bringing fresh perspectives to each project.',
  },
]

function FAQs() {
  return (
    <section className='section-box'>
      <H2 className='text-4xl md:text-7xl lg:text-8xl'>FAQs</H2>
      <div className='mt-10 md:mt-16 lg:mt-20'>
        {faqs.map(({ question, answer }) => (
          <div
            key={question}
            className='flex items-center justify-between gap-4 border-b py-6 last:border-0 md:py-8 lg:py-10'
          >
            <div className='text-2xl md:text-3xl lg:text-4xl'>{question}</div>
            <Plus />
          </div>
        ))}
      </div>
    </section>
  )
}

export default FAQs
