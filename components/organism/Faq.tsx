import { TAccordionItem } from '@/@types/accordion'
import Accordion from './Accordion'

const Faq = () => {
  const accordions: TAccordionItem[] = [
    { title: 'Pertanyaan', body: 'Jawaban' },
    { title: 'Pertanyaan', body: 'Jawaban' },
    { title: 'Pertanyaan', body: 'Jawaban' },
    { title: 'Pertanyaan', body: 'Jawaban' },
    { title: 'Pertanyaan', body: 'Jawaban' }
  ]
  return (
    <div className='w-4/5 flex flex-col items-center gap-8 py-8'>
      <h1 className='font-bold text-3xl'>Frequently Asked Question</h1>

      <Accordion className='w-4/5' data={accordions} />
    </div>
  )
}

export default Faq
