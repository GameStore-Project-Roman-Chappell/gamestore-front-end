import React from 'react';

export default function ShirtCard({ shirt, notify }) {

    function handleDelete() {
        fetch(`http://localhost:8080/tshirts/${shirt.id}`, {method: "DELETE"})
        .then(() => notify({ action: 'delete', shirt: shirt }))
        .catch(error => notify({ action: 'delete', error: error }));
    }

    return (
        <tr key={shirt.id}>
            <td>{shirt.size}</td>
            <td>{shirt.color}</td>
            <td>{shirt.description}</td>
            <td>{shirt.price}</td>
            <td>{shirt.quantity}</td>
            <td>
            <button id="deleteButton" className="btn btn-danger mr-3" type="button" onClick={handleDelete}>Delete</button>
            <button id="editButton" className="btn btn-secondary" type="button" onClick={() => notify({ action: "edit-form", shirt: shirt })}>Edit</button>
            </td>
        </tr>
    )
}