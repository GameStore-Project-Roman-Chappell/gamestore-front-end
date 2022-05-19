import React, { useState } from "react";

export default function ConsoleSearch() {
  const [paramType, setParamType] = useState("");
  const [param, setParam] = useState("");
  const [consoleList, setConsoleList] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();

    const url = `http://localhost:8080/consoles/?${paramType}=${param}`;
    fetch(url)
      .then((response) => response.json())
      .then((result) => setConsoleList(result), console.log(url))
      .catch(console.log);
  };

  return (
    <div className='searchSection'>
        <p className="searchTitle">Search for Consoles</p>
      <form className='searchForm' onSubmit={handleSubmit}>
        <label className='ParamTypeSelect'>
          <select onChange={(e) => setParamType(e.target.value)}>
            <option name='none' value='none'>
              None
            </option>
            <option name='manufacturer' value='manufacturer'>
              Manufacturer
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

      <div className='consoleInventory'>
        <h1>Search Results</h1>
        <table>
          <tr>
            <th>Model</th>
            <th>Manufacturer</th>
            <th>Memory</th>
            <th>Processor</th>
            <th>Price</th>
            <th>Quantity</th>
          </tr>
          <tbody>
            {consoleList.map((consoleB) => (
              <tr key={consoleB.id}>
                <td>{consoleB.model}</td>
                <td>{consoleB.manufacturer}</td>
                <td>{consoleB.memoryAmount}</td>
                <td>{consoleB.processor}</td>
                <td>{consoleB.price}</td>
                <td>{consoleB.quantity}</td>
                <td></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
