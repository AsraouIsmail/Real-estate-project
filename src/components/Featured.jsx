/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import React from 'react'

import house1 from '../assets/house-1.jpg';
import bed1 from '../assets/bed-1.jpg';
import bed2 from '../assets/bed-2.jpg';
import kitchen from '../assets/kitchen-1.jpg'
import bathroom from '../assets/bath-1.jpg';

import bed3 from "../assets/bed-3.jpg";
import bed4 from "../assets/bed-4.jpg";
import house2 from "../assets/house-3.jpg";
import bathroom2 from "../assets/bath-2.jpg";
import livingroom from "../assets/living-room.jpg";
import './Featured.css'

const Featured = () => {
  return (
    <div className="featured">
      <h1 className="featured-text animate__animated animate__slideOutUp animate__infinite	infinite">
        Top Featured Listings
      </h1>
      <p className="featured-text">
        Selected listings by City, State, & Zip based on views.
      </p>
      <div className="container animate__animated animate__slideInLeft animate__repeat-2">
        <img className="span-3 image-grid-row-2" src={house1} alt="" />
        <img src={bed1} alt="" />
        <img src={bed2} alt="" />
        <img src={kitchen} alt="" />
        <img src={bathroom} alt="" />
        <div className="span-3 img-details">
          <div className="top">
            <h2>123 Acme St. Dallas, TX</h2>
            <p>House for Sale</p>
            <p className="price">$2,677,000</p>
          </div>
          <div className="info-grid">
            <div>
              <div className="info">
                <p className="bold">Bedrooms:</p>
                <p>5</p>
              </div>
              <div className="info">
                <p className="bold">Bathrooms:</p>
                <p>7</p>
              </div>
            </div>
            <div>
              <div className="info">
                <p className="bold">Square Feet:</p>
                <p>8,138</p>
              </div>
              <div className="info">
                <p className="bold">Est Payment:</p>
                <p>$14,797/mo</p>
              </div>
            </div>
          </div>
        </div>
        <div className="span-2 right-img-details">
          <p>
            A beautiful modern day home in the city with a full-size pool.
            Spacious and luxurious home located in Texas. Including media room,
            workout facility, and built-in sauna.
          </p>
          <button className="btn">View Listing</button>
        </div>
      </div>

      <div className="container animate__animated animate__slideInLeft animate__repeat-2">
        <img className="order-2" src={bed3} alt="" />
        <img className="order-3" src={bed4} alt="" />

        <img className="span-3 image-grid-row-2 order-1" src={house2} alt="" />

        <img className="order-4" src={bathroom2} alt="" />
        <img className="order-5" src={livingroom} alt="" />

        <div className="span-2 right-img-details order-7">
          <p>
            A beautiful modern day home in the city with a full-size pool.
            Spacious and luxurious home located in Texas. Including media room,
            workout facility, and built-in sauna.
          </p>
          <button className="btn">View Listing</button>
        </div>

        <div className="span-3 img-details order-6">
          <div className="top">
            <h2>123 Acme St. Dallas, TX</h2>
            <p>House for Sale</p>
            <p className="price">$2,677,000</p>
          </div>
          <div className="info-grid">
            <div>
              <div className="info">
                <p className="bold">Bedrooms:</p>
                <p>5</p>
              </div>
              <div className="info">
                <p className="bold">Bathrooms:</p>
                <p>7</p>
              </div>
            </div>
            <div>
              <div className="info">
                <p className="bold">Square Feet:</p>
                <p>8,138</p>
              </div>
              <div className="info">
                <p className="bold">Est Payment:</p>
                <p>$14,797/mo</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Featured