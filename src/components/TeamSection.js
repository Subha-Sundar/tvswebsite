// src/components/TeamSection.js
import React from 'react';

const teamMembers = [
  { name: 'Jai Srinivas', status: 'In work', experience: 5, service: 'Scanners', rating: 4.5, img: '/profile.png' },
  { name: 'Vijay Malik', status: 'Active', experience: 5, service: 'Printers', rating: 4.7, img: '/profile.png' },
  { name: 'Harsah', status: 'Active', experience: 5, service: 'Sensor', rating: 4.7, img: '/profile.png' },
  { name: 'Flyn Jerry', status: 'Active', experience: 5, service: 'Scanners', rating: 4.7, img: '/profile.png' },
  { name: 'Flyn Jerry', status: 'Active', experience: 5, service: 'Scanners', rating: 4.7, img: '/profile.png' },
  { name: 'Flyn Jerry', status: 'Active', experience: 5, service: 'Scanners', rating: 4.7, img: '/profile.png' },
  { name: 'Flyn Jerry', status: 'Active', experience: 5, service: 'Scanners', rating: 4.7, img: '/profile.png' },
];

const TeamSection = () => {
  return (
    <section className="max-w-7xl mx-auto p-6">
      <h2 className="text-3xl font-bold text-gray-800 mb-6">Our <span className="text-blue-500">Team</span></h2>
      <div className="flex space-x-4 overflow-x-scroll scrollbar-hide bg-blue-100 p-4 rounded-lg">
        {teamMembers.map((member, index) => (
          <div key={index} className="bg-white shadow-lg rounded-lg p-4 flex-shrink-0 w-64">
            <img src={member.img} alt={member.name} className="w-18 h-20 squared-full mx-auto mb-4" />
            <div className="text-center">
              <h3 className="text-xl font-semibold text-gray-800">{member.name}</h3>
              <p className="text-gray-600">{member.status}</p>
              <p className="text-gray-500 text-sm">{member.experience} years of experience</p>
              <p className="text-gray-500 text-sm mb-2">Service: {member.service}</p>
              <div className="flex justify-center space-x-1">
                {[...Array(Math.floor(member.rating))].map((_, i) => (
                  <span key={i} className="text-yellow-400">&#9733;</span>
                ))}
                {member.rating % 1 !== 0 && (
                  <span className="text-yellow-400">&#9733;</span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TeamSection;
