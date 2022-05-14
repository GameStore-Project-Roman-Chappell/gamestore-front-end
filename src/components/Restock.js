import React, { setState, useState, Component } from "react";

export default function Restock() {
  const [state, setState] = useState();
  const [item, setItem] = useState();
  const [quantity, setQuantity] = useState();

//   const handleQuantityChange = (event) => {
//     this.setState({ value: event.target.value });
//   };

//   const handleItemChange = (event) => {
      
//   }

  const handleSubmit = (event) => {
      console.log("Submitted");
    event.preventDefualt();
  };

  
    return (
      <div className='restockForm'>
        <form onSubmit={e => handleSubmit(e)}>
            <label>
                Item
                <select value={item} onChange={e => setItem(e.target.value)}>
                    <option value="xbox">Xbox X</option>
                    <option value="ps5">PS5</option>
                    <option value="switch">Nintendo Switch</option>
                </select>
            </label>


          <label>
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
      </div>
    );
  
}
