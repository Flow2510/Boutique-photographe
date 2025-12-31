import { useState } from 'react';
import './dashboard.scss';
import { supabase } from '../../lib/supabase';

export default function Dashboard({user}) {
    const [isOpen, setIsOpen] = useState(false);
    const [name, setName] = useState('');
    const [nameError, setNameError] = useState(false);
    const [description, setDescription] = useState('');
    const [descriptionError, setDescriptionError] = useState(false);
    const [file, setFile] = useState();    
    const [fileError, setFileError] = useState();
    const [price, setPrice] = useState();
    const [priceError, setPriceError] = useState(false);
    const [quantity, setQuantity] = useState();
    const [quantityError, setQuantityError] = useState(false);

    if (!user) {
        return <p>Chargement...</p>;
    }

    async function uploadImage(file) {
        const fileExt = file.name.split('.').pop();
        const fileName = `${crypto.randomUUID()}.${fileExt}`;

        const {error} = await supabase.storage
            .from('items-images')
            .upload(fileName, file);

        if (error) throw error;

        const { data } = supabase.storage
            .from('items-images')
            .getPublicUrl(fileName)

        return data.publicUrl;
    }

    const handleAddItemSubmit = async (e) => {
        e.preventDefault();

        setFileError(!file);
        setNameError(!name);
        setDescriptionError(!description);
        setPriceError(!price);
        setQuantityError(!quantity);

        if (!file || !name || !description || !price || !quantity) return;

        let imageUrl = null;

        try {
            imageUrl = await uploadImage(file);

            const { error } = await supabase
            .from("items")
            .insert({
                name,
                description,
                price: Number(price),
                quantity: Number(quantity),
                image: imageUrl,
            });

            if (error) throw error;

            alert("Item ajouté à la boutique");

            // reset des champs
            setName("");
            setDescription("");
            setPrice("");
            setQuantity("");
            setFile(null);
            setIsOpen(prev => !prev)

        } catch (err) {
            alert(err.message);
        }
    };

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
                                    <input type="file" onChange={e => setFile(e.target.files[0])}/>
                                    <p><i>Taille d'image conseillé 1200*800</i></p>
                                    {fileError &&
                                        <p>Veuillez mettre une image!</p>
                                    }
                                </label>
                                <label htmlFor="">
                                    <p>Nom:</p>
                                    <input type="text" onChange={(e) => setName(e.target.value)}/>
                                    {nameError &&
                                        <p>Veuillez mettre un nom!</p>
                                    }
                                </label>
                                <label htmlFor="">
                                    <p>Description:</p>
                                    <input type="text" onChange={(e) => setDescription(e.target.value)}/>
                                    {descriptionError &&
                                        <p>Veuillez mettre une description!</p>
                                    }
                                </label>
                                <label htmlFor="">
                                    <p>Quantité:</p>
                                    <input type="number" onChange={(e) => setQuantity(e.target.value)}/>
                                    {quantityError &&
                                        <p>Veuillez mettre une quantité!</p>
                                    }
                                </label>
                                <label htmlFor="">
                                    <p>Prix:</p>
                                    <input type="number" onChange={(e) => setPrice(e.target.value)}/>
                                    {priceError &&
                                        <p>Veuillez mettre un prix!</p>
                                    }
                                </label>
                                <div>
                                    <button>
                                        Ajoutez à la boutique
                                    </button>
                                    <button type='button' onClick={(e) => setIsOpen(e.target.value)}>
                                        Annuler
                                    </button>
                                </div>
                            </form>
                        </div>
                    }
                </section>
    )
}