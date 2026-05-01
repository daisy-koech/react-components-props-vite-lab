import React from "react";
import PropTypes from "prop-types";

function Header ({name}) {
    return(
        <div id="header">
            <h1>{name}</h1>
        </div>
    )
}
Header.propTypes ={
    name: PropTypes.string.isRequired
}
export default Header;

