import './info.scss';

export default function Info({text, title, src, alt}) {
    return(
        <section className='info'>
            <h2 className='info__title'>{title}</h2>
            <p className='info__text'>{text}</p>
            <img className='info__image' src={src} alt={alt} />
        </section>
    )
}