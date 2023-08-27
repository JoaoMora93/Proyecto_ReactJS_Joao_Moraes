import { useContext } from "react"
import { CartContext } from "../../context/CartContext"



const Checkout = () => {
    const { cart, totalCompra } = useContext(CartContext)

    const handleSubmit = (e) => {
        e.preventDefault()
        // validaciones del formulario
        // if (!validaciones) return

        const orden = {
            cliente: values,
            items: cart.map(item => ({id: item.id, precio: item.precio, cantidad: item.cantidad, nombre: item.nombre}))
            total: totalCompra(),
            fhy: new Date()
        }

        console.log(orden)

    }

    return (
        <div>
            <h2>Terminar compra</h2>
            <hr />

            <form onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    className="form__input"
                    placeholder="Nombre"
                />

                <input 
                    type="text" 
                    className="form__input"
                    placeholder="Apellido"
                />

                <input 
                    type="email" 
                    className="form__input"
                    placeholder="Email"
                />

                <input 
                    type="text" 
                    className="form__input"
                    placeholder="Dirección"
                />

                <input 
                    type="text" 
                    className="form__input"
                    placeholder="Entre calles"
                />

                <button>Enviar</button>

            </form>

        </div>
    )
}

export default Checkout