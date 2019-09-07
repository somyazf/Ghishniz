import React from 'react';

import { Link } from "react-router-dom";

const SpoonacularApi = "94be430aadf644f6a8c8c95abbcce4c1";
const baseUrl = "https://api.spoonacular.com";
const imgUrl = "https://webknox.com/recipeImages/";

class Recipe extends React.Component {
  state = {
    activeRecipe: []
  }
  componentDidMount = async () => {
    const title = this.props.location.state.recipe;
    const req = await fetch(`${baseUrl}/recipes/search?apiKey=${SpoonacularApi}&query=${title}`);
    const res = await req.json();
    this.setState({ activeRecipe: res.results[0] });
    console.log(this.state.activeRecipe);
  }
  render() {
    const recipe = this.state.activeRecipe;
    return (
      <div className="container">
        { this.state.activeRecipe.length !== 0 &&
          <div className="active-recipe">
            <img className="active-recipe__img" src={`${imgUrl}${recipe.image}`} alt={recipe.title}/>
            <h3 className="active-recipe__title">{ recipe.title }</h3>
            <h4 className="active-recipe__publisher">
            readyInMinutes: <span>{ recipe.readyInMinutes }</span>
            </h4>
            <p className="active-recipe__website">servings: 
              <span>{recipe.servings}</span>
            </p>
            <button className="active-recipe__button">
              <Link to="/recipes">Go Home</Link>
            </button>
          </div>
        }
      </div>
    );
  }
};

export default Recipe;