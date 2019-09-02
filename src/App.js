import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './_components/mainPage/home';
import Header from './_components/header';
import Footer from './_components/footer';
import './App.css';

const App = (props) =>{
    return<>
        <Router>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/header" component={Header}/>
            <Route path="/footer" component={Footer}/>
          </Switch>
        </Router>
      </>
    
}
export default App;