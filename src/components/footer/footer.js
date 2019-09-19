import React from 'react';
import { withRouter } from "react-router-dom";
import '../../App.css';
import Logo from "../../assets/ghishniz-logo.png"
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import { yellow } from '@material-ui/core/colors';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faGithubAlt,
    faGoogle,
    faFacebook,
    faTwitter,
    faInstagram
  } from '@fortawesome/free-brands-svg-icons';

  library.add(
    faInstagram,
    faGithubAlt,
    faGoogle,
    faFacebook,
    faTwitter
  );  

const useStyles = makeStyles(theme => ({
    root: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'flex-end',
    },
    icon: {
      margin: theme.spacing(2),
    },
    iconHover: {
        margin: theme.spacing(2),
        '&:hover': {
          color: yellow[900],
        }
    },
  }));
 const Footer = ()=>{
    const classes = useStyles();
    return <footer>
        <div className="site-branding">
            <div className="site-name">
                <a href="http://ghishniz.ir" rel="home"><img src={Logo} alt="logo"/></a>
            </div>						
        </div>    
        <div className="social">
            <Grid container spacing={3} className={classes.root}>
              <FontAwesomeIcon icon={faGithubAlt} size="lg" className={classes.iconHover}/>
              <FontAwesomeIcon icon={faInstagram} size="lg" className={classes.iconHover}/>
              <FontAwesomeIcon icon={faFacebook} size="lg" className={classes.iconHover}/>
            </Grid>
        </div>
        <div className="footer-bottom top-divider">
            <div className="container">
                <span className="copyright">© 2019 GHISHNIZ</span>
            </div>
        </div>
    </footer>
}
withRouter(Footer);
export {Footer};