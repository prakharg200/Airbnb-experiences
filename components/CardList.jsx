import image from  "../images/Katie-Zaferes.jpeg"
import Card from "./Card"
import Data from '../Data'

function CardList(){
    const cards = Data.map((item)=>{
        return <Card 
                    key={item.id}
                    {...item}
                />
    })

    return(
        <section className="card-list">
            {cards}
        </section>
    )
}

export default CardList