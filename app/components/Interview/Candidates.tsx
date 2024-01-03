import React from 'react'
import {
  Edit,
  Trash,
}  from '@i/InterviewIcons'

const Candidates = ({ candidates }: any) => {
  return (
    <>
      <div className='px-10'>
        <table className="w-full text-sm text-left text-gray-500 mb-6">
          <thead>
            <tr className='text-center text-primary'>
              <th scope="col">Name</th>
              <th scope="col">N° tries</th>
              <th scope="col">Email</th>
              <th scope="col">Status</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          
          <tbody>
            { 
              candidates?.map((c: any, index: number) => (
                <tr className='text-center'>
                  <td className='capitalize'><b className='text-primary'>{ index+1 }.</b> { c?.first_name } { c?.last_name }</td>
                  <td>{ c?.attempts }</td>
                  <td>{ c?.email }</td>
                  <td>
                    <select
                      className='text-xs border-none'
                      defaultValue={ c?.status }
                    >
                      <option value='Not Assigned'>Not Assigned</option>
                      <option value='Assigned'>Assigned</option>
                    </select>
                  </td>
                  <td className="px-6 py-4 flex items-center justify-center gap-2">
                    <span className='rounded-md'>
                      <Edit />
                    </span>
                    <span className='rounded-md'>
                      <Trash />
                    </span>
                  </td>
                </tr>
              ))
            }
          </tbody>
        </table>

        <span className='bg-[#097AB1] text-white py-1 px-3 rounded-lg cursor-pointer'>Add</span>
      </div>
    </>
  )
}

export default Candidates