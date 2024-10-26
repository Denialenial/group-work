import React from 'react';  
import { Link } from 'react-router-dom';   
import './NavBar.css';  

const NavBar = () => {  
  return (  
    <nav className="NavBar">  
      <div className="NavDiv">  
        <div className="Logo">  
          <Link to="/">DenialCoding</Link>  
        </div>  
        <Link to="/home">HOME</Link>  
        <Link to="/html">HTML</Link>  
        <Link to="/css">CSS</Link>  
        <Link to="/cpp">C++</Link>  
        <Link to="/python">PYTHON</Link>  
        <button>  
          <Link to="/form">RECORDS</Link> {/* Updated path to '/form' */}  
        </button>  
      </div>  
    </nav>  
  );  
};  

export default NavBar;