import React         from 'react'
import { useRouter } from 'next/router'
import Header        from '@c/recordInterview/Header'
import BodyPractice  from '@c/recordInterview/BodyPracticeInterview'

const TakingInterview = () : React.JSX.Element => {
  const router   = useRouter()
  const { user, interviewId, step } = router.query
  console.log(interviewId, user, step)

  return (
    <>
      <Header />
      <BodyPractice
        user={ user }
        interview={ interviewId }
      />
    </>
  )
}

export default TakingInterview