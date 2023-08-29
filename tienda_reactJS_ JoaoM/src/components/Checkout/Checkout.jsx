import { useContext, useState } from "react"
import { CartContext } from "../../context/CartContext"
import { collection, addDoc } from "firebase/firestore"
import { db } from "../../firebase/config"
import { Link } from 'react-router-dom'



const Checkout = () => {
    const { cart, totalCompra, vaciarCarrito } = useContext(CartContext)

    const [orderId, setOrderId] = useState(null)
    const [values, setValues] = useState({
        nombre: '',
        direccion:'',
        email:''
    })

    const handleInputChange = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        // validaciones del formulario
        // if (!validaciones) return

        const orden = {
            cliente: values,
            items: cart.map(item => ({id: item.id, precio: item.precio, cantidad: item.cantidad, nombre: item.nombre})),
            total: totalCompra(),
            fhy: new Date()
        }

        console.log(orden)
        // enviarlo a firebase
        const ordersRef = collection(db, "orders")

        addDoc(ordersRef, orden)
            .then((doc) => {
                console.log(doc.id)
                vaciarCarrito()
                setOrderId(doc.id)
            })
    }

    if (orderId) {
        return (
            <div>
                <h2>Tu compra se realizó con éxito</h2>
                <hr/>
                <p>Tu número de orden es: <strong>{orderId}</strong></p>

                <Link to="/">Volver</Link>
            </div>
        )
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