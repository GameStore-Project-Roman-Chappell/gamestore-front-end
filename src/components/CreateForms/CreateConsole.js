import React, { useState } from 'react';

export default function CreateConsole({ consoleB: initialConsole, notify }) {
    const [consoleB, setConsoleB] = useState(initialConsole);
    const isAdd = initialConsole.id === 0;

    function handleChange(event) {
        const clone = { ...consoleB };
        clone[event.target.name] = event.target.value;
        setConsoleB(clone);
    }

    function handleSubmit(event) {
        event.preventDefault();
        console.log(consoleB);

        const url = isAdd ? "http://localhost:8080/consoles" : `http://localhost:8080/consoles/${consoleB.id}`;
        const method = isAdd ? "POST" : "PUT";
        const expectedStatus = isAdd ? 201 : 204;

        const init = {
            method,
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(consoleB)
        };

        fetch(url, init)
        .then(response => {
            if (response.status === expectedStatus) {
                if (isAdd) {
                    return response.json();
                } else {
                    return consoleB;
                }
            }
            return Promise.reject("Didn't receive expected status.");
        })
        .then(result => notify({
            action: isAdd ? "Add" : "Edit",
            customerB: result
        }))
        .catch(error => notify({ error: error }));
    }

    return (
        <div className="CreateConsoleForm">
            <form onSubmit={handleSubmit}>
                    <label className="modelInput">
                        Model: 
                        <input type="text" name="model" value={consoleB.model} onChange={handleChange} />
                    </label>

                    <label className="ManufacturerInput">
                        Manufacturer: 
                        <input type="text" name="manufacturer" value={consoleB.manufacturer} onChange={handleChange}></input>
                    </label>

                    <label className="memoryAmountInput">
                        Memory: 
                        <input type="text" name="memoryAmount" value={consoleB.memoryAMount} onChange={handleChange}></input>
                    </label>

                    <label className="processorInput">
                        Processor:
                        <input type="text" name="processor" value={consoleB.processor} onChange={handleChange}></input>
                    </label>

                    <label className="price">
                        Price: 
                        <input type="text" name="price" value={consoleB.price} onChange={handleChange}></input>
                    </label>

                    <label className="quantity">
                        Quantity: 
                        <input type="text" name="quantity" value={consoleB.quantity} onChange={handleChange}></input>
                    </label>
                    <input type='submit' value='Submit' />
            </form>
        </div>
    )
}