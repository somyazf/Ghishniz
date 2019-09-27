// import React from "react";
// import SearchIcon from "@material-ui/icons/Search";
// import Input from "@material-ui/core/Input";
// import InputLabel from "@material-ui/core/InputLabel";
// import InputAdornment from "@material-ui/core/InputAdornment";
// import FormControl from "@material-ui/core/FormControl";
// import { makeStyles } from "@material-ui/core/styles";
// import Paper from "@material-ui/core/Paper";

// const useStyles = makeStyles(theme => ({
//   root: {
//     padding: '2px 20px',
//       display: 'flex',
//       alignItems: 'center',
//       width: 550,
//       borderRadius: 50,
//       justifyCntent: 'space-between',

//   },
//   formControl: {
//     margin: theme.spacing(1),
//     width:"100%",
//   },
//   label: {
//     fontSize:'30px',
//   },
//   searchIcon: {
//       fontSize:"20px",
//       marginTop:"40px",
//   }
// }));

// function MainPageSearch() {
//   const classes = useStyles();
//   return (
//     <Paper className={classes.root}>
//       <FormControl className={classes.formControl}>
//         <InputLabel className={classes.label} htmlFor="input-with-icon-adornment">Search</InputLabel>
//         <Input 
//         id="input-with-icon-adornment"
//         startAdornment={
//           <InputAdornment>
//             <SearchIcon/>
//           </InputAdornment>
//         }
//         className={classes.searchIcon}
//         />
//       </FormControl>
//     </Paper>
  
//   );
// }

// export default MainPageSearch;

import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import InputAdornment from "@material-ui/core/InputAdornment";
import FormControl from "@material-ui/core/FormControl";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import {connect} from "react-redux";
import { getDataAction } from "_actions";
import IconButton from '@material-ui/core/IconButton';


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

function MainPageSearch(props) {
  const classes = useStyles();
  const {dispatch, error, loading, items} = props;
  const [query, setQuery] = useState('beef');

  const submitHandler = async (event)=>{
    const { history } = props;
    event.preventDefault();
    dispatch.then(() => history.push("/recipes"))
  }
  const handleChange = (event) => {
    setQuery(event.target.value);
  };

  return (
    <Paper className={classes.root}>
        <form onSubmit={submitHandler}
        className={classes.formWidth}
        >
            <input
            type="text"
            value={query}
            onChange={handleChange}
            className={classes.input}
            />
        </form>
        <IconButton className={classes.iconButton} aria-label="search" type="submit">
            <SearchIcon />
        </IconButton>
    </Paper>
  );
}
const mapStateToProps = state => {
  const {loading} = state.getDataReducer;
  const {items} = state.getDataReducer;
  const {error} = state.getDataReducer;
  
  return { loading, items, error };
};

const ConnectedSearch = withRouter(connect(mapStateToProps)(MainPageSearch));
export {ConnectedSearch as MainPageSearch};
