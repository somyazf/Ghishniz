import React from "react";
import { Header } from "components/header/header";
import { Footer } from "components/footer/footer";
import { LoginPage } from "components/login.page";

const LoginPages = () => {
  return (
    <>
      <Header/>
      <LoginPage/>
      <Footer/>
    </>
  );
};

export {LoginPages};