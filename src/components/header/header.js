import React from "react";
import "App.css";
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

export { Header };
