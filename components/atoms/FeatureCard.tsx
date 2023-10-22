import { mdiCheckCircle } from '@mdi/js'
import Icon from '@mdi/react'

const FeatureCard = ({ title, body }: { title: string; body: string }) => {
  return (
    <div className='bg-white rounded-xl p-4 grid grid-cols-[24px_1fr] gap-4 items-start shadow-[0_3px_10px_rgb(0,0,0,0.2)]'>
      <Icon className='text-primary' path={mdiCheckCircle} size={1} />

      <div className='space-y-2'>
        <h1 className='font-semibold text-xl'>{title}</h1>
        <p>{body}</p>
      </div>
    </div>
  )
}

export default FeatureCard
