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
import UserIcon from "../icons/userIcon";
import FavoriteFood from "../icons/favorite";
import DetailButtons from "../buttons/button.js";
import Divider from "@material-ui/core/Divider";
import AsianChickenNoodles from "assets/images/site/Asian-Chicken-Noodles.jpg";
import ItalianoSaladMixed from "assets/images/site/Italiano-Salad-Mixed.jpg";
import PeaAndHalloumi  from "assets/images/site/Pea-And-Halloumi.jpg";

const useStyles = makeStyles(theme => ({
  root: {
    marginBottom: 45
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
    padding: '25px 16px 0 16px'
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
}));

export default function Suggestions() {
  const classes = useStyles();

  const recentlyAdded = [
    {
      title: "Asian Chicken Noodles",
      created_at: "September 14, 2019",
      description:
        "This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like.",
      image: AsianChickenNoodles
    },
    {
      title: "Italiano Salad Mixed",
      created_at: "September 4, 2019",
      description:
        "This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like.",
      image: ItalianoSaladMixed
    },
    {
      title: "Pea And Halloumi Fritters",
      created_at: "September 10, 2019",
      description:
        "This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like.",
      image: PeaAndHalloumi
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
            {recentlyAdded.map((value, i) => (
              <Grid key={i} item lg={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.media}
                    image={value.image}
                    alt={value.title}
                  />
                  <CardHeader
                    title={value.title}
                    subheader={value.created_at}
                    className={classes.cardHeader}
                  />
                  <CardContent>
                    <Rate index={i}/> 
                    <div><UserIcon/><span>By John Muler</span></div>
                  </CardContent>
                  <CardActions disableSpacing className={classes.cardAction}>
                    <div>
                      <FavoriteFood/><span>50</span>
                      <EyeIcon/><span>10K</span>
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
