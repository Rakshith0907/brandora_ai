import React from "react";
import "./Navbar.css"
 
const Navbar = ({toggleTheme, darkMode, setDarkMode, setLoggedIn}) => {
  
  // const logout = () => {
  //   confirm("Are you sure you want to logout?") ? (setLoggedIn(false)) : null ;
  // }
   
  return (
    <div className="navbar-main">
      <div className="navbar-components">
        <div className="navbar-logo">
          <img src="/images/comp-logo-bg.png" alt="imgloading" />
          <h4>brandora<span id="navbar-ai">.ai</span></h4>
        </div>
        <div className="navbar-links">
          <a href="#home">Home</a>
          <a href="#services">Services</a>
          <a href="#work">Our Work</a>
          <a href="#contact">Contact Us</a>
        </div>
        <div className="navbar-buttons">
          <button onClick={toggleTheme} className="btn btn-light">
            {darkMode ? <i className={`fa-regular fa-sun`}></i> : <i className={`fa-regular fa-moon`}></i>}</button>
          <button className="btn btn-primary"><a href="#contact">Connect <i className="fa-solid fa-arrow-right"></i></a> </button>
          {/* <button onClick={logout} className="btn btn-danger">Logout</button> */}
        </div>
      </div>
    </div>
  );
};  

export default Navbar;
