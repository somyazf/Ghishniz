import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Routes } from "./_routes";
import withTracker from "./withTracker";
import { history } from './_helpers/history';
import { connect } from "react-redux";
import './App.css';
import { Home, Recipes, SingleRecipe, AddNewPost, BlogOverview, UserProfileLite } from './_pages';
import LoginPages from './_pages/login_page';
import RegisterPages from './_pages/register_page';
import UserDashboard from './_pages/userDashboard/dashboard';
import { DefaultLayout } from './layouts';




const App = ({user}) =>{
    return<>
        <Router history={history}>
          <Switch>
            <Route path="/" exact component={Home}/>
            <Route path="/recipes" component={Recipes}/>
            <Route path="/recipe/:id" component={SingleRecipe} />
            <Route path="/login" exact component={LoginPages}/>
            <Route path="/register" exact component={RegisterPages}/>
            <Route path="/addnewpost" exact component={AddNewPost}/>
            <Route path="/blog-overview" exact component={BlogOverview}/>
            <Route path="/dashboard" exact render={ ()=> <UserDashboard  component={BlogOverview} />}/>
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


// import React from "react";
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import Routes from "./_routes/routes";
// import withTracker from "./withTracker";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "./shards-dashboard/styles/shards-dashboards.1.1.0.min.css";

// export default () => (
//   <Router>
//     <div>
//       <Switch>
//         {Routes.map((route, index) => {
//           return (
//             <Route
//               key={index}
//               path={route.path}
//               exact={route.exact}
//               component={withTracker(props => {
//                 return (
//                   <route.layout {...props}>
//                     <route.component {...props} />
//                   </route.layout>
//                 );
//               })}
//             />
//           );
//         })}
//       </Switch>
//     </div>
//   </Router>
// );
