import React, { useContext } from "react";
import { Link } from "react-router-dom";
import CartContext from "./context/CartContext";

const Nav = () => {
  const [cart, setCart] = useContext(CartContext);

  return (
    <div id="navbar">
      <div></div>
      <Link id="nav-home" className="nav-link" to="/">
        Odin Shop
      </Link>

      <div id="nav-r-links">
        <Link className="nav-link nav-shop" to="/cart">
          {cart.length === 0 ? "Cart" : `Cart(${cart.length})`}
        </Link>
        <Link className="nav-link nav-shop" to="/shop">
          Shop
        </Link>
      </div>
    </div>
  );
};

export default Nav;
