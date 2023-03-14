import React, { useState } from 'react'
import Header from '../components/Header'
import play from '../assets/play.svg'
import star from '../assets/star.svg'
import circle from '../assets/circle.svg'
import linkedin from '../assets/linkedin.svg'
import instagram from '../assets/instagram.svg'
import twitter from '../assets/twitter.svg'
import line from '../assets/Line.svg'
import { IoCloseOutline } from "react-icons/io5";
import { BiLoaderAlt } from "react-icons/bi";
import video from '../assets/render.mp4'
import pdf from '../assets/rulebook.pdf'
const HeroPage = () => {
  const [modal, setModal] = useState(false);
  const [videoLoading, setVideoLoading] = useState(true);

  const openModal = () => {
    setModal(!modal);
  };

  const spinner = () => {
    setVideoLoading(!videoLoading);
  };

  return (
    <section className="w-screen relative h-full bg-[#D5FF40] flex items-center justify-center flex-col" id="home">
     <Header/>
     <div className="flex items-center justify-center py-8 md:px-2 lg:px-4 sm:px-4 w-full h-full ">
           <div className='flex items-center justify-center px-2 sm:px-4 md:px-2 lg:px-4 flex-col max-w-[95%] h-full py-4'>
            <div className='flex items-center justify-start flex-row w-full my-2 h-full sm:p-0 p-1 md:p-1'>
             <div className='flex items-center justify-start w-full'><h1 className='text-[2rem]  lg:p-2 xs:text-[2.7rem] s:text-5xl sm:text-[4rem] md:text-[5rem] lg:text-8xl xl:text-9xl 2xl:text-[154px] font-black sm:leading-tight text-[#1A1A1A]'>PHOSPHENES</h1></div>
            </div>
            <div className='flex items-center justify-start flex-col w-full h-full sm:p-0 p-1 md:p-1 gap-2'>
            <div className='flex items-center justify-start w-full h-full'><h1 className='text-2xl lg:p-2 xs:text-[2rem]  s:text-4xl sm:text-5xl md:text-6xl lg:text-7xl  whitespace-nowrap font-black sm:leading-tight text-[#1A1A1A]'>CODE | WAR | TRADE</h1></div>
            <div className='flex items-start justify-end w-full h-full'><img src={star} loading="lazy" alt="star" className='w-auto h-6 sm:h-8 mr-6'/></div>
            </div>
            <div className='w-full h-full flex items-center justify-end sm:p-0 p-1 md:p-1'>
            <div className='flex items-center justify-center flex-col md:flex-row w-full p-1  gap-6 sm:p-2 my-6'>
            
              <p className='font-normal text-xs sm:text-sm lg:text-lg md:w-[50%]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis. per conubia nostra.</p>
              <div className='flex items-center justify-center flex-col flex-1 gap-2 w-full h-full xs:p-2 xl:p-0'><div className='bg-red rounded-full p-4 h-12 xs:h-14 s:h-16 md:h-20 lg:h-24 flex items-center justify-start bg-video bg-cover bg-center bg-no-repeat w-full'><img src={play} loading="lazy" alt="play" onClick={openModal} className='w-auto h-8 xs:h-10  sm:h-12 md:h-14 lg:h-16'/></div>
             </div>        
              </div>
            </div>
            <div className="flex items-center justify-center flex-row gap-4 w-full py-2 s:p-4 my-2 md:my-6">
              <div className="flex items-center justify-center bg-black group hover:bg-transparent transition duration-200 ease-in-out hover:border hover:border-black rounded-full md:max-w-[20%] lg::max-w-[15%] p-2 flex-1">
                <button type="submit" className=" text-[#D5FF40] group-hover:text-black rounded-full text-xs font-black ">Register Now</button>
              </div>
          <a href={pdf} download="rulebook" className="focus:none outline:none flex items-center justify-center bg-transparent rounded-full transition duration-200 ease-in-out flex-1 md:max-w-[20%] lg:max-w-[15%] p-2 border border-black">
                <button type="submit" className=" text-black  rounded-full text-xs font-black">Rule Book</button>
              </a>   
              <div className="sm:flex hidden items-center justify-center flex-1 w-full h-0 border border-black"></div>
              <div className="hidden items-center justify-center sm:flex">
                <img src={circle} alt="circle" className="w-10 h-10"/>
              </div>
            </div>
            <div className='hidden sm:flex sm:absolute items-center justify-end bottom-0 right-2 xl:right-4 sm:w-auto sm:h-auto w-full h-full'>
             <div className="flex   gap-2 item-center justify-center flex-col">
        <div className="flex items-center justify-center rotate-[-90]">
          <img src={linkedin} alt="linkedin" className="w-4 h-4 sm:w-5 sm:h-5"/>
        </div>
        <div className="flex items-center justify-center rotate-[-90]">
          <img src={instagram} alt="instagram" className="w-4 h-4 sm:w-5 sm:h-5"/>
        </div>
        <div className="flex items-center justify-center rotate-[-90]">
          <img src={twitter} alt="twitter" className="w-4 h-4 sm:w-5 sm:h-5"/>
        </div>
        <div className="flex items-center justify-center rotate-[-90]">
          <img src={line} alt="line" className="w-6 h-6 sm:w-8 sm:h-8"/>
        </div>
     </div></div>
           </div>
     </div>
     {modal ? (
          <section className="modal__bg">
            <div className="modal__align">
              <div className="modal__content" >
                <IoCloseOutline
                  className="modal__close"
                  arial-label="Close modal"
                  onClick={()=>{setModal()}}
                />
                <div className="modal__video-align">
                  {videoLoading ? (
                    <div className="modal__spinner ">
                      <BiLoaderAlt
                        className="modal__spinner-style animate-spin"
                        fadein="none"
                      />
                    </div>
                  ) : null}
                  <video
                    className="modal__video-style"
                    onLoad={spinner}
                    loading="lazy"
                    src={video}
                    autoPlay
                    loop
                  ></video>
                </div>
              </div>
            </div>
          </section>
        ) : null}
    </section>
  )
}

export default HeroPage