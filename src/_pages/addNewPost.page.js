import React, { useState } from "react";
import { Container, Row, Col } from "shards-react";
import PageTitle from "../components/common/PageTitle";
import Editor from "../components/add-new-post/Editor";
import SidebarActions from "../components/add-new-post/SidebarActions";
import SidebarCategories from "../components/add-new-post/SidebarCategories";
import { withRouter } from "react-router-dom";
import { AUTHHOST } from '_constants/other.constants';
import Axios from 'axios';
import { connect } from "react-redux";
import { uploadFileAction } from "_actions";

const AddNewPost = (props) =>{ 

  const [values,setValues] = useState({
    title: '',
    direction: '',
    readyInMinutes: '',
    servings: '',
    ingredients: [],
    image: ''
  })
  const { dispatch, error, loading, items } = props;
  const [image, setImage] = useState('');
  const [imagePreviewUrl, setImagePreviewUrl] = useState('');

  const blankIngredinet = {ingredient:''};
  const [inputs, setInputs] = useState([
      {...blankIngredinet}
  ]);

  const handleChange = ({target:{name,value}}) => {
    setValues({ ...values, [name]: value });
  };
  
  const addInput = () =>{
    setInputs([...inputs, {...blankIngredinet}]);
  }

  const handleInputChange = (event) => {
      const updatedInputs = [...inputs];
      updatedInputs[event.target.name] = event.target.value;
      setInputs(updatedInputs); 
      setValues({ ...values, [event.target.name]: event.target.value });
  }

  const handleRemove = (id) =>{
    const items = [...inputs]
    items.splice(id, 1);
    setInputs(items);
  } 

  const handleImageChange = (event) => {
    let reader = new FileReader();
    let file = event.target.files[0];
    reader.onloadend = () => {
      setImage(file);
      setImagePreviewUrl(reader.result);
    }
    reader.readAsDataURL(file);
  }
  
  const uploadImage = (event) => {
    
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
            valuesIngredients = {values.ingredients}
            handleChange = {handleChange}
            inputs={inputs}
            addInput={addInput}
            handleInputChange={handleInputChange}
            handleRemove={handleRemove}
          />
        </Col>

        {/* Sidebar Widgets */}
        <Col lg="3" md="12">
          <SidebarActions
            addPost = {addPost}
          />
          <SidebarCategories 
            imagePreviewUrl = {imagePreviewUrl}
            handleImageChange = {handleImageChange}
          />
        </Col>
      </Row>
    </Container>
  </>
}

const mapStateToProps = state => {
  const { loading } = state.getDataReducer;
  const { items } = state.getDataReducer;
  const { error } = state.getDataReducer;

  return { loading, items, error };
};

const ConnectedRecipesPage = withRouter(connect(mapStateToProps)(AddNewPost));
export { ConnectedRecipesPage as AddNewPost };