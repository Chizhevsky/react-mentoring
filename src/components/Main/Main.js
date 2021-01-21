import React from "react";
import "./Main.css";
import { Switch, Route } from "react-router-dom";
import Home from "../../pages/Home/Home";
import LogIn from "../../pages/LogIn/LogIn";
import Settings from "../../pages/Settings/Settings";

function Main() {
  return (
    <Switch>
      <Route path="/settings">
        <Settings />
      </Route>
      <Route path="/login">
        <LogIn />
      </Route>
      <Route path="/">
        <Home />
      </Route>
    </Switch>
  );
}

export default Main;