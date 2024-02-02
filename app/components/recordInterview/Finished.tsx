import React from 'react'
import Link  from 'next/link'

const Finished = () => {
  return (
    <>
      <div className='w-full bg-gray-100 h-[90vh] px-[10%] flex flex-col gap-6 items-center justify-center text-center'>
        <h3 className='text-7xl text-[#667286]'>You&apos;re all done</h3>
        <br />
        <p className='px-[5%] text-[#667286]'>
          Congratulations on completing your practice interview! By taking this practice interview,
          you have gained valuable experience and a better idea of what to expect in a real interview.
          Please note that if this had been an actual interview, your answers would have been submitted
          for review by the hiring manager.
        </p>
        <p className='px-[5%] text-[#667286]'>
          Now that you have practiced your interview skills, you should
          feel more confident and prepared for the real interview.
        </p>
        <p className='px-[5%] text-[#667286]'>
          Ready for the real interview?
        </p>
        <br />
        <Link
          href={`/`}
          className='bg-[#214F71] text-white px-5 py-2 rounded-md'
        >
          Go to Interview
        </Link>
      </div>
    </>
  )
}

export default Finished