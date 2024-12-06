import React from 'react'
import Navbar from '../components/Navbar'
import Image from 'next/image'

const Hero = () => {
  return (
    <div className='w-full h-screen flex flex-col justify-start items-center bg-[#e5e5e5]'>
        <Navbar />
        <div className='h-[80vh] w-full flex xl:flex-col justify-center items-center xl:px-16 xl:py-10 gap-12'>
            <h1 className='xl:text-9xl text-[#222222] font-righteous'>Winmark Corporation</h1>
            <div className='hero-content w-full flex flex-row items-center justify-between'>
                <div className='content xl:w-[45%] h-full xl:gap-16 flex flex-col justify-center items-start'>
                    <h2 className='text-[#222222] xl:text-5xl font-light font-rem'>we are the one step solution for all electrical problems</h2>
                    <a href="#">
                        <div className='bg-[#222222] xl:px-12 xl:py-4 rounded-full w-max'>
                            <h1 className='text-[#e5e5e5] xl:text-lg font-rem'>About US</h1>
                        </div>
                    </a>
                </div>
                <div>
                    <div className="img relative xl:h-[450px] xl:w-[600px]">
                        <Image className='mix-blend-darken' src="/hero.png" alt='hero' fill />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero