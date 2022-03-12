/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-unused-vars */
import React, {useState} from 'react'
import { Link } from 'react-router-dom';
import { HiMenuAlt4 } from "react-icons/hi";
import { FaRegTimesCircle } from "react-icons/fa";
import { BsFillHouseFill } from "react-icons/bs";
import "animate.css";
import './Navbar.css';

const Navbar = () => {

  const [toggle, setToggle] = useState(false);


  const handleToggle = () =>  {
    setToggle(!toggle);
  }
  return (
    <div className="navbar">
      <div className="container">
        <h1 className="animate__animated animate__bounceInDown">
          <span>
            <BsFillHouseFill />
            Real
          </span>
          Estate
        </h1>
        <Link to="/login">
           <button className="btn animate__animated animate__flash">
          Sign In
        </button>
        </Link>
       
        <ul className={toggle ? "nav-menu active" : "nav-menu"}>
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/login">Sign In</Link>
          </li>
          <li>
            <Link to="/featured">Featured Luxury</Link>
          </li>
          <li>
            <Link to="/best">Best Appartement</Link>
          </li>
        </ul>
        <div className="hamburger" onClick={handleToggle}>
          {toggle ? (
            <FaRegTimesCircle className="icon " />
          ) : (
            <HiMenuAlt4 className="icon" />
          )}
        </div>
      </div>
    </div>
  );
}

export default Navbar