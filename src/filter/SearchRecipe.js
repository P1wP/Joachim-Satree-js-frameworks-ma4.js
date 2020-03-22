import React from "react";
import PropTypes from "prop-types";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";

export default function Search( { SearchRecipe } ){
    return(
        <InputGroup className="search">
            <FormControl
                placeholder="Search by name..."
                onChange={event => SearchRecipe(event)}>

            </FormControl>
        </InputGroup>
    );
}

Search.propTypes = {
    SearchRecipe: PropTypes.func.isRequired
}