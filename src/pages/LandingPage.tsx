import React from 'react'
import { Outlet } from 'react-router'

const LandingPage:React.FC = () => {
  return (
    <div className='bg-slate-500 w-screen h-screen grid place-items-center border-2'>
        <Outlet />
    </div>
  )
}

export default LandingPage