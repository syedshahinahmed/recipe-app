import React from "react";
import { HashRouter, Switch, Route } from "react-router-dom";
import App from "../App";
import Recipe from "./Recipe";

const Router = () => (
  <HashRouter>
    <Switch>
      <Route path="/" component={App} exact />
      <Route path="/recipe/:id" component={Recipe} />
    </Switch>
  </HashRouter>
);
export default Router;
