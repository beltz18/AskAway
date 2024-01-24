import React from 'react'

const JobManager = () : React.JSX.Element => {
  return (
    <>
      <div className='flex flex-col m-auto bg-white shadow-md rounded-md max-w-[1200px] mt-12'>
        <div className='shadow-md flex items-center justify-center py-6 text-[#009EA8] font-bold text-2xl'>
          <h2>Job Titles</h2>
        </div>

        <div className='shadow-md flex items-center justify-around py-3 text-[#494949]'>
          <h3>Name</h3>
          <h3>Department</h3>
          <h3>Action</h3>
        </div>
        
        <div className='bg-[#E2E5F06E] flex items-center justify-around gap-12'>
          <h4 className='text-[#494949] text-xl text-center py-12'>Please add a Job Title</h4>
        </div>

        <div className='flex items-center py-8 px-12 text-[#494949]'>
          <span className='bg-[#F5F5F5] text-[#444444] px-3 py-2 rounded-md border-2 cursor-pointer'>
            Add Job
          </span>
        </div>
      </div>
    </>
  )
}

export default JobManager