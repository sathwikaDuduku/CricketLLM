import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './Sidebar';
import Home from './Home'; // Import the Home component
import CricGPT from './CricGPT';
import High from './High';
import Teams from './Teams';
import PlayerProfile from './PlayerProfile';
import './style.css';
import 'boxicons/css/boxicons.min.css';

const App = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <Router>
      <div className={`App ${isSidebarOpen ? 'sidebar-open' : ''}`}>
        <Sidebar isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
        <section className="page-content">
          <Routes>
            <Route path="/playerprofile" element={<PlayerProfile />} />
            <Route path="/cricgpt" element={<CricGPT />} />
            {/* <Route path="/livescore" element={<div className="text">Live Score</div>} /> */}
            <Route path="/high" element={<High />} />
            <Route path="/Teams" element={<Teams />} />
            {/* <Route path="/teams" element={<div className="text">Teams</div>} /> */}
            <Route path="/" element={<Home />} /> {/* Set Home as the default route */}
          </Routes>
        </section>
      </div>
    </Router>
  );
};

export default App;
