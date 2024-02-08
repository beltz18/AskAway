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
        url={`https://storage.googleapis.com/ask-away-production/videos/AVANZA-TECH/GERENCIA-GENERAL/ASISTENCIA-A-GERENCIA-Y-PRESIDENCIA/ANA_MARMOL__33111e/1VNUuZr16g7xWVftuZeomc.mp4`}
      />
    </>
  )
}

export default VideoInterviewTable