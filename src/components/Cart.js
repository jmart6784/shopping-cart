import React, { useContext } from "react";
import { Link } from "react-router-dom";
import CartContext from "./context/CartContext";

const Cart = () => {
  const [cart, setCart] = useContext(CartContext);

  const calculate = (cart) => {
    if (cart.length !== 0) {
      let totals = [];

      cart.forEach((item) => {
        let singleTotal = item.price * item.quantity;
        totals.push(singleTotal);
      });

      return totals.reduce((a, b) => a + b, 0);
    }
  };

  return (
    <div id="cart-container">
      <h1 className="cart-page-title">
        {cart.length === 0 ? "Your cart is Empty" : "My cart"}
      </h1>
      <div className="cart-items-container">
        {cart.map((item) => (
          <div className="cart-item-div" key={item.id}>
            <div
              className="cart-item-image"
              style={{
                backgroundImage: `url(${item.image})`,
              }}
            ></div>
            <h3 className="cart-item-details">
              {item.name} QTY: {item.quantity} Price:{" "}
              {item.price * item.quantity}
            </h3>
          </div>
        ))}
      </div>

      {calculate(cart) !== undefined ? (
        <h2 className="cart-total">{"Total: $" + calculate(cart)}</h2>
      ) : (
        ""
      )}

      {cart.length !== 0 ? (
        <Link
          onClick={() => setCart([])}
          to="/thankyou"
          className="checkout-link"
        >
          Checkout
        </Link>
      ) : null}
    </div>
  );
};

export default Cart;
