import React         from 'react'
import { useState }  from 'react'
import { useRouter } from 'next/router'
import Header        from '@c/recordInterview/Header'
import BodyPractice  from '@c/recordInterview/BodyPracticeInterview'

const TakingInterview = () : React.JSX.Element => {
  const router   = useRouter()
  const { user, interviewId, start } = router.query
  console.log(interviewId, user, start)

  return (
    <>
      <Header />
      {
        !start
          ?
        (
          <BodyPractice
            user={ user }
            interview={ interviewId }
          />
        )
          :
        (
          <h1>Hello</h1>
        )
      }
    </>
  )
}

export default TakingInterview