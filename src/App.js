import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Switch, Route} from "react-router-dom";
import HomePage from "./pages/HomePage";
import NavBar from './components/NavBar';
import Beers from "./pages/Beers"


function App() {
  return (
    <div className="App">
    <Switch>
<Route 
exact
path= "/"
component={HomePage}
/>

<Route
exact
path="/beers"
component={Beers}/>

</Switch>
    </div>
  );
}

export default App;