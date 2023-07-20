import './ItemCard.scss'
import { Link } from 'react-router-dom'


const ItemCard = ({item}) => {

    return (
            <div className="Item__Card m-10">
                <div className="Item__img">
                    <img className="saturate-150" src={item.img} alt={item.nombre} />
                </div>

                <div className='Item__text'>
                <h3>{item.nombre}</h3>
                <p>{item.descripcion}</p>
                </div>

                <div className="Item__price">
                    <p >Precio: {item.precio}</p>
                </div>

                <div className="Item__btn">
                    <Link to={`/detail/${item.id}`}>Ver más</Link>     
                </div>

            </div>
        
    )
}

export default ItemCard