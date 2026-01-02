import { NavLink } from 'react-router-dom';
import './last.scss';

export default function Last({items}) {
    if (!items) return <Loading />

    const sortedItems = [...items].sort((a, b) => {
    const remainingA = a.item_sizes.reduce(
            (sum, size) => sum + size.quantity,
            0
        );

        const remainingB = b.item_sizes.reduce(
            (sum, size) => sum + size.quantity,
            0
        );

        return remainingA - remainingB; // moins de stock = plus vendu
    });

    return(
        <section className='latest'>
            <h3 className='latest__title'>Les plus vendues</h3>
            <div className='latest__gallery'>
                {sortedItems.slice(0, 3).map((item, index) => (
                    <NavLink to={`/${item.name}`} key={item.name + index} className="latest__link"><img className="latest__link-image" src={item.image} alt="" /></NavLink>
                ))}
            </div>
        </section>
    )
}