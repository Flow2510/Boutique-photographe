import { useState } from 'react';
import ProfileInput from '../profileinput/profileinput';
import './profileform.scss';
import { NavLink } from 'react-router-dom';

export default function ProfileForm({ user }) {
    const [isOpen, setIsOpen] = useState(false);
    
    const handleDeleteAccountClick = (e) => {
        e.preventDefault();
    }

    if (!user) return null;

    return(
        <section>
            <div className='profile-form'>
                <h3>
                    Profil:
                </h3>
                <ProfileInput title="Prénom: " inputValue={user.first_name}/>
                <ProfileInput title="Nom: " inputValue={user.last_name}/>
                <p>Adresse:</p>
                <ProfileInput inputValue={user.adress}/>                
                <ProfileInput inputValue={user.postal_code}/>
                <ProfileInput inputValue={user.city}/>
                {user.role === "admin" &&
                    <NavLink to={"/admin"}>Tableau de bord Admin</NavLink>
                }
                {user.role === "user" && (
                    <>
                        <button
                            className="profile-form__button"
                            onClick={() => setIsOpen(prev => !prev)}
                        >
                            Supprimer votre compte
                        </button>

                        {isOpen && (
                            <div className="delete-modale">
                                <div className="delete-modale__wrapper">
                                <p>Voulez-vous supprimer votre compte ?</p>
                                    <div>
                                        <button onClick={handleDeleteAccountClick}>
                                            Supprimer
                                        </button>
                                        <button onClick={() => setIsOpen(false)}>
                                            Annuler
                                        </button>
                                    </div>
                                </div>
                            </div>
                        )}
                    </>
                )}
            </div>
        </section>
    )
}