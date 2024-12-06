import React from 'react'
import Hero from './sections/Hero'
import Exp from './sections/Exp'
import Services from './sections/Services'
import WhyUs from './sections/WhyUs'
import JobPortal from './sections/JobPortal'
import Footer from './sections/Footer'

const page = () => {
  return (
    <div>
      <Hero />
      <Exp />
      <Services />
      <WhyUs />
      <JobPortal />
      <Footer />
    </div>
  )
}

export default page
