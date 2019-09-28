import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { makeStyles } from "@material-ui/core/styles";
import InnerSidebar from "components/innerPageSidebar/innerPageSidebar";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Fab from "@material-ui/core/Fab";
import Rate from "components/mainPage/icons/rating";
import {Favorite} from "components/mainPage/icons";
import Divider from '@material-ui/core/Divider';
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { getRecipesInfoAction } from "_actions";

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    padding: 60,
  },
  flexDivs: {
    display: 'flex',
    alignItems: 'center'
  },
  divider: {
    marginBottom: '33px',
    height: '3px',
    width: '13%',
    margin: '10px auto',
    backgroundColor: '#0ec145'
  },
  recipeImg: {
    maxWidth: 480,
    maxHeight: 480,
    width: '35vw',
    height: '35vw',
    backgroundSize: 'cover',
    borderRadius: 10,
  },
  instButton: {
    backgroundColor:' #78b507',
    color: '#fff',
    marginRight: 30
  },
  infoSec: {
    padding: '40px 108px',
  },
  noBulletList: {
    listStyle: 'none'
  },
  stepNumber: {
    fontWeight: 600
  },
  stepText: {
    paddingLeft: 21
  }
}));

const SingleRecipe = (props) =>  {
  const id = props.location.state.id;
  const {dispatch, error, loading, items} = props;
  // const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getRecipesInfoAction.getRecipesInfo(id));
  }, []);
  // debugger
   
  const classes = useStyles();
  return <>
    <Grid container spacing={2}>
      <Grid item xs>
        <InnerSidebar/>
      </Grid>
      <Grid item xs={10} >
        <Grid className={classes.root}>
          <Grid item lg={6} className={classes.infoSec}>
            <Typography variant="h4" component="h3" align="left" gutterBottom>
              {items.title}
            </Typography>
            <Rate/>
            <Grid className={classes.flexDivs}>
              <Grid className="ingredients">
                <Typography variant="h6" align="center" gutterBottom>
                  {items.servings}
                </Typography>
                <Typography variant="h6" align="center" gutterBottom>
                  Servings
                </Typography>
              </Grid>
              <hr style={{width: 1, height: 60, background: '#e2e2e2', border: 'none'}}/>
              <Grid className="time">
                <Typography variant="h6" align="center" gutterBottom>
                {items.readyInMinutes}
                </Typography>
                <Typography variant="h6" align="center" gutterBottom>
                  Minutes
                </Typography>
              </Grid>
              <hr style={{width: 1, height: 60, background: '#e2e2e2', border: 'none'}}/>
              <Grid className="calories">
                <Typography variant="h6" align="center" gutterBottom>
                  {items.healthScore}
                </Typography>
                <Typography variant="h6" align="center" gutterBottom>
                  HealthScore
                </Typography>
              </Grid>
            </Grid>
            <Grid className={classes.flexDivs} style={{ marginTop: 43 }}>
              <div>
                <Fab variant="extended" href="#direction" className={classes.instButton}>
                  read instruction
                </Fab>
                <Favorite/>
                <span style={{ paddingLeft: 10 }}>{items.aggregateLikes}</span>
              </div>
            </Grid>
          </Grid>
          <Grid item lg={6}>
            <img src={items.image} alt="recipe img" className={classes.recipeImg}/>
          </Grid>
        </Grid>
        <div>
        <Divider/>
        </div>
        <Grid container className={classes.infoSec}>
            <Grid>
              <Typography variant="h3" gutterBottom>
                Ingredients
              </Typography>
              <Typography variant="subtitle1" gutterBottom>
                <ul>
                {items.extendedIngredients&&items.extendedIngredients.map(ingredient =>(
                  <li key={ingredient.id}>
                    {ingredient.original}
                  </li>
                ))}
              </ul>
              </Typography>
            </Grid>
            <Grid>
              <Typography variant="h3" gutterBottom id= "direction">
                Directions
              </Typography>
              <Typography variant="subtitle1" gutterBottom>
              <ul>
                {items.extendedIngredients&&items.analyzedInstructions[0].steps.map(step =>(
                  <li key={step.number} className={classes.noBulletList}>
                     <span className={classes.stepNumber}>STEP {step.number}</span><br/>
                    <p className={classes.stepText}>{step.step}</p> 
                  </li>
                ))}
              </ul>
              </Typography>
          </Grid>
          <Grid>
              <Typography variant="h3" gutterBottom>
                Related
              </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  </>
};

const mapStateToProps = state => {
  const {loading} = state.getDataReducer;
  const {items} = state.getDataReducer;
  const {error} = state.getDataReducer;
  
  return { loading, items, error };
};

const ConnectedRecipesPage = withRouter(connect(mapStateToProps)(SingleRecipe));
export {ConnectedRecipesPage as SingleRecipe};