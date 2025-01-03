import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <div className='w-full h-max bg-primary flex flex-col justify-center items-center p-2 sm:p-4'>
      <div className="footer-main w-full sm:w-[96%] h-full sm:h-[96%] bg-secondary text-primary rounded-xl sm:rounded-3xl px-3 py-4 sm:px-4 sm:py-6 xl:px-8 xl:py-10 relative">
        <div className="content w-full h-full flex flex-col justify-between items-center gap-10 sm:gap-6 md:gap-8 xl:gap-40">
          <div className="content-top">
            <h1 className='text-3xl sm:text-3xl md:text-6xl xl:text-8xl text-center'>Let&apos;s connect to eachother</h1>
            <p className='w-[95%] sm:w-[85%] md:w-[70%] xl:w-[90%] text-sm sm:text-lg md:text-2xl xl:text-3xl font-light font-mono text-center'>
              Discover our diverse portfolio of innovative projects across multiple sectors. From sustainable agriculture to cutting-edge electrical solutions, we're committed to creating value through technology and expertise.
            </p>
          </div>
          <div className="socials flex flex-row justify-center xl:flex-row items-center gap-3 sm:gap-4 md:gap-6 xl:gap-8">
            <div className="icon flex flex-row items-center justify-center gap-1 sm:gap-2 md:gap-3 xl:gap-4">
              <i className='ri-instagram-line text-xl sm:text-2xl md:text-3xl xl:text-4xl font-righteous font-medium'></i>
              <i className='ri-facebook-circle-line text-xl sm:text-2xl md:text-3xl xl:text-4xl font-righteous font-medium'></i>
            </div>
            <div className="links flex flex-row md:flex-row justify-center items-center gap-4 sm:gap-6 md:gap-8 xl:gap-12">
              <Link href="">
                <p className='text-xl sm:text-2xl md:text-3xl xl:text-4xl font-righteous tracking-tighter font-medium text-center underline'>Electrical</p>
              </Link>
              <Link href="/mashroom">
                <p className='text-xl sm:text-2xl md:text-3xl xl:text-4xl font-righteous tracking-tighter font-medium text-center underline'>Mashroom Farm</p>
              </Link>
              <Link href="/agriculture">
                <p className='text-xl sm:text-2xl md:text-3xl xl:text-4xl font-righteous tracking-tighter font-medium text-center underline'>Agriculture</p>
              </Link>
            </div>
            <div className="icon flex flex-row items-center justify-center gap-1 sm:gap-2 md:gap-3 xl:gap-4">
              <i className='ri-twitter-x-line text-xl sm:text-2xl md:text-3xl xl:text-4xl font-righteous font-medium'></i>
              <i className='ri-youtube-line text-xl sm:text-2xl md:text-3xl xl:text-4xl font-righteous font-medium'></i>
            </div>
          </div>
        </div>
        <h1 className='text-[6rem] xl:text-[27rem] opacity-10 font-extrabold absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-0'>WINMARK</h1>
      </div>
    </div>
  )
}

export default Footer
