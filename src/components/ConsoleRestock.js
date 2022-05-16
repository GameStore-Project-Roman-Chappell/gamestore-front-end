import React, { setState, useState, Component } from "react";

export default function ConsoleRestock() {
  const [console, setConsole] = useState();
  const [quantity, setQuantity] = useState();

  const handleConsoleSubmit = (event) => {
    event.preventDefualt();
    console.log("console Submitted");
  };


  return (
    <div className='consoleForm'>

{/* Console form */}
      <form className="consoleRestock" onSubmit={(e) => handleConsoleSubmit(e)}>
        <label className='itemSelect'>
          Item
          <select value={console} onChange={(e) => setConsole(e.target.value)}>
            <option value='xboxX'>Xbox X</option>
            <option value='ps5'>PS5</option>
            <option value='switch'>Nintendo Switch</option>
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
