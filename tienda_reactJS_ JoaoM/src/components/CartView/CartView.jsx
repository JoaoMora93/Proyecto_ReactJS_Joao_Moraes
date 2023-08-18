import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import { FaTrashAlt } from 'react-icons/fa'




const CartView = () => {
    const { cart, totalCompra, vaciarCarrito, removerDelCarrito } = useContext(CartContext)
    return (
        <div>
            <h2>Tu conmpra</h2>
            <hr />

            {
                cart.map((item) => (
                    <div key={item.id}>
                        <h3>{item.nombre}</h3>
                        <img src={item.img} alt={item.nombre} />
                        <p>Precio: ${item.precio * item.cantidad}</p>
                        <p>Cantidad: {item.cantidad}</p>
                        <button onClick={() => removerDelCarrito(item.id)}><FaTrashAlt/></button>
                        <hr />
                    </div>
                ))
            }
            <div>
                <h4>Total: ${totalCompra()}</h4>
                <button onClick={vaciarCarrito}>Vaciar carrito</button>
            </div>
        </div>
    )
}

export default CartView