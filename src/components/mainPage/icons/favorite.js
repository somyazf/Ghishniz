import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ToggleButton from '@material-ui/lab/ToggleButton';


const useStyles = makeStyles(theme => ({
    root:{
      color: 'red'
    },
})
)


export default function StandaloneToggleButton() {
    const [selected, setSelected] = React.useState(false);
    const classes = useStyles();
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