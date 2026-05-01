import React from "react";
import PropTypes from "prop-types";

function Article ({title, date, preview}) {
    return(
        <article id="article">
            <h3>{title}</h3>
            <small>{date}</small>
            <p>{preview}</p>
        </article>
    )
}
Article.propTypes = {
    title: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    preview: PropTypes.string.isRequired
}

export default Article;