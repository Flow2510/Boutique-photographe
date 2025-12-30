import { NavLink } from 'react-router-dom';
import './header.scss';
import { useState } from 'react';

export default function Header({ session }) {
    const [isOpen, setIsOpen] = useState(false)

    return(
        <header className='header'>
            <div className='header__wrapper'>
                <NavLink to={'/'} className='header__logo'>
                    <h1>Logo</h1>
                </NavLink>
                <nav className='header__nav'>
                    <NavLink to={'/'} className='header__link'>Accueil</NavLink>
                    <NavLink to={'/shop'} className='header__link'>Boutique</NavLink>
                    <NavLink to={'/about'} className='header__link'>A propos</NavLink>
                    <NavLink to={'/events'} className='header__link'>Expos</NavLink>
                    <NavLink to={'/contact'} className='header__link'>Contact</NavLink>
                    <NavLink to={'/cart'} className='header__link'>Panier</NavLink>
                </nav>
                <div className='header__menu'>
                    <NavLink className='header__menu-icon' to={session? "/profile" : "/login"}><i className="fa-solid fa-user"></i></NavLink>
                    <button onClick={() => setIsOpen(prev => !prev)} className='header__menu-button'>{isOpen? <i className="fa-solid fa-xmark"></i> : <i className="fa-solid fa-bars"></i>}</button>
                </div>
            </div>
            {isOpen &&
                <nav className='header__mobile-nav'>
                    <NavLink to='/' className={'header__mobile-link'}>Accueil</NavLink>
                    <NavLink to='/shop' className={'header__mobile-link'}>Boutique</NavLink>
                    <NavLink to='/about' className={'header__mobile-link'}>A propos</NavLink>
                    <NavLink to='/events' className={'header__mobile-link'}>Expos</NavLink>
                    <NavLink to='/contact' className={'header__mobile-link'}>Contact</NavLink>
                    <NavLink to='/cart' className={'header__mobile-link'}>Panier</NavLink>
                </nav>
            }
        </header>
    )
}