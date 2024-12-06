import React from 'react'

const Services = () => {
  const services = [
    {
      id: 1,
      number: "1",
      title: "Commercial electric fitting",
      description: "Lorem ipsum odor amet, consectetuer adipiscing elit. Elementum taciti nisi dapibus, velit dolor lobortis. Arcu nullam nostra gravida netus aptent laoreet. Erat amet sem viverra a suscipit."
    },
    {
      id: 2,
      number: "2",
      title: "Commercial electric fitting", 
      description: "Lorem ipsum odor amet, consectetuer adipiscing elit. Elementum taciti nisi dapibus, velit dolor lobortis. Arcu nullam nostra gravida netus aptent laoreet. Erat amet sem viverra a suscipit."
    },
    {
      id: 3,
      number: "3",
      title: "Commercial electric fitting",
      description: "Lorem ipsum odor amet, consectetuer adipiscing elit. Elementum taciti nisi dapibus, velit dolor lobortis. Arcu nullam nostra gravida netus aptent laoreet. Erat amet sem viverra a suscipit."
    },
    {
      id: 4,
      number: "4",
      title: "Commercial electric fitting",
      description: "Lorem ipsum odor amet, consectetuer adipiscing elit. Elementum taciti nisi dapibus, velit dolor lobortis. Arcu nullam nostra gravida netus aptent laoreet. Erat amet sem viverra a suscipit."
    }
  ]

  return (
    <div className='w-full h-screen flex flex-col justify-start gap-8 items-center bg-[#e5e5e5]'>
      <h1 className='text-5xl font-bold font-righteous text-[#222222]'>What we provide?</h1>
      <p className='text-xl font-medium font-rem text-[#222222]'>EXPLORE OUR COMPREHENSIVE RANGE OF PROFESSIONAL SERVICES</p>
      <div className="services grid grid-cols-2 grid-rows-2 gap-12">
        {services.map((service) => (
          <div key={service.id} className='w-[40vw] xl:px-12 xl:py-12 bg-[#e5e5e5] gap-12 border-2 border-[#222222]'>
            <h1 className='text-[#222222] xl:text-3xl font-bold'>{service.number}</h1>
            <h1 className='text-[#222222] xl:text-2xl font-meduim'>{service.title}</h1>
            <p className='text-[#222222]'>{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Services