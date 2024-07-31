import React, { useState } from "react";
import { IoPower } from "react-icons/io5"; // Import the power button icon from react-icons

const StickyHeader = ({ userName = "Shyam", userRole = "Admin", onLogout }) => {
  const [showLogoutOptions, setShowLogoutOptions] = useState(false);


  const handleLogout = () => {
    setShowLogoutOptions(false); // Hide logout options
    if (onLogout) onLogout(); // Call the onLogout prop if provided
    // navigate("/login"); // Redirect to the login page
  };

  return (
    <div className="sticky top-0 z-50 bg-white shadow-lg">
      <div className="bg-blue-900 h-10 w-full"></div>
      <div className="flex justify-between items-center p-1 bg-white shadow-md">
        <div className="flex items-center space-x-2">
          <img
            src="/tvslogo.png"
            alt="TVS Logo"
            style={{ height: "4.25rem" }}
          />
        </div>
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <img
              src="/profile.png"
              alt={userName}
              className="h-12 w-12 rounded-full"
            />
            <div>
              <span className="block font-medium">{userName}</span>
              <span className="block text-gray-500">{userRole}</span>
            </div>
          </div>
          <div className="relative">
            <IoPower
              className="h-10 w-10 text-gray-600 cursor-pointer hover:text-gray-800 transition duration-150"
              onClick={() => setShowLogoutOptions(!showLogoutOptions)} // Toggle logout options
            />
            {showLogoutOptions && (
              <div className="absolute right-0 top-full mt-2 bg-white border border-gray-300 shadow-md rounded-md">
                <button
                  onClick={handleLogout}
                  className="block w-full text-left px-4 py-2 text-red-600 hover:bg-gray-100"
                >
                  Logout
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default StickyHeader;
