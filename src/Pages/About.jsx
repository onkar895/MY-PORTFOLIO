import React from 'react';
import Education from '../Components/Education';
import Skills from '../Components/Skills';
import Connect from '../Components/Connect';
import Experience from '../Components/Experience';
import { FaCircleNodes } from "react-icons/fa6";

const About = () => {
  return (
    <section data-aos="fade-up" data-aos-duration="2000">
      <div className="mx-auto w-full h-full mt-16 hide-scrollbar">
        <div className="pb-6 mx-auto font-extrabold lg:text-xl text-2xl">
          <div className='flex items-center justify-center gap-4'>
            <span className='text-gradient hover:text-gradient tracking-wider'>About Me</span>
            <FaCircleNodes className='text-2xl max-sm:text-3xl text-[#82cfff] spin' />
          </div>
        </div>
        <div className='w-full my-2' data-aos="fade-up" data-aos-duration="2000" >
          <Experience />
        </div>
        <div data-aos="fade-up" data-aos-duration="2000" className="grid lg:grid-cols-3 md:grid-cols-1 sm:grid-cols-1 lg:gap-3 gap-6 w-full mt-2 col">
          <Education />
          <Skills />
          <Connect />
        </div>
      </div>
    </section>
  );
};

export default About;
