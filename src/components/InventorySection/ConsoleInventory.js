import React, { useState, useEffect } from 'react';
import CreateConsole from '../CreateForms/CreateConsole';
import ConsoleCard from '../InventoryCards/ConsoleCard';

export default function ConsoleInventory() {

    const [consoles, SetConsoles] = useState([]);
    const [showForm, SetShowForm] = useState(false);
    const [scopedConsole, SetScopedConsole] = useState({});
    const [error, SetError] = useState();

    useEffect(() => {
        fetch("http://localHost:8080/consoles")
        .then(response => response.json())
        .then(result => SetConsoles(result), console.log(consoles))
        .catch(console.log);
    }, [consoles]);

    function addClick() {
        SetScopedConsole({ id: 0, model: "", manufacturer: "", memoryAmount: "", processor: "", price: 0, quantity: 0 });
        SetShowForm(true);
    }

    function notify({ action, consoleB, error}) {
        if (error) {
            SetError(error);
            SetShowForm(false);
            return;
        }

        switch(action) {
            case "add":
                SetConsoles([...consoles, consoleB]);
                break;
            case "edit":
                SetConsoles(consoles.map(e => {
                    if (e.id === consoleB.id) {
                        return consoleB;
                    }
                    return e;
                }));
                break;
            case "edit-form":
                SetScopedConsole(consoleB);
                SetShowForm(true);
                return;
            case "delete":
                SetConsoles(consoles.filter(e => e.id !== consoleB.id));
                break;
                default:
        }
        SetError("");
        SetShowForm(false);
    }
    if (showForm) {
        return <CreateConsole consoleB={scopedConsole} notify={notify} />
    }
    return (
        <div className="consoleInventory">
            {error && <div className="alert alert-danger">{error}</div>}
            <div>
                <h1 className="consoleTitle">Consoles</h1>
                    <button className="btn btn-primary" type="button" onClick={addClick}>Add a Console</button>
                    <table id="consoles">
                        <tr>
                            <th>Model</th>
                            <th>Manufacturer</th>
                            <th>Memory</th>
                            <th>Processor</th>
                            <th>Price</th>
                            <th>Quantity</th>
                        </tr>
                        <tbody>
                            {consoles.map(r => <ConsoleCard key={r.id} consoleB={r} notify={notify} />)}
                        </tbody>
                    </table>
            </div>

        </div>
    )

}