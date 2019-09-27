import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Rate from "../icons/rating";
import EyeIcon from "../icons/eyeIcon";
import FavoriteFood from "../icons/favorite";
import DetailButtons from "../buttons/button";
import Divider from "@material-ui/core/Divider";
import springCassoulet from "assets/images/site/Spring-Cassoulet.jpg";
import easyMeatball from "assets/images/site/Easy-meatball-subs.jpg";
import falafelWaffles from "assets/images/site/Falafel-waffles.jpg";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    marginBottom: 40
  },
  card: {
    maxWidth: 345,
    textAlign: 'center'
  },
  cardAction: {
    display: 'flex',
    justifyContent: 'space-between'
  },
  cardHeader: {
    padding: '9px 16px 0 16px'
  },
  media: {
    height: 0,
    paddingTop: "56.25%"
  },
  divider: {
    marginBottom: "33px",
    height: "3px",
    width: "13%",
    margin: "10px auto",
    backgroundColor: "#0ec145"
  },
  metaBox: {
    display: "flex", 
    justifyContent: "space-evenly", 
    padding: "10px 0", 
    background:" #ffbb00"
  }
}));

export default function Suggestions() {
  const classes = useStyles();
  const mostFavorited = [
    {
      title: "Spring Cassoulet with Pistou",
      description:
        "Blanch broad beans in boiling salted water for 1 minute, then plunge into iced water and ...",
      image: springCassoulet ,
      serving: "4 Servings",
      readyInMin: "90 Min",
    },
    {
      title: "Easy meatball subs",
      description:
        "Heat a large non-stick frying pan over high heat. Add the meatballs and cook ...",
      image: easyMeatball,
      serving: "4 Servings",
      readyInMin: "15 Min" ,

    },
    {
      title: "Falafel waffles",
      description:
        "Place chickpeas, flour, baking powder, parsley, garlic, ground coriander and ...",
      image: falafelWaffles,
      serving: "3 Servings",
      readyInMin: "30 Min",
    }
  ];

  return (
    <>
      <Grid container className={classes.root} spacing={2}>
        <Grid item xs={12}>
          <Typography variant="h4" align="center" gutterBottom>
            Most Favorited Recipes
          </Typography>
          <Divider variant="middle" className={classes.divider} />
          <Grid container justify="center" spacing={4}>
            {mostFavorited.map((value, i) => (
              <Grid key={i} item lg={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.media}
                    image={value.image}
                    alt={value.title}
                  />
                  <div className={classes.metaBox}>
                    <span>{value.serving}</span> <span>{value.readyInMin}</span>
                  </div>
                  <CardHeader
                    title={value.title}
                    className={classes.cardHeader}
                  />
                  {/* <Rate index={`mf-${i}`}/> */}
                  <CardContent>
                    {value.description}
                  </CardContent>
                  <CardActions disableSpacing className={classes.cardAction}>
                    <div>
                      <FavoriteFood/><span>1000</span>
                      <EyeIcon/><span>100</span>
                    </div>
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
