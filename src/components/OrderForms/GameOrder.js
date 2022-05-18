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
        .then(result => setGameInventory(result))
        .catch(console.log);
    }, []);

    const handleChange = (event) => {
        let obj = event.target.value;
        let objInt = parseInt(obj);
        setGameId(objInt);
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
        alert("Your purchase was successful");
    }

    return (
        <div className="gameOrder">
            <form className="gameOrderForm" onSubmit={handleSubmit}>
                <label className="gameOrderSelect">
                    <select value={game} onChange={(e) => setGame(e.target.value)}>
                    {gameInventory.map((gameOption) => <option key={gameOption.name}>
                        {gameOption.data.name}
                    </option>)}

                    </select>
                </label>
                <input type='submit' value='Submit' />
            </form>
            
        </div>
    )


}