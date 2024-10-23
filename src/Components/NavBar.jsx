/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { BiSolidUser } from "react-icons/bi";
import { BsBriefcaseFill, BsFillPersonVcardFill } from 'react-icons/bs';
import { useLocation, useNavigate } from 'react-router-dom';
import { MdHomeFilled } from 'react-icons/md';
import { NavLink } from 'react-router-dom';
import Character from '../assets/Character.png';
import { TiArrowForward } from "react-icons/ti";

const NavBar = () => {
  const [showNavBar, setShowNavBar] = useState(false);
  const location = useLocation();

  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/');
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  useEffect(() => {
    const handleScroll = () => {
      setShowNavBar(window.scrollY !== 0);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const iconStyle = 'w-10 h-10 flex items-center justify-center rounded-full border-2 border-white/20 hover:border-white/40 hover:text-white transition-all ease-in-out hover:overflow-hidden duration-500 shadow-2xl group overflow-hidden hover:overflow-hidden cursor-pointer';

  return (
    <nav className={`fixed bottom-2 max:sm:bottom-1 w-full overflow-hidden z-50 transition-transform duration-500 ${showNavBar ? 'translate-y-0' : 'translate-y-full'}`}>
      <div className="container mx-auto">
        <div className="w-full bg-[rgba(30,23,53,0.4)] backdrop-blur-xl shadow-2xl backdrop-contrast-125 h-16 rounded-full max-w-[500px] mx-auto px-5 max-sm:px-3 flex justify-between items-center text-2xl text-white/70">
          <div className="w-10 h-10 flex items-center justify-center rounded-full custom-border box-shadow bg-white group overflow-hidden hover:overflow-hidden cursor-pointer">
            <div className="scale-[1.3] transition group-hover:scale-[1.6]" onClick={handleClick}>
              <img src={Character} alt="logo" className="rounded-full" />
            </div>
          </div>
          <div className={iconStyle}>
            <NavLink to="/" activeClass="active">
              <MdHomeFilled />
            </NavLink>
          </div>
          <div className={iconStyle}>
            <NavLink to="/about" activeClass="active">
              <BiSolidUser />
            </NavLink>
          </div>
          <div className={iconStyle} >
            <NavLink to="/work" activeClass="active">
              <BsBriefcaseFill />
            </NavLink>
          </div>
          <div className={iconStyle}>
            <NavLink to="/contact" activeClass="active">
              <BsFillPersonVcardFill />
            </NavLink>
          </div>
          <NavLink to="https://www.linkedin.com/in/omkarkarale541/" className='btn flex items-center gap-1 text-sm cursor-pointer px-4 py-[7px] max-sm:hidden font-extrabold'>
            <span className='animate-pulse'>Hire Me </span>
            <TiArrowForward className='text-lg' />
          </NavLink>
        </div>
      </div>
    </nav>
  );
};
export default NavBar;
