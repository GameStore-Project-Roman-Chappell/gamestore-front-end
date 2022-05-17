import React from 'react';

export default function ConsoleCard({ consoleB, notify }) {

    function handleDelete() {
        fetch(`http://localhost:8080/consoles/${consoleB.id}`, {method: "DELETE"})
        .then(() => notify({ action: 'delete', console: consoleB }))
        .catch(error => notify({ action: 'delete', error: error }));
    }

    return (
        <tr key={consoleB.id}>
        <td>{consoleB.model}</td>
        <td>{consoleB.manufacturer}</td>
        <td>{consoleB.memoryAmount}</td>
        <td>{consoleB.processor}</td>
        <td>{consoleB.price}</td>
        <td>{consoleB.quantity}</td>
        <td>
            <button id="deleteButton" className="btn btn-danger mr-3" type="button" onClick={handleDelete}>Delete</button>
            <button id="editButton" className="btn btn-secondary" type="button" onClick={() => notify({ action: "edit-form", console: consoleB})}>Edit</button>
        </td>
        </tr>
    )
}