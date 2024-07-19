// src/components/EngineerTable.js
import React from 'react';

const engineers = [
  { name: 'Abhi krish', status: 'In Work', location: 'Nanganallur', service: 'Printers', contact: '9846393972' },
  { name: 'Anath kumar', status: 'Active', location: 'Adambakkam', service: 'Scanners', contact: '8345268012' },
  { name: 'Bhairav', status: 'Active', location: 'Adambakkam', service: 'Scanners', contact: '8345268012' },
  { name: 'Dev Kunal', status: 'Active', location: 'Adambakkam', service: 'Scanners', contact: '8345268012' },
  { name: 'Flyn jerry', status: 'Active', location: 'Adambakkam', service: 'Scanners', contact: '8345268012' },
  { name: 'Ganesh Yadav', status: 'Active', location: 'Adambakkam', service: 'Scanners', contact: '8345268012' },
  { name: 'Anath kumar', status: 'Active', location: 'Adambakkam', service: 'Scanners', contact: '8345268012' },
  { name: 'Anath kumar', status: 'Active', location: 'Adambakkam', service: 'Scanners', contact: '8345268012' },
  { name: 'Anath kumar', status: 'Active', location: 'Adambakkam', service: 'Scanners', contact: '8345268012' },
  { name: 'Anath kumar', status: 'Active', location: 'Adambakkam', service: 'Scanners', contact: '8345268012' }
];

const EngineerTable = () => {
  return (
    <div className="my-4">
      <h2 className="text-3xl font-bold">Engineers <span className=' text-blue-500'>Status</span></h2>
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
            {engineers.map((engineer, index) => (
              <tr key={index} className="text-center">
                <td className="border px-4 py-2">{engineer.name}</td>
                <td className="border px-4 py-2">{engineer.status}</td>
                <td className="border px-4 py-2">{engineer.location}</td>
                <td className="border px-4 py-2">{engineer.service}</td>
                <td className="border px-4 py-2">{engineer.contact}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default EngineerTable;
