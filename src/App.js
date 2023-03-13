import Footer from "./components/Footer";
import HeroPage from "./containers/HeroPage";
import Judges from "./containers/Judges";
import Mentors from "./containers/Mentors";
import OurTeam from "./containers/OurTeam";
import Overview from "./containers/Overview";
import Prizes from "./containers/Prizes";
import { BrowserRouter } from "react-router-dom";
import React from "react";
import AnimatedCursor from "react-animated-cursor";
import star2 from './assets/star2.svg'
function App() {
  const [loading, setLoading] = React.useState(true);
  React.useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  }, []);
  return (
    <>
    {loading && window.innerWidth>768 ? (<section className="md:flex hidden w-screen h-full overflow-hidden relative bg-black">
      <div className="h-screen flex items-center justify-center w-full ">
                           <div className="flex w-full h-full items-center  justify-center py-0 sm:py-2 md:py-4 lg:py-6"><marquee className="py-10 xs:py-12 rotate-[45deg] w-full h-full" scrollamount="15"><h1 className="flex items-center justify-center gap-4 text-2xl xs:text-3xl s:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-[#d5ff40] font-black">DESIGN YOUR IDEAS <img className='w-8 h-8' src={star2} alt="star2"/> BUILD YOUR IDEAS</h1></marquee></div>
                   </div>
      <div className="h-screen flex items-center justify-center w-full absolute top-0 bottom-0 left-0 right-0 ">
                           <div className="flex w-full h-full items-center  justify-center py-0 sm:py-2 md:py-4 lg:py-6"><marquee className="py-10 xs:py-12 rotate-[-45deg] w-full h-full" scrollamount="15"><h1 className="flex items-center justify-center gap-4 text-2xl xs:text-3xl s:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-[#d5ff40] font-black">DESIGN YOUR IDEAS <img className='w-8 h-8' src={star2} alt="star2"/> BUILD YOUR IDEAS</h1></marquee></div>
                   </div>
      <div className="h-screen flex items-center justify-center w-full absolute top-0 bottom-0 left-0 right-0 ">
                           <div className="flex w-full h-full items-center  justify-center py-0 sm:py-2 md:py-4 lg:py-6"><marquee className="py-10 xs:py-12 rotate-[-135deg] w-full h-full" scrollamount="15"><h1 className="flex items-center justify-center gap-4 text-2xl xs:text-3xl s:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-[#d5ff40] font-black">DESIGN YOUR IDEAS <img className='w-8 h-8' src={star2} alt="star2"/> BUILD YOUR IDEAS</h1></marquee></div>
                   </div>
      <div className="h-screen flex items-center justify-center w-full absolute top-0 bottom-0 left-0 right-0 ">
                           <div className="flex w-full h-full items-center  justify-center py-0 sm:py-2 md:py-4 lg:py-6"><marquee className="py-10 xs:py-12 rotate-[135deg] w-full h-full" scrollamount="15"><h1 className="flex items-center justify-center gap-4 text-2xl xs:text-3xl s:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-[#d5ff40] font-black">DESIGN YOUR IDEAS <img className='w-8 h-8' src={star2} alt="star2"/> BUILD YOUR IDEAS</h1></marquee></div>
                   </div>
      </section>
      
      ) : ( <BrowserRouter>
    <AnimatedCursor 
      innerSize={8}
      outerSize={30}
      color="256, 256, 256"
      outerAlpha={.2}
      innerScale={0.7}
      outerScale={3}
      clickables={[
        'a',
        'input[type="text"]',
        'input[type="email"]',
        'input[type="number"]',
        'input[type="submit"]',
        'input[type="image"]',
        'label[for]',
        'select',
        'textarea',
        'button',
        '.link'
      ]} />
     <HeroPage/>
    <Overview/>
    <Prizes/>
    <Mentors/>
    <Judges/>
    <OurTeam/>
    <Footer/>
    
    </BrowserRouter>)}
   
   </>
  );
}

export default App;
