import './itemDetail.scss'
import ItemCount from '../ItemCount/ItemCount'
import { useState } from 'react'


const ItemDetail = ({item}) => {

    const [cantidad, setCantidad] = useState(1)

    return(
        <div className="carta__detalle">
            <img className='detalle__img' src={item.img} alt={item.nombre} />
            <h2 className='detalle__titulo'>{item.nombre}</h2>
            <p className='detalle__parrafo'>{item.descripcion}</p>
            <p className='detalle__parrafo'>Precio: ${item.precio}</p>

            <ItemCount 
                max={item.stock}
                counter={cantidad}
                setCounter={setCantidad}
            />
        </div>
    )
}

export default ItemDetail