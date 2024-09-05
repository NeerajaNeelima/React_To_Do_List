import React from 'react';
import { IoMdMenu } from "react-icons/io";
import { CiSearch } from "react-icons/ci";
import { CiGrid41 } from "react-icons/ci";
import { BsMoonStars, BsSun } from "react-icons/bs";
import logo from '../assets/logo.png';

const Navbar = ({ toggleSidebar, isDarkMode, toggleTheme }) => {
  return (
    <div className='bg-transparent flex justify-between mx-3 my-2'>
      <div className='flex gap-3 items-center p-2'>
        <IoMdMenu onClick={toggleSidebar} className={`text-3xl ${isDarkMode ? 'text-white cursor-pointer' : 'text-black cursor-pointer'}`} />
        <img src={logo} alt="Logo" className='ml-2' />
      </div>
      
      <div className='flex gap-3 items-center space-x-4'>
        <CiSearch className={`text-2xl ${isDarkMode ? 'text-white' : 'text-black'}`} />
        <CiGrid41 className={`text-2xl ${isDarkMode ? 'text-white' : 'text-black'}`} />
        
        {isDarkMode ? (
          <BsSun onClick={toggleTheme} className='text-white text-2xl cursor-pointer' />
        ) : (
          <BsMoonStars onClick={toggleTheme} className='text-black text-2xl cursor-pointer' />
        )}
      </div>
    </div>  
  );
};

export default Navbar;
