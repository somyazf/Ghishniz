import React, { Component } from 'react';
import './App.css';

import Form from "./components/Form";
import Recipes from "./components/Recipes";

const SpoonacularApi = "94be430aadf644f6a8c8c95abbcce4c1";

class Recipes extends Component {
  state = {
    recipes: []
  }
  getRecipe = async (e) => {
    const recipeName = e.target.elements.recipeName.value;
    const baseUrl = 'https://api.spoonacular.com';
    e.preventDefault();
    const api_call = await fetch(`https://cors-anywhere.herokuapp.com/{baseUrl}/recipes/search?apiKey=${SpoonacularApi}&query=${recipeName}&_number=10`);
    
    const data = await api_call.json();
    this.setState({ recipes: data.results });
    console.log(this.state.recipes);
  }
  componentDidMount = () => {
    const json = localStorage.getItem("recipes");
    const recipes = JSON.parse(json);
    this.setState({ recipes });
  }
  componentDidUpdate = () => {
    const recipes = JSON.stringify(this.state.recipes);
    localStorage.setItem("recipes", recipes);
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Recipe Search</h1>
        </header>
        <Form getRecipe={this.getRecipe} />
        <Recipes recipes={this.state.recipes} />
      </div>
    );
  }
}

export default App;

