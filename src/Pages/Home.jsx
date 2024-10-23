/* eslint-disable no-unused-vars */
// Home.js
import React from 'react';
import Banner from '../Components/Banner';
import About from './About';
import Work from './Work';
import Footer from '../Components/Footer';

const Home = () => {
  return (
    <div className='md:my-20 my-20'>
      <div className='flex flex-col gap-6 md:px-6 px-2 sm:px-8 lg:px-20'>
        <Banner />
        <About />
        <Work />
        <Footer />
        <div className='text-center mt-16 text-xs font-bold'>
          <span className='text-gray-400 font-bold'>Copyright @ 2024,</span>
          <span className='animate-pulse text-gradient brightness-150 hover:text-gradient hover:brightness-200'> Designed and Developed by Omkar Karale</span>  😍
        </div>
      </div>
    </div>
  );
};

export default Home;
