import { UserProfile } from '@clerk/nextjs'
import { dark } from '@clerk/themes'
import React from 'react'

const page = () => {
  return (
    <div className='w-full h-full flex justify-center items-center'>

    <UserProfile appearance={{
      theme: dark
    }}/>
    </div>
  )
}

export default page