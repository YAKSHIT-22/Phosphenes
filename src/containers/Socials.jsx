import React from 'react'
import { Link } from 'react-router-dom'
import instagram from '../assets/instagram.jpeg'
import linkedin from '../assets/linkedin.jpeg'
const Socials = () => {
  return (
    <section className="w-screen h-full bg-black" id="team">
    <div className="w-full h-full flex items-start justify-start flex-col p-6">
        <div className="flex items-center justify-start">
        <h1 className='text-[2rem]  xs:text-[2.7rem] s:text-5xl sm:text-[4rem] md:text-[5rem] lg:text-8xl xl:text-9xl 2xl:text-[154px] font-black sm:leading-tight text-[#ffffff] whitespace-nowrap'>SOCIALS <span className="text-[#d5FF40]">.</span></h1>
        </div>
        <div className='flex md:items-start justify-center  md:flex-row flex-col py-6 mt-12 w-full h-full'>
        <div className='flex items-center justify-center gap-6 flex-1 flex-row overflow-hidden'>
           <Link to="https://instagram.com/codechef_cuiet?igshid=YmMyMTA2M2Y=" className='flex items-center justify-center s:h-[35rem] h-[30rem] w-[15rem] s:w-[17.5rem]'>
                 <img src={instagram} alt="instagram" className='w-full h-full border border-white rounded-3xl '/>
           </Link>
           </div>
           <div className='flex items-center justify-center flex-1 py-4 md:p-4 flex-col gap-4'>
           <div className='w-full h-full flex items-center md:items-start justify-center flex-col gap-4'>
                 <div className='flex items-center justify-start'>
                 <h1 className='text-[2.25rem]  xs:text-[2.7rem] sm:text-5xl lg:text-6xl font-black sm:leading-tight text-[#ffffff] whitespace-nowrap'>FOLLOW US <span className="text-[#d5FF40]">.</span></h1>
                 </div>
                 <div className='flex items-center justify-start'>
                 <h1 className='text-[2rem]  lg:text-[2.7rem] font-black sm:leading-tight text-[#ffffff] whitespace-nowrap'>INSTAGRAM <span className="text-[#d5FF40]">.</span></h1>
                 </div>
                 <div className='flex items-center justify-start'>
                 <Link to="https://instagram.com/codechef_cuiet?igshid=YmMyMTA2M2Y=" className='flex items-center justify-center'>
                 <h1 className='text-[1.5rem]  lg:text-[2.7rem] font-black sm:leading-tight text-[#ffffff] whitespace-nowrap'>@codechef_cuiet <span className="text-[#d5FF40]">.</span></h1>
                 </Link>
                 </div>
           </div>
           </div>
           
        </div>
        <div className='flex md:items-start justify-center  md:flex-row flex-col-reverse py-6 mb-12 w-full h-full'>
        
           <div className='flex items-center justify-center flex-1 py-4 md:p-4 flex-col gap-4'>
           <div className='w-full h-full flex items-center md:items-end justify-center flex-col gap-4'>
                 <div className='flex items-center justify-start'>
                 <h1 className='text-[2.25rem]  xs:text-[2.7rem] sm:text-5xl lg:text-6xl font-black sm:leading-tight text-[#ffffff] whitespace-nowrap'>FOLLOW US <span className="text-[#d5FF40]">.</span></h1>
                 </div>
                 <div className='flex items-center justify-start'>
                 <h1 className='text-[2rem]  lg:text-[2.7rem] font-black sm:leading-tight text-[#ffffff] whitespace-nowrap'>LINKEDIN <span className="text-[#d5FF40]">.</span></h1>
                 </div>
                 <div className='flex items-center justify-start'>
                 <Link to="https://www.linkedin.com/company/codechef-cuiet/" className='flex items-center justify-center'>
                 <h1 className='text-[1.5rem]  lg:text-[2.7rem] font-black sm:leading-tight text-[#ffffff] whitespace-nowrap'>@codechef_cuiet <span className="text-[#d5FF40]">.</span></h1>
                 </Link>
                 </div>
           </div>
           </div>
           <div className='flex items-center justify-center gap-6 flex-1 flex-row'>
        <Link to="https://www.linkedin.com/company/codechef-cuiet/" className='flex items-center justify-center s:h-[32rem] h-[28rem] w-[14rem] s:w-[16rem]'>
                 <img src={linkedin} alt="linkedin" className='w-full h-full border border-white rounded-3xl '/>
           </Link>
           </div>
        </div>
     </div>   
    </section>
  )
}

export default Socials