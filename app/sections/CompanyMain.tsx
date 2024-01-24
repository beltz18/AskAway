import React from 'react'

const CompanyMain = ({ children }: any) : React.JSX.Element => {
  return (
    <>
      <main className='px-[5%] bg-[#F5F6FA] py-12 min-h-[100vh]'>
        { children }
      </main>
    </>
  )
}

export default CompanyMain