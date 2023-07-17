import ItemCard from "../ItemCard/ItemCard"
import './Itemlist.scss'


const ItemList = ({productos}) => {
    
    return (
        <div>
            <h1 className='item__title font-bold text-3xl'>Productos</h1>
            <hr />
            <p className='font-sans hover:bg-violet-300'>Emprendimiento de sahumadores artesanales y más artículos para la renovación de energía.</p>
            <h2 className="text-xl">
                Los más buscados
            </h2>

            <div> 
                {
                    productos.map((prod) => <ItemCard key={prod.id}  item={prod} />)
                }
            </div>
        </div>
    )
}

export default ItemList