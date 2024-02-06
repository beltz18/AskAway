import React from 'react'
import { useRouter } from 'next/router'

const VideoInterviewTable = () : React.JSX.Element => {
  const router : any    = useRouter()
  const { interviewId } = router.query
  
  return (
    <>
      <h1>Interview</h1>

      <video controls={true} preload='metadata' playsInline>
        <source src='https://storage.googleapis.com/ask-away-production/videos/AVANZA-TECH/GERENCIA-GENERAL/ASISTENCIA-A-GERENCIA-Y-PRESIDENCIA/Jessica_Palacios__1ed63e/1n7MvwpwDNDzA9FFiLjmrp.mp4' type='video/mp4' />
      </video>

      {/* <video
        autoPlay
        controls
        className='w-full rounded-lg bg-black'
        data-setup='{}'
      >
        <source src={} />
      <video /> */}
    </>
  )
}

export default VideoInterviewTable