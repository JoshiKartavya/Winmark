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
    <div className='w-full h-max xl:h-[60vh] flex flex-col justify-center items-center bg-primary xl:px-16 xl:py-10 pb-12 xl:pb-0'>
      <div className='experience w-full flex flex-row xl:flex-row justify-evenly items-center gap-2'>
        {exp.map((e) => (
          <div key={e.id} className='h-[100px] xl:h-[300px] w-[100px] xl:w-[300px] rounded-full border-4 border-secondary flex flex-col justify-center items-center'>
            <div className="number text-secondary text-xl xl:text-3xl font-bold xl:font-bold">{e.year}</div>
            <div className="p text-secondary text-base xl:text-2xl text-center">{e.description}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Exp