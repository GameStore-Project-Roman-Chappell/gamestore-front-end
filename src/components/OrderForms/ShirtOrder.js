import React, {useState, useEffect} from 'react';

export default function ShirtOrder() {
    const [shirtInventory, setShirtInventory] = useState([]);
    const [shirt, setShirt] = useState({});
    const [error, setError] = useState();
    const [name, setName] = useState("");
    const [street, setStreet] = useState("");
    const [city, setCity] = useState("");
    const [state2, setState2] = useState("");
    const [zipcode, setZipcode] = useState("");
    const [quantity, setQuantity] = useState(0);
    const [shirtId, setShirtId] = useState(0);
    const [shirtOrder, setShirtOrder] = useState({});
    const [successful, setSuccessful] = useState(false);
    const [invoice, setInvoice] = useState({});

    useEffect(() => {
        fetch("http://localhost:8080/tshirts")
        .then(response => response.json())
        .then(result => setShirtInventory(result), console.log(shirtInventory))
        .catch(console.log);
    }, []);

    const handleChange = (event) => {
        let obj = event.target.value;
        let objInt = parseInt(obj);
        setShirtId(objInt);
        console.log(shirtId);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        let orderInfo = {
            "name": name,
            "street": street,
            "city": city,
            "state": state2,
            "zipcode": zipcode,
            "itemType": "tshirt",
            "itemId": shirtId,
            "quantity": parseInt(quantity)
        }
        setShirtOrder(orderInfo);
        console.log("Submitting T-Shirt order");
        console.log(orderInfo);
        
        const url = "http://localhost:8080/purchase"
        const method = "POST";
        const expectedStatus = 200;
        const init = {
            method,
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(shirtOrder)
    }

    fetch(url, init)
    .then(response => {
        if (response.status === expectedStatus) {
            console.log(orderInfo);
            setSuccessful(true);
            return response.json();
        }
        return Promise.reject("Didn't receive expected status, ensure all inputs are filled.")
    })
    .then(result => setInvoice(result));
    console.log(invoice);
    }
    if (successful) {
        setSuccessful(false);
        alert("Your purchse was successful")
    }

    return (
        <div className="shirtOrder">
            <form className="shirtOrderForm" onSubmit={handleSubmit}>

                <label className="shirtOrderFormSelect">
                    <select onChange={handleChange}>
                        {shirtInventory.map((shirtOption) => <option key={shirtOption.id} id={shirtOption.id} value={shirtOption.id}>
                            {shirtOption.description}
                            </option>)}
                    </select>
                </label>

                <label className="orderName">
                    Name:
                <input type="text" name="orderName" value={name} onChange={(e) => setName(e.target.value)}/>
                </label>
                <label className="orderStreet">
                    Street: 
                <input type="text" name="orderStreet" value={street}  onChange={(e) => setStreet(e.target.value)}  />
                </label>
                <label className="orderCity">
                    City: 
                <input type="text" name="orderCity" value={city}  onChange={(e) => setCity(e.target.value)}  />
                </label>
                <label className="orderState">
                    State: 
                <input type="text" name="orderState" value={state2}  onChange={(e) => setState2(e.target.value)}  />
                </label>
                <label className="orderZip">
                    Zipcode: 
                <input type="text" name="orderZip" value={zipcode}  onChange={(e) => setZipcode(e.target.value)}  />
                </label>
                <label className="orderQuantity">
                    Quantity: 
                <input type="text" name="orderQuantity" value={quantity}  onChange={(e) => setQuantity(e.target.value)}  />
                </label>


                <input type='submit' value='Submit' />
            </form>
        </div>
        
    )
}