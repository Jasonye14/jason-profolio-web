import React, { useState, useEffect } from 'react'
import { BsFillMoonStarsFill, BsSun } from "react-icons/bs"

function NavBar() {
  const [theme, setTheme] = useState(null);

  useEffect(() => {
    if(window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setTheme('light');
    } else {
      setTheme('dark');
    }
  }, []);

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <nav className="py-10 mb-12 flex justify-between dark:text-white">
      <h1 className="font-burtons text-xl pl-10">JY</h1>
      <ul className="flex items-center">
        <li>
            { theme === 'light' ? 
            <BsFillMoonStarsFill
                onClick={toggleTheme}
                className="cursor-pointer text-2xl"
            />
            :
            <BsSun
                onClick={toggleTheme}
                className="cursor-pointer text-2xl"
            />
            }
        </li>
        <li className='pr-5'>
          <a
            className="bg-gradient-to-r from-cyan-500 text- to-teal-500 text-white px-4 py-2 border-none rounded-md ml-8"
            href="#"
          >
            Resume
          </a>
        </li>
      </ul>
    </nav>
  )
}

export default NavBar;
