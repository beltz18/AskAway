import React        from 'react'
import { useState } from 'react'
import Link         from 'next/link'
import { options }  from '@a/global'
import Questions    from '@c/Interview/Questions'
import Candidates   from '@c/Interview/Candidates'
import Panel        from '@c/Interview/Panel'
import Modal        from '@c/Interview/Modal'
import Edit         from '@i/Edit'
import Trash        from '@i/Trash'
import Filter       from '@i/Filter'
import ArrowRight   from '@i/ArrowRight'
import ArrowDown    from '@i/ArrowDown'

const InterviewsTable = ({ data }: any) => {
  let intData = data
  const [showInterview, setShowInterview] = useState([...Array(intData.length).keys()].map(i => false))
  const [stepMenu, setStepMenu]   : any   = useState(1)
  const [openModal, setOpenModal] : any   = useState(false)

  const newState = (index: number) => {
    let state = [...Array(intData.length).keys()].map(i => false)
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
            onClick={() => setOpenModal(!openModal)}
          >
            Create Interview
          </span>

          { openModal && (<Modal openModal={ openModal } setOpenModal={ setOpenModal } />) }

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

                      <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">{ Intl.DateTimeFormat('en', { weekday: 'long', month: 'short', day: 'numeric' }).format(new Date()) }</td>
                      <td className="px-6 py-4 text-primary whitespace-nowrap">{ data?.jobTitle }</td>
                      <td className="px-6 py-4">{ data?.manager }</td>
                      <td className="px-6 py-4">{ data?.data[0]?.['candidate-data']?.email }</td>
                      <td className="px-6 py-4">{ /* here goes the total */ } mins</td>

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
                          { stepMenu == 2 && (<Candidates candidates={ data?.data }     />) }
                          { stepMenu == 3 && (<Panel      panel={ data?.panelMember }   />) }
                        </div>
                      </td>
                    </tr>
                  </>                
                ))
              }
            </tbody>
          </table>

          <nav className="flex items-center justify-between p-4 bg-white">
            <span className="text-sm font-normal text-center">
              Showing page: <span className="bg-gray-200 px-2 rounded-sm ml-3"><b className='text-primary'>1</b> of 3</span>
            </span>

            <ul className="inline-flex -space-x-px text-sm h-8">
              <li>
                <Link
                  href="#"
                  className="flex items-center justify-center px-3 h-8 ml-0 text-primary bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700"
                >
                  Previous
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="flex items-center justify-center px-3 h-8 text-primary bg-blue-50 border border-gray-300 hover:bg-gray-100 hover:text-gray-700"
                >
                  1
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="flex items-center justify-center px-3 h-8 text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700"
                >
                  2
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="flex items-center justify-center px-3 h-8 text-gray-500 bg-white border border-gray-300 hover:bg-blue-100 hover:text-blue-700"
                >
                  3
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="flex items-center justify-center px-3 h-8 text-primary bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700"
                >
                  Next
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  )
}

export default InterviewsTable