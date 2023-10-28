import Image from 'next/image'
import Link from 'next/link'

const Card = () => {
  return (
    <div className='bg-white rounded-xl p-4 shadow-[0_3px_10px_rgb(0,0,0,0.2)] text-black dark:text-white space-y-4'>
      <Image
        className='rounded-xl aspect-video w-full'
        alt=''
        src='/assets/images/background.png'
        width={400}
        height={300}
      />
      <h1 className='font-semibold text-xl'>New Blog</h1>
      <p className='text-gray-600'>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus ex exercitationem a
      </p>
      <div>
        <Link className='text-primary' href='/'>
          Read more...
        </Link>
      </div>
    </div>
  )
}

export default Card
