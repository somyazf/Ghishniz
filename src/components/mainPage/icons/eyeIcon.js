import React from 'react';
import VisibilityIcon from '@material-ui/icons/Visibility';
// import IconButton from "@material-ui/core/IconButton";
import { makeStyles } from "@material-ui/core/styles";
import ToggleButton from '@material-ui/lab/ToggleButton';


const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: 'transparent !important',
    borderRadius: '50%',
    margin: '0 10px',
    outline: 'none !important'
  }
}));


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
      <VisibilityIcon/>
    </ToggleButton>
  );
}