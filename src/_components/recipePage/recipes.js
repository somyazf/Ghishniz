import React, { Component } from 'react';
import '../../App.css';
import { Link } from "react-router-dom";
import Form from "../form";

const SpoonacularApi = "94be430aadf644f6a8c8c95abbcce4c1";
const baseUrl = "https://api.spoonacular.com";
const imgUrl = "https://webknox.com/recipeImages/";

class Recipes extends Component{
    state = {
        recipes: []
    }
    getRecipe = async (e) => {
        const recipeName = e.target.querySelector('input').value;
        e.preventDefault();
        const api_call = await fetch(`${baseUrl}/recipes/search?apiKey=${SpoonacularApi}&query=${recipeName}&_number=10`);
        const data = await api_call.json();
        this.setState({ recipes: data.results });
        console.log(this.state.recipes);
    } 
    render(){
        const {recipes} = this.state;
        return (
            <div className="container">
                <div className="row">
                    <Form getRecipe={this.getRecipe} />
                </div>
                <div className="row">
                    {recipes.map((recipe) => 
                        <div key={recipe.id} className="col-md-4" style={{ marginBottom:"2rem" }}>
                            <div className="recipes__box">
                                <img 
                                className="recipe__box-img" 
                                src={`${imgUrl}${recipe.image}`} 
                                alt={recipe.title}/>
                                <div className="recipe__text">
                                    <h5 className="recipes__title">
                                        { recipe.title.length < 20 ? `${recipe.title}` : `${recipe.title.substring(0, 25)}...` }
                                    </h5>
                                    <p className="recipes__subtitle">readyInMinutes: <span>
                                        { recipe.readyInMinutes }
                                        </span>
                                    </p>
                                </div>
                                <button className="recipe_buttons">
                                <Link to={{ 
                                    pathname: `/recipe/${recipe.id}`,
                                    state: { recipe: (recipe.title).toLowerCase() }
                                }}>View Recipe</Link>
                                </button>
                            </div>
                        </div>      
                    )}
                </div>
            </div>
        );
    }
}

export default Recipes;