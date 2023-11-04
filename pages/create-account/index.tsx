import React     from 'react'
import Image     from 'next/image'
import Link      from 'next/link'
import Sullivan  from '@a/components/icons/Sullivan'
import MyHead    from '@c/MyHead'
import { links } from '@a/global'

const SignUp = () => {
  return (
    <>
      <MyHead title="AskAway - Create Account" />
      <div className='w-full h-[100vh] flex'>
        <div className='hidden md:w-[30%] h-full bg-primary relative md:flex md:items-center'>
          <div className='absolute right-[-15%]'>
            <Image
              src='/assets/login-img.png'
              alt='login'
              width={500}
              height={500}
            />
          </div>
        </div>
        
        <div className='w-[100%] md:w-[70%] flex flex-col relative items-center justify-center gap-12'>
          <div className='absolute top-2 right-2 flex items-center gap-2 mr-5'>
            <Image
              src='/assets/united-states.png'
              alt='English | Inglés'
              width={100}
              height={100}
              className='w-auto h-[25px] cursor-pointer'
            />
            <span className='font-bold text-xl text-primary'>/</span>
            <Image
              src='/assets/spain.png'
              alt='Spanish | Español'
              width={100}
              height={100}
              className='w-auto h-[25px] cursor-pointer'
            />
          </div>

          <div className='md:mt-5 w-[90%] max-w-[500px] shadow-2xl p-6 flex flex-col gap-6 rounded-xl'>
            <div className='flex items-center justify-center w-full'>
              <Sullivan />
            </div>

            <div className='w-full flex flex-col gap-3'>
              <input
                type="text"
                placeholder='First Name'
                className='bg-[#FAFAFA] color-[#B6B6B6] border-2 rounded-lg px-4 py-2 w-full'
              />
              <input
                type="text"
                placeholder='Last Name'
                className='bg-[#FAFAFA] color-[#B6B6B6] border-2 rounded-lg px-4 py-2 w-full'
              />
              <input
                type="email"
                placeholder='Company Email'
                className='bg-[#FAFAFA] color-[#B6B6B6] border-2 rounded-lg px-4 py-2 w-full'
              />
              <input
                type="password"
                placeholder='Password'
                className='bg-[#FAFAFA] color-[#B6B6B6] border-2 rounded-lg px-4 py-2 w-full'
              />
            </div>
            
            <div className='flex items-center justify-center gap-6 w-full'>
              <Link
                href={ links.home.main }
                className='bg-primary text-white px-3 py-2 rounded-md w-[50%] text-xl text-center'
              >
                Signup
              </Link>
            </div>
          </div>

          <div className='divider border-2 border-b-gray-100 w-[90%] max-w-[500px]'></div>

          <div className='w-[50%] max-w-[250px] flex items-center justify-center'>
            <Link
              href={ links.login.main }
              className='bg-[#393D41] text-white px-3 py-2 rounded-md text-xl text-center'
            >
              Back to Login
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default SignUp