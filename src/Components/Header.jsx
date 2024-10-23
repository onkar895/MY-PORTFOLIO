/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import Logo from '../assets/Character.png';
import { TiArrowForward } from "react-icons/ti";
import { FaCircleNodes } from "react-icons/fa6";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY;
      setIsScrolled(position > 100);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleClick = () => {
    navigate('/');
  };

  const work = "text-sm space-y-1 transition-all ease-in-out duration-700 cursor-pointer font-extrabold text-gradient tracking-widest hover:-translate-y-1"

  const Hline = "w-full h-1 bg-gradient-to-r from-[#2e86de] via-[#A071C4] to-[#D76571] animate-slideFade"

  // Header
  return (
    <nav className={`py-5 lg:py-3 fixed top-0 left-0 z-40 w-full transition-all ease-in-out duration-300 ${isScrolled ? 'bg-[rgba(18,22,45,0.4)] backdrop-blur-xl' : 'bg-transparent'}`}>
      <div className='flex justify-between items-center md:px-6 px-2 sm:px-6 lg:px-[4.7rem]'>
        <div data-aos="fade-down" data-aos-duration="2000" className='flex items-center gap-2'>
          <div onClick={handleClick}>
            <img src={Logo} alt='MyLogo' className='w-10 h-10 transition-all duration-500 hover:scale-95 cursor-pointer' />
          </div>
          <div className='flex gap-x-2 text-2xl tracking-widest font-extrabold cursor-pointer'>
            <span className='text-gradient hover:text-gradient'>Omkar</span>
            <span>Karale</span>
          </div>
        </div>
        <div className='flex items-center gap-x-12'>
          <div data-aos="fade-down" data-aos-duration="2000" className='flex items-center sm:ml-28 gap-8 max-sm:hidden py-2'>
            <div className={work}>
              <NavLink to="https://drive.google.com/file/d/13uNqu7w0nDWGEncYf7l958qsKiJPJV3r/view?usp=sharing" className="">
                <span>Resume🔻</span>
                {/* <FaArrowDown className='animate-bounce' /> */}
              </NavLink>
              <div className={Hline}></div>
            </div>

            <div className={work}>
              <NavLink to="https://www.linkedin.com/in/omkarkarale541/" className="">
                <span>📄 Available for work</span>
              </NavLink>
              <div className={Hline}></div>
            </div>
          </div>
          <div data-aos="fade-down" data-aos-duration="2000" className={`${work} md:hidden cursor-pointer text-sm font-bold min-[320px]:px-3 min-[320px]:text-sm`}>
            <NavLink to="https://www.linkedin.com/in/omkarkarale541/" className="flex items-center justify-center">
              <span className='tracking-widest sm:hidden max-sm:px-2'>Hire Me</span>
              <TiArrowForward className='text-pink-400 text-lg' />
            </NavLink>
            <div className={Hline}></div>
          </div>
          <div className='max-sm:hidden '>
            <FaCircleNodes className='text-3xl text-[#73aef1] spin' />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;