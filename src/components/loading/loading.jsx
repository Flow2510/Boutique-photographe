import './loading.scss';

export default function Loading() {
    return(
        <main>
            <section className='loading'>
                <p>Chargement</p>
                <div className='loading__point-wrapper'>
                    <span className='loading__point loading__point-1'></span>
                    <span className='loading__point loading__point-2'></span>
                    <span className='loading__point loading__point-3'></span>
                </div>
            </section>
        </main>
    )
}