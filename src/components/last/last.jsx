import { NavLink } from 'react-router-dom';
import './last.scss';
import { useState } from 'react';
import Loading from '../loading/loading';

export default function Last({items}) {
    const [currentIndex, setCurrentIndex] = useState(0);
    if (!items || items.length === 0) {
        return <Loading />
    };

    const handlePrevClick = () => {
        setCurrentIndex((prev) => (prev - 1 + sortedItems.length) % sortedItems.length);
    }
    const handleNextClick = () => {
        setCurrentIndex((prev) => (prev + 1) % sortedItems.length);
    }

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
        <section className='last'>
            <h3 className='last__title'>Les plus vendues</h3>
            <div className='last__gallery'>
                <NavLink to={`/${sortedItems[currentIndex].name}`} key={sortedItems[currentIndex].name} className={'last__link'}><img className="last__link-image" src={sortedItems[currentIndex].image} alt="" /></NavLink>
            </div>
            <div className='last__dots'>
                <button onClick={handlePrevClick} className='last__dots-button'>prev</button>
                <div className='last__dots-wrapper'>
                    {sortedItems.map((item, index) => (
                        <button className={`last__dots-dot ${index === currentIndex ? ' last__dots-dot--active' : ''}`} key={item.name + index} value={index} onClick={() =>setCurrentIndex(index)}></button>
                    ))}
                </div>
                <button onClick={handleNextClick} className='last__dots-button'>next</button>
            </div>
        </section>
    )
}