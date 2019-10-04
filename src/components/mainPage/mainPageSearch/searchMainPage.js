import React, { useState } from "react";
import SearchIcon from "@material-ui/icons/Search";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import InputAdornment from "@material-ui/core/InputAdornment";
import FormControl from "@material-ui/core/FormControl";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Axios from 'axios';
import {HOST} from '../../../_constants';
import { withRouter } from "react-router-dom";

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
    fontSize:'27px',
  },
  searchIcon: {
      fontSize:"15px",
      marginTop:"40px",
  }
}));

function MainPageSearch(props) {
  const classes = useStyles();

  const [name, setName] = useState('');
  const [suggest, setSuggest] = useState([]);

  const changeHandler = (event) => {
    const {value,name} = event.target;
    setName(value);
    if(value.length > 2){
        Axios.get(`${HOST}?apiKey=94be430aadf644f6a8c8c95abbcce4c1&query=${value}&number=20`).then(response=>{
          setSuggest(response.data.results);
          console.log(response);
          console.log(suggest);
        })
        props.history.push({pathname :'/recipes', state:{query: value}});
    }
  }

  // const goToRecipe = ()=>{
  //   props.history.push({pathname :'/recipes', state:{query: value}});
  // }

  return <>
      <Paper className={classes.root}>
        <FormControl className={classes.formControl}>
          <InputLabel className={classes.label} htmlFor="input-with-icon-adornment">Search</InputLabel>
          <Input 
            id="input-with-icon-adornment"
            name="search"
            startAdornment={
              <InputAdornment>
                <SearchIcon/>
              </InputAdornment>
            }
            className={classes.searchIcon}
            value={name} 
            onChange={changeHandler}
          />
        </FormControl>
      </Paper>
      {/* {(suggest.length > 0) && <ul className="suggest">
      {suggest.map(country=><li key={country.id} onClick={goToRecipe}>{country.title}</li>
      )}
      </ul>
      } */}
  </>
}

const inputWithRouter = withRouter(MainPageSearch)
export {inputWithRouter as MainPageSearch};
