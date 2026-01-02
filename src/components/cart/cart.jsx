import './cart.scss';

export default function Cart({ cart, setCart }) {
    if (cart.length === 0) return <main>
        <section className='cart'>
            <h2>Panier</h2>
            <p>Votre panier est vide</p>
        </section>
    </main>

    const totalQuantity = cart.reduce((acc, item) => acc + item.quantity, 0);
    const totalItems = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
    const delivery = () => {
        if (totalQuantity <= 3) return 7.99
        return 12.99
    }

    const handleRemoveClick = (e) => {
        setCart(cart.filter(item => item.itemID === e))
    }

    const shipping = delivery();

    return(
        <section className='cart'>
            <h2>Panier</h2>
            <div className='cart__wrapper'>
                <table>
                    <thead>
                        <tr>
                            <td>Produit</td>
                            <td>Prix</td>
                            <td>Quantité</td>
                            <td>Prix</td>
                        </tr>
                    </thead>
                    <tbody>
                        {cart.map((item, index) => (
                            <tr key={item.itemId + index}>
                                <td>{item.name}</td>
                                <td>{item.price}</td>
                                <td>{item.quantity}</td>
                                <td>{item.price * item.quantity}</td>
                                <td><button value={item.itemId} onClick={handleRemoveClick}>X</button></td>
                            </tr>
                        ))}
                        <tr>
                            <td colSpan="2">Total</td>
                            <td>{totalQuantity}</td>
                            <td>{totalItems}</td>
                        </tr>
                    </tbody>
                    <tfoot>
                        <tr>
                            <td colSpan="3">Frais de ports</td>
                            <td>{shipping} €</td>
                        </tr>
                        <tr>
                            <td colSpan="3">Total</td>
                            <td>{totalItems + shipping}</td>
                        </tr>
                    </tfoot>
                </table>
                <button onClick={() => setCart([])}>
                    Vider le panier
                </button>
            </div>
        </section>
    )
}