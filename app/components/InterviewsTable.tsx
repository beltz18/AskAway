import React      from 'react'
import moment     from 'moment'
import Edit       from './icons/Edit'
import Trash      from './icons/Trash'
import ArrowRight from './icons/ArrowRight'
import Filter     from './icons/Filter'

const InterviewsTable = () => {
  return (
    <>
      <div className='mt-12 max-w-[1200px] m-auto'>
        <div className='my-12 flex items-center justify-between'>
          <span className='bg-[#214F71] text-white py-[6px] px-6 rounded-md cursor-pointer'>Create Interview</span>

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
              <tr className='text-center py-6'>
                <th scope="col" className="p-4"></th>
                <th scope="col" className="px-6 py-3">
                  Date
                </th>
                <th scope="col" className="px-6 py-3">
                  Branch
                </th>
                <th scope="col" className="px-6 py-3">
                  Job Title
                </th>
                <th scope="col" className="px-6 py-3">
                  Department
                </th>
                <th scope="col" className="px-6 py-3">
                  Manager
                </th>
                <th scope="col" className="px-6 py-3">
                  Candidate
                </th>
                <th scope="col" className="px-6 py-3">
                  Duration
                </th>
                <th scope="col" className="px-6 py-3">
                  Action
                </th>
              </tr>
            </thead>

            <tbody className='border-t-2'>
              <tr className="bg-white border-b hover:bg-gray-50 text-center">
                <td className="w-4 p-4">
                  <ArrowRight />
                </td>
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                  { moment(Date()).format('LLLL') }
                </th>
                <td className="px-6 py-4">
                  IT and Internet
                </td>
                <td className="px-6 py-4 text-primary">
                  Software Developer
                </td>
                <td className="px-6 py-4">
                  Software Developer
                </td>
                <td className="px-6 py-4">
                  Leo Gonzalez
                </td>
                <td className="px-6 py-4">
                  6
                </td>
                <td className="px-6 py-4">
                  26 mins
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
            </tbody>
          </table>

          <nav className="flex items-center justify-between p-4 bg-white">
            <span className="text-sm font-normal text-center">
              Showing page <span className="bg-gray-200 px-2 rounded-sm ml-3"><b>1</b> of 3</span>
            </span>

            <ul className="inline-flex -space-x-px text-sm h-8">
              <li>
                <a
                  href="#"
                  className="flex items-center justify-center px-3 h-8 ml-0 text-primary bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700"
                >
                  Previous
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center justify-center px-3 h-8 text-primary bg-blue-50 border border-gray-300 hover:bg-gray-100 hover:text-gray-700"
                >
                  1
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center justify-center px-3 h-8 text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700"
                >
                  2
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center justify-center px-3 h-8 text-gray-500 bg-white border border-gray-300 hover:bg-blue-100 hover:text-blue-700"
                >
                  3
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center justify-center px-3 h-8 text-primary bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700"
                >
                  Next
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  )
}

export default InterviewsTable