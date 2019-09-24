import React from "react";
import { Header } from "../components/header/header";
import { Footer } from "../components/footer/footer";
import { RegisterPage } from "../components/register.page";

const RegisterPages = () => {
  return (
    <>
      <Header />
      <RegisterPage/>
      <Footer />
    </>
  );
};


export default RegisterPages;