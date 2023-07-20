import './ItemListContainer.scss'
import './ItemListContainer.css'
import { useEffect, useState } from 'react'
import { pedirDatos } from '../../Helpers/pedirDatos'
import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router-dom'

const ItemListContainer = () => {
    const [productos, setProductos] = useState([])

    const { categoryId } = useParams()

    useEffect(() => {
        pedirDatos()
            .then((res) => {
                setProductos(res)
            })
            .catch((error) => {
                console.log(error)
            })
    }, [])
        
    return (
        <div className="catalogo__contenedor">
            <ItemList productos={productos} />
        </div>
    )

}

export default ItemListContainer