import React from "react";
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from "react-router-dom";
import "../../Style/Sidebar.css";

function Sidebar() {
    
    return (
      <nav className="sidebar">
        <button className="hamburger">
          <div><MenuIcon/></div>
          
        </button>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/services">Services</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>
    );
  }
  export default Sidebar;