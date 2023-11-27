import React from 'react'
import uuid4 from "uuid4"

const Modal = ({
  openModal,
  setOpenModal
}: any) => {
  var id = uuid4()

  return (
    <>
      <div className="flex overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
        <div className="relative p-4 w-full max-w-xl max-h-full">
          <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
            <div className='shadow-md'>
              <div className="flex items-center justify-between p-4">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  New Interview
                </h3>

                <button
                  type="button"
                  className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                  onClick={() => setOpenModal(!openModal)}
                >
                  <svg className="w-3 h-3" viewBox="0 0 14 14">
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                    />
                  </svg>
                </button>

              </div>
              
              <ol className="flex items-center justify-center gap-8 w-full p-3 space-x-2 text-sm font-medium text-center text-gray-500 bg-white">
                <li className="flex flex-col items-center justify-center">
                  <span className="flex items-center justify-center w-[40px] h-[40px] text-[#909090] bg-[#7C7C7C26] rounded-full shrink-0">
                    1
                  </span>
                  <span>Candidate Data</span>
                </li>

                <li className="flex flex-col items-center justify-center">
                  <span className="flex items-center justify-center w-[40px] h-[40px] text-[#909090] bg-[#7C7C7C26] rounded-full shrink-0">
                    2
                  </span>
                  <span>Organizational Info</span>
                </li>

                <li className="flex flex-col items-center justify-center">
                  <span className="flex items-center justify-center w-[40px] h-[40px] text-[#909090] bg-[#7C7C7C26] rounded-full shrink-0">
                    3
                  </span>
                  <span>Panel</span>
                </li>
                
                <li className="flex flex-col items-center justify-center">
                  <span className="flex items-center justify-center w-[40px] h-[40px] text-[#909090] bg-[#7C7C7C26] rounded-full shrink-0">
                    4
                  </span>
                  <span>Questionnaire</span>
                </li>
              </ol>
            </div>

            <form className="p-6">
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
                  />
                </div>

                <div className="col-span-2 sm:col-span-1">
                  <label
                    htmlFor="id"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    ID
                  </label>
                  
                  <input
                    type="text"
                    name="id"
                    id="id"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    placeholder="ID"
                    defaultValue={ id }
                    disabled={ true }
                  />
                </div>
              </div>

              <div className='flex items-center justify-center mt-12'>
                <button type="submit" className="text-white inline-flex items-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                  <svg className="me-1 -ms-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clipRule="evenodd"></path>
                  </svg>
                  Add new product
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default Modal