import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/ButtonBase';
import Typography from '@material-ui/core/Typography';
import Breakfast from 'assets/images/site/breakfast.jpg';
import Lunch from 'assets/images/site/lunch.jpg';
import Dinner from 'assets/images/site/dinner.jpg';
import Dessert from 'assets/images/site/dessert.jpg';
import {Link} from "react-router-dom";


const images = [
  {
    url: Breakfast,
    title: 'Breakfast',
    subtitle: 'Browse the selection of breakfast and brunch recipes to get you off to a great start for the day!',
    width: '25%',
  },
  {
    url: Lunch,
    title: 'Lunch',
    subtitle: 'From light pastas, salads, sandwiches and more, you will never go hungry at lunch time again!',
    width: '25%',
  },
  {
    url: Dinner,
    title: 'Dinner',
    subtitle: 'Our dinner recipes feature dishes all across the world, you will find something to suite your tastes here!',
    width: '25%',
  },
  {
    url: Dessert,
    title: 'Dessert',
    subtitle: 'Take a look at our indulgent and delicious sweet treats that you will want to try again and again!',
    width: '25%',
  },
];

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    minWidth: 300,
    width: '100%',
    padding: '70px 0',
  },
  image: {
    position: 'relative',
    height: 350,
    [theme.breakpoints.down('xs')]: {
      width: '100% !important',
      height: 100,
    },
    '&:hover, &$focusVisible': {
      zIndex: 1,
      '& $imageBackdrop': {
        opacity: 0.15,
      },
      '& $imageMarked': {
        opacity: 0,
      },
      '& $imageTitle': {
        border: '4px solid currentColor',
      },
    },
  },
  focusVisible: {},
  imageButton: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: theme.palette.common.white,
  },
  imageSrc: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundSize: 'cover',
    backgroundPosition: 'center 40%',
  },
  imageBackdrop: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: theme.palette.common.black,
    opacity: 0.4,
    transition: theme.transitions.create('opacity'),
  },
  imageTitle: {
    position: 'relative',
    padding: `${theme.spacing(2)}px ${theme.spacing(4)}px ${theme.spacing(1) + 6}px`,
    color: '#fff !important'
  },
  imageSubTitle: {
    color: '#fff !important'
  },
  imageMarked: {
    height: 3,
    width: 18,
    backgroundColor: theme.palette.common.white,
    position: 'absolute',
    bottom: -2,
    left: 'calc(50% - 9px)',
    transition: theme.transitions.create('opacity'),
  },
  typography: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '0 25px',
    paddingTop: 15,
    color: '#fff !important'
  }
}));





export default function ButtonBases(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
        {images.map(image => (
            <Button
            focusRipple
            key={image.title}
            className={classes.image}
            focusVisibleClassName={classes.focusVisible}
            style={{
                width: image.width
            }}
            // component = {Link}
            // to = {{
            //   pathname : `/Recipes`,
            //    state: {
            //     query : images.title
            //   }
            // }}
           
            >
            <span
                className={classes.imageSrc}
                style={{
                backgroundImage: `url(${image.url})`,
                }}
            />
            <span className={classes.imageBackdrop} />
            <span className={classes.imageButton}>
                <div className={classes.typography}>    
                    <Typography
                    variant="h6"
                    gutterBottom
                    className={classes.imageTitle}
                    >
                    {image.title}
                    <span className={classes.imageMarked} />
                    </Typography>
                    <Typography
                    component="p"
                    variant="subtitle1"
                    className={classes.imageSubTitle}
                    >
                    {image.subtitle}
                    </Typography>
                </div>
            </span>
        </Button>
        ))}
    </div>
  );
}
