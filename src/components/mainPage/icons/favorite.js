import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ToggleButton from '@material-ui/lab/ToggleButton';
import { red } from '@material-ui/core/colors';

const useStyles = makeStyles(theme => ({
    root:{
      color: 'red',
      backgroundColor: 'transparent !important',
      borderRadius: '50%',
      margin: '0 8px',
      outline: 'none !important'
    },
    iconHover: {
      '&:hover': {
        color: red[800],
      },
    }
  })
)

export default function StandaloneToggleButton() {
  const classes = useStyles();
  const [selected, setSelected] = React.useState(false);
  return (
      
    <ToggleButton
      value="!check"
      selected={!selected}
      onChange={() => {
        setSelected(!selected);
      }}
      className={classes.root}
    >
      <FavoriteIcon />
    </ToggleButton>
  );
}

function Favorite() {
  const classes = useStyles();
  return (
    <FavoriteIcon className={classes.iconHover} color="error" style={{ fontSize: 30 }}/>
  );
}

export {Favorite};
