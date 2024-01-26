import React from 'react'
import Link               from 'next/link'
import { links, Cookies } from '@a/global'
import { removeCookie }   from '@a/functions'
import LanguageSelector   from '@c/LanguageSelector'
import PowerOff           from '@i/PowerOff'
import { Page }           from '@t/common'
import { BackIcon } from './icons/BackIcon'


const Menu =  ({ name }: Page) => {
    
    return (
        <>
            <div className='bg-primary px-[5%] w-[60%] h-[100%] flex flex-col absolute z-10'>
                <div className='py-[10%] px-[5%] flex flex-left'>
                    <BackIcon />
                </div>
                <div className='h-full flex justify-between flex-col'>
                    <div className='flex items-start gap-6 max-sm:gap-8 flex-col'>
                        <ul className='flex items-start gap-6 text-white flex-col'>
                            <li className={`${name == 'dashboard' ? `active rounded-full ` : ''} px-4 py-[3px] border-b`}>
                                <Link href={ links.dashboard.main }>Interview Dashboard</Link>
                            </li>
                            <li className={`${name == 'company' ? `active rounded-full text-[#06969D;] border-none` : ''} px-4 py-[3px]  border-b`}>
                                <Link href={ links.home.main }>Company Profile</Link>
                            </li>
                            <li className={`${name == 'interview' ? `active rounded-full text-[#06969D;] border-none` : ''} px-4 py-[3px]  border-b`}>
                                <Link href={ links.interview.main }>Interviews</Link>
                            </li>
                        </ul>

                        <Link
                            onClick={() => Cookies?.map((c: any) => removeCookie(c))}
                            href={ links.login.main }
                            >
                            <div className='py-[10%]'>
                                <PowerOff />
                            </div>
                        </Link>
                    </div>
                    <div className='w-full flex justify-end gap-4 px-[10%] py-[20%]'>
                        <LanguageSelector />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Menu;