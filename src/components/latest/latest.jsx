import { NavLink } from 'react-router-dom';
import './latest.scss';
import Loading from '../loading/loading';
import { useState } from 'react';

export default function Latest({items}) {
    const [currentIndex, setCurrentIndex] = useState(0);
    if (!items || items.length === 0) {
        return <Loading />
    };

    const sortedItems = [...items].sort(
        (a, b) => new Date(b.created_at) - new Date(a.created_at)
    );

    const handlePrevClick = () => {
        setCurrentIndex((prev) => (prev - 1 + sortedItems.length) % sortedItems.length);
    }
    const handleNextClick = () => {
        setCurrentIndex((prev) => (prev + 1) % sortedItems.length);
    }

    return(
        <section className='latest'>
            <h3 className='latest__title'>Derniers ajouts</h3>
            <div className='latest__gallery'>
                <NavLink to={`/${sortedItems[currentIndex].name}`} key={sortedItems[currentIndex].name} className={'latest__link'}><img className="latest__link-image" src={sortedItems[currentIndex].image} alt="" /></NavLink>
            </div>
            <div className='latest__dots'>
                <button onClick={handlePrevClick} className='latest__dots-button'>prev</button>
                <div className='latest__dots-wrapper'>
                    {sortedItems.map((item, index) => (
                        <button className={`latest__dots-dot ${index === currentIndex ? ' latest__dots-dot--active' : ''}`} key={item.name + index} value={index} onClick={() =>setCurrentIndex(index)}></button>
                    ))}
                </div>
                <button onClick={handleNextClick} className='latest__dots-button'>next</button>
            </div>
        </section>
    )
}

