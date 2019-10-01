import React from 'react';
import 'App.css';
import { Col, Row, Container, Nav } from 'react-bootstrap';
import { Link } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import Typography from "@material-ui/core/Typography";
import ButtonBase from '@material-ui/core/ButtonBase';
import Grid from "@material-ui/core/Grid";
import post1 from "assets/images/site/post_10-387x272.jpg";
import FeatureadArticle1 from "assets/images/site/feath-artic-1.jpg";
import FeatureadArticle2 from "assets/images/site/feath-artic-2.jpg";
import FeatureadArticle3 from "assets/images/site/feath-artic-3.jpg";
import {
   MDBCarousel, MDBCarouselCaption, MDBCarouselInner, MDBCarouselItem, MDBView, MDBMask}
 from "mdbreact";

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
}));

export default function Sidebar() {
  const classes = useStyles();
  return (  
    <Container>
      <Row>
        <Col>
          <div className="sidebar">
            <div className="mostVisitedSec">
              <h3>Most Visited Recipes</h3>
              <Grid container spacing={2}>
                <Grid item>
                  <ButtonBase className={classes.image}>
                    <img className={classes.img} alt="complex" src={post1} />
                  </ButtonBase>
                </Grid>
                <Grid item xs={12} sm container>
                  <Grid item xs container direction="column" spacing={2}>
                    <Grid item xs>
                      <Typography variant="body2" gutterBottom className="sidePostTitle">
                        <Link to="/breakfast">Spicy Fried Pork and Marinated Vegetables</Link>
                      </Typography>
                      <Typography variant="body2" color="textSecondary">
                        October 21, 2017
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
              <Grid container spacing={2}>
                <Grid item>
                  <ButtonBase className={classes.image}>
                    <img className={classes.img} alt="complex" src={post1} />
                  </ButtonBase>
                </Grid>
                <Grid item xs={12} sm container>
                  <Grid item xs container direction="column" spacing={2}>
                    <Grid item xs>
                      <Typography variant="body2" gutterBottom className="sidePostTitle">
                        <Link to="/breakfast">Broccoli Weekend Lunch Recipe</Link>
                      </Typography>
                      <Typography variant="body2" color="textSecondary">
                        October 21, 2017
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
              <Grid container spacing={2}>
                <Grid item>
                  <ButtonBase className={classes.image}>
                    <img className={classes.img} alt="complex" src={post1} />
                  </ButtonBase>
                </Grid>
                <Grid item xs={12} sm container>
                  <Grid item xs container direction="column" spacing={2}>
                    <Grid item xs>
                      <Typography variant="body2" gutterBottom className="sidePostTitle">
                        <Link to="/breakfast">Chicken Soup for Lunch and Dinner</Link>
                      </Typography>
                      <Typography variant="body2" color="textSecondary">
                        October 21, 2017
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
              <Grid container spacing={2}>
                <Grid item>
                  <ButtonBase className={classes.image}>
                    <img className={classes.img} alt="complex" src={post1} />
                  </ButtonBase>
                </Grid>
                <Grid item xs={12} sm container>
                  <Grid item xs container direction="column" spacing={2}>
                    <Grid item xs>
                      <Typography variant="body2" gutterBottom className="sidePostTitle">
                        <Link to="/breakfast">Healthier Christmas Recipe</Link>
                      </Typography>
                      <Typography variant="body2" color="textSecondary">
                        October 21, 2017
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
              <Grid container spacing={2}>
                <Grid item>
                  <ButtonBase className={classes.image}>
                    <img className={classes.img} alt="complex" src={post1} />
                  </ButtonBase>
                </Grid>
                <Grid item xs={12} sm container>
                  <Grid item xs container direction="column" spacing={2}>
                    <Grid item xs>
                      <Typography variant="body2" gutterBottom className="sidePostTitle">
                        <Link to="/breakfast">Toasted Bread with lots of Olives</Link>
                      </Typography>
                      <Typography variant="body2" color="textSecondary">
                        October 21, 2017
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </div>
            <div className="categorySec">
              <h3>Dish Type</h3>
              <Nav defaultActiveKey="/home" className="flex-column">
                  <Link to="/side-dish">Side dish</Link>
                  <Link to="/appetizers">Appetizers</Link>
                  <Link to="/main-course">Main course</Link>
                  <Link to="/quick-and-easy">Quick and Easy</Link>
              </Nav>
            </div>
            <div className="suggestionSec">
            <h3>Suggested Recipes</h3>
            <MDBCarousel
              activeItem={1}
              length={3}
              showControls={true}
              showIndicators={true}
              nHoverStop={true} 
              className="z-depth-1"
            >
              <MDBCarouselInner>
                <MDBCarouselItem itemId="1">
                  <MDBView>
                    <img
                      className="d-block w-100"
                      src={FeatureadArticle1}
                      alt="First slide"
                    />
                  <MDBMask overlay="green-strong" />
                  </MDBView>
                  <MDBCarouselCaption>
                    <h3 className="h3-responsive">DESSERT</h3>
                    <p>Sourcherry Pie</p>
                  </MDBCarouselCaption>
                </MDBCarouselItem>
                <MDBCarouselItem itemId="2">
                  <MDBView>
                    <img
                      className="d-block w-100"
                      src={FeatureadArticle2}
                      alt="Second slide"
                    />
                  <MDBMask overlay="green-strong" />
                  </MDBView>
                  <MDBCarouselCaption>
                    <h3 className="h3-responsive">BREAKFAST</h3>
                    <p>Basic Crepes</p>
                  </MDBCarouselCaption>
                </MDBCarouselItem>
                <MDBCarouselItem itemId="3">
                  <MDBView>
                    <img
                      className="d-block w-100"
                      src={FeatureadArticle3}
                      alt="Third slide"
                    />
                  <MDBMask overlay="black-slight" />
                  </MDBView>
                  <MDBCarouselCaption>
                    <h3 className="h3-responsive">HEALTHY</h3>
                    <p>Mackerel Salad</p>
                  </MDBCarouselCaption>
                </MDBCarouselItem>
              </MDBCarouselInner>
            </MDBCarousel>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
}