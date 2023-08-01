import React, { useEffect, useState } from 'react'
import NavBar from './components/NavBar'
import HeroSection from './components/HeroSection'
import Services from './components/Services'
import Works from './components/Works'


function App() {
   return (
    <>
        {/* <button type='button' onClick={handleThemeSwitch} className='fixed z-10 right-2 bg-indigo-500 text-large p-1 round-md'>
            {theme === 'dark' ? 'dark':'light'}
        </button> */}
        <div className='bg-white dark:bg-slate-900'>
            <NavBar></NavBar>
            <div className='max-w-5xl mx-auto w-11/12'>
                <HeroSection></HeroSection>
                <Services></Services>
                <Works></Works>
            </div>
        </div>
    </>
    
  )
}

export default App