import React, { useState } from "react";

function NewPlantForm({postPlant}) {
  const [name,setname] = useState("")
  const [image,setimage] = useState("")
  //This is currently a string
  const [price,setprice] = useState(0)

  function handleSubmit(e){
    e.preventDefault()
    const newplant ={
      name: name,
      image:image,
      price:price
    }
    postPlant(newplant)
    setname("")
    setimage("")
    setprice(0)
  }

  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Plant name" value={name} onChange={(e)=>setname(e.target.value)}/>
        <input type="text" name="image" placeholder="Image URL" value={image} onChange={(e)=>setimage(e.target.value)}/>
        <input type="number" name="price" step="0.01" placeholder="Price" value={price} onChange={(e)=>setprice(e.target.value)}/>
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
