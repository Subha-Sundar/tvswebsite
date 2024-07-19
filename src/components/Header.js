// src/components/Header.js
import React from 'react';
// import { IoMdSettings } from "react-icons/io";

const Header = () => {
  return (
    <div>
      <div className="bg-blue-900 h-10 w-full"></div>
      <div className="flex justify-between items-center p-1">
        <div className="flex items-center space-x-2">
          <img src="/tvslogo.png" alt="TVS Logo" style={{ height: '4.25rem' }} />
        </div>
        <div className="flex items-center space-x-2 ">
          <div className="flex items-center space-x-2">
            <img src="/profile.png" alt="Shyam" className="h-12 w-12 rounded-full" />
            <div>
              <span className="block font-medium">Shyam</span>
              <span className="block text-gray-500">Admin</span>
            </div>
          </div>
          <div className="p-1">
            {/* <IoMdSettings /> */}
          </div>
        </div>
      </div>
      <div className="bg-blue-100">
        <div className="flex justify-between items-center mt-4">
          <div className='p-1'>
            <h1 className="text-6xl font-semibold">Locate Our</h1>
            <h1 className="text-6xl font-semibold text-blue-500">Service Engineers</h1>
            <h1 className="text-6xl font-semibold">Near you</h1>
          </div>
          <div className="relative h-35 w-full sm:w-auto sm:flex-1 ml-4">
            <img
              src="/collage.png"
              alt="Collage"
              className="h-full w-full object-cover" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
