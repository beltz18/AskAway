import React              from 'react'
import Image              from 'next/image'
import Link               from 'next/link'
import { useSelector }    from 'react-redux'
import { links, Cookies } from '@a/global'
import { removeCookie }   from '@a/functions'
import LanguageSelector   from '@c/LanguageSelector'
import PowerOff           from '@i/PowerOff'
import type { RootState } from '@r/store'
import { Page }           from '@t/common'

const Header = ({ name }: Page) => {
  const user : any = useSelector((state: RootState) => state.UserData)

  return (
    <>
      <div className='bg-primary px-[5%] w-full h-[70px] flex justify-between items-center'>
        <Link href={ links.home.main }>
          <Image
            src='/assets/logo_nobg.png'
            alt='AskAway logo'
            width={ 100 }
            height={ 100 }
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
            {`${user?.first_name} ${user?.['last-name']}`}
          </span>
          <Link
            onClick={() => Cookies?.map((c: any) => removeCookie(c))}
            href={ links.login.main }
          >
            <PowerOff />
          </Link>
          <div className='flex gap-4'>
            <LanguageSelector />
          </div>
        </div>
      </div>
    </>
  )
}

export default Header