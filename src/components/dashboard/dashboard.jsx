import { useState } from 'react';
import './dashboard.scss';
import { supabase } from '../../lib/supabase';
import AddModal from '../addmodal/addmodal';
import { deleteItem, uploadImage } from '../../function/function';
import Loading from '../loading/loading';

export default function Dashboard({ user, items }) {
    const [addModalIsOpen, setAddModalIsOpen] = useState(false);
    const [deleteModalIsOpen, setDeleteModalIsOpen] = useState(false);
    const [name, setName] = useState('');
    const [nameError, setNameError] = useState(false);
    const [description, setDescription] = useState('');
    const [descriptionError, setDescriptionError] = useState(false);
    const [file, setFile] = useState();    
    const [fileError, setFileError] = useState();
    const [price, setPrice] = useState();
    const [priceError, setPriceError] = useState(false);
    const [quantitySmall, setQuantitySmall] = useState();
    const [quantitySmallError, setQuantitySmallError] = useState(false);
    const [quantityMedium, setQuantityMedium] = useState();
    const [quantityMediumError, setQuantityMediumError] = useState(false);
    const [quantityLarge, setQuantityLarge] = useState();
    const [quantityLargeError, setQuantityLargeError] = useState(false);
    const [deleteId, setDeleteId] = useState("");

    if (!user || !items) {
        return <Loading />
    }

    if (user.role !== 'admin') return <p>Vous n'avez pas les droits</p>

    const handleAddItemSubmit = async (e) => {
        e.preventDefault();

        setFileError(!file);
        setNameError(!name);
        setDescriptionError(!description);
        setPriceError(!price);
        setQuantitySmallError(!quantitySmall);
        setQuantityMediumError(!quantityMedium);
        setQuantityLargeError(!quantityLarge);

        if (!file || !name || !description || !price || !quantitySmall || !quantityMedium || !quantityLarge) return;

        let imageUrl = null;

        try {
            imageUrl = await uploadImage(file);

            const { data: item, error: itemError } = await supabase
                .from("items")
                .insert({
                    name,
                    description,
                    image: imageUrl,
                })
                .select()
                .single();

                if (itemError) throw itemError;

                const { error: sizesError } = await supabase
                .from("item_sizes")
                .insert([
                    { item_id: item.id, size: 'S', price, quantity: quantitySmall },
                    { item_id: item.id, size: 'M', price: price + 25, quantity: quantityMedium },
                    { item_id: item.id, size: 'L', price: price + 50, quantity: quantityLarge },
                ])
            ;

            if (sizesError) throw sizesError;

            alert("Item ajouté à la boutique");
            setName("");
            setDescription("");
            setPrice("");
            setQuantitySmall("");
            setQuantityMedium("");
            setQuantityLarge("");
            setFile(null);
            setAddModalIsOpen(prev => !prev)

        } catch (err) {
            alert(err.message);
        }
    };

    const handleDeleteItem = () => {
        deleteItem(deleteId);
        setDeleteModalIsOpen(prev => !prev)
    };

    return(
        <section className="dashboard">
            <p>Admin</p>
            <div className='dashboard__items'>
                {items.map((item, index) => (
                    <div className='dashboard__item' key={item.name + index}>
                        <div className='dashboard__item-wrapper'>
                            <img className='dashboard__item-image' src={item.image} alt="" />
                            <p className='dashboard__item-title'>{item.name}</p>
                        </div>
                        <div className='dashboard__edit'>
                            <button className='dashboard__edit-button'><i className="fa-solid fa-pen-to-square"></i></button>
                            <button onClick={() => {setDeleteId(item.id); setDeleteModalIsOpen(prev => !prev)}} className='dashboard__edit-button'><i className="fa-solid fa-xmark"></i></button>
                        </div>
                    </div>
                ))}
            </div>
            <button className='dashboard__button' onClick={() => setAddModalIsOpen(prev => !prev)}>
                Ajouter un item en boutique
            </button>
            {deleteModalIsOpen &&
                <div className='delete-modal'>
                    <div className='delete-modal__wrapper'>
                        <p className='delete-modal__text'>Supprimer de la boutique ?</p>
                        <div className='delete-modal__button-wrapper'>
                            <button className='delete-modal__button' onClick={handleDeleteItem}>Supprimer</button>
                            <button className='delete-modal__button' onClick={() => setDeleteModalIsOpen(prev => !prev)}>Annuler</button>
                        </div>
                    </div>
                </div>
            }
            {addModalIsOpen && 
                <AddModal
                    handleAddItemSubmit={handleAddItemSubmit}
                    setFile={setFile}
                    fileError={fileError}
                    nameError={nameError}
                    setName={setName}
                    setDescription={setDescription}
                    descriptionError={descriptionError}
                    setQuantitySmall={setQuantitySmall}
                    setQuantityMedium={setQuantityMedium}
                    setQuantityLarge={setQuantityLarge}
                    quantityLargeError={quantityLargeError}
                    quantityMediumError={quantityMediumError}
                    quantitySmallError={quantitySmallError}
                    setPrice={setPrice}
                    priceError={priceError}
                    setAddModalIsOpen={setAddModalIsOpen}
                />
            }
        </section>
    )
}