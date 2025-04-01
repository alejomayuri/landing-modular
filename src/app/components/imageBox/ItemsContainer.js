import Item from "./Item";

export default function ItemsContainer({ data }) {
    const { items, effect } = data || {};

    if (!data || Object.keys(data).length === 0) {
        return null; // Devuelve null si no hay datos
    }
    
    return (
        <div className="flex flex-wrap justify-center items-center gap-4">
            {items.map((item, index) => (
                <Item key={index} data={item} effect={effect} />
            ))}
        </div>
    );
}