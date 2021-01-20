import React from "react";
import "./Main.css";
import { Switch, Route } from "react-router-dom";
import Home from "../../pages/Home/Home";
import LogIn from "../../pages/LogIn/LogIn";
import Settings from "../../pages/Settings/Settings";

function Main() {
  const path = window.location.pathname;
  return (
    <Switch>
      <Route exact path={`${path}`}>
        <Home />
      </Route>
      <Route path={`${path}settings`}>
        <Settings />
      </Route>
      <Route path={`${path}login`}>
        <LogIn />
      </Route>
    </Switch>
  );
}

export default Main;
