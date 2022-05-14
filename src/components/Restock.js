import React, { setState, useState, Component } from "react";

export default function Restock() {
  const [item, setItem] = useState();
  const [quantity, setQuantity] = useState();


  const handleSubmit = (event) => {
      console.log("Submitted");
    event.preventDefualt();
  };

  
    return (
      <div className='restockForm'>
        <form onSubmit={e => handleSubmit(e)}>
            <label className="itemSelect">
                Item
                <select value={item} onChange={e => setItem(e.target.value)}>
                    <option value="xboxX">Xbox X</option>
                    <option value="ps5">PS5</option>
                    <option value="switch">Nintendo Switch</option>
                    <option value="gtav">GTA V</option>
                    <option value="horizonWest">Horizon Forbidden West</option>
                    <option value="kirbyLand">Kirby and the Forgotten Land</option>
                    <option value="legoStar">Lego Star Wars: The Skywalker Saga</option>
                    <option value="eldenRing">Elden Ring</option>
                    <option value="wwe">WWE 2k22</option>
                    <option value="kingdomShirt">Kingdom Hearts Shirt</option>
                    <option value="fortniteShirt">Fortnite Shirt</option>
                    <option value="zeldaShirt">Zelda Hyrule Shirt</option>
                    <option value="dragonShirt">Dragonball Z Shirt</option>
                    <option value="kombatShirt">Mortal Kombat Shirt</option>
                    <option value="kirbyShirt">Kirby Shirt</option>
                    <option value="sonicShirt">Sonic The Hedgehog Shirt</option>
                </select>
            </label>


          <label className="quantityInput">
            Quantity
            <input
              type='text'
              name='quantity'
              value={quantity}
              onChange={e => setQuantity(e.target.value)}
            />
          </label>

          <input type='submit' value='Submit'/>
        </form>
        <a href="/">Back to Home</a>
      </div>
      
    );
  
}
