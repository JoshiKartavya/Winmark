import Image from 'next/image'
import React from 'react'
import Link from 'next/link'

const WhyUs = () => {
  return (
    <div className='w-full h-screen flex flex-col justify-center items-center bg-secondary'>
      <div className="content flex flex-col xl:flex-row w-full h-full items-center justify-between border-t-2 text-primary border-secondary">
        <div className="left-image w-full xl:w-1/2">
          <div className="img relative w-[440px] xl:w-[860px] h-[450px] xl:h-[996px]">
            <Image className=' object-cover' src="/us.png" alt='wireman' fill />
          </div>
        </div>
        <div className="right-text flex flex-col justify-center gap-12 items-start px-6 xl:px-12 py-5 xl:py-10 w-full xl:w-[50%] h-full">
          <h1 className='text-primary text-4xl xl:text-8xl font-bold'>Why us?</h1>
          <p className='xl:text-5xl font-light font-mono'>Quickly and easily generate Lorem Ipsum placeholder text.</p>
          <div className="points">
            <h2 className='flex flex-row justify-start items-center gap-4 xl:text-4xl font-normal'><div className='w-4 h-4 rounded-full bg-primary'></div>General repair maintenance</h2>
            <h2 className='flex flex-row justify-start items-center gap-4 xl:text-4xl font-normal'><div className='w-4 h-4 rounded-full bg-primary'></div>Fixing your faulty wire</h2>
            <h2 className='flex flex-row justify-start items-center gap-4 xl:text-4xl font-normal'><div className='w-4 h-4 rounded-full bg-primary'></div>monthly inspection</h2>
          </div>
          <Link href="/">
            <h1 className='xl:text-5xl px-4 xl:px-8 font-righteous font-light py-3 xl:py-6 bg-primary text-secondary rounded-lg hover:bg-secondary hover:border-2 hover:border-primary hover:text-primary'>Book us now</h1>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default WhyUs