import axios         from 'axios'
import { loginInfo } from '@t/common'

const PostLogin = async (dataAuth: loginInfo) => {
  try {
    const res = await axios.post(`${process.env.NEXT_PUBLIC_SERVER}${process.env.NEXT_PUBLIC_AUTH_ROUTE}`, dataAuth)
    return res?.data
  } catch (err) { console.log(err) }
}

const PostNewInterview = async (token: string, data: any) => {
  try {
    const res = await axios.post(`${process.env.NEXT_PUBLIC_SERVER}${process.env.NEXT_PUBLIC_NEWINTERVIEW}`,
    data,
    {
      headers: { Authorization: `bearer ${token}` }
    })
    return res?.data
  } catch (err) { console.log(err) }
}

export {
  PostLogin,
  PostNewInterview,
}