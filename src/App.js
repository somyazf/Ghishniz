import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Routes } from "./_routes";
import withTracker from "./withTracker";
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
              component={withTracker(props => {
                return (
                  <route.layout {...props}>
                    <route.component {...props} />
                  </route.layout>
                );
              })}
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