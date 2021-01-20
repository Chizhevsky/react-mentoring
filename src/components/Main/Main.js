import React from "react";
import "./Main.css";
import { Switch, Route } from "react-router-dom";
import Home from "../../pages/Home/Home";
import LogIn from "../../pages/LogIn/LogIn";
import Settings from "../../pages/Settings/Settings";

function Main() {
  return (
    <main className="main-page">
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/settings">
          <Settings />
        </Route>
        <Route path="/login">
          <LogIn />
        </Route>
      </Switch>
    </main>
  );
}

export default Main;
