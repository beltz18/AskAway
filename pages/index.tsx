import Header      from "@c/Header"
import CompanyMain from "@p/CompanyMain"
import CompanyInfo from "@c/CompanyInfo"
import Footer      from "@c/Footer"

export default function Home() {
  return (
    <>
      <Header name="company" />
      <CompanyMain>
        <CompanyInfo />
      </CompanyMain>
      <Footer />
    </>
  )
}