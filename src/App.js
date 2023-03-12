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

function App() {
  return (
    <BrowserRouter>
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
    
    </BrowserRouter>
   
  );
}

export default App;
