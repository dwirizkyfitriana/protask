'use client'

import { mdiWeatherNight, mdiWhiteBalanceSunny } from '@mdi/js'
import Icon from '@mdi/react'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

const ThemeToggle = () => {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <div role='button' onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
      {theme === 'dark' ? (
        <Icon path={mdiWhiteBalanceSunny} size={1} />
      ) : (
        <Icon path={mdiWeatherNight} size={1} />
      )}
    </div>
  )
}

export default ThemeToggle
