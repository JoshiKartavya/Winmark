import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const JobPortal = () => {
  return (
    <div className='w-full h-max xl:h-[60vh] bg-primary text-secondary flex flex-col-reverse xl:flex-row px-12 justify-start items-center'>
      <div className="content w-full h-full flex flex-col gap-4 justify-center items-start">
        <h1 className='text-4xl xl:text-9xl tracking-wide font-righteous'>Hey There, <br /> We&apos;re Hiring 🎉</h1>
        <p className='text-xl xl:text-3xl text-[#929292]'>Full Time | On Site</p>
        <Link href="/">
          <h1 className='xl:text-5xl px-4 xl:px-8 font-righteous font-light py-3 xl:py-6 bg-secondary text-primary rounded-lg hover:bg-primary hover:border-2 hover:border-secondary hover:text-secondary'>Apply now</h1>
        </Link>
      </div>
      <div className="image">
        <div className="img relative w-[440px] h-[280px] xl:w-[680px] xl:h-[500px]">
          <Image src="/hiring.jpg" alt='hiring' fill/>
        </div>
      </div>
    </div>
  )
}

export default JobPortal
