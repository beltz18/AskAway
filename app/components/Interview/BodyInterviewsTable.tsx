import React              from 'react'
import { useSelector }    from 'react-redux'
import Questions          from '@c/Interview/Questions'
import Candidates         from '@c/Interview/Candidates'
import Panel              from '@c/Interview/Panel'
import type { RootState } from '@a/redux/store'
import {
  ArrowDown,
  ArrowRight,
  Edit,
  Trash,
} from '@i/InterviewIcons'

const BodyInterviewsTable = ({
  data,
  index,
  showInterview,
  setShowInterview,
  newState,
  stepMenu,
  setStepMenu,
}: any) => {
  let totalTime = 0
  data?.questions?.map((q: any) => totalTime += parseInt(q?.time))

  const userData : any = useSelector((state: RootState) => state.UserData)
  let name : string    = `${userData?.first_name} ${userData?.['last-name']}`

  return (
    <>
      <>
        <tr key={ index } className="bg-white border-b hover:bg-gray-50 text-center">
          <td className="w-4 p-4">
            <span
              className='cursor-pointer'
              onClick={() => setShowInterview(newState(index))}
            >
              { showInterview[index] ? (<ArrowDown />) : (<ArrowRight />) }
            </span>
          </td>

          <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">{ Intl.DateTimeFormat('en', { weekday: 'long', month: 'short', day: 'numeric' }).format(new Date(data?.createdAt)) }</td>
          <td className="px-6 py-4 text-primary whitespace-nowrap">{ data?.jobTitle || 'Full Stack Dev' }</td>
          <td className="px-6 py-4">{ data?.owner_data?.name == name ? 'You' : data?.owner_data[0]?.name }</td>
          <td className="px-6 py-4">
            { totalTime } mins
          </td>

          <td className="px-6 py-4 flex items-center justify-center gap-2">
            <span className='bg-[#E3F1EB] rounded-md'>
              <Edit />
            </span>
            <span className='bg-[#FDDEE1] rounded-md'>
              <Trash />
            </span>
          </td>
        </tr>

        <tr className={`${showInterview[index] ? '' : 'hidden'} bg-[#EAECF4] border-t-2`}>
          <td colSpan={ 10 } className='px-12 py-6'>
            <div>
              <div className='flex items-center gap-6 mb-6 pb-2 px-6 border-b-gray-300 border-b-[1px]'>
                <span
                  className={`${stepMenu == 1 ? 'text-primary font-bold' : 'text-[#8E8E8E]'} cursor-pointer`}
                  onClick={() => setStepMenu(1)}
                >
                  Questions
                </span>
                <span
                  className={`${stepMenu == 2 ? 'text-primary font-bold' : 'text-[#8E8E8E]'} cursor-pointer`}
                  onClick={() => setStepMenu(2)}
                >
                  Candidates
                </span>
                <span
                  className={`${stepMenu == 3 ? 'text-primary font-bold' : 'text-[#8E8E8E]'} cursor-pointer`}
                  onClick={() => setStepMenu(3)}
                >
                  Panel Member
                </span>
              </div>

              { stepMenu == 1 && (<Questions  questions={ data?.questions } />) }
              { stepMenu == 2 && (<Candidates candidates={ data?.['candidate-data'] } />) }
              { stepMenu == 3 && (<Panel      panel={ data?.panel } />) }
            </div>
          </td>
        </tr>
      </> 
    </>
  )
}

export default BodyInterviewsTable