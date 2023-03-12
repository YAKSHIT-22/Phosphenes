import React from 'react'
import prize from '../assets/prize.svg'
const Mentors = () => {
  return (
    <section className="w-screen h-full bg-black" id="mentors">
    <div className="w-full h-full flex items-center justify-center py-4 lg:p-2">
      <div className="w-full h-full flex items-start justify-center flex-row py-2 lg:p-2">
        <div className="w-full h-full flex items-start justify-start lg:w-[65%] flex-col p-6">
        <div className="flex items-center justify-start">
        <h1 className='text-[2rem]  xs:text-[2.7rem] s:text-5xl sm:text-[4rem] md:text-[5rem] lg:text-8xl xl:text-9xl 2xl:text-[154px] font-black sm:leading-tight text-[#ffffff] whitespace-nowrap'>MENTORS <span className="text-[#d5FF40]">.</span></h1>
        </div>
        <div className='xs:flex items-center justify-center flex-row w-full md:w-[75%] lg:w-full  my-6'>
                      <p className='font-normal text-xs text-white sm:text-sm lg:text-lg '>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p>
            </div>
            <div className="flex items-center justify-start w-full flex-col max-w-3xl lg:w-full">
                <div className="flex items-center justify-between w-full flex-row border-t-2 border-white border-b-2 px-1 py-6">
                <h1 className="flex items-center justify-center gap-4 text-2xl xs:text-3xl s:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-[#ffffff] font-black">1ST</h1>
                <h1 className="flex items-center justify-center gap-4 text-2xl xs:text-3xl s:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-[#ffffff] font-black">$100000</h1>
                </div>
                <div className="flex items-center justify-between w-full flex-row border-white px-1 py-6">
                <h1 className="flex items-center justify-center gap-4 text-2xl xs:text-3xl s:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-[#ffffff] font-black">2ND</h1>
                <h1 className="flex items-center justify-center gap-4 text-2xl xs:text-3xl s:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-[#ffffff] font-black">$75000</h1>
                </div>
                <div className="flex items-center justify-between w-full flex-row border-t-2 border-white border-b-2 px-1 py-6">
                <h1 className="flex items-center justify-center gap-4 text-2xl xs:text-3xl s:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-[#ffffff] font-black">3RD</h1>
                <h1 className="flex items-center justify-center gap-4 text-2xl xs:text-3xl s:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-[#ffffff] font-black">$50000</h1>
                </div>
            </div>
        </div>
        <div className="lg:flex hidden items-center justify-start w-[35%] flex-col p-4">
              <div className="flex items-center justify-center p-2">
                <img src={prize} alt="prize" className="h-80 w-80"/>
              </div>
              <div className='flex items-center justify-center flex-row w-full sm:p-2 my-6'>
                      <p className='font-normal text-xs text-white sm:text-sm lg:text-lg '>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p>
            </div>
        </div>
        </div>
      </div>
  
  </section>
  )
}

export default Mentors