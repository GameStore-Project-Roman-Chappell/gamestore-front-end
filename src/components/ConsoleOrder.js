import React, {useState, useEffect} from 'react';

export default function ConsoleOrder() {
    const [consoleInventory, setConsoleInventory] = useState([]);
    const [consoleB, setConsoleB] = useState();
    const [consoleOrder, setConsoleOrder] = useState();
    const [name, setName] = useState();
    const [street, setStreet] = useState();
    const [city, setCity] = useState();
    const [state2, setState2] = useState();
    const [zipcode, setZipcode] = useState();
    const [quantity, setQuantity] = useState();
    const [invoice, setInvoice] = useState();
    const [error, setError] = useState();

    useEffect(() => {
        fetch("http://localhost:8080/consoles")
        .then(response => response.json())
        .then(result => setConsoleInventory(result))
        .catch(console.log);
    }, []);

    const handleSubmit = (event) => {
        let orderInfo = {
            "name": name,
            "street": street,
            "city": city,
            "state": state2,
            "item_type": "console",
            "item_id": consoleB.id,
            "unit_price": consoleB.price,
            "quantity": quantity            
        }
        setConsoleOrder(orderInfo);
        event.preventDefault();
        console.log('submitting console');
        const method = "POST";
        const expectedStatus = 200;
        const init = {
            method,
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(consoleOrder)

        }

        fetch(`http://localhost:8080/consoles`, init)
        .then(response => {
            if (response.status === expectedStatus) {
                return response.json();
            }
            return Promise.reject("Didn't receive expected status")
        })
        .then(result => setInvoice(result));
        console.log(invoice);
    }

    return (
        <div className="consoleOrder">
            <form className="consoleOrderForm" onSubmit={handleSubmit}>
                <label className="consoleOrderFormSelect">
                    <select value={consoleB} onChange={(e) => setConsoleB(e.target.value)}>
                        {consoleInventory.map((consoleOption) => <option key={consoleOption.data.name}>
                            {consoleOption.data.name}
                        </option>)}
                    </select>
                </label>
                <label className="consoleOrderName">
                    Name:
                    <input type="text" name="orderName" value={name} onChange={(e) => setName(e.target.value)}/>
                </label>
                <label className="consoleOrderStreet">
                    Street: 
                <input type="text" name="orderStreet" value={street}  onChange={(e) => setStreet(e.target.value)}  />
                </label>
                <label className="consoleOrderCity">
                    City: 
                <input type="text" name="orderCity" value={city}  onChange={(e) => setCity(e.target.value)}  />
                </label>
                <label className="consoleOrderState">
                    State: 
                <input type="text" name="orderState" value={state2}  onChange={(e) => setState2(e.target.value)}  />
                </label>
                <label className="consoleOrderZip">
                    Zipcode: 
                <input type="text" name="orderZip" value={zipcode}  onChange={(e) => setZipcode(e.target.value)}  />
                </label>
                <label className="consoleOrderQuantity">
                    Quantity: 
                <input type="text" name="orderQuantity" value={quantity}  onChange={(e) => setQuantity(e.target.value)}  />
                </label>



                <input type='submit' value='Submit' />
            </form>
            <a href='/'>Back to Home</a>
        </div>
    )

}