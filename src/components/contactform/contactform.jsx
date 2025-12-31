import { useState } from 'react';
import './contactform.scss';

export default function ContactForm() {
    const [name, setName] = useState("");
    const [nameError, setNameError] = useState(false);
    const [email, setEmail] = useState('');
    const [emailError, setEmailError] = useState(false);
    const [message, setMessage] = useState('');
    const [messageError, setMessageError] = useState(false);

    const handleSendMessageSubmit = (e) => {
        e.preventDefault();
        setNameError(!name);
        setEmailError(!email);
        setMessageError(!message);
        if (name && email && message) {
            console.log(name, email, message)
        }
    }

    return(
        <form className='contact-form' action="" onSubmit={handleSendMessageSubmit}>
            <h2 className='contact-form__title'>Contact</h2>
            <label className='contact-form__label' htmlFor="">
                <p className='contact-form__label-title'>Nom:</p>
                <input className={`contact-form__label-input${nameError? " contact-form__label-input--error" : ""}`} type="text" onChange={(e) => setName(e.target.value)}/>
                {nameError && 
                    <p className='contact-form__label-error'>Veuillez mettre un nom</p>
                }
            </label>
            <label className='contact-form__label' htmlFor="">
                <p className='contact-form__label-title'>Email:</p>
                <input className={`contact-form__label-input${emailError? " contact-form__label-input--error" : ""}`} type="email" onChange={(e) => setEmail(e.target.value)}/>
                {emailError && 
                    <p className='contact-form__label-error'>Veuillez mettre un email</p>
                }
            </label>
            <label className='contact-form__label' htmlFor="">
                <p className='contact-form__label-title'>Message:</p>
                <textarea className={`contact-form__label-textarea${messageError? " contact-form__label-textarea--error" : ""}`} name="" id="" onChange={(e) => setMessage(e.target.value)}></textarea>
                {messageError && 
                    <p className='contact-form__label-error'>Veuillez mettre un message</p>
                }
            </label>
            <button className='contact-form__button' type='submit'>
                Envoyer
            </button>
        </form>
    )
}