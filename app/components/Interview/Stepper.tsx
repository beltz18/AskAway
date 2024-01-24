import React              from 'react'
import type { RootState } from '@r/store'
import { SetStep }        from '@r/slicers/StepperSlicer'
import {
  useDispatch,
  useSelector
} from 'react-redux'
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

const Stepper = () : React.JSX.Element => {
  const dispatch   = useDispatch()
  const step : any = useSelector((state: RootState) => state.Step.step)
  
  return (
    <>
      <div className='flex items-center justify-center px-2 pb-2 w-full'>
        <ol className="flex items-center w-full">
          <li
            className={`${step == 1 ? stepCheckedCss : stepUncheckedCss}`}
            onClick={() => dispatch(SetStep({ step: 1 }))}
          >
            <span className={`${step == 1 ? 'bg-blue-100' : 'bg-gray-100'} flex items-center justify-center w-10 h-10 rounded-full shrink-0`}>
              { step == 1 ? (<Check />) : (<User />) }
            </span>
          </li>

          <li
            className={`${step == 2 ? stepCheckedCss : stepUncheckedCss}`}
            onClick={() => dispatch(SetStep({ step: 2 }))}
          >
            <span className={`${step == 2 ? 'bg-blue-100' : 'bg-gray-100'} flex items-center justify-center w-10 h-10 rounded-full shrink-0`}>
              { step == 2 ? (<Check />) : (<Panel />) }
            </span>
          </li>

          <li
            className={`flex items-center cursor-pointer`}
            onClick={() => dispatch(SetStep({ step: 3 }))}
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