import React from "react";

const Nav = () => {
  return (
    <div id="navbar">
      <div></div>
      <a id="nav-home" className="nav-link" href="/">
        Odin Shop
      </a>
      <a id="nav-shop" className="nav-link" href="/shop">
        Shop
      </a>
    </div>
  );
};

export default Nav;
