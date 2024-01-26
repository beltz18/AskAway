import React               from 'react'
import { useState }        from 'react'
import { useSelector }     from 'react-redux'
import { options }         from '@a/global'
import Modal               from '@c/Interview/Modal'
import BodyInterviewsTable from '@c/Interview/BodyInterviewsTable'
import NavFooter           from '@c/Interview/NavFooter'
import { Filter }          from '@i/InterviewIcons'
import type { RootState }  from '@r/store'

const InterviewsTable = ({ token }: any) => {
  // Redux store
  const data : any = useSelector((state: RootState) => state.InterviewsData.interviews)

  // States
  let intData = data
  const [showInterview, setShowInterview] = useState([...Array(intData.length).keys()].map(i => false))
  const [stepMenu, setStepMenu]   : any   = useState(1)
  const [openModal, setOpenModal] : any   = useState(false)
  const [redYear, setRedYear]     : any   = useState(false)
  const [redMonth, setRedMonth]   : any   = useState(false)

  // Change states
  const newState = (index: number) => {
    let state : any = [...Array(intData.length).keys()].map(i => false)
    state[index] = !showInterview[index]
    setStepMenu(1)
    return state
  }

  // Handle incorrect value
  const handleIncorrect = (min: number, max: number, e: any, set: any) => {
    let val = e.target.value
    let arr = []
    let con = true

    for (let i = min; i <= max; i++) arr.push(i)
    arr.map((c: number) => { if (c == parseInt(val)) con = false })
    set(con)
  }

  return (
    <>
      <div className='mt-12 max-w-[1200px] m-auto'>
        <div className='my-12 flex items-center justify-between gap-6 max-sm:flex-col'>
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

          <div className='flex justify-center items-center gap-6'>
            <div className='flex mt-6 items-center gap-2'>
              <Filter />
              <span className='text-primary'>Search by:</span>
            </div>

            <div className='flex flex-col'>
              <span className={`${ redMonth ? 'text-red-600' : 'text-[#F5F6FA]' }`}>Incorrect value</span>
              <input
                type="number"
                className="py-2 px-3 border-1 rounded-md max-sm:h-8"
                min='1'
                max='12'
                placeholder='Month'
                onChange={(e) => handleIncorrect(1, 12, e, setRedMonth)}
                onBlur={() => setRedMonth(false)}
              />
            </div>

            <div className='flex flex-col'>
              <span className={`${ redYear ? 'text-red-600' : 'text-[#F5F6FA]' }`}>Incorrect value</span>
              <input
                type="number"
                className='py-2 px-3 border-1 rounded-md max-sm:h-8'
                min='2022'
                max={ new Date().getFullYear() }
                placeholder='Year'
                onChange={(e) => handleIncorrect(2022, new Date().getFullYear(), e, setRedYear)}
                onBlur={() => setRedYear(false)}
              />
            </div>
          </div>
        </div>

        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
          <table className="w-full text-sm text-left text-gray-500">
            <thead className="text-base bg-white shadow-md">
              <tr className='text-center'>
                {
                  options.map((option, index) =>
                    (<th key={ index } scope="col" className="p-6">{ option }</th>))
                }
              </tr>
            </thead>

            <tbody className='border-t-2'>
              {
                data.length > 0
                  ?
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
                    token={ token }
                  />
                )) : (
                  <tr className="bg-white border-b hover:bg-gray-50 text-center">
                    <td colSpan={ 9 } className='w-4 p-4 py-8'>
                      No Interviews Scheduled.
                    </td>
                  </tr>
                )
              }
            </tbody>
          </table>
          <NavFooter
            pages={ 1 }
            current={ 1 }
          />
        </div>
      </div>
    </>
  )
}

export default InterviewsTable