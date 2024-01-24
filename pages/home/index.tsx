import React         from 'react'
import MyHead        from "@c/MyHead"
import Header        from "@c/Header"
import CompanyMain   from "@p/CompanyMain"
import CompanyInfo   from "@c/CompanyInfo"
import JobManager    from "@c/JobManager"
import Footer        from "@c/Footer"
import { getCookie } from '@a/functions'

const Home = () : React.JSX.Element => {
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

export async function getServerSideProps({ req }: any) {
  const token = getCookie('token', req)

  if (!token) {
    return {
      redirect: {
        destination: '/login',
        permanent: false,
      },
    }
  } 
  
  return {
    props: {}
  }
}