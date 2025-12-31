import { NavLink } from 'react-router-dom';
import './shop.scss';

export default function Shop({ items }) {
    if (!items) return <p>Chargement...</p>

    return(
        <section className='shop'>
            <h2>La boutique</h2>
            <div className='shop__menu'>

            </div>
            <div className='shop__gallery'>
                {items.map((item, index) => (
                    <NavLink className='shop__gallery-link' key={item.id + index}><img className='shop__gallery-image' src={item.image} alt="" /></NavLink>
                ))}
            </div>
        </section>
    )
}