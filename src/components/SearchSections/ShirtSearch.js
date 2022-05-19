import React, { useState } from "react";

export default function ShirtSearch() {
  const [paramType, setParamType] = useState("");
  const [param, setParam] = useState("");
  const [shirtList, setShirtList] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();

    const url = `http://localhost:8080/tshirts?${paramType}=${param}`;
    fetch(url)
      .then((response) => response.json())
      .then((result) => setShirtList(result), console.log(url))
      .catch(console.log);
  };

  return (
    <div className='searchSection'>
      <form className='searchForm' onSubmit={handleSubmit}>
        <label className='ParamTypeSelect'>
          <select onChange={(e) => setParamType(e.target.value)}>
            <option name='none' value='none'>
              None
            </option>
            <option name='color' value='color'>
              Color
            </option>
            <option name='size' value='size'>
              Size
            </option>
          </select>
        </label>
        <label className='ParamInput'>
          <input
            type='text'
            name='param'
            value={param}
            onChange={(e) => setParam(e.target.value)}
          />
        </label>
        <input type='submit' value='Submit' />
      </form>

      <div className='searchShirtInventory'>
        <h1>Search Results</h1>
        <table>
          <tr>
            <th>Color</th>
            <th>Size</th>
            <th>Description</th>
            <th>Price</th>
            <th>Quantity</th>
          </tr>
          <tbody>
            {shirtList.map((shirt) => (
              <tr key={shirt.id}>
                <td>{shirt.color}</td>
                <td>{shirt.size}</td>
                <td>{shirt.description}</td>
                <td>{shirt.price}</td>
                <td>{shirt.quantity}</td>
                <td></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
