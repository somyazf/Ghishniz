import React,{useState} from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Paper from '@material-ui/core/Paper';
import Rate from "../icons/rating";
import EyeIcon from "../icons/eyeIcon";
import FavoriteFood from "../icons/favorite";
import DetailButtons from '../button/button.js';
import Divider from '@material-ui/core/Divider';
import sug1 from '../../../assets/sug1.jpg';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  card: {
    maxWidth: 345
  },
  media: {
    height: 0,
    paddingTop: "56.25%" // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest
    })
  },
  expandOpen: {
    transform: "rotate(180deg)"
  },
  divider: {
    marginBottom: '33px',
    height: '3px',
    width: '13%',
    margin: '10px auto',
    backgroundColor: '#0ec145'
  }
}));

export default function Suggestions() {
  const classes = useStyles();
  const suggestions = [
    {
      title: "ghorme sabzi",
      created_at: "September 14, 2016",
      description:
        "This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like."
    },
    {
      title: "Itlian food",
      created_at: "September 14, 2016",
      description:
        "This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like."
    },
    {
      title: "kashke bademjun",
      created_at: "September 14, 2016",
      description:
        "This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like."
    }
  ];

  return (
    <>
      <Grid container className={classes.root} spacing={2}>
        <Grid item xs={12}>
          <Typography variant="h4" align="center" gutterBottom>
            Most Favorited Recipes
          </Typography>
          <Divider variant="middle" className={classes.divider}/>
          <Grid container justify="center" spacing={4}>
            {suggestions.map((value, i) => (
              <Grid key={i} item lg={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.media}
                    image={sug1}
                    title="Paella dish"
                  />
                  <CardHeader
                    subheader={value.created_at}
                    title={value.title}
                  />
                  <CardContent>
                    {/* <Typography
                      variant="body2"
                      color="textSecondary"
                      component="p"
                    >
                      {value.description}
                    </Typography> */}
                  </CardContent>
                  <CardActions disableSpacing>
                    <FavoriteFood/>
                    <EyeIcon/>
                    <Rate/>
                    <DetailButtons/>  
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}
