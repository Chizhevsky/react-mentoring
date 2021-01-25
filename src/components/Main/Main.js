import React from "react";
import "./Main.css";
import { Switch, Route } from "react-router-dom";
import Home from "../../pages/Home/Home";
import LogIn from "../../pages/LogIn/LogIn";
import Settings from "../../pages/Settings/Settings";
import ViewMode from "../../pages/ViewMode/ViewMode";
import { ThemeContext } from "../../contexts/ThemeContext";
import { AuthContext } from "../../contexts/AuthContext";

function Main() {
  return (
    <Switch>
      <Route path="/settings" render={() => (
        <ThemeContext.Consumer>
          {
            ({theme, changeTheme}) => (
              <Settings theme={theme} changeTheme={changeTheme} />
            )
          }
        </ThemeContext.Consumer>
      )} />
      <Route path="/login" render={() => (
        <AuthContext.Consumer>
          {
            ({handleAutorization}) => (
              <LogIn handleAutorization={handleAutorization} />
            )
          }
        </AuthContext.Consumer>
      )} />

      <Route path="/view-mode/:id" component={ViewMode} />
      <Route exact path="/" component={Home} />
    </Switch>
  );
}

export default Main;
