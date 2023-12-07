import { useRouter } from 'next/router'
import React from 'react'

const Fiveblog = () => {
    const router = useRouter()
    const {fiveblog} = router.query;
  return (
    <>
       <h1>Fiveblog:{fiveblog}</h1>
    </>
  )
}

export default Fiveblog