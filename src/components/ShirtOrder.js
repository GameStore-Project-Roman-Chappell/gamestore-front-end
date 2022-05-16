import React, {useState, useEffect} from 'react';

export default function ShirtOrder() {
    const [shirtInventory, setShirtInventory] = useState([]);
    const [shirt, setShirt] = useState();
    const [error, setError] = useState();

    useEffect(() => {
        fetch("http://localhost:8080/TShirts")
        .then(response => response.json())
        .then(result => setShirtInventory(result))
        .catch(console.log);
    }, []);

    return (
        <div className="shirtOrder">
            <form className="shirtOrderForm">
                <label className="shirtOrderFormSelect">
                    <select value={shirt} onChange={(e) => setShirt(e.target.value)}>
                        {shirtInventory.map((shirtOption) => <option key={shirtOption.data.name}>
                            {shirtOption.data.name}
                            </option>)}
                    </select>
                </label>
                <input type='submit' value='Submit' />
            </form>
        </div>
        
    )
}