import React, {useState, useEffect} from 'react';

export default function ConsoleOrder() {
    const [consoleInventory, setConsoleInventory] = useState([]);
    const [consoleB, setConsoleB] = useState();
    const [error, setError] = useState();

    useEffect(() => {
        fetch("http://localhost:8080/consoles")
        .then(response => response.json())
        .then(result => setConsoleInventory(result))
        .catch(console.log);
    }, []);

    return (
        <div className="consoleOrder">
            <form className="consoleOrderForm">
                <label className="consoleOrderFormSelect">
                    <select value={consoleB} onChange={(e) => setConsoleB(e.target.value)}>
                        {consoleInventory.map((consoleOption) => <option key={consoleOption.data.name}>
                            {consoleOption.data.name}
                        </option>)}
                    </select>
                </label>
            </form>
        </div>
    )

}