import React from "react";
import "./Main.css";
import { Switch, Route } from "react-router-dom";
import Home from "../../pages/Home/Home";
import LogIn from "../../pages/LogIn/LogIn";
import Settings from "../../pages/Settings/Settings";
import ViewMode from "../../pages/ViewMode/ViewMode";

function Main() {
  return (
    <Switch>
      <Route path="/settings" component={Settings} />
      <Route path="/login" component={LogIn} />
      <Route path="/view-mode/:id" component={ViewMode} />
      <Route path="/" component={Home} />
    </Switch>
  );
}

export default Main;
