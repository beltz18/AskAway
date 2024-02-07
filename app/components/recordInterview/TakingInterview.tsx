import { useState }         from 'react'
import { useEffect }        from 'react'
import { useRef }           from 'react'
import { useDispatch }      from 'react-redux'
import Webcam               from 'react-webcam'
import uuid4                from 'uuid4'
import Background           from './Background'
import Finished             from './Finished'
import { handleFormatTime } from '@a/functions'
import { startStream }      from '@a/functions'
import { mediaRecConst }    from '@a/global'
import { videoConst }       from '@a/global'
import { NextQuestion     } from '@r/slicers/TakeIntervSlicer'
import axios                from 'axios'

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
  const [mxTime, setMxTime] : any = useState((minutes * 60) + seconds)
  const [mrTime, setMrTime] : any = useState(false)
  const [formDt, setFormDt] : any = useState(new FormData())
  const [sendDt, setSendDt] : any = useState(false)

  if (sendDt) {
    setSendDt(false)
    axios.post('https://localhost:4043/v2/upload/video', formDt, {
      headers: { 'Content-Type': 'multipart/form-data' }
    })
      .then((res)  => console.log(res))
      .catch((err) => console.log(err))
  }

  const webCamVideoRef      : any = useRef(null)
  const mediaRecorder       : any = useRef(null)

  // if (document && timerS >= mxTime) document.querySelector('#pass-btn')?.click()

  useEffect(() => {
    let interval : any

    if (countS > 0)
      interval = setInterval(() => setCountS((secs: number = 0) => secs - 1), 1000)
    else {
      clearInterval(interval)
      startStream(mediaRecConst, webCamVideoRef, mediaRecorder, handleData, [])
      interval = setInterval(() => setTimerS((secs: number = 0) => secs + 1), 1000)
      setNextQu(true)
    }

    return () => clearInterval(interval)
  }, [countS])

  const handleData = ({ data }: any) => setChunks(data)
  const stopStream = () => mediaRecorder.current.stop()
  useEffect(() => { if (chunks?.size) HandlePlayVideo() }, [chunks])

  const HandlePlayVideo = () => {
    setFormDt({
      file: new File([chunks], `${uuid4()}.mp4`, { type: 'video/mp4' }),
      key: 'd8b6c045c2d707256ad6822569dcd55bc26672cb',
      tokenInt: 'f881885d4f82269ba2fe7b100db8a8af',
      question: 'sdf',
      questionID: 'ed6efba41cf19f34f90660eb5903178d',
    })

    setSendDt(true)
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
                    <button
                      className={`${!mrTime ? 'visible': 'invisible'} bg-[#007BFD] py-2 px-3 rounded-md text-white cursor-pointer disabled:bg-gray-400`}
                      onClick={() => {
                        setMxTime(mxTime+30)
                        setMrTime(true)
                      }}
                      disabled={ !nextQu }
                    >
                      +30
                    </button>
                  </div>

                  <div>
                    <button
                      className='bg-[#214F71] text-white py-2 px-3 rounded-md cursor-pointer disabled:bg-gray-400'
                      onClick={() => {
                        stopStream()
                        setMrTime(false)
                        setNextQu(false)
                        if (current < length) {
                          dispatcher(NextQuestion({ question: current }))
                          setCountS(10)
                          setTimerS(0)
                        }
                        else dispatcher(NextQuestion({ finished: true }))
                      }}
                      id='pass-btn'
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
        (<Finished />)
      }
    </>
  )
}

export default TakingInterv