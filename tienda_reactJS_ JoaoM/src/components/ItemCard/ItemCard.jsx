import './ItemCard.scss'


const ItemCard = ({item}) => {

    return (
        <div className="Item__Card">
            <h4 className="Item__title px-5">{item.nombre}</h4>
            <img className="Item__img px-5" src={item.img} alt={item.nombre} />
            <p className="Item__description px-5">{item.descripcion}</p>
            <p className="Item__price px-5">Precio: {item.precio}</p>
            <button className="px-5">Ver más</button>
        </div>
    )
}

export default ItemCard