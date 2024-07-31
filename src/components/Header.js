// src/components/Header.js
import React from "react";

const Header = () => {
  return (
    <div className="bg-blue-100">
      <div className="flex justify-between items-center mt-4">
        <div className="p-1">
          <h1 className="text-6xl font-semibold">Locate Our</h1>
          <h1 className="text-6xl font-semibold text-blue-500">
            Service Engineers
          </h1>
          <h1 className="text-6xl font-semibold">Near you</h1>
        </div>
        <div className="relative h-35 w-full sm:w-auto sm:flex-1 ml-4">
          <img
            src="/collage.png"
            alt="Collage"
            className="h-full w-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
