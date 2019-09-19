import React from "react";
import { Link } from "react-router-dom";
import "../../App.css";

function NavBarMenu() {
  return (
    <nav className="main-navigation">
      <ul id="primary-menu" className="menu">
        <li className="menu-item menu-item-type-custom menu-item-object-custom current-menu-item current_page_item menu-item-home menu-item-703">
          <Link to="/">Home</Link>
        </li>
        <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-713">
          <Link to="/recipes">Recipes</Link>
        </li>
        <li className="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-730">
          <Link to="/login">Login</Link>
        </li>
        <li className="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-731">
          <Link to="/register">Register</Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavBarMenu;
