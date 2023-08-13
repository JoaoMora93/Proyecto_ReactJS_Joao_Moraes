import './ItemListContainer.scss'
import './ItemListContainer.css'
import { useEffect, useState } from 'react'
import { pedirDatos } from '../../Helpers/pedirDatos'
import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router-dom'
import { collection, getDocs, query, where }  from "firebase/firestore"
import { db } from '../../firebase/config'

const ItemListContainer = () => {
    const [productos, setProductos] = useState([])
    const[loading, setLoading] = useState(true)
    console.log(productos)
    const { categoryId } = useParams()

    useEffect(() => {
        setLoading(true)

        // 1. Armar la referencia a la colección (sync)
        const productosRef = collection(db, "productos")
        const q = categoryId
                        ? query(productosRef, where('categoria', '==', categoryId) )
                        :   productosRef
        // 2. Llamar a la referencia (async)
        getDocs(q)
            .then((resp) => {
                const docs = resp.docs.map((doc) => {
                    return {
                        id: doc.id,
                        ...doc.data()
                    }
                })
                setProductos(docs)
                console.log(q)
            })
            .catch(e => console.log(e))
            .finally(() => setLoading(false))
    }, [categoryId])
        
    return (
        <div className="contenedor">

            <div></div>

            <div className="catalogo__contenedor">
                <h1 className="catalogo__titulo">Los más buscados</h1>
                <hr />
                <p className="catalogo__parrafo">Emprendimiento de sahumadores artesanales y más artículos para la renovación de energía.</p>

                <div>
                    {
                        loading
                            ? <h2>Cargando...</h2>
                            :<ItemList productos={productos} />
                    }
                </div>
                
            </div>

            <div></div>
            
        </div>
    )

}

export default ItemListContainer