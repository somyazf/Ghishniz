import React from "react";
import Logo from "../../assets/ghishniz-logo.png";
import { Link } from "react-router-dom";
import "../../App.css";

function LogoPage() {
  return (
    <div className="site-branding">
      <div className="site-name">
        <Link to="/">
          <img src={Logo} alt="logo" />
        </Link>
      </div>
    </div>
  );
}

export default LogoPage;