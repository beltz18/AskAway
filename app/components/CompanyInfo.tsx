import React from 'react'
import Image from 'next/image'

const CompanyInfo = () => {
  return (
    <>
      <div className='flex flex-col m-auto bg-white shadow-md rounded-md max-w-[1200px]'>
        <div className='shadow-md flex items-center justify-center py-6 text-[#009EA8] font-bold text-2xl'>
          <h2>Company Information</h2>
        </div>
        
        <div className='py-12 px-12 flex gap-12'>
          <div className='w-[50%] flex flex-col justify-between'>
            <div className='flex gap-6'>
              <div className='flex flex-col gap-1 w-[50%]'>
                <label
                  htmlFor="name"
                  className='text-[#818181]'
                >
                  Name
                </label>
                <input
                  type="text"
                  id='name'
                  placeholder='Name'
                  className='bg-[#FAFAFA] color-[#B6B6B6] border-2 rounded-md px-3 w-full h-[36px]'
                />
              </div>

              <div className='flex flex-col gap-1 w-[50%]'>
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
                  className='bg-[#FAFAFA] color-[#B6B6B6] border-2 rounded-md px-3 w-full h-[36px]'
                />
              </div>
            </div>

            <div className='flex gap-6'>
              <div className='flex flex-col gap-1  w-[50%]'>
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
                  className='bg-[#FAFAFA] color-[#B6B6B6] border-2 rounded-md px-3 w-full h-[36px]'
                />
              </div>

              <div className='flex flex-col gap-1 w-[50%]'>
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
                  className='bg-[#FAFAFA] color-[#B6B6B6] border-2 rounded-md px-3 w-full h-[36px]'
                />
              </div>
            </div>

            <div className='flex gap-6'>
              <div className='flex flex-col gap-1 w-[50%]'>
                <label
                  htmlFor="country"
                  className='text-[#818181]'
                >
                  Country
                </label>
                <select
                  id='country'
                  className='bg-[#FAFAFA] border-2 rounded-md px-3 w-full h-[36px]'
                >
                  <option value="---">Country</option>
                </select>
              </div>

              <div className='flex flex-col gap-1 w-[50%]'>
                <label
                  htmlFor="state"
                  className='text-[#818181]'
                >
                  State
                </label>
                <select
                  id='state'
                  className='bg-[#FAFAFA] border-2 rounded-md px-3 w-full h-[36px]'
                >
                  <option value="---">State</option>
                </select>
              </div>
            </div>
          </div>

          <div className='w-[50%] flex items-center justify-center'>
            <div className='bg-gray-100 border-2 border-gray-400 border-dashed rounded-lg w-[80%] flex flex-col items-center justify-center py-8'>
              <Image
                src='/assets/vector.png'
                alt='image'
                width={100}
                height={100}
                className=''
              />
              <span className='text-gray-400 text-[10px] mt-3'>jpg, png. Max 100mb.</span>
              <span className='text-gray-400 text-[10px]'>Drag and Drop File</span>
              <span className='bg-[#097AB1] text-white mt-3 px-3 py-[3px] rounded-lg font-bold'>Upload Logo</span>
            </div>
          </div>
        </div>

        <div className='pb-12 px-12 flex gap-6'>
          <div className='flex flex-col gap-1 w-[25%]'>
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
              className='bg-[#FAFAFA] color-[#B6B6B6] border-2 rounded-md px-3 w-full h-[36px]'
            />
          </div>
          
          <div className='flex flex-col gap-1 w-[25%]'>
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
              className='bg-[#FAFAFA] color-[#B6B6B6] border-2 rounded-md px-3 w-full h-[36px]'
            />
          </div>

          <div className='flex flex-col gap-1 w-[25%]'>
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
              className='bg-[#FAFAFA] color-[#B6B6B6] border-2 rounded-md px-3 w-full h-[36px]'
            />
          </div>
          
          <div className='flex flex-col gap-1 w-[25%]'>
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
              className='bg-[#FAFAFA] color-[#B6B6B6] border-2 rounded-md px-3 w-full h-[36px]'
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default CompanyInfo