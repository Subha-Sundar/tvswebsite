import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route,} from 'react-router-dom';
import Header from './components/Header';
import StatusView from './components/StatusView';
import MapView from './components/MapView';
import EngineerTable from './components/EngineerTable';
import StickyHeader from './components/StickyHeader';
import Login from './components/Login';

function App() {
  // const [isLoggedIn, setIsLoggedIn] = useState(false);

  const [token, setToken] = useState(null);
  useEffect(() => {
    setToken(localStorage.getItem("token"));
  },[]);
  
  const handleLogout = () => {
    localStorage.removeItem("token");
    setToken(null);
  };

  const handleLogin = () => {
    setToken(localStorage.getItem("token"));
  };

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route
            path="/"
            element={token ? (
              <>
                <StickyHeader userName="Shyam" userRole="Admin" onLogout={handleLogout} />
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
                </main>
              </>
            ) : (
              <Login onLogin={handleLogin} />
            )}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
