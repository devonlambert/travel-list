import Item from './Item'

export default function PackingList({items, onDeleteData}) {

    const handleDelete = (item) => {
        fetch(`http://localhost:4000/items/${item.id}`, {
            method: 'DELETE'
        }).then((res) => {
            if (!res.ok) throw Error('Could not delete this item')

            return res.json()
        }).then((res) => {
            let id = item.id
            onDeleteData(items.filter((item) => {
                return item.id !== id
            }))
            console.log(`Item deleted! - ${res}`)
        }).catch((err) => {
            console.log(err.message);
        })
    }

    return (
        <ul className="list">
            {items.map((item) => (
                <Item key={item.id} item={item} onItemDelete={handleDelete} />
            ))}
        </ul>
    )
}