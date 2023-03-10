import Footer from "./components/Footer";
import HeroPage from "./containers/HeroPage";
import Judges from "./containers/Judges";
import Mentors from "./containers/Mentors";
import OurTeam from "./containers/OurTeam";
import Overview from "./containers/Overview";
import Prizes from "./containers/Prizes";
import { BrowserRouter } from "react-router-dom";
import React from "react";
function App() {
  return (
    <BrowserRouter>
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
