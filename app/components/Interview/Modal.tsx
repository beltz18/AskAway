import React              from 'react'
import { useSelector }    from 'react-redux'
import Stepper            from '@c/Interview/Stepper'
import FormCandidate      from '@c/Interview/FormCandidate'
import FormPanel          from '@c/Interview/FormPanel'
import FormQuestions      from '@c/Interview/FormQuestions'
import type { RootState } from '@r/store'


const Modal = ({ setOpenModal, token }: any) : React.JSX.Element => {
  const step : any = useSelector((state: RootState) => state.Step.step)

  return (
    <>
      <div className="flex overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
        <div className="relative p-4 w-full max-w-xl max-h-full">
          <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
            <div className='shadow-md'>
              <div className="flex items-center justify-between p-4">
                <h3 className="text-xl font-bold text-[#009EA8] text-center ml-auto dark:text-white">
                  New Interview
                </h3>

                <button
                  type="button"
                  className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                  onClick={() => setOpenModal(false)}
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
              
              <Stepper />
            </div>

            { step == 1 && (<FormCandidate />) }
            { step == 2 && (<FormPanel     />) }
            { step == 3 && (<FormQuestions token={ token } setOpenModal={ setOpenModal } />) }
          </div>
        </div>
      </div>
    </>
  )
}

export default Modal