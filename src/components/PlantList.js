import React from "react";
import PlantCard from "./PlantCard";

function PlantList({plants}) {
  const plantcardarray = plants.map((plant)=>{
    return <PlantCard key={plant.id} plant={plant}/>
  })

  return (
    <ul className="cards">
      {plantcardarray}
    </ul>
  );
}

export default PlantList;
