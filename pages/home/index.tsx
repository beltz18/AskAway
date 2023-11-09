import React from 'react'
import MyHead      from "@c/MyHead"
import Header      from "@c/Header"
import CompanyMain from "@p/CompanyMain"
import CompanyInfo from "@c/CompanyInfo"
import JobManager  from "@c/JobManager"
import Footer      from "@c/Footer"

const Home = () => {
  return (
    <>
      <MyHead title="AskAway" />
      <Header name="company" />
      <CompanyMain>
        <CompanyInfo />
        <JobManager />
      </CompanyMain>
      <Footer />
    </>
  )
}

export default Home