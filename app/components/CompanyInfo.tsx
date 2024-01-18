import React              from 'react'
import Image              from 'next/image'
import { useSelector }    from 'react-redux'
import type { RootState } from '@r/store'

const CompanyInfo = () => {
  const userData : any = useSelector((state: RootState) => state.UserData)

  return (
    <>
      <div className='flex flex-col m-auto bg-white shadow-md rounded-md max-w-[1200px] max-sm:flex-col'>
        <div className='shadow-md flex items-center justify-center py-6'>
          <h2 className='text-[#009EA8] font-bold text-2xl'>Company Information</h2>
        </div>
        
        <div className='py-12 px-12 flex gap-12 max-sm:flex-col'>
          <div className='w-[50%] flex flex-col justify-between max-sm:flex-col max-sm:w-[100%] max-sm:gap-2.5'>
            <div className='flex gap-6 max-sm:flex-col max-sm:gap-2.5'>
              <div className='flex flex-col gap-1 w-[50%] max-sm:w-[100%]'>
                <label
                  htmlFor="name"
                  className='text-[#818181]'
                >
                  First Name
                </label>
                <input
                  type="text"
                  id='name'
                  placeholder='First Name'
                  className='bg-[#FAFAFA] color-[#B6B6B6] border-1 rounded-md px-3 w-full h-[45px]'
                  defaultValue={ userData?.first_name }
                />
              </div>

              <div className='flex flex-col gap-1 w-[50%] max-sm:w-[100%] '>
                <label
                  htmlFor="lastName"
                  className='text-[#818181]'
                >
                  Last Name
                </label>
                <input
                  type="text"
                  id='lastName'
                  placeholder='Last Name'
                  className='bg-[#FAFAFA] color-[#B6B6B6] border-1 rounded-md px-3 w-full h-[45px]'
                  defaultValue={ userData['last-name'] }
                />
              </div>
            </div>

            <div className='flex gap-6 max-sm:flex-col max-sm:gap-2.5'>
              <div className='flex flex-col gap-1  w-[50%] max-sm:w-[100%]'>
                <label
                  htmlFor="companyName"
                  className='text-[#818181]'
                >
                  Company Name
                </label>
                <input
                  type="text"
                  id='companyName'
                  placeholder='Company Name'
                  className='bg-[#FAFAFA] color-[#B6B6B6] border-1 rounded-md px-3 w-full h-[45px]'
                  defaultValue={ userData?.company_name }
                />
              </div>

              <div className='flex flex-col gap-1 w-[50%] max-sm:w-[100%]'>
                <label
                  htmlFor="email"
                  className='text-[#818181]'
                >
                  Email
                </label>
                <input
                  type="text"
                  id='email'
                  placeholder='Email'
                  className='bg-[#FAFAFA] color-[#B6B6B6] border-1 rounded-md px-3 w-full h-[45px]'
                  defaultValue={ userData?.email }
                />
              </div>
            </div>

            <div className='flex gap-6 max-sm:flex-col max-sm:gap-2.5'>
              <div className='flex flex-col gap-1 w-[50%] max-sm:w-[100%]'>
                <label
                  htmlFor="country"
                  className='text-[#818181]'
                >
                  Country
                </label>
                <select
                  id='country'
                  className='bg-[#FAFAFA] border-1 rounded-md px-3 w-full h-[45px]'
                  defaultValue={ userData?.country }
                >
                  <option value="---">Country</option>
                  <option value="Argentina">Argentina</option>
                </select>
              </div>

              <div className='flex flex-col gap-1 w-[50%] max-sm:w-[100%]'>
                <label
                  htmlFor="state"
                  className='text-[#818181]'
                >
                  State
                </label>
                <select
                  id='state'
                  className='bg-[#FAFAFA] border-1 rounded-md px-3 w-full h-[45px]'
                  defaultValue={ userData?.state }
                >
                  <option value="---">State</option>
                  <option value="Cordoba">Cordoba</option>
                </select>
              </div>
            </div>
          </div>

          <div className='w-[50%] flex items-center justify-center max-sm:w-[100%] order-1'>
            <div className='bg-gray-100 border-2 border-gray-400 border-dashed rounded-lg w-[80%] flex flex-col items-center justify-center py-8 max-sm:w-[100%]'>
              <Image
                src='/assets/vector.png'
                alt='image'
                width={100}
                height={100}
                className=''
              />
              <span className='text-gray-400 text-[10px] mt-3'>jpg, png. Max 100mb.</span>
              <span className='text-gray-400 text-[10px]'>Drag and Drop File</span>
              <span className='bg-[#097AB1] text-white text-sm mt-3 px-3 py-[3px] rounded-lg font-bold cursor-pointer'>Upload Logo</span>
            </div>
          </div>
        </div>

        <div className='pb-12 px-12 flex gap-6 max-sm:flex-col max-sm:gap-2.5'>
          <div className='flex flex-col gap-1 w-[25%] max-sm:w-[100%]'>
            <label
              htmlFor="companyAddress"
              className='text-[#818181]'
            >
              Company Address
            </label>
            <input
              type="text"
              id='companyAddress'
              placeholder='Company Address'
              className='bg-[#FAFAFA] color-[#B6B6B6] border-1 rounded-md px-3 w-full h-[45px]'
              defaultValue={ userData?.address }
            />
          </div>
          
          <div className='flex flex-col gap-1 w-[25%] max-sm:w-[100%]'>
            <label
              htmlFor="companyAddress2"
              className='text-[#818181]'
            >
              Company Address 2
            </label>
            <input
              type="text"
              id='companyAddress2'
              placeholder='Company Address 2'
              className='bg-[#FAFAFA] color-[#B6B6B6] border-1 rounded-md px-3 w-full h-[45px]'
              defaultValue={ userData?.address2 }
            />
          </div>

          <div className='flex flex-col gap-1 w-[25%] max-sm:w-[100%]'>
            <label
              htmlFor="companyCity"
              className='text-[#818181]'
            >
              Company City
            </label>
            <input
              type="text"
              id='companyCity'
              placeholder='Company City'
              className='bg-[#FAFAFA] color-[#B6B6B6] border-1 rounded-md px-3 w-full h-[45px]'
              defaultValue={ userData?.city }
            />
          </div>
          
          <div className='flex flex-col gap-1 w-[25%] max-sm:w-[100%]'>
            <label
              htmlFor="companyZip"
              className='text-[#818181]'
            >
              Company Zip
            </label>
            <input
              type="text"
              id='companyZip'
              placeholder='Company Zip'
              className='bg-[#FAFAFA] color-[#B6B6B6] border-1 rounded-md px-3 w-full h-[45px]'
              defaultValue={ userData?.zip }
            />
          </div>
        </div>

        <div className='pb-6 flex items-center justify-center order-2'>
          <input
            type="button"
            className='bg-[#214F71] text-white font-bold px-4 py-[2px] rounded-md h-[40px] cursor-pointer'
            value='Save Changes'
          />
        </div>
      </div>
    </>
  )
}

export default CompanyInfo