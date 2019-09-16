import React,{useState} from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Rate from "../icons/rating"
import EyeIcon from "../icons/eyeIcon";
import FavoriteFood from "../icons/favorite";
import DetailButtons from '../button/button.js'
import sug4 from '../../../assets/sug4.jpeg'

const useStyles = makeStyles(theme => ({
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
      created_at: "September 1, 2016",
      description:
        "This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like."
    },
    {
      title: "kashke bademjun",
      created_at: "September 11, 2016",
      description:
        "This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like."
    },
    {
      title: "kashke bademjun",
      created_at: "September 10, 2016",
      description:
        "This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like."
    }
  ];

  return (
    <>
      <Grid container className={classes.root} spacing={2}>
        <Grid item xs={12}>
          <Grid container justify="center" spacing={4}>
            {suggestions.map((value, i) => (
              <Grid key={i} item md={2}>
                <Card className={classes.card}>
                  <CardHeader
                    title={value.title}
                    subheader={value.created_at}
                  />
                  <CardMedia
                    className={classes.media}
                    image={sug4}
                    title="Paella dish"
                  />
                  <CardContent>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="p"
                    >
                      {value.description}
                    </Typography>
                  </CardContent>
                  <CardActions disableSpacing>
                    <FavoriteFood/>
                    <EyeIcon/>
                    <Rate/>
                  </CardActions>
                  <DetailButtons/>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}