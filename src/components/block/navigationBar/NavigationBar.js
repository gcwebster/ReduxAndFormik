import React from "react";
import { Link } from "react-router-dom";
import "./navigationBar.css";

function NavigationBar(props) {
  const { navigationItems } = props;
  return (
    <div className="header">
      {navigationItems.map(navItem => {
        return (
          <Link to={navItem.linkAddress}>
            <p>{navItem.text}</p>
          </Link>
        );
      })}
    </div>
  );
}

export default NavigationBar;
