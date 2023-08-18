import { useContext } from 'react'
import {FaShoppingCart} from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { CartContext } from '../../context/CartContext'

const CartWidget = () => {
    const { totalCantidad } = useContext(CartContext)

    return (
        <Link to="/cart" className="navbar__link">
            <FaShoppingCart />
            <span>{totalCantidad()}</span>
        </Link>
    )
}

export default CartWidget