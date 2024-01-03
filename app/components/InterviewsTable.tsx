import React               from 'react'
import { useState }        from 'react'
import { useSelector }     from 'react-redux'
import { options }         from '@a/global'
import Modal               from '@c/Interview/Modal'
import BodyInterviewsTable from '@c/Interview/BodyInterviewsTable'
import NavFooter           from '@c/Interview/NavFooter'
import type { RootState }  from '@r/store'
import {
  Filter,
} from '@i/InterviewIcons'

const InterviewsTable = ({ token }: any) => {
  const data : any = useSelector((state: RootState) => state.InterviewsData.interviews)

  let intData = data
  const [showInterview, setShowInterview] = useState([...Array(intData.length).keys()].map(i => false))
  const [stepMenu, setStepMenu]   : any   = useState(1)
  const [openModal, setOpenModal] : any   = useState(false)

  const newState = (index: number) => {
    let state : any = [...Array(intData.length).keys()].map(i => false)
    state[index] = !showInterview[index]
    setStepMenu(1)
    return state
  }

  return (
    <>
      <div className='mt-12 max-w-[1200px] m-auto'>
        <div className='my-12 flex items-center justify-between'>
          <span
            className='bg-[#214F71] text-white py-[6px] px-6 rounded-md cursor-pointer'
            onClick={() => setOpenModal(true)}
          >
            Create Interview
          </span>

          { 
            openModal && (
              <Modal
                setOpenModal={ setOpenModal }
                token={ token }
              />
            )
          }

          <div className='flex items-center gap-6'>
            <div className='flex items-center gap-2'>
              <Filter />
              <span className='text-primary'>Search by:</span>
            </div>

            <input
              type="number"
              className='py-2 px-3 border-2 rounded-md'
              min='2022'
              max='2023'
              placeholder='Year'
            />
            
            <input
              type="number"
              className="py-2 px-3 border-2 rounded-md"
              min='1'
              max='12'
              placeholder='Month'
            />
          </div>
        </div>

        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
          <table className="w-full text-sm text-left text-gray-500">
            <thead className="text-xs bg-white shadow-md uppercase">
              <tr className='text-center'>
                { options.map((option, index) => (<th key={ index } scope="col" className="p-6">{ option }</th>)) }
              </tr>
            </thead>

            <tbody className='border-t-2'>
              {
                data?.map((data: any, index: number) => (
                  <BodyInterviewsTable
                    key={ index }
                    data={ data }
                    index={ index }
                    showInterview={ showInterview }
                    setShowInterview={ setShowInterview }
                    newState={ newState }
                    stepMenu={ stepMenu }
                    setStepMenu={ setStepMenu }
                  />
                ))
              }
            </tbody>
          </table>

          <NavFooter />
        </div>
      </div>
    </>
  )
}

export default InterviewsTable