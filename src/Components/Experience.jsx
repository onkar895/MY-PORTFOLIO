/* eslint-disable no-unused-vars */
import React from 'react'
import { MdOutlineRemove } from "react-icons/md";

const Experience = () => {
  return (
    <div className='w-full shadow-inner shadow-[#789fef] hover:shadow-lg hover:shadow-[#789fef] bg-[#141d2a] hover:bg-black/40 rounded-xl py-6 px-5 overflow-hidden cursor-pointer hover:scale-95 transition-all duration-500'>
      <h3 className="font-extrabold lg:text-lg text-xl text-center text-gradient hover:text-gradient tracking-wider">Experience</h3>
      <div className='my-5'>
        <div className='flex items-center justify-between flex-wrap max-sm:justify-center max-sm:gap-2'>
          <div className='text-center md:text-start text-sm'>
            <h4 className='font-extrabold text-gradient'>Frontend Developer</h4>
            <p className='md:font-semibold'>Infosonic Software Solutions Pvt. Ltd.</p>
          </div>
          <div className='text-sm md:text-end text-white max-sm:text-center'>
            <span className='italic'>May 2023 - Present</span>
            <p>Kolhapur, Maharashtra, India · Hybrid</p>
          </div>
        </div>
        <div className='text-sm text-justify text-white/70'>
          <ul className='my-4'>
            <li className='mb-2 max-sm:mb-3 flex items-center gap-2'>
              <MdOutlineRemove className='font-extrabold text-white text-xl max-sm:hidden' />
              Designed and delivered impactful, scalable user interfaces using React.js, optimized development with modular, reusable components that enhanced code maintainability and reduced complexity.
            </li>
            <li className='mb-2 max-sm:mb-3 flex items-center gap-2'>
              <MdOutlineRemove className='font-extrabold text-2xl text-white max-sm:hidden' />
              Worked closely with the design team to provide strategic insights on improving interface elements to elevate application flow and functionality. Played a proactive role in code reviews, identifying and resolving bugs and applying best practices for clean, maintainable code.
            </li>
            <li className='mb-2 max-sm:mb-3 flex items-center gap-2'>
              <MdOutlineRemove className='font-extrabold max-sm:text-xl text-white max-sm:hidden' />
              Collaborated with cross-functional teams to refine UI designs, ensuring alignment with business goals and improving feature usability.
            </li>
            <li className='mb-2 max-sm:mb-3 flex items-center gap-2'>
              <MdOutlineRemove className='font-extrabold max-sm:text-xl text-white max-sm:hidden' />
              Implemented a responsive web design system that delivered a seamless, high-quality user experience across devices and platforms, ensuring consistency and accessibility.
            </li>
            <li className='mb-2 max-sm:mb-3 flex items-center gap-2'>
              <MdOutlineRemove className='font-extrabold max-sm:text-xl text-white max-sm:hidden' />
              Utilized modern web technologies like HTML5, CSS3, JavaScript, React.js, and React-Bootstrap to deliver clean, efficient code with a strong emphasis on performance and scalability.
            </li>
          </ul>

          <div>
            <p><h4 className='text-white font-bold'>Skills:</h4> React.js, HTML5, Cascading Style Sheets (CSS), React-Bootstrap, JavaScript, User Interface Design, Git & GitHub</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Experience
