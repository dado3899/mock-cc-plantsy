import React, { useEffect, useState } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  const [plants, setplants] = useState([])
  const [search, setsearch] = useState("")

  useEffect(()=>{
    fetch("http://localhost:6001/plants")
    .then(r=>r.json())
    .then(plants => setplants(plants))
  },[])
  console.log(search)
  //npx kill-port 6001
  function postPlant(plantobj){
    fetch("http://localhost:6001/plants",
      {
        method:"POST",
        headers:
        {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(plantobj)
      }
    )
    .then(r=>r.json())
    .then(newplant => {
      const newplantsarr=[...plants,newplant]
      setplants(newplantsarr)
    })
  }
  //Initially I had toLocaleLowerCase, which is to lowercaseing based on the local language of your machine, the more you know!
  const filteredplants = plants.filter((plant)=>{ 
    return plant.name.toLowerCase().includes(search.toLowerCase())
  })
  return (
    <main>
      <NewPlantForm postPlant={postPlant} />
      <Search search={search} setsearch={setsearch}/>
      <PlantList plants={filteredplants}/>
    </main>
  );
}

export default PlantPage;
