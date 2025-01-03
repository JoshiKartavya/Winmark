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
    <div className='w-full h-screen flex flex-col justify-start gap-8 items-center bg-primary'>
      <h1 className='text-3xl xl:text-5xl font-bold font-righteous text-secondary'>What we provide?</h1>
      <p className='text-base text-center xl:text-xl font-medium font-rem text-secondary'>EXPLORE OUR COMPREHENSIVE RANGE OF PROFESSIONAL SERVICES</p>
      <div className="services grid grid-cols-1 xl:grid-cols-2 xl:grid-rows-2 gap-12 px-6">
        {services.map((service) => (
          <div key={service.id} className='w-full xl:w-[40vw] px-4 xl:px-12 py-4 xl:py-12 bg-primary gap-12 border-2 border-secondary'>
            <h1 className='text-secondary text-2xl xl:text-3xl font-black'>{service.number}</h1>
            <h1 className='text-secondary text-lg font-medium xl:text-2xl font-meduim'>{service.title}</h1>
            <p className='text-secondary text-base'>{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Services