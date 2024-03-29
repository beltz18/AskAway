import React     from 'react'
import Head      from 'next/head'
import { THead } from '@t/common'

const MyHead = ({ title, description, language }: THead) : React.JSX.Element => {
  return (
    <>
      <Head>
        <title>{ title }</title>
        <meta name="description" content={ description } />
        <meta httpEquiv="Content-Type" content="text/html;charset=UTF-8" />
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="shortcut icon" href="/assets/favicon.png" type="image/x-icon" />
      </Head>
    </>
  )
}

export default MyHead