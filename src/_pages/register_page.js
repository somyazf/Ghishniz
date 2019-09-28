import React from "react";
import { Header } from "components/header/header";
import { Footer } from "components/footer/footer";
import { RegisterPage } from "components/register.page";
import { withRouter } from "react-router-dom";

const RegisterPages = () => {
  return (
    <>
      <Header/>
      <RegisterPage/>
      <Footer/>
    </>
  );
};

withRouter(RegisterPage);
export {RegisterPages};