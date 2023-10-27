import AccordionItemBody from '../atoms/AccordionItemBody'
import AccordionItemHeader from '../atoms/AccordionItemHeader'
import { AccordionItemProps } from '@/@types/accordion'

const AccordionItem = ({
  title,
  collapse,
  handleOnClick,
  className,
  children
}: AccordionItemProps & { children: React.ReactNode }) => {
  return (
    <>
      <AccordionItemHeader
        title={title}
        collapse={collapse}
        className={className}
        handleOnClick={handleOnClick}
      />
      <AccordionItemBody collapse={collapse}>{children}</AccordionItemBody>
    </>
  )
}

export default AccordionItem
