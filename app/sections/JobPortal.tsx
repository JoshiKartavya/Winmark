import React from 'react'

const JobPortal = () => {
  return (
    <div className='w-full h-[60vh] bg-[#d9d9d9] text-[#222222] flex flex-col justify-start items-center'>
      <h1 className=' xl:px-8 xl:py-10 xl:text-7xl text-center font-righteous font-medium xl:mb-12'>Hey we are hiring 🎉</h1>
      <div className="conntent flex flex-col justify-start items-center gap-8">
        <p className='xl:text-3xl w-[70%] text-center font-mono font-light'>We are hring talanted wireman in our company. so kindly fill the form given below to register yorself</p>
        <a href="">
            <h1 className='xl:text-5xl xl:px-8 font-righteous font-light xl:py-6 bg-[#222222] w-max text-[#d9d9d9] rounded-lg'>Apply now!</h1>
        </a>
      </div>
    </div>
  )
}

export default JobPortal
