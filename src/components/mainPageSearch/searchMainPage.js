import React from "react";
import SearchIcon from "@material-ui/icons/Search";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import InputAdornment from "@material-ui/core/InputAdornment";
import FormControl from "@material-ui/core/FormControl";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";



const useStyles = makeStyles(theme => ({
  root: {
    padding: '2px 20px',
      display: 'flex',
      alignItems: 'center',
      width: 550,
      borderRadius: 50,
      justifyCntent: 'space-between',

  },
  formControl: {
    margin: theme.spacing(1),
    width:"100%",
  },
  label: {
    fontSize:'30px',
  },
  searchIcon: {
      fontSize:"20px",
      marginTop:"40px",
  }
}));

function MainPageSearch() {
  const classes = useStyles();

  return (
      <Paper className={classes.root}>
 <FormControl className={classes.formControl}>
      <InputLabel className={classes.label} htmlFor="input-with-icon-adornment">Search</InputLabel>
      <Input 
        id="input-with-icon-adornment"
        startAdornment={
          <InputAdornment>
            <SearchIcon/>
          </InputAdornment>
        }
        className={classes.searchIcon}
      />
    </FormControl>
      </Paper>
   
  );
}

export default MainPageSearch;
