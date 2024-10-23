/* eslint-disable no-unused-vars */
import React from "react";

const Education = () => {

  // const educationDetails = [
  //   {
  //     title: "Specialization in Full Stack Web Development",
  //     institution: "LetsUpgrade.in, Remote, MH, India",
  //     duration: "Oct 2022 - Oct 2023"
  //   },
  //   {
  //     title: "Bachelor of Engineering (Information Tech.)",
  //     institution: "AISSMS IOIT, University of Pune, MH, India",
  //     duration: "Aug 2016 - July 2021"
  //   },
  //   {
  //     title: "12th Science",
  //     institution: "Jayshree Thorat College, Karad, MH, India",
  //     duration: "June 2015 - July 2016"
  //   }
  // ];

  return (
    <div className="w-full h-auto shadow-inner shadow-[#789fef] hover:shadow-lg hover:shadow-[#789fef] bg-[#141d2a] hover:bg-black/40 rounded-xl py-6 px-5 overflow-hidden cursor-pointer hover:scale-95 transition-all duration-700 grow">
      <h3 className="font-bold lg:text-lg text-xl text-center text-gradient hover:text-gradient tracking-wider">Education</h3>
      <div className="block mx-auto lg:gap-y-8 space-y-10">
        <div className="flex space-x-3 mt-10 lg:mx-0 mx-auto">
          <div className="mt-[5px]">
            <div className="w-[6px] h-[6px] bg-[#ddbdf6] bg-opacity-60 rounded-full shadow-md"></div>
            <div className="h-20 w-[1px] ml-[2px] bg-white bg-opacity-10"></div>
          </div>
          <div className="flex flex-col gap-3 text-sm lg:text-sm md:text-lg ">
            <h6 className="text-white">
              Specialization in Full Stack Web
              Developement
            </h6>
            <p className="text-white/60">
              LetsUpgrade.in, Remote, MH, India
            </p>
            <p className="text-white/60">
              Oct 2022 - Dec 2023
            </p>
          </div>
        </div>
        <div className="flex space-x-3 mx-auto lg:mx-0">
          <div className="mt-[5px]">
            <div className="w-[6px] h-[6px] bg-[#ddbdf6] bg-opacity-60 rounded-full"></div>
            <div className="h-20 w-[1px] ml-[2px] bg-white bg-opacity-10"></div>
          </div>
          <div className="flex flex-col gap-3 text-sm lg:text-sm md:text-lg">
            <h6 className="text-white">
              Bachelor of Engineering (Information Tech.)
              <span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span>
            </h6>
            <p className="text-white/60">
              AISSMS IOIT, University of Pune, MH, India
            </p>
            <p className="text-white/60">
              Aug 2016 - July 2021
            </p>
          </div>
        </div>
        <div className="flex space-x-3 mx-auto lg:mx-0">
          <div className="mt-[5px]">
            <div className="w-[6px] h-[6px] bg-[#ddbdf6] bg-opacity-60 rounded-full"></div>
            <div className="h-20 w-[1px] ml-[2px] bg-white bg-opacity-10"></div>
          </div>
          <div className="flex flex-col gap-3 text-sm lg:text-sm md:text-lg">
            <h6 className="text-white">
              12th Science
            </h6>
            <p className="text-white/60">
              Jayshree Thorat College , Karad, MH, India
              <span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span>
            </p>
            <p className="text-white/60">
              June 2015 - July 2016
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;