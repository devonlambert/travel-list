export default function Item({item, onItemDelete}) {

    return (
        <li>
            <span style={item.packed ? 
            { textDecoration: "line-through" } : {}}>{item.quantity} {item.description}</span>
            <button onClick={() => onItemDelete(item)}>❌</button>
        </li>
    );
}