import { NavLink } from 'react-router-dom';
import './footer.scss';

export default function Footer() {
    return(
        <footer className='footer'>
            <h1>Logo</h1>
            <nav className='footer__nav'>
                <NavLink to={'/'} className='footer__link'>Accueil</NavLink>
                <NavLink to={'/shop'} className='footer__link'>Boutique</NavLink>
                <NavLink to={'/about'} className='footer__link'>A propos</NavLink>
                <NavLink to={'/events'} className='footer__link'>Expos</NavLink>
                <NavLink to={'/contact'} className='footer__link'>Contact</NavLink>
                <NavLink to={'/cart'} className='footer__link'>Panier</NavLink>
            </nav>
        </footer>
    )
}