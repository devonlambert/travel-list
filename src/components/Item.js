export default function Item({item}) {
    
    const handleDelete = (item) => {
        console.log(`Delete this item ${item.id}`)

        fetch(`http://localhost:4000/items/${item.id}`, {
            method: 'DELETE'
        }).then((res) => {
            if (!res.ok) throw Error('Could not delete this item')

            return res.json()
        }).then((res) => {
            console.log(`Item deleted! - ${res}`)
        }).catch((err) => {
            console.log(err.message);
        })
    }

    return (
        <li>
            <span style={item.packed ? 
            { textDecoration: "line-through" } : {}}>{item.quantity} {item.description}</span>
            <button onClick={() => handleDelete(item)}>❌</button>
        </li>
    );
}