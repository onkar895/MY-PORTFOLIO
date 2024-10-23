/* eslint-disable no-unused-vars */
import React from 'react'
import About from './About'
import Footer from '../Components/Footer'

const AboutPage = () => {
  return (
    <div className='my-20 mt-12 max-sm:mt-16 md:mx-0 flex flex-col gap-y-8 md:px-6 px-2 sm:px-8 lg:px-20'>
      <About />
      <Footer />
      <div className='text-center mt-20 text-xs'>
        <span className='text-gray-400 font-bold'>Copyright @ 2024,</span>
        <span className='animate-pulse text-gradient brightness-150 hover:text-gradient hover:brightness-200'> Designed and Developed by Omkar Karale</span>  😍
      </div>
    </div>
  )
}

export default AboutPage
