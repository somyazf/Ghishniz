import React from "react";
import { withRouter } from "react-router-dom";
import { NavLink } from "react-router-dom";
import "App.css";

function NavBarMenu() {
  return (
    <nav className="main-navigation">
      <ul id="primary-menu" className="menu">
        <li className="menu-item"> 
          <NavLink
            to="/"
            activeClassName="active"
            exact 
            activeStyle={{
              color: "#f86b2e"
            }}
          >
            Home
          </NavLink>
        </li>
        <li className="menu-item">
          <NavLink
            to="/recipes"
          >
            Recipes
          </NavLink>
        </li>
        <li className="menu-item">
          <NavLink
            to="/login"
            activeClassName="active"
            activeStyle={{ color: '#f86b2e' }}
          >
            Login
          </NavLink>
        </li>
        <li className="menu-item">
          <NavLink
            to="/register"
            activeClassName="active"
            activeStyle={{ color: '#f86b2e' }}
          >
            Register
          </NavLink>
        </li>
        <li className="menu-item">
          <NavLink
            to="/login"
            activeClassName="active"
          >
            Submit Recipe
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

withRouter(NavBarMenu);
export default NavBarMenu;
