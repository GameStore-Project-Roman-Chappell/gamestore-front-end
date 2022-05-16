import React, {useState, useEffect} from 'react';

export default function GameOrder() {
    const [gameInventory, setGameInventory] = useState([]);
    const [game, setGame] = useState();
    const [quantity, setQuantity] = useState();
    const [error, setError] = useState();

    useEffect(() => {
        fetch("http://localhost:8080/games")
        .then(response => response.json())
        .then(result => setGameInventory(result))
        .catch(console.log);
    }, []);

    return (
        <div className="gameOrder">
            <form className="gameOrderForm">
                <label className="gameOrderSelect">
                    <select value={game} onChange={(e) => setGame(e.target.value)}>
                    {gameInventory.map((gameOption) => <option key={gameOption.data.name}>
                        {gameOption.data.name}
                    </option>)}

                    </select>
                </label>
                <input type='submit' value='Submit' />
            </form>
            
        </div>
    )


}