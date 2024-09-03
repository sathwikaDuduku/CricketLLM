import React from 'react';
import { Link } from 'react-router-dom';
import './style.css'; // Ensure correct path to your CSS file
import 'boxicons/css/boxicons.min.css';

const Sidebar = ({ isSidebarOpen, toggleSidebar }) => {
  return (
    <nav className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
      <div className="logo_details">
        <i className="bx bxl-audible icon"></i> {/* Corrected icon class */}
        <div className="logo_name">Cric Bee</div>
        <i className="bx bx-menu" id="btn" onClick={toggleSidebar}></i>
      </div>
      <ul className="nav-list">
        <li>
          <Link to="/">
            <i className="bx bx-home"></i>
            <span className="link_name">Home</span>
          </Link>
        </li>
        <li>
          <Link to="/PlayerProfile">
            <i className="bx bx-user"></i>
            <span className="link_name">Players Profile</span>
          </Link>
        </li>
        <li>
          <Link to="/CricGPT">
            <i className="bx bx-chat"></i>
            <span className="link_name">CricGPT</span>
          </Link>
        </li>
        {/* <li>
          <Link to="/livescore">
            <i className="bx bx-pie-chart-alt-2"></i>
            <span className="link_name">Live Score</span>
          </Link>
        </li> */}
        <li>
          <Link to="/High">
            <i className="bx bx-video"></i>
            <span className="link_name">Highlights</span>
          </Link>
        </li>
        <li>
          <Link to="/Teams">
            <i className="bx bx-group"></i>
            <span className="link_name">Teams</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Sidebar;
