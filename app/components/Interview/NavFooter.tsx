import React        from 'react'
import { useState } from 'react'
import {
  cssCurrentPage,
  cssNormalPage,
} from '@a/global'

const NavFooter = ({ pages, current }: any) : React.JSX.Element => {
  // States
  const [currentPage, setCurrentPage]   = useState(current)
  const [prevDisabled, setPrevDisabled] = useState(current == 1 ? true : false)
  const [nextDisabled, setNextDisabled] = useState(pages   == 1 ? true : false)

  // Array
  let arr = []

  // Set Array
  if (pages > 1) { for (let i = 1; i <= pages; i++) arr.push(i) }
  else arr.push(1)

  // Handle change the current page
  const handleChangePage = (type: string, thisC: number) => {
    if (type == 'plus') {
      setCurrentPage(currentPage+1)
      setPrevDisabled(false)
      if (thisC+1 == pages) setNextDisabled(true)
    }
    else if (type == 'minus' && currentPage >= 1) {
      setCurrentPage(currentPage-1)
      setNextDisabled(false)
      if (thisC-1 == 1) setPrevDisabled(true)
    }
  }

  return (
    <>
      <nav className="flex items-center justify-between p-4 bg-white">
        <span className="text-sm font-normal text-center">
          Showing page: <span className="bg-gray-200 px-2 rounded-sm ml-3"><b className='text-primary'>{ current }</b> of { pages }</span>
        </span>

        <ul className="inline-flex -space-x-px text-sm h-8">
          <li>
            <button
              type='button'
              className={`flex items-center justify-center px-3 h-8 ml-0 border border-gray-300 rounded-l-lg
              ${!prevDisabled ? 'bg-white text-primary hover:bg-gray-100 hover:text-gray-700' : 'bg-gray-300 text-white'}`}
              disabled={ prevDisabled }
              onClick={() => handleChangePage('minus', currentPage)}
            >
              Previous
            </button>
          </li>
          {
            arr?.map((p: any, i: number) => (
              <li
                key={ i }
                className={`${p == currentPage ? cssCurrentPage : cssNormalPage}`}
              >
                { p }
              </li>
            ))
          }
          <li>
            <button
              type='button'
              className={`flex items-center justify-center px-3 h-8 border border-gray-300 rounded-r-lg
              ${!nextDisabled ? 'bg-white text-primary hover:bg-gray-100 hover:text-gray-700' : 'bg-gray-300 text-white'}`}
              disabled={ nextDisabled }
              onClick={() => handleChangePage('plus', currentPage)}
            >
              Next
            </button>
          </li>
        </ul>
      </nav>
    </>
  )
}

export default NavFooter