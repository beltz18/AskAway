import React from 'react'

const CompanyMain = ({ children }: any) => {
  return (
    <>
      <main className='px-[5%] bg-[#F5F6FA] min-h-[100vh]'>
        { children }
      </main>
    </>
  )
}

export default CompanyMain