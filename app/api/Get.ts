import axios from 'axios'

const GetCompanyInfo = async (token: string) => {
  try {
    const res = await axios.get(`${process.env.NEXT_PUBLIC_SERVER}${process.env.NEXT_PUBLIC_COMPANY_INFO}`, {
      headers: {
        'Authorization': `bearer ${ token }`
      }
    })
    
    return res?.data
  } catch (err) { console.log(err) }
}

const GetInterviews =async (token: string, admin: string) => {
  try {
    const res = await axios.get(`${process.env.NEXT_PUBLIC_SERVER}${process.env.NEXT_PUBLIC_GET_INTERVIEW}?token=${admin}`, {
      headers: {
        'Authorization': `bearer ${ token }`
      }
    })
    
    return res?.data
  } catch (err) { console.log(err) }
}

export {
  GetCompanyInfo,
  GetInterviews,
}