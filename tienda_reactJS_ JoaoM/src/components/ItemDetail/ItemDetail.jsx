import './itemDetail.scss'
import ItemCount from '../ItemCount/ItemCount'


const ItemDetail = ({item}) => {

    return(
        <div className="carta__detalle">
            <img className='detalle__img' src={item.img} alt={item.nombre} />
            <h2 className='detalle__titulo'>{item.nombre}</h2>
            <p className='detalle__parrafo'>{item.descripcion}</p>
            <p className='detalle__parrafo'>Precio: ${item.precio}</p>

            <ItemCount />
            <button className='detalle__btn'>Agregar</button>
        </div>
    )
}

export default ItemDetail