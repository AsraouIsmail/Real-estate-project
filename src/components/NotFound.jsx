/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { Link } from 'react-router-dom';
import './NotFound.css'

const NotFound = () => {
  return (
    <>
      <h1>404 Error Page ##</h1>
      <p class="zoom-area">
        <b>PAGE</b> does not exist ! a cool 404 page.
      </p>
      <section class="error-container">
        <span>4</span>
        <span>
          <span class="screen-reader-text">0</span>
        </span>
        <span>4</span>
      </section>
      <div class="link-container">
        <Link className="more-link" to="/home">
          Back to Home
        </Link>
      </div>
    </>
  );
}

export default NotFound