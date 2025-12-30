import Cta from "../components/cta/cta";
import Hero from "../components/hero/hero";
import Intro from "../components/intro/intro";

export default function Home(){
    return(
        <main>
            <Hero />
            <Intro />
            <Cta 
                title={'title'}
                text={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sunt quod quisquam autem obcaecati odio maiores, cum debitis ex molestias optio nobis quae ad nostrum ea, rerum harum reiciendis velit.'}
                linkTo={'/shop'}
                linkText={'La boutique'}
                linkTo2={'/about'}
                linkText2={'A propos'}
            />
        </main>
    )
}