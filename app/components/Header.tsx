import React    from 'react'
import Image    from 'next/image'
import Link     from 'next/link'
import { Page } from '@t/common'

const Header = ({ name }: Page) => {
  return (
    <>
      <div className='bg-primary px-[5%] w-full h-[70px] flex justify-between items-center'>
        <Image
          src='/assets/logo_nobg.png'
          alt='AskAway logo'
          width={100}
          height={100}
        />

        <ul className='flex items-center gap-3 text-white'>
          <li className={`${name == 'dashboard' ? `active` : ''} px-4 py-[3px] rounded-full`}>
            <Link href="#">Interview Dashboard</Link>
          </li>
          <li className={`${name == 'company' ? `active` : ''} px-4 py-[3px] rounded-full`}>
            <Link href="#">Company Profile</Link>
          </li>
          <li className={`${name == 'interview' ? `active` : ''} px-4 py-[3px] rounded-full`}>
            <Link href="#">Interviews</Link>
          </li>
        </ul>

        <div className='flex items-center gap-6'>
          <span className='text-primary font-bold px-[10px] py-[2px] rounded-full bg-white'>Andi Montilla</span>
          <Link href='/login'>
            <svg width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M12 21C10.2211 20.9984 8.48259 20.4697 7.004 19.4807C5.52542 18.4916 4.37308 17.0866 3.69255 15.443C3.01201 13.7995 2.8338 11.9911 3.18041 10.2463C3.52702 8.50153 4.38292 6.89859 5.63999 5.63995C5.70894 5.56919 5.79135 5.51296 5.88238 5.47456C5.97341 5.43616 6.0712 5.41638 6.16999 5.41638C6.26879 5.41638 6.36658 5.43616 6.4576 5.47456C6.54863 5.51296 6.63105 5.56919 6.69999 5.63995C6.84044 5.78058 6.91933 5.9712 6.91933 6.16995C6.91933 6.3687 6.84044 6.55933 6.69999 6.69995C5.96312 7.38657 5.3721 8.21458 4.96218 9.13457C4.55226 10.0546 4.33184 11.0477 4.31408 12.0547C4.29631 13.0618 4.48155 14.062 4.85877 14.9959C5.23598 15.9298 5.79742 16.7781 6.50961 17.4903C7.2218 18.2025 8.07013 18.764 9.00402 19.1412C9.9379 19.5184 10.9382 19.7036 11.9452 19.6859C12.9522 19.6681 13.9454 19.4477 14.8654 19.0378C15.7854 18.6278 16.6134 18.0368 17.3 17.3C17.9978 16.605 18.5515 15.779 18.9294 14.8695C19.3072 13.96 19.5017 12.9848 19.5017 12C19.5017 11.0151 19.3072 10.0399 18.9294 9.13039C18.5515 8.22088 17.9978 7.39493 17.3 6.69995C17.1595 6.55933 17.0807 6.3687 17.0807 6.16995C17.0807 5.9712 17.1595 5.78058 17.3 5.63995C17.3689 5.56919 17.4514 5.51296 17.5424 5.47456C17.6334 5.43616 17.7312 5.41638 17.83 5.41638C17.9288 5.41638 18.0266 5.43616 18.1176 5.47456C18.2086 5.51296 18.291 5.56919 18.36 5.63995C19.6171 6.89859 20.473 8.50153 20.8196 10.2463C21.1662 11.9911 20.988 13.7995 20.3074 15.443C19.6269 17.0866 18.4746 18.4916 16.996 19.4807C15.5174 20.4697 13.7789 20.9984 12 21Z" fill="#ffffff"></path> <path d="M12 12.75C11.8019 12.7474 11.6126 12.6676 11.4725 12.5275C11.3324 12.3874 11.2526 12.1981 11.25 12V4C11.25 3.80109 11.329 3.61032 11.4697 3.46967C11.6103 3.32902 11.8011 3.25 12 3.25C12.1989 3.25 12.3897 3.32902 12.5303 3.46967C12.671 3.61032 12.75 3.80109 12.75 4V12C12.7474 12.1981 12.6676 12.3874 12.5275 12.5275C12.3874 12.6676 12.1981 12.7474 12 12.75Z" fill="#ffffff"></path> </g></svg>
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