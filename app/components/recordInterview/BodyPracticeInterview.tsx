import { useState } from 'react'
import { useRef }   from 'react'
import {
  Record,
} from '@i/TakeTheInterviewIcons'

const BodyPractice = () => {
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
      <div className="w-full h-full flex flex-col relative">
        <div className='bg-[#14C4CF] h-[45vh] w-full'>
          <div className='flex items-center justify-between px-3 pt-2'>
            <span className='text-[#14C4CF]'>|</span>
            <h4 className='text-[#018F9A] font-bold text-lg'>Prepare your equipement</h4>
            <h4 className='text-[#0396A1]'><b>2</b> / 2</h4>
          </div>
        </div>
        <div className='absolute left-0 w-full h-[90vh] flex items-center justify-center mt-6'>
          <div className='w-[40%] bg-white p-2 shadow-2xl rounded-lg'>  
            <video
              ref={ webCamVideo }
              autoPlay
              playsInline
              className='w-full rounded-lg bg-black'
            />
            <div className='p-5 flex gap-6 items-center justify-center'>
              <button
                className='bg-[#D9D9D961] px-3 py-2 rounded-md flex flex-col items-center justify-center'
                onClick={ play ? stopStream : startStream }
              >
                <Record />
                Record
              </button>
              <button onClick={ toggleAudio }>Sound</button>
              <button onClick={ toggleVideo }>Video</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default BodyPractice