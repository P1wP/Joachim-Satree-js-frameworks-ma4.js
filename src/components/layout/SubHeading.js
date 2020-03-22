import React from "react";
import PropTypes from "prop-types";

function SubHeading({title}){
    return(
        <h2>{title}</h2>
    );

}

SubHeading.propTypes = {
    title: PropTypes.string.isRequired
};

export default SubHeading;