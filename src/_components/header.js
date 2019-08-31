import React from 'react';
import '../App.css';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { search } from '@fortawesome/free-solid-svg-icons'
import Logo from "../assets/ghishniz-logo.png"
const Header = ()=>{
    return <header>
        <nav className="mobile-navigation" style={{display: "none"}}>
            <div className="menu-main-container"><ul id="mobile-menu" className="menu"><li id="menu-item-703" className="menu-item menu-item-type-custom menu-item-object-custom current-menu-item current_page_item menu-item-home menu-item-703"><a href="https://healey.sculptureqode.com/">Home</a></li>
                <li id="menu-item-713" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-713"><span className="sub-menu-toggle"><i className="fa fa-angle-up fa-angle-down"></i></span><a href="https://healey.sculptureqode.com/recipe-index/">Recipes</a></li>
                <li id="menu-item-730" className="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-730"><a href="https://healey.sculptureqode.com/category/breakfasts/">Login</a></li>
                <li id="menu-item-731" className="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-731"><a href="https://healey.sculptureqode.com/category/lunches/">Register</a></li>
                </ul>
            </div>	{/* Mobile navigation */}
        
            </nav>	
            <div className="site-header-container">
                <div className="site-header-content">
                    <div className="site-branding">
                        <div className="site-name">
                            <a href="http://ghishniz.ir" rel="home"><img src={Logo} alt="logo"/></a>
                        </div>						
                    </div> {/* Logo */}
                    <nav className="main-navigation">		
                        <div className="menu-main-container">
                            <ul id="primary-menu" className="menu">
                                <li className="menu-item menu-item-type-custom menu-item-object-custom current-menu-item current_page_item menu-item-home menu-item-703">
                                    <a href="https://healey.sculptureqode.com/">Home</a>
                                </li>
                                <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-713">
                                <a href="https://healey.sculptureqode.com/recipe-index/">Recipes</a>
                                    {/* <ul className="sub-menu">
                                        <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-715">
                                            <a href="https://healey.sculptureqode.com/recipe-index-centered/">Traditional Recipes</a>
                                        </li>
                                        <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-716">
                                            <a href="https://healey.sculptureqode.com/recipe-index-full-width/">Your Recipes</a>
                                        </li>
                                        <li className="menu-item menu-item-type-post_type menu-item-object-post menu-item-725">
                                            <a href="https://healey.sculptureqode.com/burger-with-deep-fried-onions/">Modern Recipes</a>
                                        </li>
                                    </ul> */}
                                </li>
                                <li className="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-730">
                                    <a href="https://healey.sculptureqode.com/category/breakfasts/">Login</a>
                                </li>
                                <li className="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-731">
                                   <a href="https://healey.sculptureqode.com/category/lunches/">Register</a>
                                </li>
                            </ul>
                        </div>													
	                </nav>
                    <i className="toggle-search fa fa-search" aria-hidden="true">Search</i>
                    <form role="search"className="search-form">
                        <label>    
                           <span className="screen-reader-text">Search for:</span>
                             <input type="search" className="search-field" placeholder="Type to search..." name="s" title="Search for:"/>    
                        </label>    
                        <button type="submit" className="search-submit"></button>
                     </form>
                </div>
            </div>
    </header>
}
export default Header;