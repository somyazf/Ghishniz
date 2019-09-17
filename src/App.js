import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './_pages/home.page';
import {Recipes} from './_pages/recipes.page';
import {SingleRecipe} from './_pages/singleRecipe.page';
import {LoginPage} from "./_pages/login.page";
import {RegisterPage} from "./_pages/register.page";
import {PrivateRoute} from './_routes/privateRoute';
import {history} from './_helpers/history';
import { connect } from "react-redux";
import './App.css';

const App = ({user}) =>{
    return<>
        <Router history={history}>
          <Switch>
            <Route path="/" exact component={Home}/>
            <Route path="/recipes" component={Recipes}/>
            <Route path="/recipe/:id" component={SingleRecipe} />
            <Route path="/login" exact component={LoginPage}/>
            <Route path="/register" exact component={RegisterPage}/>
          </Switch>
        </Router>
      </>
}
const mapStateToProps = state => {
  const {user} = state.authentication;
  return { user };
};

const ConnectedApp = connect(mapStateToProps)(App);

export default  ConnectedApp;