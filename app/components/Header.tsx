import React            from 'react'
import Image            from 'next/image'
import Link             from 'next/link'
import { Page }         from '@t/common'
import { links }        from '@a/global'
import PowerOff         from '@i/PowerOff'
import { removeCookie } from '@a/functions'
import { useSelector }    from 'react-redux'
import type { RootState } from '@r/store'

const Header = ({ name }: Page) => {
  const userData : any = useSelector((state: RootState) => state.UserData)
  
  return (
    <>
      <div className='bg-primary px-[5%] w-full h-[70px] flex justify-between items-center'>
        <Link href={ links.home.main }>
          <Image
            src='/assets/logo_nobg.png'
            alt='AskAway logo'
            width={100}
            height={100}
          />
        </Link>

        <ul className='flex items-center gap-3 text-white'>
          <li className={`${name == 'dashboard' ? `active` : ''} px-4 py-[3px] rounded-full`}>
            <Link href={ links.dashboard.main }>Interview Dashboard</Link>
          </li>
          <li className={`${name == 'company' ? `active` : ''} px-4 py-[3px] rounded-full`}>
            <Link href={ links.home.main }>Company Profile</Link>
          </li>
          <li className={`${name == 'interview' ? `active` : ''} px-4 py-[3px] rounded-full`}>
            <Link href={ links.interview.main }>Interviews</Link>
          </li>
        </ul>

        <div className='flex items-center gap-6'>
          <span className='text-primary font-bold px-[10px] py-[2px] rounded-full bg-white'>
            { `${userData?.first_name} ${userData['last-name']}` }
          </span>
          <Link
            onClick={() => {
              removeCookie('token')
              removeCookie('firstName')
              removeCookie('lastName')
              removeCookie('email')
            }}
            href={ links.login.main }
          >
            <PowerOff />
          </Link>
          <div className='flex gap-4'>
            <Image
              src='/assets/united-states.png'
              alt='en'
              title='English | Inglés'
              width={25}
              height={25}
              className='cursor-pointer'
            />
            <Image
              src='/assets/spain.png'
              alt='es'
              title='Spanish | Español'
              width={25}
              height={25}
              className='cursor-pointer'
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default Header