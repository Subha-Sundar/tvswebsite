import React, { useState, useEffect } from "react";
import axiosInstance from "../api";


const EngineerTable = () => {
  const [rowsToShow, setRowsToShow] = useState(10);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedEngineer, setSelectedEngineer] = useState(null);
  const [engineers, setEngineers] = useState([]);


  useEffect(() => {

   
    // Function to fetch user data
    const fetchUserDetails = async () => {
      try {
        const response = await axiosInstance.get('users_latlong/',
        {
          headers: {
            Authorization: `Token ${localStorage.getItem("token")}`,
          },
        });
        console.log('Users Response:', response.data);
        setEngineers(response.data);

      } catch (error) {
        console.error('Error fetching user data:', error);
        return [];
      }
    };

    fetchUserDetails();
  }, []);

  // Function to handle showing more rows
  const handleSeeMore = () => {
    setRowsToShow((prev) => Math.min(prev + 10, engineers.length));
  };

  // Function to handle showing fewer rows
  const handleSeeLess = () => {
    setRowsToShow((prev) => Math.max(prev - 10, 10));
  };

  // Handle search input change
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  // Handle search submission
  const handleSearchSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submission
    const engineer = engineers.find((e) => (e.firstName+" "+e.lastName).toLowerCase() === searchQuery.toLowerCase());
    setSelectedEngineer(engineer || null);
  };

  // Filter engineers based on search query
  const filteredEngineers = engineers.filter((engineer) =>
    (engineer.firstName+" "+engineer.lastName).toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Handle selecting an engineer from the autocomplete suggestions
  const handleSelectEngineer = (engineer) => {
    setSearchQuery(engineer.firstName+" "+engineer.lastName);
    setSelectedEngineer(engineer);
    // Clear the autocomplete suggestions
    setSearchQuery("");
  };

  // Handle closing the details card
  const handleCloseDetails = () => {
    setSelectedEngineer(null);
  };

  

  return (
    <div className="my-4">
      <h2 className="text-3xl font-bold">
        Engineers <span className="text-blue-500">Status</span>
      </h2>

      {/* Search Input */}
      <div className="relative mb-4">
        <form onSubmit={handleSearchSubmit}>
          <input
            type="text"
            value={searchQuery}
            onChange={handleSearchChange}
            placeholder="Search by name..."
            className="px-4 py-2 border border-gray-300 rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200 ease-in-out max-w-lg mx-auto pr-10 mt-2"
          />
        </form>
        {/* Autocomplete Suggestions */}
        {searchQuery && (
          <div className="absolute bg-white border border-gray-300 rounded-lg shadow-lg mt-1 w-full z-10">
            {filteredEngineers.map((engineer, index) => (
              <div
                key={index}
                className="px-4 py-2 cursor-pointer hover:bg-gray-200"
                onClick={() => handleSelectEngineer(engineer)}
              >
                {engineer.firstName+' '+engineer.lastName}
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Selected Engineer Details */}
      {selectedEngineer && (
        <div className="mb-4 p-4 border border-gray-300 rounded-lg shadow-sm relative">
          <button
            onClick={handleCloseDetails}
            className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
          <h3 className="text-xl font-semibold">Details</h3>
          <p>
            <strong>Name:</strong> {selectedEngineer.firstName+' '+selectedEngineer.lastName}
          </p>
          <p>
            <strong>Username:</strong> {`${selectedEngineer.username}`}
          </p>
          <p>
            <strong>Location:</strong> Latitude - {selectedEngineer.latitude} Longitude - {selectedEngineer.longitude}
          </p>
          <p>
            <strong>Service:</strong> {selectedEngineer.serviceProviding}
          </p>
          <p>
            <strong>Contact:</strong> {selectedEngineer.phoneNumber}
          </p>
        </div>
      )}

      <div className="overflow-auto">
        <table className="min-w-full bg-white">
          <thead>
            <tr>
              <th className="px-4 py-2 border font-bold">Name</th>
              <th className="px-4 py-2 border font-bold">Status</th>
              <th className="px-4 py-2 border font-bold">Location</th>
              <th className="px-4 py-2 border font-bold">Service</th>
              <th className="px-4 py-2 border font-bold">Contact</th>
            </tr>
          </thead>
          <tbody>
            {filteredEngineers.slice(0, rowsToShow).map((engineer, index) => (
              <tr key={index} className="text-center">
                <td className="border px-4 py-2">{engineer.firstName+" "+engineer.lastName}</td>
                <td className="border px-4 py-2">{engineer.username}</td>
                <td className="border px-4 py-2">Latitude - {engineer.latitude} Longitude - {engineer.longitude}</td>
                <td className="border px-4 py-2">{engineer.serviceProviding}</td>
                <td className="border px-4 py-2">{engineer.phoneNumber}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="mt-4 text-center">
        {rowsToShow < filteredEngineers.length && (
          <button
            onClick={handleSeeMore}
            className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200 ease-in-out"
          >
            See More
          </button>
        )}
        {rowsToShow > 10 && (
          <button
            onClick={handleSeeLess}
            className="px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500 ml-4 transition duration-200 ease-in-out"
          >
            See Less
          </button>
        )}
      </div>
    </div>
  );
};

export default EngineerTable;
