import React from 'react'
import Image from 'next/image'
import { Language } from '@a/global'

const LanguageSelector = () => {
  const setLanguage = (lang: string) => {
    console.log(lang)
  }

  return (
    <>
      <Image
        src='/assets/united-states.png'
        alt='en'
        title='English | Inglés'
        width={ 25 }
        height={ 25 }
        className='cursor-pointer'
        onClick={() => setLanguage(Language?.english)}
      />
      <Image
        src='/assets/spain.png'
        alt='es'
        title='Spanish | Español'
        width={ 25 }
        height={ 25 }
        className='cursor-pointer'
        onClick={() => setLanguage(Language?.spanish)}
      />
    </>
  )
}

export default LanguageSelector