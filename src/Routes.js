import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import Nav from "./components/Nav";
import Shop from "./components/Shop";

const Routes = () => {
  return (
    <BrowserRouter>
      <Nav />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/shop" component={Shop} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
