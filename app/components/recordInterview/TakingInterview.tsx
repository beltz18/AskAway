import { useState }         from 'react'
import { useEffect }        from 'react'
import { useRef }           from 'react'
import { useDispatch }      from 'react-redux'
import Webcam               from 'react-webcam'
import Background           from './Background'
import Finished             from './Finished'
import { handleFormatTime } from '@a/functions'
import { videoConst }       from '@a/global'
import { NextQuestion     } from '@r/slicers/TakeIntervSlicer'
import { FinishInterview  } from '@r/slicers/TakeIntervSlicer'

const TakingInterv = ({
  interview,
  minutes,
  seconds,
  current,
  length,
  finished,
}: any) : React.JSX.Element => {
  const dispatcher          : any = useDispatch()

  const [chunks, setChunks] : any = useState([])
  const [nextQu, setNextQu] : any = useState(false)
  const [countS, setCountS] : any = useState(10)
  const [timerS, setTimerS] : any = useState(0)

  const webCamVideoRef      : any = useRef(null)
  const mediaRecorder       : any = useRef(null)

  useEffect(() => {
    let interval : any

    if (countS > 0) {
      interval = setInterval(() => setCountS((secs: number = 0) => secs - 1), 1000)
    } else {
      clearInterval(interval)
      startStream()
      interval = setInterval(() => setTimerS((secs: number = 0) => secs + 1), 1000)
      setNextQu(true)
    }

    return () => clearInterval(interval)
  }, [countS])

  const startStream = () => {
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

  const stopStream = () => mediaRecorder.current.stop()

  useEffect(() => { if (chunks?.size) HandlePlayVideo() }, [chunks])

  const HandlePlayVideo = () => {
    console.log('data received!')
    // const url : any = URL.createObjectURL(chunks)
    // const mp4 : any = document?.querySelector('#videoRecorded')
    // mp4.src = url
    // mp4.play()
    // setChunks([])
  }

  return (
    <>
      {
        !finished
          ?
        (
          <div className="w-full h-full flex flex-col relative">
            <Background
              message={'Interview'}
              current={ current }
              length={ length }
            />

            <div className='absolute left-0 w-full h-[90vh] flex flex-col items-center justify-center gap-6 mt-6'>
              { countS > 0 && (<span>{ countS }</span>) }
              <div className='w-[85%] md:w-[40%] flex flex-col bg-white p-2 shadow-2xl rounded-lg'>
                <div className='w-full flex items-center justify-between py-2'>
                  <span className='max-h-[150px] overflow-auto'>
                    <b className='pr-4'>Question { current }:</b>
                    { interview?.question }
                  </span>
                </div>
                
                <div className='relative'>
                  {
                    timerS > 0 && (
                      <span className='absolute z-50 top-[10px] right-[10px] bg-[#EBEBEB] py-1 px-5 rounded-md'>
                        <b className='text-[#343434]'>{ handleFormatTime(timerS) }</b>
                      </span>
                    )
                  }
                  <Webcam
                    mirrored={ true }
                    ref={ webCamVideoRef }
                    videoConstraints={ videoConst }
                  />
                </div>

                <div className='w-full flex items-center justify-end py-2'>
                  <b>{ current }</b> / { length }
                </div>

                <div className='w-full flex items-center justify-between py-4'>
                  <div className='flex items-center gap-4'>
                    <span className='bg-[#EBEBEB] py-2 px-3 rounded-md'>
                      max: <b>{ minutes }{ seconds > 0 && (`:${seconds}`) }min</b>
                    </span>
                    <span
                      className='bg-[#007BFD] py-2 px-3 rounded-md text-white cursor-pointer'
                    >
                      +30
                    </span>
                  </div>

                  <div>
                    <button
                      className='bg-[#214F71] text-white py-2 px-3 rounded-md cursor-pointer'
                      onClick={() => {
                        stopStream()
                        if (current < length) {
                          dispatcher(NextQuestion({ question: current }))
                          setCountS(10)
                          setTimerS(0)
                        }
                        else dispatcher(NextQuestion({ finished: true }))
                      }}
                      disabled={ !nextQu }
                    >
                      Continue
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )
          :
        (
          <Finished />
        )
      }
    </>
  )
}

export default TakingInterv