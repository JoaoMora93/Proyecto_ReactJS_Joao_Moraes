import './itemDetail.scss'
import ItemCount from '../ItemCount/ItemCount'
import { useContext, useState } from 'react'
import { CartContext } from '../../context/CartContext'


const ItemDetail = ({item}) => {
    const { agregarAlCarrito} = useContext(CartContext)
    const [cantidad, setCantidad] = useState(1)

    const handleAgregar = () => {
        const newItem = {
            ...item,
            cantidad
        }

        agregarAlCarrito(newItem)
    }

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
                agregar={handleAgregar}
            />
        </div>
    )
}

export default ItemDetail