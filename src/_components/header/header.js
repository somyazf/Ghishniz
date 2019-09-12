import React, { useState, useRef, useEffect } from "react";
import { withRouter } from "react-router-dom";
import "../../App.css";
import LogoPage from "./logo";
import NavBarMenu from "./navBar";

const Header = () => {
  return (
    <header>
      <div className="site-header-container">
        <div className="site-header-content">
          <LogoPage />
          <NavBarMenu />
        </div>
      </div>
    </header>
  );
};

withRouter(Header);
export { Header };
