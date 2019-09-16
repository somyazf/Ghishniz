import React, { useState } from "react";
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
import UserIcon from "../icons/userIcon";
import FavoriteFood from "../icons/favorite";
import DetailButtons from "../button/button.js";
import Divider from "@material-ui/core/Divider";
import sug3 from "../../../assets/sug3.jpeg";

const useStyles = makeStyles(theme => ({
  root: {
    marginBottom: 45
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
    marginBottom: "33px",
    height: "3px",
    width: "13%",
    margin: "10px auto",
    backgroundColor: "#0ec145"
  },
  cardAction: {
    justifyContent:'space-between'
  }

}));

export default function Suggestions() {
  const classes = useStyles();

  const suggestions = [
    {
      title: "Asian Chicken Noodles",
      created_at: "September 14, 2016",
      description:
        "This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like."
    },
    {
      title: "Italiano Salad Mixed",
      created_at: "September 4, 2016",
      description:
        "This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like."
    },
    {
      title: "Paella",
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
            Recently added
          </Typography>
          <Divider variant="middle" className={classes.divider} />
          <Grid container justify="center" spacing={4}>
            {suggestions.map((value, i) => (
              <Grid key={i} item lg={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.media}
                    image={sug3}
                    title="Paella dish"
                  />
                  <CardHeader
                    title={value.created_at}
                    subheader={value.title}
                  />
                  <CardContent>
                    <UserIcon />
                    by John Muler
                  </CardContent>
                  <CardActions className={classes.cardAction}>
                    <Rate />
                    <div>
                    <FavoriteFood />
                    <EyeIcon />
                    </div>
                  </CardActions>
                  <CardContent>
                    <DetailButtons  />
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}
