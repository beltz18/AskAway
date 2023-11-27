'use client'
import 'react-toastify/dist/ReactToastify.css'

import React, { useState, useEffect } from 'react'
import Image                          from 'next/image'
import Link                           from 'next/link'
import { ToastContainer, toast }      from 'react-toastify'
import { useDispatch }                from 'react-redux'
import { useRouter }                  from 'next/navigation'
import { links }                      from '@a/global'
import { PostAPI, setCookie }         from '@a/functions'
import Sullivan                       from '@i/Sullivan'
import { loginInfo }                  from "@t/common"
import { SaveUserData }               from '@r/slicers/AuthSlicer'

const LoginView = () => {
  // Router
  const { push } = useRouter()
  
  // States
  const [email, setEmail]       : any = useState(null)
  const [passw, setPassw]       : any = useState(null)
  const [disabled, setDisabled] : any = useState(false)
  const [redirect, setRedirect] : any = useState(false)

  // Redux Stuff
  const dispatch = useDispatch()

  // Alerts and Regex
  const SuccessAlert     = (message: string) => toast.success(message)
  const ErrorAlert       = (message: string) => toast.error(message)
  const emailRegex : any = /^((?!\.)[\w-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/gim

  // Data POST
  const dataAuth: loginInfo = {
    email: email,
    password: passw,
  }

  // Redirect
  useEffect(() => {
    if (redirect) push('/home')
  }, [redirect])

  return (
    <>
      <div className='w-full h-[100vh] flex'>
        <ToastContainer />
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

            <div className='w-full flex flex-col gap-3 relative'>
              {
                disabled
                  ?
                <p className='mt-2 text-sm text-right text-red-600 dark:text-red-500'>
                  <span className="font-medium">Oops!</span> Check your email!
                </p>
                  : 
                <></>
              }
              
              <input
                type="email"
                placeholder='Email'
                className='bg-[#FAFAFA] color-[#B6B6B6] border-2 rounded-lg px-4 py-2 w-full'
                onChange={(e) => setEmail(e.target.value)}
                onBlur={() => {
                  if (email)
                    email.match(emailRegex) ? setDisabled(false) : setDisabled(true)
                }}
              />

              <input
                type="password"
                placeholder='Password'
                className='bg-[#FAFAFA] color-[#B6B6B6] border-2 rounded-lg px-4 py-2 w-full'
                onChange={(e) => setPassw(e.target.value)}
              />
            </div>

            <div className='flex gap-6 w-full'>
              <button
                type='button'
                disabled={ disabled }
                title={ disabled ? 'Check your email' : 'Login' }
                className={`${disabled ? 'bg-[#393D41]' : 'bg-primary'} text-white px-3 py-2 rounded-md w-[50%] text-xl text-center`}
                onClick={async function () {
                  const res = await PostAPI(dataAuth)
                  if (res?.success) {
                    SuccessAlert('Welcome!')
                    dispatch(SaveUserData(res?.data?.admin))
                    setCookie('token', res?.token.split(' ')[1])
                    setCookie('email', res?.data?.admin?.email)
                    setRedirect(true)
                  } else ErrorAlert(res?.message || 'Authentication error')
                }}
              >
                Login
              </button>

              <Link
                href="#"
                className='bg-[#393D41] text-white text-xl px-3 py-2 rounded-md w-[50%] text-center'
              >
                Forgot Password
              </Link>
            </div>
          </div>

          <div className='divider border-2 border-b-gray-100 w-[90%] max-w-[500px]'></div>

          <div className='w-[50%] max-w-[250px] shadow-2xl rounded-xl'>
            <Link href={links.register.main} className='w-full flex flex-col gap-6 p-6 items-center justify-center'>
              <h2 className='text-2xl text-primary text-center'>Create Account</h2>
              <Image
                src='/assets/new-account.png'
                alt='new account'
                width={100}
                height={100}
                className='w-[150px] h-auto'
              />
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default LoginView