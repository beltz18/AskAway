import { useState }  from 'react'
import { useRef }    from 'react'
import { useEffect } from 'react'
import { useRouter } from 'next/router'

async function loadVideoFromURL() {
  try {
    const response : any = await fetch('https://storage.googleapis.com/ask-away-development/videos/d8b6c045c2d707256ad6822569dcd55bc26672cb/6bfdd258232f391e18d6dda6aa666b06dc98a3fe/lala_lalala__54d051/rmiLMCGMJhndS89QeGh69n.mp4')
    const arrayBuffer = await response.arrayBuffer()
    const blob = new Blob([arrayBuffer], { type: 'video/mp4' })

    return blob
  } catch (error) {
    console.error('Error fetching video:', error)
  }
}

const VideoInterviewTable = ({ video }: any) : React.JSX.Element => {
  const router : any    = useRouter()
  const { interviewId } = router.query

  const videoRef : any = useRef(null)

  useEffect(() => {
    const loadVideo = async () => {
      try {
        const blob : any = await loadVideoFromURL()
        console.log(blob)
        videoRef.current.src = URL.createObjectURL(blob)
        videoRef.current.load()
      } catch (error) { console.error('Error loading video:', error) }
    }

    loadVideo()
  }, [])

  return (
    <>
      <h1>Interview</h1>

      <video
        controls={ true }
        playsInline
        preload='metadata'
        ref={ videoRef }
      />
    </>
  )
}

export default VideoInterviewTable