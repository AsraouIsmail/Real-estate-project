import React from 'react'
import apprt1 from '../assets/appart-1.jpg';
import apprt2 from "../assets/appart-2.jpg";
import apprt3 from "../assets/appart-3.jpg";
import appart4 from "../assets/apprt4.jpg"
import appart5 from "../assets/apprt5.jpg";
import appart6 from "../assets/apprt6.jpg";
import './Best.css'


const Best = () => {
  return (
    <div className="best">
      <h1 className="animate__animated animate__backInDown animate__infinite	">
        Find Best Rated Properties
      </h1>
      <div>
        <p>
          <span className="bold">All</span>
        </p>
        <p>Commercial</p>
        <p>Residential</p>
        <p>Agricultural</p>
      </div>
      <div className="container animate__animated animate__slideInLeft animate__repeat-2">
        <img src={appart4} alt="" />
        <img src={appart5} alt="" />
        <img src={appart6} alt="" />
      </div>
      <div className="container animate__animated animate__slideInLeft animate__repeat-2">
        <img src={apprt1} alt="" />
        <img src={apprt2} alt="" />
        <img src={apprt3} alt="" />
      </div>
      <button className="btn">View All</button>
    </div>
  );
}

export default Best