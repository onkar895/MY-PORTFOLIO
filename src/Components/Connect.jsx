/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from 'react';
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { SiGmail } from "react-icons/si";
import { RiWhatsappFill } from "react-icons/ri";
import { FaLinkedinIn } from 'react-icons/fa';
import Character from '../assets/Character.png';
import { NavLink } from 'react-router-dom';

const Connect = () => {
  const links = [
    {
      href: 'https://github.com/onkar895',
      icon: <AiFillGithub className='transition-all duration-500 hover:scale-125 md:text-2xl text-3xl' />,
      label: 'GitHub',
      bgClass: 'bg-white text-black',
    },
    {
      href: 'https://www.linkedin.com/in/omkarkarale541/',
      icon: <FaLinkedinIn className='transition-all duration-500 hover:scale-125 md:text-2xl text-3xl' />,
      label: 'LinkedIn',
      bgClass: 'bg-gradient-to-r from-[#0072b1] to-[#00a0dc] text-white',
    },
    {
      href: 'https://twitter.com/Onkar895',
      icon: <AiOutlineTwitter className='transition-all duration-500 hover:scale-125 md:text-2xl text-3xl' />,
      label: 'Twitter',
      bgClass: 'bg-black text-white',
    },
    {
      href: 'https://wa.me/9921374887',
      icon: <RiWhatsappFill className='transition-all duration-500 hover:scale-125 md:text-2xl text-3xl' />,
      label: 'Whatsapp',
      bgClass: 'bg-gradient-to-r from-[#25D366] to-[#128C7E] text-white',
    },
    {
      href: 'mailto:onkarkarale4@gmail.com',
      icon: <SiGmail className='transition-all duration-500 hover:scale-125 md:text-2xl text-3xl' />,
      label: 'Email',
      bgClass: 'bg-gradient-to-r from-[#ea4335] to-[#fbbc05] text-white',
    },
    {
      href: 'https://www.instagram.com/i_m_o_n_k_a_r_895/',
      icon: <AiFillInstagram className='transition-all duration-500 hover:scale-125 md:text-2xl text-3xl' />,
      label: 'Instagram',
      bgClass: 'bg-gradient-to-t from-[#fcb045] via-[#fd1d1d] to-[#833ab4] text-white',
    },
  ];

  return (
    <div className="w-full h-auto shadow-inner shadow-[#789fef] hover:shadow-lg hover:shadow-[#789fef] bg-[#141d2a] hover:bg-black/40 rounded-xl py-6 md:px-7 overflow-hidden cursor-pointer hover:scale-95 transition-all duration-700  grow">
      <h3 className="font-extrabold lg:text-lg text-xl text-center text-gradient hover:text-gradient tracking-wider">Connect & Follow</h3>
      <div className='flex flex-wrap justify-center items-center py-10 mx-auto'>
        {
          links.map((link, index) => (
            <div key={index} className='flex items-center justify-center gap-3 mb-10 w-1/2'>
              <div className={`flex items-center gap-2 backdrop-blur rounded-full p-2 ${link.bgClass}`}>
                {link.icon}
              </div>
              <NavLink to={link.href} className={`text-sm text-white/60 font-semibold hover:text-white hover:font-extrabold`}>
                <span>{link.label}</span>
              </NavLink>
            </div>
          ))
        }
      </div>
      <div className='w-full h-[0.3px] bg-gray-700'></div>
      <div className='flex items-center gap-3 mt-6 mx-auto justify-center'>
        <div className="w-10 h-10 flex items-center justify-center rounded-full custom-border box-shadow bg-white group overflow-hidden hover:overflow-hidden cursor-pointer">
          <div className="scale-[1.3] transition group-hover:scale-[1.6] w-8">
            <img src={Character} alt="logo" className='rounded-full' />
          </div>
        </div>
        <div className='text-xs flex flex-col gap-1 text-white/60 font-semibold'>
          <span>Let's Build Something Together!</span>
          <p><span className='text-white'>Send Email to :</span> onkarkarale4@gmail.com</p>
        </div>
      </div>
    </div>
  );
};

export default Connect;
