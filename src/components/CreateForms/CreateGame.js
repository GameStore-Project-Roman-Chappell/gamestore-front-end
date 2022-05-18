import React, { useState } from 'react';

export default function CreateGame({ game: initialGame, notify }) {
    const [game, setGame] = useState(initialGame);
    const isAdd = initialGame.id === 0;

    function handleChange(event) {
        const clone = { ...game };
        clone[event.target.name] = event.target.value;
        setGame(clone);
    }

    function handleSubmit(event) {
        event.preventDefault();
        console.log(game);

        const url = isAdd ? "http://localhost:8080/games" : `http://localhost:8080/games/${game.id}`;
        const method = isAdd ? "POST" : "PUT";
        const expectedStatus = isAdd ? 201 : 204;

        const init = {
            method,
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(game)
        };

        fetch(url, init)
        .then(response => {
            if (response.status === expectedStatus) {
                if (isAdd) {
                    return response.json();
                } else {
                    return game;
                }
            }
            return Promise.reject("Didn't receive expected status");
        })
        .then(result => notify({
            action: isAdd ? "Add" : "Edit",
            game: result
        }))
        .catch(error => notify({ error: error }));
    }

    return (
        <div className="CreateGameForm">
            <form onSubmit={handleSubmit}>
                    <label className="titleInput">
                        Title: 
                        <input type="text" name="title" value={game.title} onChange={handleChange} />
                    </label>

                    <label className="esrbInput">
                        ESRB: 
                        <input type="text" name="esrbRating" value={game.esrbRating} onChange={handleChange}></input>
                    </label>

                    <label className="descriptionInput">
                        Description:  
                        <input type="text" name="description" value={game.description} onChange={handleChange}></input>
                    </label>

                    <label className="studioInput">
                        Studio:
                        <input type="text" name="studio" value={game.studio} onChange={handleChange}></input>
                    </label>

                    <label className="price">
                        Price: 
                        <input type="text" name="price" value={game.price} onChange={handleChange}></input>
                    </label>

                    <label className="quantity">
                        Quantity: 
                        <input type="text" name="quantity" value={game.quantity} onChange={handleChange}></input>
                    </label>
                    <input type='submit' value='Submit' />
            </form>
        </div>
    )

}