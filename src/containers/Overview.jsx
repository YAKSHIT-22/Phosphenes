import React from 'react'
import bg from '../assets/bgflip.jpg'
import play from '../assets/play_2.svg'
const Overview = () => {
  return (
    <section className="w-screen h-full bg-[#D5FF40] flex items-center justify-center">
      <div className="w-full h-full flex items-center justify-center">
        <div className="w-full h-full flex items-center justify-center flex-col ">
                   <div className="flex items-center justify-center max-w-6xl p-2 pb-0 md:p-4 md:pb-0">
                           <div className="flex items-center justify-center sm:p-4 pb-0 sm:pb-0 relative">
                            <div className="flex items-center justify-center relative p-2 pb-0 s:p-4 s:pb-0 sm:p-6 sm:pb-0">
                                <img src={bg} alt="bg" className="w-full h-full object-cover rounded-t-[56px] xs:rounded-t-[64px] sm:rounded-t-[104px] md:rounded-t-[112px]"/>
                                <img src={play} alt="play" className="h-14 w-14 xs:w-16 xs:h-16 s:h-20 s:w-20  sm:w-24 sm:h-24 lg:w-28 lg:h-28 absolute top-0 right-0"/>
                                </div>
                           </div>
                   </div>
                   <div className="flex items-center justify-center w-full bg-black">
                           <div className="flex items-center justify-center p-6"><marquee className="py-12"><h1 className="flex items-center justify-center  text-4xl xs:text-5xl sm:text-6xl md:text-7xl text-[#d5ff40] font-black">DESIGN YOUR IDEAS ✨ BUILD YOUR IDEAS</h1></marquee></div>
                   </div>
        </div>
      </div>
    </section>
  )
}

export default Overview