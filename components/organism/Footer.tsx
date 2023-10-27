import { mdiFacebook, mdiInstagram, mdiTwitter } from '@mdi/js'
import Icon from '@mdi/react'
import Link from 'next/link'

const Footer = () => {
  return (
    <div className='bg-black w-full h-[30vh] text-white flex flex-col items-center justify-between gap-6 pt-12 pb-4'>
      <div className='grid grid-cols-3 max-md:grid-cols-1 w-4/5'>
        <div className='space-y-4'>
          <h1 className='font-bold text-3xl'>ProTask</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque dignissimos reprehenderit
          </p>
          <div className='flex gap-6 items-center'>
            <Icon path={mdiFacebook} size={1} />
            <div className='vertical-divider !bg-white'></div>
            <Icon path={mdiInstagram} size={1} />
            <div className='vertical-divider !bg-white'></div>
            <Icon path={mdiTwitter} size={1} />
          </div>
        </div>
        <div></div>
        <div className='flex flex-col gap-1'>
          <h1 className='font-semibold text-2xl'>Quick Link</h1>
          <Link href='/'>About</Link>
          <Link href='/'>Faq</Link>
          <Link href='/'>Blog</Link>
        </div>
      </div>
      <div className='w-4/5 text-center space-y-4'>
        <div className='h-px bg-white'></div>
        <h1>&copy; Copyright {new Date().getFullYear()} ProTask. All Right Reserved.</h1>
      </div>
    </div>
  )
}

export default Footer
