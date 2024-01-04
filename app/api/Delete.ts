import axios from 'axios'

const DeleteInterview = async (interviewData: any, token: string) => {
  try {
    const res = await axios.delete(`${process.env.NEXT_PUBLIC_SERVER}${process.env.NEXT_PUBLIC_DEL_INTERVIEW}`, {
      headers: { Authorization: `bearer ${ token }` },
      data: interviewData,
    })
    return res?.data
  } catch (err) { return err }
}

export {
  DeleteInterview,
}