import { useState } from 'react';
import './item.scss';
import Loading from '../loading/loading';

export default function Item({ selectedItem, setCart }) {
    const [selectedSizeValue, setSelectedSizeValue] = useState(null);
    const selectedSize = (selectedItem?.item_sizes?.length)
        ? (selectedItem.item_sizes.find(s => s.size === selectedSizeValue) ?? selectedItem.item_sizes[0])
        : null;
    const [itemQuantity, setItemQuantity] = useState(1)
    const handleSizeChange = (e) => setSelectedSizeValue(e.target.value);

    const handleAddToCartSubmit = (e) => {
        e.preventDefault();
        setCart(prev => [...prev, 
            {
                itemId: selectedItem.id,
                name: selectedItem.name,
                size: selectedSize.size,
                price: selectedSize.price,
                quantity: itemQuantity
            }
        ])
    }

    if (!selectedItem || !selectedSize) return <Loading />;

    return(
            <section className='item'>
            <img className='item__image' src={selectedItem.image} alt={selectedItem.description} />
            <div className='item__content'>
                <h2 className='item__content-title'>{selectedItem.name}</h2>
                <p><b>{selectedSize.price} €</b></p>
                <select className='item__select' onChange={handleSizeChange} value={selectedSize.size}>
                    {selectedItem.item_sizes.map((s, index) => (
                        <option key={s.id + index} value={s.size}>
                            {s.size}
                        </option>
                    ))}
                </select>
                <p>Quantité restante : {selectedSize.quantity}</p>
                <form onSubmit={handleAddToCartSubmit}>
                    <label>
                        <input type="number" placeholder='1' onChange={(e) => setItemQuantity(e.target.value)}/>
                    </label>
                    <button 
                        disabled={selectedSize.quantity === 0 || selectedSize.quantity < itemQuantity}
                        type='submit'
                    >
                        Ajouter au panier
                    </button>
                </form>
            </div>
        </section>
    )
}