import ItemCard from "../ItemCard/ItemCard"
import './Itemlist.scss'


const ItemList = ({productos}) => {
    
    return (
        <div>
            <h1 className='item__title text-inherit font-bold text-3xl pt-8'>Productos</h1>
            <hr />
            <p className='ms-5 mt-10 mb-0 text-slate-50 font-sans hover:bg-violet-300 px-10'>Emprendimiento de sahumadores artesanales y más artículos para la renovación de energía.</p>
            <h2 className="ms-20 mt-20 mb-0 text-slate-50 text-2xl px-5 font-bold">
                Los más buscados
            </h2>

            

            <section className="galeria">
                <div className="galeria__item ms-10"> 
                    {
                        productos.map((prod) => <ItemCard key={prod.id}  item={prod} />)
                    }
                </div>
            </section>
            
        </div>
    )
}

export default ItemList