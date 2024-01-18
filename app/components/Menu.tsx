import React from 'react'
import { useState } from 'react'
import Link               from 'next/link'
import { links, Cookies } from '@a/global'
import { removeCookie }   from '@a/functions'
import LanguageSelector   from '@c/LanguageSelector'
import PowerOff           from '@i/PowerOff'
import { Page }           from '@t/common'
import { BackIcon } from './icons/BackIcon'


const Menu =  ({ name  }: Page) => {
    
    return (
        <>
            <div className='bg-primary px-[5%] w-[60%] h-[50%] flex flex-col absolute'>
        
                <div className='py-[20%] px-[5%] flex flex-left'>
                    <BackIcon />
                </div>
            
                <ul className='flex items-center gap-6 text-white flex-col'>
                    <li className={`${name == 'dashboard' ? `active rounded-full text-[#06969D;] border-none` : ''} px-4 py-[3px] border-b`}>
                        <Link href={ links.dashboard.main }>Interview Dashboard</Link>
                    </li>
                    <li className={`${name == 'company' ? `active rounded-full text-[#06969D;] border-none` : ''} px-4 py-[3px]  border-b`}>
                        <Link href={ links.home.main }>Company Profile</Link>
                    </li>
                    <li className={`${name == 'interview' ? `active rounded-full text-[#06969D;] border-none` : ''} px-4 py-[3px]  border-b`}>
                        <Link href={ links.interview.main }>Interviews</Link>
                    </li>
                </ul>

                <div className='flex items-center gap-6 max-sm:gap-4 flex-col py-[10%]'>
                    <Link
                        onClick={() => Cookies?.map((c: any) => removeCookie(c))}
                        href={ links.login.main }
                        >
                        <div className=''>
                            <PowerOff />
                        </div>
                    </Link>
                    <div className='flex gap-4'>
                        <LanguageSelector />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Menu;