import React, { MouseEventHandler } from 'react'

export type AccordionItemProps = {
  title: string
  collapse: boolean
  handleOnClick: MouseEventHandler<HTMLButtonElement>
  className?: string
}

export type TAccordionItem = {
  title: string
  body: React.ReactNode
}
