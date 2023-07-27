import './ItemListContainer.scss'
import './ItemListContainer.css'
import { useEffect, useState } from 'react'
import { pedirDatos } from '../../Helpers/pedirDatos'
import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router-dom'
import { collection, getDocs}  from "firebase/firestore"
import { db } from '../../firebase/config'

const ItemListContainer = () => {
    const [productos, setProductos] = useState([])
    const[loading, setLoading] = useState(true)

    const { categoryId } = useParams()

    useEffect(() => {
        setLoading(true)

        // 1. Armar la referencia a la colección (sync)
        const productosRef = collection(db, "productos")
        // 2. Llamar a la referencia (async)
        getDocs(productosRef)
            .then((resp) => {
                const docs = resp.docs.map((doc) => {
                    return {
                        id: doc.id,
                        ...doc.data()
                    }
                })
                setProductos(docs)
            })
            .catch(e => console.log(e))
            .finally(() => setLoading(false))
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