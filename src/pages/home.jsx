import Cta from "../components/cta/cta";
import Hero from "../components/hero/hero";
import Last from "../components/last/last";
import Latest from "../components/latest/latest";

export default function Home({ items }){
    return(
        <main>
            <Hero />
            <Cta 
                title={'Title'}
                linkTo={'/about'}
                linkText={'A propos'}
                linkTo2={'/events'}
                linkText2={'Galerie'}
            />
            <Latest 
                items={items}
            />
            <Cta 
                title={'title'}
                text={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sunt quod quisquam autem obcaecati odio maiores, cum debitis ex molestias optio nobis quae ad nostrum ea, rerum harum reiciendis velit.'}
                linkTo={'/shop'}
                linkText={'La boutique'}
                linkTo2={'/contact'}
                linkText2={'Contact'}
            />
            <Last
                items={items}
            />
        </main>
    )
}