import { NavLink } from 'react-router-dom';
import './cta.scss';

export default function Cta({title, text, linkTo, linkText, linkTo2, linkText2}){
    return(
        <section className='cta'>
            <div className='cta__content'>
                <h3 className='cta__content-title'>{title}</h3>
                <p className='cta__content-text'>{text}</p>
                <div className='cta__link-wrapper'>
                    {linkTo && 
                        <NavLink className='cta__link' to={linkTo}>{linkText}</NavLink>
                    }
                    {linkTo2 && 
                        <NavLink className='cta__link' to={linkTo2}>{linkText2}</NavLink>
                    }
                </div>
            </div>
        </section>
    )
}