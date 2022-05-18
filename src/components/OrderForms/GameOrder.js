import React, {useState, useEffect} from 'react';

export default function GameOrder() {
    const [gameInventory, setGameInventory] = useState([]);
    const [game, setGame] = useState({});
    const [gameId, setGameId] = useState(0);
    const [name, setName] = useState("");
    const [street, setStreet] = useState("");
    const [city, setCity] = useState("");
    const [state2, setState2] = useState("");
    const [zipcode, setZipcode] = useState("");
    const [quantity, setQuantity] = useState(0);
    const [gameOrder, setGameOrder] = useState({});
    const [successful, setSuccessful] = useState(false);
    const [invoice, setInvoice] = useState({});
    const [error, setError] = useState();

    useEffect(() => {
        fetch("http://localhost:8080/games")
        .then(response => response.json())
        .then(result => setGameInventory(result), console.log(gameInventory))
        .catch(console.log);
    }, []);

    const handleChange = (event) => {
        let obj = event.target.value;
        let objInt = parseInt(obj);
        setGameId(objInt);
        console.log(gameId);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        let orderInfo = {
            "name": name,
            "street": street,
            "city": city,
            "state": state2,
            "zipcode": zipcode,
            "itemType": "game",
            "itemId": gameId,
            "quantity": parseInt(quantity)
        }
        setGameOrder(orderInfo);
        console.log("submitting game order");
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
            body: JSON.stringify(gameOrder)
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
        alert("Your purchase was successful"); 
    }

    return (
        <div className="gameOrder">
            <form className="gameOrderForm" onSubmit={handleSubmit}>
                <label className="gameOrderSelect">

                    <select onChange={handleChange}>
                    {gameInventory.map((gameOption) => <option key={gameOption.id} id={gameOption.id} value={gameOption.id}>
                        {gameOption.title}
                    </option>)}
                    </select>

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

                </label>
                <input type='submit' value='Submit' />
            </form>
            
        </div>
    )


}