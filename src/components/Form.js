import { useState } from 'react'

export default function Form({onAddData, items}) {
    const [description, setDescription] = useState("")
    const [quantity, setQuantity] = useState(1)

    const addNewItem = (itemToAdd) => {

        // POST this item to our DB
        fetch("http://localhost:4000/items", {
            method: 'POST',
            headers: { "Content-Type": "application/json"},
            body: JSON.stringify(itemToAdd)
        }).then(() => {
            onAddData([...items, itemToAdd])
            console.log("New Item added")
        })
    }

    function handleSubmit(e) {
        e.preventDefault();

        if (!description) return;

        const newItem = {
            id: Date.now(), description, quantity, packed: false
        }

        addNewItem(newItem)

        setDescription("");
        setQuantity(1);
    }

    return (
        <form className="add-form" onSubmit={handleSubmit}>
            <h3>What do you need for your 😍 trip?</h3>
            <select 
                value={quantity} 
                onChange={
                    (e) => setQuantity(Number(e.target.value))
                }>
                
                {Array.from({length: 20}, (_, i) => i+1).map((num) => 
                    (<option value={num} key={num}>{num}</option>)
                )}
            </select>
            <input 
                type="text" 
                placeholder="Item..." 
                value={description} 
                onChange={(e) => setDescription(e.target.value)} 
            />
            <button>Add</button>
        </form>
    )
}