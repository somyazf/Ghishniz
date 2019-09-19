import React from 'react';
import '../../../App.css';
import { Col, Row, Image, Container, Button, Nav } from 'react-bootstrap';
import { Link } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import Typography from "@material-ui/core/Typography";
import ButtonBase from '@material-ui/core/ButtonBase';
import Grid from "@material-ui/core/Grid";
import post1 from "../../../assets/post_10-387x272.jpg";

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
              <div className="categorySec">
                <h3>Categories</h3>
                <Nav defaultActiveKey="/home" className="flex-column">
                    <Link to="/breakfast">breakfast</Link>
                    <Link to="/dessert">dessert</Link>
                    <Link to="/special">special</Link>
                    <Link to="/lunch">lunch</Link>
                </Nav>
              </div>
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
            </div>
          </Col>
        </Row>
      </Container>
    );
  }