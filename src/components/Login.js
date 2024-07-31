import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../api";

const Login = ({ onLogin }) => {
  const [isVisible, setIsVisible] = useState(true);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    const response = await axiosInstance.post(`login/`, {
      // header: {
      //   'Content-Type': 'application/json',
      //   'Access-Control-Allow-Origin': '*'

      // },
      username: e.target.username.value,
      password: e.target.password.value,
    });
    console.log(response.data);
    localStorage.setItem("token", response.data.token);
    
    onLogin();
    setIsVisible(false); // Hide the login form
    setTimeout(() => navigate("/"), 300); // Redirect after animation
  };

  return (
    <div className={`fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50 ${isVisible ? 'slide-in' : 'slide-out'}`}>
      <div className="bg-white p-6 rounded shadow-md space-y-4 max-w-sm w-full">
        <h1 className="text-3xl font-bold mb-4">Login</h1>
        <form onSubmit={handleLogin}>
          <div>
            <label htmlFor="username" className="block font-medium">
              Username
            </label>
            <input
              type="text"
              id="username"
              className="mt-1 block w-full border border-gray-300 rounded-md p-2"
              placeholder="Enter your username"
            />
          </div>
          <div>
            <label htmlFor="password" className="block font-medium">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="mt-1 block w-full border border-gray-300 rounded-md p-2"
              placeholder="Enter your password"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition duration-150"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
