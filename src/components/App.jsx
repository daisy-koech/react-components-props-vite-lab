import React from "react";
import Header from "./Header.jsx"
import ArticleList from "./ArticleList.jsx";
import About from "./About.jsx";

import blogData from "../data/blog.js";

function App() {
  return(
    <div className="App">
    <Header name={blogData.name}/>
    <ArticleList posts={blogData.posts}/>
    <About image={blogData.image} about={blogData.about}/>
   </div>
  )
}
export default App;
