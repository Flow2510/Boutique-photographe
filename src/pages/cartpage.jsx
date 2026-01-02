import Cart from "../components/cart/cart";

export default function CartPage({ cart, setCart }){
    return(
        <main>
            <Cart cart={cart} setCart={setCart} />
        </main>
    )
}