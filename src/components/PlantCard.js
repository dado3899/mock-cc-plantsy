import React, { useState } from "react";

function PlantCard({plant}) {
  const {id,name,image,price} = plant
  const [instock,setinstock] = useState(true)
  return (
    <li className="card">
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <p>Price: {price}</p>
      {instock ? (
        <button className="primary" onClick={()=>setinstock(false)}>In Stock</button>
      ) : (
        <button onClick={()=>setinstock(true)}>Out of Stock</button>
      )}
    </li>
  );
}

export default PlantCard;
