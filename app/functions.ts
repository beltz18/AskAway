import Cookies from 'js-cookie'
import axios   from 'axios'

// Set Cookie
const setCookie = (key: string, value: any) : void => { Cookies.set(key, value, { expires: 1 }) }

// Get Cookie
const getCookie = (key: string, req: any) : string | undefined => {
  if (!req.headers.cookie) return undefined

  const cookies = req.headers.cookie.split(';').map((cookie: string) => cookie.trim())
  const cookie = cookies.find((cookie: string) => cookie.startsWith(`${key}=`))

  if (!cookie) return undefined

  return cookie.split('=')[1]
}

// Remove Cookie
const removeCookie = (key: string) : void => { Cookies.remove(key) }

// PostAPI
const PostAPI = async (dataAuth: any) => {
  const res = await axios.post(`${process.env.NEXT_PUBLIC_API_SERVER}`, dataAuth)
  return res?.data
}

const GetAPI = async (token: any) => {
  try {
    const res = await (await fetch(`${process.env.NEXT_PUBLIC_SERVER}${process.env.NEXT_PUBLIC_INTERV_ROUTE}`, {
      method: "GET",
      headers: {
        'Authorization': `bearer ${token}`
      }
    })).json()
    
    return res?.data
  } catch (err) { console.log(err) }
}

export {
  setCookie,
  getCookie,
  removeCookie,
  PostAPI,
  GetAPI,
}