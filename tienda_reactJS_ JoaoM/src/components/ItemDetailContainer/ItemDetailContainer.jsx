import { useEffect, useState } from "react"
import { pedirDatos } from "../../Helpers/pedirDatos"
import { useParams } from "react-router-dom"
import ItemDetail from "../ItemDetail/ItemDetail"
import { doc, getDoc } from "firebase/firestore"
import { db } from '../../firebase/config'
import './ItemDetailContainer.css'





const ItemDetailContainer = () => {
    const [item, setItem] = useState(null)
    const [loading, setLoading] = useState(true)

    const { itemId } = useParams()


    useEffect(() => {
        setLoading(true)

        //1- armar la ref.
        const itemRef = doc(db, "productos", itemId)
        //2- llamar a ref.
        getDoc(itemRef)
            .then((doc) => {
                setItem({
                    id: doc.id,
                    ...doc.data()
                })
            })
            .catch(e => console.log(e))
            .finally(() => setLoading(false))
    }, [])

    return (
        <div className="ItemDetailContainer">
            {
                loading
                    ? <h2>Cargando</h2>
                    :<ItemDetail item={item}/>
            }
        </div>
    )
}

export default ItemDetailContainer