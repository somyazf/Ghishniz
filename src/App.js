import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './_components/mainPage/home';
import Header from './_components/header/header';
import Footer from './_components/footer';
import Recipes from './_components/recipePage/recipes';
import Recipe from './_components/recipePage/recipe';
import {LoginPage} from "./_components/login";
import {RegisterPage} from "./_components/register";
import './App.css';
import LogoPage from './_components/header/logo';

const App = (props) =>{
    return<>
        <Router>
          <Switch>
            
            <Route exact path="/" component={Home}/>
            {/* <Route path="/header" component={Header}/>
            <Route path="/footer" component={Footer}/> */}
            <Route path="/recipes" component={Recipes}/>
            <Route path="/recipe/:id" component={Recipe} />
            <Route path="/login" exact component={LoginPage}/>
            <Route path="/register" exact component={RegisterPage}/>
          </Switch>
        </Router>
      </>
    
}
export default App;