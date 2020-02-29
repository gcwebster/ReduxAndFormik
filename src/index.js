import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Home from "./components/pages/home/Home";
import Register from "./components/pages/register/Register";
import Login from "./components/pages/login/Login";
import NavigationBar from "./components/block/navigationBar/NavigationBar";

const routing = (
  <Router>
    <NavigationBar
      navigationItems={[
        { linkAddress: "/", text: "Home" },
        { linkAddress: "/register", text: "Register" },
        { linkAddress: "/login", text: "Log In" }
      ]}
    />
    <div className="appStyling">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/register" component={Register} />
        <Route path="/login" component={Login} />
      </Switch>
    </div>
  </Router>
);

ReactDOM.render(routing, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
