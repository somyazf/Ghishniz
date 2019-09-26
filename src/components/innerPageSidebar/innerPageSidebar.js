import React from 'react';
import '../../App.css';
import { Col, Row, Image, Container, Button, Nav } from 'react-bootstrap';
import { Link } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import Fab from "@material-ui/core/Fab";
import LogoPage from '../header/logo';


const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    margin: 'auto',
    maxWidth: 500,
  },
  image: {
    width: 128,
    height: 128,
  },
  img: {
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  },
  button: {
    backgroundColor:' #78b507',
    color: '#fff !important',
    fontSize: 16
  }
}));

export default function InnerSidebar() {
  const classes = useStyles();
    return (
      <Container>
        <Row>
          <Col lg="2" className="sidebarMainNavigation ">
            <div className="nav-section">
              <div className="logoSec">
                <LogoPage/>
                <hr/>
              </div>
              <Fab variant="extended" component={Link} to={{pathname: `/login`}} className={classes.button}>
                Signup / Login
              </Fab>
              <div className="menuNav">
                <Nav className="flex-column">
                    <Link to="/">Home</Link>
                    <Link to="/login">Submit Recipe</Link>
                    <Link to="/recipes">Recipes</Link>
                </Nav>
              </div>
              <div>
                <h3>Categories</h3>
                <Nav defaultActiveKey="/home" className="flex-column">
                    <Link to="/breakfast">Breakfast</Link>
                    <Link to="/dessert">Dessert</Link>
                    <Link to="/special">Special</Link>
                    <Link to="/lunch">Lunch</Link>
                </Nav>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    );
  }