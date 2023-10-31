import MyHead      from "@c/MyHead"
import Header      from "@c/Header"
import CompanyMain from "@p/CompanyMain"
import CompanyInfo from "@c/CompanyInfo"
import JobManager  from "@c/JobManager"
import Footer      from "@c/Footer"

export default function Home() {
  return (
    <>
      <MyHead
        title="AskAway"
      />
      <Header name="company" />
      <CompanyMain>
        <CompanyInfo />
        <JobManager />
      </CompanyMain>
      <Footer />
    </>
  )
}