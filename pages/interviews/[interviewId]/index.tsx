import React from 'react'
import { useRouter } from 'next/router'
import ReactPlayer from 'react-player'

const VideoInterviewTable = () : React.JSX.Element => {
  const router : any    = useRouter()
  const { interviewId } = router.query
  
  return (
    <>
      <h1>Interview</h1>

      <ReactPlayer
        controls={ true }
        playing={ true }
        playsinline={ true }
        url={`https://test.askaway.io/v2/get/video/:video`}
      />
    </>
  )
}

export default VideoInterviewTable