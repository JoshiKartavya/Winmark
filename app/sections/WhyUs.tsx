import Image from 'next/image'
import React from 'react'

const WhyUs = () => {
  return (
    <div className='w-full h-screen flex flex-col justify-center items-center bg-[#222222]'>
      <div className="content flex flex-row w-full h-full items-center justify-between border-t-2 border-[#222222]">
        <div className="left-image w-1/2">
          <div className="img relative w-[860px] h-[996px]">
            <Image className=' object-cover' src="/us.png" alt='wireman' fill />
          </div>
        </div>
        <div className="right-text flex flex-col justify-center gap-12 items-start px-12 py-10 w-[50%] h-full">
          <h1 className='text-[#e5e5e5] xl:text-8xl font-bold'>Why us?</h1>
          <p className='xl:text-5xl font-light font-mono'>Quickly and easily generate Lorem Ipsum placeholder text.</p>
          <div className="points">
            <h2 className='flex flex-row justify-start items-center gap-4 xl:text-4xl font-normal'><div className='w-4 h-4 rounded-full bg-[#d9d9d9]'></div>General repair maintenance</h2>
            <h2 className='flex flex-row justify-start items-center gap-4 xl:text-4xl font-normal'><div className='w-4 h-4 rounded-full bg-[#d9d9d9]'></div>Fixing your faulty wire</h2>
            <h2 className='flex flex-row justify-start items-center gap-4 xl:text-4xl font-normal'><div className='w-4 h-4 rounded-full bg-[#d9d9d9]'></div>monthly inspection</h2>
          </div>
          <a href="/">
            <h1 className='xl:text-5xl xl:px-8 font-righteous font-light xl:py-6 bg-[#d9d9d9] text-[#222222] rounded-lg hover:bg-[#222222] hover:border-2 hover:border-[#d9d9d9] hover:text-[#d9d9d9]'>Book us now</h1>
          </a>
        </div>
      </div>
    </div>
  )
}

export default WhyUs