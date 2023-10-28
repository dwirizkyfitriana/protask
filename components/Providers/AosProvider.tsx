'use client'

import Aos from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'

const AosProvider = () => {
  useEffect(() => {
    Aos.init({
      duration: 3000
    })
  }, [])

  return null
}

export default AosProvider
