import React from 'react';
import { Router, Switch, Route } from 'react-router-dom';
import { Routes } from "_routes";
import { history } from '_helpers/history';
import { connect } from "react-redux";
import 'App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "shards-dashboard/styles/shards-dashboards.1.1.0.min.css";


const withLayout = (WrappedComponent, options = {}) => {
  const HOC = (props) => <WrappedComponent {...props} />;
  return HOC;
};

const App = ({user}) =>{
    return<>
        <Router history={history}>
          <Switch>
            {Routes.map(({component:Component,layout:Layout, ...rest},index)=><Route 
              key={index}
              {...rest}
              component = {Layout ? withLayout(props=>
                <Layout {...props}><Component {...props}/></Layout>): 
                withLayout(props=><Component {...props}/>
              )}
            />)}
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

