import React from "react";
import PropTypes from "prop-types";

function About ({image, about}){
    return(
        <aside id="about">
            <img src={image} alt="blog logo"/>
            <p>{about}</p>
        </aside>
    )
}
About.propTypes ={
    about: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired
}

export default About;

// About
// an <aside> element with the following elements inside:
// An <img> element
// The src set to an image passed as a prop called image
// The image should also be accessible! Give it an alt attribute of "blog logo"
// A <p> element
// The text for the blog passed in as a prop called about