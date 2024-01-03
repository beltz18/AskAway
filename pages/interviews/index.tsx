import React             from "react"
import { useDispatch }   from "react-redux"
import { GetAPI }        from "@a/functions"
import { getCookie }     from "@a/functions"
import InterviewsHeader  from "@c/InterviewsHeader"
import InterviewsTable   from "@c/InterviewsTable"
import MyHead            from "@c/MyHead"
import Header            from "@c/Header"
import Footer            from "@c/Footer"
import CompanyMain       from "@p/CompanyMain"
import { SetInterviews } from "@r/slicers/InterviewsSlicer"

const InterviewsPage = ({ interviewsData, interviewsAvailable, adminToken }: any) => {
  const dispatch : any = useDispatch()
  let data : any = []

  if (interviewsData) {
    data = interviewsData
    dispatch(SetInterviews(interviewsData))
  }

  return (
    <>
      <MyHead title="AskAway" />
      <Header name="interview" />
      <CompanyMain>
        <InterviewsHeader
          c={ interviewsAvailable }
        />
        <InterviewsTable
          data={ data }
          token={ adminToken }
        />
      </CompanyMain>
      <Footer />
    </>
  )
}

export default InterviewsPage

export async function getServerSideProps ({ req }: any) {
  if(process.env.NODE_ENV == 'development')
    process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0'
  
  const token = getCookie('token', req)
  const admin = getCookie('admin', req)

  const dataC = await GetAPI(token, process.env.NEXT_PUBLIC_COMPANY_INFO)
  const dataI = await GetAPI(token, `${process.env.NEXT_PUBLIC_INTERV_ROUTE}?token=${admin}`)
    
  if (dataI) {      
    return {
      props: {
        interviewsData: dataI,
        interviewsAvailable: dataC[0]?.admin?.remainingFreeTrialInterviews,
        adminToken: token,
      }
    }
  }
  
  return {
    props: {
      interviewsData: [],
      interviewsAvailable: dataC[0]?.admin?.remainingFreeTrialInterviews,
      adminToken: token,
    }
  }
}