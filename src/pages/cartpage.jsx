import Cart from "../components/cart/cart";

export default function CartPage({ cart }){
    return(
        <main>
            <Cart cart={cart} />
        </main>
    )
}