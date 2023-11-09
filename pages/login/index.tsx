import React         from 'react'
import MyHead        from '@c/MyHead'
import LoginView     from './LoginView'
import { getCookie } from '@a/functions'

const Login = () => {
  return (
    <>
      <MyHead title="AskAway - Login" />
      <LoginView />
    </>
  )
}

export default Login

export async function getServerSideProps ({ req }: any) {
  const token = getCookie('token', req)

  if (token) {
    return {
      redirect: {
        destination: '/home',
        permanent: false,
      }
    }
  }

  return {
    props: {}
  }
}