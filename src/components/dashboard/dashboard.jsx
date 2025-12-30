import { useState } from 'react';
import './dashboard.scss';

export default function Dashboard({user}) {
    const [isOpen, setIsOpen] = useState(false);

    if (!user) {
        return <p>Chargement...</p>;
    }

    const handleAddItemSubmit = (e) => {
        e.preventDefault();
    }

    return(
        <section className="dashboard">
                    <p>Admin</p>
                    <button onClick={() => setIsOpen(prev => !prev)}>
                        Ajouter un item en boutique
                    </button>
                    {isOpen && 
                        <div className="add-item-modale">
                            <form action="" onSubmit={handleAddItemSubmit}>
                                <p>Ajouter un item dans la boutique</p>
                                <label htmlFor="">
                                    <p>Image:</p>
                                    <input type="file" src="" alt="" />
                                    <p><i>Taille d'image conseillé 1200*800</i></p>
                                </label>
                                <label htmlFor="">
                                    <p>Nom:</p>
                                    <input type="text" />
                                </label>
                                <label htmlFor="">
                                    <p>Description:</p>
                                    <input type="text" />
                                </label>
                                <label htmlFor="">
                                    <p>Quantité:</p>
                                    <input type="number" />
                                </label>
                                <label htmlFor="">
                                    <p>Prix:</p>
                                    <input type="number" />
                                </label>
                                <div>
                                    <button>
                                        Ajoutez à la boutique
                                    </button>
                                    <button type='button' onClick={() => setIsOpen(prev => !prev)}>
                                        Annuler
                                    </button>
                                </div>
                            </form>
                        </div>
                    }
                </section>
    )
}