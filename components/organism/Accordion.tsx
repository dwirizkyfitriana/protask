'use client'

import { TAccordionItem } from '@/@types/accordion'
import React, { useState } from 'react'
import AccordionItem from '../molecules/AccordionItem'

const Accordion = ({ data, className }: { data: TAccordionItem[]; className?: string }) => {
  const [activeItem, setActiveItem] = useState(-1)

  const handleToggle = (index: number) => {
    setActiveItem((prev) => (prev === index ? -1 : index))
  }
  return (
    <div className={className} data-aos='fade-up'>
      {data.map((item, index) => (
        <AccordionItem
          key={index}
          className={index === 0 ? 'first' : ''}
          title={item.title}
          collapse={activeItem !== index}
          handleOnClick={() => handleToggle(index)}
        >
          {item.body}
        </AccordionItem>
      ))}
    </div>
  )
}

export default Accordion
