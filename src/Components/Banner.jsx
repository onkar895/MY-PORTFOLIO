/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { TypeAnimation } from "react-type-animation";
import { NavLink } from 'react-router-dom';
import PIC from '../assets/BestPic.png';
import { FaCircleNodes } from "react-icons/fa6";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';


const Banner = () => {

  const Icons = "text-white/80 font-extrabold transition-all ease-in-out duration-300 hover:text-white hover:brightness-200 hover:scale-110 text-2xl max-sm:text-3xl";

  return (
    <section className='relative flex' data-aos="zoom-in" data-aos-duration="2000">
      <div className='lg:flex items-center justify-center lg:space-y-0 space-y-20 lg:space-x-40'>
        <div className='flex flex-col sm:mt-12 lg:gap-2 gap-4 max-sm:mt-10 max-sm:mx-auto lg:w-[100%]'>
          <div className='w-full space-y-4 flex flex-col max-sm:items-center sm:items-center md:items-center lg:items-start hide-scrollbar'>
            <div className='flex gap-4 items-center cursor-pointer hover:-translate-y-1 transition-all duration-500'>
              <h1 className='lg:text-md text-xl font-bold text-gray-400'><span className='animate-pulse'>Hello there !</span></h1>
              <FaCircleNodes className='text-2xl max-sm:text-3xl text-[#A071C4] max-sm:text-[#FF82A2] spin' />
            </div>
            <div className='space-y-3' data-aos="zoom-in" data-aos-duration="2000">
              <h1 className='font-extrabold py-2 lg:text-[2.5rem] text-[2.25rem] min-[320px]:text-[2rem] min-[1024px]:text-[2.625rem] tracking-widest img'> I'm Omkar Karale</h1>
              <div className='w-[100%] h-1 bg-gradient-to-r from-[#2e86de] via-[#A071C4] to-[#D76571] animate-slideFade brightness-125'></div>
            </div>
            <div className='text-xl font-semibold text-gradient hover:text-gradient'>
              <TypeAnimation
                sequence={["Aspiring Frontend Enthusiast", 2000, "Passionate Web Developer", 2000, "Eager Learner of Web Wizardry", 2000]}
                speed={50}
                wrapper="span"
                repeat={Infinity}
                data-aos="zoom-in-right" data-aos-duration="2000"
              />
            </div>
          </div>
          <div className="flex flex-col lg:items-start items-center md:gap-6 gap-8 w-full mx-auto" data-aos="zoom-in" data-aos-duration="2000">
            <p className="text-[0.95rem] font-semibold  text-white/70 max-sm:text-[1.1rem] text-justify max-sm:mx-1.5">  I’m highly skilled in Frontend Development specialized in React.js, JavaScript, modern web development and variety of UI frameworks & libraries. Passionate about delivering user-friendly, engaging and performance-optimized user interfaces.
            </p>
            <div className="tracking-widest shadow-2x font-semibold hide-scrollbar">
              <h1 className='text-gray-300 text-xl block mx-auto text-center'>Let's Build Something Together...✨</h1>
            </div>
            <div className='flex min-[1024px]:flex-nowrap min-[1024px]:gap-10 flex-wrap justify-between w-[100%] max-sm:w-[95%] sm:gap-y-12 max-sm:gap-y-12 md:gap-y-5 lg:gap-y-0 lg:py-2 py-3 cursor-pointer'>
              <div className={`md:hidden min-[1024px]:hidden sm:hidden content`}>
                <NavLink to='https://drive.google.com/file/d/13uNqu7w0nDWGEncYf7l958qsKiJPJV3r/view?usp=sharing'>
                  <span className="flex items-center justify-center gap-2 tracking-widest text-gradient hover:-translate-y-1 transition-all ease-in-out duration-700">
                    Resume🔻
                    {/* <TiArrowSortedDown /> */}
                  </span>
                  {/* <div className={Hline}></div> */}
                </NavLink>
              </div>
              <div className='content'>
                <NavLink to='/contact'>
                  <span className="flex items-center justify-center gap-2 tracking-widest text-gradient hover:-translate-y-1 transition-all ease-in-out duration-700 image">
                    Contact 📞
                    {/* <FaPhone /> */}
                  </span>
                  {/* <div className={Hline}></div> */}
                </NavLink>
              </div>
              <div className="flex items-center space-x-6 w-[45%] max-sm:justify-between max-sm:w-[100%] justify-evenly overflow-hidden max-sm:mx-auto">
                <div className={Icons}>
                  <a href="https://github.com/onkar895">
                    <AiFillGithub />
                  </a>
                </div>
                <div className={Icons}>
                  <a href="https://www.linkedin.com/in/omkarkarale541/">
                    <FaLinkedinIn />
                  </a>
                </div>
                <div className={Icons}>
                  <a href="mailto:onkarkarale4@gmail.com">
                    <SiGmail />
                  </a>
                </div>
                <div className={Icons}>
                  <a href="https://www.instagram.com/i_m_o_n_k_a_r_895/">
                    <AiFillInstagram />
                  </a>
                </div>
                <div className={Icons}>
                  <a href="https://twitter.com/Onkar895">
                    <AiOutlineTwitter />
                  </a>
                </div>
              </div>
              <div>
                <FaCircleNodes className='text-4xl text-[#FF82A2] max-sm:hidden spin' />
              </div>
            </div>
          </div>
        </div>
        <div className='block m-auto w-[90%] md:w-[55%] hover:animate-pulse lg:mx-0' data-aos="zoom-in" data-aos-duration="2000">
          <LazyLoadImage
            src={PIC}
            alt="AboutImage"
            effect="blur"
            className='lg:mt-10 rounded-full img bounce'
          />
        </div>
      </div>
    </section>
  )
}

export default Banner
