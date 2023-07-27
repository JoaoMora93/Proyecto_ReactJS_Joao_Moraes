import ItemCard from "../ItemCard/ItemCard"
import './Itemlist.scss'


const ItemList = ({productos}) => {
    
    return (

            <section className="galeria">
                <div className="galeria__item ms-10"> 
                    {
                        productos.map((prod) => <ItemCard key={prod.id}  item={prod} />)
                    }
                </div>
            </section>

    )
}

export default ItemList