import React, { useState, useEffect } from 'react';
import { makeStyles } from "@material-ui/core/styles";
import InnerSidebar from "../components/innerPageSidebar/innerPageSidebar";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Fab from "@material-ui/core/Fab";
import Rate from "../components/mainPage/icons/rating";
import EyeIcon from "../components/mainPage/icons/eyeIcon";
import FavoriteFood from "../components/mainPage/icons/favorite";
import Divider from '@material-ui/core/Divider';
import sug1 from '../assets/sug1.jpg';
import { Link } from "react-router-dom";
import axios from 'axios';

const SpoonacularApi = "94be430aadf644f6a8c8c95abbcce4c1";
const baseUrl = "https://api.spoonacular.com";
const imgUrl = "https://webknox.com/recipeImages/";
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
  },
  infoSec: {
    padding: '40px 108px',
  }
}));

const Recipe = (props) =>  {
  const title = props.location.state.recipe;
  const [data, setData] = useState([]);
  const [url, setUrl] = useState(
    `${baseUrl}/recipes/search?apiKey=${SpoonacularApi}&query=${title}`,
);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  useEffect(() => {
      const fetchData = async () => {
          setIsError(false);
          setIsLoading(true);
          try {
          const api_call = await axios(url);
          setData(api_call.data.results[0]);
          } catch (error) {
              setIsError(true);
          }
          setIsLoading(false);
      };
      fetchData();
    }, [url]);

  const classes = useStyles();
  const recipe = data;
    return <>
      <Grid container spacing={2}>
        <Grid item xs>
        <InnerSidebar/>
        </Grid>
        <Grid item xs={10} >
          <Grid className={classes.root}>
            <Grid item lg={6} className={classes.infoSec}>
              <Typography variant="h4" component="h3" align="left" gutterBottom>
                {recipe.title}
              </Typography>
              <Rate/>
              <Grid className={classes.flexDivs}>
                <Grid className="ingredients">
                  <Typography variant="subtitle1" align="center" gutterBottom>
                    7
                  </Typography>
                  <Typography variant="subtitle1" align="center" gutterBottom>
                    Ingredients
                  </Typography>
                </Grid>
                <Divider orientation="vertical"/>
                <Grid className="time">
                  <Typography variant="subtitle1" align="center" gutterBottom>
                    40
                  </Typography>
                  <Typography variant="subtitle1" align="center" gutterBottom>
                    Minutes
                  </Typography>
                </Grid>
                <Divider orientation="vertical"/>
                <Grid className="calories">
                  <Typography variant="subtitle1" align="center" gutterBottom>
                      ┅
                  </Typography>
                  <Typography variant="subtitle1" align="center" gutterBottom>
                    Calories
                  </Typography>
                </Grid>
              </Grid>
              <Grid className={classes.flexDivs}>
                <div>
                <Fab variant="extended" href="#direction" className={classes.instButton}>
                  read instruction
                </Fab>
                </div>
                <EyeIcon/>
              </Grid>
            </Grid>
            <Grid item lg={6}>
              <img src={sug1} alt="recipe img" className={classes.recipeImg}/>
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
                  - 4 bone-in ribeye pork chops (rib, 3/4-inch thick)
                  - 2 cloves garlic (peeled)
                  - 1 cup fresh basil (packed)
                  - 2 tablespoons lemon juice (fresh)
                  - 2 tablespoons extra virgin olive oil
                 -  1 teaspoon coarse salt
                  - 1/2 teaspoon freshly ground black pepper
                </Typography>
              </Grid>
              <Grid>
                <Typography variant="h3" gutterBottom id= "direction">
                  Directions
                </Typography>
                <Typography variant="subtitle" gutterBottom>
                  With machine running, drop garlic through feed tube of food processor to mince. Stop, add fresh basil, and process until chopped. Add lemon juice, oil, salt, and pepper and process to make thin wet rub. Spread both sides of pork chops with basil mixture. Let stand 15 to 30 minutes.
                  Prepare a medium-hot fire in grill. Brush the grate clean and oil the grate. Grill chops, over direct heat, turning once, to medium rare doneness, 5 to 6 minutes per side, or until the internal temperature reaches 145 degrees Fahrenheit, followed by a 3-minute rest time.
                </Typography>
            </Grid>
            <Grid>
                <Typography variant="h3" gutterBottom>
                  Reviews(126)
                </Typography>
                <Typography variant="subtitle" gutterBottom>
                Tim T. 5 days ago
Definitely top with toasted pine nuts and shaved/grated Parmesan! Makes all the difference!!!
                </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
};

export default Recipe;