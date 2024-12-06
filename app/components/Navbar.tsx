import React from 'react'

const Navbar = () => {
  return (
    <div className="w-full h-[20vh] flex items-center justify-between px-8 md:px-16">
      <div className="text-3xl md:text-4xl font-righteous text-[#222222]">
        winmark.
      </div>
      
      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center gap-6">
        <div className="flex gap-8 mr-8">
          <a href="#" className="text-[#222222] font-light font-rem text-2xl">Home</a>
          <a href="#" className="text-[#222222] font-light font-rem text-2xl">About</a>
          <a href="#" className="text-[#222222] font-light font-rem text-2xl">Services</a>
        </div>
        <button className="bg-orange-500 text-white text-2xl px-6 py-2 rounded-md">
          Contact Me
        </button>
      </div>
    </div>
  )
}

export default Navbar
