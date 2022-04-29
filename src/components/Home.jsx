import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import "animate.css";
import "./Home.css";

const Home = () => {
  return (
    <div className="hero">
      <div className="content">
        <h1 className="animate__animated animate__pulse animate__repeat-3">
          Find the perfect place
        </h1>
        <p className="search-text  animate__animated animate__bounce animate__repeat-3">
          Search the largest selection of luxury high-rise apartments,
          multi-family homes, and luxury homes.
        </p>
        <form className="search">
          <div>
            <input type="text" placeholder="Enter Keyword.." />
          </div>
          <div className="radio">
            <input type="radio"  value="Buy" />
            <label>Buy</label>
            <input type="radio"  value="Rent"/>
            <label>Rent</label>
            <button type="submit">
              <AiOutlineSearch className="icon" />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Home;
