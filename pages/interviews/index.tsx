import React             from "react"
import { Suspense }      from "react"
import { useDispatch }   from "react-redux"
import { getCookie }     from "@a/functions"
import InterviewsHeader  from "@c/InterviewsHeader"
import InterviewsTable   from "@c/InterviewsTable"
import MyHead            from "@c/MyHead"
import Header            from "@c/Header"
import Footer            from "@c/Footer"
import Loader            from "@p/Loading"
import CompanyMain       from "@p/CompanyMain"
import { SetInterviews } from "@r/slicers/InterviewsSlicer"
import {
  GetCompanyInfo,
  GetInterviews,
} from '@api/Get'

const InterviewsPage = ({ interviewsData, interviewsAvailable, adminToken }: any) => {
  const dispatch : any = useDispatch()
  let data       : any = []

  if (interviewsData) {
    data = interviewsData
    dispatch(SetInterviews(interviewsData))
  }

  const [isLoaded, setIsLoaded]  = React.useState(false)
  React.useEffect(() => setIsLoaded(true))

  return (
    <>
      <MyHead title="AskAway" />
      <Header name="interview" />
      {
        isLoaded
          &&
        <Suspense fallback={ <Loader /> }>
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
        </Suspense>
      }
    </>
  )
}

export default InterviewsPage

export async function getServerSideProps ({ req }: any) {
  if(process.env.NODE_ENV == 'development')
    process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0'
  
  const token : string = getCookie('token', req)
  const admin : string = getCookie('admin', req)

  const dataC = await GetCompanyInfo(token)
  const dataI = await GetInterviews(token, admin)
  
  return {
    props: {
      interviewsData: dataI?.data,
      interviewsAvailable: dataC?.data[0]?.admin?.remainingFreeTrialInterviews,
      adminToken: token,
    }
  }
}