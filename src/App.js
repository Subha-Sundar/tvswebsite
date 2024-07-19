// src/App.js
import React from 'react';
import Header from './components/Header';
import StatusView from './components/StatusView';
import MapView from './components/MapView';
import EngineerTable from './components/EngineerTable';
import TeamSection from './components/TeamSection';

function App() {
  return (
    <div className="App">
      <Header />
      <main className="p-4 space-y-4">
        <div className="flex space-x-4">
          <div className="flex-1">
            <StatusView />
          </div>
          <div className="flex-1">
            <MapView />
          </div>
        </div>
        <EngineerTable />
        <TeamSection />
      </main>
    </div>
  );
}

export default App;
