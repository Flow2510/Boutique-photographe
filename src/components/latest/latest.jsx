import { NavLink } from 'react-router-dom';
import './latest.scss';
import Loading from '../loading/loading';

export default function Latest({ items }){
    if (!items) return <Loading />

    const sortedItems = [...items].sort(
        (a, b) => new Date(b.created_at) - new Date(a.created_at)
    );

    return(
        <section className='latest'>
            <h3 className='latest__title'>Derniers ajouts</h3>
            <div className='latest__gallery'>
                {sortedItems.slice(0, 3).map((item, index) => (
                    <NavLink to={`/${item.name}`} key={item.name + index} className="latest__link"><img className="latest__link-image" src={item.image} alt="" /></NavLink>
                ))}
            </div>
        </section>
    )
}