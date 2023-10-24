import About from '@/components/organism/About'
import Blog from '@/components/organism/Blog'
import Hero from '@/components/organism/Hero'

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center justify-between'>
      <Hero />
      <About />
      <Blog />
    </main>
  )
}
