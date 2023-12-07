import React            from "react"
import { GetAPI }       from "@a/functions"
import { getCookie }    from "@a/functions"
import InterviewsHeader from "@c/InterviewsHeader"
import InterviewsTable  from "@c/InterviewsTable"
import MyHead           from "@c/MyHead"
import Header           from "@c/Header"
import Footer           from "@c/Footer"
import CompanyMain      from "@p/CompanyMain"

const index = ({ interviewsData }: any) => {
  return (
    <>
      <MyHead title="AskAway" />
      <Header name="interview" />
      <CompanyMain>
        <InterviewsHeader />
        <InterviewsTable
          data={ interviewsData }
        />
      </CompanyMain>
      <Footer />
    </>
  )
}

export default index

export async function getServerSideProps ({ req }: any) {
  if(process.env.NODE_ENV == 'development')
    process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0'
  
  const token = getCookie('token', req)
  const data  = await GetAPI(token)
  
  return {
    props: {
      interviewsData: data
    }
  }
}