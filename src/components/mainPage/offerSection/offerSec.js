import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Divider from '@material-ui/core/Divider';
import Grid from "@material-ui/core/Grid";
import Explore from 'assets/images/site/explore.svg';
import Submit from 'assets/images/site/create.svg';
import Create from 'assets/images/site/eat.svg';

const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
      marginBottom: 45
    },
    card: {
      maxWidth: 345
    },
    media: {
      height: 0,
      paddingTop: "5%" // 16:9
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
    typography: {
      color: "#fff !important",
      paddingTop: '13px',
    },
    divider: {
      marginBottom: '33px',
      height: '3px',
      width: '13%',
      margin: '10px auto',
      backgroundColor: '#ffbb00'
    }
  }));
  
export default function Offer() {
    const classes = useStyles();
    return (
        <>
          <div className={classes.root} className="offers">
            <Typography variant="h4" align="center" gutterBottom className={classes.typography}>
                Gishniz offers
            </Typography>
            <Divider variant="middle" className={classes.divider}/>
            <Grid container spacing={3} className={classes.root}>
                <Grid item xs>
                    <div className="jss132">
                        <img className="jss133" src={Explore} alt="suitcase"/>
                        <Typography variant="h4" align="center" gutterBottom className={classes.typography}>
                            Explore
                        </Typography>
                        <Typography variant="body1" align="center" gutterBottom className={classes.typography}>
                            Discover a world of new
                            cooking with Gishniz.
                        </Typography>
                    </div>
                </Grid>
                <Grid item xs>
                    <div className="jss132">
                        <img className="jss133" src={Create} alt="suitcase"/>
                        <Typography variant="h4" align="center" gutterBottom className={classes.typography}>
                        Create
                        </Typography>
                        <Typography variant="body1" align="center" gutterBottom className={classes.typography}>
                            Detailed ingredients & instructions
                            help to create perfection.
                        </Typography>
                    </div>
                </Grid>
                <Grid item xs>
                    <div className="jss132">
                        <img className="jss133" src={Submit} alt="suitcase"/>
                        <Typography variant="h4" align="center" gutterBottom className={classes.typography}>
                            Submit
                        </Typography>
                        <Typography variant="body1" align="center" gutterBottom className={classes.typography}>
                            Submit your own recipes
                        </Typography>
                    </div>
                </Grid>
            </Grid>
          </div>
        </>
      );
}