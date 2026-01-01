import { useParams } from "react-router-dom"
import Item from "../components/item/item";

export default function ItemPage({ items, setCart }) {
    const { id } = useParams();
    if (!items) return <p>Chargement...</p>
    const selectedItem = items.find(item => item.name === id)

    return(
        <main>
            <Item setCart={setCart} selectedItem={selectedItem} />
        </main>
    )
}