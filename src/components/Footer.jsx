import React from "react";
import logo from "../assets/favicon.png";
import line from "../assets/line2.svg";
const Footer = () => {
  return (
    <section className="w-screen h-full">
      <div className="flex items-center justify-center w-full h-full p-4">
        <div className="flex items-center justify-center w-full h-full xs:p-2">
          <div className="flex items-center justify-center w-full h-full flex-col p-2">
            <div className="flex items-center justify-center w-full h-full flex-col gap-1 p-4 s:p-6 bg-[#d5ff40] max-w-6xl  rounded-b-[42px] s:rounded-b-[54px] sm:rounded-b-[96px]  md:rounded-b-[144px]">
              <div className="flex-items-center justify-center w-[85%] my-6 md:mt-12">
                <img src={line} alt="line" />
              </div>
              <div className="flex-items-center justify-center w-full sm:w-[75%] my-4 xs:my-6">
                <h1 className="text-[2rem] text-center xs:text-4xl sm:text-5xl font-black sm:leading-tight text-[#000000]">
                  LET’S DISCUSS YOUR IDEAS
                </h1>
              </div>
              <div className="flex items-center justify-center flex-col xs:flex-row gap-4 md:mb-12 py-2 my-2 xs:my-6 w-full xs:w-[95%] sm:w-[75%] lg:w-[50%]">
              <div className="flex items-center justify-center w-[85%] xs:w-full bg-black group hover:bg-transparent transition duration-200 ease-in-out hover:border hover:border-black rounded-full p-2 flex-1">
                <button type="submit" className=" text-[#D5FF40] group-hover:text-black rounded-full text-xs font-black ">Register Now</button>
              </div>
              <div className="flex items-center justify-center w-[85%] xs:w-full bg-transparent rounded-full transition duration-200 cursor-pointer ease-in-out flex-1  p-2 border border-black">
                <button type="submit" className=" text-black cursor-pointer rounded-full text-xs font-black">Learn More</button>
              </div>
              </div>
            </div>
            <div className="flex items-center justify-center w-full my-8">
              <div className="flex items-center justify-center flex-row lg:p-2">
                <img
                  src={logo}
                  alt="codechef"
                  className="w-auto h-11 sm:h-12 lg:h-14"
                />
              </div>
            </div>
            <div className="flex items-center justify-around p-4 w-full h-full sm:flex-row flex-col gap-6">
                      <p className="text-[#D5FF40] font-black text-xs md:text-sm lg:text-base">PRIVACY POLICY</p>  
                      <p className="text-[#D5FF40] text-center font-black text-xs md:text-sm lg:text-base sm:ml-10">COPYRIGHT @ALL RIGHTS RESERVED</p>  
                      <p className="text-[#D5FF40] font-black text-xs md:text-sm lg:text-base">TERMS&CONDITIONS</p>  
                      
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
