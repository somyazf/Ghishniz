import React, { useState, useEffect } from "react";
import { Link, withRouter } from "react-router-dom";
import InnerSidebar from "../components/innerPageSidebar/innerPageSidebar";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";
import Rate from "components/mainPage/icons/rating";
import Button from "@material-ui/core/Button";
import { connect } from "react-redux";
import { getDataAction } from "_actions";
import { Footer } from "components/footer/footer";
import Loading from "assets/images/site/Noodles.gif";
import ReactDOM from 'react-dom';
import App from '../App';

const imgUrl = "https://spoonacular.com/recipeImages/";

const useStyles = makeStyles(theme => ({
  root: {
    padding: "2px 20px",
    display: "flex",
    alignItems: "center",
    width: 550,
    borderRadius: 25,
    justifyContent: "space-between",
    marginTop: 50
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
    border: "none",
    padding: 5,
    outline: "none",
    width: "100%",
    fontSize: "1.2rem"
  },
  iconButton: {
    padding: 10
  },
  divider: {
    height: 28,
    margin: 4
  },
  formWidth: {
    width: "100%"
  },
  card: {
    maxWidth: 280,
    marginBottom: 20
  },
  cardTitle: {
    fontSize: "1.2rem"
  },
  cardContent: {
    background: "#ffbb00",
    display: "flex",
    justifyContent: "space-around"
  },
  cardAction: {
    alignItems: "baseline",
    justifyContent: "space-around"
  },
  media: {
    height: 0,
    paddingTop: "56.25%"
  },
  recipeSec: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between"
  },
  centeredDiv: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "wrap"
  },
  margin: {
    margin: "40px 44px"
  },
  loadingImg: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: "auto"
  },
  button: {
    margin: theme.spacing(1),
    color: "#fff !important"
  }
}));

const Recipes = props => {
  const { dispatch, error, loading, items,location } = props;

  const classes = useStyles();
  const [query, setQuery] = useState("beef");

  const submitHandler = async event => {
    event.preventDefault();
    dispatch(getDataAction.fetchRecipes(query));
  };

  const handleChange = event => {
    setQuery(event.target.value);
  };

  useEffect(()=>{
    dispatch(getDataAction.fetchRecipes(query));
  },[])

  return (
    <>
      <Grid container>
        <Grid item xs={2}>
          <InnerSidebar />
        </Grid>
        <Grid item xs={10}>
          <Grid className={classes.centeredDiv}>
            <Paper className={classes.root}>
              <form onSubmit={submitHandler} className={classes.formWidth}>
                <input
                  type="text"
                  value={query}
                  onChange={handleChange}
                  className={classes.input}
                />
              </form>
              <IconButton
                className={classes.iconButton}
                aria-label="search"
                type="submit"
              >
                <SearchIcon />
              </IconButton>
            </Paper>
          </Grid>
          <Grid className={classes.margin}>
            <Grid className={classes.margin}>
              <Typography>{items.totalResults} Suggested Recipes</Typography>
            </Grid>
            <Grid>
              {error && <div>Something went wrong ...</div>}
              {loading ? (
                <div>
                  <img
                    src={Loading}
                    alt="Loading"
                    className={classes.loadingImg}
                  />
                </div>
              ) : (
                <Grid className={classes.centeredDiv}>
                  {items.results &&
                    items.results.map((recipe,i) => (
                      <Grid key={recipe.id} item lg={3}>
                        <Card className={classes.card}>
                          <CardMedia
                            className={classes.media}
                            image={`${imgUrl}${recipe.image}`}
                            title={recipe.title}
                          />
                          <CardContent className={classes.cardContent}>
                            <span>{recipe.readyInMinutes} Min</span>
                            <span>{recipe.readyInMinutes} People</span>
                            <span>{recipe.servings} Yield</span>
                          </CardContent>
                          <CardHeader
                            title={
                              recipe.title.length < 18
                                ? `${recipe.title}`
                                : `${recipe.title.substring(0, 18)}...`
                            }
                          />
                          <CardActions
                            disableSpacing
                            className={classes.cardAction}
                          >
                            <Rate index={i}/>
                            <Button
                              variant="contained"
                              color="secondary"
                              className={classes.button}
                              component={Link}
                              to={{
                                pathname: `/recipe/${recipe.id}`,
                                state: {
                                  id: recipe.id
                                }
                              }}
                            >
                              Detail
                            </Button>
                          </CardActions>
                        </Card>
                      </Grid>
                    ))}
                </Grid>
              )}
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Footer />
    </>
  );
};
const mapStateToProps = state => {
  const { loading } = state.getDataReducer;
  const { items } = state.getDataReducer;
  const { error } = state.getDataReducer;

  return { loading, items, error };
};

const ConnectedRecipesPage = withRouter(connect(mapStateToProps)(Recipes));
export { ConnectedRecipesPage as Recipes };
