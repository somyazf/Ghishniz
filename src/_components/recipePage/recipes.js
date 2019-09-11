import React, { useState } from 'react';
import Loading from '../../assets/restaurants_plus_loading_animation_for_dribbble.gif'
import axios from 'axios';
import InnerSidebar from "../innerPageSidebar";
import useSpoonacularApi from './search';
import { makeStyles } from '@material-ui/core/styles';
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Paper from '@material-ui/core/Paper';
import Grid from "@material-ui/core/Grid";
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import Rate from "../mainPage/icons/rating";
import DetailButtons from '../mainPage/button/button.js';

const SpoonacularApi = "94be430aadf644f6a8c8c95abbcce4c1";
const baseUrl = "https://api.spoonacular.com";
const imgUrl = "https://webknox.com/recipeImages/";

const useStyles = makeStyles(theme => ({
    root: {
      padding: '2px 20px',
      display: 'flex',
      alignItems: 'center',
      width: 550,
      borderRadius: 25,
      justifyCntent: 'space-between',
      margin: '40px 44px',
    },
    input: {
      marginLeft: theme.spacing(1),
      flex: 1,
      border: 'none',
      padding: 5,
    },
    iconButton: {
      padding: 10,
    },
    divider: {
      height: 28,
      margin: 4,
    },
    formWidth: {
      width: '100%',
    },
    card: {
      maxWidth: 280,
      marginBottom: 20
    },
    cardTitle: {
        fontSize: '1.2rem',
    },
    cardContent: {
        background: '#ffbb00',
        display: 'flex',
        justifyContent: 'space-around',
    },
    media: {
      height: 0,
      paddingTop: "56.25%" // 16:9
    },
    recipeSec: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
    },
    centeredDiv: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexWrap: 'wrap',
    },
    margin: {
        margin: '40px 44px',
    },
  }));

const Recipes = () => {
    const classes = useStyles();
    const [query, setQuery] = useState('beef');
    const [{ data, isLoading, isError }, doFetch] = useSpoonacularApi();
    
    return <>
        <Grid container>
            <Grid item xs>
                <InnerSidebar/>
            </Grid>
            <Grid item xs={10} >
                <Grid className={classes.centeredDiv}>
                    <Paper className={classes.root}>
                        <form onSubmit={event => {
                            doFetch(`${baseUrl}/recipes/search?apiKey=${SpoonacularApi}&query=${query}&_number=12`);
                            event.preventDefault();
                        }}
                        className={classes.formWidth}
                        >
                            <input
                            type="text"
                            value={query}
                            onChange={event => setQuery(event.target.value)}
                            className={classes.input}
                            />
                        </form>
                        <IconButton className={classes.iconButton} aria-label="search" type="submit">
                            <SearchIcon />
                        </IconButton>
                    </Paper>
                </Grid>
                <Grid className={classes.margin}>
                    <Grid className={classes.margin}>
                        <Typography>
                            {data.length} suggested recipes
                        </Typography>
                    </Grid>
                    <Grid>
                        {isError && <div>Something went wrong ...</div>}
                        {isLoading ? (
                            <div>
                                <img src={Loading} alt="Loading"/>
                            </div>
                        ) : (
                                <Grid className={classes.centeredDiv}>
                                    {data.map(recipe => (
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
                                                    title={recipe.title}
                                                    varriant = "subtitle1"
                                                    titleTypographyProps = {{variant: "h6"}}
                                                />
                                                <CardActions disableSpacing>
                                                    <Rate/>
                                                    <DetailButtons/>   
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
    </>
  }
export default Recipes;