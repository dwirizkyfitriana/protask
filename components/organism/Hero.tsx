import Image from 'next/image'

const Hero = () => {
  return (
    <div className='hero'>
      <div className='grid grid-cols-2 max-md:grid-cols-1 w-4/5 min-h-screen m-auto'>
        <div className='flex w-full h-2/4 m-auto border-[12px] border-opacity-50 border-white translate-x-5'>
          <div className='w-full h-4/5 m-auto bg-white translate-x-[-50px] p-4 max-md:p-2 xl:p-8 space-y-8 dark:bg-black'>
            <h1 className='text-primary font-bold uppercase text-base md:text-5xl xl:text-5xl'>
              Solusi Untuk Kebutuhan Anda
            </h1>
            <p className='text-black dark:text-white text-sm md:text-base'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium vitae voluptatibus
              illum a itaque, alias vel dolorum praesentium, officia quas ipsum? Modi non nisi eum.
              Doloribus qui commodi excepturi animi.
            </p>
          </div>
        </div>
        <div className='hidden md:flex flex-col justify-end items-center'>
          <Image
            src='/assets/images/banner.png'
            width={480}
            height={100}
            alt=''
            priority
          />
        </div>
      </div>
    </div>
  )
}

export default Hero
