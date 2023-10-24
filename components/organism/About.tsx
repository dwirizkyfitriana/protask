import React from 'react'
import FeatureCard from '../atoms/FeatureCard'

const About = () => {
  return (
    <div className='w-4/5 flex flex-col items-center gap-8 py-8'>
      <h1 className='font-bold text-3xl'>About Us</h1>
      <p className='text-center'>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore fugit, error excepturi
        molestias dicta facere perferendis rem atque molestiae! Molestias at in eum libero quos.
        Mollitia, aliquid. Maiores, aliquid veritatis? Lorem, ipsum dolor sit amet consectetur
        adipisicing elit. Inventore fugit, error excepturi molestias dicta facere perferendis rem
        atque molestiae! Molestias at in eum libero quos. Mollitia, aliquid. Maiores, aliquid
        veritatis?
      </p>
      <div className='grid grid-cols-2 max-md:grid-cols-1'>
        <div></div>
        <div className='space-y-4'>
          {[1, 2, 3].map((item) => (
            <FeatureCard
              key={item}
              title='Creative Design'
              body='Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore fugit, error excepturi
        molestias dicta facere perferendis rem atque molestiae! Molestias at in eum libero quos.
        Mollitia, aliquid. Maiores, aliquid veritatis?'
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default About
