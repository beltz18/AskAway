import { useEffect }   from 'react'
import { useRef }      from 'react'
import { useState }    from 'react'
import Link            from 'next/link'
import Webcam          from 'react-webcam'
import Background      from './Background'
import { startStream } from '@a/functions'
import { mediaRecConst, videoConst }  from '@a/global'
import {
  Record,
  Stop,
} from '@i/TakeTheInterviewIcons'
import {
  handleFormatTime,
} from '@a/functions'

const BodyPractice = ({ user, interview }: any) : React.JSX.Element => {
  const [chunks, setChunks] : any = useState([])
  const [record, setRecord] : any = useState(false)
  const [readyP, setReadyP] : any = useState(true)
  const [countS, setCountS] : any = useState(31)

  const webCamVideoRef : any = useRef(null)
  const mediaRecorder  : any = useRef(null)

  const handleData = ({ data }: any) => setChunks(data)

  const stopStream = () => {
    mediaRecorder.current.stop()
    setCountS(31)
    setRecord(false)
    setReadyP(false)
  }

  const HandlePlayVideo = () => {
    const url : any = URL.createObjectURL(chunks)
    const mp4 : any = document?.querySelector('#videoRecorded')
    mp4.src = url
    mp4.play()
    setChunks([])
  }

  useEffect(() => { if (chunks?.size) HandlePlayVideo() }, [chunks])
  useEffect(() => {
    let interval : any

    if (record && countS > 0)
      interval = setInterval(() => setCountS((secs: number = 0) => secs - 1), 1000)
    else clearInterval(interval)
    
    return () => clearInterval(interval)      
  }, [record])

  countS == 0 && record && stopStream()

  return (
    <>
      <div className="w-full h-full flex flex-col relative">
        <Background
          message={'Prepare your equipement'}
          current={ 2 }
          length={ 2 }
        />

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
                  videoConstraints={ videoConst }
                />
              )
            }
            <div className='p-2 h-[25%] flex gap-6 items-center justify-center'>
              <button
                className='bg-[#D9D9D961] w-[100px] px-3 py-2 rounded-md flex flex-col items-center justify-center'
                onClick={() => startStream(mediaRecConst, webCamVideoRef, mediaRecorder, handleData, [setReadyP, setRecord]) }
                disabled={ record }
              >
                <Record color={ !record ? '#EA830A' : '#525252' } />
                Record
              </button>
              {
                countS < 31 && countS >= 0 && (
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