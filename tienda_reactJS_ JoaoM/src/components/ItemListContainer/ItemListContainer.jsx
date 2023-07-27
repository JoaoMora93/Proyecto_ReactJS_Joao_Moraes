import './ItemListContainer.scss'
import './ItemListContainer.css'
import { useEffect, useState } from 'react'
import { pedirDatos } from '../../Helpers/pedirDatos'
import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router-dom'

const ItemListContainer = () => {
    const [productos, setProductos] = useState([])
    const[loading, setLoading] = useState(true)

    const { categoryId } = useParams()

    useEffect(() => {
        setLoading(true)

        pedirDatos()
            .then((res) => {
                if (categoryId) {
                    setProductos(res.filter(prod => prod.categoria === categoryId))
                } else {
                    setProductos(res)
                }
            })
            .catch((error) => {
                console.log(error)
            })
            .finally(() => {
                setLoading(false)
            })
    }, [categoryId])
        
    return (
        <div className="catalogo__contenedor">

            <h1 className='item__title text-inherit font-bold text-3xl pt-8'>Los más buscados</h1>
            <hr />
            <p className='ms-5 mt-10 mb-0 text-slate-50 font-sans hover:bg-violet-300 px-10'>Emprendimiento de sahumadores artesanales y más artículos para la renovación de energía.</p>
            {
                loading
                    ? <h2>Cargando...</h2>
                    :<ItemList productos={productos} />
            }
        </div>
    )

}

export default ItemListContainer