import { useEffect } from 'react'
import { useRef }      from 'react'
import { useState }    from 'react'
import uuid4           from 'uuid4'
import Webcam          from 'react-webcam'
import {
  Record,
  Stop,
} from '@i/TakeTheInterviewIcons'

const BodyPractice = () => {
  const [chunks, setChunks] : any = useState([])
  const [videoR, setVideoR] : any = useState(null)
  const [record, setRecord] : any = useState(false)
  const [readyP, setReadyP] : any = useState(true)

  const webCamVideoRef : any = useRef(null)
  const mediaRecorder  : any = useRef(null)

  const videoConstraints = {
    width: 720,
    height: 576,
    facingMode: "user",
    encoder: 'x264',
  }

  const startStream = () => {
    setReadyP(true)
    setRecord(true)
    mediaRecorder.current = new MediaRecorder(webCamVideoRef?.current?.stream, {
      mimeType: "video/webm",
    })
    mediaRecorder.current.addEventListener(
      "dataavailable",
      handleData,
    )
    mediaRecorder.current.start()
  }

  const handleData = ({ data }: any) => setChunks(data)

  const stopStream = () => {
    mediaRecorder.current.stop()
    setRecord(false)
    setReadyP(false)
  }

  useEffect(() => { if (chunks?.size) HandlePlayVideo() }, [chunks])

  const HandlePlayVideo = () => {
    const url : any = URL.createObjectURL(chunks)
    const mp4 : any = document?.querySelector('#videoRecorded')
    mp4.src = url
    mp4.play()
    // const mp4 : any = document.createElement("a")
    // document.body.appendChild(mp4)
    // mp4.style = "display: none"
    // mp4.href  = url
    // mp4.download = `askaway-${ uuid4() }.mp4`
    // mp4.click()
    // window.URL.revokeObjectURL(url)
    // console.log(chunks)
    setChunks([])
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
          <div className='w-[90%] md:w-[40%] bg-white p-2 shadow-2xl rounded-lg'>
            {
              !readyP
                ?
              (
                <video
                  id='videoRecorded'
                  autoPlay
                  controls
                  preload='auto'
                  className='w-full h-[75%] rounded-lg bg-black'
                  data-setup='{}'
                />
              )
                :
              (
                <Webcam
                  audio={ true }
                  ref={ webCamVideoRef }
                  videoConstraints={ videoConstraints }
                />
              )
            }
            <div className='p-5 h-[25%] flex gap-6 items-center justify-center'>
              <button
                className='bg-[#D9D9D961] w-[100px] px-3 py-2 rounded-md flex flex-col items-center justify-center'
                onClick={ startStream }
                disabled={ record }
              >
                <Record color={ !record ? '#EA830A' : '#525252' } />
                Record
              </button>
              <button
                className='bg-[#D9D9D961] w-[100px] px-3 py-2 rounded-md flex flex-col items-center justify-center'
                onClick={ stopStream }
                disabled={ !record }
              >
                <Stop color={ record ? '#DC0303' : '#525252' } />
                Stop
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default BodyPractice