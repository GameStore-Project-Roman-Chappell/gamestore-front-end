import React, { useState, useEffect } from "react";
import GameCard from "../InventoryCards/GameCard";
import CreateGame from "../CreateForms/CreateGame";


export default function GameSearch() {
    const [studio, setStudio] = useState("");
    const [esrb, setEsrb] = useState("");
    const [showForm, setShowForm] = useState(false);
    const [paramType, setParamType] = useState("");
    const [param, setParam] = useState("");
    const [gameList, setGameList] = useState([]);
    const [scopedGame, setScopedGame] = useState({});
    const [error, setError] = useState();
    const [games, setGames] = useState([]);

    const handleSubmit = (event) => {
        event.preventDefault();
    
        const url = `http://localhost:8080/games?${paramType}=${param}`;
        fetch(url)
        .then(response => response.json())
        .then(result => setGameList(result), console.log(url))
        .catch(console.log);
       
    } 
    
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
        <div className="searchSection">
            <form className="searchForm" onSubmit={handleSubmit}>
                <label className="ParamTypeSelect">
                    <select onChange={(e) => setParamType(e.target.value)}>
                        <option name="none" value="none">None</option>
                        <option name="esrb" value="esrb">ESRB</option>
                        <option name="studio" value="studio">Studio</option>
                        <option name="title" value="title">Title</option>
                    </select>
                </label>
                <label className="ParamInput">
                    <input type="text" name="param" value={param} onChange={(e) => setParam(e.target.value)}/>
                </label>
                <input type='submit' value='Submit' />
            </form>

            <div className="searchGamesInventory">
                <h1>Search Results</h1>
                <table>
                    <tr>
                    <th>Title</th>
                            <th>ESRB</th>
                            <th>Description</th>
                            <th>Studio</th>
                            <th>Price</th>
                            <th>Quantity</th>
                    </tr>
                    <tbody>
                            {gameList.map(game =>  <tr key={game.id}>
            <td>{game.title}</td>
            <td>{game.esrbRating}</td>
            <td>{game.description}</td>
            <td>{game.studio}</td>
            <td>{game.price}</td>
            <td>{game.quantity}</td>
            <td>
            </td>
        </tr>)}
                    </tbody>
                </table>
            </div>








        </div>
    )


}