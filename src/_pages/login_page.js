import React from "react";
import { Header } from "components/header/header";
import { Footer } from "components/footer/footer";
import { LoginPage } from "components/login.page";
import { withRouter } from "react-router-dom";

const LoginPages = () => {
  return (
    <>
      <Header/>
      <LoginPage/>
      <Footer/>
    </>
  );
};

withRouter(LoginPages);
export {LoginPages};