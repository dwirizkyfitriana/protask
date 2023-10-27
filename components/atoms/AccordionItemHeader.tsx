import { AccordionItemProps } from '@/@types/accordion'
import { mdiChevronDown, mdiChevronUp } from '@mdi/js'
import Icon from '@mdi/react'

const AccordionItemHeader = ({ title, collapse, handleOnClick, className }: AccordionItemProps) => {
  return (
    <h2>
      <button
        type='button'
        className={`accordion-header ${className}`}
        aria-expanded='true'
        onClick={handleOnClick}
      >
        <span>{title}</span>
        <Icon className='w-6 h-6' path={collapse ? mdiChevronDown : mdiChevronUp} />
      </button>
    </h2>
  )
}

export default AccordionItemHeader
