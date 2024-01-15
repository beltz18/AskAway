import React, { useState }  from 'react'
import { useDispatch }      from 'react-redux'
import { useSelector }      from 'react-redux'
import { toast }            from 'react-toastify'
import md5                  from 'md5'
import uuid4                from 'uuid4'
import { PostNewInterview } from '@api/Post'
import { Trash, Clip, Edit }      from '@i/InterviewIcons'
import type { RootState }   from '@r/store'
import { SetStep }          from '@r/slicers/StepperSlicer'
import { AddNewQuestion }   from '@r/slicers/QuestionsSlicer'
import { AddNewInterview }  from '@r/slicers/InterviewsSlicer'
import { ClearCandidates }  from '@r/slicers/CandidatesSlicer'
import { ClearPanel }       from '@r/slicers/PanelSlicer'
import { ClearQuestions }   from '@r/slicers/QuestionsSlicer'
import {
  reorderQuestions,
  reorderCandidateData,
  reorderPanelData,
  reorderManagerData,
} from '@a/functions'

const FormQuestions = ({ token, setOpenModal }: any) => {
  // redux states
  const dispatch      : any = useDispatch()
  const candidateData : any = useSelector((state: RootState) => state.CandidateData.candidates)
  const panelData     : any = useSelector((state: RootState) => state.PanelData.panel)
  const questions     : any = useSelector((state: RootState) => state.QuestionsData.questions)
  const userData      : any = useSelector((state: RootState) => state.UserData)

  // Alerts
  const SuccessAlert : any  = (message: string) => toast.success(message)
  const ErrorAlert   : any  = (message: string) => toast.error(message)

  // local states
  const [question, setQuestion]   = useState('')
  const [timeMins, setTimeMins]   = useState(3)
  const [timeSecs, setTimeSecs]   = useState(0)
  const [showAlert, setShowAlert] = useState(false)

  // handle delete
  const deleteQuestion = (index: number) => {
    let newArr : any = []
    questions.filter((value: any, i: number) => { if (i != index) newArr.push(value) })
    dispatch(AddNewQuestion(newArr))
  }


  // handle register interviews
  const registerInterview = async () => {
    const newInterview = {
      "questions": reorderQuestions(questions),
      "token": md5(uuid4()),
      "manager-token": userData['adminKey'],
      "candidate-data": reorderCandidateData(candidateData),
      "owner_data": reorderManagerData(userData),
      "panel": reorderPanelData(panelData),
      "eventId": md5(uuid4()),
      "isFree": true,
      "createdAt": new Date(),
    }

    const res = await PostNewInterview(token, { newInterview })
    
    if (res?.response?.status) {
      setOpenModal(false)
      SuccessAlert(res?.response?.message)
      dispatch(AddNewInterview(newInterview))
      dispatch(ClearCandidates())
      dispatch(ClearPanel())
      dispatch(ClearQuestions())
      dispatch(SetStep({ step: 1 }))
    }
    else ErrorAlert(res?.response?.message)
  }

  return (
    <>
      <form className="p-6">
        <h1 className='font-bold text-lg'>Questionnaire</h1>
        <div className="grid gap-4 mb-4 grid-cols-2 mt-12">
          <div className={`${showAlert ? 'block' : 'hidden'} col-span-2 p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50`}>
            <span className="font-medium">Error!</span> You have to type your question
          </div>

          <div className="flex items-end gap-3 col-span-2 w-full">
            <div className='w-[60%]'>
              <label
                htmlFor="question"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                New Question
              </label>

              <input
                type="text"
                name="question"
                id="question"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="Type the question here"
                onFocus={() => setShowAlert(false)}
                onChange={(e: any) => setQuestion(e.target.value)}
                value={ question }
              />
            </div>

            <div className='w-[40%] flex gap-3'>
              <div className="w-[50%]">
                <label
                  htmlFor="minutes"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Minutes
                </label>

                <select
                  id="minutes"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  onChange={(e: any) => setTimeMins(e.target.value)}
                  value={ timeMins }
                >
                  <option value={1}>01</option>
                  <option value={2}>02</option>
                  <option value={3}>03</option>
                  <option value={4}>04</option>
                  <option value={5}>05</option>
                </select>
              </div>

              <div className="w-[50%]">
                <label
                  htmlFor="seconds"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Seconds
                </label>

                <select
                  id='seconds'
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  onChange={(e: any) => setTimeSecs(e.target.value)}
                  value={ timeSecs }
                >
                  <option value={0} >00</option>
                  <option value={10}>10</option>
                  <option value={20}>20</option>
                  <option value={30}>30</option>
                  <option value={40}>40</option>
                  <option value={50}>50</option>
                </select>
              </div>
            </div>
          </div>

          <div className='flex items-center gap-4'>
            <button
              type="button"
              className="text-white inline-flex items-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-xs px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              onClick={() => {
                if (question) {
                  dispatch(AddNewQuestion({
                    question,
                    timeMins,
                    timeSecs,
                  }))
                  setQuestion('')
                  setTimeMins(3)
                  setTimeSecs(0)
                } else setShowAlert(true)
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
            
            <span className='cursor-pointer' title='Upload a Photo'>
              <Clip />
            </span>
          </div>
        </div>

        <div className='w-full my-6'>          
          <div className='p-3 bg-slate-100 max-h-[25vh] overflow-y-auto'>
            <div className='mt-1 py-1 w-full flex items-center justify-between border-b-2'>
              <h4 className='font-bold text-sm'>Questions</h4>
              
              <div className='flex items-center gap-16'>
                <h4 className='font-bold text-sm'>Time</h4>
                <h4 className='font-bold text-sm'>Action</h4>
              </div>
            </div>
            
            {
              questions.map((q: any, index: number) => (
                <div
                  key={ index }
                  className='mt-1 py-1 w-full flex items-center justify-between border-b-2'
                >
                  <h6 className='text-slate-600 font-semibold text-sm'>{ q.question }</h6>
            
                  <div className='flex items-center gap-16'>
                    <h6 className='text-slate-600 font-semibold text-sm'>0{ q.timeMins }:{ parseInt(q.timeSecs) == 0 ? `0${q.timeSecs}` : q.timeSecs }m</h6>
                    <div
                      className='px-6 py-4 flex items-center justify-center gap-2'
                    >
                      <span className='bg-[#E3F1EB] rounded-md cursor-pointer'
                      //Aca va la funcion de editQuestion
                      >
                      <Edit />
                      </span>
                      <span className='bg-[#FDDEE1] rounded-md cursor-pointer'
                      onClick={() => deleteQuestion(index)}
                      >
                      <Trash />
                      </span>
                    </div>
                  </div>
                </div>
              ))
            }
          </div>
        </div>

        <div className='flex items-center gap-6 justify-center mt-12'>
          <button
            type="button"
            className="text-[#214F71] inline-flex items-center border-2 border-[#214F71] bg-white focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-12 py-2 text-center"
            onClick={() => dispatch(SetStep({ step: 2 }))}
          >
            Back
          </button>

          <button
            type="button"
            className="text-white inline-flex items-center border-2 border-[#214F71] bg-[#214F71] hover:bg-blue-900 focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-12 py-2 text-center"
            onClick={ registerInterview }
          >
            Submit
          </button>
        </div>
      </form>
    </>
  )
}

export default FormQuestions