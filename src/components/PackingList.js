import Item from './Item'

export default function PackingList({initialItems}) {
    return (
        <ul className="list">
            {initialItems.map((item) => (
                <Item key={item.id} item={item} />
            ))}
        </ul>
    )
}