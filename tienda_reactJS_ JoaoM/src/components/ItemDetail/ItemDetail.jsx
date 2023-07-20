


const ItemDetail = ({item}) => {

    return(
        <div>
            <h2>{item.nombre}</h2>
            <img src={item.img} alt={item.nombre} />
            <p>{item.descripcion}</p>
            <p>Precio: ${item.precio}</p>

            <button>Agregar</button>
        </div>
    )
}

export default ItemDetail