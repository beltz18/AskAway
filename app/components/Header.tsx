import React              from 'react'
import { useState } from 'react'
import Image              from 'next/image'
import Link               from 'next/link'
import { useSelector }    from 'react-redux'
import { links, Cookies } from '@a/global'
import { removeCookie }   from '@a/functions'
import LanguageSelector   from '@c/LanguageSelector'
import PowerOff           from '@i/PowerOff'
import type { RootState } from '@r/store'
import { Page }           from '@t/common'
import { MenuIcon } from './icons/MenuIcon'
import Menu from './Menu'

<<<<<<< HEAD
const Header = ({ name }: Page) : React.JSX.Element => {
=======
const Header = ({ name }: Page) => {

>>>>>>> 9f0f1883ca20d62b0adf783d43e983394a41855a
  const user : any = useSelector((state: RootState) => state.UserData)

  const [toggle, setToggle] : any = useState(false)

  const handleToggle = () =>{
    setToggle(!toggle);
  };

  return (
    <> 
      {toggle && (<Menu 
          name={name} 
        />)}

      <div className='bg-primary px-[5%] w-full h-[70px] flex justify-between items-center'>

        <a className="sm:hidden" onClick={handleToggle}>
          <MenuIcon />
        </a>
        <Link href={ links.home.main }>
          <Image
            src='/assets/logo_nobg.png'
            alt='AskAway logo'
            width={ 100 }
            height={ 100 }
          />
        </Link>

        <ul className='flex items-center gap-3 text-white max-sm:hidden'>
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

        <div className='flex items-center gap-6 max-sm:gap-0'>
          <span className='text-primary font-bold px-[10px] py-[2px] rounded-full bg-white'>
            {`${user?.first_name} ${user?.['last-name']}`}
          </span>
          <Link
            onClick={() => Cookies?.map((c: any) => removeCookie(c))}
            href={ links.login.main }
          >
            <div className='max-sm:hidden'>
              <PowerOff />
            </div>
          </Link>
          <div className='flex gap-4 max-sm:hidden'>
            <LanguageSelector />
          </div>
        </div>
      </div>
    </>
  )
}

export default Header