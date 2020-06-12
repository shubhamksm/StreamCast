import React from "react";
import { Link } from "react-router-dom";

import GoogleAuth from "./GoogleAuth";

import logo from "../images/Logo.svg";

const Header = () => {
  return (
    <div id="main-header">
      <div id="header" className="ui container">
        <Link to="/" id="branding" className="item">
          <img src={logo} alt="logo" width="70px" />
          <p>StreamCast</p>
        </Link>
        <div id="right-menu">
          <Link to="/" className="item">
            All Streams
          </Link>
          <GoogleAuth />
        </div>
      </div>
    </div>
  );
};

export default Header;
