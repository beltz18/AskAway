import React from 'react'

const InterviewsHeader = () => {
  return (
    <>
      <div className='flex justify-between items-center m-auto bg-white shadow-md rounded-md max-w-[1200px] p-6'>
        <h2 className='text-[#009EA8] font-bold text-2xl'>All candidates</h2>

        <div className='flex flex-col border-l-2 pl-6 gap-4'>
          <h3 className='text-[#009EA8] font-bold text-md'>Interviews available</h3>
          
          <div>
            <span className='text-[#898989] text-xs'>45/100</span>
            <div className="w-full bg-[#e3e3e9] rounded-md h-[30px]">
              <div className="bg-primary h-[30px] rounded-md w-[45%]"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default InterviewsHeader