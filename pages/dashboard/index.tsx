import React       from "react"
import MyHead      from "@c/MyHead"
import Header      from "@c/Header"
import CompanyMain from "@p/CompanyMain"

import Footer      from "@c/Footer"

const index = () : React.JSX.Element => {
  return (
    <>
      <MyHead title="AskAway" />
      <Header name="dashboard" />
      <CompanyMain>

      </CompanyMain>
      <Footer />
    </>
  )
}

export default index