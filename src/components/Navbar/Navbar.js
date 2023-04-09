import React, { useRef, useContext, useState, useEffect } from 'react';
import {FaRegTimesCircle,FaBars} from "react-icons/fa";
import { useNavigate,Link } from 'react-router-dom';
import styles from "./navbar.css";


function Navbar() {

    const navigate = useNavigate();

 
    const toHome=(e)=>{
      e.preventDefault();
      navigate('/');
    }

    const navRef = useRef();
    const showNavbar = () => {
        navRef.current.classList.toggle("responsive");
    };


  return (
    <div className='navbar_fixed'>
    <div className="container1">
      <h onClick={toHome}>Create<span>Resume</span></h>
      <nav className="Nav0" ref={navRef} >
      <ul className="links">
        <Link to="/" className="home"><li>Home</li></Link>
        <Link to="/Header" className="Header"><li>Create Resume</li></Link>
        <Link to="/About" className="about"><li>About Us</li></Link>
        <Link to="/Contactus" className="contactus"><li>Contact Us</li></Link>
        
        </ul>
        <button className="nav-btn nav-close-btn" onClick={showNavbar}>
        <FaRegTimesCircle/>
        </button>
      </nav>
        <button className="nav-btn" onClick={showNavbar}>
            <FaBars/>
        </button>
    </div>
    </div>
  )
}

export default Navbar;



