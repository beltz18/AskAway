import React from 'react'
import Image from 'next/image'

const Footer = () => {
  return (
    <>
      <footer className='bg-white w-full p-6 flex items-center justify-center'>
        <Image
          src='/assets/powered_by.png'
          alt='AskAway logo'
          width={100}
          height={100}
        />
      </footer>
    </>
  )
}

export default Footer