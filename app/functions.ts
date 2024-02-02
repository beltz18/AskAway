import Cookies from 'js-cookie'
import md5     from 'md5'
import uuid4   from 'uuid4'

// Set Cookie
const setCookie = (key: string, value: any) : void => { Cookies.set(key, value, { expires: 1 }) }

// Remove Cookie
const removeCookie = (key: string) : void => { Cookies.remove(key) }

// Get Cookie
const getCookie = (key: string, req: any) : string => {
  if (!req.headers.cookie) return ''

  const cookies = req.headers.cookie.split(';').map((cookie: string) => cookie.trim())
  const cookie = cookies.find((cookie: string) => cookie.startsWith(`${key}=`))

  if (!cookie) return ''

  return cookie.split('=')[1]
}

// Generate an unique random string
function generateUniqueString (length = 14) {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  const charactersLength = characters.length;
  let result = '';

  // Use a cryptographically secure random number generator if available
  const getRandomInt = typeof crypto !== 'undefined' && crypto.getRandomValues
      ? (max: number) => crypto.getRandomValues(new Uint32Array(1))[0] % max
      : Math.random;

  while (result.length < length) {
    const randomIndex = getRandomInt(charactersLength);
    result += characters.charAt(randomIndex);
  }

  return result;
}

// Reorder Questions
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

// Reorder candidate data
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
      candidate_id: generateUniqueString(),
    })
    index++
  })

  return newOrder
}

// Reorder panel data
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

// Reorder manager data
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

// Manage the time as a chronometer
const handleFormatTime = (number: number) : string => {
  const minutes : number = Math.floor(number / 60)
  const seconds : number = number % 60
  const paddedN : string = seconds.toString().padStart(2, '0')
  return `0${minutes}:${paddedN}`
}

export {
  setCookie,
  getCookie,
  removeCookie,
  reorderQuestions,
  reorderCandidateData,
  reorderPanelData,
  reorderManagerData,
  handleFormatTime,
}