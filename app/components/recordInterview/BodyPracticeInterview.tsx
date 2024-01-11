import { useState } from 'react'
import { useRef }   from 'react'
import {
  Record,
  Stop,
  Play,
  Pause,
} from '@i/TakeTheInterviewIcons'

const BodyPractice = () => {
  const [stream, setStream] : any = useState(null)
  const [record, setRecord] : any = useState(false)
  const [playin, setPlayin] : any = useState(false)
  const [pausin, setPausin] : any = useState(false)

  const webCamVideo : any = useRef()

  const startStream = async () => {
    await navigator.mediaDevices.getUserMedia({
      video: true,
      audio: {
        width: { min: 720, ideal: 1280, max: 1920 },
        height: { min: 576, ideal: 720, max: 1080 },
        facingMode: "user"
      },
    })
      .then((stream) => {
        webCamVideo.current.srcObject = stream
        setStream(stream)
      })
      .catch((err) => console.log(err))
      setRecord(true)
  }

  const stopStream = async () => {
    stream.getTracks().forEach((track: any) => track.stop())
    setRecord(false)
  }

  // const toggleAudio = async () => {
  //   setAudio(!audio)
  //   stream.getAudioTracks()[0].enabled = audio
  // }

  // const toggleVideo = () => {
  //   setVideo(!video)
  //   stream.getVideoTracks()[0].enabled = video
  // }

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
          <div className='w-[90%] md:w-[40%] bg-white p-2 shadow-2xl rounded-lg'>
            <video
              ref={ webCamVideo }
              autoPlay
              playsInline
              className='w-full h-[75%] rounded-lg bg-black'
            />
            <div className='p-5 h-[25%] flex gap-6 items-center justify-center'>
              <button
                className='bg-[#D9D9D961] w-[100px] px-3 py-2 rounded-md flex flex-col items-center justify-center'
                onClick={ record ? stopStream : startStream }
              >
                { record ? (<Stop />) : (<Record />) }
                { record ? 'Stop' : 'Record' }
              </button>
              <button
                className='bg-[#D9D9D961] w-[100px] px-3 py-2 rounded-md flex flex-col items-center justify-center'
                disabled={ !record }
                // onClick={ {} }
              >
                <Play
                  color={!record ? '#525252' : '#1BB750'}
                  // onClick={  }
                />
                Play
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default BodyPractice