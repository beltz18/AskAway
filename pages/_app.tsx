import '@s/_index.min.scss'
import 'react-toastify/dist/ReactToastify.css'

import { useEffect }      from 'react'
import { Provider }       from 'react-redux'
import { ToastContainer } from 'react-toastify'
import type { AppProps }  from 'next/app'
import { store }          from '@r/store'

export default function App({
  Component,
  pageProps,
}: AppProps) : React.JSX.Element {
  // useEffect(() => {
  //   if (document) {
  //     document.onkeydown = (e) => {
  //       if (e.keyCode == 123) e.preventDefault()
  //       if (e.keyCode == 93)  e.preventDefault()
  //     }
  //     document.oncontextmenu = (e) => { if (e.button == 2 || e.bubbles) e.preventDefault() }
  //   }
  // }, [])

  return (
    <Provider store={ store }>
      <ToastContainer />
      <Component {...pageProps} />
    </Provider>
  )
}