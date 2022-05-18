import React, { useState, useEffect } from 'react';
import CreateShirt from '../CreateForms/CreateShirt';
import ShirtCard from '../InventoryCards/ShirtCard';

export default function ShirtInventory() {
    const [shirts, setShirts] = useState([]);
    const [showForm, setShowForm] = useState(false);
    const [scopedShirt, setScopedShirt] = useState({});
    const [error, setError] = useState();

    useEffect(() => {
        fetch("http://localHost:8080/tshirts")
        .then(response => response.json())
        .then(result => setShirts(result), console.log(shirts))
        .catch(console.log);
    }, []);

    function addClick() {
        setScopedShirt({ id: 0, title: "", esrbRating: "", description: "", studio: "", price: 0, quantity: 0 });
        setShowForm(true);
    };

    function notify({ action, shirt, error}) {
        if (error) {
            setError(error);
            setShowForm(false);
            return;
        }

        switch(action) {
            case "add":
                setShirts([...shirts, shirt]);
                break;
            case "edit":
                setShirts(shirts.map(e => {
                    if (e.id === shirt.id) {
                        return shirt;
                    }
                    return e;
                }));
                break;
            case "edit-form":
                setScopedShirt(shirt);
                setShowForm(true);
                return;
            case "delete":
                setShirts(shirts.filter(e => e.id !== shirt.id));
                break;
                default:
        }
        setError("");
        setShowForm(false);
    }
    if (showForm) {
        return <CreateShirt shirt={scopedShirt} notify={notify} />
    }
    return (
        <div className="consoleInventory">
            {error && <div className="alert alert-danger">{error}</div>}
            <div>
                <h1 className="shirtsTitle">Shirts</h1>
                    <button className="btn btn-primary" type="button" onClick={addClick}>Add a Shirt</button>
                    <table id="shirts">
                        <tr>
                            <th>Size</th>
                            <th>Color</th>
                            <th>Description</th>
                            <th>Price</th>
                            <th>Quantity</th>
                        </tr>
                        <tbody>
                            {shirts.map(r => <ShirtCard key={r.id} shirt={r} notify={notify} />)}
                        </tbody>
                    </table>
            </div>

        </div>
    )
}