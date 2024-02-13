import Item from './Item'

export default function PackingList({items}) {

    return (
        <ul className="list">
            {items.map((item) => (
                <Item key={item.id} item={item} />
            ))}
        </ul>
    )
}