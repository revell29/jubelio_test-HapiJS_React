import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import ProductDetail from "../pages/ProductDetail";
import { Navbar } from "../components/Navbar";

export default function Routes() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/product/:id" component={ProductDetail} />
      </Switch>
    </Router>
  );
}
