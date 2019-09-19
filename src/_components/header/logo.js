import React from "react";
import Logo from "../../assets/newlogo-gishniz.png";
import { Link } from "react-router-dom";
import "../../App.css";

function LogoPage() {
  return (
      <div className="site-name">
        <Link to="/">
          <img src={Logo} alt="logo" />
        </Link>
      </div>
  );
}

export default LogoPage;
