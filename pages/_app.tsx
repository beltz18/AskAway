import '@s/_index.min.scss'
import 'react-toastify/dist/ReactToastify.css'

import { Provider }       from 'react-redux'
import { ToastContainer } from 'react-toastify'
import type { AppProps }  from 'next/app'
import { store }          from '@a/redux/store'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={ store }>
      <ToastContainer />
      <Component {...pageProps} />
    </Provider>
  )
}