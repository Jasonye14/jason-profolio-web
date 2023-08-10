import React from "react";
import NavBar from "./components/NavBar";
import HeroSection from "./components/HeroSection";
import Services from "./components/Services";
import Works from "./components/Works";
//import Timeline from "./components/VerticalTimeLine";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import WorkExperience from "./pages/WorkExperience";
import About from "./components/About";
import BackgroundImage from "./components/BackgroundImage";
import Footer from "./components/Footer"

function App() {
  return (
    <>
      {/* <button type='button' onClick={handleThemeSwitch} className='fixed z-10 right-2 bg-indigo-500 text-large p-1 round-md'>
            {theme === 'dark' ? 'dark':'light'}
        </button> */}
      <Router>
        <div className="bg-white dark:bg-slate-900">
          <NavBar></NavBar>
          <div className="max-w-5xl mx-auto w-11/12">
            <Routes>

            <Route path="/" element={<>
                <BackgroundImage></BackgroundImage>
                <HeroSection></HeroSection>
                <About></About>
                <Works></Works>
                {/* <Timeline></Timeline> */}
                <Services></Services>
                <Footer></Footer>
                
              </>} />

            <Route path="/experience" element={<WorkExperience />} />

            </Routes>
          </div>
        </div>
      </Router>
    </>
  );
}

export default App;
