import React, { useState } from "react";
import { HashRouter, Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import Nav from "./components/Nav";
import Shop from "./components/Shop";
import Cart from "./components/Cart";
import ThankYou from "./components/ThankYou";
import CartContext from "./components/context/CartContext";

const Routes = () => {
  const [cart, setCart] = useState([]);

  return (
    <CartContext.Provider value={[cart, setCart]}>
      <HashRouter>
        <Nav />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/shop" component={Shop} />
          <Route exact path="/cart" component={Cart} />
          <Route exact path="/thankyou" component={ThankYou} />
        </Switch>
      </HashRouter>
    </CartContext.Provider>
  );
};

export default Routes;
