import React            from 'react'
import Image            from 'next/image'
import Link             from 'next/link'
import { links }        from '@a/global'
import LanguageSelector from '@c/LanguageSelector'

const Header = () : React.JSX.Element => {
  return (
    <>
      <div className='w-full h-[10vh] flex py-6 px-4 justify-between items-center'>
        <h3 className='text-white'>|</h3>

        <Link href={ links?.dashboard?.main }>
          <Image
            width={ 200 }
            height={ 200 }
            src="/assets/askaway-logo.png"
            className='w-[120px] h-auto'
            alt='logo'
          />
        </Link>
        
        <div className='flex gap-4'>
          <LanguageSelector />
        </div>
      </div>
    </>
  )
}

export default Header