import React from 'react'

const Background = ({ message, current, length }: any) => {
  return (
    <>
      <div className='bg-[#14C4CF] h-[45vh] w-full'>
        <div className='flex items-center justify-between px-3 pt-2'>
          <span className='text-[#14C4CF]'>|</span>
          <h4 className='text-[#018F9A] font-bold text-lg'>{ message }</h4>
          <h4 className='text-[#0396A1]'>
            <b>{ current }</b> / { length }
          </h4>
        </div>
      </div>
    </>
  )
}

export default Background