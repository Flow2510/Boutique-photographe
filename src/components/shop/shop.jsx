import { NavLink } from 'react-router-dom';
import './shop.scss';
import Loading from '../loading/loading';
import { useMemo, useState } from 'react';

export default function Shop({ items }) {
    const [slice, setSlice] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);
    const [sort, setSort] = useState("") 

    const sortedItems = useMemo(() => {
        if (!items) return <Loading />

        switch (sort) {
            case "date":
                return [...items].sort(
                    (a, b) => new Date(b.created_at) - new Date(a.created_at)
                );

            case "reverse-date":
                return [...items].sort(
                    (a, b) => new Date(a.created_at) - new Date(b.created_at)
                );

            case "name":
                return [...items].sort(
                    (a, b) => a.name.localeCompare(b.name, 'fr', { sensitivity: 'base' })
                );

            case "reverse-name":
                return [...items].sort(
                    (a, b) => b.name.localeCompare(a.name, 'fr', { sensitivity: 'base' })
                );

            default:
                return items;
        }
    }, [items, sort]);

    if (!items) return <Loading />

    const totalPage = Math.ceil(sortedItems.length / 3);
    const handleNextClick = () => {
        setSlice(prev => prev  + 3)
        setCurrentPage(prev => prev + 1)
    };
    const handleBackClick = () => {
        if (slice !== 0) {
            setSlice(prev => prev - 3)
            setCurrentPage(prev => prev - 1)
        }
    };

    return(
        <section className='shop'>
            <h2>La boutique</h2>
            <div className='shop__wrapper'>
                <div className='shop__menu'>
                    <p>Filtres:</p>
                </div>
                <div className='shop__gallery-wrapper'>
                    <div className='shop__select'>
                        <p>Trier par:</p>
                        <select name="" id="" onChange={(e) => setSort(e.target.value)}>
                            <option value="">Tri</option>
                            <option value="name">Nom A-Z</option>
                            <option value="reverse-name">Nom Z-A</option>
                            <option value="date">Plus récent</option>
                            <option value="reverse-date">Plus ancien</option>
                        </select>
                    </div>
                    <div className='shop__gallery'>
                        {sortedItems.slice(slice, slice + 3).map((item, index) => (
                            <NavLink to={`/${item.name}`} className='shop__gallery-link' key={item.id + index}><img className='shop__gallery-image' src={item.image} alt="" /></NavLink>
                        ))}
                    </div>
                </div>
            </div>
            <div className='shop__index'>
                <button disabled={slice === 0} onClick={handleBackClick}><i className="fa-solid fa-chevron-left"></i></button>
                <p>{currentPage} sur {totalPage}</p>
                <button disabled={currentPage === totalPage} onClick={handleNextClick}><i className="fa-solid fa-chevron-right"></i></button>
            </div>
        </section>
    )
}