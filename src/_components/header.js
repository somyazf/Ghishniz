import React from 'react';
import '../App.css';
import { makeStyles } from '@material-ui/core/styles';
import Icon from '@material-ui/core/Icon';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
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
export default Header;