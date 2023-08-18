import { useContext } from "react"
import { CartContext } from "../../context/CartContext"




const CartView = () => {
    const { cart, totalCompra } = useContext(CartContext)
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
                        <hr />
                    </div>
                ))
            }
            <div>
                <h4>Total: ${totalCompra()}</h4>    
            </div>
        </div>
    )
}

export default CartView