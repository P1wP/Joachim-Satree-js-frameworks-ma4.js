import React from "react";
import Heading from "../layout/Heading";

export function About(){
    return(
        <>
            <Heading title={"JS frameworks MA4"} />
            <ul>
                <li>Create a new React app using Create React App. You can call it <code>react-ma4</code>.</li>
                <li>Add appropriate PropType checks to the components.</li>
                <li>Create the following components:</li>
            </ul>

            <p><strong>RecipeList</strong></p>
            <p>This component will connect to the API and display a list of recipe items using the <code>RecipeItem</code> component below.</p>
            <p>As always, inspect the return value of the API call to determine the appropriate properties to use as props for the <code>RecipeItem</code> component.</p>
            <p>This component will pass a function that filters the list on the relevant property into the <code>SearchRecipe</code> component.</p>

            <p><strong>RecipeItem</strong></p>
            <p>This component will display the name and image of the recipe.</p>

            <p><strong>SearchRecipe</strong></p>
            <p>This component will recieve a filtering function as a prop. Include the component in the <code>RecipeList</code> component above the list.</p>

            <h2>Level 2</h2>
            <p>Create an <code>IngredientList</code> component that receives a list of ingredients as a string. Convert the string into an array and return a list of ingredients using the <code>map</code> method.</p>
            <p>Include this component in the <code>RecipeItem</code> component.</p>
            
        </>
    );
}

export default About;