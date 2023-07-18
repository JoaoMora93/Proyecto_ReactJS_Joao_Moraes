import './ItemCard.scss'


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
                    <button>Ver más</button>     
                </div>

            </div>
        
    )
}

export default ItemCard