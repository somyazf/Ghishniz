import React from "react";
import { Redirect } from "react-router-dom";

// Layout Types
import { DefaultLayout } from "./layouts";

// Route Views
import BlogOverview from "./views/BlogOverview";
import UserProfileLite from "./views/UserProfileLite";
import AddNewPost from "./views/AddNewPost";
import BlogPosts from "./views/BlogPosts";
import { Recipes } from "./_pages/recipes.page";
import Recipe from "./_pages/singleRecipe.page";
import { LoginPage } from "./_pages/login.page";
import { RegisterPage } from "./_pages/register.page";
import Home from "./_pages/home.page";

export default [
  // {
  //   path: "/",
  //   exact: true,
  //   layout: DefaultLayout,
  //   component: () => <Redirect to="/" />
  // },
  {
    path: "/",
    layout: DefaultLayout,
    exact: true,
    component: Home
  },

  {
    path: "/recipes",
    layout: DefaultLayout,
    component: Recipes
  },
  {
    path: "/recipe",
    layout: DefaultLayout,
    component: Recipe
  },
  {
    path: "/login",
    layout: DefaultLayout,
    component: LoginPage
  },
  {
    path: "/blog-posts",
    layout: DefaultLayout,
    component: BlogPosts
  },
  {
    path: "/register",
    layout: DefaultLayout,
    component: RegisterPage
  },
  {
    path: "/blog-overview",
    layout: DefaultLayout,
    component: BlogOverview
  },
  {
    path: "/user-profile-lite",
    layout: DefaultLayout,
    component: UserProfileLite
  },
  {
    path: "/add-new-post",
    layout: DefaultLayout,
    component: AddNewPost
  }
  // {
  //   path: "/login-page",
  //   layout: DefaultLayout,
  //   component: UserProfileLite
  // },
];
