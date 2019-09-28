import LoginPages from '../_pages/login_page';
import { DefaultLayout } from "../layouts";
import { 
  Home,
  Recipes, 
  SingleRecipe, 
  RegisterPage, 
  BlogPosts, 
  AddNewPost, 
  UserProfileLite, 
  BlogOverview
} 
from "../_pages";

const Routes = [
  {
    path: "/",
    exact: true,
    component: Home
  },
  {
    path: "/recipes",
    component: Recipes
  },
  {
    path: "/recipe/:id",
    component: SingleRecipe
  },
  {
    path: "/login",
    component: LoginPages
  },
  {
    path: "/register",
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
  },
  {
    path: "/blog-posts",
    layout: DefaultLayout,
    component: BlogPosts
  },
];

export {Routes};