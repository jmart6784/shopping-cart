import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div id="navbar">
      <div></div>
      <Link id="nav-home" className="nav-link" to="/">
        Odin Shop
      </Link>

      <div id="nav-r-links">
        <Link className="nav-link nav-shop" to="/cart">
          Cart
        </Link>
        <Link className="nav-link nav-shop" to="/shop">
          Shop
        </Link>
      </div>
    </div>
  );
};

export default Nav;
