import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div id="home-container">
      <h1 id="home-title">Welcome to Odin Shop</h1>
      <h3 id="home-sub-title">Check out our products now!</h3>
      <Link id="home-link" to="/shop">
        Click here
      </Link>
    </div>
  );
};

export default Home;
