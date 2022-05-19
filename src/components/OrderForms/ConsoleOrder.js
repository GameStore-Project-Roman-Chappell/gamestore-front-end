import React, { useState, useEffect } from "react";
import ConsoleSearch from "../SearchSections/ConsoleSearch";

export default function ConsoleOrder() {
  const [consoleInventory, setConsoleInventory] = useState([]);
  const [consoleId, setConsoleId] = useState(0);
  const [name, setName] = useState("");
  const [street, setStreet] = useState("");
  const [city, setCity] = useState("");
  const [state2, setState2] = useState("");
  const [zipcode, setZipcode] = useState("");
  const [quantity, setQuantity] = useState(0);
  const [invoice, setInvoice] = useState({});

  useEffect(() => {
    fetch("http://localhost:8080/consoles")
      .then((response) => response.json())
      .then(
        (result) => setConsoleInventory(result),
        console.log(consoleInventory)
      )
      .catch(console.log);
  }, []);

  const handleChange = (event) => {
    let obj = event.target.value;
    let objInt = parseInt(obj);
    setConsoleId(objInt);
  };

  const handleSubmit = (event) => {
    let orderInfo = {
      name: name,
      street: street,
      city: city,
      state: state2,
      zipcode: zipcode,
      itemType: "console",
      itemId: consoleId,
      quantity: parseInt(quantity),
    };
    event.preventDefault();
    console.log("submitting console");
    console.log(orderInfo);

    const url = "http://localhost:8080/purchase";
    const method = "POST";
    const expectedStatus = 200;
    const init = {
      method,
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
      },
      body: JSON.stringify(orderInfo),
    };

    fetch(url, init)
      .then((response) => {
        if (response.status === expectedStatus) {
          console.log(orderInfo);
          return response.json();
        }
        return Promise.reject("Didn't receive expected status");
      })
      .then((result) => {alert(`Purchase successful, your total is $${result.total}`);});
    console.log(invoice);
  };
 
  return (
    <div className='consoleOrder'>
      <p className='orderTitle'>Order a Console</p>
      <form className='orderForm' onSubmit={handleSubmit}>
        <label className='consoleOrderFormSelect'>
          Console:
          <select onChange={handleChange}>
            <option></option>
            {consoleInventory.map((consoleOption) => (
              <option
                key={consoleOption.id}
                id={consoleOption.id}
                value={consoleOption.id}
              >
                {consoleOption.model}
              </option>
            ))}
          </select>
        </label>
        <label className='orderName'>
          Name:
          <input
            type='text'
            name='orderName'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <label className='orderStreet'>
          Street:
          <input
            type='text'
            name='orderStreet'
            value={street}
            onChange={(e) => setStreet(e.target.value)}
          />
        </label>
        <label className='orderCity'>
          City:
          <input
            type='text'
            name='orderCity'
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
        </label>
        <label className='orderState'>
          State:
          <input
            type='text'
            name='orderState'
            value={state2}
            onChange={(e) => setState2(e.target.value)}
          />
        </label>
        <label className='orderZip'>
          Zipcode:
          <input
            type='text'
            name='orderZip'
            value={zipcode}
            onChange={(e) => setZipcode(e.target.value)}
          />
        </label>
        <label className='orderQuantity'>
          Quantity:
          <input
            type='text'
            name='orderQuantity'
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
          />
        </label>

        <input type='submit' value='Submit' />
      </form>

      <ConsoleSearch />
    </div>
  );
}
