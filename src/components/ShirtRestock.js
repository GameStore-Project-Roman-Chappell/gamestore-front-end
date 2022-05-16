import React, { setState, useState, Component } from "react";

export default function ShirtRestock() {
  const [shirt, setShirt] = useState();
  
  const [quantity, setQuantity] = useState();

  

  const handleShirtSubmit = (e) => {
    e.preventDefault();
    console.log("Shirt submitted")
  }

 
  return (
    <div className='shirtForm'>


{/* Shirt form */}
      <form className="shirtRestock" onSubmit={handleShirtSubmit}>
        <label className="itemSelect">
          Shirt select
          <select value={shirt} onChange={(e) => setShirt(e.target.value)}>
            <option value='kingdomShirt'>Kingdom Hearts Shirt</option>
            <option value='fortniteShirt'>Fortnite Shirt</option>
            <option value='zeldaShirt'>Zelda Hyrule Shirt</option>
            <option value='dragonShirt'>Dragonball Z Shirt</option>
            <option value='kombatShirt'>Mortal Kombat Shirt</option>
            <option value='kirbyShirt'>Kirby Shirt</option>
            <option value='sonicShirt'>Sonic The Hedgehog Shirt</option>
          </select>
        </label>

        <label className='quantityInput'>
          Quantity
          <input
            type='text'
            name='quantity'
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
          />
        </label>
        <input type='submit' value='Submit' />
      </form>


    </div>
  );
}
