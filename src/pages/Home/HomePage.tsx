import React from 'react'
import Hero from './Hero'
import AboutPage from '../AboutPage'
import ServicesPage from '../ServicesPage'

const HomePage:React.FC = () => {
  return (
    <div className=''>
      <Hero />
      <div className='py-5'>
        <AboutPage />
      </div>
      <div>
        <ServicesPage />
      </div>
    </div>
  )
}

export default HomePage