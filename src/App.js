import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Routes } from "./_routes";
import withTracker from "./withTracker";
import { history } from './_helpers/history';
import { connect } from "react-redux";
import './App.css';
import { Home, Recipes, SingleRecipe, AddNewPost, BlogOverview, UserProfileLite, BlogPosts } from './_pages';
import LoginPages from './_pages/login_page';
import RegisterPages from './_pages/register_page';
import UserDashboard from './_pages/userDashboard/dashboard';
import { DefaultLayout } from './layouts';
import "bootstrap/dist/css/bootstrap.min.css";
import "./shards-dashboard/styles/shards-dashboards.1.1.0.min.css";


const withLayout = (WrappedComponent, options = {}) => {

  // eslint-disable-next-line
  const HOC = (props) => <WrappedComponent {...props} />;


  return HOC;
};

const App = ({user}) =>{
    return<>
        <Router history={history}>
          <Switch>
            {Routes.map(({component:Component,layout:Layout, ...rest})=><Route
              {...rest}
              component = {Layout ? withLayout(props=><Layout {...props}><Component {...props}/></Layout>): withLayout(props=><Component {...props}/>)}
            />)}
            {/* <Route path="/" exact component={Home}/>
            <Route path="/recipes" component={Recipes}/>
            <Route path="/recipe/:id" component={SingleRecipe} />
            <Route path="/login" component={LoginPages}/>
            <Route path="/register" component={RegisterPages}/>
            <Route path="/add-new-post" component={AddNewPost}/>  
            <Route path="/blog-posts" component={BlogPosts}/>
            <Route path="/blog-overview" component={BlogOverview}/>
            <Route path="/user-profile-lite" component={UserProfileLite}/> */}
            <Route path="/dashboard" render={ ()=> <UserDashboard  component={BlogOverview} />}/>
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

