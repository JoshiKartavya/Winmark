import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <div className='w-full h-screen bg-primary flex flex-col justify-center items-center'>
      <div className="footer-main w-[96%] h-[92%] bg-secondary text-primary rounded-3xl px-4 py-6 xl:px-8 xl:py-10">
        <div className="content flex flex-col justify-start items-center gap-6 md:gap-8 xl:gap-12">
          <h1 className='text-4xl md:text-6xl xl:text-8xl text-center'>Let&apos;s connect to eachother</h1>
          <p className='w-[85%] md:w-[70%] xl:w-[60%] text-lg md:text-2xl xl:text-3xl font-light font-mono text-center'>nkiu4t giug i4ugl4ug 4ohg lubg oeir g;igg4y45y745h498hekubwba;   wiug iaw</p>
          <div className="socials flex flex-col md:flex-row justify-center items-center gap-4 md:gap-6 xl:gap-8 mt-12 md:mt-20 xl:mt-[28rem]">
            <div className="icon flex flex-row items-center gap-2 md:gap-3 xl:gap-4">
              <i className='text-2xl md:text-3xl xl:text-4xl font-righteous font-medium'>A</i>
              <i className='text-2xl md:text-3xl xl:text-4xl font-righteous font-medium'>B</i>
              <i className='text-2xl md:text-3xl xl:text-4xl font-righteous font-medium'>C</i>
            </div>
            <div className="links flex flex-col md:flex-row gap-12 md:gap-3 xl:gap-4">
              <Link href="">
                <p className='text-2xl md:text-3xl xl:text-4xl font-righteous tracking-tighter font-medium text-center underline'>Electrical</p>
              </Link>
              <Link href="/mashroom">
                <p className='text-2xl md:text-3xl xl:text-4xl font-righteous tracking-tighter font-medium text-center underline'>Mashroom Farm</p>
              </Link>
              <Link href="/agriculture">
                <p className='text-2xl md:text-3xl xl:text-4xl font-righteous tracking-tighter font-medium text-center underline'>Agriculture</p>
              </Link>
            </div>
            <div className="icon flex flex-row items-center gap-2 md:gap-3 xl:gap-4">
              <i className='text-2xl md:text-3xl xl:text-4xl font-righteous font-medium'>D</i>
              <i className='text-2xl md:text-3xl xl:text-4xl font-righteous font-medium'>E</i>
              <i className='text-2xl md:text-3xl xl:text-4xl font-righteous font-medium'>F</i>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
