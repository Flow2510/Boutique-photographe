import { useParams } from "react-router-dom"
import Item from "../components/item/item";
import Info from "../components/info/info";
import Loading from "../components/loading/loading";

export default function ItemPage({ items, setCart }) {
    const { id } = useParams();
    if (!items) return <Loading />
    const selectedItem = items.find(item => item.name === id)

    return(
        <main>
            <Item setCart={setCart} selectedItem={selectedItem} />
            <Info
                title={'Impression artisanale'}
                text={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo sunt exercitationem deserunt, similique illo iure eos voluptates et aperiam rerum quam placeat velit hic accusantium facere consequuntur aliquam sit dolorum?'}
                src={'/src/assets/images/imprimante.jpg'}
                alt={'Une imprimante industriel dans un atelier'}
            />
            <Info 
                title={'Qualité des tirages'}
                text={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo sunt exercitationem deserunt, similique illo iure eos voluptates et aperiam rerum quam placeat velit hic accusantium facere consequuntur aliquam sit dolorum?'}
                src={'/src/assets/images/papier.jpg'}
                alt={"Rame de papier a la sortie d'une imprimante industriel"}
            />
            <Info 
                title={'Cadre'}
                text={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo sunt exercitationem deserunt, similique illo iure eos voluptates et aperiam rerum quam placeat velit hic accusantium facere consequuntur aliquam sit dolorum?'}
                src={'/src/assets/images/cadre.jpg'}
                alt={'Une imprimante industriel dans un atelier'}
            />
            <Info 
                title={'Transport'}
                text={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo sunt exercitationem deserunt, similique illo iure eos voluptates et aperiam rerum quam placeat velit hic accusantium facere consequuntur aliquam sit dolorum?'}
                src={'/src/assets/images/emballage.jpg'}
                alt={"Un colis renforcé pour l'envoie"}
            />
        </main>
    )
}