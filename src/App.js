// import React from 'react';
// import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
// import Home from './_pages/home.page';
// import {Recipes} from './_pages/recipes.page';
// import Recipe from './_pages/singleRecipe.page';
// import {LoginPage} from "./_pages/login.page";
// import {RegisterPage} from "./_pages/register.page";
// import {history} from './_helpers/history';
// import { connect } from "react-redux";
// import './App.css';
// import AddNewPost from './views/AddNewPost';
// import BlogOverview from './views/BlogOverview';
// import UserProfile from './views/dashboard/userDashboard';

// const App = ({user}) =>{
//     return<>
//         <Router history={history}>
//           <Switch>
//             <Route path="/" exact component={Home}/>
//             <Route path="/recipes" component={Recipes}/>
//             <Route path="/recipe/:id" component={Recipe} />
//             <Route path="/login" exact component={LoginPage}/>
//             <Route path="/register" exact component={RegisterPage}/>
//             <Route path="/addnewpost" exact component={AddNewPost}/>
//             <Route path="/blog-overview" exact component={BlogOverview}/>
//             <Route path="/user-profile" exact component={UserProfile}/>
//           </Switch>
          
//         </Router>
//       </>
// }
// const mapStateToProps = state => {
//   const {user} = state.authentication;
//   return { user };
// };

// const ConnectedApp = connect(mapStateToProps)(App);

// export default  ConnectedApp;


// // import React from "react";
// // import { BrowserRouter as Router, Route } from "react-router-dom";
// // import routes from "./routes";
// // import withTracker from "./withTracker";
// // import "bootstrap/dist/css/bootstrap.min.css";
// // import "./shards-dashboard/styles/shards-dashboards.1.1.0.min.css";

// // export default () => (
// //   <Router>
//     //   <Switch>
        
      
//     //  <div>
//     //    {routes.map((route, index) => {
// //         return (
// //           <Route
// //             key={index}
// //             path={route.path}
// //             exact={route.exact}
// //             component={withTracker(props => {
// //               return (
// //                 <route.layout {...props}>
// //                   <route.component {...props} />
// //                 </route.layout>
// //               );
// //             })}
// //           />
// //         );
// //       })}
// //     </div>
//     // </Switch>
// //   </Router>
// // );



import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import routes from "./routes";
import withTracker from "./withTracker";

import "bootstrap/dist/css/bootstrap.min.css";
import "./shards-dashboard/styles/shards-dashboards.1.1.0.min.css";

export default () => (
  <Router >
    <div>
      {routes.map((route, index) => {
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
    </div>
  </Router>
);
