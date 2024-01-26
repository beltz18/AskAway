import React from 'react'

const InterviewsHeader = ({ c }: any) => {
  return (
    <>
      <div className='flex justify-between items-center m-auto bg-white shadow-md rounded-md p-6'>
        <h2 className='text-[#009EA8] font-bold text-2xl max-sm:text-[1.2rem]'>All candidates</h2>

        <div className='flex flex-col border-l-2 pl-6 gap-4'>
          <h3 className='text-[#009EA8] font-bold text-md max-sm:text-sm'>Interviews available:</h3>
          
          <div className='flex flex-col items-end gap-2'>
            <span className='text-[#898989] text-xs'>{ c }/10</span>
            
            <div className="w-full bg-[#e3e3e9] rounded-md h-[30px]">
              <div className="bg-primary h-[30px] rounded-md" style={{ width: `${c * 10}%` }}></div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default InterviewsHeader