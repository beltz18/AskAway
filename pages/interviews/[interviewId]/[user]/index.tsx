import React         from 'react'
import { useRouter } from 'next/router'

const index = () => {
  const router   = useRouter()
  const { user } = router.query

  console.log(router, user)

  return (
    <>
      <h1>index</h1>
    </>
  )
}

export default index