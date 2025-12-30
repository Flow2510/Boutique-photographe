import { useState } from "react";
import './loginform.scss'
import { supabase } from "../../lib/supabase";
import { useNavigate } from "react-router-dom";

export default function LoginForm(){
    const [email, setEmail] = useState("");
    const [emailError, setEmailError] = useState(false);
    const [password, setPassword] = useState("");
    const [passwordError, setPasswordError] = useState(false);
    const [firstName, setFirstName] = useState("");
    const [firstNameError, setFirstNameError] = useState(false);
    const [lastName, setLastName] = useState("");
    const [lastNameError, setLastNameError] = useState(false);
    const [adress, setAdress] = useState('');
    const [adressError, setAdressError] = useState(false);
    const [city, setCity] = useState('');
    const [cityError, setCityError] = useState(false);
    const [code, setCode] = useState('');
    const [codeError, setCodeError] = useState(false);

    const navigate = useNavigate();

    const [login, setLogin] = useState(true);
    const [register, setRegister] = useState(false);
    const [resetPassword, setResetPassword] = useState(false);

    const handleRegisterClick = () => {
        setRegister(true);
        setResetPassword(false);
        setLogin(false);
        
    }

    const handleLoginClick = () => {
        setRegister(false);
        setResetPassword(false);
        setLogin(true);
    }

    const handleResetClick = () => {
        setRegister(false);
        setResetPassword(true);
        setLogin(false);
    }

    const handleResetSubmit = (e) => {
        e.preventDefault()
        setEmailError(!email)
    }

    const handleLoginSubmit = (e) => {
        e.preventDefault()
        setEmailError(!email)
        setPasswordError(!password)
    }

    const handleRegisterSubmit = async (e) => {
        e.preventDefault();
        setEmailError(!email);
        setPasswordError(!password);
        setFirstNameError(!firstName);
        setLastNameError(!lastName);
        setAdressError(!adress);
        setCityError(!city);
        setCodeError(!code);
         if (email && password && firstName && lastName && adress && city && code) {
            const {data, error } = await supabase.auth.signUp({
                email,
                password
            });
            if (error) {
                globalThis.alert(error.message);
                return;
            }

            const user = data.user;

            const {error: profileError} = await supabase
                .from('profiles')
                .insert({
                    id: user.id,
                    first_name: firstName,
                    last_name: lastName,
                    adress,
                    city,
                    postal_code: code
                });
            
            if (profileError) {
                globalThis.alert(profileError.message);
            } else {
                navigate('/')
            }
         }
    }         

    return(
        <>
            {login && 
                <form className="login-form" onSubmit={handleLoginSubmit}>
                    <h2>Se connecter</h2>
                    <label htmlFor="">
                        <p>Email:</p>
                        <input 
                            type="email" 
                            className={`login-form__input${emailError? " login-form__input--error" : ""}`}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        {emailError &&
                            <p>Veuillez mettre un email</p>
                        }
                    </label>
                    <label htmlFor="">
                        <p>Mot de passe:</p>
                        <input 
                            type="password" 
                            className={`login-form__input${passwordError? " login-form__input--error" : ""}`}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        {passwordError &&
                            <p>Veuillez mettre un mot de passe</p>
                        }
                    </label>
                    <div>
                        <button 
                            type="button"
                            onClick={handleRegisterClick}
                        >
                            Pas encore de compte ?
                        </button>
                        <button
                            type="button"
                            onClick={handleResetClick}
                        >
                            Mot de passe oublié ?
                        </button>
                    </div>
                    <button
                        className="login-form__button"
                    >
                        Se connecter
                    </button>
                </form>
            }
            {resetPassword && 
                <form onSubmit={handleResetSubmit}>
                    <h2>Mot de passe oublié ?</h2>
                    <label htmlFor="">
                        <p>Email:</p>
                        <input 
                            type="email" 
                            className={`login-form__input${emailError? " login-form__input--error" : ""}`}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        {emailError &&
                            <p>Veuillez mettre un email</p>
                        }
                    </label>
                    <div>
                        <button 
                            type="button"
                            onClick={handleRegisterClick}
                        >
                            Pas encore de compte ?
                        </button>
                        <button
                            type="button"
                            onClick={handleLoginClick}
                        >
                            Annuler
                        </button>
                    </div>
                    <button>Réinitialiser le mot de passe</button>
                </form>
            }
            {register && 
                <form className="register-form" onSubmit={handleRegisterSubmit}>
                    <h2>Créer un compte</h2>
                    <label htmlFor="">
                        <p>Prénom:</p>
                        <input 
                            type="text" 
                            className={`login-form__input${firstNameError? " login-form__input--error" : ""}`}
                            onChange={(e) => setFirstName(e.target.value)}
                        />
                        {firstNameError &&
                            <p>Veuillez mettre un prénom</p>
                        }
                    </label>
                    <label htmlFor="">
                        <p>Nom:</p>
                        <input 
                            type="text" 
                            className={`login-form__input${lastNameError? " login-form__input--error" : ""}`}
                            onChange={(e) => setLastName(e.target.value)}
                        />
                        {lastNameError &&
                            <p>Veuillez mettre un nom</p>
                        }
                    </label>
                    <label htmlFor="">
                        <p>Adresse:</p>
                        <input 
                            type="text" 
                            className={`login-form__input${adressError? " login-form__input--error" : ""}`}
                            onChange={(e) => setAdress(e.target.value)}
                        />
                        {adressError &&
                            <p>Veuillez mettre une adresse</p>
                        }
                    </label>
                    <label htmlFor="">
                        <p>Ville:</p>
                        <input 
                            type="text" 
                            className={`login-form__input${cityError? " login-form__input--error" : ""}`}
                            onChange={(e) => setCity(e.target.value)}
                        />
                        {cityError &&
                            <p>Veuillez mettre une ville</p>
                        }
                    </label>
                    <label htmlFor="">
                        <p>Code postal</p>
                        <input 
                            type="number" 
                            className={`login-form__input${codeError? " login-form__input--error" : ""}`}
                            onChange={(e) => setCode(e.target.value)}
                        />
                        {codeError &&
                            <p>Veuillez mettre un code postal</p>
                        }
                    </label>
                    <label htmlFor="">
                        <p>Email:</p>
                        <input 
                            type="email" 
                            className={`login-form__input${emailError? " login-form__input--error" : ""}`}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        {emailError &&
                            <p>Veuillez mettre un email</p>
                        }
                    </label>
                    <label htmlFor="">
                        <p>Mot de passe:</p>
                        <input 
                            type="password" 
                            className={`login-form__input${passwordError? " login-form__input--error" : ""}`}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        {passwordError &&
                            <p>Veuillez mettre un mot de passe</p>
                        }
                    </label>
                    <div>
                        <button 
                            type="button"
                            onClick={handleLoginClick}
                        >
                            Déja un compte ?
                        </button>
                        <button
                            type="button"
                            onClick={handleResetClick}
                        >
                            Mot de passe oublié ?
                        </button>
                    </div>
                    <button
                        className="login-form__button"
                    >
                        Créer un compte
                    </button>
                </form>
            }
        </>
    )
}