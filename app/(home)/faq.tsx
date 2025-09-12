import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { H2 } from '@/components/ui/typography'

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
    <section className='section-box pb-24' id='faqs'>
      <H2 className='text-4xl md:text-7xl lg:text-8xl'>FAQs</H2>
      <Accordion type='single' collapsible className='mt-10'>
        {faqs.map(({ question, answer }, index) => (
          <AccordionItem
            value={`item-${index + 1}`}
            key={question}
            className='group/faq'
          >
            <AccordionTrigger className='text-2xl font-light transition-all duration-300 group-hover/faq:pl-1 group-hover/faq:font-normal md:text-3xl lg:text-4xl'>
              {question}
            </AccordionTrigger>
            <AccordionContent className='mt-4 text-xl'>
              {answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  )
}

export default FAQs
