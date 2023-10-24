import Image from 'next/image'
import Icon from '@mdi/react'
import { mdiWhatsapp } from '@mdi/js'
import ThemeToggle from '../atoms/ThemeToggle'
import NavbarMobile from '../molecules/NavbarMobile'

const Navbar = () => {
  return (
    <div className='w-full flex justify-center'>
      <div className='w-4/5 bg-white dark:bg-black dark:text-white fixed flex text-black justify-between items-center mt-12 h-[60px] rounded-md px-5 font-semibold shadow-lg'>
        <NavbarMobile />
        <div className='hidden md:flex items-center gap-6 w-2/6'>
          <div>HOME</div>
          <div>ABOUT</div>
          <div>FAQ</div>
          <div>BLOG</div>
        </div>
        <div className='flex items-center gap-4'>
          <button className='hidden md:flex items-center gap-3 bg-primary text-white py-2 px-3 rounded-full'>
            <Icon path={mdiWhatsapp} size={1} />
            Hubungi Kami
          </button>
          <div className='vertical-divider'></div>
          <ThemeToggle />
          <button>
            <Image
              className='rounded-full'
              src='/assets/images/avatar.png'
              width={37}
              height={37}
              alt='avatar'
              priority
            />
          </button>
        </div>
      </div>
    </div>
  )
}

export default Navbar
