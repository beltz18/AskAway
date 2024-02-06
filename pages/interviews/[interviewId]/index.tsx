import React from 'react'
import { useRouter } from 'next/router'

const VideoInterviewTable = () : React.JSX.Element => {
  const router : any    = useRouter()
  const { interviewId } = router.query
  
  return (
    <>
      <h1>Interview</h1>

      <video controls={true} preload='metadata' playsInline>
        <source src='https://storage.googleapis.com/ask-away-development/videos/d8b6c045c2d707256ad6822569dcd55bc26672cb/1b4111e5691b79225c1eaacc71bbe6/Hola_Hola-3__b8a8af/c4qLMXCa6PmjiVPJhXBWsU.mp4' type='video/mp4' />
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