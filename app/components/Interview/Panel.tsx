import React from 'react'
import Edit  from '../icons/Edit'
import Trash from '../icons/Trash'

const Panel = () => {
  return (
    <>
      <div className='px-10'>
        <table className="w-full text-sm text-left text-gray-500 mb-6">
          <thead>
            <tr className='text-center text-primary'>
              <th scope="col" colSpan={ 3 }>Name</th>
              <th scope="col">Email</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          
          <tbody>
            <tr className='text-center'>
              <td colSpan={ 3 }><b className='text-primary'>1.</b> Andi Montilla</td>
              <td>andi@email.com</td>
              <td className="px-6 py-4 flex items-center justify-center gap-2">
                <span className='rounded-md'>
                  <Edit />
                </span>
                <span className='rounded-md'>
                  <Trash />
                </span>
              </td>
            </tr>

            <tr className='text-center'>
              <td colSpan={ 3 }><b className='text-primary'>2.</b> John Doe</td>
              <td>johnd@email.com</td>
              <td className="px-6 py-4 flex items-center justify-center gap-2">
                <span className='rounded-md'>
                  <Edit />
                </span>
                <span className='rounded-md'>
                  <Trash />
                </span>
              </td>
            </tr>
          </tbody>
        </table>

        <span className='bg-[#097AB1] text-white py-1 px-3 rounded-lg cursor-pointer'>Add</span>
      </div>
    </>
  )
}

export default Panel