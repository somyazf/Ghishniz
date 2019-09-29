import React,{ useState } from "react";
import { Header } from "components/header/header";
import { Footer } from "components/footer/footer";
import { RegisterPage } from "components/register.page";
import { withRouter } from "react-router-dom";
import { AUTHHOST } from '_constants/other.constants';
import Axios from 'axios';

const RegisterPages = (props) => {

  const [values,setValues] = useState({
    email: '',
    password: '',
    name: ''
  })
  const [responseMessage,setResponseMessage] = useState(null);

  const handleChange = ({target:{name,value}}) => {
      setValues({ ...values, [name]: value });
  };

  const submitHandler = async (event) =>{
      event.preventDefault();
      try{
          const response = await Axios({
              method: 'post',
              url: `${AUTHHOST}/users/register`,
              headers: {
                'Content-Type': 'application/json',
              },
              data: values
          });
          if (response.status === 200){
              setResponseMessage("Your user successfully registered");
              props.history.push('/login');
          }
      } catch (error){
          setResponseMessage(error.response.data.message);
      }
  }

  const handleClose = () =>{
      setResponseMessage(null);
  }

  return <>
    <Header/>
    <RegisterPage 
      responseMessage = {responseMessage} 
      values = {values}
      valuesPass = {values.password}
      valuesName = {values.name}
      valuesEmail = {values.email}
      handleChange = {handleChange}
      submitHandler = {submitHandler}
      handleClose = {handleClose}  
    />
    <Footer/>
  </>
};

withRouter(RegisterPages);
export {RegisterPages};