import React, { useState } from "react";
import { Container, Row, Col } from "shards-react";
import PageTitle from "../components/common/PageTitle";
import Editor from "../components/add-new-post/Editor";
import SidebarActions from "../components/add-new-post/SidebarActions";
import SidebarCategories from "../components/add-new-post/SidebarCategories";
import { withRouter } from "react-router-dom";
import { AUTHHOST } from '_constants/other.constants';
import Axios from 'axios';

const AddNewPost = (props) =>{ 

  const [values,setValues] = useState({
    title: '',
    direction: '',
    readyInMinutes: '',
    servings: '',
    image: ''
  })

  const [image, setImage] = useState('');
  const [imagePreviewUrl, setImagePreviewUrl] = useState('');

  const handleChange = ({target:{name,value}}) => {
    setValues({ ...values, [name]: value });
  };

  const handleImageChange = (e) => {
    let reader = new FileReader();
    let file = e.target.files[0];
    reader.onloadend = () => {
      setImage(file);
      setImagePreviewUrl(reader.result);
    }
    reader.readAsDataURL(file);
    setValues({ ...values, [e.target.name]: e.target.value });
  }

  const addPost = async() => {
    try{
      const response = await Axios({
        method: 'post',
        url: `${AUTHHOST}/data/submittedRecipes`,
        headers: {
          'Content-Type': 'application/json',
        },
        data: values
      });
      if (response.status === 200){
        console.log('response from add post is ', response);
        props.history.push('/add-new-post');
      }
    } catch (error){
      console.log(error.response);
    }
  }   

  return <>
    <Container fluid className="main-content-container px-4 pb-4">
      {/* Page Header */}
      <Row noGutters className="page-header py-4">
        <PageTitle sm="4" title="Add New Recipe" subtitle="recipe" className="text-sm-left" />
      </Row>

      <Row>
        {/* Editor */}
        <Col lg="9" md="12">
          <Editor
            values = {values}
            valuesTitle = {values.title}
            valuesDirection = {values.direction}
            valuesReadyInMinutes = {values.readyInMinutes}
            valuesServings = {values.servings}
            imagePreviewUrl = {imagePreviewUrl}
            handleChange = {handleChange}
            handleImageChange = {handleImageChange}
          />
        </Col>

        {/* Sidebar Widgets */}
        <Col lg="3" md="12">
          <SidebarActions
            addPost = {addPost}
          />
          <SidebarCategories />
        </Col>
      </Row>
    </Container>
  </>
}
withRouter(AddNewPost);
export {AddNewPost};