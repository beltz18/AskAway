import React, { useRef } from 'react'
import { useState }      from 'react'
import { useRouter }     from 'next/router'
import Header            from '@c/recordInterview/Header'
import BodyPractice      from '@c/recordInterview/BodyPracticeInterview'

const index = () => {
  const router   = useRouter()
  const { user } = router.query

  const [audio, setAudio]   : any = useState(false)
  const [video, setVideo]   : any = useState(false)
  const [play, setPlay]     : any = useState(false)
  const [stream, setStream] : any = useState(null)

  const webCamVideo : any = useRef()

  const startStream = async () => {
    await navigator.mediaDevices.getUserMedia({
      video: true,
      audio: true,
    })
      .then((stream) => {
        webCamVideo.current.srcObject = stream
        setStream(stream)
      })
      .catch((err) => console.log(err))
    setPlay(true)
  }

  const stopStream = async () => {
    stream.getTracks().forEach((track: any) => track.stop())
    setPlay(false)
  }

  const toggleAudio = async () => {
    setAudio(!audio)
    stream.getAudioTracks()[0].enabled = audio
  }

  const toggleVideo = () => {
    setVideo(!video)
    stream.getVideoTracks()[0].enabled = video
  }

  return (
    <>
      <Header />
      <div className="container">
        <video ref={ webCamVideo } autoPlay playsInline></video>
        <button
          onClick={ play ? stopStream : startStream }>
          Start webcam
        </button>

        <button onClick={ toggleAudio }>Toggle Sound</button>
        <button onClick={ toggleVideo }>Toggle Video</button>
      </div>
    </>
  )
}

export default index