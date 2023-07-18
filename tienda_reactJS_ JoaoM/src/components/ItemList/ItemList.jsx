import ItemCard from "../ItemCard/ItemCard"
import './Itemlist.scss'


const ItemList = ({productos}) => {
    
    return (
        <div>
            <h1 className='item__title font-bold text-3xl'>Productos</h1>
            <hr />
            <p className='font-sans hover:bg-violet-300 px-5'>Emprendimiento de sahumadores artesanales y más artículos para la renovación de energía.</p>
            <h2 className="text-xl px-5 font-bold">
                Los más buscados
            </h2>

            <section className="galeria">
                <div className="galeria__item"> 
                    {
                        productos.map((prod) => <ItemCard key={prod.id}  item={prod} />)
                    }
                </div>
            </section>
            
        </div>
    )
}

export default ItemList