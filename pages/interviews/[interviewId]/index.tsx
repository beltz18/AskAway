import React from 'react'
import { useRouter } from 'next/router'

const VideoInterviewTable = () : React.JSX.Element => {
  const router : any    = useRouter()
  const { interviewId } = router.query
  
  return (
    <>
      <h1>Interview</h1>

      <video
        controls={ true }
        playsInline
        preload='metadata'
        src={`https://test.askaway.io/v2/get/video/:video`}
      />
    </>
  )
}

export default VideoInterviewTable