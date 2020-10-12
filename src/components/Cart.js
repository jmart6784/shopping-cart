import React, { useContext } from "react";
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

  console.log(calculate(cart));

  if (calculate(cart) === undefined) {
    console.log("EMPTY&&&");
  } else {
    console.log("DDD");
  }

  return (
    <div id="cart-container">
      <h1>{cart.length === 0 ? "Your cart is Empty" : "My cart"}</h1>
      {cart.map((item) => (
        <div key={item.id}>
          <h3>
            Name: {item.name} Quantity: {item.quantity} Price:{" "}
            {item.price * item.quantity}
          </h3>
        </div>
      ))}
    </div>
  );
};

export default Cart;
