import { useEffect } from 'react'
import { useRef } from 'react'
import { useState } from 'react'
import Link from 'next/link'
import Webcam from 'react-webcam'
import uuid4 from 'uuid4'
import Background from './Background'
import { startStream } from '@a/functions'
import { mediaRecConst, videoConst } from '@a/global'
import axios from 'axios'
// import {
//   Record,
//   Stop,
// } from '@i/TakeTheInterviewIcons'
import {
  handleFormatTime,
} from '@a/functions'

const BodyPractice = ({ user, interview }: any): React.JSX.Element => {
  const [isRecording, setIsRecording] = useState(false)
  const videoRef = useRef<null | HTMLVideoElement>(null)
  const streamRef = useRef<null | MediaStream>(null)
  const [downloadLink, setDownloadLink] = useState("")
  const [isDone, setIsDone] = useState(false)
  const streamRecorderRef = useRef<null | MediaRecorder>(null)
  const [audioSource, setAudioSource] = useState<string>("")
  const [videoSource, setVideoSource] = useState<string>("")
  const [audioSourceOptions, setAudioSourceOptions] = useState<Record<string, string>[]>([])
  const [videoSourceOptions, setVideoSourceOptions] = useState<Record<string, string>[]>([])
  const [error, setError] = useState<null | Error>(null)
  const chunks = useRef<any[]>([])

  function startRecording() {
    if (isRecording) return
    if (!streamRef.current) return

    streamRecorderRef.current = new MediaRecorder(streamRef.current)
    streamRecorderRef.current.start()
    streamRecorderRef.current.ondataavailable = async (event: BlobEvent) => {
      if (chunks.current) {
        chunks.current.push(event.data)
        setIsDone(true)
      }
    }
    setIsRecording(true)
  }

  useEffect(() => {
    if (isRecording) return
    if (isDone) {
      setIsDone(false)
      const blob = new Blob(chunks.current, { type: "video" })
      setDownloadLink(URL.createObjectURL(blob))
      chunks.current = []

      const data = {
        file:  blob,
        key: 'd8b6c045c2d707256ad6822569dcd55bc26672cb',
        tokenInt: 'f881885d4f82269ba2fe7b100db8a8af',
        question: 'sdf',
        questionID: 'ed6efba41cf19f34f90660eb5903178d',
      }

      axios.post('https://localhost:4043/v2/upload/video', data, {
        headers: { 'Content-Type': 'multipart/form-data' }
      })
        .then((res)  => console.log(res))
        .catch((err) => console.log(err))
    }
  }, [isRecording, isDone])

  function stopRecording() {
    if (!streamRecorderRef.current) return
    streamRecorderRef.current.stop()
    setIsRecording(false)
  }

  useEffect(function () {
    async function prepareStream() {
      function gotStream(stream: MediaStream) {
        streamRef.current = stream
        if (videoRef.current) videoRef.current.srcObject = stream
      }

      async function getStream() {
        if (streamRef.current) {
          streamRef.current.getTracks().forEach((track) => {
            track.stop()
          })
        }
        const constraints = {
          audio: { deviceId: audioSource !== "" ? { exact: audioSource } : undefined },
          video: { deviceId: videoSource !== "" ? { exact: videoSource } : undefined },
        }
        try {
          const stream = await navigator.mediaDevices.getUserMedia(constraints)
          gotStream(stream)
        } catch (err: any) { setError(err) }
      }

      function getDevices() { return navigator.mediaDevices.enumerateDevices() }

      function gotDevices(deviceInfos: MediaDeviceInfo[]) {
        const audioSourceOptions = []
        const videoSourceOptions = []

        for (const deviceInfo of deviceInfos) {
          if (deviceInfo.kind === "audioinput") {
            audioSourceOptions.push({
              value: deviceInfo.deviceId,
              label: deviceInfo.label || `Microphone ${deviceInfo.deviceId}`,
            })
          } else if (deviceInfo.kind === "videoinput") {
            videoSourceOptions.push({
              value: deviceInfo.deviceId,
              label: deviceInfo.label || `Camera ${deviceInfo.deviceId}`,
            })
          }
        }
        setAudioSourceOptions(audioSourceOptions)
        setVideoSourceOptions(videoSourceOptions)
      }

      await getStream()
      const mediaDevices = await getDevices()
      gotDevices(mediaDevices)
    }
    prepareStream()
  }, [])

  return (
    <>
      <div className="w-full h-full flex flex-col relative">
        <Background
          message={'Prepare your equipement'}
          current={2}
          length={2}
        />

        <div className='absolute left-0 w-full h-[90vh] flex flex-col items-center justify-center gap-6 mt-6'>
          <div className='w-[90%] md:w-[40%] flex flex-col bg-white p-2 shadow-2xl rounded-lg'>
            <div>
              <select
                id="videoSource"
                name="videoSource"
                value={videoSource}
                onChange={(e: any) => setVideoSource(e.target.value)}
              >
                {
                  videoSourceOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))
                }
              </select>
            </div>
            <div>
              <select
                id="audioSource"
                name="audioSource"
                value={audioSource}
                onChange={(e: any) => setAudioSource(e.target.value)}
              >
                {
                  audioSourceOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))
                }
              </select>
            </div>
            <div>
              <video ref={videoRef} autoPlay muted playsInline></video>
            </div>
            <div>
              {downloadLink && <video src={downloadLink} controls></video>}
              {downloadLink && (
                <a href={downloadLink} download="file.mp4">
                  Descargar
                </a>
              )}
            </div>
            <div>
              <button onClick={startRecording} disabled={isRecording}>
                Grabar
              </button>
              <button onClick={stopRecording} disabled={!isRecording}>
                Parar
              </button>
            </div>
            <div>{error && <p>{error.message}</p>}</div>
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