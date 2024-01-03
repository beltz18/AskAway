import React, { useState }   from 'react'
import { useDispatch }       from 'react-redux'
import { useSelector }       from 'react-redux'
import { SetStep }           from '@r/slicers/StepperSlicer'
import { AddNewPanelMember } from '@r/slicers/PanelSlicer'
import type { RootState }    from '@r/store'

const FormPanel = () => {
  const [fname, setFname] = useState('')
  const [lname, setLname] = useState('')
  const [email, setEmail] = useState('')
  const dispatch  : any   = useDispatch()
  const panelData : any   = useSelector((state: RootState) => state.PanelData.panel)

  const deletePanelMember = (index: number) => {
    let newArr : any = []
    panelData.filter((value: any, i: number) => { if (i != index) newArr.push(value) })
    dispatch(AddNewPanelMember(newArr))
  }

  const handleEmptyInputs = () => {
    setFname('')
    setLname('')
    setEmail('')
  }

  return (
    <>
      <form className="p-6">
        <h1 className='font-bold text-lg'>Panel Data</h1>
        <div className="grid gap-4 mb-4 grid-cols-2 mt-12">
          <div className="col-span-2 sm:col-span-1">
            <label
              htmlFor="name"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              First Name *
            </label>

            <input
              type="text"
              name="firstName"
              id="firstName"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
              placeholder="First Name"
              onChange={(e: any) => setFname(e.target.value)}
              value={ fname }
            />
          </div>

          <div className="col-span-2 sm:col-span-1">
            <label
              htmlFor="lastName"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Last Name *
            </label>

            <input
              type="text"
              name="lastName"
              id="lastName"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
              placeholder="Last Name"
              onChange={(e: any) => setLname(e.target.value)}
              value={ lname }
            />
          </div>

          <div className="col-span-2 sm:col-span-1">
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Email *
            </label>

            <input
              type="text"
              name="email"
              id="email"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
              placeholder="Email"
              onChange={(e: any) => setEmail(e.target.value)}
              value={ email }
            />
          </div>

          <div className="col-span-2 sm:col-span-1"></div>

          <div>
            <button
              type="button"
              className="text-white inline-flex items-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-xs px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              onClick={() => {
                dispatch(AddNewPanelMember({
                  firstName: fname,
                  lastName: lname,
                  email: email,
                }))
                handleEmptyInputs()
              }}
            >
              <svg className="me-1 -ms-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                  clipRule="evenodd"
                />
              </svg>
              Add
            </button>
          </div>
        </div>

        <div>
          {
            panelData?.length > 0 && panelData?.map(({ firstName, lastName }: any, index: number) => (
              <div
                key={ index }
                className='bg-slate-300 py-1 px-3 rounded-full inline-flex items-center gap-2 mr-3 mb-2'
              >
                <span>
                  { firstName } { lastName }
                </span>

                <svg
                  className="w-3 h-3 cursor-pointer"
                  viewBox="0 0 14 14"
                  onClick={() => deletePanelMember(index)}
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                  />
                </svg>
              </div>
            ))
          }
        </div>

        <div className='flex items-center gap-6 justify-center mt-12'>
          <button
            type="button"
            className="text-[#214F71] inline-flex items-center border-2 border-[#214F71] bg-white focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-12 py-2 text-center"
            onClick={() => dispatch(SetStep({ step: 1 }))}
          >
            BACK
          </button>
          <button
            type="button"
            className="text-white inline-flex items-center border-2 border-[#214F71] bg-[#214F71] hover:bg-blue-900 focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-12 py-2 text-center"
            onClick={() => dispatch(SetStep({ step: 3 }))}
          >
            NEXT
          </button>
        </div>
      </form>
    </>
  )
}

export default FormPanel