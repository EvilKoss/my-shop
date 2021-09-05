import React from "react";
import { Switch, Route } from "react-router-dom";

import Cart from "../../containers/Cart/Cart";
import Shop from "../../containers/Shop/Shop";
import AboutView from "../../containers/AboutView/AboutView";
import Navbar from "../../components/Navbar/Navbar";
import AdminView from "../../containers/AdminView/AdminView";
import AuthView from "../../components/AuthView/AuthView";

function AdminViews() {
  return (
    <Switch>
      <Route path="/admin" component={AdminView} />
    </Switch>
  );
}

function RegularViews() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Shop} />
        <Route path="/cart" component={Cart} />
        <Route path="/about" component={AboutView} />
        <Route path="/login" component={AuthView} />
        <Route component={() => <div>not found</div>} />
      </Switch>
    </>
  );
}

export default function AppLayout() {
  return (
    <div>
      <Switch>
        <Route path="/admin" component={AdminViews} />
        <Route path="/" component={RegularViews} />
      </Switch>
    </div>
  );
}
