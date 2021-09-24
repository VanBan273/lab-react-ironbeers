import React from "react";
import {Link} from "react-router-dom"

function BeerItem(props) {
  console.log(props)
    return (
      <div className="BeerItem">
            <img src={props.beer.image_url} alt={props.beer.name}/>
            <div>
                <h1>{props.beer.name}</h1>
                <h2>{props.beer.tagline}</h2>
                <p>{props.beer.contributed_by}</p>
            </div>
      </div>
    );
  }
  
  export default BeerItem;