import React, { useState, useEffect } from 'react';
import CreateGame from '../CreateForms/CreateGame';
import GameCard from '../InventoryCards/GameCard';

export default function GameInventory() {
    const [games, setGames] = useState([]);
    const [showForm, setShowForm] = useState(false);
    const [scopedGame, setScopedGame] = useState({});
    const [error, setError] = useState();

    useEffect(() => {
        fetch("http://localHost:8080/games")
        .then(response => response.json())
        .then(result => setGames(result), console.log(games))
        .catch(console.log);
    }, []);

    function addClick() {
        setScopedGame({ id: 0, title: "", esrbRating: "", description: "", studio: "", price: 0, quantity: 0 });
        setShowForm(true);
    };

    function notify({ action, game, error}) {
        if (error) {
            setError(error);
            setShowForm(false);
            return;
        }

        switch(action) {
            case "add":
                setGames([...games, game]);
                break;
            case "edit":
                setGames(games.map(e => {
                    if (e.id === game.id) {
                        return game;
                    }
                    return e;
                }));
                break;
            case "edit-form":
                setScopedGame(game);
                setShowForm(true);
                return;
            case "delete":
                setGames(games.filter(e => e.id !== game.id));
                break;
                default:
        }
        setError("");
        setShowForm(false);
    }
    if (showForm) {
        return <CreateGame game={scopedGame} notify={notify} />
    }
    return (
        <div className="consoleInventory">
            {error && <div className="alert alert-danger">{error}</div>}
            <div>
                <h1 className="gamesTitle">Games</h1>
                    <button className="btn btn-primary" type="button" onClick={addClick}>Add a Game</button>
                    <table id="games">
                        <tr>
                            <th>Title</th>
                            <th>ESRB</th>
                            <th>Description</th>
                            <th>Studio</th>
                            <th>Price</th>
                            <th>Quantity</th>
                        </tr>
                        <tbody>
                            {games.map(r => <GameCard key={r.id} game={r} notify={notify} />)}
                        </tbody>
                    </table>
            </div>

        </div>
    )
}