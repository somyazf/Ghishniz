import React, { useState, useRef, useEffect } from "react";
import ReactDOM from "react-dom";
import useWindowScrollPosition from "@rehooks/window-scroll-position";

import '../App.css';
import { makeStyles } from '@material-ui/core/styles';
import Icon from '@material-ui/core/Icon';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import SearchIcon from '@material-ui/icons/Search';
import Logo from "../assets/ghishniz-logo.png"

const useStyles = makeStyles(theme => ({
    root: {
      color: theme.palette.text.primary,
    },
    margin: {
        margin: theme.spacing(1),
    },
    inputBorderColor:{
        borderBottomColor:'#d8412f',
    }
}));

const Header = ()=>{
    const classes = useStyles();
    return <header>
        <nav className="mobile-navigation" style={{display: "none"}}>
            <div className="menu-main-container"><ul id="mobile-menu" className="menu"><li id="menu-item-703" className="menu-item menu-item-type-custom menu-item-object-custom current-menu-item current_page_item menu-item-home menu-item-703"><a href="http://ghishniz.ir">Home</a></li>
                <li id="menu-item-713" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-713"><span className="sub-menu-toggle"><i className="fa fa-angle-up fa-angle-down"></i></span><a href="http://ghishniz.ir">Recipes</a></li>
                <li id="menu-item-730" className="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-730"><a href="http://ghishniz.ir">Login</a></li>
                <li id="menu-item-731" className="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-731"><a href="http://ghishniz.ir">Register</a></li>
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
                                    <a href="http://ghishniz.ir">Home</a>
                                </li>
                                <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-713">
                                <a href="http://ghishniz.ir">Recipes</a>
                                </li>
                                <li className="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-730">
                                    <a href="http://ghishniz.ir">Login</a>
                                </li>
                                <li className="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-731">
                                   <a href="http://ghishniz.ir">Register</a>
                                </li>
                            </ul>
                        </div>													
	                </nav>
                    <FormControl className={classes.margin}>
                        <InputLabel htmlFor="input-with-icon-adornment">Search</InputLabel>
                        <Input
                        id="input-with-icon-adornment"
                        startAdornment={
                            <InputAdornment position="start">
                            <SearchIcon />
                            </InputAdornment>
                        }
                        />
                    </FormControl>
                </div>
            </div>
    </header>
}
function TestNav() {
    const [change, setChange] = useState(false);
    const changePosition = 300;
  
    let position = useWindowScrollPosition();
    // position == { x: 0, y: 0 }
  
    if (position.y > changePosition && !change) {
      setChange(true);
    }
  
    if (position.y <= changePosition && change) {
      setChange(false);
    }
  
    let style = {
      backgroundColor: change ? "transparent" : "white",
      transition: "600ms ease",
    };
  
    return (
      <Header/>
    );
  }
export default Header;