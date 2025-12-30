import { useState } from 'react';
import './profileinput.scss';

export default function ProfileInput({ inputValue, title }){
    const [readOnly, setReadOnly] = useState(true)

    const handleModifyProfileClick = async (e) => {
        e.preventDefault();
        
    }

    return(
        <div className='profile-input'>
            <label className='profile-input__label' htmlFor="">
                <p>{title}</p>
                <input type="text" className={`profile-input__input${readOnly? "" : " profile-input__input--active"}`} value={inputValue} readOnly={readOnly}/>
                {readOnly && 
                    <button className='profile-input__button' onClick={() => setReadOnly(prev => !prev)}><i className="fa-solid fa-pen-to-square"></i></button>
                }
                {!readOnly && 
                    <>
                        <button className='profile-input__button' onClick={() => setReadOnly(prev => !prev)}><i className="fa-solid fa-xmark"></i></button>
                        <button className='profile-input__button' onClick={handleModifyProfileClick}><i className="fa-solid fa-pen-to-square"></i></button>
                    </>
                }
            </label>
        </div>
    )
}