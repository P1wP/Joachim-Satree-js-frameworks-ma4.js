// Lvl 1
// display a list of recipe items
// Using result of API call in RecipeList.js

// List will 
// display the name and image of the recipe.


import React from "react";
import PropTypes from "prop-types";
import SubHeading from "../layout/SubHeading";
import Ingredients from "./IngredientList";


function RecipeItem({title, thumbnail, ingredients}){
    console.log(ingredients);
    return (
        <div className="recipieContainer">
            <li><SubHeading title = {title} /></li>
            <li><img  src={thumbnail} alt={title}/></li>
            <Ingredients ingredients = {ingredients} />
        </div>
    
    );
}

RecipeItem.propTypes = {
    title: PropTypes.string.isRequired,
    thumbnail: PropTypes.string.isRequired
};

export default RecipeItem;