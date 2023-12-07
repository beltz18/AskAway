import React from 'react'
import {
  stepCheckedCss,
  stepUncheckedCss,
} from '@a/global'
import {
  User,
  Panel,
  Task,
  Check,
} from '@i/ModalIcons'

const Stepper = () => {
  const [step, setStep] = React.useState(1)
  
  return (
    <>
      <div className='flex items-center justify-center px-2 pb-2 w-full'>
        <ol className="flex items-center w-full">
          <li
            className={`${step == 1 ? stepCheckedCss : stepUncheckedCss}`}
            onClick={() => setStep(1)}
          >
            <span className={`${step == 1 ? 'bg-blue-100' : 'bg-gray-100'} flex items-center justify-center w-10 h-10 rounded-full shrink-0`}>
              { step == 1 ? (<Check />) : (<User />) }
            </span>
          </li>

          <li
            className={`${step == 2 ? stepCheckedCss : stepUncheckedCss}`}
            onClick={() => setStep(2)}
          >
            <span className={`${step == 2 ? 'bg-blue-100' : 'bg-gray-100'} flex items-center justify-center w-10 h-10 rounded-full shrink-0`}>
              { step == 2 ? (<Check />) : (<Panel />) }
            </span>
          </li>

          <li
            className={`flex items-center cursor-pointer`}
            onClick={() => setStep(3)}
          >
            <span className={`${step == 3 ? 'bg-blue-100' : 'bg-gray-100'} flex items-center justify-center w-10 h-10 rounded-full shrink-0`}>
              { step == 3 ? (<Check />) : (<Task />) }
            </span>
          </li>
        </ol>
      </div>
    </>
  )
}

export default Stepper