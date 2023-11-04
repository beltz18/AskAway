import React            from "react"
import MyHead           from "@c/MyHead"
import Header           from "@c/Header"
import CompanyMain      from "@p/CompanyMain"
import InterviewsHeader from "@a/components/InterviewsHeader"
import InterviewsTable  from "@a/components/InterviewsTable"
import Footer           from "@c/Footer"

const index = () => {
  return (
    <>
      <MyHead title="AskAway" />
      <Header name="interview" />
      <CompanyMain>
        <InterviewsHeader />
        <InterviewsTable />
      </CompanyMain>
      <Footer />
    </>
  )
}

export default index