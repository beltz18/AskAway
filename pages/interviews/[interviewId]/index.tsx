import React from 'react'
import { useRouter } from 'next/router'

const VideoInterviewTable = () => {
  const router : any    = useRouter()
  const { interviewId } = router.query

  console.log(interviewId)
  
  return (
    <>
      <h1>Interview</h1>
    </>
  )
}

export default VideoInterviewTable