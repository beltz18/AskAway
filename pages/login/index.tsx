import React         from 'react'
import MyHead        from '@c/MyHead'
import { store }     from '@r/store'
import { Provider }  from 'react-redux'
import LoginView     from './LoginView'
import { getCookie } from '@a/functions'

const Login = () => {
  return (
    <>
      <Provider store={ store }>
        <MyHead title="AskAway - Login" />
        <LoginView />
      </Provider>
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