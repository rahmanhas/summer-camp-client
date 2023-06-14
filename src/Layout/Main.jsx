import React, { useState } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import NavBar from '../Components/NavBar';
import Footer from '../Components/Footer';

const Main = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [mode, setMode] = useState("dark");
  const location = useLocation();
  const navigate = useNavigate();

  const toggleMode = () => {
    setIsDarkMode(!isDarkMode);
    navigate(location.pathname, { state: { isDarkMode: !isDarkMode } });
    if(isDarkMode){
        setMode("dark")
    }else{
        setMode("light")

    }
  };

  const themeClass = isDarkMode ? 'bg-gray-900 text-white' : 'bg-white text-black';
  
  return (
    <div className={`min-h-screen ${themeClass}`}>
      <button className="absolute right-10 top-2 md:top-2 md:right-20 bg-blue-500 dark:bg-blue-950 rounded-md px-2" onClick={toggleMode}>
        {mode}
      </button>

      <div className='max-w-screen-2xl min-w-screen-sm w-[90%] mx-auto'>
        <NavBar isDarkMode={isDarkMode} />
        <Outlet />
        <Footer isDarkMode={isDarkMode} />
      </div>
    </div>
  );
};

export default Main;
