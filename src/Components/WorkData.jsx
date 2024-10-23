/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'
import { Link } from "react-router-dom";
import { FiGithub } from "react-icons/fi";
import { FiArrowUpRight } from "react-icons/fi";

const WorkData = ({ info }) => {

  const background = "relative lg:w-[26.8vw] lg:h-[60vh] w-[85vw] h-[42vh] md:w-[65vw] md:h-[50vh] flex flex-col items-center justify-center cursor-pointer shadow-inner shadow-[#384b76] bg-[#141d2a] hover:bg-black/40 overflow-hidden backdrop-blur rounded-xl group"

  const ImageContainer = "relative lg:w-[26.8vw] lg:h-[40vh] w-[85vw] h-[28vh] md:w-[62vw] md:h-[40vh] flex items-center justify-center overflow-hidden hover:overflow-hidden cursor-pointer group"

  const Links = "bg-black/40 hover:bg-black/30 rounded-full text-white text-sm font-extrabold flex items-center gap-1 brightness-150 transition-all duration-500"

  return (
    <div data-aos="fade-up" data-aos-duration="2000"
      className={background}>
      <div className={ImageContainer}>
        <img
          src={info.img}
          alt={info.title}
          className="lg:h-[44vh] h-[36vh] object-contain group-hover:scale-[2] rounded-xl transition-transform ease-in-out duration-500 img1"
        />
        <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center gap-4 bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <Link
            to={info.git}
            className={`${Links} px-5 py-[6px]`}
          >
            <span className='flex items-center gap-x-1 hover:scale-105 transition-all ease-in-out duration-500 tracking-widest'>
              <FiGithub />
              GitHub
            </span>
          </Link>
          <Link
            to={info.link}
            className={`${Links} px-6 py-[6px]`}
          >
            <span className='flex items-center gap-x-1 hover:scale-105 transition-all ease-in-out duration-500 tracking-widest'>
              Demo
              <FiArrowUpRight className='text-lg' />
            </span>
          </Link>
        </div>
      </div>
      <div className='flex flex-col py-2 text-center max-sm:gap-1 shadow-inner shadow-white/10 w-full'>
        <span className='font-extrabold max-sm:text-xl text-gradient hover:text-gradient tracking-wider'>{info.title}</span>
        <p className='text-xs md:font-bold text-white/70'>{info.desc}</p>
        <div className='text-xs md:font-bold text-white/70 md:mt-1'>
          <span>Note : Please hover on the Image to get the project links</span>
        </div>
      </div>
    </div>
  )
}

export default WorkData
