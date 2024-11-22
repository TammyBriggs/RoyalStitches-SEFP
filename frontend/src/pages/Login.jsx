import React, { useState } from 'react'
import { useSearchParams } from 'react-router-dom'

const Login = () => {

  const [currentState,setCurrentState] = useState('Sign Up')

  return (
    <form className='flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-14 gap-4 text-gray-800'>
      <div className='inline-flex items-center gap-2 mb-2 mt-10'>
        <p className='cormorant-garamond-regular text-3xl'>{currentState}</p>
      </div>
    </form>
  )
}

export default Login