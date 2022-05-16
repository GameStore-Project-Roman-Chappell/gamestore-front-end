import React, { setState, useState, Component } from "react";

export default function GameRestock() {
  const [game, setGame] = useState();
  const [quantity, setQuantity] = useState();


  const handleGameSubmit = (event) => {
    event.preventDefault();
    console.log("game submitted");
  }

  return (
    <div className='GameForm'>

      <form className="gameRestock" onSubmit={handleGameSubmit}>
        <label className="itemSelect">
          Game
          <select value={game} onChange={(e) => setGame(e.target.value)}>
          <option value='gtav'>GTA V</option>
            <option value='horizonWest'>Horizon Forbidden West</option>
            <option value='kirbyLand'>Kirby and the Forgotten Land</option>
            <option value='legoStar'>Lego Star Wars: The Skywalker Saga</option>
            <option value='eldenRing'>Elden Ring</option>
            <option value='wwe'>WWE 2k22</option>
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
