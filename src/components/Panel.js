import React from "react";
import {Link} from "react-router-dom"

function Panel(props) {
    const {image,name,link} = props.panels

    return (
      <div className="Panel">
       <img src={image} alt="" />
        <Link to={link}>
       <h1>{name}</h1>
       </Link>

       <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem laborum esse sunt porro aut totam animi ut eligendi. Et ullam explicabo ipsam distinctio deleniti enim repellat possimus repudiandae ducimus perspiciatis.</p>
      </div>
    );
  }
  
  export default Panel;