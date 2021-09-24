import React from "react";
import img1 from "../assets/beers.png"
import img2 from "../assets/random-beer.png"
import img3 from "../assets/new-beer.png"
import Panel from "../components/Panel";

const panels = [
  {
    id: "1",
    image: img1,
    name: 'All Beers',
    link: '/beers'
  },
  {
    id: "2",
    image: img2,
    name: 'Random Beer',
    link: '/random-beer'
    
  },
  {
    id: "3",
    image: img3,
    name: 'New Beer',
    link: '/new-beer',
    
  }
];

function HomePage() {
    return (
      <div className="HomePage">
       {panels.map((panel)=>{return(
           <Panel key={panel.id} panels={panel} />
       )})}
      </div>
    );
  }
  
  export default HomePage;