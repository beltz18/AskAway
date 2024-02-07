import React from 'react'
import { useRouter } from 'next/router'

const VideoInterviewTable = () : React.JSX.Element => {
  const router : any    = useRouter()
  const { interviewId } = router.query
  
  return (
    <>
      <h1>Interview</h1>

      <video controls={true} preload='metadata' playsInline>
        <source src='https://localhost:4043/v2/get/video/:video' type='video/mp4' />
      </video>
    </>
  )
}

export default VideoInterviewTable