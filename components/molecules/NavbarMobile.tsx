'use client'

import { mdiMenu, mdiWhatsapp } from '@mdi/js'
import Icon from '@mdi/react'
import Link from 'next/link'
import { useState } from 'react'

const NavbarMobile = () => {
  const [showMenu, setShowMenu] = useState(false)
  return (
    <>
      <div className='flex items-center gap-2 md:hidden'>
        <button onClick={() => setShowMenu((prev) => !prev)}>
          <Icon path={mdiMenu} size={1} />
        </button>
        <h1>ProTask</h1>
      </div>

      {showMenu && (
        <div className='absolute flex flex-col gap-2 left-0 top-16 py-6 px-4 w-2/3 rounded-lg bg-white dark:bg-black z-50 shadow-lg'>
          <Link href='/'>HOME</Link>
          <Link href='/'>ABOUT</Link>
          <Link href='/'>FAQ</Link>
          <Link href='/'>BLOG</Link>
          <button className='flex items-center gap-3 bg-primary text-white py-2 px-3 rounded-full'>
            <Icon path={mdiWhatsapp} size={1} />
            Hubungi Kami
          </button>
        </div>
      )}
    </>
  )
}

export default NavbarMobile
