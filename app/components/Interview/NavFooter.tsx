import React from 'react'
import Link  from 'next/link'

const NavFooter = () => {
  return (
    <>
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
    </>
  )
}

export default NavFooter