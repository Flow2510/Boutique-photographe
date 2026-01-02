import './addmodal.scss'

export default function AddModal({ handleAddItemSubmit, setFile, fileError, nameError, setName, setDescription, descriptionError, setQuantitySmall, setQuantityMedium, setQuantityLarge, quantityLargeError, quantityMediumError, quantitySmallError, setPrice, priceError, setAddModalIsOpen}) {
    return(
        <div className="add-item-modale">
                    <form action="" onSubmit={handleAddItemSubmit}>
                        <p>Ajouter un item dans la boutique</p>
                        <label htmlFor="">
                            <p>Image:</p>
                            <input type="file" onChange={e => setFile(e.target.files[0])}/>
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
                            <p>Quantité S:</p>
                            <input type="number" onChange={(e) => setQuantitySmall(e.target.value)}/>
                            {quantitySmallError &&
                                <p>Veuillez mettre une quantité!</p>
                            }
                        </label>
                        <label htmlFor="">
                            <p>Quantité M:</p>
                            <input type="number" onChange={(e) => setQuantityMedium(e.target.value)}/>
                            {quantityMediumError &&
                                <p>Veuillez mettre une quantité!</p>
                            }
                        </label>
                        <label htmlFor="">
                            <p>Quantité L:</p>
                            <input type="number" onChange={(e) => setQuantityLarge(e.target.value)}/>
                            {quantityLargeError &&
                                <p>Veuillez mettre une quantité!</p>
                            }
                        </label>
                        <label htmlFor="">
                            <p>Prix:</p>
                            <input type="number" onChange={(e) => setPrice(Number(e.target.value))}/>
                            {priceError &&
                                <p>Veuillez mettre un prix!</p>
                            }
                        </label>
                        <div>
                            <button>
                                Ajoutez à la boutique
                            </button>
                            <button type='button' onClick={() => setAddModalIsOpen(prev => !prev)}>
                                Annuler
                            </button>
                        </div>
                    </form>
                </div>
    )
}