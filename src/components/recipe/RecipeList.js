//connect to the API

import React,{ useState, useEffect } from "react";
import Spinner from "react-bootstrap/Spinner";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { BASE_URL } from "../../constants/Api";
import RecipeItem from "./RecipeItem";
import Heading from "../layout/Heading";
import Search from "../../filter/SearchRecipe";

function RecipeList(){
    const [recipies, setRecipies] = useState([]);
    const [ filteredRecipies, setFilteredRecipies ] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch(BASE_URL)
            .then(response => response.json())
            .then(json => { 
                setRecipies(json.results)
                setFilteredRecipies(json.results)
            })
            .catch(error => console.log(error))
            .finally(() => setLoading(false));
    }, []);// END FETCH;

    // FILTER CFUNCTION
    const filterRecipe = function(e){
        // VALUE OF SEARCH INPUT
        const searchValue = e.target.value.toLowerCase();
        console.log(searchValue);

        // CREATE NEW ARRAY FROM CHARACTER ARRAY
        const filteredArray = recipies.filter(function(recipe){
            // MAKE ALL NAMES LOWERCASE
            const lowerCaseName = recipe.title.toLowerCase();

            // Check if the character name begins with search value.
            if(lowerCaseName.startsWith(searchValue)){
                // IF IT DOES, RETURN TRUE
                // ADD IT TO THE ARRAY
                return true;
            }
            // IF NOT, RETURN FALSE
            return false;
        }); // END FILTERED ARRAY
        

        // SET FILTERED CHARACTERS TO THE NEW ARRAY
        setFilteredRecipies(filteredArray);
        console.log(filteredRecipies);

    };

    if (loading) {
        return (
            <>
            <Heading title="Recipies" />
            <Spinner animation="border" className="spinner" />
            </>
        );
    }

    // DISPLAY DATA
    // USE filterdRecipies to mad trought array
    // If there is nothing in the search input all recipies will load. Else only the once containing 
    return (
        
        <>
            <Heading title="Recipies" />

            <Search SearchRecipe={filterRecipe}></Search>
            <Row>
            {filteredRecipies.map(recipe => {
                const {title, thumbnail, ingredients} = recipe;

                return(
                    <Col sm={6} md={6}>
                    <ul className="recipe" key={title}>
                        <RecipeItem title={title} thumbnail={thumbnail} ingredients={ingredients}/>
                    </ul>
                    </Col>
                ); 
            })}
            </Row>
        </>
    ); // END RETURN;

} // END RecipeList()

export default RecipeList;