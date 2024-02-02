import React              from 'react'
import { useRouter }      from 'next/router'
import { useSelector }    from 'react-redux'
import Header             from '@c/recordInterview/Header'
import BodyPractice       from '@c/recordInterview/BodyPracticeInterview'
import TakingInterv       from '@c/recordInterview/TakingInterview'
import type { RootState } from '@r/store'

const TakingInterview = () : React.JSX.Element => {
  const router   = useRouter()
  const { user, interviewId, start } = router.query
  console.log(interviewId, user, start)

  const current  : number  = useSelector((state: RootState) => state.TakeIntervData.question)
  const finished : boolean = useSelector((state: RootState) => state.TakeIntervData.finished)

  const interview = {
    questions: [
      {
        question: 'Why should we hire you?',
        given_time: '3:0',
        is_answered: 'N',
      },
      {
        question: 'Tell me about you and your experience',
        given_time: '2:30',
        is_answered: 'N',
      },
    ]
  }

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
          <TakingInterv
            interview={ interview?.questions[current] }
            minutes  ={ parseInt(interview?.questions[current]?.given_time?.split(':')[0])    || 0 }
            seconds  ={ parseInt(interview?.questions[current]?.given_time?.split(':')[1])*10 || 0 }
            current  ={ current+1 }
            length   ={ interview?.questions?.length }
            finished ={ finished }
          />
        )
      }
    </>
  )
}

export default TakingInterview