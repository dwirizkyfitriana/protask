import Card from '../molecules/Card'
import Icon from '@mdi/react'
import { mdiArrowRight } from '@mdi/js'

const Blog = () => {
  return (
    <div className='bg-primary-img min-h-[50vh] w-full'>
      <div
        className='w-4/5 flex flex-col items-center gap-8 py-8 m-auto text-white'
        data-aos='fade-up'
      >
        <h1 className='font-bold text-3xl'>Our Recent Blog</h1>
        <p className='text-center'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat fuga animi est
          perferendis quibusdam, temporibus velit natus voluptatem modi magnam saepe officiis veniam
          cum? Ducimus sequi ipsam tempora alias obcaecati.
        </p>
        <div className='grid grid-cols-3 max-md:grid-cols-1 gap-4 w-full' data-aos='fade-up'>
          {[1, 2, 3].map((item) => (
            <Card key={item} />
          ))}
        </div>
        <div className='flex gap-2 group cursor-pointer group font-semibold'>
          <h1>More Blog</h1>
          <Icon className='group-hover:animate-arrow' path={mdiArrowRight} size={1} />
        </div>
      </div>
    </div>
  )
}

export default Blog
