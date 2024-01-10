import React         from 'react'
import { useRouter } from 'next/router'
import Header        from '@c/recordInterview/Header'
import BodyPractice  from '@c/recordInterview/BodyPracticeInterview'

const TakingInterview = () => {
  const router   = useRouter()
  const { user, interviewId } = router.query
  console.log(interviewId, user)

  return (
    <>
      <Header />
      <BodyPractice />
    </>
  )
}

export default TakingInterview