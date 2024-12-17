import React from 'react'

const Exp = () => {
  const exp = [
    {
      id: 1,
      year: "20+",
      description: "years of experience"
    },
    {
      id: 2,
      year: "20+", 
      description: "years of experience"
    },
    {
      id: 3,
      year: "20+",
      description: "years of experience"
    }
  ]
  return (
    <div className='w-full h-[60vh] flex flex-col justify-center items-center bg-primary xl:px-16 xl:py-10 '>
      <div className='experience w-full flex flex-row justify-evenly items-center'>
        {exp.map((e) => (
          <div key={e.id} className='h-[300px] w-[300px] rounded-full border-4 border-secondary flex flex-col justify-center items-center'>
            <div className="number text-secondary xl:text-3xl xl:font-bold">{e.year}</div>
            <div className="p text-secondary xl:text-2xl">{e.description}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Exp