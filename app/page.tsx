import About from '@/components/organism/About'
import Hero from '@/components/organism/Hero'

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center justify-between'>
      <Hero />
      <About />
    </main>
  )
}
