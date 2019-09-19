import React from "react";
import { Redirect } from "react-router-dom";

// Layout Types
import { DefaultLayout } from "./layouts";

// Route Views
import BlogOverview from "../views/BlogOverview";
import UserProfileLite from "../views/UserProfileLite";
import AddNewPost from "../views/AddNewPost";
import BlogPosts from "../views/BlogPosts";
import { Recipes } from ".../_pages/recipes.page";
import {SingleRecipe} from "../_pages/singleRecipe.page";
import { LoginPage } from "../_pages/login.page";
import { RegisterPage } from "../_pages/register.page";

export default [
  {
    path: "/",
    exact: true,
    component: () => <Redirect to="/" />
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
  },
  {
    path: "/recipes",
    layout: DefaultLayout,
    component: Recipes
  },
  {
    path: "/recipe/:id",
    layout: DefaultLayout,
    component: SingleRecipe
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
];
