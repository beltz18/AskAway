import Cookies from 'js-cookie'
import axios   from 'axios'
import md5     from 'md5'
import uuid4   from 'uuid4'

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

const POST_TO_API = async (token: any, data: any, route: any) => {
  try {
    const res = await axios.post(`${process.env.NEXT_PUBLIC_SERVER}${route}`, data, {
      headers: { 'Authorization': `bearer ${token}` }
    })
    return res?.data
  } catch (err) { console.log(err) }
}

const GetAPI = async (token: any, route: any) => {
  try {
    const res = await (await fetch(`${process.env.NEXT_PUBLIC_SERVER}${route}`, {
      method: "GET",
      headers: {
        'Authorization': `bearer ${token}`
      }
    })).json()
    
    return res?.data
  } catch (err) { console.log(err) }
}

const reorderQuestions = (questions: any) => {
  let newOrder : any = []
  let index : number = 0

  questions.map(({ question, timeMins, timeSecs }: any) => {
    newOrder.push({
      id: md5(uuid4()),
      question,
      time: `${timeMins}:${timeSecs}`,
      type: "",
      order: index,
      is_answered: 'N',
    })
    index++
  })

  return newOrder
}

const reorderCandidateData = (candidateData: any) => {
  let newOrder : any = []
  let index : number = 0
  
  candidateData.map(({ firstName, lastName, email, id }: any) => {
    newOrder.push({
      first_name: firstName,
      last_name: lastName,
      email,
      ID: id,
      status: 'Assigned',
      invite: index,
      role: "",
      department: "",
      completedOn: "",
      attempts: 0,
    })
    index++
  })

  return newOrder
}

const reorderPanelData = (panelData: any) => {
  let newOrder : any = []
  let index : number = 1

  panelData.map(({ firstName, lastName, email }: any) => {
    newOrder.push({
      firstName,
      lastName,
      email,
      fromManagerToken: "",
      sharedOn: new Date().toLocaleString(),
    })
    index++
  })

  return newOrder
}

const reorderManagerData = (userData: any) => {
  return {
    name: `${ userData['first_name'] } ${ userData['last-name'] }`,
    email: userData['email'],
    freeInterviewsExpired: userData['freeInterviewsExpired'],
    remainingFreeTrialInterviews: userData['remainingFreeTrialInterviews'],
    type: userData['type'],
    adminKey: userData['adminKey'],
  }
}

export {
  setCookie,
  getCookie,
  removeCookie,
  PostAPI,
  GetAPI,
  reorderQuestions,
  reorderCandidateData,
  reorderPanelData,
  reorderManagerData,
  POST_TO_API,
}