import { mdiCheckCircle } from '@mdi/js'
import Icon from '@mdi/react'
import React from 'react'

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
      <div className='grid grid-cols-2'>
        <div></div>
        <div className='space-y-4'>
          <div className='bg-white rounded-xl shadow-xl p-4 space-y-4'>
            <div className='flex items-center gap-4'>
              <Icon className='text-primary' path={mdiCheckCircle} size={1} />
              <h1 className='font-semibold text-xl'>Creative Design</h1>
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem architecto odit ea.
              Voluptates qui assumenda fugit optio tenetur similique porro architecto aliquam
              corporis et asperiores inventore culpa iure, tempore praesentium?
            </p>
          </div>
          <div className='bg-white rounded-xl shadow-xl p-4 space-y-4'>
            <div className='flex items-center gap-4'>
              <Icon className='text-primary' path={mdiCheckCircle} size={1} />
              <h1 className='font-semibold text-xl'>Creative Design</h1>
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem architecto odit ea.
              Voluptates qui assumenda fugit optio tenetur similique porro architecto aliquam
              corporis et asperiores inventore culpa iure, tempore praesentium?
            </p>
          </div>
          <div className='bg-white rounded-xl shadow-xl p-4 space-y-4'>
            <div className='flex items-center gap-4'>
              <Icon className='text-primary' path={mdiCheckCircle} size={1} />
              <h1 className='font-semibold text-xl'>Creative Design</h1>
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem architecto odit ea.
              Voluptates qui assumenda fugit optio tenetur similique porro architecto aliquam
              corporis et asperiores inventore culpa iure, tempore praesentium?
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
