import React from 'react'

const Questions = () => {
  return (
    <>
      <div className='px-10 flex justify-between'>
        <div className='flex flex-col gap-2'>
          <span className='text-[#EAECF4]'>1</span>
          <ul className='flex flex-col gap-2'>
            <li><b className='text-primary'>1.</b> What was your biggest challenge you are working on right now?</li>
            <li><b className='text-primary'>2.</b> How can I help you overcome that challenge?</li>
          </ul>
        </div>

        <div className='text-right flex flex-col gap-2'>
          <span className='text-primary font-bold'>Total Allowed</span>
          <ul className='flex flex-col gap-2'>
            <li>3 mins</li>
            <li>3 mins</li>
          </ul>
          <div className='border-t-gray-300 border-t-[1px] pt-2'>
            <b className='text-primary'>Duration:</b> 6 mins
          </div>
        </div>
      </div>
    </>
  )
}

export default Questions