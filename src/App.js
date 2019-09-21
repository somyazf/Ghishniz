import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Routes } from "./_routes";
import { history } from './_helpers/history';
import { connect } from "react-redux";
import './App.css';

const App = ({user}) =>{
  return <>
    <Router history={history}>
      <Switch>
        {Routes.map((route, index) => {
          return (
            <Route
              key={index}
              path={route.path}
              exact={route.exact}
              component={route.component}
            />
          );
        })}
      </Switch>
    </Router>
  </>
}
const mapStateToProps = state => {
  const {user} = state.authentication;
  return { user };
};

const ConnectedApp = connect(mapStateToProps)(App);

export default ConnectedApp;