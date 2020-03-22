// Lvl 2
// display Ingredients of recipe (new page? ectend list?)

import React from "react";
import PropTypes from "prop-types";
import SubHeading from "../layout/SubHeading";

export function Ingredients({ingredients}){
    // CONVERT STRING TO 
    console.log(ingredients.split(","));
    const arrayFromString = ingredients.split(",");
  

    // LIST FROM ARRAY
    const listFromArray = arrayFromString.map((arrayFromString) =>
        <li>{arrayFromString}</li>
    );

    return(
        <>
            <li><SubHeading title ="Ingredients"/></li>
            <>{listFromArray}</>
        </>
    );
    

};

Ingredients.propTypes = {
    
    arrayFromString: PropTypes.array.isRequired
}

export default Ingredients;