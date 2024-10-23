/* eslint-disable no-unused-vars */
import React from 'react';
import { IoLogoHtml5, IoLogoCss3, IoLogoJavascript } from "react-icons/io";
import { SiTailwindcss, SiMui, SiRedux, SiVercel, SiFirebase } from "react-icons/si";
import { FaGitlab, FaReact, FaBootstrap, FaGithub, FaGitAlt } from "react-icons/fa";

const skills = [
  { icon: <IoLogoHtml5 className='text-orange-500 text-3xl' />, bg: 'bg-white' },
  { icon: <IoLogoCss3 className='text-blue-600 text-3xl' />, bg: 'bg-white' },
  { icon: <IoLogoJavascript className='text-black text-3xl' />, bg: 'bg-[#FDEA31]' },
  { icon: <FaReact className='text-[#4dbfd6] text-3xl' />, bg: 'bg-black' },
  { icon: <SiRedux className='text-[#6C4EB0] text-3xl' />, bg: 'bg-white' },
  { icon: <SiTailwindcss className='text-[#54c2d8] text-3xl' />, bg: 'bg-white' },
  { icon: <SiMui className='text-[#007FFF] text-3xl' />, bg: 'bg-white' },
  { icon: <FaBootstrap className='text-[#9E64F2] text-3xl' />, bg: 'bg-white' },
  { icon: <FaGitAlt className='text-[#F34F29] text-3xl' />, bg: 'bg-white' },
  { icon: <FaGithub className='text-black text-3xl' />, bg: 'bg-white' },
  { icon: <FaGitlab className='text-[#E24329] text-3xl' />, bg: 'bg-white' },
  { icon: <SiFirebase className='text-[#FFA000] text-3xl' />, bg: 'bg-white' },
  { icon: <SiVercel className='text-white text-3xl' />, bg: 'bg-black' },
];

const Skills = () => {
  return (
    <div className="w-full h-auto shadow-inner shadow-[#789fef] hover:shadow-lg hover:shadow-[#789fef] bg-[#141d2a] hover:bg-black/40 rounded-xl py-6 md:px-7 overflow-hidden cursor-pointer hover:scale-95 transition-transform duration-700 grow">
      <h3 className="lg:text-lg text-xl text-center text-gradient hover:text-gradient tracking-wider">Skills</h3>
      <div className="flex flex-wrap justify-center lg:gap-x-10 md:gap-x-24 gap-x-20 gap-y-10 py-10">
        {
          skills.map(({ icon, bg }, index) => (
            <div key={index} className={`p-2 rounded-xl transition-transform duration-300 transform hover:scale-110 shadow-md ${bg}`}>
              {icon}
            </div>
          ))
        }
      </div>
    </div>
  );
}

export default Skills;
