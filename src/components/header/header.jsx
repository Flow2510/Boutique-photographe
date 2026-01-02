import { NavLink } from 'react-router-dom';
import './header.scss';
import { useEffect, useRef, useState } from 'react';

export default function Header({ session, cart }) {
    const [isOpen, setIsOpen] = useState(false);

    const menuWrapperRef = useRef(null);
    const menuButtonRef = useRef(null);

    useEffect(() => {
        function handleClickOutside(e) {
            if (
            menuWrapperRef.current &&
            !menuWrapperRef.current.contains(e.target) &&
            menuButtonRef.current &&
            !menuButtonRef.current.contains(e.target)
            ) {
            setIsOpen(false);
            }
        }

        if (isOpen) {
            document.addEventListener("mousedown", handleClickOutside);
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [isOpen]);
 
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
                    <NavLink to={'/cart'} className='header__cart'>
                        <i className="fa-solid fa-cart-shopping"></i>
                        {cart.length !== 0 &&
                            <span className='header__cart-span'>{cart.length}</span>
                        }
                    </NavLink>
                    <NavLink className='header__menu-icon' to={session? "/profile" : "/login"}><i className="fa-solid fa-user"></i></NavLink>
                    <button ref={menuButtonRef} onClick={() => setIsOpen(prev => !prev)} className='header__menu-button'>{isOpen? <i className="fa-solid fa-xmark"></i> : <i className="fa-solid fa-bars"></i>}</button>
                </div>
            </div>
            <nav ref={menuWrapperRef} className={`header__mobile-nav${isOpen? " header__mobile-nav--open" : ""}`}>
                <NavLink to='/' onClick={() => setIsOpen(prev => !prev)} className={'header__mobile-link'}>Accueil</NavLink>
                <NavLink to='/shop' onClick={() => setIsOpen(prev => !prev)} className={'header__mobile-link'}>Boutique</NavLink>
                <NavLink to='/about' onClick={() => setIsOpen(prev => !prev)} className={'header__mobile-link'}>A propos</NavLink>
                <NavLink to='/events' onClick={() => setIsOpen(prev => !prev)} className={'header__mobile-link'}>Expos</NavLink>
                <NavLink to='/contact' onClick={() => setIsOpen(prev => !prev)} className={'header__mobile-link'}>Contact</NavLink>
                <NavLink to='/cart' onClick={() => setIsOpen(prev => !prev)} className={'header__mobile-link'}>Panier</NavLink>
            </nav>
        </header>
    )
}