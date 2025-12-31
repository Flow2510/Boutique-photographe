import Shop from "../components/shop/shop";

export default function ShopPage({ items }){
    return(
        <main>
            <Shop items={items} />
        </main>
    )
}