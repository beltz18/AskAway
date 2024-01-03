import React from 'react'

const Questions = ({ questions }: any) => {
  let totalTime = 0
  questions?.map((q: any) => totalTime += parseInt(q?.time))

  return (
    <>
      <div className='px-10 flex justify-between'>
        <div className='flex flex-col gap-2'>
          <span className='text-[#EAECF4]'>1</span>
          <ul className='flex flex-col gap-2'>
            {
              questions?.map((q: any, index: number) => (  
                <li key={ index } className='capitalize'><b className='text-primary'>{ index+1 }.</b> { q?.question }</li>
              ))
            }
          </ul>
        </div>

        <div className='text-right flex flex-col gap-2'>
          <span className='text-primary font-bold'>Total Allowed</span>
          <ul className='flex flex-col gap-2'>
            {
              questions?.map((q: any, index: number) => (
                <li key={ index }><b className='text-primary'>{ parseInt(q?.time) }</b> mins</li>
              ))
            }
          </ul>
          <div className='border-t-gray-300 border-t-[1px] pt-2'>
            <b className='text-primary'>Duration:</b> { totalTime } mins
          </div>
        </div>
      </div>
        
    </>
  )
}

export default Questions