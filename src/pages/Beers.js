import React from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../components/NavBar';
import axios from 'axios';
import { useState, useEffect } from 'react';
import BeerItem from '../components/BeerItem';

//https://ih-beers-api2.herokuapp.com/beers
function Beers() {
  const [beers, setBeers] = useState([]);

  useEffect(() => {
    axios
      .get('https://ih-beers-api2.herokuapp.com/beers')
      .then((result) => {
        setBeers(result.data);
        console.log(result.data[0]); //borrar
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="Beers ">
      <NavBar />
      {beers.map((beer) => (
        
        <BeerItem beer={beer} key={beer._id}/>
      ))}
    </div>
  );
}

export default Beers;
