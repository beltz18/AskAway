import React    from 'react'
import Image    from 'next/image'
import Link     from 'next/link'
import { Page } from '@t/common'

const Header = ({ name }: Page) => {
  console.log(name);

  return (
    <>
      <div className='bg-primary px-[5%] w-full h-[70px] flex justify-between items-center'>
        <Image
          src='/logo_nobg.png'
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
          <div className='flex gap-4'>
            <Image
              src='/spain.png'
              alt='es'
              title='Spanish | Español'
              width={25}
              height={25}
            />
            <Image
              src='/united-states.png'
              alt='en'
              title='English | Inglés'
              width={25}
              height={25}
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default Header