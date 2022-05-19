import React, { useState } from 'react';

export default function CreateShirt({ shirt: initialShirt, notify }) {
    const [shirt, setShirt] = useState(initialShirt);
    const isAdd = initialShirt.id === 0;

    function handleChange(event) {
        const clone = { ...shirt };
        clone[event.target.name] = event.target.value;
        setShirt(clone);
    }

    function handleSubmit(event) {
        event.preventDefault();
        console.log(shirt);

        const url = isAdd ? "http://localhost:8080/tshirts" : `http://localhost:8080/tshirts/${shirt.id}`;
        const method = isAdd ? "POST" : "PUT";
        const expectedStatus = isAdd ? 201 : 204;

        const init = {
            method,
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(shirt)
        };

        fetch(url, init)
        .then(response => {
            if (response.status === expectedStatus) {
                if (isAdd) {
                    return response.json();
                } else {
                    return shirt;
                }
            }
            return Promise.reject("Didn't receive expected status");
        })
        .then(result => notify({
            action: isAdd ? "Add" : "Edit",
            shirt: result
        }))
        .catch(error => notify({ error: error }));
    }

    return (
        <div className="CreateShirtForm">
            <p className="addTitle">Add a Shirt</p>
            <form className="addForm" onSubmit={handleSubmit}>
                    <label className="sizeInput">
                        Size: 
                        <input type="text" name="size" value={shirt.size} onChange={handleChange} />
                    </label>

                    <label className="colorInput">
                        Color: 
                        <input type="text" name="color" value={shirt.color} onChange={handleChange}></input>
                    </label>

                    <label className="DescriptionInput">
                        Description:  
                        <input type="text" name="description" value={shirt.description} onChange={handleChange}></input>
                    </label>

                    <label className="price">
                        Price: 
                        <input type="text" name="price" value={shirt.price} onChange={handleChange}></input>
                    </label>

                    <label className="quantity">
                        Quantity: 
                        <input type="text" name="quantity" value={shirt.quantity} onChange={handleChange}></input>
                    </label>
                    <input type='submit' value='Submit' />
            </form>
        </div>
    )

}