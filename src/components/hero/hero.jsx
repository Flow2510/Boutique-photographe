import { NavLink } from 'react-router-dom';
import './hero.scss';

export default function Hero() {
    return(
        <section className='hero'>
            <div className='hero__content'>
                <h2 className='hero__content-title'>Title</h2>
                <NavLink className='hero__content-link'>Boutique</NavLink>
            </div>
        </section>
    )
}