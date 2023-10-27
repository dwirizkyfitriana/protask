const AccordionItemBody = ({
  children,
  collapse
}: {
  children: React.ReactNode
  collapse: boolean
}) => {
  return (
    <div className={collapse ? 'hidden' : ''}>
      <div className='p-5 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900'>
        {children}
      </div>
    </div>
  )
}

export default AccordionItemBody
