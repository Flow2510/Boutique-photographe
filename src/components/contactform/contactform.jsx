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
            <h2>Contact</h2>
            <label htmlFor="">
                <p>Nom:</p>
                <input type="text" onChange={(e) => setName(e.target.value)}/>
                {nameError && 
                    <p>Veuillez mettre un nom</p>
                }
            </label>
            <label htmlFor="">
                <p>Email:</p>
                <input type="email" onChange={(e) => setEmail(e.target.value)}/>
                {emailError && 
                    <p>Veuillez mettre un email</p>
                }
            </label>
            <label htmlFor="">
                <p>Message:</p>
                <textarea name="" id="" onChange={(e) => setMessage(e.target.value)}></textarea>
                {messageError && 
                    <p>Veuillez mettre un message</p>
                }
            </label>
            <button type='submit'>
                Envoyer
            </button>
        </form>
    )
}