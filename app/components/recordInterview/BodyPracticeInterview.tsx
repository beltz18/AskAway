import { useEffect } from 'react'
import { useRef }    from 'react'
import { useState }  from 'react'
import Link          from 'next/link'
import Webcam        from 'react-webcam'
import {
  Record,
  Stop,
} from '@i/TakeTheInterviewIcons'

const BodyPractice = ({ user, interview }: any) : React.JSX.Element => {
  const [chunks, setChunks] : any = useState([])
  const [record, setRecord] : any = useState(false)
  const [readyP, setReadyP] : any = useState(true)
  const [countS, setCountS] : any = useState(30)

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

    navigator.mediaDevices.getUserMedia(
      {
        video: true,
        audio: { echoCancellation: false },
      }
    )
      .then((stream) => {
        webCamVideoRef.current.srcObject = stream
        webCamVideoRef.current.muted = true

        mediaRecorder.current = new MediaRecorder(stream, {
          audioBitsPerSecond: 128000,
          videoBitsPerSecond: 2500000,
        })
        mediaRecorder.current.addEventListener("dataavailable", handleData)
        mediaRecorder.current.start()
      })
      .catch((err) => console.log(err))
  }

  const handleData = ({ data }: any) => setChunks(data)

  const stopStream = () => {
    mediaRecorder.current.stop()
    setRecord(false)
    setReadyP(false)
  }

  useEffect(() => { if (chunks?.size) HandlePlayVideo() }, [chunks])
  useEffect(() => {
    let interval : any

    if (record && countS > 0) {
      interval = setInterval(() => setCountS((secs: number = 0) => secs - 1), 1000)
    } else clearInterval(interval)

    return () => clearInterval(interval)
  }, [record])

  const HandlePlayVideo = () => {
    const url : any = URL.createObjectURL(chunks)
    const mp4 : any = document?.querySelector('#videoRecorded')
    mp4.src = url
    mp4.play()
    setChunks([])
  }

  const handleFormatTime = (secs: number) => {
    if (secs < 10 && secs > 0) return `0:0${secs}`
    else if (secs > 9   && secs <= 30)  return `0:${secs}`
    else if (secs == 0) {
      stopStream()
      setCountS(30)
    }
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

        <div className='absolute left-0 w-full h-[90vh] flex flex-col items-center justify-center gap-6 mt-6'>
          <div className='w-[90%] md:w-[40%] flex flex-col bg-white p-2 shadow-2xl rounded-lg'>
            {
              !readyP
                ?
              (
                <video
                  id='videoRecorded'
                  autoPlay
                  controls
                  preload='auto'
                  className='w-full rounded-lg bg-black'
                  data-setup='{}'
                />
              )
                :
              (
                <Webcam
                  mirrored={ true }
                  ref={ webCamVideoRef }
                  videoConstraints={ videoConstraints }
                />
              )
            }
            <div className='p-2 h-[25%] flex gap-6 items-center justify-center'>
              <button
                className='bg-[#D9D9D961] w-[100px] px-3 py-2 rounded-md flex flex-col items-center justify-center'
                onClick={ startStream }
                disabled={ record }
              >
                <Record color={ !record ? '#EA830A' : '#525252' } />
                Record
              </button>
              {
                countS < 30 && countS >= 0 && (
                  <div className='flex flex-col items-center justify-between'>
                    Recording
                    <span>{ handleFormatTime(countS) }</span>
                  </div>
                )
              }
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

          <div className='w-[90%] md:w-[40%] flex items-center justify-center bg-white p-4 shadow-2xl rounded-lg'>
            <Link
              href={`/interviews/${interview}/${user}/?start=1`}
              className='py-2 px-10 text-white bg-[#14C4CF] rounded-md cursor-pointer'
            >
              Start Interview
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default BodyPractice