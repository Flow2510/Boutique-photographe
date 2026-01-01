import './cart.scss';

export default function Cart({ cart }) {
    if (cart.length === 0) return <p>Panier vide</p>

    const totalQuantity = cart.reduce((acc, item) => acc + item.quantity, 0);
    const totalItems = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
    const delivery = () => {
        if (totalQuantity <= 3) return 7.99
        return 12.99
    }

    const shipping = delivery();

    return(
        <section className='cart'>
            <div className='cart__wrapper'>
                <table>
                    <thead>
                        <tr>
                            <td>Produit</td>
                            <td>Quantité</td>
                            <td>Prix</td>
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
                <button>
                    
                </button>
            </div>
        </section>
    )
}